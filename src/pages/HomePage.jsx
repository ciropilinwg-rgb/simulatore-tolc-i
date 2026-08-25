// HomePage — Schermata iniziale

import { useEffect, useState } from 'react';
import MathText from '../components/MathText.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { QUESTION_CATALOG_SUMMARY } from '../data/questionCatalog.js';
import { getStatsHistory, getStatsOverview } from '../services/statsService.js';
import './HomePage.css';

function formatMode(mode) {
  switch (mode) {
    case 'HIGHEST_ERROR_RATE':
      return 'Maggiori errori';
    case 'LEAST_PRACTICED':
      return 'Meno svolte';
    case 'RANDOM':
    default:
      return 'Casuale';
  }
}

export default function HomePage() {
  const { goToConfig, isLoading, allQuestions, availableMaterie } = useQuiz();
  const { legacyStatus } = useAuth();
  const [overview, setOverview] = useState(null);
  const [history, setHistory] = useState([]);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState(null);

  const questionBankCount = allQuestions.length || QUESTION_CATALOG_SUMMARY.totalTolcPoolQuestions || QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions;
  const subjectCount = availableMaterie.length || 4;
  const latestSession = history[0] || null;
  const focusQuestions = overview?.hardestQuestions?.length
    ? overview.hardestQuestions.slice(0, 2)
    : overview?.leastPracticedQuestions?.slice(0, 2) || [];

  const handleStart = () => {
    goToConfig();
  };

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const [overviewResponse, historyResponse] = await Promise.all([
          getStatsOverview(),
          getStatsHistory(3)
        ]);

        if (!active) return;
        setOverview(overviewResponse.overview || null);
        setHistory(historyResponse.items || []);
        setStatsError(null);
      } catch (apiError) {
        if (!active) return;
        setStatsError(
          apiError?.message || 'Non riesco a caricare il riepilogo personale in questo momento.'
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
              <h2 className="home-preview__title">Tutto resta nel tuo account</h2>
              <p className="home-preview__copy">
                Storico, accuratezza, errori ricorrenti e priorità di ripasso vengono
                letti subito senza cambiare flusso.
              </p>
            </div>

            {legacyStatus?.hadLegacyData ? (
              <div className="home-preview__legacy">
                Ho preservato separatamente i vecchi dati locali precedenti agli account.
              </div>
            ) : null}

            {statsLoading ? (
              <div className="home-preview__state">
                Sto caricando il riepilogo personale del tuo account.
              </div>
            ) : null}

            {statsError ? (
              <div className="home-preview__state home-preview__state--error">
                {statsError}
              </div>
            ) : null}

            {overview ? (
              <>
                <dl className="home-preview__summary-list">
                  <div className="home-preview__summary-row">
                    <dt>Quiz completati</dt>
                    <dd>{overview.totals.quizCompletati}</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Accuratezza media</dt>
                    <dd>{overview.totals.accuratezzaMedia}%</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Corrette</dt>
                    <dd>{overview.totals.risposteCorrette}</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Errate</dt>
                    <dd>{overview.totals.risposteErrate}</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Domande monitorate</dt>
                    <dd>{overview.totals.domandeMonitorate}</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Non risposte</dt>
                    <dd>{overview.totals.nonRisposte}</dd>
                  </div>
                  <div className="home-preview__summary-row">
                    <dt>Domande nei quiz</dt>
                    <dd>{overview.totals.domandeNeiQuiz}</dd>
                  </div>
                </dl>

                <div className="home-preview__block">
                  <span className="home-preview__label">Ultima sessione</span>
                  {latestSession ? (
                    <div className="home-preview__snapshot">
                      <div className="home-preview__snapshot-row">
                        <span>Modalità</span>
                        <strong>{formatMode(latestSession.selectionMode)}</strong>
                      </div>
                      <div className="home-preview__snapshot-row">
                        <span>Materie</span>
                        <strong>{latestSession.selectedSubjects.join(', ') || 'Tutte le materie'}</strong>
                      </div>
                      <div className="home-preview__snapshot-row">
                        <span>Risultato</span>
                        <strong>{latestSession.percentage}%</strong>
                      </div>
                    </div>
                  ) : (
                    <p className="home-preview__empty">
                      Completa la prima esercitazione per iniziare a riempire il tuo storico personale.
                    </p>
                  )}
                </div>

                <div className="home-preview__block">
                  <span className="home-preview__label">Focus consigliato</span>
                  <div className="home-preview__list">
                    {focusQuestions.map((item) => (
                      <div key={`${item.questionId}-${item.materia}`} className="home-preview__list-item">
                        <strong>{item.materia}</strong>
                        <MathText as="p" text={item.domanda} />
                      </div>
                    ))}
                    {focusQuestions.length === 0 ? (
                      <p className="home-preview__empty">
                        Quando inizierai a svolgere quiz, qui compariranno subito gli argomenti da ripassare.
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="home-preview__footer">
                  <span>Banca dati aggiornata</span>
                  <strong>{questionBankCount} quesiti TOLC-I</strong>
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
