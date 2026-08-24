# Deploy Online con Firebase

Questa applicazione ora è pensata per essere pubblicata gratuitamente con:

- `Firebase Hosting` per il frontend
- `Firebase Authentication` per registrazione, login, verifica email e reset password
- `Cloud Firestore` per profili, storico e statistiche personali

## Architettura online

La banca dati delle domande resta inclusa nel frontend.

I dati personali e statistici vengono invece salvati su Firebase in modo separato per utente:

- `users/{uid}` per il profilo
- `users/{uid}/questionStats/{questionId}` per le statistiche delle singole domande
- `users/{uid}/quizSessions/{sessionId}` per lo storico delle esercitazioni

## Prerequisiti

Prima del deploy assicurati di aver completato in Firebase:

1. creazione del progetto
2. attivazione di `Authentication`
3. attivazione di `Firestore`
4. registrazione della `Web App`

## Hosting

Configurazione inclusa nel progetto:

- [firebase.json](/C:/Users/Ciro/Documents/Codex/2026-08-15/sto/work/SimulatoreConcorso/SimulatoreConcorso/firebase.json)
- [firestore.rules](/C:/Users/Ciro/Documents/Codex/2026-08-15/sto/work/SimulatoreConcorso/SimulatoreConcorso/firestore.rules)
- [.firebaserc](/C:/Users/Ciro/Documents/Codex/2026-08-15/sto/work/SimulatoreConcorso/SimulatoreConcorso/.firebaserc)

Il deploy pubblica la cartella `dist` e reindirizza tutte le route su `index.html`, così login, registrazione, statistiche e pagine protette funzionano correttamente anche aprendo un URL diretto.

## Regole di sicurezza

Le regole Firestore fanno in modo che:

- ogni utente legga solo il proprio profilo
- ogni utente scriva solo dentro il proprio spazio
- le statistiche e le sessioni richiedano anche `email verificata`
- i documenti abbiano una struttura minima valida

Questo evita che l’isolamento multiutente sia solo grafico lato frontend.

## Deploy pratico

Comandi tipici:

```bash
npm install
npm run build
firebase login
firebase deploy
```

## Verifiche dopo il deploy

Controlla questi punti:

1. la home pubblica si apre online
2. la registrazione crea l’account
3. arriva l’email di conferma
4. il login prima della verifica viene bloccato
5. il login dopo la verifica funziona
6. due utenti diversi vedono statistiche diverse
7. `Maggiori errori` usa solo i dati del singolo utente
8. `Meno svolte` usa solo i dati del singolo utente
9. il logout chiude davvero la sessione
10. il reset password permette di rientrare con la nuova password

## Nota importante sui link email

Per una UX completamente coerente con le pagine interne dell’app, dopo il primo deploy conviene personalizzare in Firebase Authentication i template email di verifica e reset puntandoli alle route pubbliche dell’app.

Anche senza questa personalizzazione:

- la verifica email funziona
- il reset password funziona

Con la personalizzazione, invece, anche quelle operazioni useranno le schermate grafiche della tua web app.
