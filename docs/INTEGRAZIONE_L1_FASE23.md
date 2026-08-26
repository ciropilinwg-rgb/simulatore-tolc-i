# Documento di Integrazione Controllata — Lotto L1 (FASE 23)
### Logica — Proposizioni, connettivi logici, quantificatori, negazioni e relazioni logiche elementari

**Data**: 26 Agosto 2026
**Baseline Git di partenza**: `78360db8aac10bba42675ad595d66929ea53ace4` (*"Integra lotto S5 e aggiorna test"*)
**Dataset Frozen Sorgente**: `scratch/L1-50-quesiti.json`
**Dimensione Dataset Frozen**: `50.912 byte`
**SHA-256 Dataset Frozen**: `0e79f330d4ded2e53c20eec8c797f84d5302a914ee0d8c7f281fff708cb12ba2`

---

## 1. Obiettivo dell'Integrazione
Integrazione controllata di **50 nuovi quesiti originali di Logica** (proposizioni semplici e composte, connettivi $\land, \lor, \oplus, \to, \leftrightarrow$, quantificatori $\forall, \exists$, leggi di De Morgan, condizioni necessarie/sufficienti propedeutiche, regole d'inferenza classica come *Modus Ponens*, *Modus Tollens*, sillogismo disgiuntivo e sillogismo ipotetico) negli ID **638–687**, portando la banca dati di Logica da 49 a 99 quesiti fisici (98 attivi TOLC-I).

---

## 2. Dimensionamento e Bilancio della Banca Dati

### 2.1 Conteggio Globale
- **Quesiti Fisici Totali**: $632 \to 682$ ($+50$)
- **Quesiti Attivi TOLC-I**: $597 \to 647$ ($+50$)
- **Record Legacy Esclusi**: $35$ (invariati)
- **ID Massimo**: $687$ (minimo $1$)
- **Buchi Storici Preservati**: ID $2, 18, 25, 78, 202$ (nessuna riassegnazione)

### 2.2 Ripartizione per Materia
| Materia | Record Fisici Pre-L1 | Incremento L1 | Record Fisici Post-L1 | Attivi TOLC-I | Legacy Esclusi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 0 | **251** | 250 | 1 |
| **Logica** | 49 | **+50** | **99** | **98** | 1 |
| **Scienze** | 252 | 0 | **252** | 250 | 2 |
| **Comprensione verbale** | 80 | 0 | **80** | 49 | 31 |
| **TOTALE** | **632** | **+50** | **682** | **647** | **35** |

### 2.3 Ripartizione Difficoltà Lotto L1
- **Medio-Facili (MF)**: 3 quesiti (`difficolta: 'medio-facile'`, ID 638, 652, 666)
- **Medi (M)**: 44 quesiti (`difficolta: 'medio'`)
- **Medio-Difficili (MD)**: 3 quesiti (`difficolta: 'medio-difficile'`, ID 651, 665, 679)

---

## 3. Registro Dettagliato dei 50 Quesiti Integrati (ID 638–687)

| ID | Codice | Area / Sottoargomento | Diff. | Risposta Corretta |
| :---: | :---: | :--- | :---: | :--- |
| **638** | `L1-01` | Definizione di proposizione logica dichiarativa | **MF** | `Una frase di senso compiuto per la quale ha senso univoco stabilire se sia vera oppure falsa` |
| **639** | `L1-02` | Valore di verità della congiunzione logica $P \land Q$ | M | `Esclusivamente quando sia $P$ sia $Q$ sono entrambe contemporaneamente vere` |
| **640** | `L1-03` | Valore di verità della disgiunzione inclusiva $P \lor Q$ | M | `Esclusivamente quando sia $P$ sia $Q$ sono entrambe contemporaneamente false` |
| **641** | `L1-04` | Disgiunzione esclusiva $P \oplus Q$ (*aut-aut*) con entrambi veri | M | `Falso, perché la disgiunzione esclusiva esclude il caso in cui entrambe le proposizioni siano vere` |
| **642** | `L1-05` | Principio della doppia negazione $\neg(\neg P) \equiv P$ | M | `Giorgio ha superato la prova di ammissione` |
| **643** | `L1-06` | Valutazione di verità di espressione $(\neg P \lor Q) \lor R$ | M | `Vero, perché la disgiunzione con $R$ (che è vera) rende vera l’intera espressione` |
| **644** | `L1-07` | Falsità dell'implicazione materiale $P \to Q$ | M | `Quando l’antecedente $P$ è vero e il conseguente $Q$ è falso` |
| **645** | `L1-08` | Negazione dell'implicazione materiale $\neg(P \to Q)$ | M | `$P \land \neg Q$ («$P$ e non $Q$»)` |
| **646** | `L1-09` | Equivalenza tra implicazione e disgiunzione ($P \to Q \equiv \neg P \lor Q$) | M | `$\neg P \lor Q$ («Non $P$ oppure $Q$»)` |
| **647** | `L1-10` | Contrapositiva dell'implicazione ($P \to Q \equiv \neg Q \to \neg P$) | M | `Se la strada non è bagnata, allora non piove` |
| **648** | `L1-11` | Fallacia dell'affermazione del conseguente ($P \to Q, Q \implies P$) | M | `Il dispositivo è sicuramente in modalità Risparmio Energetico ($P$)` |
| **649** | `L1-12` | Fallacia della negazione dell'antecedente ($P \to Q, \neg P \implies \neg Q$) | M | `Il candidato Luca non riceverà il punteggio massimo nella prova ($\neg Q$)` |
| **650** | `L1-13` | Condizione sufficiente nel linguaggio formale ($P \to Q$) | M | `Chiunque abbia vinto la fase eliminatoria d’istituto ha il diritto certo di partecipare alla finale regionale` |
| **651** | `L1-14` | Condizione necessaria formale («$P$ solo se $Q$» $\equiv P \to Q$) | **MD** | `$V \to M$, il che significa che essere maggiorenne ($M$) è condizione necessaria per votare ($V$), e chi non è maggiorenne non può votare ($\neg M \to \neg V$)` |
| **652** | `L1-15` | Coimplicazione / Bicondizionale $P \leftrightarrow Q$ («se e solo se») | **MF** | `Che le due proposizioni $P$ e $Q$ hanno sempre lo stesso identico valore di verità (entrambe vere o entrambe false)` |
| **653** | `L1-16` | Equivalenza logica del bicondizionale $(P \to Q) \land (Q \to P)$ | M | `$(P \to Q) \land (Q \to P)$` |
| **654** | `L1-17` | Negazione del bicondizionale $\neg(P \leftrightarrow Q) \equiv P \oplus Q$ | M | `$(P \land \neg Q) \lor (\neg P \land Q)$ (ossia la disgiunzione esclusiva $P \oplus Q$)` |
| **655** | `L1-18` | Distinzione semantica tra implicazione semplice e coimplicazione | M | `Nell’implicazione $P \to Q$, $Q$ può essere vera anche se $P$ è falsa; nella coimplicazione $P \leftrightarrow Q$, se $P$ è falsa anche $Q$ deve essere obbligatoriamente falsa` |
| **656** | `L1-19` | Prima legge di De Morgan: $\neg(P \land Q) \equiv \neg P \lor \neg Q$ | M | `$\neg P \lor \neg Q$ («Non $P$ oppure non $Q$»)` |
| **657** | `L1-20` | Seconda legge di De Morgan: $\neg(P \lor Q) \equiv \neg P \land \neg Q$ | M | `$\neg P \land \neg Q$ («Non $P$ e non $Q$»)` |
| **658** | `L1-21` | De Morgan su enunciato verbale congiunto | M | `Marco non studia ingegneria oppure non lavora come programmatore` |
| **659** | `L1-22` | De Morgan su enunciato verbale disgiunto | M | `Nel fine settimana non andrò al mare e non andrò in montagna` |
| **660** | `L1-23` | De Morgan con negazione interna $\neg(P \land \neg Q) \equiv \neg P \lor Q$ | M | `$\neg P \lor Q$` |
| **661** | `L1-24` | De Morgan su disgiunzione con negazione $\neg(\neg P \lor Q) \equiv P \land \neg Q$ | M | `$P \land \neg Q$` |
| **662** | `L1-25` | Traduzione simbolica e De Morgan su proposizione composta con parentesi | M | `$(\neg R \land \neg C) \land G$` |
| **663** | `L1-26` | Riconoscimento di non-equivalenza ($P \to Q \not\equiv Q \to P$) | M | `$P \to Q$ e $Q \to P$` |
| **664** | `L1-27` | Negazione di promessa condizionale («Se $P$ allora $Q$» $\implies P \land \neg Q$) | M | `Vincerò la gara e non ti regalerò la mia medaglia` |
| **665** | `L1-28` | Negazione complessa annidata: $\neg[A \to (B \land C)] \equiv A \land (\neg B \lor \neg C)$ | **MD** | `$A \land (\neg B \lor \neg C)$` |
| **666** | `L1-29` | Significato del quantificatore universale $\forall x P(x)$ | **MF** | `La proprietà $P$ è verificata da ogni singolo elemento del dominio di riferimento considerato` |
| **667** | `L1-30` | Significato del quantificatore esistenziale $\exists x P(x)$ | M | `Nel dominio di discorso considerato esiste almeno un elemento che soddisfa la proprietà $P$` |
| **668** | `L1-31` | Negazione di quantificatore universale: $\neg \forall x P(x) \equiv \exists x \neg P(x)$ | M | `Esiste almeno uno studente iscritto al corso che non ha superato la prova finale` |
| **669** | `L1-32` | Distinzione logica tra «Non tutti sono $B$» e «Nessuno è $B$» | M | `«Non tutti gli $A$ sono $B$» afferma che esiste almeno un $A$ che non è $B$ (ma altri potrebbero esserlo); «Nessun $A$ è $B$» esclude categoricamente che anche un solo $A$ sia $B$` |
| **670** | `L1-33` | Negazione di quantificatore esistenziale: $\neg \exists x P(x) \equiv \forall x \neg P(x)$ | M | `A nessun gatto piace fare il bagno nell’acqua (ossia a tutti i gatti non piace)` |
| **671** | `L1-34` | Negazione di enunciato negativo universale «Nessun $A$ è $B$» | M | `Esiste almeno un numero primo maggiore di 2 che è un numero pari` |
| **672** | `L1-35` | Negazione di categorica universale con disgiunzione $\forall x (P(x) \lor A(x))$ | M | `Esiste almeno un albero in questo parco che non è né un pino né un abete` |
| **673** | `L1-36` | Negazione di condizionale universale temporale $\forall t (C(t) \to S(t))$ | M | `Esiste almeno una volta in cui vado a correre all’aperto e non indosso le scarpe da ginnastica` |
| **674** | `L1-37` | Equivalenza logica dell'esclusione categorica («Nessun $A$ è $B$») | M | `Tutti gli animali a sangue caldo non sono rettili (e tutti i rettili non sono animali a sangue caldo)` |
| **675** | `L1-38` | Contrapositiva di quantificatore universale condizionato $\forall x (Q(x) \to P(x))$ | M | `Se una figura geometrica non è un parallelogramma, allora non è un quadrato` |
| **676** | `L1-39` | Negazione di esistenziale congiunto $\neg \exists x (R(x) \land L(x)) \equiv \forall x (\neg R(x) \lor \neg L(x))$ | M | `Tutti i candidati o non sono residenti a Roma oppure non sono laureati in informatica` |
| **677** | `L1-40` | Non commutatività dei quantificatori eterogenei: $\forall x \exists y$ vs $\exists y \forall x$ | M | `Nella prima l’elemento $y$ può dipendere da ciascun elemento $x$ scelto; nella seconda deve esistere un unico elemento $y$ comune che funziona contemporaneamente per tutti gli $x$` |
| **678** | `L1-41` | Negazione di sequenza di quantificatori: $\neg(\forall x \exists y P) \equiv \exists x \forall y \neg P$ | M | `$\exists x \forall y \neg P(x,y)$` |
| **679** | `L1-42` | Negazione formale universale condizionale: $\neg[\forall x (P(x) \to Q(x))] \equiv \exists x [P(x) \land \neg Q(x)]$ | **MD** | `$\exists x [P(x) \land \neg Q(x)]$` |
| **680** | `L1-43` | Regola di inferenza classica del *Modus Ponens* ($P \to Q, P \implies Q$) | M | `L’edificio viene evacuato immediatamente` |
| **681** | `L1-44` | Regola di inferenza classica del *Modus Tollens* ($P \to Q, \neg Q \implies \neg P$) | M | `Il numero $k$ non è divisibile per 6` |
| **682** | `L1-45` | Sillogismo disgiuntivo ($P \lor Q, \neg P \implies Q$) | M | `La riunione si terrà nella Sala Riunioni` |
| **683** | `L1-46` | Sillogismo ipotetico / Transitività ($P \to Q, Q \to R \implies P \to R$) | M | `Se un triangolo è equilatero, allora tutti i suoi angoli interni misurano $60^\circ$` |
| **684** | `L1-47` | Valutazione di verità dedotta: falsità di $P \lor Q \implies \neg P \land \neg Q$ vera | M | `Vero, perché se $P \lor Q$ è falsa sia $P$ sia $Q$ sono false, rendendo vere entrambe le loro negazioni` |
| **685** | `L1-48` | Istanziazione universale e deduzione necessaria | M | `Valerio sa nuotare` |
| **686** | `L1-49` | Verità vacua dell’implicazione materiale ($P = F \implies P \to Q = V$) | M | `L’implicazione $P \to Q$ è sicuramente VERA, indipendentemente dal valore di verità (vero o falso) assunto dal conseguente $Q$` |
| **687** | `L1-50` | Catena di inferenze multi-premessa: transitività + Modus Tollens | M | `Oggi non piove ($\neg P$)` |

---

## 4. File Modificati e Creati
1. `src/data/questionBank.js` (Modificato — aggiunti 50 quesiti ID 638–687)
2. `src/tests/testNewTest1Integration.mjs` (Modificato — aggiornato totale 682 e Logica 99)
3. `src/tests/testQuestionCatalog.mjs` (Modificato — aggiornato canonici 682 e pool attivo 647)
4. `src/tests/testQuiz.mjs` (Modificato — aggiunta Sezione 2K censimento L1 e aggiornato bilancio 682)
5. `docs/INTEGRAZIONE_L1_FASE23.md` (Nuovo file documentale)
