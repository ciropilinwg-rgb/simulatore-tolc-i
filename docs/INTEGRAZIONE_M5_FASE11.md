# Integrazione Ufficiale Lotto M5 (FASE 11)

- **Data**: 2026-08-26
- **Baseline Git di partenza**: `ee9398a5db33eb91a83bd8e946f7dd18488d19ce`
- **Stato Approvazione**: M5 APPROVATO DEFINITIVAMENTE DOPO FASE 10-TER

---

## 1. Sintesi dell'Integrazione

Nel repository ufficiale del Simulatore Concorso (`SimulatoreConcorso`) è stato integrato in maniera additiva e chirurgica il **Lotto M5** (33 quesiti originali di Matematica, ID `423`–`455`).

L'integrazione del Lotto M5 segna il **raggiungimento ufficiale del target definitivo di 250 quesiti attivi di Matematica** per il pool TOLC-I.

---

## 2. Metriche e Ripartizione della Banca Dati

### A. Conteggi Globali
- **Record fisici totali**: **450** (417 preesistenti + 33 M5)
- **Record legacy isolati**: **35** (invariati con `excludedFromTolcPool: true`)
- **Pool attivo TOLC-I**: **415** (382 preesistenti + 33 M5)

### B. Ripartizione per Materia (Fisica e Attiva)
| Materia | Record Fisici Pre-M5 | Record Fisici Post-M5 | Legacy Esclusi | Pool Attivo Pre-M5 | Pool Attivo Post-M5 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 218 | **251** | 1 | 217 | **250** *(Target raggiunto)* |
| **Logica** | 49 | **49** | 1 | 48 | **48** |
| **Scienze** | 70 | **70** | 2 | 68 | **68** |
| **Comprensione verbale** | 80 | **80** | 31 | 49 | **49** |
| **Totale** | **417** | **450** | **35** | **382** | **415** |

### C. Equazioni di Bilancio
- **Fisica**: $317\text{ (base)} + 25\text{ (M1)} + 25\text{ (M2)} + 25\text{ (M3)} + 25\text{ (M4)} + 33\text{ (M5)} = 450$
- **Attiva**: $450\text{ (fisici)} - 35\text{ (legacy)} = 415\text{ (attivi)}$
- **Target Matematica Attiva**: $217 + 33 = 250$

---

## 3. Censimento e Parità del Lotto M5 (ID 423–455)

Tutti i 33 quesiti derivano dal dataset autoritativo `scratch/M5-33-quesiti.json` post FASI 10-BIS e 10-TER:

