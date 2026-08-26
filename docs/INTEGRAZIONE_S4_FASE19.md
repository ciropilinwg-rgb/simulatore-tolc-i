# Integrazione Ufficiale Lotto S4 (Scienze — Struttura atomica, sistema periodico e legami chimici) — FASE 19

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `b08ac69edd237801bf4ed37c2bab1a20c5a4b09f` (*"Integra lotto S3 e aggiorna test"*)
**Dataset Autoritativo Sorgente**: `scratch/S4-35-quesiti.json` (approvato definitivamente e FROZEN dopo FASE 18-BIS)
**SHA-256 Dataset Frozen**: `96ad7ff8f75c8e518fe0c825b4ba7de1e8246ecb9fd20b8bea344f008c8630d4`
**Dimensione Dataset Frozen**: 38.327 byte
**Target File Modificato**: `src/data/questionBank.js`
**Test Aggiornati**: `src/tests/testQuiz.mjs`, `src/tests/testQuestionCatalog.mjs`, `src/tests/testNewTest1Integration.mjs`

---

## 1. Sintesi dell'Integrazione

Il Lotto **S4** introduce **35 nuovi quesiti originali di Scienze (Struttura atomica, sistema periodico e legami chimici)**, mappati in modo strettamente sequenziale sugli **ID ufficiali 561–595**.

- **Calibrazione Difficoltà**: 34 Medio (M), 1 Medio-difficile (MD — `S4-35` / ID 595). Nessun quesito Medio-facile (MF).
- **Protezione Baseline**: Tutti i 555 record fisici preesistenti (ID 1–560) sono rimasti rigorosamente intatti (555/555 property-by-property match).
- **Parità Dataset**: 35/35 record runtime corrispondono al 100% con il JSON autoritativo frozen (0 differenze semantiche).
- **Buchi Storici Preservati**: Assenza confermata per gli ID non riutilizzabili `2`, `18`, `25`, `78`, `202`.
- **Legacy Esclusi**: Esattamente 35 record fisici isolati con `excludedFromTolcPool: true`. Nessun nuovo record S4 è escluso dal pool attivo.

---

## 2. Metriche e Conteggi Pre / Post Integrazione

### Conteggio Globale
| Metrica | Pre-S4 (Baseline) | Post-S4 | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 555 | **590** | +35 |
| **Record Legacy Esclusi** | 35 | **35** | 0 |
| **Pool Attivo TOLC-I** | 520 | **555** | +35 |
| **ID Minimo** | 1 | **1** | 0 |
| **ID Massimo** | 560 | **595** | +35 |

### Ripartizione per Materia
| Materia | Fisici Pre-S4 | Fisici Post-S4 | Attivi Pre-S4 | Attivi Post-S4 |
| :--- | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | **251** | 250 | **250** |
| **Logica** | 49 | **49** | 48 | **48** |
| **Scienze** | 175 | **210** | 173 | **208** |
| **Comprensione verbale** | 80 | **80** | 49 | **49** |
| **Totale** | 555 | **590** | 520 | **555** |

---

## 3. Registro Dettagliato dei Quesiti Integrati (ID 561–595)

