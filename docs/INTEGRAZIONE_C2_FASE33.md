# Documento di Integrazione e Collaudo — Lotto C2 (FASE 33)

## 1. Dati Generali e Baseline

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git consolidata**: `5ff31f6879433f3eea239e0d1cff476e13eb56e2` (*"Integra lotto C1 e aggiorna test"*)
- **Dataset Frozen integrato**: `scratch/C2-40-quesiti.json`
- **Dimensione file frozen**: `86.964 byte`
- **SHA-256 frozen**: `b209d0be37c2475fdd4c27284da99b612ff845c6453e97f9172832c119e9e297`

---

## 2. Dati del Lotto C2

- **Materia**: Comprensione verbale (40/40)
- **Range ID**: `880` $\to$ `919` (40 quesiti consecutivi e strettamente univoci)
- **Stato TOLC-I**: 40/40 attivi (`excludedFromTolcPool !== true`)
- **Distribuzione difficoltà**: `0 Medio-Facili (MF) + 31 Medi (M) + 9 Medio-Difficili (MD) = 40`
  - **Medio-Difficili (9)**: `C2-04` (ID 883), `C2-08` (ID 887), `C2-12` (ID 891), `C2-16` (ID 895), `C2-20` (ID 899), `C2-24` (ID 903), `C2-28` (ID 907), `C2-34` (ID 913), `C2-40` (ID 919)
  - **Medi (31)**: restanti 31 quesiti del lotto
- **Controllo semantico mirato dei quesiti chiave**:
  - `C2-04` (ID 883, MD): replica formulata esplicitamente «in chiave strutturalista» sulla stabilità delle relazioni matematiche.
  - `C2-24` (ID 903, MD): critica al linguaggio privato fondata sull'assenza di un criterio indipendente di correttezza (senza dipendenza dogmatica da 'confronto pubblico').
  - `C2-40` (ID 919, MD): esistenza intesa come posizione reale dell'oggetto corrispondente al concetto, rimossa la restrizione a 'realtà sensibile'.
- **Audit di equivalenza opzioni**: 400/400 coppie controllate nel runtime con **0 equivalenze residue**.

---

## 3. Conteggi della Banca Dati Prima e Dopo l'Integrazione

| Parametro | Pre-Integrazione (C1) | Post-Integrazione (C2) | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | `874` | `914` | `+40` |
| **Record Attivi TOLC-I** | `839` | `879` | `+40` |
| **Record Legacy Esclusi** | `35` | `35` | `0` |
| **ID Massimo** | `879` | `919` | `+40` |
| **Equazione di Bilancio** | $839 + 35 = 874$ | $879 + 35 = 914$ | **Verificata** |

### Ripartizione per Materia

| Materia | Fisici Pre | Fisici Post | Attivi Pre | Attivi Post | Legacy | Obiettivo Attivi |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 | 250 (Raggiunto) |
| **Logica** | 251 | 251 | 250 | 250 | 1 | 250 (Raggiunto) |
| **Scienze** | 252 | 252 | 250 | 250 | 2 | 250 (Raggiunto) |
| **Comprensione verbale** | 120 | **160** | 89 | **129** | 31 | **129 ATTIVI (+40 da C2)** |
| **TOTALE** | **874** | **914** | **839** | **879** | **35** | **879** |

### Gap Storici Preservati
I gap storici `2`, `18`, `25`, `78`, `202` risultano **tutti assenti** come prescritto.

---

## 4. Invarianza dei 874 Record Preesistenti e Parità Frozen/Runtime

1. **Invarianza dei 874 record preesistenti (ID $\le$ 879)**:
   - Confronto integrale contro lo snapshot baseline: **`874 / 874 MATCH (100% invariati)`**.
2. **Parità Frozen / Runtime sul Lotto C2 (ID 880–919)**:
   - Confronto su tutti i campi didattici ed esecutivi (`domanda`, `rispostaCorretta`, `risposteErrate`, `spiegazione`, `materia`, `difficolta`, `brano`, `titoloBrano`): **`40 / 40 MATCH (0 discrepanze)`**.
3. **Audit Equivalenze Opzioni Runtime C2**:
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
- `?? docs/INTEGRAZIONE_C2_FASE33.md`
