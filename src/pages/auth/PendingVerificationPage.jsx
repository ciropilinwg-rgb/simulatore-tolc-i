import { useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function PendingVerificationPage({ searchParams }) {
  const { resendVerification, user } = useAuth();
  const email = useMemo(() => searchParams.get('email') || user?.email || '', [searchParams, user]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResend = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await resendVerification({ email });
      setMessage('Abbiamo generato una nuova email di conferma. Controlla nuovamente la tua casella.');
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Verifica email"
      title="Conferma il tuo indirizzo email"
      subtitle="L’account resta inattivo finché il link di conferma non viene aperto."
    >
      <div className="auth-card">
        <div className="auth-form__notice">
          Ti abbiamo inviato un messaggio di verifica all’indirizzo indicato. Dopo la conferma potrai accedere normalmente.
        </div>

        {message ? <div className="auth-form__success">{message}</div> : null}
        {error ? <div className="auth-form__error">{error}</div> : null}

        <div className="auth-card__actions">
          <button className="btn btn--secondary" disabled={loading || !email} onClick={handleResend} type="button">
            {loading ? 'Invio in corso' : 'Invia nuovamente email di conferma'}
          </button>
          <button className="btn btn--ghost" onClick={() => navigate('/login')} type="button">
            Torna al login
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
