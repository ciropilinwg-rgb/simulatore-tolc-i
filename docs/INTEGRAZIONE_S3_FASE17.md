# Integrazione Ufficiale Lotto S3 (Scienze — Elettromagnetismo, Onde e Ottica) — FASE 17

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `734370e3d1495ad3dfc03445d290ec6fbee4a4c4` (*"Integra lotto S2 e aggiorna test"*)
**Dataset Autoritativo Sorgente**: `scratch/S3-35-quesiti.json` (approvato definitivamente e FROZEN dopo FASE 16-SEXIES)
**SHA-256 Dataset Frozen**: `30ad2e1a84a8b3624317c9b63838b0c53d8752dc0df726b957834a2f3d77535e`
**Target File Modificato**: `src/data/questionBank.js`
**Test Aggiornati**: `src/tests/testQuiz.mjs`, `src/tests/testQuestionCatalog.mjs`, `src/tests/testNewTest1Integration.mjs`

---

## 1. Sintesi dell'Integrazione

Il Lotto **S3** introduce **35 nuovi quesiti originali di Scienze (Elettromagnetismo, Onde e Ottica)**, mappati in modo strettamente sequenziale sugli **ID ufficiali 526–560**.

- **Calibrazione Difficoltà**: 34 Medio (M), 1 Medio-difficile (MD — `S3-35` / ID 560). Nessun quesito Medio-facile (MF).
- **Protezione Baseline**: Tutti i 520 record fisici preesistenti (ID 1–525) sono rimasti rigorosamente intatti (520/520 property-by-property match).
- **Parità Dataset**: 35/35 record runtime corrispondono al 100% con il JSON autoritativo frozen (0 differenze semantiche).
- **Buchi Storici Preservati**: Assenza confermata per gli ID non riutilizzabili `2`, `18`, `25`, `78`, `202`.
- **Legacy Esclusi**: Esattamente 35 record fisici isolati con `excludedFromTolcPool: true`. Nessun nuovo record S3 è escluso dal pool attivo.

---

## 2. Metriche e Conteggi Pre / Post Integrazione

### Conteggio Globale
| Metrica | Pre-S3 (Baseline) | Post-S3 | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 520 | **555** | +35 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **Pool Attivo TOLC-I** | 485 | **520** | +35 |
| **ID Minimo** | 1 | **1** | 0 |
| **ID Massimo** | 525 | **560** | +35 |

### Ripartizione per Materia
| Materia | Fisici Pre-S3 | Fisici Post-S3 | Attivi Pre-S3 | Attivi Post-S3 |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | **251** | 250 | **250** |
| **Logica** | 49 | **49** | 48 | **48** |
| **Scienze** | 140 | **175** | 138 | **173** |
| **Comprensione verbale** | 80 | **80** | 49 | **49** |
| **Totale** | 520 | **555** | 485 | **520** |

---

## 3. Registro Dettagliato dei Quesiti Integrati (ID 526–560)

