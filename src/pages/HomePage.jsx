// HomePage — Schermata iniziale

import { useQuiz } from '../context/QuizContext.jsx';
import './HomePage.css';

export default function HomePage() {
  const { goToConfig, isLoading, allQuestions, availableMaterie } = useQuiz();

  const questionBankCount = allQuestions.length || 339;
  const subjectCount = availableMaterie.length || 4;

  const handleStart = () => {
    goToConfig();
  };

  return (
    <div className="home-page">
      <section className="home-page__hero">
        <div className="home-page__copy">
          <p className="eyebrow">Preparazione mirata</p>
          <h1 className="home-page__title">Simulatore TOLC-I</h1>
          <p className="home-page__subtitle">
            Esercitati con la banca dati TOLC-I, scegli le materie che ti servono e
            lavora con un flusso di studio chiaro, rapido e professionale.
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

          <div className="home-page__journey">
            <div className="home-page__journey-item">
              <span className="home-page__journey-index">01</span>
              <div>
                <h2>Componi la sessione</h2>
                <p>Seleziona materie, quantità di domande e criterio di estrazione.</p>
              </div>
            </div>
            <div className="home-page__journey-item">
              <span className="home-page__journey-index">02</span>
              <div>
                <h2>Rispondi senza attrito</h2>
                <p>Una domanda alla volta, progressione leggibile e verifica immediata.</p>
              </div>
            </div>
            <div className="home-page__journey-item">
              <span className="home-page__journey-index">03</span>
              <div>
                <h2>Rivedi e consolida</h2>
                <p>Raccogli errori e non risposte in una revisione pulita e focalizzata.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-page__preview">
          <div className="home-preview page-card">
            <div className="home-preview__section">
              <span className="home-preview__label">Sessione tipo</span>
              <div className="home-preview__subjects">
                <span>Logica</span>
                <span>Matematica</span>
                <span>Scienze</span>
              </div>
            </div>

            <div className="home-preview__section home-preview__section--accent">
              <div className="home-preview__row">
                <span>Domande</span>
                <strong>20</strong>
              </div>
              <div className="home-preview__row">
                <span>Modalità</span>
                <strong>Maggiori errori</strong>
              </div>
              <div className="home-preview__row">
                <span>Verifica</span>
                <strong>Immediata</strong>
              </div>
            </div>

            <div className="home-preview__section">
              <div className="home-preview__chart">
                <div className="home-preview__ring">
                  <span>78%</span>
                </div>
                <div className="home-preview__chart-copy">
                  <span>Monitoraggio continuo</span>
                  <p>La revisione finale ti riporta subito sui punti più fragili.</p>
                </div>
              </div>
            </div>

            <div className="home-preview__footer">
              <span>Banca dati aggiornata</span>
              <strong>{questionBankCount} quesiti TOLC-I</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-page__footer">Versione 1.2 · interfaccia ridisegnata per lo studio</footer>
    </div>
  );
}
