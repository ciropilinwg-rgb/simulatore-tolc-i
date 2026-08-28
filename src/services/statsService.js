import {
  buildAppUser,
  listQuestionStatDocs,
  listQuizSessionDocs,
  requireVerifiedUser,
  syncUserProfile
} from './firebaseRepository.js';
import {
  computeStudyFramework,
  formatCoveragePercentage,
  getQuestionById,
  getTolcPoolQuestions,
  mergeQuestionStatsByCanonicalId,
  QUESTION_BANK_VERSION
} from '../data/questionCatalog.js';

export { computeStudyFramework, formatCoveragePercentage };

function toNumber(value) {
  return Number.isFinite(value) ? value : Number(value || 0);
}

function roundPercentage(correct, wrong) {
  const total = correct + wrong;
  if (total <= 0) {
    return 0;
  }
  return Math.round((wrong / total) * 100);
}

function compareIsoDesc(a, b) {
  return String(b || '').localeCompare(String(a || ''));
}

export async function getStatsOverview() {
  const currentUser = await requireVerifiedUser();
  const profile = await syncUserProfile(currentUser);
  const [statsDocs, sessionDocs] = await Promise.all([
    listQuestionStatDocs(currentUser.uid),
    listQuizSessionDocs(currentUser.uid)
  ]);

  const completedSessions = sessionDocs
    .filter((session) => session.status === 'finished' || session.finishedAt)
    .sort((left, right) => compareIsoDesc(left.finishedAt, right.finishedAt));

  const mergedStatsMap = mergeQuestionStatsByCanonicalId(statsDocs);
  const mergedStats = Object.values(mergedStatsMap);

  const totals = mergedStats.reduce((accumulator, item) => {
    const corrette = toNumber(item.numeroRisposteCorrette);
    const errate = toNumber(item.numeroRisposteErrate);

    accumulator.domandeMonitorate += 1;
    accumulator.risposteCorrette += corrette;
    accumulator.risposteErrate += errate;

    return accumulator;
  }, {
    quizCompletati: completedSessions.length,
    accuratezzaMedia: 0,
    domandeMonitorate: 0,
    risposteCorrette: 0,
    risposteErrate: 0,
    nonRisposte: 0,
    domandeNeiQuiz: 0
  });

  completedSessions.forEach((session) => {
    totals.nonRisposte += toNumber(session.unansweredCount);
    totals.domandeNeiQuiz += toNumber(session.totalQuestions);
  });

  if (completedSessions.length > 0) {
    const sumPercentages = completedSessions.reduce(
      (sum, session) => sum + toNumber(session.percentage),
      0
    );
    totals.accuratezzaMedia = Math.round(sumPercentages / completedSessions.length);
  }

  const hardestQuestions = mergedStats
    .map((item) => {
      const question = getQuestionById(item.questionId);
      const corrette = toNumber(item.numeroRisposteCorrette);
      const errate = toNumber(item.numeroRisposteErrate);
      const totale = corrette + errate;

      if (!question || totale <= 0) {
        return null;
      }

      return {
        questionId: String(question.id),
        materia: question.materia,
        domanda: question.domanda,
        percentualeErrore: roundPercentage(corrette, errate),
        numeroVolteSvolta: totale,
        erroriAssoluti: errate
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      if (right.percentualeErrore !== left.percentualeErrore) {
        return right.percentualeErrore - left.percentualeErrore;
      }
      return right.erroriAssoluti - left.erroriAssoluti;
    })
    .slice(0, 5);

  const leastPracticedQuestions = mergedStats.length === 0
    ? []
    : mergedStats
      .map((item) => {
        const question = getQuestionById(item.questionId);
        const corrette = toNumber(item.numeroRisposteCorrette);
        const errate = toNumber(item.numeroRisposteErrate);

        if (!question) {
          return null;
        }

        return {
          questionId: String(question.id),
          materia: question.materia,
          domanda: question.domanda,
          numeroVolteSvolta: corrette + errate
        };
      })
      .filter(Boolean)
      .sort((left, right) => {
        if (left.numeroVolteSvolta !== right.numeroVolteSvolta) {
          return left.numeroVolteSvolta - right.numeroVolteSvolta;
        }
        return left.materia.localeCompare(right.materia, 'it');
      })
      .slice(0, 5);

  const studyFramework = computeStudyFramework(mergedStatsMap, getTolcPoolQuestions());

  return {
    overview: {
      user: buildAppUser(currentUser, profile),
      studyFramework,
      totals,
      hardestQuestions,
      leastPracticedQuestions
    }
  };
}

export async function getStatsHistory(limit = 20) {
  const currentUser = await requireVerifiedUser();
  const sessions = await listQuizSessionDocs(currentUser.uid);

  const items = sessions
    .filter((session) => session.status === 'finished' || session.finishedAt)
    .sort((left, right) => compareIsoDesc(left.finishedAt, right.finishedAt))
    .slice(0, limit)
    .map((session) => ({
      sessionKey: session.sessionKey || session.id,
      selectionMode: session.selectionMode || 'RANDOM',
      selectedSubjects: Array.isArray(session.selectedSubjects) ? session.selectedSubjects : [],
      totalQuestions: toNumber(session.totalQuestions),
      correctCount: toNumber(session.correctCount),
      wrongCount: toNumber(session.wrongCount),
      unansweredCount: toNumber(session.unansweredCount),
      percentage: toNumber(session.percentage),
      finishedAt: session.finishedAt || session.updatedAt || session.createdAt || ''
    }));

  return { items };
}
