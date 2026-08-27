# INTEGRAZIONE LOTTO C5 — COMPRENSIONE VERBALE (FASE 39)
### Raggiungimento del Target Finale: 1000 Quesiti Attivi TOLC-I (250 per Materia)

---

## 1. Dati Generali e Baseline di Integrazione

- **Data di Esecuzione**: 27 Agosto 2026
- **Ambito del Lotto**: Comprensione verbale — Testi letterari, linguistici, semiotici, retorici e storico-culturali
- **Baseline Git Iniziale**: `b67ed8a41b9eaca940d006d949c43a9b6da625f0` (*«Integra lotto C4 e aggiorna test»*)
- **Working Tree Pre-Integrazione**: `CLEAN`

---

## 2. Dati del Dataset Frozen C5

- **File Frozen**: `scratch/C5-41-quesiti.json`
- **Dimensione Esatta**: `99.144 byte`
- **Hash SHA-256**: `1d218d46a5201855259cd0a40899ba71a934fd4fbe15300f53e61270718e7e3d`
- **Numero di Record**: `41 quesiti inediti`
- **Range ID**: `1000–1040` (consecutivi e univoci)
- **Materia**: `Comprensione verbale` (41 / 41)
- **Ripartizione Difficoltà**:
  - **Medio (M)**: `32 quesiti` (78.0%)
  - **Medio-Difficile (MD)**: `9 quesiti` (22.0%)
  - **Medio-Facile (MF)**: `0 quesiti` (0.0%)

---

## 3. Metriche Strutturali e Bilancio Banca Dati

L'integrazione del Lotto C5 completa definitivamente la banca dati del Simulatore TOLC-I:

| Metrica | Pre-Integrazione C5 (Post-C4) | Incremento C5 | Post-Integrazione C5 (Definitivo) |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | `994` | `+41` | **`1035`** |
| **Record Attivi TOLC-I** | `959` | `+41` | **`1000`** *(Traguardo raggiunto)* |
| **Record Legacy Esclusi** | `35` | `+0` | **`35`** |
| **ID Massimo** | `999` | `+41` | **`1040`** |
| **Gap Storici Assenti** | `2, 18, 25, 78, 202` | Invariati | **`2, 18, 25, 78, 202`** |

### Distribuzione per Materia (Parità Perfetta Raggiunta: 250 per Materia)

- **Matematica**: `251 fisici / 250 attivi / 1 legacy`
- **Logica**: `251 fisici / 250 attivi / 1 legacy`
- **Scienze**: `252 fisici / 250 attivi / 2 legacy`
- **Comprensione verbale**: `281 fisici / 250 attivi / 31 legacy`

$$\text{Totale Attivo} = 250 + 250 + 250 + 250 = 1000$$
$$\text{Totale Fisico} = 1000 \text{ (attivi)} + 35 \text{ (legacy)} = 1035$$

---

## 4. Validazione e Invarianza

1. **Invarianza Baseline 994**:
   - Confronto campo per campo contro lo snapshot `scratch/baseline-994-snapshot.json`: **`994 / 994 MATCH`** (0 modificati, 0 eliminati).
2. **Parità Frozen / Runtime**:
   - Confronto programmatico di tutti i 14 campi per ciascun record C5: **`41 / 41 MATCH`** (0 discrepanze).
3. **Audit Interno ed Esterno**:
   - **410 / 410 coppie opzioni**: 0 equivalenze semantiche.
   - **820 / 820 coppie interne**: 0 near-duplicate, 0 cognitive-duplicate.
   - **40.754 confronti esterni vs baseline 994**: 0 exact duplicate, 0 near-duplicate, 0 cognitive-duplicate; 1 sola somiglianza formulare classificata come thematic overlap, priva di sovrapposizione sostanziale.

---

## 5. Risultati della Suite di Test Ufficiale

- **Check Dedicato C5 (`check-c5-integration.mjs`)**: **`20 / 20 PASS`**
- **Unit Tests (`npm test`)**: **`416 / 416 PASS`**
  - `testQuiz.mjs`: `328 / 328 PASS` *(inclusa Sezione 2N dedicata a C5)*
  - `testQuestionCatalog.mjs`: `59 / 59 PASS`
  - `testNewTest1Integration.mjs`: `29 / 29 PASS`
- **Integration Tests (`npm run test:integration`)**: **`48 / 48 PASS`**
- **Audit Strutturale (`npm run audit:questions`)**: **`PASS`** (exit code 0)
- **Build di Produzione (`npm run build`)**: **`PASS`** (exit code 0, 3.34s)

---

## 6. File Coinvolti nel Repository

1. `src/data/questionBank.js`
2. `src/tests/testNewTest1Integration.mjs`
3. `src/tests/testQuestionCatalog.mjs`
4. `src/tests/testQuiz.mjs`
5. `docs/INTEGRAZIONE_C5_FASE39.md`
