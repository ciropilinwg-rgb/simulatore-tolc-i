# Integrazione Lotto L2 (FASE 25)
### Logica — Condizioni necessarie e sufficienti, implicazioni e relazioni logiche

**Data di integrazione**: 27 Agosto 2026
**Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
**Baseline Git iniziale**: `f4976ad38b0e642f3235bcb8302ec337badfc958` (*"Integra lotto L1 e aggiorna test"*)
**Working Tree pre-integrazione**: `CLEAN`

---

## 1. Dataset Frozen Autorizzato

- **File sorgente**: `scratch/L2-50-quesiti.json`
- **Dimensione file**: `59002 byte`
- **SHA-256**: `a8af7f0ff5a4dbba6e24f156681f31eb8c288e3690c6668307561a1086ddf647`
- **Numero quesiti**: 50 (ID 688 → 737)
- **Materia**: Logica (50/50)
- **Stato TOLC-I**: 50/50 attivi (`excludedFromTolcPool !== true`)
- **Distribuzione difficoltà**: 3 Medio-Facile (MF), 44 Medio (M), 3 Medio-Difficile (MD)
  - MF: ID 688 (L2-01), ID 704 (L2-17), ID 721 (L2-34)
  - MD: ID 703 (L2-16), ID 720 (L2-33), ID 737 (L2-50)
  - M: 44 quesiti rimanenti

---

## 2. Mapping e Parità Frozen → Runtime

- **Mapping applicato**:
  - `L2-01` → ID 688
  - `L2-02` → ID 689
  - ...
  - `L2-49` → ID 736
  - `L2-50` → ID 737
- **Parità Frozen / Runtime**: **50/50 PASS** (0 discrepanze su ID, materia, difficoltà, testo domanda, risposta corretta, 4 risposte errate, spiegazione, stato attivo).
- **Integrità record precedenti ($\\le 687$)**: 682 record fisici e 35 record legacy intatti.
- **Gap storici intatti**: 2, 18, 25, 78, 202.

---

## 3. Conteggi Globali e Ripartizione per Materia

### Conteggi Globali
| Parametro | Pre-L2 (Baseline L1) | Post-L2 (FASE 25) | Delta |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 682 | **732** | +50 |
| **Record Attivi TOLC-I** | 647 | **697** | +50 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **ID Massimo** | 687 | **737** | +50 |

### Ripartizione per Materia Post-L2
| Materia | Record Fisici | Record Attivi TOLC-I | Record Legacy |
| :--- | :---: | :---: | :---: |
| **Matematica** | 251 | 250 | 1 |
| **Logica** | 149 | 148 | 1 |
| **Scienze** | 252 | 250 | 2 |
| **Comprensione verbale** | 80 | 49 | 31 |
| **TOTALE** | **732** | **697** | **35** |

---

## 4. Esito Suite di Test e Collaudo

1. **Unit Test (`npm test`)**: **315 / 315 PASS**
   - `testQuiz.mjs`: 227 passati, 0 falliti
   - `testQuestionCatalog.mjs`: 59 passati, 0 falliti
   - `testNewTest1Integration.mjs`: 29 passati, 0 falliti
2. **Integration Test (`npm run test:integration`)**: **48 / 48 PASS**
3. **Audit Question Bank (`npm run audit:questions`)**: **PASS** (0 duplicati certi, 0 copie ridondanti, 732 domande raw/canoniche verificate)
4. **Vite Production Build (`npm run build`)**: **PASS** (bundle generato in 2.89s)

---

## 5. Elenco File Modificati e Stato Git

- **File del Repository Modificati (4)**:
  - `src/data/questionBank.js`
  - `src/tests/testNewTest1Integration.mjs`
  - `src/tests/testQuestionCatalog.mjs`
  - `src/tests/testQuiz.mjs`
- **File Nuovo Creato (1)**:
  - `docs/INTEGRAZIONE_L2_FASE25.md`
- **Operazioni Git NON Eseguite**:
  - `git add` = NON eseguito
  - `git commit` = NON eseguito
  - `git tag` = NON eseguito
  - `git push` = NON eseguito
  - `deploy` = NON eseguito
