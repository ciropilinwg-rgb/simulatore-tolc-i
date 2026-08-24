import { useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

function validateClientForm(form) {
  const errors = {};

  if (!form.firstName.trim()) errors.firstName = 'Il nome è obbligatorio.';
  if (!form.lastName.trim()) errors.lastName = 'Il cognome è obbligatorio.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim().toLowerCase())) {
    errors.email = 'L’indirizzo email inserito non è valido.';
  }
  if (!/^\+?[0-9().\-\s]{8,20}$/.test(form.phone.trim())) {
    errors.phone = 'Il numero di cellulare inserito non è valido.';
  }
  if (form.password.length < 8 || !/[A-Za-z]/.test(form.password) || !/[0-9]/.test(form.password)) {
    errors.password = 'La password deve contenere almeno 8 caratteri, una lettera e un numero.';
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Le password inserite non coincidono.';
  }

  return errors;
}

export default function RegisterPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const hasErrors = useMemo(() => (
    Object.values(errors).some((message) => Boolean(message))
  ), [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setGeneralError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateClientForm(form);
    setErrors(validationErrors);
    setGeneralError('');

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      await register(form);
      navigate(`/verify-email/pending?email=${encodeURIComponent(form.email.trim())}`, { replace: true });
    } catch (apiError) {
      if (apiError.details?.field) {
        setErrors((current) => ({
          ...current,
          [apiError.details.field]: apiError.message
        }));
      } else {
        setGeneralError(apiError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      variant="centered"
      title=""
      subtitle=""
      panelClassName="auth-layout__panel--register"
      footer="L’indirizzo email viene usato come username di accesso."
    >
      <div className="auth-card auth-card--register">
        <div className="auth-card__intro auth-card__intro--register">
          <p className="auth-card__title">Nuovo account</p>
          <p className="auth-card__subtitle">Completa i campi obbligatori e conferma il tuo indirizzo email.</p>
        </div>

        {generalError ? <div className="auth-form__error">{generalError}</div> : null}

        <form className="auth-form auth-form--register" onSubmit={handleSubmit}>
          <div className="auth-form__grid">
            <label className="auth-field">
              <span className="auth-field__label">Nome</span>
              <input className={`auth-field__input ${errors.firstName ? 'auth-field__input--error' : ''}`} name="firstName" value={form.firstName} onChange={handleChange} required />
              {errors.firstName ? <span className="auth-field__hint">{errors.firstName}</span> : null}
            </label>

            <label className="auth-field">
              <span className="auth-field__label">Cognome</span>
              <input className={`auth-field__input ${errors.lastName ? 'auth-field__input--error' : ''}`} name="lastName" value={form.lastName} onChange={handleChange} required />
              {errors.lastName ? <span className="auth-field__hint">{errors.lastName}</span> : null}
            </label>
          </div>

          <label className="auth-field">
            <span className="auth-field__label">Indirizzo email</span>
            <input className={`auth-field__input ${errors.email ? 'auth-field__input--error' : ''}`} name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required />
            {errors.email ? <span className="auth-field__hint">{errors.email}</span> : null}
          </label>

          <label className="auth-field">
            <span className="auth-field__label">Numero di cellulare</span>
            <input className={`auth-field__input ${errors.phone ? 'auth-field__input--error' : ''}`} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+39 333 1234567" required />
            {errors.phone ? <span className="auth-field__hint">{errors.phone}</span> : null}
          </label>

          <div className="auth-form__grid">
            <label className="auth-field">
              <span className="auth-field__label">Password</span>
              <input className={`auth-field__input ${errors.password ? 'auth-field__input--error' : ''}`} name="password" type="password" autoComplete="new-password" value={form.password} onChange={handleChange} required />
              {errors.password ? <span className="auth-field__hint">{errors.password}</span> : null}
            </label>

            <label className="auth-field">
              <span className="auth-field__label">Conferma password</span>
              <input className={`auth-field__input ${errors.confirmPassword ? 'auth-field__input--error' : ''}`} name="confirmPassword" type="password" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange} required />
              {errors.confirmPassword ? <span className="auth-field__hint">{errors.confirmPassword}</span> : null}
            </label>
          </div>

          <div className="auth-card__actions">
            <button className="btn btn--primary btn--large" disabled={loading || hasErrors} type="submit">
              {loading ? 'Registrazione in corso' : 'Registrati'}
            </button>
            <button className="btn btn--ghost" onClick={() => navigate('/login')} type="button">
              Hai già un account?
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
