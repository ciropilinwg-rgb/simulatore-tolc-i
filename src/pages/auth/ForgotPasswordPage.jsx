import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function ForgotPasswordPage() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await requestPasswordReset({ email });
      setSuccess('Se l’account esiste, riceverai una email con le istruzioni per reimpostare la password.');
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Recupero password"
      title="Reimposta l’accesso"
      subtitle="Inserisci il tuo indirizzo email e riceverai un link sicuro per scegliere una nuova password."
    >
      <div className="auth-card">
        <div>
          <p className="auth-card__title">Password dimenticata?</p>
          <p className="auth-card__subtitle">Non inviamo mai la vecchia password: riceverai solo un link temporaneo di reset.</p>
        </div>

        {error ? <div className="auth-form__error">{error}</div> : null}
        {success ? <div className="auth-form__success">{success}</div> : null}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span className="auth-field__label">Indirizzo email</span>
            <input className="auth-field__input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>

          <div className="auth-card__actions">
            <button className="btn btn--primary btn--large" disabled={loading} type="submit">
              {loading ? 'Invio in corso' : 'Invia link di recupero'}
            </button>
            <button className="btn btn--ghost" onClick={() => navigate('/login')} type="button">
              Torna al login
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
