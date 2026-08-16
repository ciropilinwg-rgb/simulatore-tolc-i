import { apiRequest } from './apiClient.js';

export async function getStatsOverview() {
  return apiRequest('/api/stats/overview');
}

export async function getStatsHistory(limit = 20) {
  return apiRequest(`/api/stats/history?limit=${limit}`);
}
