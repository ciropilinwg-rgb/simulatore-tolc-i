# Documentazione Tecnica: FASE 7 — Integrazione Ufficiale Lotto M3 (Trigonometria)

- **Data verifica**: 2026-08-25
- **Stato**: pre-commit
- **Repository ufficiale**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git di riferimento**: `a659f564a814a9817caeb14725f93b79ed93efd3`

---

## 1. Oggetto e Finalità
La presente documentazione attesta l'integrazione ufficiale nel simulatore concorso del **Lotto M3** (25 quesiti inediti di Matematica — Trigonometria, ID **373–397**) nel pool attivo di erogazione TOLC-I, approvato dopo la rifinitura di M3-24 (ID 396 con quantificazione esplicita $k \in \mathbb{Z}$).

L'integrazione è stata eseguita preservando integralmente tutti i 367 record fisici preesistenti (compresi i Lotti M1 e M2 consolidati), mantenendo inalterati i 35 record legacy isolati (`excludedFromTolcPool: true`) e garantendo l'assenza tassativa dei 5 buchi storici di numerazione (ID 2, 18, 25, 78, 202).

---

## 2. Bilancio Numerico ed Equazioni Matematiche

### A. Uguaglianza dei Record Fisici
$$\text{Record preesistenti baseline (A)} = 367$$
$$\text{Nuovi quesiti Lotto M3 integrati (B)} = 25$$
$$\text{Totale record fisici banca dati (C = A + B)} = 367 + 25 = \mathbf{392}$$

### B. Uguaglianza del Pool Attivo TOLC-I
$$\text{Totale record fisici banca dati (C)} = 392$$
$$\text{Record legacy isolati con } \texttt{excludedFromTolcPool: true} \text{ (L)} = 35$$
$$\text{Pool attivo per nuove esercitazioni TOLC-I (P = C - L)} = 392 - 35 = \mathbf{357}$$

---

## 3. Ripartizione del Pool Attivo per Materia (357 Quesiti)

| Materia | Base Attiva Pre-M3 | Lotto M3 Inedito | Totale Attivo TOLC-I | Quota % sul Pool |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | **167** | **+25** (ID 373–397) | **192** | 53,78% |
| **Logica** | **48** | **0** | **48** | 13,45% |
| **Scienze** | **68** | **0** | **68** | 19,05% |
| **Comprensione verbale** | **49** | **0** | **49** | 13,72% |
| **TOTALE ATTIVO** | **332** | **+25** | **357** | **100,00%** |

---

## 4. Ripartizione Fisica Totale (392 Record)

| Materia | Record Fisici Pre-M3 | Lotto M3 Inedito | Totale Record Fisici |
| :--- | :---: | :---: | :---: |
| **Matematica** | 168 (118 base + 25 M1 + 25 M2) | +25 | **193** |
| **Logica** | 49 | 0 | **49** |
| **Scienze** | 70 | 0 | **70** |
| **Comprensione verbale** | 80 | 0 | **80** |
| **TOTALE FISICO** | **367** | **+25** | **392** |

---

## 5. Censimento dei 35 Record Legacy Invariati (`excludedFromTolcPool: true`)

Rimangono rigorosamente isolati dalle estrazioni i 35 record legacy:
1. **4 Duplicati non canonici**: ID **31**, **69**, **76**, **85**.
2. **30 Quesiti in lingua inglese**: ID **258–287** (NEW Test1 Q1–Q30).
3. **1 Quesito con anomalia di formulazione**: ID **315** (NEW Test1 Q58, `daVerificare: true`).

Tutti i 35 record legacy rimangono perfettamente accessibili per consultazione diretta (`getQuestionById`, `getRawQuestionById`), report e statistiche pregresse.

---

## 6. Mappatura Completa del Lotto M3 (ID 373–397)

Tutti i testi, le formule KaTeX, le opzioni corrette ed errate e le spiegazioni corrispondono al 100% al dataset approvato `M3-25-quesiti.json` (con M3-24 / ID 396 recante la condizione $k \in \mathbb{Z}$):

