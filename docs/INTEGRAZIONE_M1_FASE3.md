# Documentazione Tecnica: FASE 3 — Integrazione Ufficiale Lotto M1 e Isolamento Record Legacy

- **Data verifica**: 2026-08-25
- **Stato**: pre-commit
- **Repository ufficiale**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git di riferimento**: `a5ae1a9cc50ddbcdd5a4eb199a13ebe7792bc2a2`

---

## 1. Oggetto e Finalità
La presente documentazione attesta l'integrazione ufficiale nel simulatore concorso del **Lotto M1** (25 quesiti inediti di Matematica, ID **323–347**) e l'isolamento metodologico e architetturale dei **35 record fisici legacy** dal pool attivo di esercitazione TOLC-I.

Tutte le operazioni rispettano i vincoli di non regressione, preservazione dei buchi storici di numerazione e separazione tra banca fisica integrale (342 record) e pool attivo di erogazione (307 quesiti).

---

## 2. Bilancio Numerico ed Equazioni Matematiche

### A. Uguaglianza dei Record Fisici
$$\text{Record preesistenti baseline (A)} = 317$$
$$\text{Nuovi quesiti Lotto M1 integrati (B)} = 25$$
$$\text{Totale record fisici banca dati (C = A + B)} = 317 + 25 = 342$$

### B. Uguaglianza del Pool Attivo TOLC-I
$$\text{Totale record fisici banca dati (C)} = 342$$
$$\text{Record legacy isolati con } \texttt{excludedFromTolcPool: true} \text{ (L)} = 35$$
$$\text{Pool attivo per nuove esercitazioni TOLC-I (P = C - L)} = 342 - 35 = 307$$

---

## 3. Ripartizione del Pool Attivo per Materia (307 Quesiti)

| Materia | Base Attiva Pre-M1 | Lotto M1 Inedito | Totale Attivo TOLC-I | Quota % sul Pool |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | **117** | **+25** (ID 323–347) | **142** | 46,25% |
| **Logica** | **48** | **0** | **48** | 15,64% |
| **Scienze** | **68** | **0** | **68** | 22,15% |
| **Comprensione verbale** | **49** | **0** | **49** | 15,96% |
| **TOTALE ATTIVO** | **282** | **+25** | **307** | **100,00%** |

---

## 4. Censimento e Isolamento dei 35 Record Legacy (`excludedFromTolcPool: true`)

I seguenti 35 record fisici sono contrassegnati con `excludedFromTolcPool: true`. Vengono rigorosamente esclusi dalle funzioni di selezione e generazione dei quiz per nuove sessioni, ma rimangono integralmente conservati in `src/data/questionBank.js` e accessibili per lookup diretto (`getQuestionById`, `getRawQuestionById`), consultazione storica, calcolo statistiche pregresse e audit:

1. **4 Duplicati non canonici** (risolti storicamente):
   - **ID 31** (Scienze): duplicato non canonico di ID 246.
   - **ID 69** (Matematica): duplicato non canonico di ID 154.
   - **ID 76** (Logica): duplicato non canonico di ID 104.
   - **ID 85** (Scienze): duplicato non canonico di ID 219.
2. **30 Quesiti in lingua inglese**:
   - **ID 258–287** (Comprensione verbale): estratti da NEW Test1.pdf (Q1–Q30) per la sezione di lingua inglese, non pertinenti al sillabo standard in lingua italiana del TOLC-I.
3. **1 Quesito con anomalia di formulazione**:
   - **ID 315** (Comprensione verbale / Quesito 58 di NEW Test1.pdf, flag `daVerificare: true`): anomalia intrinseca nelle opzioni rispetto alla tesi del brano. Escluso dalle selezioni casuali, per maggiori errori e meno svolte, ma pienamente recuperabile tramite lookup con brano integrale preservato.

---

## 5. Mappatura Completa del Lotto M1 (ID 323–347)

Tutti i testi, le formule KaTeX, le opzioni corrette ed errate e le spiegazioni corrispondono al 100% al dataset approvato `M1-25-quesiti.json`:

