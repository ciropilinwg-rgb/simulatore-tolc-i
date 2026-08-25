# Documentazione Tecnica: FASE 5 — Integrazione Ufficiale Lotto M2 (Geometria Analitica)

- **Data verifica**: 2026-08-25
- **Stato**: pre-commit
- **Repository ufficiale**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git di riferimento**: `ac1dbe3449f56d723fe0d10eabca40ce4a770f25`

---

## 1. Oggetto e Finalità
La presente documentazione attesta l'integrazione ufficiale nel simulatore concorso del **Lotto M2** (25 quesiti inediti di Matematica — Geometria Analitica, ID **348–372**) nel pool attivo di erogazione TOLC-I.

L'integrazione è stata eseguita preservando integralmente tutti i 342 record fisici preesistenti (compreso il Lotto M1 consolidato nella FASE 3), mantenendo inalterati i 35 record legacy isolati (`excludedFromTolcPool: true`) e garantendo l'assenza dei 5 buchi storici di numerazione (ID 2, 18, 25, 78, 202).

---

## 2. Bilancio Numerico ed Equazioni Matematiche

### A. Uguaglianza dei Record Fisici
$$\text{Record preesistenti baseline (A)} = 342$$
$$\text{Nuovi quesiti Lotto M2 integrati (B)} = 25$$
$$\text{Totale record fisici banca dati (C = A + B)} = 342 + 25 = \mathbf{367}$$

### B. Uguaglianza del Pool Attivo TOLC-I
$$\text{Totale record fisici banca dati (C)} = 367$$
$$\text{Record legacy isolati con } \texttt{excludedFromTolcPool: true} \text{ (L)} = 35$$
$$\text{Pool attivo per nuove esercitazioni TOLC-I (P = C - L)} = 367 - 35 = \mathbf{332}$$

---

## 3. Ripartizione del Pool Attivo per Materia (332 Quesiti)

| Materia | Base Attiva Pre-M2 | Lotto M2 Inedito | Totale Attivo TOLC-I | Quota % sul Pool |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | **142** | **+25** (ID 348–372) | **167** | 50,30% |
| **Logica** | **48** | **0** | **48** | 14,46% |
| **Scienze** | **68** | **0** | **68** | 20,48% |
| **Comprensione verbale** | **49** | **0** | **49** | 14,76% |
| **TOTALE ATTIVO** | **307** | **+25** | **332** | **100,00%** |

---

## 4. Ripartizione Fisica Totale (367 Record)

| Materia | Record Fisici Pre-M2 | Lotto M2 Inedito | Totale Record Fisici |
| :--- | :---: | :---: | :---: |
| **Matematica** | 143 (118 base + 25 M1) | +25 | **168** |
| **Logica** | 49 | 0 | **49** |
| **Scienze** | 70 | 0 | **70** |
| **Comprensione verbale** | 80 | 0 | **80** |
| **TOTALE FISICO** | **342** | **+25** | **367** |

---

## 5. Censimento dei 35 Record Legacy Invariati (`excludedFromTolcPool: true`)

Rimangono rigorosamente isolati dalle estrazioni i 35 record legacy:
1. **4 Duplicati non canonici**: ID **31**, **69**, **76**, **85**.
2. **30 Quesiti in lingua inglese**: ID **258–287** (NEW Test1 Q1–Q30).
3. **1 Quesito con anomalia di formulazione**: ID **315** (NEW Test1 Q58, `daVerificare: true`).

Tutti i 35 record legacy rimangono perfettamente accessibili per consultazione diretta (`getQuestionById`, `getRawQuestionById`), report e statistiche pregresse.

---

## 6. Mappatura Completa del Lotto M2 (ID 348–372)

Tutti i testi, le formule KaTeX, le opzioni corrette ed errate e le spiegazioni corrispondono al 100% al dataset approvato `M2-25-quesiti.json`:

