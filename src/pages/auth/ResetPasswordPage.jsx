import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function ResetPasswordPage({ searchParams }) {
  const { completePasswordReset } = useAuth();
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const token = searchParams.get('token') || '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await completePasswordReset({
        token,
        password: form.password,
        confirmPassword: form.confirmPassword
      });
      setSuccess('La password è stata aggiornata correttamente. Ora puoi accedere con le nuove credenziali.');
      setTimeout(() => navigate('/login', { replace: true }), 1200);
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      eyebrow="Nuova password"
      title="Imposta una nuova password"
      subtitle="Il link di recupero ha validità limitata. Scegli una password nuova e poi accedi normalmente."
    >
      <div className="auth-card">
        {error ? <div className="auth-form__error">{error}</div> : null}
        {success ? <div className="auth-form__success">{success}</div> : null}
        {!token ? <div className="auth-form__error">Il link di recupero non contiene un token valido.</div> : null}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span className="auth-field__label">Nuova password</span>
            <input className="auth-field__input" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} required />
          </label>
          <label className="auth-field">
            <span className="auth-field__label">Conferma password</span>
            <input className="auth-field__input" type="password" value={form.confirmPassword} onChange={(event) => setForm((current) => ({ ...current, confirmPassword: event.target.value }))} required />
          </label>

          <div className="auth-card__actions">
            <button className="btn btn--primary btn--large" disabled={loading || !token} type="submit">
              {loading ? 'Aggiornamento in corso' : 'Aggiorna password'}
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
