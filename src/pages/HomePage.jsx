// HomePage — Schermata iniziale

import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { QUESTION_CATALOG_SUMMARY } from '../data/questionCatalog.js';
import { getStatsOverview } from '../services/statsService.js';
import './HomePage.css';

export default function HomePage() {
  const { goToConfig, isLoading, allQuestions, availableMaterie } = useQuiz();
  const { legacyStatus } = useAuth();
  const [overview, setOverview] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState(null);

  const questionBankCount = allQuestions.length || QUESTION_CATALOG_SUMMARY.totalTolcPoolQuestions || QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions;
  const subjectCount = availableMaterie.length || 4;
  const framework = overview?.studyFramework || null;

  const handleStart = () => {
    goToConfig();
  };

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const overviewResponse = await getStatsOverview();

        if (!active) return;
        setOverview(overviewResponse.overview || null);
        setStatsError(null);
      } catch (apiError) {
        if (!active) return;
        setStatsError(
          apiError?.message || 'Non riesco a caricare il quadro di studio in questo momento.'
        );
      } finally {
        if (active) {
          setStatsLoading(false);
        }
      }
    }

    loadStats();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="home-page">
      <section className="home-page__hero">
        <div className="home-page__copy">
          <p className="home-page__kicker">Preparazione personale e progressiva</p>
          <h1 className="home-page__title">TOLC-I, il simulatore</h1>
          <p className="home-page__subtitle">
            Esercitati con la banca dati TOLC-I, scegli le materie che ti servono e lavora
            con un flusso di studio chiaro, rapido e professionale.
          </p>

          <div className="home-page__actions">
            <button
              className="btn btn--primary btn--large home-page__start-btn"
              onClick={handleStart}
              disabled={isLoading}
              type="button"
            >
              {isLoading ? (
                <span className="home-page__loading">
                  <span className="home-page__spinner" aria-hidden="true"></span>
                  Caricamento in corso
                </span>
              ) : (
                'Inizia esercitazione'
              )}
            </button>

            <p className="home-page__note">
              Configura ogni sessione, verifica subito la risposta e rivedi gli errori alla fine.
            </p>
          </div>

          <dl className="home-page__metrics">
            <div className="home-page__metric">
              <dt>Quesiti</dt>
              <dd>{questionBankCount}</dd>
            </div>
            <div className="home-page__metric">
              <dt>Materie</dt>
              <dd>{subjectCount}</dd>
            </div>
            <div className="home-page__metric">
              <dt>Modalità</dt>
              <dd>3</dd>
            </div>
          </dl>
        </div>

        <aside className="home-page__preview">
          <div className="home-preview page-card">
            <div className="home-preview__head">
              <span className="home-preview__label">Quadro di studio</span>
              <h2 className="home-preview__title">Copertura e conoscenza della banca dati</h2>
              <p className="home-preview__copy">
                Copertura qualificata del pool TOLC-I, quesiti consolidati e domande ancora mai affrontate con una risposta.
              </p>
            </div>

            {legacyStatus?.hadLegacyData ? (
              <div className="home-preview__legacy">
                Ho preservato separatamente i vecchi dati locali precedenti agli account.
              </div>
            ) : null}

            {statsLoading ? (
              <div className="home-preview__state">
                Sto caricando il quadro di studio del tuo account.
              </div>
            ) : null}

            {statsError ? (
              <div className="home-preview__state home-preview__state--error">
                {statsError}
              </div>
            ) : null}

            {framework ? (
              <>
                <div className="home-preview__grid">
                  <div className="home-preview__metric-card">
                    <span className="home-preview__metric-label">Conoscenza banca dati</span>
                    <strong className="home-preview__metric-value">{framework.conoscenzaBancaDatiFormatted}</strong>
                    <span className="home-preview__metric-copy">Percentuale dei quesiti attivi conosciuti almeno al 90%.</span>
                  </div>

                  <div className="home-preview__metric-card">
                    <span className="home-preview__metric-label">Domande conosciute ≥90%</span>
                    <strong className="home-preview__metric-value">{framework.domandeConosciute90} / {framework.totaleDomandeAttiveBancaDati}</strong>
                    <span className="home-preview__metric-copy">Quesiti con almeno il 90% di risposte corrette.</span>
                  </div>

                  <div className="home-preview__metric-card">
                    <span className="home-preview__metric-label">Mai risposte</span>
                    <strong className="home-preview__metric-value">{framework.maiRisposte}</strong>
                    <span className="home-preview__metric-copy">Quesiti attivi a cui non hai ancora fornito alcuna risposta.</span>
                  </div>

                  <div className="home-preview__metric-card">
                    <span className="home-preview__metric-label">Domande in banca dati</span>
                    <strong className="home-preview__metric-value">{framework.totaleDomandeAttiveBancaDati}</strong>
                    <span className="home-preview__metric-copy">Totale complessivo dei quesiti attivi nel pool TOLC-I.</span>
                  </div>
                </div>

                <div className="home-preview__footer">
                  <span>Banca dati aggiornata</span>
                  <strong>{framework.totaleDomandeAttiveBancaDati} quesiti TOLC-I</strong>
                </div>
              </>
            ) : null}
          </div>
        </aside>
      </section>

      <section className="home-page__workflow page-card">
        <article className="home-page__workflow-step">
          <span className="home-page__workflow-index">01</span>
          <h2>Componi la sessione</h2>
          <p>Seleziona materie, quantità di domande e criterio di estrazione.</p>
        </article>
        <article className="home-page__workflow-step">
          <span className="home-page__workflow-index">02</span>
          <h2>Rispondi con ritmo costante</h2>
          <p>Una domanda alla volta, verifiche immediate e progressione sempre leggibile.</p>
        </article>
        <article className="home-page__workflow-step">
          <span className="home-page__workflow-index">03</span>
          <h2>Rivedi ciò che conta</h2>
          <p>Errori, non risposte e statistiche restano nello stesso percorso di studio.</p>
        </article>
      </section>

      <footer className="home-page__footer">Versione 1.2 · interfaccia ridisegnata per lo studio</footer>
    </div>
  );
}