| ID | Codice | Area Tematica | Sottoargomento | Difficoltà | Risposta Corretta |
| :---: | :---: | :--- | :--- | :---: | :--- |
| **423** | `M5-01` | Potenze/Esponenziali | Esponenti razionali | MF | `$a^{\frac{5}{6}}$` |
| **424** | `M5-02` | Potenze/Esponenziali | Confronto tra potenze | MF | `$C < A < B$` |
| **425** | `M5-03` | Potenze/Esponenziali | Equazioni esponenziali elementari | MF | `$x = 7$` |
| **426** | `M5-04` | Potenze/Esponenziali | Crescita esponenziale discreta | MF | `$8000$` |
| **427** | `M5-05` | Potenze/Esponenziali | Equazioni esponenziali per sostituzione | M | `$\{0, 2\}$` |
| **428** | `M5-06` | Potenze/Esponenziali | Disequazioni esponenziali base $< 1$ | M | `$x < 5$` |
| **429** | `M5-07` | Potenze/Esponenziali | Scomposizione a fattor comune | M | `$\frac{10}{3}$` |
| **430** | `M5-08` | Potenze/Esponenziali | Equazioni esponenziali composte | M | `$x = 3$` |
| **431** | `M5-09` | Logaritmi | Calcolo diretto di logaritmi | MF | `$\frac{3}{2}$` |
| **432** | `M5-10` | Logaritmi | Proprietà algebriche logaritmi | MF | `$a + 2b$` |
| **433** | `M5-11` | Logaritmi | Dominio funzione logaritmica | MF | `$3 < x < 5$` |
| **434** | `M5-12` | Logaritmi | Equazioni logaritmiche elementari | MF | `$x = 5$` |
| **435** | `M5-13` | Logaritmi | Cambiamento di base | M | `$\frac{4}{k}$` |
| **436** | `M5-14` | Logaritmi | Equazioni logaritmiche con dominio | M | `$\{4\}$` |
| **437** | `M5-15` | Logaritmi | Disequazioni logaritmiche base $< 1$ | M | `$\frac{1}{2} < x \le \frac{5}{2}$` |
| **438** | `M5-16` | Logaritmi | Equazioni logaritmiche di 2° grado | MD | `$12$` |
| **439** | `M5-17` | Probabilità | Eventi semplici con dado | MF | `$\frac{1}{2}$` |
| **440** | `M5-18` | Probabilità | Evento complementare | MF | `$\frac{1}{4}$` |
| **441** | `M5-19` | Probabilità | Unione di eventi disgiunti | MF | `$\frac{13}{20}$` |
| **442** | `M5-20` | Probabilità | Lancio di due dadi e somma | MF | `$\frac{1}{6}$` |
| **443** | `M5-21` | Probabilità | Estrazioni senza reinserimento | M | `$\frac{1}{130}$` |
| **444** | `M5-22` | Probabilità | Eventi composti indipendenti | M | `$\frac{1}{6}$` |
| **445** | `M5-23` | Probabilità | Regola dell'almeno uno | M | `$\frac{7}{8}$` |
| **446** | `M5-24` | Probabilità | Estrazioni con reinserimento | M | `$\frac{6}{25}$` |
| **447** | `M5-25` | Probabilità | Probabilità condizionata | MD | `$\frac{2}{15}$` |
| **448** | `M5-26` | Calcolo Combinatorio | Disposizioni semplici di cifre | MF | `$3024$` |
| **449** | `M5-27` | Calcolo Combinatorio | Permutazioni semplici di lettere | MF | `$720$` |
| **450** | `M5-28` | Calcolo Combinatorio | Combinazioni semplici | MF | `$120$` |
| **451** | `M5-29` | Calcolo Combinatorio | Scelte indipendenti (menù) | MF | `$60$` |
| **452** | `M5-30` | Calcolo Combinatorio | Permutazioni con ripetizione | M | `$151200$` |
| **453** | `M5-31` | Calcolo Combinatorio | Combinazioni composte con vincoli | M | `$120$` |
| **454** | `M5-32` | Calcolo Combinatorio | Ordinamento con posto vincolato | M | `$24$` |
| **455** | `M5-33` | Calcolo Combinatorio | Combinazioni non ordinate (strette) | M | `$28$` |

---

## 4. Distribuzione Difficoltà Cumulativa (Lotti M1–M5)

| Difficoltà | Quota M5 | Pre-M5 (M1–M4) | Totale Cumulativo (M1–M5) | Target Cumulativo (133 Quesiti) |
| :--- | :---: | :---: | :---: | :---: |
| **Medio-facile (MF)** | 16 | 48 | **64** | **64** |
| **Medio (M)** | 15 | 48 | **63** | **63** |
| **Medio-difficile (MD)** | 2 | 4 | **6** | **6** |
| **Totale** | **33** | **100** | **133** | **133** |

---

## 5. Verifiche di Qualità e Integrità Eseguite

1. **Protezione Baseline 417 Record**: I 417 record preesistenti in `questionBank.js` sono stati confrontati byte-per-byte e proprietà-per-proprietà con `HEAD` senza alcuna alterazione (0 mismatch).
2. **Parità 33/33 M5**: Nessuna divergenza semantica o di formattazione rispetto al JSON autoritativo approvato.
3. **KaTeX Reale**: 392 formule matematiche analizzate sui quesiti M5 con `throwOnError: true` (0 errori).
4. **Deduplicazione Globale**: 0 duplicati o collisioni introdotte da M5 sull'intera banca dati di 450 record.
5. **Suite di Test**:
   - `npm.cmd run test:unit`: **207 test passati, 0 falliti**
   - `npm.cmd run test:integration`: **48 test passati, 0 falliti**
   - `npm.cmd run audit:questions`: **PASS**
   - `npm.cmd run build`: **Vite Production Build PASS**
6. **Lotto S1**: Nessuna attività avviata.
