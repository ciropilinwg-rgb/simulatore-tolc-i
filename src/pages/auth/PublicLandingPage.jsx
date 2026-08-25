import { navigate } from '../../hooks/usePathname.js';
import { QUESTION_CATALOG_SUMMARY } from '../../data/questionCatalog.js';
import AuthLayout from './AuthLayout.jsx';

export default function PublicLandingPage() {
  const questionBankCount = QUESTION_CATALOG_SUMMARY.totalTolcPoolQuestions || QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions;

  return (
    <AuthLayout
      variant="centered"
      title="TOLC-I, il simulatore"
      titleClassName="auth-layout__title--landing"
      subtitleClassName="auth-layout__subtitle--landing"
      subtitle="Ogni utente opera all’interno del proprio account, con dati storici, sessioni di esercitazione e statistiche completamente personali, così da poter monitorare i propri progressi e migliorare nel tempo la propria preparazione."
      footer={(
        <div className="auth-author">
          <div className="auth-author__portrait">
            <img
              className="auth-author__image"
              src="/author-ciro-pili-enhanced.png"
              alt="Ritratto dell'ing. Ciro Pili"
              width="152"
              height="152"
            />
          </div>
          <div className="auth-author__copy">
            <p className="auth-author__label">Autore della piattaforma</p>
            <p className="auth-author__name">ing. Ciro Pili</p>
            <span className="auth-author__divider" aria-hidden="true"></span>
            <p className="auth-author__text">
              Ideazione e sviluppo del simulatore per uno studio personale, ordinato e progressivo del TOLC-I.
            </p>
          </div>
        </div>
      )}
    >
      <div className="auth-landing__workbench">
        <section className="auth-landing__surface auth-landing__dataset" aria-labelledby="landing-dataset-title">
          <p className="auth-landing__dataset-label">Banca dati disponibile</p>
          <p id="landing-dataset-title" className="auth-landing__dataset-count">{questionBankCount} quesiti</p>
          <p className="auth-landing__dataset-text">
            La banca dati disponibile su questa piattaforma non è una banca dati ufficiale di alcuna università.
            È uno strumento pensato esclusivamente per esercitarti, verificare il tuo livello di preparazione e
            monitorare i tuoi progressi nel tempo.
          </p>
        </section>

        <section className="auth-card auth-card--study auth-landing__surface" aria-labelledby="landing-study-title">
          <div>
            <p className="auth-card__eyebrow">Area personale</p>
            <p id="landing-study-title" className="auth-card__title">Accedi alla tua area di studio</p>
            <p className="auth-card__subtitle">
              Entra nel tuo profilo oppure crea una nuova utenza per iniziare a tracciare i progressi personali.
            </p>
          </div>

          <div className="auth-landing__actions">
            <button
              className="btn btn--primary btn--large auth-landing__button auth-landing__button--primary"
              onClick={() => navigate('/login')}
              type="button"
            >
              Accedi
            </button>
            <button
              className="btn btn--secondary btn--large auth-landing__button auth-landing__button--secondary"
              onClick={() => navigate('/register')}
              type="button"
            >
              Registrati
            </button>
          </div>

          <div className="auth-links auth-links--study">
            <button className="btn btn--ghost" onClick={() => navigate('/forgot-password')} type="button">
              Password dimenticata
            </button>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
}
