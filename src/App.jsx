import { useEffect, useMemo } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { QuizProvider, useQuiz } from './context/QuizContext.jsx';
import { navigate, useLocationState } from './hooks/usePathname.js';
import HomePage from './pages/HomePage.jsx';
import ConfigPage from './pages/ConfigPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import PublicLandingPage from './pages/auth/PublicLandingPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.jsx';
import ResetPasswordPage from './pages/auth/ResetPasswordPage.jsx';
import PendingVerificationPage from './pages/auth/PendingVerificationPage.jsx';
import VerifyEmailPage from './pages/auth/VerifyEmailPage.jsx';
import LocalInboxPage from './pages/auth/LocalInboxPage.jsx';

const KNOWN_PUBLIC_ROUTES = new Set([
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/verify-email/pending',
  '/local-inbox'
]);

function GlobalFrame({ authenticated, children }) {
  const currentUser = authenticated?.user || null;
  const homePath = currentUser?.emailVerified ? '/app' : currentUser ? '/verify-email/pending' : '/';
  const contextLabel = currentUser
    ? currentUser.emailVerified ? 'Utente corrente' : 'Verifica email'
    : 'Area riservata';
  const contextValue = currentUser
    ? currentUser.emailVerified
      ? `${currentUser.firstName} ${currentUser.lastName}`
      : currentUser.email
    : 'Statistiche private per account';

  return (
    <div className="app">
      <header className="app-shell">
        <button className="app-shell__brand app-shell__brand-button" onClick={() => navigate(homePath, { replace: true })} type="button">
          <span className="app-shell__mark">TI</span>
          <span>
            <span className="app-shell__title">Simulatore TOLC-I</span>
            <span className="app-shell__subtitle">
              {currentUser?.emailVerified
                ? 'Area riservata personale'
                : 'Accesso protetto e statistiche isolate'}
            </span>
          </span>
        </button>

        <div className="app-shell__context">
          <span className="app-shell__context-label">{contextLabel}</span>
          <span className="app-shell__context-value">{contextValue}</span>
        </div>
      </header>

      <main className="app__main">
        {children}
      </main>
    </div>
  );
}

function BootLoadingState() {
  return (
    <GlobalFrame authenticated={null}>
      <section className="app-state page-card">
        <p className="eyebrow">Avvio applicazione</p>
        <h1 className="app-state__title">Sto preparando il tuo ambiente di studio</h1>
        <p className="app-state__text">
          Verifico la sessione corrente, il profilo autenticato e la disponibilità dei dati personali su Firebase.
        </p>
      </section>
    </GlobalFrame>
  );
}

function BootErrorState({ message, onRetry }) {
  return (
    <GlobalFrame authenticated={null}>
      <section className="app-state app-state--error page-card">
        <p className="eyebrow">Configurazione non pronta</p>
        <h1 className="app-state__title">Non riesco a inizializzare Firebase</h1>
        <p className="app-state__text">
          {message || 'Controlla la connessione internet oppure la configurazione Firebase della web app.'}
        </p>

        <div className="app-state__steps">
          <div className="app-state__step">
            <span>1</span>
            <p>Verifica che Authentication e Firestore siano stati attivati nel progetto Firebase.</p>
          </div>
          <div className="app-state__step">
            <span>2</span>
            <p>Riapri la web app dopo aver completato la configurazione o il deploy su Hosting.</p>
          </div>
        </div>

        <div className="app-state__actions">
          <button className="btn btn--primary btn--large" onClick={onRetry} type="button">
            Riprova inizializzazione
          </button>
          <button className="btn btn--secondary" onClick={() => navigate('/', { replace: true })} type="button">
            Vai alla schermata iniziale
          </button>
        </div>
      </section>
    </GlobalFrame>
  );
}

function AppRedirectingState({ authenticated }) {
  return (
    <GlobalFrame authenticated={authenticated}>
      <section className="app-state page-card">
        <p className="eyebrow">Reindirizzamento</p>
        <h1 className="app-state__title">Sto aprendo la schermata corretta</h1>
      </section>
    </GlobalFrame>
  );
}

