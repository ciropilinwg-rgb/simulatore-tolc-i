# Integrazione Ufficiale Lotto S1 (Scienze — Meccanica) — FASE 13

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `2be02d83261f993653c03d3c00c4b0b7cb401d75` (*"Integra lotto M5 e aggiorna test"*)
**Dataset Autoritativo Sorgente**: `scratch/S1-35-quesiti.json` (approvato definitivamente dopo FASE 12-TER)
**Target File Modificato**: `src/data/questionBank.js`
**Test Aggiornati**: `src/tests/testQuiz.mjs`, `src/tests/testQuestionCatalog.mjs`, `src/tests/testNewTest1Integration.mjs`

---

## 1. Sintesi dell'Integrazione

Il Lotto **S1** introduce **35 nuovi quesiti originali di Scienze (Meccanica)**, mappati in modo strettamente sequenziale sugli **ID ufficiali 456–490**.

- **Calibrazione Difficoltà**: 34 Medio (M), 1 Medio-difficile (MD — `S1-35` / ID 490).
- **Protezione Baseline**: Tutti i 450 record fisici preesistenti (ID 1–455) sono rimasti rigorosamente intatti (450/450 byte-by-byte match).
- **Parità Dataset**: 35/35 record runtime corrispondono al 100% con il JSON autoritativo.
- **Buchi Storici Preservati**: Assenza confermata per gli ID non riutilizzabili `2`, `18`, `25`, `78`, `202`.
- **Legacy Esclusi**: Esattamente 35 record fisici isolati con `excludedFromTolcPool: true`.

---

## 2. Metriche e Conteggi Pre / Post Integrazione

### Conteggio Globale
| Metrica | Pre-S1 (Baseline) | Post-S1 | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 450 | **485** | +35 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **Pool Attivo TOLC-I** | 415 | **450** | +35 |
| **ID Minimo** | 1 | **1** | 0 |
| **ID Massimo** | 455 | **490** | +35 |

### Ripartizione per Materia
| Materia | Fisici Pre-S1 | Fisici Post-S1 | Attivi Pre-S1 | Attivi Post-S1 |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | **251** | 250 | **250** |
| **Logica** | 49 | **49** | 48 | **48** |
| **Scienze** | 70 | **105** | 68 | **103** |
| **Comprensione verbale** | 80 | **80** | 49 | **49** |
| **Totale** | 450 | **485** | 415 | **450** |

---

## 3. Registro Dettagliato dei Quesiti Integrati (ID 456–490)