| ID | Codice | Materia | Argomento | Testo della Domanda | Risposta Corretta |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **323** | M1-01 | Matematica | Aritmetica e algebra | Un abito da 120 euro viene scontato del 25% e poi del 10%. Il prezzo finale è: | 81 euro |
| **324** | M1-02 | Matematica | Aritmetica e algebra | L’espressione $(2^5 \cdot 4^{-2}) : 8^{-1}$ è uguale a: | $16$ |
| **325** | M1-03 | Matematica | Aritmetica e algebra | Semplificando $(2a - 3b)^2 - (2a + 3b)(2a - 3b)$ si ottiene: | $18b^2 - 12ab$ |
| **326** | M1-04 | Matematica | Aritmetica e algebra | La soluzione dell’equazione $\frac{3x - 1}{2} = 2x - 3$ è: | $x = 5$ |
| **327** | M1-05 | Matematica | Aritmetica e algebra | Due tubi riempiono una vasca in 6 ore. Il primo da solo impiega 10 ore. Il secondo impiega: | 15 ore |
| **328** | M1-06 | Matematica | Aritmetica e algebra | Scomponendo $x^3 - 2x^2 - 9x + 18$ in fattori irriducibili si ottiene: | $(x - 2)(x - 3)(x + 3)$ |
| **329** | M1-07 | Matematica | Aritmetica e algebra | L’espressione $\sqrt{75} - \sqrt{48} + \sqrt{12}$ equivale a: | $3\sqrt{3}$ |
| **330** | M1-08 | Matematica | Aritmetica e algebra | Le radici reali dell’equazione $2x^2 - 5x = 0$ sono: | $x_1 = 0$ e $x_2 = \frac{5}{2}$ |
| **331** | M1-09 | Matematica | Aritmetica e algebra | Semplificando l’espressione $(-2a^2 b)^3 : (4a^4 b^2)$ si ottiene: | $-2a^2 b$ |
| **332** | M1-10 | Matematica | Aritmetica e algebra | Un bene costa 610 euro inclusa IVA al 22%. Il prezzo netto è: | 500 euro |
| **333** | M1-11 | Matematica | Aritmetica e algebra | Il valore numerico di $10{,}5^2 - 9{,}5^2$ è: | $20$ |
| **334** | M1-12 | Matematica | Aritmetica e algebra | Semplificando $(2x^2 - 8)/(x^2 + 2x)$ per $x \ne 0$ e $x \ne -2$ si ottiene: | $\frac{2(x - 2)}{x}$ |
| **335** | M1-13 | Matematica | Aritmetica e algebra | L’insieme di tutte le soluzioni reali della disequazione $4(x - 1) - 3(2x + 1) \ge 5$ è dato da: | $x \le -6$ |
| **336** | M1-14 | Matematica | Aritmetica e algebra | L’insieme delle soluzioni reali della disequazione fratta $\frac{2x - 5}{3 - x} \ge 0$ è: | $\frac{5}{2} \le x < 3$ |
| **337** | M1-15 | Matematica | Aritmetica e algebra | Per quale valore del parametro reale $k$ la somma delle radici dell’equazione $2x^2 + (k - 3)x - 8 = 0$ è uguale a $-4$? | $k = 11$ |
| **338** | M1-16 | Matematica | Aritmetica e algebra | In un bar, 3 caffè e 2 cornetti costano in totale 6,20 euro, mentre 2 caffè e 3 cornetti costano 6,80 euro. Quanto costa un singolo cornetto? | 1,60 euro |
| **339** | M1-17 | Matematica | Aritmetica e algebra | Qual è l’insieme delle soluzioni reali della disequazione quadratica $3x^2 - 5x - 2 \le 0$? | $-\frac{1}{3} \le x \le 2$ |
| **340** | M1-18 | Matematica | Aritmetica e algebra | Determinare tutte le soluzioni reali dell’equazione con valore assoluto $\|2x - 3\| = x + 1$ nell’insieme dei numeri reali: | Due soluzioni: $x = 4$ e $x = \frac{2}{3}$ |
| **341** | M1-19 | Matematica | Aritmetica e algebra | Semplificando l’espressione $\frac{1}{x - 2} - \frac{4}{x^2 - 4}$ nel suo insieme di definizione si ottiene: | $\frac{1}{x + 2}$ con $x \ne 2$ e $x \ne -2$ |
| **342** | M1-20 | Matematica | Aritmetica e algebra | Razionalizzando il denominatore della frazione $\frac{4}{\sqrt{5} + 1}$, quale espressione equivalente si ottiene? | $\sqrt{5} - 1$ |
| **343** | M1-21 | Matematica | Aritmetica e algebra | Mescolando 200 grammi di una soluzione acquosa con concentrazione del 10% in massa di sale con 300 grammi di una soluzione al 20% in massa di sale, qual è la concentrazione percentuale in massa della miscela risultante? | $16\%$ |
| **344** | M1-22 | Matematica | Aritmetica e algebra | In una biblioteca scolastica ci sono in totale 280 libri tra narrativa e saggistica. Se i libri di narrativa superano di 40 unità il triplo dei libri di saggistica, quanti sono i libri di narrativa? | 220 |
| **345** | M1-23 | Matematica | Aritmetica e algebra | Qual è il numero complessivo di soluzioni reali distinte dell’equazione biquadratica $x^4 - 10x^2 + 9 = 0$? | 4 soluzioni |
| **346** | M1-24 | Matematica | Aritmetica e algebra | Qual è l’insieme delle soluzioni reali del sistema di disequazioni lineari $\begin{cases} 3x - 2 > 4 \\ 5 - 2x \ge -1 \end{cases}$? | $2 < x \le 3$ |
| **347** | M1-25 | Matematica | Aritmetica e algebra | Qual è l’insieme di tutte le soluzioni reali della disequazione di terzo grado $x^3 - 3x^2 - 4x + 12 \ge 0$? | $-2 \le x \le 2$ oppure $x \ge 3$ |

---

## 6. Buchi di Numerazione Storici Preservati

I seguenti identificativi non sono mai stati assegnati o sono stati dismessi nelle versioni pregresse e **non vengono mai riutilizzati**:
- **ID 2, 18, 25, 78, 202** (5 buchi storici nel range 1..347).
- Verifica: $347 - 5 = 342$ record fisici univoci.

---

## 7. Quadro di Conformità dei Test ed Esecuzione

- **Test unitari** (`npm.cmd run test:unit`): **PASS** (165 test passati, 0 falliti).
  - `testQuiz.mjs`: 77 test (banca 342, censimento M1, isolamento 35 legacy, esclusione ID 315 in tutte e 3 le modalità, ripartizione 142/48/68/49, scoring, bilanci matematici).
  - `testQuestionCatalog.mjs`: 59 test (deduplicazione, catalogo canonico, rendering KaTeX).
  - `testNewTest1Integration.mjs`: 29 test (integrazione 65 quesiti NEW Test1, tabelle, grafici SVG, neutralità Q58).
- **Test di integrazione multi-utente** (`npm.cmd run test:integration`): **PASS** (48 test passati, 0 falliti).
- **Audit banca dati** (`npm.cmd run audit:questions`): **PASS** (report Markdown e JSON generati regolarmente in `outputs/`).
- **Compilazione di produzione** (`npm.cmd run build`): **PASS** (build Vite completata con successo).
