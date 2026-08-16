import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { navigate } from '../hooks/usePathname.js';
import {
  forgotPassword,
  getCurrentSession,
  getHealth,
  loginUser,
  logoutUser,
  registerUser,
  resendVerificationEmail,
  resetPassword,
  verifyEmailToken
} from '../services/authService.js';
import { backupLegacyClientStats, getLegacyMigrationStatus } from '../services/legacyMigration.js';
import { setUnauthorizedHandler } from '../services/apiClient.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [bootStatus, setBootStatus] = useState('loading');
  const [user, setUser] = useState(null);
  const [mailDeliveryMode, setMailDeliveryMode] = useState('local_outbox');
  const [serverError, setServerError] = useState('');
  const [sessionNotice, setSessionNotice] = useState('');
  const [legacyStatus, setLegacyStatus] = useState({ hadLegacyData: false });

  const refreshSession = useCallback(async () => {
    setBootStatus('loading');
    setServerError('');

    try {
      const migration = backupLegacyClientStats();
      setLegacyStatus(migration.hadLegacyData ? migration : getLegacyMigrationStatus());

      const health = await getHealth();
      setMailDeliveryMode(health.mailDeliveryMode || 'local_outbox');
      setUser(health.user || null);
      setBootStatus('ready');
    } catch (error) {
      setServerError(error.message || 'Il server locale non è disponibile.');
      setBootStatus('error');
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  useEffect(() => {
    setUnauthorizedHandler(() => {
      setUser(null);
      setSessionNotice('La sessione è scaduta. Effettua di nuovo l’accesso.');
      navigate('/login', { replace: true });
    });

    return () => setUnauthorizedHandler(null);
  }, []);

  const login = useCallback(async ({ identifier, password, redirectTo = '/app' }) => {
    const result = await loginUser({ identifier, password });
    setUser(result.user);
    setSessionNotice('');
    navigate(redirectTo || '/app', { replace: true });
    return result;
  }, []);

  const register = useCallback(async (payload) => {
    return registerUser(payload);
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
      navigate('/login', { replace: true });
    }
  }, []);

  const resendVerification = useCallback(async (payload) => {
    return resendVerificationEmail(payload);
  }, []);

  const verifyEmail = useCallback(async (token) => {
    return verifyEmailToken(token);
  }, []);

  const requestPasswordReset = useCallback(async (payload) => {
    return forgotPassword(payload);
  }, []);

  const completePasswordReset = useCallback(async (payload) => {
    return resetPassword(payload);
  }, []);

  const reloadUser = useCallback(async () => {
    const result = await getCurrentSession();
    setUser(result.user || null);
    return result;
  }, []);

  const value = useMemo(() => ({
    bootStatus,
    isAuthenticated: Boolean(user),
    user,
    mailDeliveryMode,
    serverError,
    sessionNotice,
    legacyStatus,
    refreshSession,
    login,
    register,
    logout,
    resendVerification,
    verifyEmail,
    requestPasswordReset,
    completePasswordReset,
    reloadUser,
    clearSessionNotice: () => setSessionNotice('')
  }), [
    bootStatus,
    user,
    mailDeliveryMode,
    serverError,
    sessionNotice,
    legacyStatus,
    refreshSession,
    login,
    register,
    logout,
    resendVerification,
    verifyEmail,
    requestPasswordReset,
    completePasswordReset,
    reloadUser
  ]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere usato dentro AuthProvider');
  }
  return context;
}
