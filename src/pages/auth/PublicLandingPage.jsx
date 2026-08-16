import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function PublicLandingPage() {
  return (
    <AuthLayout
      eyebrow="Accesso personale"
      title="Simulatore TOLC-I multiutente"
      subtitle="Ogni utente lavora con storico, sessioni e statistiche completamente personali, senza interferenze con gli altri account."
      footer="Banca dati condivisa, progressi personali isolati per account."
      sideContent={(
        <>
          <div className="auth-landing__summary">
            <div className="auth-landing__metric">
              <dt>Quesiti</dt>
              <dd>339</dd>
            </div>
            <div className="auth-landing__metric">
              <dt>Materie</dt>
              <dd>4</dd>
            </div>
            <div className="auth-landing__metric">
              <dt>Modalità</dt>
              <dd>3</dd>
            </div>
          </div>

          <div className="auth-side-list">
            <div className="auth-side-list__item">
              <h2>Account verificati</h2>
              <p>Registrazione autonoma, conferma email e accesso con credenziali personali.</p>
            </div>
            <div className="auth-side-list__item">
              <h2>Statistiche isolate</h2>
              <p>Errori, domande meno svolte e storico dei quiz sono calcolati sul singolo profilo.</p>
            </div>
            <div className="auth-side-list__item">
              <h2>Sessioni sicure</h2>
              <p>Logout, recupero password e protezione delle aree riservate sono gestiti lato server.</p>
            </div>
          </div>
        </>
      )}
    >
      <div className="auth-card">
        <div>
          <p className="auth-card__title">Accedi alla tua area di studio</p>
          <p className="auth-card__subtitle">
            Entra nel tuo profilo oppure crea una nuova utenza per iniziare a tracciare i progressi personali.
          </p>
        </div>

        <div className="auth-landing__actions">
          <button className="btn btn--primary btn--large" onClick={() => navigate('/login')} type="button">
            Accedi
          </button>
          <button className="btn btn--secondary btn--large" onClick={() => navigate('/register')} type="button">
            Registrati
          </button>
        </div>

        <div className="auth-links">
          <button className="btn btn--ghost" onClick={() => navigate('/forgot-password')} type="button">
            Password dimenticata
          </button>
          <button className="btn btn--ghost" onClick={() => navigate('/local-inbox')} type="button">
            Inbox locale
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
