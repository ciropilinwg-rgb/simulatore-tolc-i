# Integrazione Lotto C4 — Comprensione verbale (Testi socioeconomici, antropologici e umanistici)

**Fase**: FASE 37 — Integrazione controllata, aggiornamento test e validazione
**Data**: 2026-08-27
**Autore**: Pipeline Controllata ANTIGRAVITY

---

## 1. Baseline Git e Ambiente di Esecuzione

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **HEAD Baseline**: `90d8dd29096d05410359043e4feba1cca58ee3dc`
- **Commit Precedente**: *«Integra lotto C3 e aggiorna test»*
- **Working Tree Iniziale**: `CLEAN`
- **Operazioni Eseguite**: Integrazione controllata del lotto C4, aggiornamento test suite, verifiche di invarianza e generazione report.
- **Divieti Rispettati**: Nessun commit, tag, push o deploy eseguito.

---

## 2. Dataset Frozen C4 Autorizzato

- **File Frozen**: `scratch/C4-40-quesiti.json`
- **Dimensione esatta**: `92.905 byte`
- **Hash SHA-256**: `d3837aafafea3c4575b9517b76907b454133098f871cb225229c6a38aca56bfe`
- **Quesiti**: 40 quesiti originali (ID 960–999 consecutivi)
- **Materia**: Comprensione verbale (40/40)
- **Difficoltà**: 31 Medio (M) + 9 Medio-Difficile (MD) + 0 Medio-Facile (MF)
- **Quesiti MD**: C4-04 (ID 963), C4-08 (ID 967), C4-12 (ID 971), C4-16 (ID 975), C4-20 (ID 979), C4-24 (ID 983), C4-28 (ID 987), C4-34 (ID 993), C4-40 (ID 999)

---

## 3. Preservazione dei Presupposti Concettuali del Lotto C4

1. **C4-08 (ID 967, MD)**: Nozione di *«fatto sociale totale»* (Marcel Mauss) che intreccia dimensioni economiche, simboliche, morali e relazionali, superando la dicotomia tra disinteresse assoluto e calcolo mercantile.
2. **C4-16 (ID 975, MD)**: Superamento teorico (Elinor Ostrom) del dilemma di Hardin sulla tragedia dei beni comuni, dimostrando che la dicotomia privatizzazione/statalizzazione non esaurisce i modelli efficaci di conservazione.
3. **C4-20 (ID 979, MD)**: Principio del *«paternalismo libertario»* (Thaler e Sunstein) che orienta le scelte verso il benessere individuale preservando la piena libertà formale e sostanziale di opzione.
4. **C4-24 (ID 983, MD)**: Critica sociologica alla presunta neutralità della meritocrazia scolastica (Pierre Bourdieu), che converte i privilegi culturali ereditati in certificazioni di merito accademico.
5. **C4-28 (ID 987, MD)**: Transizione strutturale dalla natura alla cultura (Claude Lévi-Strauss) fondata sull'esogamia e sull'obbligo di reciprocità convenzionale mediante il tabù dell'incesto.
6. **C4-34 (ID 993, MD)**: Dinamica della *devianza secondaria* (Howard Becker), innescata dall'interiorizzazione dello stigma e del ruolo attribuito dalle istituzioni.
7. **C4-40 (ID 999, MD)**: Trade-off della *just transition* ecologica, evidenziando che la sostenibilità climatica richiede compensazioni eque per non gravare sui lavoratori e ceti vulnerabili.

---

## 4. Metriche e Bilancio della Banca Dati

### Conteggi Globali
| Parametro | PRE-Integrazione | POST-Integrazione | Delta |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 954 | **994** | +40 |
| **Record Attivi TOLC-I** | 919 | **959** | +40 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **ID Massimo** | 959 | **999** | +40 |
| **Gap Storici Assenti** | 2, 18, 25, 78, 202 | 2, 18, 25, 78, 202 | Preservati |

### Ripartizione per Materia
| Materia | Fisici PRE | Fisici POST | Attivi PRE | Attivi POST | Legacy PRE/POST |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 |
| **Logica** | 251 | 251 | 250 | 250 | 1 |
| **Scienze** | 252 | 252 | 250 | 250 | 2 |
| **Comprensione verbale** | 200 | **240** | 169 | **209** | 31 |
| **TOTALE** | 954 | **994** | 919 | **959** | 35 |

---

## 5. Invarianza della Baseline e Parità Frozen/Runtime

- **Invarianza Baseline Preesistente**: **954 / 954 record identici al 100%** rispetto allo snapshot deterministico `baseline-954-snapshot.json`.
- **Parità Frozen / Runtime C4**: **40 / 40 quesiti MATCH al 100%** tra `C4-40-quesiti.json` e `src/data/questionBank.js`.
- **Audit Equivalenza Alternative C4**: 400 coppie esaminate in runtime, 0 equivalenze riscontrate.

---

## 6. File Modificati nel Repository (Esattamente 5 File Autorizzati)

1. `src/data/questionBank.js` (inserimento dei 40 record C4 ID 960–999)
2. `src/tests/testNewTest1Integration.mjs` (aggiornamento totali banca 994 e Comprensione verbale 240)
3. `src/tests/testQuestionCatalog.mjs` (aggiornamento catalogo canonico 994 e pool attivo 959)
4. `src/tests/testQuiz.mjs` (aggiunta Sezione 2M C4, aggiornamento pool attivo 959 e bilancio finale)
5. `docs/INTEGRAZIONE_C4_FASE37.md` (questo documento di audit e tracciamento)

---

## 7. Esito della Validazione Finale

- **Check dedicato C4**: `20 / 20 PASS`
- **Unit test** (`npm.cmd test`): `399 / 399 PASS`
  - `testQuiz.mjs`: `311 / 311 PASS`
  - `testQuestionCatalog.mjs`: `59 / 59 PASS`
  - `testNewTest1Integration.mjs`: `29 / 29 PASS`
- **Integration test** (`npm.cmd run test:integration`): `48 / 48 PASS`
- **Question Bank Audit** (`npm.cmd run audit:questions`): `PASS` — exit code `0`
- **Production Build** (`npm.cmd run build`): `PASS` — exit code `0`
- **git diff --check**: `PASS`
- **Invarianza baseline**: `954 / 954`
- **Parità Frozen / Runtime C4**: `40 / 40 MATCH`

La FASE 37 ha quindi integrato e validato il lotto C4 senza commit, tag, push o deploy.