| ID | Codice | Materia | Argomento | Testo della Domanda | Risposta Corretta |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **348** | M2-01 | Matematica | Geometria analitica | Nel piano cartesiano, quali sono le coordinate del punto $P'$, simmetrico del punto $P(-3, 5)$ rispetto all’origine degli assi $O(0,0)$? | $(3, -5)$ |
| **349** | M2-02 | Matematica | Geometria analitica | Qual è la distanza tra i punti $A(1, -2)$ e $B(4, 2)$ nel piano cartesiano? | $5$ |
| **350** | M2-03 | Matematica | Geometria analitica | Il punto medio del segmento $AB$ ha coordinate $M(2, 3)$. Se il punto $A$ ha coordinate $(-1, 7)$, quali sono le coordinate del punto $B$? | $(5, -1)$ |
| **351** | M2-04 | Matematica | Geometria analitica | Qual è il coefficiente angolare della retta passante per i punti $A(-2, 3)$ e $B(4, -1)$? | $-\frac{2}{3}$ |
| **352** | M2-05 | Matematica | Geometria analitica | Qual è il coefficiente angolare della retta di equazione $3x + 2y - 7 = 0$? | $-\frac{3}{2}$ |
| **353** | M2-06 | Matematica | Geometria analitica | Per quale valore del parametro reale $k$ il punto $P(k, 3)$ appartiene alla retta di equazione $2x - 5y + 7 = 0$? | $k = 4$ |
| **354** | M2-07 | Matematica | Geometria analitica | Qual è l’equazione della retta parallela all’asse delle ascisse passante per il punto $P(-4, 6)$? | $y = 6$ |
| **355** | M2-08 | Matematica | Geometria analitica | Qual è l’equazione della retta parallela alla retta $y = 3x - 1$ e passante per il punto $A(2, 1)$? | $y = 3x - 5$ |
| **356** | M2-09 | Matematica | Geometria analitica | Qual è il coefficiente angolare di una qualsiasi retta perpendicolare alla retta di equazione $4x - 2y + 5 = 0$? | $-\frac{1}{2}$ |
| **357** | M2-10 | Matematica | Geometria analitica | In quali punti la retta di equazione $3x - 4y + 12 = 0$ interseca rispettivamente l’asse delle ascisse e l’asse delle ordinate? | $(-4, 0)$ e $(0, 3)$ |
| **358** | M2-11 | Matematica | Geometria analitica | Quali sono le coordinate del centro $C$ e la misura del raggio $R$ della circonferenza di equazione $(x - 3)^2 + (y + 2)^2 = 16$? | $C(3, -2)$ e $R = 4$ |
| **359** | M2-12 | Matematica | Geometria analitica | Quali sono le coordinate del vertice $V$ della parabola di equazione $y = x^2 - 4x + 1$? | $V(2, -3)$ |
| **360** | M2-13 | Matematica | Geometria analitica | Qual è l’equazione della retta passante per i punti $A(1, 4)$ e $B(3, -2)$ nel piano cartesiano? | $y = -3x + 7$ |
| **361** | M2-14 | Matematica | Geometria analitica | Qual è il punto di intersezione $P$ tra le rette di equazione $2x - y - 1 = 0$ e $x + 2y - 8 = 0$ nel piano cartesiano? | $(2, 3)$ |
| **362** | M2-15 | Matematica | Geometria analitica | Qual è l’equazione dell’asse del segmento avente per estremi i punti $A(-1, 2)$ e $B(3, 4)$ nel piano cartesiano? | $y = -2x + 5$ |
| **363** | M2-16 | Matematica | Geometria analitica | Qual è la distanza del punto $P(2, -1)$ dalla retta di equazione $3x - 4y + 5 = 0$ nel piano cartesiano? | $3$ |
| **364** | M2-17 | Matematica | Geometria analitica | I vertici di un triangolo nel piano cartesiano sono $A(0, 0)$, $B(6, 0)$ e $C(2, 4)$. Qual è l’area del triangolo? | $12$ |
| **365** | M2-18 | Matematica | Geometria analitica | Quali sono le coordinate del centro $C$ e la misura del raggio $R$ della circonferenza di equazione $x^2 + y^2 - 6x + 4y - 12 = 0$? | $C(3, -2)$ e $R = 5$ |
| **366** | M2-19 | Matematica | Geometria analitica | Qual è la posizione reciproca della retta $x = 4$ rispetto alla circonferenza di equazione $x^2 + y^2 = 25$ nel piano cartesiano? | La retta è secante e interseca la circonferenza in due punti distinti |
| **367** | M2-20 | Matematica | Geometria analitica | Qual è l’equazione della circonferenza avente centro nel punto $C(2, -3)$ e passante per l’origine degli assi $O(0,0)$? | $x^2 + y^2 - 4x + 6y = 0$ |
| **368** | M2-21 | Matematica | Geometria analitica | In quanti punti distinti la retta $y = 2x - 1$ interseca la parabola $y = x^2 - x + 1$ nel piano cartesiano? | In 2 punti distinti |
| **369** | M2-22 | Matematica | Geometria analitica | Qual è l’equazione dell’asse di simmetria della parabola di equazione $y = -2x^2 + 8x - 5$? | $x = 2$ |
| **370** | M2-23 | Matematica | Geometria analitica | Nel fascio di rette di equazione $(k + 1)x + (2k - 1)y - 5 = 0$, quale retta si ottiene per il valore del parametro $k$ tale che la retta sia parallela all’asse delle ascisse? | $y = -\frac{5}{3}$ |
| **371** | M2-24 | Matematica | Geometria analitica | Quali sono le coordinate dei fuochi dell’ellisse di equazione $\frac{x^2}{25} + \frac{y^2}{9} = 1$ nel piano cartesiano? | $F_1(-4, 0)$ e $F_2(4, 0)$ |
| **372** | M2-25 | Matematica | Geometria analitica | La parabola $y = 4 - x^2$ interseca l’asse delle ascisse nei punti $A$ e $B$ e ha vertice nel punto $V$. Qual è l’area del triangolo $ABV$ nel piano cartesiano? | $8$ |

---

## 7. Buchi di Numerazione Storici Preservati

I seguenti identificativi non vengono mai riutilizzati:
- **ID 2, 18, 25, 78, 202** (5 buchi storici nel range 1..372).
- Verifica: $372 - 5 = 367$ record fisici univoci.

---

## 8. Quadro di Conformità dei Test ed Esecuzione

- **Test unitari** (`npm.cmd run test:unit`): **PASS** (171 test passati, 0 falliti).
  - `testQuiz.mjs`: 83 test (banca 367, censimento M1 e M2, isolamento 35 legacy, esclusione ID 315 in tutte e 3 le modalità, ripartizione 167/48/68/49, scoring, bilanci matematici).
  - `testQuestionCatalog.mjs`: 59 test (deduplicazione, catalogo canonico 367 / pool 332, rendering KaTeX).
  - `testNewTest1Integration.mjs`: 29 test (integrazione 65 quesiti NEW Test1, tabelle, grafici SVG, neutralità Q58, integrità banca 367).
- **Test di integrazione multi-utente** (`npm.cmd run test:integration`): **PASS** (48 test passati, 0 falliti).
- **Audit banca dati** (`npm.cmd run audit:questions`): **PASS** (report Markdown e JSON generati regolarmente in `outputs/`).
- **Compilazione di produzione** (`npm.cmd run build`): **PASS** (bundle Vite completato con successo).
- **Controllo whitespace** (`git diff --check`): **PASS** (0 errori).
