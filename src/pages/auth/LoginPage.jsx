import { useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

function getRedirectTarget(searchParams) {
  const redirect = searchParams.get('redirect');
  return redirect && redirect.startsWith('/app') ? redirect : '/app';
}

export default function LoginPage({ searchParams }) {
  const { login, resendVerification, sessionNotice, clearSessionNotice } = useAuth();
  const redirectTo = useMemo(() => getRedirectTarget(searchParams), [searchParams]);
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState('');

  const handleChange = (event) => {
    clearSessionNotice();
    setError('');
    setInfo('');
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setInfo('');
    setPendingVerificationEmail('');

    try {
      await login({ ...form, redirectTo });
    } catch (apiError) {
      setError(apiError.message);
      if (apiError.code === 'EMAIL_NOT_VERIFIED') {
        setPendingVerificationEmail(form.identifier);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!pendingVerificationEmail) return;
    setLoading(true);
    setError('');
    try {
      await resendVerification({ email: pendingVerificationEmail });
      setInfo('Abbiamo generato una nuova email di conferma per l’indirizzo indicato.');
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Accesso"
      title="Accedi con il tuo profilo"
      subtitle="Usa il tuo indirizzo email come username e continua a lavorare solo sul tuo storico personale."
      footer="Se non hai ancora un account, puoi registrarti in pochi passaggi."
      sideContent={(
        <div className="auth-side-card">
          <span className="auth-side-card__label">Accesso personale</span>
          <strong>Storico e progressi separati</strong>
          <p>Ogni sessione caricata dopo il login usa esclusivamente i dati statistici del tuo account verificato.</p>
        </div>
      )}
    >
      <div className="auth-card">
        <div>
          <p className="auth-card__title">Bentornato</p>
          <p className="auth-card__subtitle">Inserisci email e password per entrare nell’area riservata.</p>
        </div>

        {sessionNotice ? <div className="auth-form__notice">{sessionNotice}</div> : null}
        {error ? <div className="auth-form__error">{error}</div> : null}
        {info ? <div className="auth-form__success">{info}</div> : null}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span className="auth-field__label">Username / Email</span>
            <input
              className="auth-field__input"
              name="identifier"
              type="email"
              autoComplete="username"
              placeholder="nome@dominio.it"
              value={form.identifier}
              onChange={handleChange}
              required
            />
          </label>

          <label className="auth-field">
            <span className="auth-field__label">Password</span>
            <input
              className="auth-field__input"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Inserisci la password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="auth-card__actions">
            <button className="btn btn--primary btn--large" disabled={loading} type="submit">
              {loading ? 'Accesso in corso' : 'Accedi'}
            </button>
            {pendingVerificationEmail ? (
              <button className="btn btn--secondary" disabled={loading} onClick={handleResend} type="button">
                Invia nuovamente email di conferma
              </button>
            ) : null}
          </div>
        </form>

        <div className="auth-links">
          <a className="auth-link" href="/forgot-password" onClick={(event) => { event.preventDefault(); navigate('/forgot-password'); }}>
            Password dimenticata?
          </a>
          <a className="auth-link" href="/register" onClick={(event) => { event.preventDefault(); navigate('/register'); }}>
            Non hai un account? Registrati
          </a>
        </div>
      </div>
    </AuthLayout>
  );
}
