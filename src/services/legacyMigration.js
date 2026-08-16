const ACTIVE_STATS_KEY = 'simulatore_concorso_question_stats';
const ACTIVE_OPS_KEY = 'simulatore_concorso_recorded_ops';
const LEGACY_BACKUP_KEY = 'simulatore_concorso_legacy_backup';
const LEGACY_STATUS_KEY = 'simulatore_concorso_legacy_status';

export function backupLegacyClientStats() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { hadLegacyData: false };
  }

  try {
    const existingStatusRaw = localStorage.getItem(LEGACY_STATUS_KEY);
    if (existingStatusRaw) {
      return JSON.parse(existingStatusRaw);
    }

    const questionStats = localStorage.getItem(ACTIVE_STATS_KEY);
    const recordedOps = localStorage.getItem(ACTIVE_OPS_KEY);
    const hadLegacyData = Boolean(questionStats || recordedOps);

    if (hadLegacyData) {
      const backup = {
        migratedAt: new Date().toISOString(),
        questionStats,
        recordedOps
      };
      localStorage.setItem(LEGACY_BACKUP_KEY, JSON.stringify(backup));
      localStorage.removeItem(ACTIVE_STATS_KEY);
      localStorage.removeItem(ACTIVE_OPS_KEY);
    }

    const status = {
      hadLegacyData,
      migratedAt: new Date().toISOString()
    };
    localStorage.setItem(LEGACY_STATUS_KEY, JSON.stringify(status));
    return status;
  } catch {
    return { hadLegacyData: false };
  }
}

export function getLegacyMigrationStatus() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { hadLegacyData: false };
  }

  try {
    const raw = localStorage.getItem(LEGACY_STATUS_KEY);
    return raw ? JSON.parse(raw) : { hadLegacyData: false };
  } catch {
    return { hadLegacyData: false };
  }
}
