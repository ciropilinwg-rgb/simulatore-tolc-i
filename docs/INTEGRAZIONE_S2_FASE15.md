# Integrazione Ufficiale Lotto S2 (Scienze — Termodinamica e Fluidi) — FASE 15

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `57e39c03e71e7b389a8769e66012955a0eb2d84a` (*"Integra lotto S1 e aggiorna test"*)
**Dataset Autoritativo Sorgente**: `scratch/S2-35-quesiti.json` (approvato definitivamente dopo FASE 14-TER)
**Target File Modificato**: `src/data/questionBank.js`
**Test Aggiornati**: `src/tests/testQuiz.mjs`, `src/tests/testQuestionCatalog.mjs`, `src/tests/testNewTest1Integration.mjs`

---

## 1. Sintesi dell'Integrazione

Il Lotto **S2** introduce **35 nuovi quesiti originali di Scienze (Termodinamica e Fluidi)**, mappati in modo strettamente sequenziale sugli **ID ufficiali 491–525**.

- **Calibrazione Difficoltà**: 34 Medio (M), 1 Medio-difficile (MD — `S2-35` / ID 525).
- **Protezione Baseline**: Tutti i 485 record fisici preesistenti (ID 1–490) sono rimasti rigorosamente intatti (485/485 property-by-property match).
- **Parità Dataset**: 35/35 record runtime corrispondono al 100% con il JSON autoritativo.
- **Buchi Storici Preservati**: Assenza confermata per gli ID non riutilizzabili `2`, `18`, `25`, `78`, `202`.
- **Legacy Esclusi**: Esattamente 35 record fisici isolati con `excludedFromTolcPool: true`.

---

## 2. Metriche e Conteggi Pre / Post Integrazione

### Conteggio Globale
| Metrica | Pre-S2 (Baseline) | Post-S2 | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 485 | **520** | +35 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **Pool Attivo TOLC-I** | 450 | **485** | +35 |
| **ID Minimo** | 1 | **1** | 0 |
| **ID Massimo** | 490 | **525** | +35 |

### Ripartizione per Materia
| Materia | Fisici Pre-S2 | Fisici Post-S2 | Attivi Pre-S2 | Attivi Post-S2 |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | **251** | 250 | **250** |
| **Logica** | 49 | **49** | 48 | **48** |
| **Scienze** | 105 | **140** | 103 | **138** |
| **Comprensione verbale** | 80 | **80** | 49 | **49** |
| **Totale** | 485 | **520** | 450 | **485** |

---

## 3. Registro Dettagliato dei Quesiti Integrati (ID 491–525)

| ID | Codice | Sottoargomento | Diff. | Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **491** | `S2-01` | Scale termometriche Celsius e Kelvin | M | `$72^\circ\text{C}` |
| **492** | `S2-02` | Dilatazione termica lineare dei solidi | M | `$18\text{ mm}` |
| **493** | `S2-03` | Calore specifico e capacità termica | M | `$300\text{ J}/(\text{kg}\cdot\text{K})` |
| **494** | `S2-04` | Temperatura di equilibrio termico tra solido e liquido | M | `$44^\circ\text{C}` |
| **495** | `S2-05` | Calore latente nei passaggi di stato | M | `$167\text{ kJ}` |
| **496** | `S2-06` | Meccanismi di propagazione del calore | M | `Esclusivamente l’irraggiamento, mediante propagazione di onde elettromagnetiche` |
| **497** | `S2-07` | Primo principio della termodinamica | M | `$+500\text{ J}` |
| **498** | `S2-08` | Trasformazioni adiabatiche e lavoro esterno | M | `L’energia interna aumenta di $+450\text{ J}$ e la temperatura del gas aumenta` |
| **499** | `S2-09` | Lavoro meccanico in trasformazione isobara | M | `$800\text{ J}` |
| **500** | `S2-10` | Trasformazione isocora e bilancio energetico | M | `$L = 0\text{ J}$ e $\Delta U = +600\text{ J}` |
| **501** | `S2-11` | Legge di Boyle e trasformazioni isoterme | M | `$0{,}5\text{ bar}` |
| **502** | `S2-12` | Legge di Charles / Gay-Lussac e trasformazioni isobare | M | `$3{,}0\text{ L}` |
| **503** | `S2-13` | Equazione di stato dei gas perfetti | M | `$1{,}0\text{ mol}` |
| **504** | `S2-14` | Teoria cinetica ed energia cinetica media molecolare | M | `Esclusivamente dalla temperatura assoluta $T$ del gas` |
| **505** | `S2-15` | Macchina termica di Carnot e rendimento teorico | M | `$50\%` |
| **506** | `S2-16` | Densità e massa volumica | M | `$8000\text{ kg/m}^3` |
| **507** | `S2-17` | Definizione di pressione su una superficie | M | `$15\text{ kPa}` |
| **508** | `S2-18` | Legge di Stevino e pressione idrostatica relativa | M | `$1{,}5 \times 10^5\text{ Pa}` |
| **509** | `S2-19` | Pressione assoluta e pressione atmosferica | M | `$3{,}0 \times 10^5\text{ Pa}` |
| **510** | `S2-20` | Principio di Pascal e torchio idraulico | M | `$1000\text{ N}` |
| **511** | `S2-21` | Vasi comunicanti con liquidi immiscibili | M | `$16\text{ cm}` |
| **512** | `S2-22` | Barometro di Torricelli ed equilibrio idrostatico | M | `L’altezza verticale rimane invariata a $76\text{ cm}$, mentre aumenta la lunghezza del tratto di tubo occupato dal mercurio` |
| **513** | `S2-23` | Manometro differenziale a tubo aperto ed equilibrio idrostatico | M | `$6{,}8\text{ kPa}` |
| **514** | `S2-24` | Peso apparente di un solido immerso | M | `$30\text{ N}` |
| **515** | `S2-25` | Frazione di volume immerso nel galleggiamento | M | `$60\%` |
| **516** | `S2-26` | Condizioni fisiche di affondamento e galleggiamento | M | `Se la densità della sfera è strettamente maggiore di $850\text{ kg/m}^3` |
| **517** | `S2-27` | Volume emerso e volume totale nel galleggiamento | M | `$1000\text{ dm}^3` |
| **518** | `S2-28` | Spinta di Archimede nei gas e aerostati | M | `$6000\text{ N}` |
| **519** | `S2-29` | Portata volumetrica nei condotti | M | `$1{,}0\text{ L/s}` |
| **520** | `S2-30` | Tempo di riempimento e conservazione della massa | M | `$15\text{ minuti}` |
| **521** | `S2-31` | Equazione di continuità per fluidi incompressibili | M | `$6{,}0\text{ m/s}` |
| **522** | `S2-32` | Equazione di continuità e variazione del diametro | M | `$8\text{ m/s}` |
| **523** | `S2-33` | Effetto Venturi e principio di Bernoulli | M | `La pressione statica diminuisce all’aumentare della velocità di scorrimento` |
| **524** | `S2-34` | Legge di Torricelli e portata di efflusso da orifizio | M | `$2{,}0\text{ L/s}` |
| **525** | `S2-35` | Teorema di Bernoulli quantitativo in condotto orizzontale | MD | `$1{,}64 \times 10^5\text{ Pa}` |

