import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function LocalInboxPage() {
  return (
    <AuthLayout
      eyebrow="Email gestite online"
      title="Inbox locale non più necessaria"
      subtitle="Con Firebase le email di verifica e recupero password vengono inviate direttamente al vero indirizzo dell’utente."
    >
      <div className="auth-card">
        <div className="auth-form__notice">
          Questa schermata apparteneva alla vecchia versione locale. Nella nuova architettura online non esiste più una casella interna all’app.
        </div>

        <div className="auth-inline-actions">
          <button className="btn btn--ghost" onClick={() => navigate('/login')} type="button">
            Torna al login
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