| ID | Codice | Sottoargomento | Diff. | Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **526** | `S3-01` | Quantizzazione della carica elettrica | M | `$2{,}0 \times 10^{11}\text{ elettroni}$` |
| **527** | `S3-02` | Legge di Coulomb nel vuoto | M | `$0{,}60\text{ N}$` |
| **528** | `S3-03` | Dipendenza della forza di Coulomb dalla distanza | M | `La forza elettrostatica quadruplica, diventando $4F$` |
| **529** | `S3-04` | Campo elettrico generato da carica puntiforme | M | `$90\text{ N/C}$` |
| **530** | `S3-05` | Forza su carica elettrica in campo uniforme | M | `Modulo pari a $0{,}020\text{ N}$, diretta orizzontalmente verso sinistra` |
| **531** | `S3-06` | Differenza di potenziale e lavoro elettrico | M | `$0{,}36\text{ J}$` |
| **532** | `S3-07` | Capacità di un condensatore | M | `$6{,}0 \times 10^{-4}\text{ C}$` |
| **533** | `S3-08` | Energia immagazzinata in un condensatore | M | `$3{,}0 \times 10^{-3}\text{ J}$` |
| **534** | `S3-09` | Intensità di corrente e carica elettrica | M | `$300\text{ C}$` |
| **535** | `S3-10` | Prima legge di Ohm | M | `$0{,}60\text{ A}$` |
| **536** | `S3-11` | Seconda legge di Ohm e resistenza di un filo | M | `La resistenza quadruplica, diventando $4R$` |
| **537** | `S3-12` | Resistori collegati in serie e partitore | M | `$30\text{ V}$` |
| **538** | `S3-13` | Resistori collegati in parallelo | M | `$0{,}60\text{ A}$` |
| **539** | `S3-14` | Effetto Joule e potenza dissipata | M | `$120\text{ W}$` |
| **540** | `S3-15` | Potenza dissipata da corrente e resistenza | M | `$200\text{ W}$` |
| **541** | `S3-16` | Forza di Lorentz su carica in moto | M | `La traiettoria è una circonferenza nel piano perpendicolare al campo magnetico` |
| **542** | `S3-17` | Calcolo del modulo della forza di Lorentz | M | `$0{,}24\text{ N}$` |
| **543** | `S3-18` | Lavoro della forza magnetica di Lorentz | M | `Nullo, perché la forza di Lorentz è istante per istante perpendicolare al vettore velocità` |
| **544** | `S3-19` | Forza magnetica su conduttore rettilineo (Laplace) | M | `$0{,}30\text{ N}$` |
| **545** | `S3-20` | Campo magnetico generato da filo rettilineo (Biot-Savart) | M | `Dimezza, diventando pari a $B/2$` |
| **546** | `S3-21` | Flusso del campo magnetico attraverso una spira | M | `$0{,}020\text{ Wb}$` |
| **547** | `S3-22` | Legge di Faraday-Neumann e fem indotta media | M | `$12\text{ V}$` |
| **548** | `S3-23` | Legge di Lenz e verso della corrente indotta | M | `Tale da generare un campo magnetico indotto che si oppone alla variazione del flusso magnetico concatenato` |
| **549** | `S3-24` | Onde meccaniche: relazione fondamentale $v = \lambda f$ | M | `$30\text{ Hz}$` |
| **550** | `S3-25` | Sovrapposizione e interferenza di onde | M | `$\Delta d = 1{,}60\text{ m}$, con interferenza costruttiva` |
| **551** | `S3-26` | Onde sonore e velocità del suono | M | `Sono onde meccaniche longitudinali e necessitano di un mezzo materiale per propagarsi` |
| **552** | `S3-27` | Eco e riflessione del suono | M | `$136\text{ m}$` |
| **553** | `S3-28` | Onde elettromagnetiche e spettro ottico | M | `La velocità di propagazione nel vuoto ($c \approx 3 \times 10^8\text{ m/s}$)` |
| **554** | `S3-29` | Leggi della riflessione della luce | M | `L’angolo di riflessione è pari a $35^\circ$ rispetto alla retta normale alla superficie` |
| **555** | `S3-30` | Legge di Snell e rifrazione | M | `La luce rallenta e il raggio si avvicina alla normale alla superficie di separazione` |
| **556** | `S3-31` | Angolo limite e riflessione totale | M | `Il raggio deve propagarsi da un mezzo più rifrangente a uno meno rifrangente con angolo di incidenza superiore all’angolo limite` |
| **557** | `S3-32` | Dispersione della luce e prisma ottico | M | `La luce violetta subisce la deviazione maggiore, avendo indice di rifrazione più elevato` |
| **558** | `S3-33` | Specchi piani e caratteristiche dell'immagine | M | `Virtuale, diritta, delle stesse dimensioni dell’oggetto e posta a $2{,}0\text{ m}$ dietro lo specchio` |
| **559** | `S3-34` | Distanza focale di uno specchio sferico | M | `$25\text{ cm}$` |
| **560** | `S3-35` | Lenti convergenti e legge dei punti coniugati | MD | `$q = +60\text{ cm}$ con ingrandimento $|G| = 2{,}0$` |

---

## 4. Regression Checks Puntuali Superati

- **ID 526 (S3-01)**: carica $Q = -3{,}2\times 10^{-8}\text{ C} \implies N = 2{,}0\times 10^{11}\text{ elettroni}$ (**PASS**).
- **ID 527 (S3-02)**: Coulomb $F = 0{,}60\text{ N}$ con distrattore corretto $0{,}18\text{ N}$ da omissione esponente quadratico (**PASS**).
- **ID 530 (S3-05)**: carica negativa in campo verso destra $\implies$ forza verso sinistra $0{,}020\text{ N}$ (**PASS**).
- **ID 546 (S3-21)**: flusso magnetico $\Phi = 0{,}020\text{ Wb}$ con distrattore rifinito $0{,}40\text{ Wb}$ da omissione area (**PASS**).
- **ID 549 (S3-24)**: relazione $v = \lambda f \implies f = 30\text{ Hz}$ (**PASS**).
- **ID 550 (S3-25)**: interferenza onde acustiche $\Delta d = 1{,}60\text{ m} = 2\lambda$ costruttiva (**PASS**).
- **ID 560 (S3-35, MD)**: legge lenti convergenti $1/p + 1/q = 1/f \implies q = +60\text{ cm}$, $|G| = 2{,}0$ (**PASS**).

---

## 5. Qualità KaTeX, Deduplicazione e Build

1. **Rendering KaTeX (`throwOnError: true`)**:
   - 376 formule matematiche verificate nei campi `domanda`, `rispostaCorretta`, `risposteErrate` e `spiegazione`.
   - **0 errori di sintassi KaTeX**.
2. **Deduplicazione Globale**:
   - Duplicati ID: **0**.
   - Duplicati esatti/normalizzati su S3 vs Baseline: **0**.
   - I 35 record legacy esclusi rimangono gli unici contrassegnati.
3. **Esito Test Suite**:
   - `testQuiz.mjs`: **166 / 166 PASS** (0 FAIL)
   - `testQuestionCatalog.mjs`: **59 / 59 PASS** (0 FAIL)
   - `testNewTest1Integration.mjs`: **29 / 29 PASS** (0 FAIL)
   - `testMultiUser.mjs`: **48 / 48 PASS** (0 FAIL)
   - **Totale Test**: **302 / 302 PASS (0 FAIL, 0 WARNING)**
4. **Vite Production Build**:
   - `npm run build`: **ESITO PASS (0 errori)**

---

## 6. Perimetro File Modificati (Esattamente 5 File)

1. `src/data/questionBank.js` (M)
2. `src/tests/testNewTest1Integration.mjs` (M)
3. `src/tests/testQuestionCatalog.mjs` (M)
4. `src/tests/testQuiz.mjs` (M)
5. `docs/INTEGRAZIONE_S3_FASE17.md` (NEW)
