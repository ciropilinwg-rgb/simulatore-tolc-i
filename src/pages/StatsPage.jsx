import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { getStatsOverview } from '../services/statsService.js';
import './StatsPage.css';

export default function StatsPage() {
  const { legacyStatus } = useAuth();
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const overviewResponse = await getStatsOverview();

        if (!active) return;
        setOverview(overviewResponse.overview || null);
      } catch (apiError) {
        if (!active) return;
        const code = String(apiError?.code || '');
        const isPermissionIssue = code === 'PERMISSION_DENIED' || code === 'EMAIL_NOT_VERIFIED';

        setError({
          title: isPermissionIssue
            ? 'Le statistiche personali non sono ancora disponibili'
            : 'Non riesco a caricare il quadro di studio',
          message: isPermissionIssue
            ? 'Sto ancora sincronizzando l’accesso sicuro del tuo account con Firebase. Ricarica la pagina oppure esci e rientra una sola volta.'
            : apiError.message
        });
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  const framework = overview?.studyFramework || {
    conoscenzaBancaDatiFormatted: '0%',
    domandeConosciute90: 0,
    maiRisposte: 0,
    totaleDomandeAttiveBancaDati: 0
  };

  return (
    <div className="stats-page">
      <div className="stats-page__header">
        <p className="eyebrow">Quadro di studio</p>
        <h1 className="stats-page__title">Copertura e conoscenza della banca dati</h1>
        <p className="stats-page__subtitle">
          Il quadro di studio misura la copertura effettiva della banca dati TOLC-I,
          i quesiti consolidati e le domande ancora mai affrontate con una risposta.
        </p>
      </div>

      {legacyStatus?.hadLegacyData ? (
        <div className="stats-page__legacy page-card">
          Ho rilevato dati locali precedenti all’introduzione degli account. Li ho preservati separatamente senza attribuirli automaticamente a nessun utente.
        </div>
      ) : null}

      {loading ? <div className="stats-page__state page-card">Sto caricando il tuo quadro di studio.</div> : null}
      {error ? (
        <section className="stats-page__state stats-page__state--error page-card">
          <p className="stats-page__state-label">Area statistiche</p>
          <h2 className="stats-page__state-title">{error.title}</h2>
          <p className="stats-page__state-text">{error.message}</p>
        </section>
      ) : null}

      {overview ? (
        <div className="stats-page__framework">
          <section className="stats-page__grid stats-page__grid--pair">
            <article className="stats-page__card stats-page__card--summary page-card">
              <span className="stats-page__label">Conoscenza banca dati</span>
              <strong className="stats-page__metric">{framework.conoscenzaBancaDatiFormatted}</strong>
              <p className="stats-page__copy">Percentuale dei quesiti attivi conosciuti almeno al 90%.</p>
            </article>

            <article className="stats-page__card stats-page__card--summary page-card">
              <span className="stats-page__label">Domande conosciute ≥90%</span>
              <strong className="stats-page__metric">{framework.domandeConosciute90} / {framework.totaleDomandeAttiveBancaDati}</strong>
              <p className="stats-page__copy">Quesiti con accuratezza consolidata pari o superiore al 90%.</p>
            </article>
          </section>

          <section className="stats-page__grid stats-page__grid--pair">
            <article className="stats-page__card stats-page__card--summary page-card">
              <span className="stats-page__label">Mai risposte</span>
              <strong className="stats-page__metric">{framework.maiRisposte}</strong>
              <p className="stats-page__copy">Quesiti attivi a cui non hai ancora fornito alcuna risposta.</p>
            </article>

            <article className="stats-page__card stats-page__card--summary page-card">
              <span className="stats-page__label">Domande in banca dati</span>
              <strong className="stats-page__metric">{framework.totaleDomandeAttiveBancaDati}</strong>
              <p className="stats-page__copy">Totale complessivo dei quesiti attivi nel pool TOLC-I.</p>
            </article>
          </section>
        </div>
      ) : null}
    </div>
  );
}