---

## 4. Regression Checks Puntuali Superati

- **ID 491 (S2-01)**: incremento $\Delta T = 45\text{ K}$ da $27^\circ\text{C} \implies 72^\circ\text{C}$ (**PASS**).
- **ID 494 (S2-04)**: equilibrio alluminio/acqua con calori specifici distinti $\implies 44^\circ\text{C}$ (**PASS**).
- **ID 497 (S2-07)**: primo principio termodinamica $\Delta U = Q - L = 800 - 300 \implies +500\text{ J}$ (**PASS**).
- **ID 501 (S2-11)**: legge di Boyle $p_1 V_1 = p_2 V_2 \implies 0{,}5\text{ bar}$ (**PASS**).
- **ID 503 (S2-13)**: equazione di stato $pV = nRT \implies 1{,}0\text{ mol}$ (**PASS**).
- **ID 505 (S2-15)**: ciclo di Carnot reversibile $\eta = 1 - 300/600 \implies 50\%$ (**PASS**).
- **ID 511 (S2-21)**: vasi comunicanti $\rho_1 h_1 = \rho_2 h_2 \implies 16\text{ cm}$ (**PASS**).
- **ID 512 (S2-22)**: barometro inclinato con dislivello verticale invariato a $76\text{ cm}$ (**PASS**).
- **ID 513 (S2-23)**: manometro differenziale a tubo aperto con menisco aperto più alto $\implies 6{,}8\text{ kPa}$ (**PASS**).
- **ID 517 (S2-27)**: volume totale iceberg da volume emerso $80\text{ dm}^3 \implies 1000\text{ dm}^3$ (**PASS**).
- **ID 519 (S2-29)**: portata volumetrica condotto $Q = Av \implies 1{,}0\text{ L/s}$ (**PASS**).
- **ID 522 (S2-32)**: diametro dimezzato e velocità quadruplicata $\implies 8\text{ m/s}$ (**PASS**).
- **ID 524 (S2-34)**: Torricelli combinato a portata di efflusso $Q = A\sqrt{2gh} \implies 2{,}0\text{ L/s}$ (**PASS**).
- **ID 525 (S2-35)**: Bernoulli quantitativo orizzontale $\implies 1{,}64 \times 10^5\text{ Pa}$ con ipotesi esplicita di fluido incompressibile e attriti nulli (**PASS**).

---

## 5. Validazione KaTeX, Deduplicazione e Test Suite

- **KaTeX Runtime**: 374 formule matematiche analizzate con `throwOnError: true` $\implies$ **0 errori**.
- **Deduplicazione Runtime**: 0 duplicati ID, 0 duplicati testuali, 0 collisioni strutturali con la banca preesistente.
- **Suite Test Automatizzati**:
  - `src/tests/testQuiz.mjs`: **153/153 PASS**
  - `src/tests/testQuestionCatalog.mjs`: **59/59 PASS**
  - `src/tests/testNewTest1Integration.mjs`: **29/29 PASS**
  - `tests/testMultiUser.mjs`: **48/48 PASS**
  - `npm.cmd run build`: **PASS** (Vite build completata con successo).

---

## 6. File Modificati ed Autorizzati (5/5)

1. `src/data/questionBank.js` (Aggiunti 35 record S2, ID 491–525)
2. `src/tests/testQuiz.mjs` (Aggiunta sezione 2G, aggiornati conteggi globali a 520 fisici / 485 attivi)
3. `src/tests/testQuestionCatalog.mjs` (Aggiornati conteggi catalogo a 520/485)
4. `src/tests/testNewTest1Integration.mjs` (Aggiornati conteggi banca a 520 totali / 140 scienze)
5. `docs/INTEGRAZIONE_S2_FASE15.md` (Documentazione tecnica ufficiale)
