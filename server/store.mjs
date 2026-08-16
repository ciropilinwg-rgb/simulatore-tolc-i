import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { SCORING_CONFIG } from '../src/engine/scoring.js';
import { getQuestionSnapshot, isCorrectAnswerText } from './questionCatalog.mjs';
import { HttpError } from './httpUtils.mjs';
import { nowIso } from './security.mjs';

function ensureParentDirectory(filePath) {
  mkdirSync(path.dirname(filePath), { recursive: true });
}

function parseJsonArray(rawValue) {
  try {
    const parsed = JSON.parse(rawValue || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function createStore({ dbPath }) {
  ensureParentDirectory(dbPath);

  const db = new DatabaseSync(dbPath);
  db.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      email_normalized TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      email_verified_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      last_login_at TEXT,
      status TEXT NOT NULL DEFAULT 'pending'
    );

    CREATE TABLE IF NOT EXISTS auth_tokens (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      purpose TEXT NOT NULL,
      token_hash TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      consumed_at TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_auth_tokens_user_purpose
      ON auth_tokens(user_id, purpose, consumed_at, expires_at);

    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      session_hash TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      last_seen_at TEXT NOT NULL,
      revoked_at TEXT,
      ip_address TEXT,
      user_agent TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_sessions_user
      ON sessions(user_id, revoked_at, expires_at);

    CREATE TABLE IF NOT EXISTS user_question_stats (
      user_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      times_shown INTEGER NOT NULL DEFAULT 0,
      correct_count INTEGER NOT NULL DEFAULT 0,
      wrong_count INTEGER NOT NULL DEFAULT 0,
      last_shown_at TEXT,
      last_answered_at TEXT,
      PRIMARY KEY (user_id, question_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      session_key TEXT NOT NULL,
      selection_mode TEXT NOT NULL,
      requested_count INTEGER NOT NULL,
      selected_subjects_json TEXT NOT NULL,
      question_ids_json TEXT NOT NULL,
      started_at TEXT NOT NULL,
      finished_at TEXT,
      total_questions INTEGER NOT NULL DEFAULT 0,
      correct_count INTEGER NOT NULL DEFAULT 0,
      wrong_count INTEGER NOT NULL DEFAULT 0,
      unanswered_count INTEGER NOT NULL DEFAULT 0,
      percentage INTEGER NOT NULL DEFAULT 0,
      score REAL NOT NULL DEFAULT 0,
      max_score REAL NOT NULL DEFAULT 0,
      UNIQUE (user_id, session_key),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user
      ON quiz_attempts(user_id, started_at DESC);

    CREATE TABLE IF NOT EXISTS quiz_attempt_responses (
      attempt_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      question_subject TEXT NOT NULL,
      question_prompt TEXT NOT NULL,
      correct_text TEXT NOT NULL,
      selected_text TEXT,
      is_correct INTEGER,
      shown_at TEXT NOT NULL,
      answered_at TEXT,
      PRIMARY KEY (attempt_id, question_id),
      FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  const statements = {
    insertUser: db.prepare(`
      INSERT INTO users (
        id, first_name, last_name, email, email_normalized, phone,
        password_hash, created_at, updated_at, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `),
    getUserByEmail: db.prepare(`
      SELECT * FROM users WHERE email_normalized = ?
    `),
    getUserById: db.prepare(`
      SELECT * FROM users WHERE id = ?
    `),
    updateUserVerified: db.prepare(`
      UPDATE users
      SET email_verified_at = ?, updated_at = ?, status = 'active'
      WHERE id = ?
    `),
    updateUserLogin: db.prepare(`
      UPDATE users
      SET last_login_at = ?, updated_at = ?
      WHERE id = ?
    `),
    updateUserPassword: db.prepare(`
      UPDATE users
      SET password_hash = ?, updated_at = ?
      WHERE id = ?
    `),
    invalidateTokensByPurpose: db.prepare(`
      UPDATE auth_tokens
      SET consumed_at = ?
      WHERE user_id = ? AND purpose = ? AND consumed_at IS NULL
    `),
    insertAuthToken: db.prepare(`
      INSERT INTO auth_tokens (
        id, user_id, purpose, token_hash, created_at, expires_at
      ) VALUES (?, ?, ?, ?, ?, ?)
    `),
    getTokenForConsume: db.prepare(`
      SELECT * FROM auth_tokens
      WHERE purpose = ? AND token_hash = ? AND consumed_at IS NULL AND expires_at > ?
    `),
    consumeToken: db.prepare(`
      UPDATE auth_tokens SET consumed_at = ? WHERE id = ?
    `),
    insertSession: db.prepare(`
      INSERT INTO sessions (
        id, user_id, session_hash, created_at, expires_at, last_seen_at, ip_address, user_agent
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `),
    getSessionWithUser: db.prepare(`
      SELECT
        sessions.id AS session_id,
        sessions.user_id,
        sessions.expires_at,
        sessions.last_seen_at,
        users.first_name,
        users.last_name,
        users.email,
        users.phone,
        users.email_verified_at,
        users.status
      FROM sessions
      INNER JOIN users ON users.id = sessions.user_id
      WHERE sessions.session_hash = ?
        AND sessions.revoked_at IS NULL
        AND sessions.expires_at > ?
      LIMIT 1
    `),
    touchSession: db.prepare(`
      UPDATE sessions
      SET last_seen_at = ?
      WHERE id = ?
    `),
    revokeSession: db.prepare(`
      UPDATE sessions
      SET revoked_at = ?
      WHERE session_hash = ? AND revoked_at IS NULL
    `),
    revokeSessionsByUser: db.prepare(`
      UPDATE sessions
      SET revoked_at = ?
      WHERE user_id = ? AND revoked_at IS NULL
    `),
    insertAttempt: db.prepare(`
      INSERT INTO quiz_attempts (
        id, user_id, session_key, selection_mode, requested_count,
        selected_subjects_json, question_ids_json, started_at, total_questions, max_score
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),
    getAttemptBySessionKey: db.prepare(`
      SELECT * FROM quiz_attempts WHERE user_id = ? AND session_key = ? LIMIT 1
    `),
    getResponseByAttemptQuestion: db.prepare(`
      SELECT * FROM quiz_attempt_responses WHERE attempt_id = ? AND question_id = ? LIMIT 1
    `),
    insertAttemptResponse: db.prepare(`
      INSERT INTO quiz_attempt_responses (
        attempt_id, user_id, question_id, question_subject, question_prompt,
        correct_text, selected_text, is_correct, shown_at, answered_at
      ) VALUES (?, ?, ?, ?, ?, ?, NULL, NULL, ?, NULL)
    `),
    updateAttemptResponseAnswer: db.prepare(`
      UPDATE quiz_attempt_responses
      SET selected_text = ?, is_correct = ?, answered_at = ?
      WHERE attempt_id = ? AND question_id = ? AND answered_at IS NULL
    `),
    upsertShownStats: db.prepare(`
      INSERT INTO user_question_stats (
        user_id, question_id, times_shown, correct_count, wrong_count, last_shown_at, last_answered_at
      ) VALUES (?, ?, 1, 0, 0, ?, NULL)
      ON CONFLICT(user_id, question_id) DO UPDATE SET
        times_shown = times_shown + 1,
        last_shown_at = excluded.last_shown_at
    `),
    upsertAnswerStatsAfterShown: db.prepare(`
      INSERT INTO user_question_stats (
        user_id, question_id, times_shown, correct_count, wrong_count, last_shown_at, last_answered_at
      ) VALUES (?, ?, 0, ?, ?, NULL, ?)
      ON CONFLICT(user_id, question_id) DO UPDATE SET
        correct_count = correct_count + excluded.correct_count,
        wrong_count = wrong_count + excluded.wrong_count,
        last_answered_at = excluded.last_answered_at
    `),
    upsertAnswerStatsWithShown: db.prepare(`
      INSERT INTO user_question_stats (
        user_id, question_id, times_shown, correct_count, wrong_count, last_shown_at, last_answered_at
      ) VALUES (?, ?, 1, ?, ?, ?, ?)
      ON CONFLICT(user_id, question_id) DO UPDATE SET
        times_shown = times_shown + 1,
        correct_count = correct_count + excluded.correct_count,
        wrong_count = wrong_count + excluded.wrong_count,
        last_shown_at = excluded.last_shown_at,
        last_answered_at = excluded.last_answered_at
    `),
    getQuestionStatsRows: db.prepare(`
      SELECT * FROM user_question_stats WHERE user_id = ?
    `),
    getAttemptsSummary: db.prepare(`
      SELECT
        COUNT(*) AS attempts_count,
        COALESCE(SUM(total_questions), 0) AS total_questions,
        COALESCE(SUM(correct_count), 0) AS correct_count,
        COALESCE(SUM(wrong_count), 0) AS wrong_count,
        COALESCE(SUM(unanswered_count), 0) AS unanswered_count,
        COALESCE(AVG(percentage), 0) AS average_percentage,
        COALESCE(AVG(score), 0) AS average_score
      FROM quiz_attempts
      WHERE user_id = ? AND finished_at IS NOT NULL
    `),
    getRecentAttempts: db.prepare(`
      SELECT
        session_key,
        selection_mode,
        requested_count,
        selected_subjects_json,
        started_at,
        finished_at,
        total_questions,
        correct_count,
        wrong_count,
        unanswered_count,
        percentage,
        score,
        max_score
      FROM quiz_attempts
      WHERE user_id = ? AND finished_at IS NOT NULL
      ORDER BY started_at DESC
      LIMIT ?
    `),
    getAttemptAnswerCounts: db.prepare(`
      SELECT
        SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) AS correct_count,
        SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) AS wrong_count,
        SUM(CASE WHEN answered_at IS NOT NULL THEN 1 ELSE 0 END) AS answered_count
      FROM quiz_attempt_responses
      WHERE attempt_id = ?
    `),
    finishAttempt: db.prepare(`
      UPDATE quiz_attempts
      SET finished_at = ?, total_questions = ?, correct_count = ?, wrong_count = ?,
          unanswered_count = ?, percentage = ?, score = ?, max_score = ?
      WHERE id = ?
    `)
  };

  function transaction(work) {
    db.exec('BEGIN IMMEDIATE');
    try {
      const result = work();
      db.exec('COMMIT');
      return result;
    } catch (error) {
      try {
        db.exec('ROLLBACK');
      } catch {
        // ignore rollback errors
      }
      throw error;
    }
  }

  function formatUser(row) {
    if (!row) {
      return null;
    }

    return {
      id: row.id || row.user_id,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      phone: row.phone,
      emailVerified: Boolean(row.email_verified_at),
      emailVerifiedAt: row.email_verified_at || null,
      status: row.status
    };
  }

  function getAttemptOrThrow(userId, sessionKey) {
    const attempt = statements.getAttemptBySessionKey.get(userId, sessionKey);
    if (!attempt) {
      throw new HttpError(404, 'SESSION_NOT_FOUND', 'La sessione indicata non è disponibile.');
    }
    return attempt;
  }

  function assertQuestionBelongsToAttempt(attempt, questionId) {
    const questionIds = parseJsonArray(attempt.question_ids_json).map((value) => String(value));
    if (!questionIds.includes(String(questionId))) {
      throw new HttpError(400, 'QUESTION_NOT_IN_SESSION', 'La domanda indicata non appartiene a questa esercitazione.');
    }
  }

  return {
    close() {
      db.close();
    },

    getUserByEmail(emailNormalized) {
      return formatUser(statements.getUserByEmail.get(emailNormalized));
    },

    getUserRowByEmail(emailNormalized) {
      return statements.getUserByEmail.get(emailNormalized) || null;
    },

    getUserById(userId) {
      return formatUser(statements.getUserById.get(userId));
    },

    getUserRowById(userId) {
      return statements.getUserById.get(userId) || null;
    },

    createUser({ firstName, lastName, email, emailNormalized, phone, passwordHash }) {
      const createdAt = nowIso();
      const id = randomUUID();

      statements.insertUser.run(
        id,
        firstName,
        lastName,
        email,
        emailNormalized,
        phone,
        passwordHash,
        createdAt,
        createdAt
      );

      return this.getUserById(id);
    },

    markUserVerified(userId) {
      const now = nowIso();
      statements.updateUserVerified.run(now, now, userId);
      return this.getUserById(userId);
    },

    touchUserLogin(userId) {
      const now = nowIso();
      statements.updateUserLogin.run(now, now, userId);
    },

    updateUserPassword(userId, passwordHash) {
      const now = nowIso();
      statements.updateUserPassword.run(passwordHash, now, userId);
    },

    replaceAuthToken({ userId, purpose, tokenHash, expiresAt }) {
      const now = nowIso();
      transaction(() => {
        statements.invalidateTokensByPurpose.run(now, userId, purpose);
        statements.insertAuthToken.run(randomUUID(), userId, purpose, tokenHash, now, expiresAt);
      });
    },

    consumeAuthToken({ purpose, tokenHash }) {
      return transaction(() => {
        const now = nowIso();
        const token = statements.getTokenForConsume.get(purpose, tokenHash, now);
        if (!token) {
          return null;
        }

        statements.consumeToken.run(now, token.id);
        return token;
      });
    },

    createSession({ userId, sessionHash, expiresAt, ipAddress, userAgent }) {
      const now = nowIso();
      statements.insertSession.run(
        randomUUID(),
        userId,
        sessionHash,
        now,
        expiresAt,
        now,
        ipAddress,
        userAgent || ''
      );
    },

    getSessionUser(sessionHash) {
      const row = statements.getSessionWithUser.get(sessionHash, nowIso());
      if (!row) {
        return null;
      }

      statements.touchSession.run(nowIso(), row.session_id);

      return {
        sessionId: row.session_id,
        user: {
          id: row.user_id,
          firstName: row.first_name,
          lastName: row.last_name,
          email: row.email,
          phone: row.phone,
          emailVerified: Boolean(row.email_verified_at),
          emailVerifiedAt: row.email_verified_at || null,
          status: row.status
        }
      };
    },

    revokeSession(sessionHash) {
      statements.revokeSession.run(nowIso(), sessionHash);
    },

    revokeSessionsForUser(userId) {
      statements.revokeSessionsByUser.run(nowIso(), userId);
    },

    getQuestionStatsMap(userId) {
      const rows = statements.getQuestionStatsRows.all(userId);
      return Object.fromEntries(
        rows.map((row) => [
          String(row.question_id),
          {
            numeroVolteProposta: row.times_shown,
            numeroVolteSvolta: row.correct_count + row.wrong_count,
            numeroRisposteCorrette: row.correct_count,
            numeroRisposteErrate: row.wrong_count,
            lastShownAt: row.last_shown_at,
            lastAnsweredAt: row.last_answered_at
          }
        ])
      );
    },

    createQuizSession({ userId, sessionKey, selectionMode, requestedCount, selectedSubjects, questionIds }) {
      const now = nowIso();
      statements.insertAttempt.run(
        randomUUID(),
        userId,
        sessionKey,
        selectionMode,
        requestedCount,
        JSON.stringify(selectedSubjects || []),
        JSON.stringify(questionIds || []),
        now,
        Array.isArray(questionIds) ? questionIds.length : 0,
        (Array.isArray(questionIds) ? questionIds.length : 0) * SCORING_CONFIG.correct
      );
    },

    recordQuestionShown({ userId, sessionKey, questionId }) {
      const snapshot = getQuestionSnapshot(questionId);
      if (!snapshot) {
        throw new HttpError(400, 'QUESTION_NOT_FOUND', 'La domanda indicata non esiste.');
      }

      return transaction(() => {
        const attempt = getAttemptOrThrow(userId, sessionKey);
        assertQuestionBelongsToAttempt(attempt, questionId);
        const existing = statements.getResponseByAttemptQuestion.get(attempt.id, String(questionId));
        if (existing) {
          return { recorded: false };
        }

        const now = nowIso();
        statements.insertAttemptResponse.run(
          attempt.id,
          userId,
          String(questionId),
          snapshot.materia,
          snapshot.domanda,
          snapshot.rispostaCorretta,
          now
        );
        statements.upsertShownStats.run(userId, String(questionId), now);
        return { recorded: true };
      });
    },

    recordAnswer({ userId, sessionKey, questionId, selectedText }) {
      const snapshot = getQuestionSnapshot(questionId);
      if (!snapshot) {
        throw new HttpError(400, 'QUESTION_NOT_FOUND', 'La domanda indicata non esiste.');
      }

      const isCorrect = isCorrectAnswerText(questionId, selectedText);

      return transaction(() => {
        const attempt = getAttemptOrThrow(userId, sessionKey);
        assertQuestionBelongsToAttempt(attempt, questionId);
        const existing = statements.getResponseByAttemptQuestion.get(attempt.id, String(questionId));
        const now = nowIso();

        let insertedShownRow = false;
        if (!existing) {
          statements.insertAttemptResponse.run(
            attempt.id,
            userId,
            String(questionId),
            snapshot.materia,
            snapshot.domanda,
            snapshot.rispostaCorretta,
            now
          );
          insertedShownRow = true;
        } else if (existing.answered_at) {
          return { recorded: false, isCorrect: Boolean(existing.is_correct) };
        }

        statements.updateAttemptResponseAnswer.run(
          selectedText,
          isCorrect ? 1 : 0,
          now,
          attempt.id,
          String(questionId)
        );

        const correctIncrement = isCorrect ? 1 : 0;
        const wrongIncrement = isCorrect ? 0 : 1;

        if (insertedShownRow) {
          statements.upsertAnswerStatsWithShown.run(
            userId,
            String(questionId),
            correctIncrement,
            wrongIncrement,
            now,
            now
          );
        } else {
          statements.upsertAnswerStatsAfterShown.run(
            userId,
            String(questionId),
            correctIncrement,
            wrongIncrement,
            now
          );
        }

        return { recorded: true, isCorrect };
      });
    },

    finishQuizSession({ userId, sessionKey }) {
      return transaction(() => {
        const attempt = getAttemptOrThrow(userId, sessionKey);
        const counts = statements.getAttemptAnswerCounts.get(attempt.id) || {
          correct_count: 0,
          wrong_count: 0,
          answered_count: 0
        };
        const questionIds = parseJsonArray(attempt.question_ids_json);
        const totalQuestions = questionIds.length;
        const correctCount = Number(counts.correct_count || 0);
        const wrongCount = Number(counts.wrong_count || 0);
        const answeredCount = Number(counts.answered_count || 0);
        const unansweredCount = Math.max(0, totalQuestions - answeredCount);
        const percentage = totalQuestions > 0
          ? Math.round((correctCount / totalQuestions) * 100)
          : 0;
        const score =
          correctCount * SCORING_CONFIG.correct +
          wrongCount * SCORING_CONFIG.wrong +
          unansweredCount * SCORING_CONFIG.unanswered;
        const finishedAt = nowIso();

        statements.finishAttempt.run(
          finishedAt,
          totalQuestions,
          correctCount,
          wrongCount,
          unansweredCount,
          percentage,
          score,
          totalQuestions * SCORING_CONFIG.correct,
          attempt.id
        );

        return {
          totalQuestions,
          correctCount,
          wrongCount,
          unansweredCount,
          percentage,
          score,
          maxScore: totalQuestions * SCORING_CONFIG.correct
        };
      });
    },

    getStatsOverview(userId) {
      const user = this.getUserById(userId);
      const attempts = statements.getAttemptsSummary.get(userId) || {};
      const questionStats = statements.getQuestionStatsRows.all(userId);

      const hardestQuestions = questionStats
        .map((row) => {
          const attemptsCount = row.correct_count + row.wrong_count;
          const snapshot = getQuestionSnapshot(row.question_id);
          return {
            questionId: row.question_id,
            materia: snapshot?.materia || 'Materia',
            domanda: snapshot?.domanda || `Domanda ${row.question_id}`,
            percentualeErrore: attemptsCount > 0 ? Math.round((row.wrong_count / attemptsCount) * 100) : 0,
            numeroVolteSvolta: attemptsCount,
            numeroRisposteErrate: row.wrong_count,
            numeroRisposteCorrette: row.correct_count,
            numeroVolteProposta: row.times_shown
          };
        })
        .filter((item) => item.numeroRisposteErrate + item.numeroRisposteCorrette > 0)
        .sort((left, right) => {
          if (right.percentualeErrore !== left.percentualeErrore) {
            return right.percentualeErrore - left.percentualeErrore;
          }
          return right.numeroRisposteErrate - left.numeroRisposteErrate;
        })
        .slice(0, 5);

      const leastPracticedQuestions = questionStats
        .map((row) => {
          const snapshot = getQuestionSnapshot(row.question_id);
          return {
            questionId: row.question_id,
            materia: snapshot?.materia || 'Materia',
            domanda: snapshot?.domanda || `Domanda ${row.question_id}`,
            numeroVolteSvolta: row.correct_count + row.wrong_count,
            numeroVolteProposta: row.times_shown,
            numeroRisposteCorrette: row.correct_count,
            numeroRisposteErrate: row.wrong_count
          };
        })
        .sort((left, right) => {
          if (left.numeroVolteSvolta !== right.numeroVolteSvolta) {
            return left.numeroVolteSvolta - right.numeroVolteSvolta;
          }
          return left.numeroVolteProposta - right.numeroVolteProposta;
        })
        .slice(0, 5);

      return {
        user,
        totals: {
          quizCompletati: Number(attempts.attempts_count || 0),
          domandeNeiQuiz: Number(attempts.total_questions || 0),
          risposteCorrette: Number(attempts.correct_count || 0),
          risposteErrate: Number(attempts.wrong_count || 0),
          nonRisposte: Number(attempts.unanswered_count || 0),
          accuratezzaMedia: Math.round(Number(attempts.average_percentage || 0)),
          domandeMonitorate: questionStats.length
        },
        hardestQuestions,
        leastPracticedQuestions
      };
    },

    getQuizHistory(userId, limit = 20) {
      return statements.getRecentAttempts
        .all(userId, limit)
        .map((row) => ({
          sessionKey: row.session_key,
          selectionMode: row.selection_mode,
          requestedCount: row.requested_count,
          selectedSubjects: parseJsonArray(row.selected_subjects_json),
          startedAt: row.started_at,
          finishedAt: row.finished_at,
          totalQuestions: row.total_questions,
          correctCount: row.correct_count,
          wrongCount: row.wrong_count,
          unansweredCount: row.unanswered_count,
          percentage: row.percentage,
          score: row.score,
          maxScore: row.max_score
        }));
    }
  };
}
