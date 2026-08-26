# Documento di Integrazione Controllata — Lotto S5 (FASE 21)
### Scienze — Chimica: Reazioni chimiche, stechiometria, soluzioni, acidi, basi e pH

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `cb41362594350bb30cb49e2320718a21499e8643` (*"Integra lotto S4 e aggiorna test"*)
**Dataset Frozen Sorgente**: `scratch/S5-42-quesiti.json`
**Dimensione Dataset Frozen**: `40.845 byte`
**SHA-256 Dataset Frozen**: `e6901d7c6bb0c0ee30e9d9d390f733caa7e52aa67b00e5dc5e36e875b8c7e89e`

---

## 1. Obiettivo dell'Integrazione
Integrazione controllata di **42 nuovi quesiti originali di Scienze** (Chimica: reazioni chimiche, bilanciamento, mole, stechiometria, reagente limitante, resa, soluzioni, concentrazioni, diluizioni, elettroliti, acidi, basi, pH, neutralizzazione) negli ID **596–637**, completando l'intera sezione Scienze del simulatore TOLC-I.

---

## 2. Dimensionamento e Bilancio della Banca Dati

### 2.1 Conteggio Globale
- **Quesiti Fisici Totali**: $590 \to 632$ ($+42$)
- **Quesiti Attivi TOLC-I**: $555 \to 597$ ($+42$)
- **Record Legacy Esclusi**: $35$ (invariati)
- **ID Massimo**: $637$ (minimo $1$)
- **Buchi Storici Preservati**: ID $2, 18, 25, 78, 202$ (nessuna riassegnazione)

### 2.2 Ripartizione per Materia
| Materia | Record Fisici Pre-S5 | Incremento S5 | Record Fisici Post-S5 | Attivi TOLC-I | Legacy Esclusi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 0 | **251** | 250 | 1 |
| **Logica** | 49 | 0 | **49** | 48 | 1 |
| **Scienze** | 210 | **+42** | **252** | **250** | 2 |
| **Comprensione verbale** | 80 | 0 | **80** | 49 | 31 |
| **TOTALE** | **590** | **+42** | **632** | **597** | **35** |

### 2.3 Ripartizione Difficoltà Lotto S5
- **Medi (M)**: 41 quesiti (`difficolta: 'medio'`)
- **Medio-Difficili (MD)**: 1 quesito (`difficolta: 'medio-difficile'`, ID 637 / S5-42)
- **Medio-Facili (MF)**: 0 quesiti

---

## 3. Registro Dettagliato dei 42 Quesiti Integrati (ID 596–637)

