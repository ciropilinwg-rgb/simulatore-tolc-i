import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function VerifyEmailPage({ searchParams }) {
  const { verifyEmail } = useAuth();
  const token = searchParams.get('oobCode') || searchParams.get('token') || '';
  const [status, setStatus] = useState(token ? 'loading' : 'error');
  const [message, setMessage] = useState(token ? 'Sto verificando il tuo indirizzo email.' : 'Il link di conferma non contiene un token valido.');

  useEffect(() => {
    let active = true;

    async function runVerification() {
      if (!token) return;

      try {
        await verifyEmail(token);
        if (!active) return;
        setStatus('success');
        setMessage('Indirizzo email confermato. Ora puoi accedere con il tuo account.');
      } catch (apiError) {
        if (!active) return;
        setStatus('error');
        setMessage(apiError.message);
      }
    }

    runVerification();
    return () => {
      active = false;
    };
  }, [token, verifyEmail]);

  return (
    <AuthLayout
      eyebrow="Attivazione account"
      title="Conferma in corso"
      subtitle="Il link attiva l’account e sblocca il login normale."
    >
      <div className="auth-card">
        {status === 'loading' ? <div className="auth-form__notice">{message}</div> : null}
        {status === 'success' ? <div className="auth-form__success">{message}</div> : null}
        {status === 'error' ? <div className="auth-form__error">{message}</div> : null}

        <div className="auth-card__actions">
          <button className="btn btn--primary btn--large" onClick={() => navigate('/login', { replace: true })} type="button">
            Vai al login
          </button>
          <button className="btn btn--ghost" onClick={() => navigate('/verify-email/pending')} type="button">
            Richiedi un nuovo invio
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