| ID | Codice | Sottoargomento | Diff. | Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **561** | `S4-01` | Nuclidi e particelle subatomiche ($^{56}_{26}\text{Fe}$) | M | `$26\text{ protoni}$, $30\text{ neutroni}$ e $26\text{ elettroni}$` |
| **562** | `S4-02` | Cationi monoatomici ($^{27}_{13}\text{Al}^{3+}$) | M | `$13\text{ protoni}$, $14\text{ neutroni}$ e $10\text{ elettroni}$` |
| **563** | `S4-03` | Anioni monoatomici ($^{32}_{16}\text{S}^{2-}$) | M | `$16\text{ protoni}$, $16\text{ neutroni}$ e $18\text{ elettroni}$` |
| **564** | `S4-04` | Definizione rigorosa di isotopi | M | `Lo stesso numero atomico $Z$ ma differente numero di massa $A$` |
| **565** | `S4-05` | Specie isoelettroniche (con gas nobile Neon) | M | `$\text{N}^{3-}$, $\text{O}^{2-}$, $\text{F}^-$, $\text{Na}^+$, $\text{Mg}^{2+}$` |
| **566** | `S4-06` | Modello quantizzato e capacità livelli ($n=3$) | M | `$18\text{ elettroni}$` |
| **567** | `S4-07` | Sottolivelli e orbitali $p$ | M | `$3\text{ orbitali}$, per un massimo di $6\text{ elettroni}$` |
| **568** | `S4-08` | Massa atomica relativa media ponderata ($^{35}\text{Cl} / ^{37}\text{Cl}$) | M | `$35{,}5\text{ u}$` |
| **569** | `S4-09` | Configurazione stato fondamentale Silicio ($Z=14$) | M | `$1s^2\,2s^2\,2p^6\,3s^2\,3p^2$` |
| **570** | `S4-10` | Configurazione elettronica ione Potassio $\text{K}^+$ | M | `$1s^2\,2s^2\,2p^6\,3s^2\,3p^6$` |
| **571** | `S4-11` | Elettroni di valenza Fosforo ($Z=15$) | M | `$5\text{ elettroni di valenza}$` |
| **572** | `S4-12` | Individuazione periodo e gruppo da configurazione | M | `Periodo 3 e Gruppo 17 (VII A, alogeni)` |
| **573** | `S4-13` | Famiglie chimiche (alcalino, alogeno, gas nobile) | M | `Sodio ($\text{Na}$), Cloro ($\text{Cl}$), Elio ($\text{He}$)` |
| **574** | `S4-14` | Proprietà chimiche di gruppo principale | M | `Perché possiedono lo stesso numero e la medesima configurazione di elettroni nel guscio di valenza` |
| **575** | `S4-15` | Trend periodico del raggio atomico | M | `Aumenta scendendo lungo un gruppo e diminuisce procedendo da sinistra verso destra lungo un periodo` |
| **576** | `S4-16` | Massima energia di prima ionizzazione | M | `Elio ($\text{He}$)` |
| **577** | `S4-17` | Massima elettronegatività di Pauling | M | `Fluoro ($\text{F}$)` |
| **578** | `S4-18` | Legame prevalentemente ionico ($\text{K}-\text{Cl}$) | M | `Potassio ($\text{K}$) e Cloro ($\text{Cl}$)` |
| **579** | `S4-19` | Formula minima solido ionico ($\text{Mg}^{2+}, \text{N}^{3-}$) | M | `$\text{Mg}_3\text{N}_2$` |
| **580** | `S4-20` | Conducibilità e proprietà solidi ionici | M | `Allo stato solido sono isolanti elettrici, ma diventano buoni conduttori quando vengono fusi o disciolti in acqua` |
| **581** | `S4-21` | Modello a mare di elettroni e conducibilità metallica | M | `L'elevata conducibilità elettrica e termica allo stato solido` |
| **582** | `S4-22` | Legame covalente triplo in $\text{N}_2$ | M | `$3\text{ coppie di elettroni}$ (legame covalente triplo, pari a 6 elettroni condivisi)` |
| **583** | `S4-23` | Ordine di legame, lunghezza ed energia ($\text{C}-\text{C}$) | M | `Il legame triplo ha la massima energia di dissociazione e la minore lunghezza di legame` |
| **584** | `S4-24` | Covalente polare e carica parziale ($\text{HCl}$) | M | `Covalente polare, con parziale carica negativa $\delta^-$ localizzata sul cloro` |
| **585** | `S4-25` | Legame covalente dativo / coordinazione | M | `La coppia di elettroni condivisa è fornita per intero da uno solo dei due atomi (donatore) a un orbitale vuoto dell'altro (accettore)` |
| **586** | `S4-26` | Regola dell'ottetto di Lewis (gas nobili dal neon in poi) | M | `Raggiungere una configurazione elettronica esterna con 8 elettroni di valenza ($ns^2\,np^6$), caratteristica dei gas nobili dal neon in poi` |
| **587** | `S4-27` | Struttura di Lewis acqua $\text{H}_2\text{O}$ | M | `$2\text{ doppietti di legame}$ e $2\text{ doppietti solitari}$` |
| **588** | `S4-28` | Struttura di Lewis ammoniaca $\text{NH}_3$ | M | `$3\text{ doppietti di legame}$ e $1\text{ doppietto solitario}$` |
| **589** | `S4-29` | Eccezioni all'ottetto: ipovalenza ($\text{BF}_3$) | M | `Trifluoruro di boro ($\text{BF}_3$)` |
| **590** | `S4-30` | Geometria VSEPR lineare in $\text{CO}_2$ ($180^\circ$) | M | `Lineare, con angolo di legame pari a $180^\circ$` |
| **591** | `S4-31` | Geometria VSEPR tetraedrica in $\text{CH}_4$ ($109{,}5^\circ$) | M | `Tetraedrica, con angoli di legame pari a circa $109{,}5^\circ$` |
| **592** | `S4-32` | Effetto repulsivo dei lone pairs sull'angolo ($\text{H}_2\text{O}$) | M | `Perché la repulsione reciproca esercitata dai due doppietti solitari (lone pairs) è maggiore di quella tra doppietti di legame, comprimendo l'angolo` |
| **593** | `S4-33` | Annullamento vettoriale dipoli in $\text{CO}_2$ e $\text{CCl}_4$ | M | `Perché l'elevata simmetria geometrica delle molecole fa sì che la somma vettoriale dei singoli momenti di dipolo di legame sia esattamente nulla` |
| **594** | `S4-34` | Legame a idrogeno ed ebollizione acqua ($\text{H}_2\text{O}$) | M | `Acqua ($\text{H}_2\text{O}$)` |
| **595** | `S4-35` | Analisi multi-step $\text{SO}_2$ ($e_{\text{val}}$, VSEPR, polarità) | **MD** | `$18\text{ elettroni di valenza}$, geometria piegata (angolare con angolo $< 120^\circ$) e molecola polare ($\mu \ne 0$)` |