| ID | Codice | Materia | Argomento | Testo della Domanda | Risposta Corretta |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **373** | M3-01 | Matematica | Trigonometria | A quanti radianti corrisponde un angolo di ampiezza pari a $150^\circ$? | $\frac{5}{6}\pi$ |
| **374** | M3-02 | Matematica | Trigonometria | Qual è il valore numerico dell’espressione $\sin\left(\frac{\pi}{3}\right) + \cos\left(\frac{\pi}{6}\right)$? | $\sqrt{3}$ |
| **375** | M3-03 | Matematica | Trigonometria | Se $\alpha$ è un angolo appartenente al secondo quadrante ($\frac{\pi}{2} < \alpha < \pi$), quali sono i segni rispettivi di $\sin\alpha$, $\cos\alpha$ e $\tan\alpha$? | $\sin\alpha > 0$, $\cos\alpha < 0$, $\tan\alpha < 0$ |
| **376** | M3-04 | Matematica | Trigonometria | Sapendo che $\cos x = -\frac{3}{5}$ e che $\pi < x < \frac{3}{2}\pi$ (terzo quadrante), qual è il valore di $\sin x$? | $-\frac{4}{5}$ |
| **377** | M3-05 | Matematica | Trigonometria | A quale espressione equivale $\cos(\pi - x)$ per ogni valore reale di $x$? | $-\cos x$ |
| **378** | M3-06 | Matematica | Trigonometria | Quante soluzioni ammette l’equazione $\sin x = \frac{1}{2}$ nell’intervallo $[0, 2\pi)$? | Esattamente 2 soluzioni |
| **379** | M3-07 | Matematica | Trigonometria | In un triangolo rettangolo, l’ipotenusa misura $10\text{ cm}$ e uno degli angoli acuti misura $30^\circ$. Quanto misura il cateto opposto a tale angolo? | $5\text{ cm}$ |
| **380** | M3-08 | Matematica | Trigonometria | A quale espressione equivale $\sin\left(\frac{\pi}{2} - x\right)$ per ogni $x \in \mathbb{R}$? | $\cos x$ |
| **381** | M3-09 | Matematica | Trigonometria | Sapendo che per un angolo $\alpha$ si ha $\sin\alpha = \frac{4}{5}$ e $\cos\alpha = -\frac{3}{5}$, quanto vale $\tan\alpha$? | $-\frac{4}{3}$ |
| **382** | M3-10 | Matematica | Trigonometria | Qual è il periodo fondamentale $T$ della funzione $f(x) = \cos(3x)$? | $\frac{2}{3}\pi$ |
| **383** | M3-11 | Matematica | Trigonometria | Per quale dei seguenti valori dell’angolo $x \in [0, \pi)$ la funzione $\tan x$ non è definita? | $x = \frac{\pi}{2}$ |
| **384** | M3-12 | Matematica | Trigonometria | Semplificando l’espressione $\frac{1 - \sin^2 x}{\cos x}$ per tutti i valori di $x$ in cui $\cos x \ne 0$, si ottiene: | $\cos x$ |
| **385** | M3-13 | Matematica | Trigonometria | Se per un angolo acuto $x \in \left(0, \frac{\pi}{2}\right)$ si ha $\sin x = \frac{3}{5}$, quanto vale $\sin(2x)$? | $\frac{24}{25}$ |
| **386** | M3-14 | Matematica | Trigonometria | Se $\cos x = \frac{1}{3}$, qual è il valore di $\cos(2x)$? | $-\frac{7}{9}$ |
| **387** | M3-15 | Matematica | Trigonometria | Quali sono tutte le soluzioni dell’equazione $2\cos^2 x - \cos x = 0$ nell’intervallo $[0, 2\pi)$? | $x = \frac{\pi}{3},\ \frac{\pi}{2},\ \frac{3}{2}\pi,\ \frac{5}{3}\pi$ |
| **388** | M3-16 | Matematica | Trigonometria | Per quali valori di $x \in [0, 2\pi)$ è verificata la disequazione $\sin x > \frac{\sqrt{3}}{2}$? | $\frac{\pi}{3} < x < \frac{2}{3}\pi$ |
| **389** | M3-17 | Matematica | Trigonometria | In un triangolo, due lati misurano $6\text{ cm}$ e $8\text{ cm}$ e l’angolo tra essi compreso misura $60^\circ$. Qual è l’area del triangolo? | $12\sqrt{3}\text{ cm}^2$ |
| **390** | M3-18 | Matematica | Trigonometria | In un triangolo $ABC$, i lati $AB$ e $AC$ misurano rispettivamente $4\text{ cm}$ e $5\text{ cm}$ e l’angolo compreso $\widehat{BAC}$ misura $60^\circ$. Qual è la misura del terzo lato $BC$? | $\sqrt{21}\text{ cm}$ |
| **391** | M3-19 | Matematica | Trigonometria | In un triangolo $ABC$, l’angolo in $A$ misura $45^\circ$, l’angolo in $B$ misura $30^\circ$ e il lato opposto ad $A$ misura $a = 6\sqrt{2}\text{ cm}$. Quanto misura il lato $b$ opposto all’angolo $B$? | $6\text{ cm}$ |
| **392** | M3-20 | Matematica | Trigonometria | Un osservatore posto a $30\text{ metri}$ dalla base di un edificio verticale ne misura la sommità con un angolo di elevazione di $30^\circ$ rispetto al terreno orizzontale. Trascurando l’altezza dell’osservatore, qual è l’altezza dell’edificio? | $10\sqrt{3}\text{ metri}$ |
| **393** | M3-21 | Matematica | Trigonometria | Quali sono tutte le soluzioni dell’equazione $\sin x - \sqrt{3}\cos x = 0$ nell’intervallo $[0, 2\pi)$? | $x = \frac{\pi}{3}$ e $x = \frac{4}{3}\pi$ |
| **394** | M3-22 | Matematica | Trigonometria | Per quali valori di $x \in [0, 2\pi)$ è verificata la disequazione $\cos x \le -\frac{1}{2}$? | $\frac{2}{3}\pi \le x \le \frac{4}{3}\pi$ |
| **395** | M3-23 | Matematica | Trigonometria | Qual è l’espressione semplificata di $(\sin x + \cos x)^2 - \sin(2x)$ per ogni $x \in \mathbb{R}$? | $1$ |
| **396** | M3-24 | Matematica | Trigonometria | Per ogni $x \ne \frac{\pi}{2} + k\pi$, con $k \in \mathbb{Z}$, a quale delle seguenti espressioni equivale $1 + \tan^2 x$? | $\frac{1}{\cos^2 x}$ |
| **397** | M3-25 | Matematica | Trigonometria | In un triangolo isoscele di base $b = 12\text{ cm}$, i due lati obliqui misurano ciascuno $10\text{ cm}$. Detto $\alpha$ ciascuno dei due angoli alla base, qual è il valore esatto di $\sin(2\alpha)$? | $\frac{24}{25}$ |

