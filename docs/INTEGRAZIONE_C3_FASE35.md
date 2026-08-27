# Integrazione Lotto C3 — Comprensione verbale (Testi storici, istituzionali e politico-sociali)

**Fase**: FASE 35 — Integrazione controllata, aggiornamento test e validazione
**Data**: 2026-08-27
**Autore**: Pipeline Controllata ANTIGRAVITY

---

## 1. Baseline Git e Ambiente di Esecuzione

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **HEAD Baseline**: `c949b6bc982208747233c2b03107eebdd55dcbb8`
- **Commit Precedente**: *«Integra lotto C2 e aggiorna test»*
- **Working Tree Iniziale**: `CLEAN`
- **Operazioni Eseguite**: Integrazione controllata del lotto C3, aggiornamento test suite, verifiche di invarianza e generazione report.
- **Divieti Rispettati**: Nessun commit, tag, push o deploy eseguito.

---

## 2. Dataset Frozen C3 Autorizzato

- **File Frozen**: `scratch/C3-40-quesiti.json`
- **Dimensione esatta**: `92.103 byte`
- **Hash SHA-256**: `770b0046a960d4687b4a3bda400b5e3b7be700422326d4cab4f976cb9250a354`
- **Quesiti**: 40 quesiti originali (ID 920–959 consecutivi)
- **Materia**: Comprensione verbale (40/40)
- **Difficoltà**: 31 Medio (M) + 9 Medio-Difficile (MD) + 0 Medio-Facile (MF)
- **Quesiti MD**: C3-04 (ID 923), C3-08 (ID 927), C3-12 (ID 931), C3-16 (ID 935), C3-20 (ID 939), C3-24 (ID 943), C3-28 (ID 947), C3-34 (ID 953), C3-40 (ID 959)

---

## 3. Preservazione dei Perfezionamenti Concettuali di FASE 34-BIS

1. **C3-20 (ID 939, MD)**: Preservata la nozione rigorosa di *«legittimazione dell’autorità e delle norme»* derivante dalla sovranità popolare e dal patto costituzionale nello Stato laico, evitando commistioni con la validità formale.
2. **C3-23 (ID 942, M)**: Articolata la potestà legislativa concorrente tra determinazione dei principi fondamentali riservata allo Stato e potestà legislativa regionale nella materia nel rispetto di essi.
3. **C3-25 (ID 944, M)**: Formulazione accurata della concorrenza nel sistema corporativo medievale come *«limitata e regolamentata»*, evitando assolutizzazioni anacronistiche.
4. **C3-29 (ID 948, M)**: Riserva di legge assoluta ancorata alla garanzia della *fonte primaria di rango legislativo*, con esclusione di integrazioni normative autonome da parte di fonti secondarie.
5. **C3-30 (ID 949, M)**: Ripartizione della riserva relativa definita con precisione (principi alla fonte primaria, disciplina applicativa ed esecutiva ai regolamenti dell'esecutivo), differenziata cognitivamente da C3-29.
6. **C3-34 (ID 953, MD)**: Utilizzo del termine costituzionalmente corretto *«limitazioni di sovranità»* a condizioni di parità e per scopi di pace e giustizia tra le nazioni (art. 11 Cost.).
7. **C3-38 (ID 957, M)**: Descrizione neutrale ed essenziale della ratio del *quorum di validità* referendario a presidio della partecipazione maggioritaria.

---

## 4. Metriche e Bilancio della Banca Dati

### Conteggi Globali
| Parametro | PRE-Integrazione | POST-Integrazione | Delta |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 914 | **954** | +40 |
| **Record Attivi TOLC-I** | 879 | **919** | +40 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **ID Massimo** | 919 | **959** | +40 |
| **Gap Storici Assenti** | 2, 18, 25, 78, 202 | 2, 18, 25, 78, 202 | Preservati |

### Ripartizione per Materia
| Materia | Fisici PRE | Fisici POST | Attivi PRE | Attivi POST | Legacy PRE/POST |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 |
| **Logica** | 251 | 251 | 250 | 250 | 1 |
| **Scienze** | 252 | 252 | 250 | 250 | 2 |
| **Comprensione verbale** | 160 | **200** | 129 | **169** | 31 |
| **TOTALE** | 914 | **954** | 879 | **919** | 35 |

---

## 5. Invarianza della Baseline e Parità Frozen/Runtime

- **Invarianza Baseline Preesistente**: **914 / 914 record identici al 100%** rispetto allo snapshot deterministico `baseline-914-snapshot.json`.
- **Parità Frozen / Runtime C3**: **40 / 40 quesiti MATCH al 100%** tra `C3-40-quesiti.json` e `src/data/questionBank.js`.
- **Audit Equivalenza Alternative C3**: 400 coppie esaminate in runtime, 0 equivalenze riscontrate.

---

## 6. File Modificati nel Repository (Esattamente 5 File Autorizzati)

1. `src/data/questionBank.js` (inserimento dei 40 record C3 ID 920–959)
2. `src/tests/testNewTest1Integration.mjs` (aggiornamento totali banca 954 e Comprensione verbale 200)
3. `src/tests/testQuestionCatalog.mjs` (aggiornamento catalogo canonico 954 e pool attivo 919)
4. `src/tests/testQuiz.mjs` (aggiunta Sezione 2L C3, aggiornamento pool attivo 919 e bilancio finale)
5. `docs/INTEGRAZIONE_C3_FASE35.md` (questo documento di audit e tracciamento)

---

## 7. Esito della Validazione Finale

- **Check dedicato C3**: `29 / 29 PASS`
- **Unit test** (`npm.cmd test`): `384 / 384 PASS`
- **Integration test** (`npm.cmd run test:integration`): `48 / 48 PASS`
- **Question Bank Audit** (`npm.cmd run audit:questions`): `PASS` — exit code `0`
- **Production Build** (`npm.cmd run build`): `PASS` — exit code `0`
- **git diff --check**: `PASS`
- **Invarianza baseline**: `914 / 914`
- **Parità Frozen / Runtime C3**: `40 / 40 MATCH`

La FASE 35 ha quindi integrato e validato il lotto C3 senza commit, tag, push o deploy.