---

## 4. Quality Gate e Risultati dei Test

- **Test Suite Unitaria (`npm.cmd test`)**: **265 / 265 PASS (0 FAIL)**
  - `testQuiz.mjs`: 177 / 177 PASS
  - `testQuestionCatalog.mjs`: 59 / 59 PASS
  - `testNewTest1Integration.mjs`: 29 / 29 PASS
- **Test Suite di Integrazione Multi-Utente (`npm.cmd run test:integration`)**: **48 / 48 PASS (0 FAIL)**
- **Audit Question Bank (`npm.cmd run audit:questions`)**: **Completato con successo (PASS)**
- **Build di Produzione (`npm.cmd run build`)**: **Compilazione Vite riuscita (0 errori)**
- **Rendering KaTeX (`throwOnError: true`)**: **397 formule analizzate, 0 errori**
- **Deduplicazione Globale**: 0 duplicati ID, 0 duplicati o collisioni cognitive tra S4 e baseline.

---

## 5. File Modificati nella FASE 19 (Esattamente 5 File)

1. `src/data/questionBank.js` (inserimento 35 record S4, ID 561–595)
2. `src/tests/testNewTest1Integration.mjs` (aggiornamento metriche totali 590 e Scienze 210)
3. `src/tests/testQuestionCatalog.mjs` (aggiornamento metriche totali 590 canonici e 555 attivi)
4. `src/tests/testQuiz.mjs` (aggiunta Sezione 2I per S4, equazione di bilancio 590 fisici / 555 attivi)
5. `docs/INTEGRAZIONE_S4_FASE19.md` (documentazione tecnica dell'integrazione)
