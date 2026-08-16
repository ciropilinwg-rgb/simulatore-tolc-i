import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { getStatsHistory, getStatsOverview } from '../services/statsService.js';
import './StatsPage.css';

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

export default function StatsPage() {
  const { legacyStatus } = useAuth();
  const [overview, setOverview] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const [overviewResponse, historyResponse] = await Promise.all([
          getStatsOverview(),
          getStatsHistory()
        ]);

        if (!active) return;
        setOverview(overviewResponse.overview || null);
        setHistory(historyResponse.items || []);
      } catch (apiError) {
        if (!active) return;
        setError(apiError.message);
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

  return (
    <div className="stats-page">
      <div className="stats-page__header">
        <p className="eyebrow">Statistiche personali</p>
        <h1 className="stats-page__title">Storico e progressi del tuo account</h1>
        <p className="stats-page__subtitle">
          Le metriche qui sotto sono calcolate solo sul tuo profilo autenticato.
        </p>
      </div>

      {legacyStatus?.hadLegacyData ? (
        <div className="stats-page__legacy page-card">
          Ho rilevato dati locali precedenti all’introduzione degli account. Li ho preservati separatamente senza attribuirli automaticamente a nessun utente.
        </div>
      ) : null}

      {loading ? <div className="stats-page__state page-card">Sto caricando il tuo storico personale.</div> : null}
      {error ? <div className="stats-page__state stats-page__state--error page-card">{error}</div> : null}

      {overview ? (
        <>
          <section className="stats-page__grid">
            <article className="stats-page__card page-card">
              <span className="stats-page__label">Profilo</span>
              <h2 className="stats-page__card-title">{overview.user.firstName} {overview.user.lastName}</h2>
              <p className="stats-page__copy">{overview.user.email}</p>
              <p className="stats-page__copy">{overview.user.phone}</p>
            </article>

            <article className="stats-page__card page-card">
              <span className="stats-page__label">Quiz completati</span>
              <strong className="stats-page__metric">{overview.totals.quizCompletati}</strong>
              <p className="stats-page__copy">Sessioni concluse e salvate nel tuo storico.</p>
            </article>

            <article className="stats-page__card page-card">
              <span className="stats-page__label">Accuratezza media</span>
              <strong className="stats-page__metric">{overview.totals.accuratezzaMedia}%</strong>
              <p className="stats-page__copy">Calcolata solo sulle esercitazioni del tuo account.</p>
            </article>

            <article className="stats-page__card page-card">
              <span className="stats-page__label">Domande monitorate</span>
              <strong className="stats-page__metric">{overview.totals.domandeMonitorate}</strong>
              <p className="stats-page__copy">Quesiti con statistiche personali registrate.</p>
            </article>
          </section>

          <section className="stats-page__grid stats-page__grid--wide">
            <article className="stats-page__card page-card">
              <span className="stats-page__label">Riepilogo risposte</span>
              <div className="stats-page__totals">
                <div>
                  <strong>{overview.totals.risposteCorrette}</strong>
                  <span>Corrette</span>
                </div>
                <div>
                  <strong>{overview.totals.risposteErrate}</strong>
                  <span>Errate</span>
                </div>
                <div>
                  <strong>{overview.totals.nonRisposte}</strong>
                  <span>Non risposte</span>
                </div>
                <div>
                  <strong>{overview.totals.domandeNeiQuiz}</strong>
                  <span>Domande nei quiz</span>
                </div>
              </div>
            </article>

            <article className="stats-page__card page-card">
              <span className="stats-page__label">Maggiori errori</span>
              <div className="stats-page__list">
                {overview.hardestQuestions.map((item) => (
                  <div key={item.questionId} className="stats-page__list-item">
                    <div>
                      <strong>{item.materia}</strong>
                      <p>{item.domanda}</p>
                    </div>
                    <span>{item.percentualeErrore}% errori</span>
                  </div>
                ))}
                {overview.hardestQuestions.length === 0 ? (
                  <p className="stats-page__empty">Non ci sono ancora errori registrati nel tuo profilo.</p>
                ) : null}
              </div>
            </article>

            <article className="stats-page__card page-card">
              <span className="stats-page__label">Meno svolte</span>
              <div className="stats-page__list">
                {overview.leastPracticedQuestions.map((item) => (
                  <div key={item.questionId} className="stats-page__list-item">
                    <div>
                      <strong>{item.materia}</strong>
                      <p>{item.domanda}</p>
                    </div>
                    <span>{item.numeroVolteSvolta} svolgimenti</span>
                  </div>
                ))}
                {overview.leastPracticedQuestions.length === 0 ? (
                  <p className="stats-page__empty">Non ci sono ancora domande registrate per il tuo account.</p>
                ) : null}
              </div>
            </article>
          </section>

          <section className="stats-page__history page-card">
            <div className="stats-page__history-head">
              <span className="stats-page__label">Storico esercitazioni</span>
              <h2 className="stats-page__card-title">Ultime sessioni</h2>
            </div>

            <div className="stats-page__history-table">
              {history.map((attempt) => (
                <div key={attempt.sessionKey} className="stats-page__history-row">
                  <div>
                    <strong>{formatMode(attempt.selectionMode)}</strong>
                    <p>{attempt.selectedSubjects.join(', ') || 'Tutte le materie'}</p>
                  </div>
                  <span>{attempt.totalQuestions} quesiti</span>
                  <span>{attempt.correctCount} corrette</span>
                  <span>{attempt.wrongCount} errate</span>
                  <span>{attempt.percentage}%</span>
                  <span>{new Date(attempt.finishedAt).toLocaleDateString('it-IT')}</span>
                </div>
              ))}
              {history.length === 0 ? (
                <p className="stats-page__empty">Completa la prima esercitazione per iniziare a costruire lo storico personale.</p>
              ) : null}
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