| ID | Codice | Sottoargomento | Diff. | Formula / Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **456** | `S1-01` | Analisi dimensionale e costanti fisiche | M | `$\text{kg}\cdot\text{s}^{-2}$` |
| **457** | `S1-02` | Composizione di vettori perpendicolari | M | `$10\text{ N}$` |
| **458** | `S1-03` | Scomposizione forza peso su piano inclinato | M | `$20\text{ N}$` |
| **459** | `S1-04` | Lavoro di una forza costante inclinata | M | `$100\text{ J}$` |
| **460** | `S1-05` | Moto rettilineo uniforme e incontro veicoli | M | `$10\text{ s}$` |
| **461** | `S1-06` | Moto uniformemente accelerato (Torricelli) | M | `$12\text{ m/s}$` |
| **462** | `S1-07` | Caduta libera da fermo | M | `$3\text{ s}$` |
| **463** | `S1-08` | Lancio verticale verso l’alto e quota massima | M | `$20\text{ m}$` |
| **464** | `S1-09` | Interpretazione grafico velocità-tempo | M | `$30\text{ m}$` |
| **465** | `S1-10` | Moto dei proiettili con lancio orizzontale | M | `$30\text{ m}$` |
| **466** | `S1-11` | Seconda legge di Newton con forze multiple | M | `$3\text{ m/s}^2$` |
| **467** | `S1-12` | Terzo principio della dinamica | M | `Una forza di modulo esattamente pari a $600\text{ N}$, diretta all’indietro` |
| **468** | `S1-13` | Forza di attrito dinamico su piano orizzontale | M | `$15\text{ N}$` |
| **469** | `S1-14` | Attrito statico e soglia di distacco | M | `$25\text{ N}$` |
| **470** | `S1-15` | Peso apparente in sistema accelerato | M | `$840\text{ N}$` |
| **471** | `S1-16` | Macchina di Atwood ideale | M | `$2\text{ m/s}^2$` |
| **472** | `S1-17` | Tensione fune tra due blocchi trainati | M | `$8\text{ N}$` |
| **473** | `S1-18` | Variazione di energia cinetica quadratica | M | `$180\text{ kJ}$` |
| **474** | `S1-19` | Energia potenziale elastica molla | M | `$2\text{ J}$` |
| **475** | `S1-20` | Conversione energia elastica in cinetica | M | `$2\text{ m/s}$` |
| **476** | `S1-21` | Teorema forze vive e lavoro attrito | M | `$-36\text{ J}$` |
| **477** | `S1-22` | Potenza meccanica media | M | `$2\text{ kW}$` |
| **478** | `S1-23` | Lavoro non conservativo ed energia dissipata | M | `$102\text{ J}$` |
| **479** | `S1-24` | Teorema dell’impulso e quantità di moto | M | `$48\text{ N}$` |
| **480** | `S1-25` | Conservazione quantità di moto e rinculo | M | `$4\text{ m/s}$` |
| **481** | `S1-26` | Urto perfettamente anelastico | M | `$2\text{ m/s}$` |
| **482** | `S1-27` | Urto elastico frontale masse uguali | M | `La prima sferetta si ferma completamente e la seconda si muove in avanti con velocità $v$` |
| **483** | `S1-28` | Variazione vettoriale quantità di moto | M | `$6\text{ kg}\cdot\text{m/s}$` |
| **484** | `S1-29` | Velocità tangenziale moto circolare uniforme | M | `$2\pi\text{ m/s}$` |
| **485** | `S1-30` | Accelerazione centripeta in curva circolare | M | `$5\text{ m/s}^2$` |
| **486** | `S1-31` | Tensione fune con vincolo al centro | M | `$16\text{ N}$` |
| **487** | `S1-32` | Gravità superficiale corpi celesti ($2M_T, 2R_T$) | M | `$5\text{ m/s}^2$` |
| **488** | `S1-33` | Momento di una forza rispetto a un polo | M | `$20\text{ N}\cdot\text{m}$` |
| **489** | `S1-34` | Equilibrio leva di primo genere | M | `$50\text{ N}$` |
| **490** | `S1-35` | Equilibrio trave omogenea e tirante a 30° | MD | `$200\text{ N}$` |

---

## 4. Regression Checks Puntuali Superati

- **ID 459 (S1-04)**: lavoro forza inclinata con angolo a $60^\circ \implies 100\text{ J}$ (**PASS**).
- **ID 471 (S1-16)**: macchina di Atwood con masse 3 kg e 2 kg $\implies 2\text{ m/s}^2$ (**PASS**).
- **ID 473 (S1-18)**: variazione energia cinetica $1200\text{ kg}$ da $10$ a $20\text{ m/s} \implies 180\text{ kJ}$ (**PASS**).
- **ID 478 (S1-23)**: energia termica dissipata dall'attrito $Q = mgh - \frac{1}{2}mv^2 \implies 102\text{ J}$ (**PASS**).
- **ID 481 (S1-26)**: urto perfettamente anelastico $\implies 2\text{ m/s}$; distrattore $6\text{ m/s}$ incluso (**PASS**).
- **ID 486 (S1-31)**: fune vincolata al centro della guida circolare $\implies 16\text{ N}$ (**PASS**).
- **ID 487 (S1-32)**: pianeta con $M_P = 2 M_T, R_P = 2 R_T \implies g_P = 5\text{ m/s}^2$ (**PASS**).
- **ID 490 (S1-35)**: trave con tirante a $30^\circ \implies 200\text{ N}$; distrattori con radici coerenti (**PASS**).

---

## 5. Validazione KaTeX, Deduplicazione e Test Suite

- **KaTeX Reale**: 393 formule verificate con `throwOnError: true` $\implies$ **0 errori**.
- **Deduplicazione Globale**: 0 duplicati o collisioni introdotte sull'intera banca dati di 485 record.
- **Suite di Test Completa**:
  - `npm.cmd run test:unit` $\implies$ **PASS**
  - `npm.cmd run test:integration` $\implies$ **PASS**
  - `npm.cmd run audit:questions` $\implies$ **PASS**
  - `npm.cmd run build` $\implies$ **PASS**
  - `git diff --check` $\implies$ **PASS** (nessun whitespace error).
