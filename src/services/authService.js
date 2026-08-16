import { apiRequest } from './apiClient.js';

export async function getHealth() {
  return apiRequest('/api/health', { ignoreUnauthorized: true });
}

export async function getCurrentSession() {
  return apiRequest('/api/auth/me', { ignoreUnauthorized: true });
}

export async function registerUser(payload) {
  return apiRequest('/api/auth/register', {
    method: 'POST',
    body: payload,
    ignoreUnauthorized: true
  });
}

export async function loginUser(payload) {
  return apiRequest('/api/auth/login', {
    method: 'POST',
    body: payload,
    ignoreUnauthorized: true
  });
}

export async function logoutUser() {
  return apiRequest('/api/auth/logout', {
    method: 'POST',
    ignoreUnauthorized: true
  });
}

export async function resendVerificationEmail(payload) {
  return apiRequest('/api/auth/resend-verification', {
    method: 'POST',
    body: payload,
    ignoreUnauthorized: true
  });
}

export async function verifyEmailToken(token) {
  return apiRequest('/api/auth/verify-email', {
    method: 'POST',
    body: { token },
    ignoreUnauthorized: true
  });
}

export async function forgotPassword(payload) {
  return apiRequest('/api/auth/forgot-password', {
    method: 'POST',
    body: payload,
    ignoreUnauthorized: true
  });
}

export async function resetPassword(payload) {
  return apiRequest('/api/auth/reset-password', {
    method: 'POST',
    body: payload,
    ignoreUnauthorized: true
  });
}

export async function getLocalOutbox(filters = {}) {
  const searchParams = new URLSearchParams();
  if (filters.to) {
    searchParams.set('to', filters.to);
  }
  if (filters.category) {
    searchParams.set('category', filters.category);
  }
  const query = searchParams.toString();
  return apiRequest(`/api/dev/outbox${query ? `?${query}` : ''}`, {
    ignoreUnauthorized: true
  });
}
