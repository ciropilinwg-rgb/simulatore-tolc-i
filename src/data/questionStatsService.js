import { apiRequest } from '../services/apiClient.js';

export async function getUserStats() {
  const response = await apiRequest('/api/stats/question-map');
  return response.stats || {};
}

export async function createQuizSession({ sessionId, selectionMode, selectedMaterie, questionIds, requestedCount }) {
  return apiRequest('/api/quiz/sessions', {
    method: 'POST',
    body: {
      sessionKey: sessionId,
      selectionMode,
      selectedSubjects: selectedMaterie,
      questionIds,
      requestedCount
    }
  });
}

export async function recordQuestionShown({ sessionId, questionId }) {
  return apiRequest(`/api/quiz/sessions/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/shown`, {
    method: 'POST'
  });
}

export async function recordAnswer({ sessionId, questionId, selectedText }) {
  return apiRequest(`/api/quiz/sessions/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/answer`, {
    method: 'POST',
    body: { selectedText }
  });
}

export async function finishQuizSession({ sessionId }) {
  return apiRequest(`/api/quiz/sessions/${encodeURIComponent(sessionId)}/finish`, {
    method: 'POST'
  });
}