---

## 7. Buchi di Numerazione Storici Preservati

I seguenti identificativi non vengono mai riutilizzati:
- **ID 2, 18, 25, 78, 202** (5 buchi storici nel range 1..397).
- Verifica: $397 - 5 = 392$ record fisici univoci.

---

## 8. Quadro di Conformità dei Test ed Esecuzione

- **Test unitari** (`npm.cmd run test:unit`): **PASS** (173 test passati, 0 falliti).
  - `testQuiz.mjs`: 85 test (banca 392, censimento M1, M2 e M3, isolamento 35 legacy, esclusione ID 315, ripartizione 192/48/68/49, scoring, bilanci matematici).
  - `testQuestionCatalog.mjs`: 59 test (deduplicazione, catalogo canonico 392 / pool 357, rendering KaTeX).
  - `testNewTest1Integration.mjs`: 29 test (integrazione 65 quesiti NEW Test1, tabelle, grafici SVG, neutralità Q58, integrità banca 392).
- **Test di integrazione multi-utente** (`npm.cmd run test:integration`): **PASS** (48 test passati, 0 falliti).
- **Audit banca dati** (`npm.cmd run audit:questions`): **PASS** (report Markdown e JSON generati regolarmente in `outputs/`).
- **Compilazione di produzione** (`npm.cmd run build`): **PASS** (bundle Vite completato con successo).
- **Controllo whitespace** (`git diff --check`): **PASS** (0 errori).
