import { useEffect, useState } from 'react';
import { getLocalOutbox } from '../../services/authService.js';
import { navigate } from '../../hooks/usePathname.js';
import AuthLayout from './AuthLayout.jsx';

export default function LocalInboxPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadMessages() {
      try {
        const response = await getLocalOutbox();
        if (!active) return;
        setMessages(response.items || []);
      } catch (apiError) {
        if (!active) return;
        setError(apiError.message);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadMessages();
    return () => {
      active = false;
    };
  }, []);

  return (
    <AuthLayout
      eyebrow="Inbox locale"
      title="Messaggi generati dall’installazione locale"
      subtitle="Quando non è configurato un servizio email esterno, i link di verifica e recupero vengono salvati qui per il collaudo end-to-end."
    >
      <div className="auth-card">
        {loading ? <div className="auth-form__notice">Sto caricando i messaggi inviati dal sistema.</div> : null}
        {error ? <div className="auth-form__error">{error}</div> : null}

        <div className="auth-inline-actions">
          <button className="btn btn--ghost" onClick={() => navigate('/login')} type="button">
            Torna al login
          </button>
        </div>

        <div className="inbox-list">
          {messages.map((message) => (
            <article key={message.id} className="inbox-card">
              <div className="inbox-card__meta">
                <div>
                  <span className="inbox-card__label">{message.category}</span>
                  <div className="inbox-card__subject">{message.subject}</div>
                </div>
                <div className="inbox-card__details">
                  <div>{message.maskedTo}</div>
                  <div>{new Date(message.createdAt).toLocaleString('it-IT')}</div>
                </div>
              </div>
              <p className="inbox-card__text">{message.text}</p>
              <div className="auth-inline-actions">
                <a className="btn btn--secondary" href={message.actionUrl}>Apri link</a>
              </div>
            </article>
          ))}
          {!loading && messages.length === 0 ? (
            <div className="auth-form__notice">Non ci sono ancora messaggi nell’inbox locale.</div>
          ) : null}
        </div>
      </div>
    </AuthLayout>
  );
}
