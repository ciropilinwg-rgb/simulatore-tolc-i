import { promises as fs } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { maskEmail, nowIso } from './security.mjs';

async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function textToHtml(text) {
  return text
    .split('\n\n')
    .map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll('\n', '<br />')}</p>`)
    .join('');
}

export function createMailer({
  outboxDir,
  appBaseUrl,
  resendApiKey = process.env.RESEND_API_KEY || '',
  mailFrom = process.env.MAIL_FROM || ''
}) {
  const deliveryMode = resendApiKey && mailFrom ? 'resend' : 'local_outbox';

  async function writeMessage({ to, subject, category, actionUrl, text }) {
    await ensureDirectory(outboxDir);

    const id = randomUUID();
    const createdAt = nowIso();
    const payload = {
      id,
      to,
      maskedTo: maskEmail(to),
      subject,
      category,
      actionUrl,
      text,
      createdAt
    };

    const filePath = path.join(outboxDir, `${createdAt.replace(/[:.]/g, '-')}_${category}_${id}.json`);
    await fs.writeFile(filePath, JSON.stringify(payload, null, 2), 'utf8');

    return {
      deliveryMode: 'local_outbox',
      id,
      createdAt
    };
  }

  async function sendWithResend({ to, subject, text }) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'simulatore-concorso/1.0'
      },
      body: JSON.stringify({
        from: mailFrom,
        to: [to],
        subject,
        text,
        html: textToHtml(text)
      })
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const reason = payload?.message || payload?.error?.message || `HTTP ${response.status}`;
      throw new Error(`Invio email fallito (${reason}).`);
    }

    return {
      deliveryMode: 'resend',
      id: payload?.id || null,
      createdAt: nowIso()
    };
  }

  async function deliverMessage({ to, subject, category, actionUrl, text }) {
    if (deliveryMode === 'resend') {
      return sendWithResend({ to, subject, text });
    }

    return writeMessage({ to, subject, category, actionUrl, text });
  }

  return {
    deliveryMode,

    async sendVerificationEmail({ email, firstName, token }) {
      const actionUrl = `${appBaseUrl}/verify-email?token=${encodeURIComponent(token)}`;
      return deliverMessage({
        to: email,
        subject: 'Conferma il tuo indirizzo email',
        category: 'verify_email',
        actionUrl,
        text: `Ciao ${firstName},\n\nconferma il tuo indirizzo email aprendo questo link:\n${actionUrl}\n\nSe non hai richiesto la registrazione, puoi ignorare questo messaggio.`
      });
    },

    async sendPasswordResetEmail({ email, firstName, token }) {
      const actionUrl = `${appBaseUrl}/reset-password?token=${encodeURIComponent(token)}`;
      return deliverMessage({
        to: email,
        subject: 'Reimposta la tua password',
        category: 'reset_password',
        actionUrl,
        text: `Ciao ${firstName},\n\npuoi impostare una nuova password aprendo questo link:\n${actionUrl}\n\nSe non hai richiesto il reset, ignora questo messaggio.`
      });
    },

    async listMessages() {
      if (deliveryMode !== 'local_outbox') {
        return [];
      }

      await ensureDirectory(outboxDir);
      const fileNames = await fs.readdir(outboxDir);
      const entries = await Promise.all(
        fileNames
          .filter((fileName) => fileName.endsWith('.json'))
          .map(async (fileName) => {
            const filePath = path.join(outboxDir, fileName);
            const raw = await fs.readFile(filePath, 'utf8');
            return JSON.parse(raw);
          })
      );

      return entries.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
    },

    async clearMessages() {
      if (deliveryMode !== 'local_outbox') {
        return;
      }

      await ensureDirectory(outboxDir);
      const fileNames = await fs.readdir(outboxDir);
      await Promise.all(
        fileNames
          .filter((fileName) => fileName.endsWith('.json'))
          .map((fileName) => fs.unlink(path.join(outboxDir, fileName)))
      );
    }
  };
}
