# Deploy Online

Questa applicazione puo essere usata online da piu utenti mantenendo l'architettura attuale:

- frontend React gia buildato
- backend Node HTTP interno
- database SQLite su disco persistente
- invio email tramite Resend oppure fallback `local_outbox`

## Scelta consigliata

Per la versione attuale, la strada piu semplice e:

1. Render o Railway come hosting del servizio Node
2. disco persistente montato dal provider
3. URL pubblico HTTPS
4. Resend per email di conferma account e reset password

Questa soluzione va bene per:

- un solo server applicativo
- pochi o medi utenti contemporanei
- statistiche isolate per account

Non e invece la soluzione finale per scalare su piu istanze. Se in futuro vuoi piu server contemporanei, il passo successivo sara migrare da SQLite a PostgreSQL.

## Variabili d'ambiente

Parti dal file `.env.example`.

Valori minimi consigliati in produzione:

```env
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
APP_BASE_URL=https://tuo-dominio-pubblico
DATA_DIR=/var/data
RESEND_API_KEY=re_xxxxxxxxx
MAIL_FROM=Simulatore TOLC-I <noreply@tuodominio.it>
```

## Render

Configurazione pratica:

1. Pubblica il progetto su GitHub.
2. Crea un nuovo `Web Service` su Render collegando il repository.
3. Imposta:

```text
Build Command: npm install && npm run build
Start Command: npm run start
```

4. Aggiungi una `Persistent Disk`.
5. Monta il disco in:

```text
/var/data
```

6. Imposta le variabili d'ambiente:

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=10000`
- `APP_BASE_URL=https://<tuo-servizio>.onrender.com`
- `DATA_DIR=/var/data`
- `RESEND_API_KEY=...`
- `MAIL_FROM=...`

7. Come health check usa:

```text
/api/health
```

## Railway

Configurazione pratica:

1. Crea un nuovo servizio dal repository oppure con deploy da directory locale.
2. Imposta build e start:

```text
Build: npm install && npm run build
Start: npm run start
```

3. Aggiungi un `Volume`.
4. Monta il volume in:

```text
/data
```

5. Imposta:

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `APP_BASE_URL=https://<tuo-dominio-railway>`
- `DATA_DIR=/data`
- `RESEND_API_KEY=...`
- `MAIL_FROM=...`

## Email

Di default l'app usa `local_outbox`, utile solo in locale per test.

In produzione:

- se imposti `RESEND_API_KEY` e `MAIL_FROM`, la conferma email e il reset password vengono inviati come email vere
- se non li imposti, gli utenti non riceveranno email reali

## Verifiche dopo il deploy

Controlla questi punti:

1. `GET /api/health` risponde con `ok: true`
2. la registrazione crea l'account
3. arriva l'email di conferma
4. il login prima della verifica viene bloccato
5. il login dopo la verifica funziona
6. due utenti diversi vedono statistiche diverse
7. il logout invalida la sessione
8. il reset password invalida le sessioni precedenti

## Limite attuale da conoscere

La soluzione online preparata ora usa SQLite su disco persistente.

Questo significa:

- bene per singola istanza applicativa
- bene per un uso reale iniziale
- non ideale per scalare su piu server in parallelo

Se vuoi, il passo successivo posso farlo io: migrazione a PostgreSQL mantenendo tutta la logica multiutente gia costruita.