| ID | Codice | Sottoargomento | Diff. | Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **596** | `S5-01` | Legge di conservazione della massa di Lavoisier ($12\text{ g C} + 32\text{ g O}_2$) | M | `$44{,}0\text{ g}$` |
| **597** | `S5-02` | Bilanciamento combustione completa del propano ($\text{C}_3\text{H}_8 + 5\,\text{O}_2$) | M | `$5$` |
| **598** | `S5-03` | Somma coefficienti minimi reazione $\text{Al} + \text{H}_2\text{SO}_4 \to \text{Al}_2(\text{SO}_4)_3 + \text{H}_2$ | M | `$9$` |
| **599** | `S5-04` | Reazione di doppio scambio e precipitazione ($\text{BaSO}_4\downarrow$) | M | `Reazione di doppio scambio (o metatesi) con precipitazione` |
| **600** | `S5-05` | Numero di ossidazione del manganese in $\text{KMnO}_4$ | M | `$+7$` |
| **601** | `S5-06` | Ossidazione e agente riducente in $\text{Zn} + 2\,\text{HCl} \to \text{ZnCl}_2 + \text{H}_2$ | M | `Lo zinco metallico ($\text{Zn}$), il cui numero di ossidazione passa da $0$ a $+2$` |
| **602** | `S5-07` | Ioni spettatori nell'equazione ionica netta ($\text{HCl} + \text{NaOH}$) | M | `$\text{Na}^+$ e $\text{Cl}^-$` |
| **603** | `S5-08` | Numero di ossidazione del cromo nello ione dicromato $\text{Cr}_2\text{O}_7^{2-}$ | M | `$+6$` |
| **604** | `S5-09` | Definizione rigorosa di mole e costante di Avogadro ($N_A$) | M | `La quantità di sostanza che contiene esattamente un numero di entità elementari pari alla costante di Avogadro ($N_A \approx 6{,}022 \times 10^{23}$)` |
| **605** | `S5-10` | Massa molare del glucosio $\text{C}_6\text{H}_{12}\text{O}_6$ | M | `$180{,}0\text{ g/mol}$` |
| **606** | `S5-11` | Calcolo delle moli da una massa in grammi ($45{,}0\text{ g}$ glucosio) | M | `$0{,}250\text{ mol}$` |
| **607** | `S5-12` | Numero di atomi di idrogeno in $0{,}50\text{ mol}$ di $\text{H}_2\text{O}$ | M | `$6{,}0 \times 10^{23}\text{ atomi}$` |
| **608** | `S5-13` | Percentuale in massa del carbonio in $\text{CO}_2$ | M | `Circa il $27{,}3\%$` |
| **609** | `S5-14` | Volume molare dei gas ideali a condizioni standard STP ($2{,}5\text{ mol}$) | M | `$56{,}0\text{ L}$` |
| **610** | `S5-15` | Rapporto stechiometrico moli-moli nella sintesi di $\text{NH}_3$ da $\text{H}_2$ | M | `$4{,}0\text{ moli}$` |
| **611** | `S5-16` | Calcolo massa-massa decomposizione $\text{CaCO}_3 \to \text{CaO} + \text{CO}_2$ | M | `$140{,}0\text{ g}$` |
| **612** | `S5-17` | Individuazione concettuale del reagente limitante ($2\,\text{H}_2 + \text{O}_2$) | M | `L’idrogeno ($\text{H}_2$), perché per reagire completamente richiederebbe solo $3{,}0\text{ moli}$ di $\text{O}_2$, che è presente in eccesso` |
| **613** | `S5-18` | Calcolo quantitativo del prodotto da reagente limitante | M | `$6{,}0\text{ moli}$` |
| **614** | `S5-19` | Moli residue del reagente in eccesso non reagito | M | `$1{,}0\text{ mole di }\text{O}_2$` |
| **615** | `S5-20` | Calcolo della resa percentuale ($64\text{ g} / 80\text{ g}$) | M | `$80{,}0\%$` |
| **616** | `S5-21` | Calcolo della massa effettiva prodotta nota la resa percentuale ($85\%$) | M | `$102{,}0\text{ kg}$` |
| **617** | `S5-22` | Definizione di soluzione satura e corpo di fondo | M | `Una soluzione in cui è disciolta la massima quantità possibile di soluto a quella temperatura, in equilibrio dinamico con l’eventuale corpo di fondo solido` |
| **618** | `S5-23` | Concentrazione percentuale in massa $(\% m/m)$ per $\text{NaCl}$ in acqua | M | `$10{,}0\%\text{ m/m}$` |
| **619** | `S5-24` | Concentrazione percentuale massa su volume $(\% m/V)$ | M | `$10{,}0\text{ g}$` |
| **620** | `S5-25` | Calcolo della concentrazione molare (Molarità $M$) di $\text{KOH}$ | M | `$0{,}50\text{ M}$ (ossia $0{,}50\text{ mol/L}$)` |
| **621** | `S5-26` | Massa di $\text{NaOH}$ per preparare $250\text{ mL}$ di soluzione $0{,}20\text{ M}$ | M | `$2{,}00\text{ g}$` |
| **622** | `S5-27` | Formula delle diluizioni ($M_1 V_1 = M_2 V_2$) | M | `$25\text{ mL}$` |
| **623** | `S5-28` | Molarità finale a seguito di diluizione con aggiunta di solvente | M | `$0{,}20\text{ M}$` |
| **624** | `S5-29` | Classificazione non elettroliti molecolari (saccarosio) | M | `Saccarosio (zucchero da tavola, $\text{C}_{12}\text{H}_{22}\text{O}_{11}$)` |
| **625** | `S5-30` | Concentrazione totale degli ioni in soluzione da $\text{CaCl}_2$ | M | `$0{,}45\text{ mol/L}$` |
| **626** | `S5-31` | Coefficiente di van 't Hoff teorico per $\text{Al}_2(\text{SO}_4)_3$ | M | `$i = 5$` |
| **627** | `S5-32` | Conducibilità elettrica di elettrolita debole (acido acetico) | M | `Acido acetico ($\text{CH}_3\text{COOH}$)` |
| **628** | `S5-33` | Definizione di base secondo Brønsted-Lowry | M | `È in grado di accettare uno ione idrogeno (protone, $\text{H}^+$) da un’altra specie chimica` |
| **629** | `S5-34` | Specie anfotere / anfiprotiche ($\text{HCO}_3^-, \text{H}_2\text{O}$) | M | `Che possono comportarsi sia da acido (donando un protone) sia da base (accettando un protone) a seconda del partner di reazione` |
| **630** | `S5-35` | Calcolo di $[\text{OH}^-]$ noto $[\text{H}^+]$ tramite $K_w$ a $25^\circ\text{C}$ | M | `$1{,}0 \times 10^{-10}\text{ mol/L}$` |
| **631** | `S5-36` | Definizione matematica della scala di pH ($\text{pH} = -\log_{10}[\text{H}^+]$) | M | `$\text{pH} = -\log_{10}[\text{H}^+]$` |
| **632** | `S5-37` | Calcolo del pH di un acido forte monoprotico ($\text{HNO}_3$ $1{,}0 \times 10^{-3}\text{ M}$) | M | `$\text{pH} = 3{,}0$` |
| **633** | `S5-38` | Calcolo del pH di una base forte monoprotica ($\text{NaOH}$ $1{,}0 \times 10^{-2}\text{ M}$) | M | `$\text{pH} = 12{,}0$` |
| **634** | `S5-39` | Variazione del pH per diluizione 100x di acido forte da $\text{pH} = 2{,}0$ | M | `$\text{pH} = 4{,}0$` |
| **635** | `S5-40` | Moli di $\text{NaOH}$ per neutralizzazione completa di $\text{H}_2\text{SO}_4$ diprotico | M | `$0{,}30\text{ moli}$` |
| **636** | `S5-41` | Volume di $\text{KOH}$ $0{,}20\text{ M}$ per titolazione di $100\text{ mL}$ $\text{HCl}$ $0{,}10\text{ M}$ | M | `$50\text{ mL}$` |
| **637** | `S5-42` | Problema multi-step avanzato: neutralizzazione con eccesso e pH finale | **MD** | `$[\text{H}^+] = 0{,}10\text{ M}$ e $\text{pH} = 1{,}0$` |

---

## 4. File Modificati e Creati
1. `src/data/questionBank.js` (Modificato — aggiunti 42 quesiti ID 596–637)
2. `src/tests/testNewTest1Integration.mjs` (Modificato — aggiornato totale 632 e Scienze 252)
3. `src/tests/testQuestionCatalog.mjs` (Modificato — aggiornato canonici 632 e pool attivo 597)
4. `src/tests/testQuiz.mjs` (Modificato — aggiunta Sezione 2J censimento S5 e aggiornato bilancio 632)
5. `docs/INTEGRAZIONE_S5_FASE21.md` (Nuovo file documentale)
