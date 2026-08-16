import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

export const PASSWORD_POLICY = {
  minLength: 8,
  requiresLetter: true,
  requiresNumber: true
};

export function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

export function normalizePhone(phone) {
  return String(phone || '').trim().replace(/\s+/g, ' ');
}

export function normalizeComparableText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

export function validateEmailFormat(email) {
  const normalized = normalizeEmail(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}

export function validatePhoneFormat(phone) {
  const normalized = normalizePhone(phone);
  if (!/^\+?[0-9().\-\s]{8,20}$/.test(normalized)) {
    return false;
  }

  const digits = normalized.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

export function validatePasswordStrength(password) {
  const value = String(password || '');
  if (value.length < PASSWORD_POLICY.minLength) {
    return {
      valid: false,
      message: `La password deve contenere almeno ${PASSWORD_POLICY.minLength} caratteri.`
    };
  }

  if (PASSWORD_POLICY.requiresLetter && !/[A-Za-z]/.test(value)) {
    return {
      valid: false,
      message: 'La password deve contenere almeno una lettera.'
    };
  }

  if (PASSWORD_POLICY.requiresNumber && !/[0-9]/.test(value)) {
    return {
      valid: false,
      message: 'La password deve contenere almeno un numero.'
    };
  }

  return { valid: true, message: '' };
}

export function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(String(password), salt, 64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password, storedHash) {
  const [scheme, salt, digest] = String(storedHash || '').split('$');
  if (scheme !== 'scrypt' || !salt || !digest) {
    return false;
  }

  const derived = scryptSync(String(password), salt, 64);
  const expected = Buffer.from(digest, 'hex');

  if (derived.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(derived, expected);
}

export function generateOpaqueToken(bytes = 32) {
  return randomBytes(bytes).toString('base64url');
}

export function hashOpaqueToken(token) {
  return createHash('sha256').update(String(token)).digest('hex');
}

export function maskEmail(email) {
  const normalized = normalizeEmail(email);
  const [localPart, domain] = normalized.split('@');
  if (!localPart || !domain) {
    return normalized;
  }

  const localMasked =
    localPart.length <= 2
      ? `${localPart[0] || ''}*`
      : `${localPart.slice(0, 2)}${'*'.repeat(Math.max(1, localPart.length - 2))}`;

  return `${localMasked}@${domain}`;
}

export function nowIso() {
  return new Date().toISOString();
}

export function addMinutes(dateIso, minutes) {
  return new Date(Date.parse(dateIso) + minutes * 60_000).toISOString();
}

