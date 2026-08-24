import { useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
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
      variant="centered"
      panelClassName="auth-layout__panel--login"
    >
      <div className="auth-card auth-card--login">
        {sessionNotice ? <div className="auth-form__notice">{sessionNotice}</div> : null}
        {error ? <div className="auth-form__error">{error}</div> : null}
        {info ? <div className="auth-form__success">{info}</div> : null}

        <form className="auth-form auth-form--login" onSubmit={handleSubmit}>
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
      </div>
    </AuthLayout>
  );
}
