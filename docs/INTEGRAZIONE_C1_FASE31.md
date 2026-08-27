# Documento di Integrazione e Collaudo — Lotto C1 (FASE 31)

## 1. Dati Generali e Baseline

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git consolidata**: `5bc5a9d4dbe9610e122b19ef8ee602277dce933b` (*"Integra lotto L4 e aggiorna test"*)
- **Dataset Frozen integrato**: `scratch/C1-40-quesiti.json`
- **Dimensione file frozen**: `88.028 byte`
- **SHA-256 frozen**: `c9ff5f3ef0ca76cb57e889fc64e319c1f5739511dbc357465c3f60a39415d45f`

---

## 2. Dati del Lotto C1

- **Materia**: Comprensione verbale (40/40)
- **Range ID**: `840` $\to$ `879` (40 quesiti consecutivi e strettamente univoci)
- **Stato TOLC-I**: 40/40 attivi (`excludedFromTolcPool !== true`)
- **Distribuzione difficoltà**: `0 Medio-Facili (MF) + 31 Medi (M) + 9 Medio-Difficili (MD) = 40`
  - **Medio-Difficili (9)**: `C1-04` (ID 843), `C1-08` (ID 847), `C1-12` (ID 851), `C1-16` (ID 855), `C1-20` (ID 859), `C1-24` (ID 863), `C1-28` (ID 867), `C1-34` (ID 873), `C1-40` (ID 879)
  - **Medi (31)**: restanti 31 quesiti del lotto
- **Verifica scientifica specifica dei quesiti chiave**:
  - `C1-12` (ID 851, MD): fa esplicito e corretto riferimento al **nucleo esterno** (*stato fuso / liquido*) a partire dall'assenza delle onde S oltre 104°.
  - `C1-25` (ID 864, M): contiene la formulazione rigorosa *«La presenza di un proprio DNA circolare privo di istoni»* e brano che indica *«ciclo separato rispetto al genoma nucleare»*, escludendo suggestioni di autonomia genetica totale.
- **Audit di equivalenza opzioni**: 400/400 coppie controllate nel runtime con **0 equivalenze residue**.

---

## 3. Conteggi della Banca Dati Prima e Dopo l'Integrazione

| Parametro | Pre-Integrazione (L4) | Post-Integrazione (C1) | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | `834` | `874` | `+40` |
| **Record Attivi TOLC-I** | `799` | `839` | `+40` |
| **Record Legacy Esclusi** | `35` | `35` | `0` |
| **ID Massimo** | `839` | `879` | `+40` |
| **Equazione di Bilancio** | $799 + 35 = 834$ | $839 + 35 = 874$ | **Verificata** |

### Ripartizione per Materia

| Materia | Fisici Pre | Fisici Post | Attivi Pre | Attivi Post | Legacy | Obiettivo Attivi |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 | 250 (Raggiunto) |
| **Logica** | 251 | 251 | 250 | 250 | 1 | 250 (Raggiunto) |
| **Scienze** | 252 | 252 | 250 | 250 | 2 | 250 (Raggiunto) |
| **Comprensione verbale** | 80 | **120** | 49 | **89** | 31 | **89 ATTIVI (+40 da C1)** |
| **TOTALE** | **834** | **874** | **799** | **839** | **35** | **839** |

### Gap Storici Preservati
I gap storici `2`, `18`, `25`, `78`, `202` risultano **tutti assenti** come prescritto.

---

## 4. Invarianza dei 834 Record Preesistenti e Parità Frozen/Runtime

1. **Invarianza dei 834 record preesistenti (ID $\le$ 839)**:
   - Confronto integrale contro lo snapshot baseline: **`834 / 834 MATCH (100% invariati)`**.
2. **Parità Frozen / Runtime sul Lotto C1 (ID 840–879)**:
   - Confronto su tutti i campi didattici ed esecutivi (`domanda`, `rispostaCorretta`, `risposteErrate`, `spiegazione`, `materia`, `difficolta`, `brano`, `titoloBrano`): **`40 / 40 MATCH (0 discrepanze)`**.
3. **Audit Equivalenze Opzioni Runtime C1**:
   - 400 coppie controllate: **0 equivalenze**.
4. **Autosufficienza Comprensione Verbale**:
   - 40/40 quesiti verificati come interamente risolvibili dal testo fornito.

---

## 5. Collaudo e Regression Test Suite

Tutti i test della suite automatica e delle regressioni hanno dato esito positivo:

- `src/tests/testQuiz.mjs`: **PASS**
- `src/tests/testQuestionCatalog.mjs`: **PASS**
- `src/tests/testNewTest1Integration.mjs`: **PASS**
- `npm.cmd test`: **PASS**
- `npm.cmd run test:integration`: **PASS**
- `npm.cmd run audit:questions`: **PASS**
- `npm.cmd run build`: **PASS**

---

## 6. Stato Git Post-Integrazione

Staging **NON** eseguito. I file modificati e aggiunti sono esattamente i 5 previsti:
- `M src/data/questionBank.js`
- `M src/tests/testNewTest1Integration.mjs`
- `M src/tests/testQuestionCatalog.mjs`
- `M src/tests/testQuiz.mjs`
- `?? docs/INTEGRAZIONE_C1_FASE31.md`