function QuizWorkspace() {
  const { screen } = useQuiz();

  switch (screen) {
    case 'config':
      return <ConfigPage />;
    case 'quiz':
      return <QuizPage />;
    case 'results':
      return <ResultsPage />;
    case 'review':
      return <ReviewPage />;
    case 'home':
    default:
      return <HomePage />;
  }
}

function ProtectedWorkspace() {
  const { user, logout } = useAuth();

  return (
    <GlobalFrame authenticated={{ user }}>
      <QuizProvider>
        <div className="workspace-shell">
          <section className="workspace-shell__header page-card">
            <div className="workspace-shell__identity">
              <p className="workspace-shell__eyebrow">Profilo attivo</p>
              <h1 className="workspace-shell__title">{user.firstName} {user.lastName}</h1>
              <p className="workspace-shell__subtitle">{user.email} · {user.phone}</p>
            </div>

            <div className="workspace-shell__toolbar">
              <button className="btn btn--ghost" onClick={logout} type="button">
                Esci
              </button>
            </div>
          </section>

          <QuizWorkspace />
        </div>
      </QuizProvider>
    </GlobalFrame>
  );
}

function PublicRoute({ pathname, searchParams }) {
  switch (pathname) {
    case '/login':
      return <LoginPage searchParams={searchParams} />;
    case '/register':
      return <RegisterPage />;
    case '/forgot-password':
      return <ForgotPasswordPage />;
    case '/reset-password':
      return <ResetPasswordPage searchParams={searchParams} />;
    case '/verify-email':
      return <VerifyEmailPage searchParams={searchParams} />;
    case '/verify-email/pending':
      return <PendingVerificationPage searchParams={searchParams} />;
    case '/local-inbox':
      return <LocalInboxPage />;
    case '/':
    default:
      return <PublicLandingPage />;
  }
}

function AppRouter() {
  const auth = useAuth();
  const { pathname, search, searchParams } = useLocationState();

  const redirectTarget = useMemo(() => {
    if (auth.bootStatus !== 'ready') {
      return null;
    }

    const isProtectedRoute = pathname === '/app' || pathname.startsWith('/app/');

    if (auth.hasPendingVerification) {
      const pendingPath = `/verify-email/pending?email=${encodeURIComponent(auth.user?.email || '')}`;

      if (pathname === '/verify-email' || pathname === '/verify-email/pending' || pathname === '/login') {
        return null;
      }

      return pendingPath;
    }

    if (auth.isAuthenticated) {
      if (pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/verify-email/pending' || pathname === '/') {
        return '/app';
      }

      if (pathname.startsWith('/app')) {
        return pathname === '/app' ? null : '/app';
      }

      return KNOWN_PUBLIC_ROUTES.has(pathname) ? null : '/app';
    }

    if (isProtectedRoute) {
      return `/login?redirect=${encodeURIComponent(`${pathname}${search}`)}`;
    }

    return KNOWN_PUBLIC_ROUTES.has(pathname) ? null : '/';
  }, [auth.bootStatus, auth.hasPendingVerification, auth.isAuthenticated, auth.user, pathname, search]);

  useEffect(() => {
    if (!redirectTarget) {
      return;
    }
    navigate(redirectTarget, { replace: true });
  }, [redirectTarget]);

  if (auth.bootStatus === 'loading') {
    return <BootLoadingState />;
  }

  if (auth.bootStatus === 'error') {
    return <BootErrorState message={auth.serverError} onRetry={auth.refreshSession} />;
  }

  if (redirectTarget) {
    return <AppRedirectingState authenticated={auth.user ? { user: auth.user } : null} />;
  }

  if (!auth.isAuthenticated) {
    return (
      <GlobalFrame authenticated={auth.user ? { user: auth.user } : null}>
        <PublicRoute pathname={pathname} searchParams={searchParams} />
      </GlobalFrame>
    );
  }

  return <ProtectedWorkspace />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
