// Banca dati TOLC-I — generata dal file Excel sorgente
// Fonte importazione: Quiz_TOLC_I_estrazione_completa.xlsx
// Ogni domanda include i contatori statistici richiesti dal simulatore.

const questionBank = [
  {
    "id": 1,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale delle seguenti rette è parallela alla retta passante per i punti di coordinate (1;0) e (0;1)?",
    "rispostaCorretta": "x più y uguale 3",
    "risposteErrate": [
      "x uguale y meno 1",
      "x uguale 2",
      "y uguale 1",
      "2 x più 3 y uguale 0"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 2,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale dei seguenti punti è interno al triangolo racchiuso tra le tre rette: r1: y uguale 0 r2: y uguale 2 x r3: y uguale meno x più 7",
    "rispostaCorretta": "P uguale (3;3)",
    "risposteErrate": [
      "P uguale (1; -3)",
      "P uguale (3;5)",
      "P uguale (4;4)",
      "P uguale (-3;2)"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 3,
    "materia": "Matematica",
    "domanda": "A parità di tutte le altre condizioni (materiale, rugosità, stato di pulizia, etc.) serve meno quantitàdi pittura per tinteggiare :",
    "rispostaCorretta": "una piramide avente tutte le facce che sono triangoli equilateri (tetraedro) di lato 1 metro",
    "risposteErrate": [
      "un cubo di lato 1 metro",
      "un cilindro (circolare retto) di raggio 1 metro e di altezza 1 metro",
      "una sfera di raggio 1 metro",
      "un cono (circolare retto) di altezza 1 metro e base di raggio 1 metro"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 4,
    "materia": "Matematica",
    "domanda": "Si ha: Radice cubica di (x alla terza più 8) minore di 0",
    "rispostaCorretta": "se e solo se x minore di -2",
    "risposteErrate": [
      "se e solo se x minore 0",
      "se e solo se x minore 1",
      "per nessun valore reale di x",
      "se e solo se x minore di -1"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 5,
    "materia": "Matematica",
    "domanda": "Avendo un triangolo equilatero A di lato p ed un triangolo equilatero B di lato 2p, si ha che la superficie di B risulta:",
    "rispostaCorretta": "quadrupla di quella di A",
    "risposteErrate": [
      "maggiore di quella di A ma comunque minore del doppio di quella di A",
      "non deducibile da quella di A",
      "doppia di quella di A",
      "maggiore del quadruplo di quella di A"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 6,
    "materia": "Matematica",
    "domanda": "Un angolo misura 2 radianti, quindi",
    "rispostaCorretta": "il suo seno è positivo",
    "risposteErrate": [
      "la sua tangente non esiste",
      "il suo seno ed il suo coseno hanno lo stesso segno",
      "l’angolo è acuto",
      "il suo coseno è positivo"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 7,
    "materia": "Matematica",
    "domanda": "La somma degli angoli interni di un esagono non regolare",
    "rispostaCorretta": "è uguale a 4 pi greco radianti",
    "risposteErrate": [
      "è uguale a sei angoli retti",
      "non è calcolabile senza ulteriori dati",
      "è uguale a $360$ gradi",
      "è uguale a cinque angoli piatti"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 8,
    "materia": "Matematica",
    "domanda": "Dato un numero reale x, la seguente frazione: Numeratore: (2 alla x) per 2 Denominatore: radice quadrata di [4 alla (x+1)] vale:",
    "rispostaCorretta": "1",
    "risposteErrate": [
      "un mezzo",
      "uno fratto (2 alla x)",
      "2",
      "0"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 9,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, la circonferenza di centro C di coordinate (1,1) e tangente all’asse delle x ha equazione",
    "rispostaCorretta": "x alla seconda più y alla seconda meno 2 x meno 2 y più 1 uguale 0",
    "risposteErrate": [
      "x alla seconda più y alla seconda meno 2 x meno 2 y uguale 0",
      "x alla seconda più y alla seconda più 2 x più 2 y uguale 2",
      "x alla seconda più y alla seconda meno 2 x meno 2 y uguale 1",
      "x alla seconda più y alla seconda meno 2 x più 2 y uguale 0"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 10,
    "materia": "Matematica",
    "domanda": "Dato un qualunque numero reale positivo x, allora: logaritmo di (x alla terza) meno logaritmo di (x alla seconda) è uguale a:",
    "rispostaCorretta": "logaritmo di x",
    "risposteErrate": [
      "logaritmo di (x alla terza) fratto logaritmo di (x alla seconda)",
      "logaritmo di (x alla terza meno x alla seconda)",
      "0",
      "logaritmo di (x alla quinta)"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 11,
    "materia": "Matematica",
    "domanda": "Il polinomio 12 a alla seconda meno 18 b alla seconda è divisibile per:",
    "rispostaCorretta": "(Radice quadrata di 2) per a meno (radice quadrata di 3) per b",
    "risposteErrate": [
      "(radice quadrata di 6) per (a meno b)",
      "a meno b",
      "12 a meno 18 b",
      "12 a più 18 b"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 12,
    "materia": "Matematica",
    "domanda": "Le soluzioni dell’equazione trigonometrica seno di x uguale 1 fratto seno di x sono:",
    "rispostaCorretta": "x uguale pi greco mezzi più k pi greco, per ogni valore intero di k",
    "risposteErrate": [
      "x uguale pi greco mezzi più 2 k pi greco, per ogni valore intero di k",
      "x uguale 3 mezzi pi greco più 2 k pi greco, per ogni valore intero di k",
      "x uguale k pi greco mezzi, per ogni valore intero di k",
      "nessuna delle altre risposte"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 13,
    "materia": "Matematica",
    "domanda": "Mettere in ordine crescente i tre numeri 7 radice quadrata di 47 radice quadrata di 3 più radice quadrata di 27",
    "rispostaCorretta": "radice quadrata di 47 minore di radice quadrata di 3 più radice quadrata di 27 minore di 7",
    "risposteErrate": [
      "radice quadrata di 47 minore di 7 minore di radice quadrata di 3 più radice quadrata di 27",
      "7 minore di radice quadrata di 47 minore di radice quadrata di 3 più radice quadrata di 27",
      "7 minore di radice quadrata di 3 più radice quadrata di 27 minore di radice quadrata di 47",
      "radice quadrata di 3 più radice quadrata di 27 minore di radice quadrata di 47 minore di 7"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 14,
    "materia": "Matematica",
    "domanda": "Sia gamma una circonferenza e sia P un punto del piano interno a gamma, diverso dal centro. Quante sono le circonferenze di centro P tangenti a gamma?",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "1",
      "0",
      "3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 15,
    "materia": "Matematica",
    "domanda": "Se f di x uguale x alla seconda meno x alla terza allora f di (x meno 2) vale:",
    "rispostaCorretta": "(3 meno x) per [(x meno 2) alla seconda]",
    "risposteErrate": [
      "x alla seconda meno 2 meno x alla terza più 2",
      "x alla seconda meno x alla terza più 2",
      "nessuna delle altre risposte",
      "x alla seconda meno x alla terza meno 2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 16,
    "materia": "Matematica",
    "domanda": "L’espressione logaritmo in base 10 di [radice cubica di (x alla seconda più 1)] per logaritmo in base 10 di 1000 vale:",
    "rispostaCorretta": "logaritmo in base 10 di (x alla seconda più 1)",
    "risposteErrate": [
      "logaritmo in base 10 di [1000 per radice cubica di (x alla seconda più 1)]",
      "logaritmo in base 10 di [radice cubica di (x alla seconda più 1)] più logaritmo in base 10 di 1000",
      "un terzo per logaritmo in base 10 di [1000 per (x alla seconda più 1)]",
      "logaritmo in base 10 di [1000 per (x alla seconda più 1) fratto 3]"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 17,
    "materia": "Matematica",
    "domanda": "Il Circolo Canottieri Santerno è formato da sei rematori, tutti ugualmente bravi ed affiatati fra loro. Deve mandare una rappresentanza di quattro atleti al campionato regionale. In quanti diversi modi può essere formata una tale rappresentanza?",
    "rispostaCorretta": "15",
    "risposteErrate": [
      "6",
      "5",
      "4",
      "720"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 18,
    "materia": "Matematica",
    "domanda": "Per x compreso tra 0 e pi greco mezzi (estremi inclusi), qual è la soluzione della seguente equazione (dove per radice si intende radice quadrata)? radice di 3 per seno alla seconda di x più radice di 3 per coseno alla seconda di x meno 2 seno di x uguale 0",
    "rispostaCorretta": "x uguale pi greco terzi",
    "risposteErrate": [
      "x uguale 0",
      "x uguale pi greco quarti",
      "x uguale pi greco mezzi",
      "x uguale pi greco sesti"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 19,
    "materia": "Matematica",
    "domanda": "Date due sfere concentriche di raggio 1 e r (con r minore di 1), che valore deve assumere r affinché il volume della parte esterna alla sfera minore sia la metà del volume della sfera maggiore?",
    "rispostaCorretta": "1 fratto radice cubica di 2",
    "risposteErrate": [
      "1 fratto radice quadrata di 2",
      "un mezzo",
      "1 fratto radice quadrata di 3",
      "1 fratto radice cubica di 3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 20,
    "materia": "Matematica",
    "domanda": "Quale delle seguenti affermazioni vale per ogni coppia di polinomi p di x e q di x di grado 3 a coefficienti reali, con p di x diverso da q di x?",
    "rispostaCorretta": "p di x più q di x ha grado minore o uguale 3 e p di x per q di x ha grado 6",
    "risposteErrate": [
      "p di x più q di x ha grado 6 e p di x per q di x ha grado minore o uguale 6",
      "p di x più q di x ha grado 3 e p di x per q di x ha grado minore o uguale 6",
      "p di x più q di x ha grado 6 e p di x per q di x ha grado minore o uguale 9",
      "p di x più q di x ha grado 3 e p di x per q di x ha grado 3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 21,
    "materia": "Logica",
    "domanda": "Due giocatori prendono a turno dei sassolini con l’unica regola che non se ne possono prendere né 4 né 8. Vince quel giocatore che riesce a prendere l’ultimo sassolino. Se inizialmente i sassolini sono 8, quanti ne deve prendere il primo giocatore per potersi garantire la vittoria, supponendo che nelle mosse successive ogni giocatore non commetta errori?",
    "rispostaCorretta": "Qualunque numero prenda, perderà sempre",
    "risposteErrate": [
      "2",
      "1",
      "Qualunque numero prenda, vincerà sempre",
      "3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 22,
    "materia": "Logica",
    "domanda": "Ci sono cinque persone con diverse situazioni patrimoniali. Oronzo è più ricco di Rocco, le cui ricchezze sono più modeste di quelle di Silvio, e quest’ultimo a sua volta è più danaroso di Piero. Quirino è meno benestante di Piero, ma più agiato di Oronzo. Chi è il terzo in ordine di ricchezza?",
    "rispostaCorretta": "Quirino",
    "risposteErrate": [
      "Oronzo",
      "Silvio",
      "Rocco",
      "Piero"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 23,
    "materia": "Logica",
    "domanda": "Indicare qual è la negazione dell’affermazione: “Umberto ha almeno un figlio biondo”",
    "rispostaCorretta": "Umberto non ha figli oppure ha soltanto figli non biondi",
    "risposteErrate": [
      "Almeno un figlio di Umberto non è biondo",
      "Umberto ha tutti i figli rossi di capelli",
      "Non tutti i figli di Umberto sono biondi",
      "Tutti i figli di Umberto sono bruni"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 24,
    "materia": "Logica",
    "domanda": "Dei 120 parlamentari di Allegrandia si sa che un terzo è stato inquisito dalla magistratura e condannatodefinitivamente e i tre quarti sono al secondo (o comunque, non al primo) mandato parlamentare. Se ne può concludere che:",
    "rispostaCorretta": "c’è almeno un parlamentare che è stato condannato definitivamente ed è ad un mandato successivo al primo",
    "risposteErrate": [
      "scelti comunque tre parlamentari, uno almeno di essi è stato condannato definitivamente",
      "un terzo dei parlamentari al primo mandato è stato condannato definitivamente",
      "nessuno dei parlamentari al primo mandato è stato condannato definitivamente",
      "un quarto dei parlamentari è al primo mandato ed è stato condannato definitivamente"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 25,
    "materia": "Logica",
    "domanda": "Indicare quale tra le coppie di numeri indicate va inserita al posto della coppia (x, y) nella seguente sequenza: (3, 43); (5,27); (9,19); (x, y); (33, 13)",
    "rispostaCorretta": "17 , 15",
    "risposteErrate": [
      "23 , 13",
      "15 , 15",
      "24 , 74",
      "19 , 11"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 26,
    "materia": "Logica",
    "domanda": "Un chimico, studiando una soluzione che si era tinta di arancione, constatò che in essa era presentedel sodio o del potassio (o entrambi); inoltre osservò che, se NON c’era sodio, c’era ferro, e che, se c’era potassio, c’era anche jodio. Quale di queste situazione si può verificare?",
    "rispostaCorretta": "La soluzione contiene solo sodio",
    "risposteErrate": [
      "La soluzione contiene solo potassio e ferro",
      "La soluzione contiene solo ferro e jodio",
      "La soluzione contiene sodio e potassio, e non contiene jodio",
      "La soluzione non contiene né sodio né jodio"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 27,
    "materia": "Logica",
    "domanda": "Una indagine mostra che in Italia ci sono piú persone coniugate che single e piú maschi che femmine. Da questi dati possiamo dedurre che una sola fra le seguenti affermazioni è sicuramente FALSA; quale?",
    "rispostaCorretta": "In Italia i single sono piú del doppio delle coppie",
    "risposteErrate": [
      "In Italia ci sono piú mariti che donne nubili",
      "In Italia le coppie sono piú dei maschi celibi",
      "In Italia ci sono piú maschi celibi che mariti",
      "In Italia le coppie sono piú delle donne nubili"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 28,
    "materia": "Logica",
    "domanda": "Premesso che: • chi ascolta musica rock o blues non è stonato • Agenore non è stonato • chi ascolta blues non vince al Lotto quale tra le seguenti conclusioni NON si può trarre dalle precedenti premesse?",
    "rispostaCorretta": "È impossibile che Agenore ascolti blues",
    "risposteErrate": [
      "È possibile che Agenore non vinca al Lotto",
      "Non è escluso che Agenore ascolti rock",
      "Uno stonato non ascolta rock",
      "Chi vince al Lotto non ascolta blues"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 29,
    "materia": "Logica",
    "domanda": "Un Marziolano, osservando che: • metà di tutti i Tondolini sono remissivi • metà di tutti i Marziolani sono testardi • metà di tutti i Marziolani sono remissivi e tenendo presente che non si può essere insieme remissivi e testardi, deduce che una e una sola delle seguenti affermazioni NON può essere vera. Quale?",
    "rispostaCorretta": "Tutti i Marziolani sono Tondolini e nessun Tondolino è testardo",
    "risposteErrate": [
      "Tondolini e Marziolani sono lo stesso insieme di persone",
      "Non esistono Tondolini che siano anche Marziolani",
      "Metà di tutti i Tondolini sono testardi",
      "Tutti i Tondolini sono Marziolani"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 30,
    "materia": "Scienze",
    "domanda": "Dati due vettori A e B di modulo rispettivamente pari a 2 e 3, il vettore C, somma dei due, ha modulo:",
    "rispostaCorretta": "indeterminabile",
    "risposteErrate": [
      "13",
      "5",
      "6",
      "radice quadrata di 13"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 31,
    "materia": "Scienze",
    "domanda": "Viaggiando in treno, un passeggero percepisce gli urti di una ruota sui giunti delle rotaie. Se egli ne conta 240 ogni due minuti e le tratte di rotaia sono lunghe 15 metri, qual è lavelocità del treno, supposta costante?",
    "rispostaCorretta": "30 metri al secondo",
    "risposteErrate": [
      "15 metri al secondos",
      "80 metri al secondo",
      "60 metri al secondo",
      "45 metri al secondo"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 32,
    "materia": "Scienze",
    "domanda": "Un corpo si muove di moto rettilineo uniformemente accelerato. Partendo da fermo, esso percorre 8 metri in 3 secondi. Che distanza percorrerà in 6 secondi?",
    "rispostaCorretta": "32 m",
    "risposteErrate": [
      "24 m",
      "12 m",
      "48 m",
      "16 m"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 33,
    "materia": "Scienze",
    "domanda": "Il periodo delle piccole oscillazioni di un pendolo semplice è:",
    "rispostaCorretta": "direttamente proporzionale alla radice quadrata della lunghezza del filo",
    "risposteErrate": [
      "direttamente proporzionale alla lunghezza del filo",
      "inversamente proporzionale alla lunghezza del filo",
      "direttamente proporzionale alla radice quadrata della accelerazione di gravità",
      "inversamente proporzionale alla radice quadrata della massa oscillante"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 34,
    "materia": "Scienze",
    "domanda": "La resistenza elettrica di un filo metallico è in proporzione:",
    "rispostaCorretta": "diretta della resistività e della lunghezza del filo",
    "risposteErrate": [
      "diretta della resistività e della sezione del filo",
      "inversa della resistività e della sezione del filo",
      "inversa della resistività e della lunghezza del filo",
      "diretta della sezione e della lunghezza del filo"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 35,
    "materia": "Scienze",
    "domanda": "Sapendo che un comune atomo di magnesio contiene 12 protoni, 12 elettroni e 12 neutroni, quale delle seguenti combinazioni corrisponde ad un suo possibile isotopo?",
    "rispostaCorretta": "12 protoni, 12 elettroni e 13 neutroni",
    "risposteErrate": [
      "13 protoni, 13 elettroni e 12 neutroni",
      "13 protoni, 12 elettroni e 13 neutroni",
      "12 protoni, 13 elettroni e 12 neutroni",
      "13 protoni, 12 elettroni e 12 neutroni"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 36,
    "materia": "Scienze",
    "domanda": "Una sorgente luminosa emette luce in modo isotropo (ossia uguale in tutte le direzioni). Se diciamo I l’intensità luminosa osservata ad una distanza d dalla sorgente, l’intensità luminosa alla distanza 2d vale:",
    "rispostaCorretta": "I fratto 4",
    "risposteErrate": [
      "I fratto 2",
      "I fratto 16",
      "2 I",
      "I"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 37,
    "materia": "Scienze",
    "domanda": "Tre moli di acqua (H pedice 2 O) vengono dissociate in una cella elettrolitica ed i gas di reazione vengono raccolti in contenitori separati a pressione costante. Il rapporto tra il volume del contenitore che contiene idrogeno e di quello che contiene ossigeno è approssimativamente:",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "3",
      "un terzo",
      "1",
      "un mezzo"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 38,
    "materia": "Scienze",
    "domanda": "La reazione Ca O più H pedice 2 O dà Ca (O H) pedice 2 è una reazione esotermica. Questo significa che:",
    "rispostaCorretta": "la reazione sviluppa calore ed il Ca (O H) pedice 2 si riscalda",
    "risposteErrate": [
      "la reazione avviene senza alcuna variazione di temperatura",
      "la reazione assorbe calore dall’ambiente ed il Ca (O H) pedice 2 solidifica perché l’acqua contenuta ghiaccia istantaneamente",
      "la reazione sviluppa calore e di conseguenza il Ca (O H) pedice 2 perde istantaneamente il contenuto d’acqua, che evapora, e ritorna ad essere CaO",
      "la reazione assorbe calore dall’ambiente e il Ca (O H) pedice 2 si raffredda"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 39,
    "materia": "Scienze",
    "domanda": "La stessa quantità di calore viene fornita a due corpi di uguale massa, inizialmente alla stessa temperatura,costituiti rispettivamente di vetro e di rame. Il calore specifico del vetro è maggiore di quello del rame. Da queste premesse si può dedurre che:",
    "rispostaCorretta": "Il corpo di rame avrà una temperatura finale maggiore di quella del corpo di vetro",
    "risposteErrate": [
      "Il corpo di vetro avrà una temperatura finale maggiore di quella del corpo di rame",
      "Le temperature finali dei due corpi saranno in ogni caso uguali",
      "Il corpo di rame si riscalderà prima del corpo di vetro, ma raggiungerà la stessa temperatura finale",
      "Il corpo di rame si riscalderà prima del corpo di vetro, ma raggiungerà una temperatura finale minore"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 40,
    "materia": "Comprensione verbale",
    "domanda": "Posizione e impulso",
    "rispostaCorretta": "sono localizzabili contemporaneamente solo in forma approssimata",
    "risposteErrate": [
      "sono totalmente indeterminati",
      "coincidono se hanno valori uguali",
      "si determinano contemporaneamente in modo assoluto",
      "falsificano le disuguaglianze di Heisenberg"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 41,
    "materia": "Comprensione verbale",
    "domanda": "Oggetto della fisica quantistica",
    "rispostaCorretta": "è l’interazione fra microoggetto e mezzo di osservazione",
    "risposteErrate": [
      "sono reazioni di tipo molecolare",
      "è l’oggetto a livello macroscopico",
      "è l’interazione fra fenomeni diversi",
      "è l’oggetto assoluto"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 42,
    "materia": "Comprensione verbale",
    "domanda": "Il carattere probabilistico della descrizione dell’oggetto",
    "rispostaCorretta": "non indica incompletezza di conoscenze",
    "risposteErrate": [
      "non deriva da proprietà dell’oggetto",
      "dimostra i limiti delle conoscenze",
      "è tipica dei fenomeni macroscopici",
      "dipende dalla limitatezza degli strumenti"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 43,
    "materia": "Comprensione verbale",
    "domanda": "Il compito della teoria",
    "rispostaCorretta": "è inferenziale e predittivo",
    "risposteErrate": [
      "consiste nella categorizzazione dei fenomeni",
      "determina compatibilità di fenomeni complementari",
      "consiste nel trovare compatibilità con la teoria classica",
      "è puramente analitico"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 44,
    "materia": "Comprensione verbale",
    "domanda": "La relatività ai mezzi di osservazione",
    "rispostaCorretta": "ha consentito la spiegazione teorica di proprietà fondamentali della materia",
    "risposteErrate": [
      "è estranea alla fisica quantistica",
      "contrasta con la relatività ai sistemi di riferimento",
      "rende inaffidabili i risultati delle teorie",
      "impedisce conclusioni certe"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 45,
    "materia": "Comprensione verbale",
    "domanda": "Gli strati profondi della crosta marziana",
    "rispostaCorretta": "rivelano maggiori tracce del passato",
    "risposteErrate": [
      "sono costituiti solo da rocce compatte",
      "non hanno subito alterazioni",
      "sono più recenti",
      "sono i più facili da osservare"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 46,
    "materia": "Comprensione verbale",
    "domanda": "La forte presenza di zolfo su Marte",
    "rispostaCorretta": "ha provocato piogge acide",
    "risposteErrate": [
      "non dipende dall’attività vulcanica",
      "è causata dalla sua scarsa interazione con altri elementi",
      "ha favorito la formazione di argille",
      "abbassa l’acidità dell’acqua"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 47,
    "materia": "Comprensione verbale",
    "domanda": "L’età relativa di diverse parti della crosta marziana",
    "rispostaCorretta": "è diffcile da stabilire",
    "risposteErrate": [
      "era già nota ai tempi di Schiapparelli",
      "è impossibile con datazione radioisotopica",
      "è indipendente dall’età assoluta",
      "è facile da determinare mediante confronto con la Terra"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 48,
    "materia": "Comprensione verbale",
    "domanda": "La presenza dei carbonati",
    "rispostaCorretta": "non è osservabile dalla superficie",
    "risposteErrate": [
      "richiede condizioni di clima arido",
      "non è correlata con la presenza di acqua",
      "non è alterabile da piogge acide",
      "è molto diffusa"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 49,
    "materia": "Comprensione verbale",
    "domanda": "La somiglianza dell’ambiente marziano a quello terrestre",
    "rispostaCorretta": "durò circa un miliardo di anni",
    "risposteErrate": [
      "non è mai esistita",
      "è stata costante",
      "ha avuto scarsa durata",
      "ha riguardato solo la temperatura"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 50,
    "materia": "Matematica",
    "domanda": "Luigi ha due figli di 15 e 11 anni. Fra 18 anni la sua l’età sarà uguale alla somma delle età che avranno i figli. Quanti anni ha oggi Luigi?",
    "rispostaCorretta": "44",
    "risposteErrate": [
      "30",
      "Non si può dire.",
      "52",
      "26"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 51,
    "materia": "Matematica",
    "domanda": "Per quale dei seguenti valori di x vale cos(x) + sin(x) = 0?",
    "rispostaCorretta": "x = 3π 4",
    "risposteErrate": [
      "x = π 4",
      "x = 0",
      "x = π",
      "x = π 2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 52,
    "materia": "Matematica",
    "domanda": "Per 0 ≤ x ≤ π l’equazione sin(x) = 2 − k ha almeno una soluzione se e solo se:",
    "rispostaCorretta": "1 ≤ k ≤ 2",
    "risposteErrate": [
      "k ≥ 1",
      "k ≤ 2",
      "−1 ≤ k ≤ 1",
      "1 ≤ k ≤ 3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 53,
    "materia": "Matematica",
    "domanda": "Nell’insieme dei numeri reali la disequazione x^4 + 5 < 0 è verificata:",
    "rispostaCorretta": "mai",
    "risposteErrate": [
      "sempre",
      "se x = −5",
      "se x > −5",
      "se x < − 4 √ 5"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 54,
    "materia": "Matematica",
    "domanda": "L’insieme delle soluzioni della disequazione x + 3 x + 1 ≥ 2 è costituito da tutti i numeri reali x tali che:",
    "rispostaCorretta": "−1 < x ≤ 1",
    "risposteErrate": [
      "−1 < x ≤ 2",
      "x ≤ 1",
      "x ≥ 1",
      "x < −1"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 55,
    "materia": "Matematica",
    "domanda": "Il resto della divisione del polinomio x^5 − 3x^4 + 3 per x + 1 è:",
    "rispostaCorretta": "−1",
    "risposteErrate": [
      "1",
      "3",
      "0",
      "x − 1"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 56,
    "materia": "Matematica",
    "domanda": "Sia T un triangolo rettangolo isoscele. Allora la somma dei coseni degli angoli interni di T è uguale a:",
    "rispostaCorretta": "√ 2",
    "risposteErrate": [
      "2",
      "1",
      "√ 3",
      "1 + √ 2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 57,
    "materia": "Matematica",
    "domanda": "Quale delle seguenti uguaglianze è verificata qualunque siano i numeri reali x e y?",
    "rispostaCorretta": "3x+y 3x−y = (3x )2",
    "risposteErrate": [
      "3x+y 3x−y = 3x^2−y^2",
      "3x+y 3x−y = 3x^2 − 3y^2",
      "3x+y 3x−y = 3x^2",
      "3x+y 3x−y = 3x (3y 3−y )"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 58,
    "materia": "Matematica",
    "domanda": "Da un punto P esterno ad una circonferenza di centro O e raggio di 1 cm, si tracciano le tangenti a tale circonferenza che la incontrano nei punti A e B. L’area del poligono PAOB è di √ 3 cm^2 se la distanza di P da O è:",
    "rispostaCorretta": "2 cm",
    "risposteErrate": [
      "3 cm",
      "4 cm",
      "√ 3 2 cm",
      "3 2 cm"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 59,
    "materia": "Matematica",
    "domanda": "L’equazione x + 1 x = k, con x reale non nullo, ammette una ed una sola soluzione se:",
    "rispostaCorretta": "k = 2",
    "risposteErrate": [
      "k = 1",
      "k = 3",
      "k = −3",
      "k = −1"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 60,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano l’equazione x^2 + y^2 + 4x = γ, con γ numero reale positivo, è:",
    "rispostaCorretta": "l’equazione di una circonferenza di centro (−2,0) e raggio √ γ + 4",
    "risposteErrate": [
      "l’equazione di una circonferenza di centro (0, − 4) e raggio √ γ + 2",
      "l’equazione di una circonferenza di centro l’origine e raggio √ γ",
      "l’equazione di una circonferenza di centro (−4,0) e raggio √ γ + 2",
      "l’equazione di una circonferenza di centro (0, − 2) e raggio √ γ + 4"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 61,
    "materia": "Matematica",
    "domanda": "Dato un numero reale positivo xe posto ƒ(x) = log_(10) x, si ha che ƒ(10 · x−2 ) è uguale a:",
    "rispostaCorretta": "1 − 2ƒ(x)",
    "risposteErrate": [
      "1 ƒ(x)",
      "2 − 2ƒ(x)",
      "1 2ƒ(x)",
      "−2ƒ(x)"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 62,
    "materia": "Matematica",
    "domanda": "Dal semicerchio di diametro AB = 2 cm e centro O si toglie il semicerchio di diametro AO. La figura così ottenuta si fa ruotare attorno ad AB con un giro di 360 gradi. Il volume del solido ottenuto è:",
    "rispostaCorretta": "7 6 π cm^3",
    "risposteErrate": [
      "25 3 π cm^3",
      "5 6 π cm^3",
      "4π cm^3",
      "28 3 π cm^3"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 63,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano quanti sono i punti P(x, y) per cui sono verificate tutte e tre le seguenti condizioni? (x + y)2 = 1, x^2 + y^2 = 1, x + y ≤ 0",
    "rispostaCorretta": "Due",
    "risposteErrate": [
      "Uno",
      "Infiniti",
      "Nessuno",
      "Quattro"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 64,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano l’asse del segmento di estremi A (0,0), B (1, 1) ha equazione:",
    "rispostaCorretta": "y = 1 − x",
    "risposteErrate": [
      "y = 1 2 − x",
      "y = 2 − x",
      "y = 1 − x 2",
      "y = 1 − x 2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 65,
    "materia": "Matematica",
    "domanda": "Il numero (81/√64)^(1/4) è uguale a:",
    "rispostaCorretta": "24/8^(5/4)",
    "risposteErrate": [
      "3/√2",
      "3/(2√2)",
      "24/64",
      "3/2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 66,
    "materia": "Matematica",
    "domanda": "La seguente espressione: [(3^20 + 3^20 + 3^20)^(1/3)] / [(3^3)^2] vale:",
    "rispostaCorretta": "3",
    "risposteErrate": [
      "3^2",
      "1",
      "1/3",
      "1/9"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 67,
    "materia": "Matematica",
    "domanda": "Sia Q un quadrato di lato ℓ, C_1 il cerchio circoscritto a Q, C_2 il cerchio inscritto in Q. Il rapporto tra l’area della superficie di C_1 e l’area della superficie di C_2 vale:",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "√ 2",
      "varia al variare di ℓ",
      "2 √ 2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 68,
    "materia": "Matematica",
    "domanda": "Dato il triangolo equilatero ABC il cui lato misura 2cm, siano D, E, F i punti medi rispettivamente dei lati AB, BC, AC. L’area del rombo DECF è:",
    "rispostaCorretta": "√ 3 2 cm^2",
    "risposteErrate": [
      "2 cm^2",
      "√ 3 cm^2",
      "√ 2 cm^2",
      "1 √ 3 cm^2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 69,
    "materia": "Matematica",
    "domanda": "Il 30% degli studenti iscritti ad un corso universitario ha supe- rato l’esame relativo al corso al primo appello. Se, dei restan- ti studenti iscritti, il 10% supera l’esame al secondo appello, gli studenti che devono ancora superare l’esame dopo i primi due appelli saranno:",
    "rispostaCorretta": "il 63% del numero totale di studenti iscritti al corso",
    "risposteErrate": [
      "il 37% del numero totale di studenti iscritti al corso",
      "il 70% del numero totale di studenti iscritti al corso",
      "il 60% del numero totale di studenti iscritti al corso",
      "il 40% del numero totale di studenti iscritti al corso"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 70,
    "materia": "Logica",
    "domanda": "Volendo disporre i numeri 28, 29, 36, 43, 55 in modo che i dispari occupino una posizione dispari ed i pari occupino una posizione pari, in quanti modi diversi si può operare?",
    "rispostaCorretta": "12",
    "risposteErrate": [
      "3",
      "24",
      "5",
      "6"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 71,
    "materia": "Logica",
    "domanda": "Nell’atrio di ingresso di un condominio è appeso un cartello con il seguente avviso: È permesso giocare a calcio in cortile, tranne che dalle ore 13.00 alle ore 16.00 e di domenica Se ne può dedurre che in quel condominio:",
    "rispostaCorretta": "non è vietato giocare a calcio in cortile alle ore 12.00, purchè non sia domenica",
    "risposteErrate": [
      "non è vietato giocare a calcio in cortile la domenica dalle ore 16.00 in poi",
      "nei giorni diversi da domenica è vietato non giocare a calcio in cortile prima delle 13.00 e dopo le 16.00",
      "non è vietato giocare a calcio in cortile alle ore 14.00, purchè non sia domenica",
      "non è vietato giocare a calcio in cortile alle ore 14.00, purchè sia domenica"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 72,
    "materia": "Logica",
    "domanda": "Nonno Peperino non ricorda più la combinazione del suo forziere elettronico. Egli ricorda solo che: • è di quattro cifre distinte (fra 0 e 9) • non vi compare il 4 • la terza cifra è la metà della quarta • le cifre sono in ordine crescente dalla prima all’ultima Qual è il minimo numero di tentativi che Nonno Peperino deve fare per essere sicuro di aprire il forziere?",
    "rispostaCorretta": "3",
    "risposteErrate": [
      "4",
      "5",
      "6",
      "2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 73,
    "materia": "Logica",
    "domanda": "Franco il tabaccaio ha in cassa 195 euro e non ha monete. Un cliente gli chiede se ha da cambiare 10, 20, 50 o 100 euro, ma Franco risponde a malincuore di no a tutte le richieste. Quanti pezzi da 20 euro ha in cassa Franco?",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "1",
      "4",
      "3",
      "0"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 74,
    "materia": "Logica",
    "domanda": "Il cuoco Giovanni osserva che cucinando l’arrosto se non si usa il forno a gasla carne o è cruda all’interno o è bruciata all’esterno o entrambe le cose. Quindi se ne deduce che:",
    "rispostaCorretta": "se l’arrosto ha l’interno ben cotto e non è bruciato all’esterno è stato cotto nel forno a gas",
    "risposteErrate": [
      "se l’arrosto ha l’interno ben cotto è stato cotto nel forno a gas",
      "se l’arrosto ha l’interno ben cotto o non è bruciato all’esterno è stato cotto nel forno a gas",
      "se l’arrosto è crudo all’interno non è stato cotto nel forno a gas",
      "se l’arrosto è stato cotto nel forno elettrico la carne è cruda all’interno e bruciata all’esterno"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 75,
    "materia": "Logica",
    "domanda": "Il grande teorico dei numeri Kontakerikonta ha scoperto i numeri Incredibili; egli non sa ancora se essi siano in numero finito, però ha fatto la seguente congettura: se sono infiniti, almeno uno di essi deve avere 8 fattori primi distinti Il suo allievo Rikontoijo studiando con cura questi numeri, dimostra che la congettura di Kontakerikonta è falsa. Dunque Rikontoijo ha provato che:",
    "rispostaCorretta": "i numeri Incredibili sono infiniti e nessuno di essi ha 8 fattori primi distinti",
    "risposteErrate": [
      "se i numeri Incredibili sono una quantità finita, nessuno di essi ha 8 fattori primi distinti",
      "se i numeri Incredibili sono una quantità finita, tutti hanno 8 fattori primi distinti",
      "i numeri Incredibili sono infiniti",
      "i numeri Incredibili sono infiniti e hanno tutti 8 fattori primi distinti"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 76,
    "materia": "Logica",
    "domanda": "Gli archeobatteri sono organismi unicellulari che vivono in stagni e si riproducono per scissione (cioè ogni batterio si divide in due e forma due altri batteri uguali). Se si immette un archeobatterio in un certo stagno, esso ogni giorno si riproduce per scissione una sola volta, e dopo 30 giorni la superficie dello stagno è completamente ricoper- ta dai batteri. Quanti giorni ci vorranno affinché la superficie dello stes- so stagno sia completamente ricoperta, se inizialmente vi si immettono due archeobatteri?",
    "rispostaCorretta": "29 giorni.",
    "risposteErrate": [
      "30 giorni.",
      "28 giorni.",
      "Dipende dalla superficie dello stagno.",
      "15 giorni."
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 77,
    "materia": "Logica",
    "domanda": "Un’indagine svolta tra tutti i 1000 abitanti della cittadina di Sparagna al di sopra dei 55 anni, mostra che il 40% di loro possiede un frigorifero, che il 25% possiede un televisore, e che il 15% li possiede entrambi. Dunque, nella cittadina di Sparagna:",
    "rispostaCorretta": "il 50% della popolazione al di sopra dei 55 anni non possiede né televisore né frigorifero",
    "risposteErrate": [
      "al di sotto dei 55 anni meno del 40% della popolazione possiede un frigorifero",
      "meno del 45% della popolazione al di sopra dei 55 anni possiede televisore o frigorifero",
      "al di sotto dei 55 anni più del 25% della popolazione possiede un televisore",
      "più del 50% della popolazione al di sopra dei 55 anni ha televisore o frigorifero"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 78,
    "materia": "Logica",
    "domanda": "Quali dei numeri x, y proposti vanno inseriti nella tabella?",
    "rispostaCorretta": "x=15 e y=720",
    "risposteErrate": [
      "x=14 e y=720",
      "x=14 e y=240",
      "x=12 e y=240",
      "x=15 e y=240"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 79,
    "materia": "Logica",
    "domanda": "In una discussione tra amici, Antonio dice: A tutti noi piace il caffè, tranne che a Paola, a cui non piace Fabio osserva che Antonio ha torto. Ne consegue che:",
    "rispostaCorretta": "o a Paola piace il caffè, oppure c’è qualcuno tra gli amici, oltre Paola, a cui il caffè non piace",
    "risposteErrate": [
      "a tutti gli amici piace il caffè",
      "a Paola piace il caffè",
      "a uno degli amici, che non è Paola, non piace il caffè",
      "non è possibile che il caffè dispiaccia a uno solo tra gli amici"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 80,
    "materia": "Scienze",
    "domanda": "Due corpi A e B, di volume uguale e masse m_B = 3m_A, sono completamente immersi in un liquido. Quando i due corpi, tenuti inizialmente fermi, vengono lasciati andare, la forza idrostatica (spinta di Archimede) che il liquido esercita su B è:",
    "rispostaCorretta": "uguale a quella su A",
    "risposteErrate": [
      "nove volte quella su A",
      "tre volte quella su A",
      "un nono di quella su A",
      "un terzo di quella su A"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 81,
    "materia": "Scienze",
    "domanda": "Un corpo di peso P, situato in prossimità della superficie ter- restre, cade partendo da fermo. Se g è l’accelerazione di gravità e si trascura la resistenza dell’aria, l’energia cinetica acquistata dal corpo dopo un tempo t è pari a:",
    "rispostaCorretta": "(1/2)Pgt^2",
    "risposteErrate": [
      "(1/2)Pgt",
      "2Pgt",
      "2Pgt^2",
      "(1/2)Pg2 t^2"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 82,
    "materia": "Scienze",
    "domanda": "Un tubo di sezione S costante piegato ad U è aperto su un ramo e chiuso da un tappo T sull’altro (vedi figura). Se il tubo contiene acqua (densità ρ) e le altezze dell’acqua nei due rami sono H ed h, la forza che l’acqua esercita sul tappo vale:",
    "rispostaCorretta": "ρg(H − h)S, diretta verso l’alto",
    "risposteErrate": [
      "ρg(H − h), diretta verso il basso",
      "ρgh, diretta verso l’alto",
      "ρgHS, diretta verso l’alto",
      "ρg(H + h), diretta verso il basso"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 83,
    "materia": "Scienze",
    "domanda": "Una macchina termica ha un rendimento del 75%. Quanto calore viene assorbito in un ciclo di funzionamento, se al termine di esso il lavoro fatto dalla macchina è pari a 3,6 kJ?",
    "rispostaCorretta": "4,8 kJ",
    "risposteErrate": [
      "2,7 kJ",
      "14,4 kJ",
      "0,9 kJ",
      "3,6 kJ"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 84,
    "materia": "Scienze",
    "domanda": "Secondo quale ordine sono disposti gli elementi chimici nella tavola periodica?",
    "rispostaCorretta": "per numero di protoni",
    "risposteErrate": [
      "alfabetico",
      "per abbondanza nell’universo",
      "per dimensione",
      "per anno di scoperta"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 85,
    "materia": "Scienze",
    "domanda": "Il suono è:",
    "rispostaCorretta": "un’onda che si propaga in un mezzo elastico con una velocità che dipende dal mezzo",
    "risposteErrate": [
      "un’onda elastica che si propaga nel vuoto alla velocità di 340m/s",
      "un’onda che si propaga in un mezzo elastico alla velocità di 300 000km/s",
      "un’onda elastica che si propaga nel vuoto alla velocità di 300 000km/s",
      "un’onda che si propaga nel vuoto ed in tutti i mezzi materiali alla velocità di 340m/s"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 86,
    "materia": "Scienze",
    "domanda": "Mescolate 60 litri d’acqua a 20 °C con 20 litri d’acqua a 60 °C. Trascurando le dissipazioni di calore, la temperatura finale che si raggiunge è:",
    "rispostaCorretta": "30 °C",
    "risposteErrate": [
      "25 °C",
      "28 °C",
      "40 °C",
      "35 °C"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 87,
    "materia": "Scienze",
    "domanda": "Due sferette metalliche A e B sono sospese mediante fili isolanti. Una bacchetta di vetro viene caricata positivamente, quindi avvicinata prima ad A e successivamente a B, senza toccarle. Si osserva che la sferetta A viene attratta dalla bacchetta, mentre B viene respinta dalla stessa. Possiamo concludere che:",
    "rispostaCorretta": "B è carica positivamente",
    "risposteErrate": [
      "sia A sia B possono avere carica nulla",
      "sia A sia B sono cariche negativamente",
      "A è carica negativamente, mentre B può essere sia carica positivamente sia avere carica nulla",
      "A è carica negativamente e B positivamente"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 88,
    "materia": "Scienze",
    "domanda": "Indicando con “·” il prodotto scalare e con “×” il prodotto vettore, quale delle seguenti operazioni genera la proiezione (in modulo) del vettore a⃗ sul vettore b⃗?",
    "rispostaCorretta": "(a⃗ · b⃗)/|b⃗|",
    "risposteErrate": [
      "(a⃗ × b⃗)/|b⃗|",
      "a⃗ × b⃗",
      "a⃗ · b⃗",
      "a⃗ + b⃗"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 89,
    "materia": "Scienze",
    "domanda": "Un treno viaggia alla velocità di 144km/h. Supponendo che le ruote aderiscano perfettamente ai binari (non c’è slittamen- to) e che abbiano un diametro d=80cm, il numero di giri che fanno in un secondo è circa pari a:",
    "rispostaCorretta": "16",
    "risposteErrate": [
      "8",
      "57",
      "32",
      "115"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 90,
    "materia": "Comprensione verbale",
    "domanda": "La libertà interiore consiste:",
    "rispostaCorretta": "nello spirito critico",
    "risposteErrate": [
      "nel seguire i propri sentimenti",
      "nell’accettazione dei giudizi altrui",
      "nell’indifferenza ai valori sociali",
      "nell’affermazione del proprio punto di vista"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 91,
    "materia": "Comprensione verbale",
    "domanda": "I giudizi di valore:",
    "rispostaCorretta": "sono problematici",
    "risposteErrate": [
      "non cambiano mai",
      "sono legati alle tradizioni",
      "sono derivabili da conoscenze scientifiche",
      "hanno un fondamento razionale sicuro"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 92,
    "materia": "Comprensione verbale",
    "domanda": "La scuola dovrebbe:",
    "rispostaCorretta": "liberare dagli stereotipi",
    "risposteErrate": [
      "essere condotta in modo autoritario",
      "scoraggiare l’originalità",
      "trasmettere un sapere acquisito",
      "favorire la ripetitività"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 93,
    "materia": "Comprensione verbale",
    "domanda": "Il progresso tecnico:",
    "rispostaCorretta": "favorisce la libertà",
    "risposteErrate": [
      "assorbe maggiori energie",
      "esige maggiore impegno di lavoro",
      "fa aumentare i bisogni",
      "concentra l’attenzione sui beni materiali"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 94,
    "materia": "Comprensione verbale",
    "domanda": "Il progresso scientifico:",
    "rispostaCorretta": "richiede libertà di comunicazione",
    "risposteErrate": [
      "favorisce l’omologazione dei giudizi",
      "è indipendente dalle condizioni sociali",
      "non esige uno sforzo comune",
      "assicura il dominio sociale sulla natura"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 95,
    "materia": "Comprensione verbale",
    "domanda": "La diffusione dei graffiti indica che:",
    "rispostaCorretta": "la gente comune sapeva leggere",
    "risposteErrate": [
      "l’analfabetismo era molto diffuso",
      "la vita sociale era scarsa",
      "la capacità di disegnare era scadente",
      "i liberti erano molto istruiti"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 96,
    "materia": "Comprensione verbale",
    "domanda": "La presenza di graffiti in Britannia è significativa perché:",
    "rispostaCorretta": "indica alfabetizzazione anche alla periferia dell’Impero",
    "risposteErrate": [
      "dimostra l’assimilazione delle popolazioni celtiche",
      "segnala la presenza di presidi militar",
      "indica una vivace vita rurale",
      "testimonia la persistenza di culti locali"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 97,
    "materia": "Comprensione verbale",
    "domanda": "L’alfabetizzazione era legata a:",
    "rispostaCorretta": "a una struttura organizzata della città",
    "risposteErrate": [
      "tolleranza religiosa",
      "bilinguismo greco-latino",
      "coscrizione militare",
      "diffusione delle biblioteche"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 98,
    "materia": "Comprensione verbale",
    "domanda": "La funzione dei graffiti era:",
    "rispostaCorretta": "comunicazione sociale",
    "risposteErrate": [
      "espressione della creatività individuale",
      "simbologia religiosa",
      "indicazioni logistiche",
      "diffusione della cultura"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 99,
    "materia": "Comprensione verbale",
    "domanda": "La frequenza dei reperimenti di graffiti è:",
    "rispostaCorretta": "inversamente proporzionale al crollo degli edifici",
    "risposteErrate": [
      "maggiore nei periodi di crisi",
      "inversamente proporzionale all’intensità della vita cittadina",
      "scarsa nell’Italia Meridionale",
      "tipica solo del V e VI secolo"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 100,
    "materia": "Logica",
    "domanda": "Nella Repubblica di Arraffa NON è vero che Ogni parlamentare è persona onesta e competente Dunque, nella Repubblica di Arraffa:",
    "rispostaCorretta": "qualche parlamentare non è onesto oppure non è competente",
    "risposteErrate": [
      "ogni parlamentare o è onesto, ma non competente, oppure è competente, ma non onesto",
      "qualche parlamentare è onesto e competente",
      "le persone oneste e competenti non diventano mai parlamentari",
      "nessun parlamentare è onesto e competente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 101,
    "materia": "Logica",
    "domanda": "Volendo disporre i numeri 28 29 36 43 55 in modo che i dispari occupino una posizione dispari ed i pari occupino una posizione pari, in quanti modi diversi si può operare’",
    "rispostaCorretta": "12",
    "risposteErrate": [
      "3",
      "24",
      "5",
      "6"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 102,
    "materia": "Logica",
    "domanda": "La signora QKX è stata strangolata nel proprio salotto. Il commissario ZYW non crede che l’imputato di omicidio (il quale si difende vibratamente dichiarando la propria innocenza) non si sia recato a casa della vittima nell’intervallo di tempo nel quale la stessa ha perso la vita. Si può dedurre che:",
    "rispostaCorretta": "il commissario ZYW non esclude che l’imputato abbia strangolato la signora QKX",
    "risposteErrate": [
      "sicuramente l’imputato non è colpevole",
      "il commissario ZYW è convinto che l’imputato non si sia recato a casa della vittima nell’intervallo di tempo nel quale la stessa ha perso la vita",
      "per il commissario ZYW l’imputato certamente non è colpevole",
      "sicuramente l’imputato è colpevole"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 103,
    "materia": "Logica",
    "domanda": "Nell’atrio di ingresso di un condominio è appeso un cartello con il seguente avviso: È permesso giocare a calcio in cortile, tranne che dalle ore 13.00 alle ore 16.00 e di domenica Se ne può dedurre che in quel condominio:",
    "rispostaCorretta": "non è vietato giocare a calcio in cortile alle ore 12.00, purché non sia domenica",
    "risposteErrate": [
      "non è vietato giocare a calcio in cortile la domenica dalle ore 16.00 in poi",
      "nei giorni diversi da domenica è vietato non giocare a calcio in cortile prima delle 13.00 e dopo le 16.00",
      "non è vietato giocare a calcio in cortile alle ore 14.00, purché non sia domenica",
      "non è vietato giocare a calcio in cortile alle ore 14.00, purché sia domenica"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 104,
    "materia": "Logica",
    "domanda": "Con quale coppia di numeri continuereste la seguente successione di interi’ 1, 2; 2, 4; 5, 8; 10, 14; 17, 22; 26, 32; . . . , . . .",
    "rispostaCorretta": "37, 44",
    "risposteErrate": [
      "40, 80",
      "46, 64",
      "40, 67",
      "44, 16"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 105,
    "materia": "Logica",
    "domanda": "Nonno Peperino non ricorda più la combinazione del suo forziere elettronico. Egli ricorda solo che: • è di quattro cifre distinte fra 0 e 9 • non vi compare il 4 • la terza cifra è la metà della quarta • le cifre sono in ordine crescente dalla prima all’ultima Qual è il minimo numero di tentativi che Nonno Peperino deve fare per essere sicuro di aprire il forziere?",
    "rispostaCorretta": "3",
    "risposteErrate": [
      "4",
      "5",
      "6",
      "2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 106,
    "materia": "Logica",
    "domanda": "Due giocatori, Aldo e Bruno, a turno dispongono su una scacchiera 3 × 3, una per volta, pedine identiche tutte nere. Vince il primo giocatore che riesce a completare un terzetto in una fila orizzontale, verticale o una delle due diagonali. Quante sono le mosse con cui può iniziare la partita il primo giocatore (Aldo) in modo da potersi garantire la vittoria indipendentemente da come giocherà Bruno?",
    "rispostaCorretta": "9",
    "risposteErrate": [
      "8",
      "1",
      "0, nel senso che Bruno può sempre rispondere in modo opportuno e garantirsi la vittoria",
      "5"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 107,
    "materia": "Logica",
    "domanda": "Franco il tabaccaio ha in cassa 195 euro e non ha monete. Un cliente gli chiede se ha da cambiare 10, 20, 50 o 100 euro, ma Franco risponde a malincuore di no a tutte le richieste. Quanti pezzi da 20 euro ha in cassa Franco?",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "1",
      "4",
      "3",
      "0"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 108,
    "materia": "Logica",
    "domanda": "Il cuoco Giovanni osserva che cucinando l’arrosto se non si usa il forno a gas la carne o è cruda all’interno o è bruciata all’esterno o entrambe le cose. Quindi se ne deduce che",
    "rispostaCorretta": "se l’arrosto ha l’interno ben cotto e non è bruciato all’esterno è stato cotto nel forno a gas",
    "risposteErrate": [
      "se l’arrosto ha l’interno ben cotto è stato cotto nel forno a gas",
      "se l’arrosto ha l’interno ben cotto o non è bruciato all’esterno è stato cotto nel forno a gas",
      "se l’arrosto è crudo all’interno non è stato cotto nel forno a gas",
      "se l’arrosto è stato cotto nel forno elettrico la carne è cruda all’interno e bruciata all’esterno"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 109,
    "materia": "Logica",
    "domanda": "Il grande teorico dei numeri Kontakerikonta ha scoperto i numeri Incredibili; egli non sa ancora se essi siano in numero finito, però ha fatto la seguente congettura: • se sono infiniti, almeno uno di essi deve avere 8 fattori primi distinti Il suo allievo Rikontoijo studiando con cura questi numeri, dimostra che la congettura di Kontakerikonta è falsa. Dunque Rikontoijo ha provato che:",
    "rispostaCorretta": "i numeri Incredibili sono infiniti e nessuno di essi ha 8 fattori primi distinti",
    "risposteErrate": [
      "se i numeri Incredibili sono una quantità finita, nessuno di essi ha 8 fattori primi distinti",
      "se i numeri Incredibili sono una quantità finita, tutti hanno 8 fattori primi distinti",
      "i numeri Incredibili sono infiniti",
      "i numeri Incredibili sono infiniti e hanno tutti 8 fattori primi distinti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 110,
    "materia": "Logica",
    "domanda": "Gli archeobatteri sono organismi unicellulari che vivono in stagni e si riproducono per scissione (cioè ogni batterio si divide in due e forma due altri batteri uguali). Se si immette un archeobatterio in un certo stagno, esso ogni giorno si riproduce per scissione una sola volta, e dopo 30 giorni la superficie dello stagno è completamente ricoperta dai batteri. Quanti giorni ci vorranno affinché la superficie dello stesso stagno sia completamente ricoperta, se inizialmente vi si immettono due archeobatteri?",
    "rispostaCorretta": "29 giorni",
    "risposteErrate": [
      "30 giorni",
      "28 giorni",
      "dipende dalla superficie dello stagno",
      "15 giorni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 111,
    "materia": "Logica",
    "domanda": "Un’indagine svolta tra tutti i 1000 abitanti della cittadina di Sparagna al di sopra dei 55 anni, mostra che il 40% di loro possiede un frigorifero, che il 25% possiede un televisore, e che il 15% li possiede entrambi. Dunque, nella cittadina di Sparagna:",
    "rispostaCorretta": "il 50% della popolazione al di sopra dei 55 anni non possiede né televisore né frigorifero",
    "risposteErrate": [
      "al di sotto dei 55 anni meno del 40% della popolazione possiede un frigorifero",
      "meno del 45% della popolazione al di sopra dei 55 anni possiede televisore o frigorifero",
      "al di sotto dei 55 anni più del 25% della popolazione possiede un televisore",
      "più del 50% della popolazione al di sopra dei 55 anni ha televisore o frigorifero"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 112,
    "materia": "Logica",
    "domanda": "Quali dei numeri x, y proposti vanno inseriti nella tabella? 1 3 6 10 x 21 28 1 2 6 24 120 y 5040",
    "rispostaCorretta": "x = 15 e y = 720",
    "risposteErrate": [
      "x = 14 e y = 720",
      "x = 14 e y = 240",
      "x = 12 e y = 240",
      "x = 15 e y = 240"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 113,
    "materia": "Logica",
    "domanda": "Luigina afferma: • il martedì, se faccio il bagno poi vado al mercato. L’altro ieri era martedì, e ho fatto il bagno • ieri non ho fatto il bagno e sono andata al mercato • oggi andrò al mercato e forse mi farò anche il bagno Ne consegue necessariamente che:",
    "rispostaCorretta": "a volte Luigina va al mercato senza essersi fatta il bagno",
    "risposteErrate": [
      "tutte le volte che Luigina va al mercato, non si fa il bagno",
      "il martedì Luigina fa sempre il bagno",
      "se Luigina fa il bagno di mercoledì, poi non va al mercato",
      "l’altro ieri Luigina non è andata al mercato"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 114,
    "materia": "Logica",
    "domanda": "In una discussione tra amici, Antonio dice: A tutti noi piace il caffè, tranne che a Paola, a cui non piace Fabio osserva che Antonio ha torto. Ne consegue che:",
    "rispostaCorretta": "o a Paola piace il caffè, oppure c’è qualcuno tra gli amici, oltre Paola, a cui il caffè non piace",
    "risposteErrate": [
      "a tutti gli amici piace il caffè",
      "a Paola piace il caffè",
      "a uno degli amici, che non è Paola, non piace il caffè",
      "non è possibile che il caffè dispiaccia a uno solo tra gli amici"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 115,
    "materia": "Logica",
    "domanda": "Giocando a Risiko Giulio Cesare ha vinto più di suo nipote Augusto, ma non di Napoleone. Alessandro Magno ha vinto meno di Carlo Magno, ma più di Napoleone. Chi ha vinto di meno?",
    "rispostaCorretta": "Augusto",
    "risposteErrate": [
      "Carlo Magno",
      "Alessandro Magno",
      "Napoleone",
      "Giulio Cesare"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 116,
    "materia": "Logica",
    "domanda": "Il tenente Piccione, nel corso delle sue indagini su un assassinio, ha appurato questi due fatti: • se X ha accoltellato la vittima, allora X è mancino; • se Y ha accoltellato la vittima, allora Y è l’assassino. Quale di queste deduzioni è corretta?",
    "rispostaCorretta": "Il commissario Piccione accerta che il signor Bianchi non è mancino e ne deduce che non ha accoltellato la vittima",
    "risposteErrate": [
      "Il commissario Piccione accerta che il signor Bianchi non è mancino e ne deduce che non è l’assassino",
      "L’assassino ha accoltellato la vittima",
      "Il commissario Piccione accerta che il signor Rossi è mancino e ne deduce che è l’assassino",
      "Il commissario Piccione accerta che il signor Rossi è mancino e ne deduce che ha accoltellato la vittima"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 117,
    "materia": "Logica",
    "domanda": "Il Re non rispettò il consiglio del Gran Ciambellano di opporsi alla celebrazione del matrimonio della Principessa dal Collo di Cigno con il rospo che amava, qualora i giovani insistessero per celebrare il rito nella Basilica di Superga. Le principesse, almeno quelle delle favole, seguono la volontà paterna. Che cosa ne deducete?",
    "rispostaCorretta": "La principessa ed il rospo potranno sposarsi, se lo desidereranno, nella Basilica di Superga",
    "risposteErrate": [
      "La principessa ed il rospo non si sposeranno",
      "La principessa ed il rospo potranno sposarsi, ma non nella Basilica di Superga",
      "I dati del problema non autorizzano a concludere la veridicità di alcuna delle interpretazioni proposte",
      "La principessa ed il rospo si sposeranno necessariamente nella Basilica di Superga"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 118,
    "materia": "Logica",
    "domanda": "La frase Sul tavolo ci sono due bicchieri implica che sul tavolo",
    "rispostaCorretta": "c’è un bicchiere",
    "risposteErrate": [
      "ci sono due bicchieri e una bottiglia",
      "non ci sono bottiglie",
      "ci sono due bicchieri e due tazzine da caffè",
      "non ci sono tre bicchieri"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 119,
    "materia": "Logica",
    "domanda": "Quale dei quadrati numerati da 1 a 5 sostituisce correttamente il riquadro contenente il punto interrogativo? Quesito N. 1 Quale figura completa la sequenza ? 16 16 16 16 16 16 16 16 16 36 36 36 36 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 ? 16 16 16 16 16 16 16 16 16 144 100 64 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 2 1 3 4 4 4 4 4 4 4 4 4 4 4 4",
    "rispostaCorretta": "5 A. Il quadrato 5 B. Il quadrato 3 C. Il quadrato 1 D. Il quadrato 2 E. Il quadrato 4",
    "risposteErrate": [
      "1",
      "2",
      "3",
      "4"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 120,
    "materia": "Logica",
    "domanda": "Per numerare le pagine di un libro sono state usate in totale 3301 cifre. Le pagine del libro sono:",
    "rispostaCorretta": "tra 1000 e 1500",
    "risposteErrate": [
      "tra 1500 e 2000",
      "tra 2000 e 3000",
      "meno di 1000",
      "più di 3000"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 121,
    "materia": "Logica",
    "domanda": "Si legge sull’autobus I passeggeri sono tenuti a pagare un ulteriore biglietto per ogni bagaglio che superi le seguenti dimensioni: 50 cm × 30 cm × 25 cm. Chi legge comprende che, in base a questa norma, si debba pagare un ulteriore biglietto per un oggetto di qualunque forma che occupi uno spazio il cui volume è superiore a quello occupato dal bagaglio sopra descritto. Egli deduce quindi che:",
    "rispostaCorretta": "si deve pagare un biglietto per un oggetto che supera 50 cm di lunghezza e 30 cm di altezza e 25 cm di spessore",
    "risposteErrate": [
      "si deve pagare un biglietto per un pallone del diametro di 20 cm",
      "si deve pagare un biglietto per un bastone lungo 90 cm e con il diametro di 2 cm se tenuto orizzontalmente",
      "si deve pagare un biglietto per un bastone lungo 90 cm e con il diametro di 2 cm",
      "si deve pagare un biglietto per un oggetto che supera 50 cm di lunghezza oppure 30 cm di altezza oppure 25 cm di spessore"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 122,
    "materia": "Logica",
    "domanda": "Indicare quanti numeri diversi si possono ottenere da somme algebriche di questo tipo ±1 ± 2 ± 3 ± 4 ± 5 utilizzando tutte le cifre da 1 a 5 e al variare di tutte le possibili scelte dei segni + o − (ad esempio: −1 − 2 + 3 + 4 + 5, 1 + 2 − 3 + 4 + 5, ...).",
    "rispostaCorretta": "16",
    "risposteErrate": [
      "20",
      "24",
      "31",
      "32"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 123,
    "materia": "Logica",
    "domanda": "Quale delle figure numerate da 1 a 5 sostituisce correttamente il riquadro contenente il punto interrogativo? Quesito N. 4 Quale figura completa la sequenza ? 15 6 9 3 6 3 4 8 12 16 20 4 4 28 3 9 6 3 6 9 ? 72 6 18 30 42 54 66 24 48 96 120 72 6 6 6 6 6 6 6 6 6 6 6 6 4 16 64 144 80 4 24 4 4 8 12 16 12 4 4 4 4 8 12 16 12 4 4 4 4 5 1 2 3",
    "rispostaCorretta": "1",
    "risposteErrate": [
      "2",
      "3",
      "4",
      "5 A. La figura 2 B. La figura 3 C. La figura 4 D. La figura 5 E. La figura 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 124,
    "materia": "Logica",
    "domanda": "Il ministro dell’economia di Matlandia afferma: Se il bilancio non sarà tagliato, allora nel prossimo anno 2006 i prezzi rimarranno stabili se e soltanto se aumenteremo tutte le tasse Ammessa l’assoluta verità di questa affermazione e fondandosi solo su di essa, che cosa può essere accaduto a Matlandia nel 2006?",
    "rispostaCorretta": "Il bilancio non fu tagliato; tutte le tasse furono aumentate e i prezzi rimasero stabili",
    "risposteErrate": [
      "Il bilancio non fu tagliato; tutte le tasse furono aumentate e i prezzi crebbero",
      "Il bilancio non fu tagliato; le tasse non furono aumentate e i prezzi rimasero stabili",
      "Il bilancio non fu tagliato; furono aumentate le tasse solo sugli stipendi degli impiegati dello Stato e i prezzi rimasero stabili",
      "Il bilancio non fu tagliato, e i prezzi crebbero comunque"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 125,
    "materia": "Logica",
    "domanda": "Quale fra le seguenti affermazioni è sicuramente falsa?",
    "rispostaCorretta": "Chi respira è vivo. Piero non respira, dunque Piero è morto",
    "risposteErrate": [
      "Nessun parigino è italiano; tutti i parigini parlano francese; ma non è vero che nessun italiano parla francese.",
      "Un quadrato è sempre un rombo",
      "Ciò che è scritto in A. è falso",
      "Ogni professore ha un registro. Mario non ha registro, dunque Mario non è professore"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 126,
    "materia": "Logica",
    "domanda": "Al termine di una seduta di allenamento della Nazionale, Totti e Buffon fanno la seguente scommessa: Totti tirerà 12 rigori e Buffon cercherà di pararli. Per ogni rigore parato Totti darà 50 euro a Buffon mentre per ogni rigore segnato Buffon darà 40 euro a Totti. Dopo di ciò viene eseguita la serie di rigori al termine della quale Totti deve avere da Buffon 120 euro. Quanti rigori ha parato Buffon?",
    "rispostaCorretta": "4",
    "risposteErrate": [
      "9",
      "5",
      "6",
      "12"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 127,
    "materia": "Logica",
    "domanda": "Una famosa congettura afferma che vi sono infinite coppie (p, q) di numeri primi tali che p = q + 2. Confutare questa affermazione equivale a mostrare che:",
    "rispostaCorretta": "esiste un intero positivo n tale che, qualunque sia il numero primo q con q > n, il numero q + 2 non è primo",
    "risposteErrate": [
      "per ogni intero positivo n e per ogni numero primo q con q > n il numero q + 2 non è primo",
      "esistono un intero positivo n e un numero primo q con q > n tali che il numero q + 2 non è primo",
      "per ogni intero positivo n esiste un numero primo q con q > n tale che il numero q + 2 non è primo",
      "esiste un intero positivo n tale che, per ogni numero (primo e non primo) m con m > n, il numero m + 2 non è primo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 128,
    "materia": "Logica",
    "domanda": "Considero una tabella quadrata formata da 4 numeri diversi e disposti in 2 righe ciascuna composta da 2 numeri: a b c d ) Siano: • r_1 il più piccolo dei numeri della prima riga • r_2 il più piccolo dei numeri della seconda riga • R il maggiore tra r_1 ed r_2 • K_1 il più grande dei numeri della prima colonna • K_2 il più grande dei numeri della seconda colonna • k il minore tra K_1 e K_2 Allora possiamo concludere che:",
    "rispostaCorretta": "R ≤ k",
    "risposteErrate": [
      "R < k",
      "R = k",
      "R > k",
      "R ≥ k"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 129,
    "materia": "Logica",
    "domanda": "Di una famiglia si sa che: • almeno un maschio non è celibe • tutti i laureati sono celibi • non è vero che almeno un maschio non è maggiorenne. Solo una delle seguenti proposizioni è deducibile dalle premesse. Quale?",
    "rispostaCorretta": "Almeno un maggiorenne è coniugato",
    "risposteErrate": [
      "Nessun maggiorenne non è coniugato",
      "Tutti i celibi sono laureati",
      "Almeno un celibe non è maggiorenne",
      "Almeno un maggiorenne non è coniugato"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 130,
    "materia": "Logica",
    "domanda": "Due giocatori prendono a turno dei sassolini con l’unica regola che non se ne possono prendere né 4 né 8. Vince quel giocatore che riesce a prendere l’ultimo sassolino. Se inizialmente i sassolini sono 8, quanti ne deve prendere il primo giocatore per potersi garantire la vittoria, supponendo che nelle mosse successive ogni giocatore non commetta errori?",
    "rispostaCorretta": "Qualunque numero prenda, perderà sempre",
    "risposteErrate": [
      "Qualunque numero prenda, vincerà sempre",
      "1",
      "2",
      "3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 131,
    "materia": "Logica",
    "domanda": "Ci sono cinque persone con diverse situazioni patrimoniali. Oronzo è più ricco di Rocco, le cui ricchezze sono più modeste di quelle di Silvio, e quest’ultimo a sua volta è più danaroso di Piero. Quirino è meno benestante di Piero, ma più agiato di Oronzo. Chi è il terzo in ordine di ricchezza?",
    "rispostaCorretta": "Quirino",
    "risposteErrate": [
      "Piero",
      "Rocco",
      "Oronzo",
      "Silvio"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 132,
    "materia": "Logica",
    "domanda": "Indicare qual è la negazione dell’affermazione Umberto ha almeno un figlio biondo",
    "rispostaCorretta": "Umberto non ha figli oppure ha soltanto figli non biondi",
    "risposteErrate": [
      "Almeno un figlio di Umberto non è biondo",
      "Tutti i figli di Umberto sono bruni",
      "Non tutti i figli di Umberto sono biondi",
      "Umberto ha tutti i figli rossi di capelli"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 133,
    "materia": "Logica",
    "domanda": "Quanti triangoli sapete individuare nella figura seguente?",
    "rispostaCorretta": "12",
    "risposteErrate": [
      "6",
      "10",
      "8",
      "16"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 134,
    "materia": "Logica",
    "domanda": "Dire quante stelle sono comprese sia nel triangolo, sia nel cerchio ma non nel quadrato e neppure nel rettangolo.",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "3",
      "4",
      "5",
      "6"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 135,
    "materia": "Logica",
    "domanda": "Dei 120 parlamentari di Allegrandia si sa che un terzo è stato inquisito dalla magistratura e condannato definitivamente e i tre quarti sono al secondo (o comunque, non al primo) mandato parlamentare. Se ne può concludere che:",
    "rispostaCorretta": "c’è almeno un parlamentare che è stato condannato definitivamente ed è ad un mandato successivo al primo",
    "risposteErrate": [
      "un quarto dei parlamentari è al primo mandato ed è stato condannato definitivamente",
      "nessuno dei parlamentari al primo mandato è stato condannato definitivamente",
      "scelti comunque tre parlamentari, uno almeno di essi è stato condannato definitivamente",
      "un terzo dei parlamentari al primo mandato è stato condannato definitivamente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 136,
    "materia": "Logica",
    "domanda": "Un accogliente cartello all’ingresso del ristorante L’Oca Giuliva recita: Se si è in pochi, si mangia bene Se si è in tanti, si spende poco Il Signor Aquilotto, con la sua mente acuta, ne deduce logicamente che:",
    "rispostaCorretta": "se si mangia male non si è in pochi",
    "risposteErrate": [
      "se si è pochi, si spende tanto",
      "per mangiar bene è necessario andarci in pochi",
      "per spendere poco bisogna essere in tanti",
      "se si è in tanti, si mangia male"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 137,
    "materia": "Logica",
    "domanda": "In occasione delle elezioni primarie per la scelta del candidato premier di Burgundia, ciascuno dei sette candidati è sicuro di riuscire a classificarsi fra i tre più votati. Negare questa frase vuol dire affermare che:",
    "rispostaCorretta": "ogni candidato è sicuro di non riuscire a classificarsi fra i tre più votati",
    "risposteErrate": [
      "c’è almeno un candidato che teme di rientrare fra i tre meno votati",
      "c’è almeno un candidato che non è sicuro di rientrare fra i primi tre più votati",
      "alcuni dei sette candidati sono sicuri di riuscire a classificarsi fra i tre più votati",
      "ciascuno dei sette candidati teme di rientrare fra i tre meno votati"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 138,
    "materia": "Logica",
    "domanda": "Indicare quale tra le coppie di numeri indicate va inserita al posto dei puntini nella seguente sequenza 3, 43 ; 5, 27 ; 9, 19 ; ..., ... ; 33, 13",
    "rispostaCorretta": "17, 15",
    "risposteErrate": [
      "24, 74",
      "19, 11",
      "15, 15",
      "23, 13"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 139,
    "materia": "Logica",
    "domanda": "Un chimico, studiando una soluzione che si era tinta di arancione, constatò che in essa era presente del sodio o del potassio (o entrambi); osservò che, se NON c’era sodio, c’era ferro, e che, se c’era potassio, c’era anche jodio. Quale di queste situazione si può verificare?",
    "rispostaCorretta": "La soluzione contiene solo sodio",
    "risposteErrate": [
      "La soluzione contiene solo potassio e ferro",
      "La soluzione contiene solo ferro e jodio",
      "la soluzione contiene sodio e potassio, e non contiene jodio",
      "La soluzione non contiene né sodio né jodio"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 140,
    "materia": "Logica",
    "domanda": "Una indagine mostra che in Italia ci sono più persone coniugate che single e più maschi che femmine. Da questi dati possiamo dedurre che una sola fra le seguenti affermazioni è sicuramente FALSA; quale?",
    "rispostaCorretta": "In Italia i single sono più del doppio delle coppie",
    "risposteErrate": [
      "In Italia le coppie sono più delle donne nubili",
      "In Italia le coppie sono più dei maschi celibi",
      "In Italia ci sono più mariti che donne nubili",
      "In Italia ci sono più maschi celibi che mariti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 141,
    "materia": "Logica",
    "domanda": "Premesso che: • chi ascolta musica rock o blues non è stonato • Agenore non è stonato • chi ascolta blues non vince al Lotto quale tra le seguenti conclusioni NON si può trarre dalle precedenti premesse?",
    "rispostaCorretta": "È impossibile che Agenore ascolti blues",
    "risposteErrate": [
      "Uno stonato non ascolta rock",
      "È possibile che Agenore non vinca al Lotto",
      "Chi vince al Lotto non ascolta blues",
      "Non è escluso che Agenore ascolti rock"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 142,
    "materia": "Logica",
    "domanda": "Il grande teorico dei numeri Valakekontojioo, studiando i numeri interi 1,2,3,4,5, . . . , ha trovato che tra essi potrebbero esistere i numeri cirilli, che godono di queste due proprietà: • la somma di due numeri cirilli (anche uguali) è un cirillo • il prodotto di due numeri cirilli (anche uguali) non è un cirillo Il suo allievo Son Pyooh Foorb studiando con cura questi numeri, ha scoperto quanti sono i numeri cirilli, e precisamente ha dedotto che il numero dei cirilli è:",
    "rispostaCorretta": "0",
    "risposteErrate": [
      "3",
      "1",
      "4",
      "infinito"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 143,
    "materia": "Logica",
    "domanda": "Dobbiamo colorare le 11 regioni delimitate dai 4 cerchi della figura in modo che due regioni che hanno un arco in comune non siano dello stesso colore. Quanti colori dobbiamo usare come minimo per soddisfare questa richiesta?",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "6",
      "5",
      "3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 144,
    "materia": "Logica",
    "domanda": "Un Marziolano, osservando che: • metà di tutti i Tondolini sono remissivi • metà di tutti i Marziolani sono testardi • metà di tutti i Marziolani sono remissivi e tenendo presente che non si può essere insieme remissivi e testardi, deduce che una e una sola delle seguenti affermazioni NON può essere vera. Quale?",
    "rispostaCorretta": "Tutti i Marziolani sono Tondolini e nessun Tondolino è testardo",
    "risposteErrate": [
      "Metà di tutti i Tondolini sono testardi",
      "Tutti i Tondolini sono Marziolani",
      "Non esistono Tondolini che siano anche Marziolani",
      "Tondolini e Marziolani sono lo stesso insieme di persone"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 145,
    "materia": "Comprensione verbale",
    "domanda": "La libertà interiore consiste",
    "rispostaCorretta": "nello spirito critico",
    "risposteErrate": [
      "nel seguire i propri sentimenti",
      "nell’accettazione dei giudizi altrui",
      "nell’indifferenza ai valori sociali",
      "nell’affermazione del proprio punto di vista"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 146,
    "materia": "Comprensione verbale",
    "domanda": "I giudizi di valore",
    "rispostaCorretta": "sono problematici",
    "risposteErrate": [
      "non cambiano mai",
      "sono legati alle tradizioni",
      "sono derivabili da conoscenze scientifiche",
      "hanno un fondamento razionale sicuro"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 147,
    "materia": "Comprensione verbale",
    "domanda": "La scuola dovrebbe",
    "rispostaCorretta": "liberare dagli stereotipi",
    "risposteErrate": [
      "essere condotta in modo autoritario",
      "scoraggiare l’originalità",
      "trasmettere un sapere acquisito",
      "favorire la ripetitività"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 148,
    "materia": "Comprensione verbale",
    "domanda": "Il progresso tecnico",
    "rispostaCorretta": "favorisce la libertà",
    "risposteErrate": [
      "assorbe maggiori energie",
      "esige maggiore impegno di lavoro",
      "fa aumentare i bisogni",
      "concentra l’attenzione sui beni materiali"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 149,
    "materia": "Comprensione verbale",
    "domanda": "Il progresso scientifico",
    "rispostaCorretta": "richiede libertà di comunicazione",
    "risposteErrate": [
      "favorisce l’omologazione dei giudizi",
      "è indipendente dalle condizioni sociali",
      "non esige uno sforzo comune",
      "assicura il dominio sociale sulla natura"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 150,
    "materia": "Comprensione verbale",
    "domanda": "La diffusione dei graffiti indica che",
    "rispostaCorretta": "la gente comune sapeva leggere",
    "risposteErrate": [
      "l’analfabetismo era molto diffuso",
      "la vita sociale era scarsa",
      "la capacità di disegnare era scadente",
      "i liberti erano molto istruiti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 151,
    "materia": "Comprensione verbale",
    "domanda": "La presenza di graffiti in Britannia è significativa perché",
    "rispostaCorretta": "indica alfabetizzazione anche alla periferia dell’Impero",
    "risposteErrate": [
      "dimostra l’assimilazione delle popolazioni celtiche",
      "segnala la presenza di presidi militari",
      "indica una vivace vita rurale",
      "testimonia la persistenza di culti locali"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 152,
    "materia": "Comprensione verbale",
    "domanda": "L’alfabetizzazione era legata a",
    "rispostaCorretta": "a una struttura organizzata della città",
    "risposteErrate": [
      "tolleranza religiosa",
      "bilinguismo greco-latino",
      "coscrizione militare",
      "diffusione delle biblioteche"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 153,
    "materia": "Comprensione verbale",
    "domanda": "La funzione dei graffiti era",
    "rispostaCorretta": "comunicazione sociale",
    "risposteErrate": [
      "espressione della creatività individuale",
      "simbologia religiosa",
      "indicazioni logistiche",
      "diffusione della cultura"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 154,
    "materia": "Comprensione verbale",
    "domanda": "La frequenza dei reperimenti di graffiti è",
    "rispostaCorretta": "inversamente proporzionale al crollo degli edifici",
    "risposteErrate": [
      "maggiore nei periodi di crisi",
      "inversamente proporzionale all’intensità della vita cittadina",
      "scarsa nell’Italia Meridionale",
      "tipica solo del V e VI secolo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 155,
    "materia": "Comprensione verbale",
    "domanda": "Una affermazione è oggettiva quando",
    "rispostaCorretta": "può essere verificata da operatori diversi",
    "risposteErrate": [
      "è confermata sperimentalmente",
      "è condivisa da tutti",
      "riguarda oggetti naturali",
      "è esente da contraddizioni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 156,
    "materia": "Comprensione verbale",
    "domanda": "La varietà delle discipline",
    "rispostaCorretta": "rende impossibile l’unicità del metodo",
    "risposteErrate": [
      "dimostra il progresso del sapere",
      "va oltre l’ambito dell’esperienza",
      "va ricondotta al primato della fisica",
      "riguarda sempre oggetti materiali"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 157,
    "materia": "Comprensione verbale",
    "domanda": "Lo sviluppo del formalismo matematico",
    "rispostaCorretta": "è indispensabile per il progresso della fisica",
    "risposteErrate": [
      "resta fermo a concetti generali",
      "elimina il ricorso all’esperienza",
      "serve solo per elaborazioni teoriche",
      "ha portato a teorie astratte"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 158,
    "materia": "Comprensione verbale",
    "domanda": "La qualifica di scientificità",
    "rispostaCorretta": "è molto molto apprezzata per ogni disciplina",
    "risposteErrate": [
      "coincide con dogmatismo",
      "attualmente si identifica con sicurezza",
      "è arbitrariamente estesa a molti campi del sapere",
      "viene spesso usata in senso ristretto"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 159,
    "materia": "Comprensione verbale",
    "domanda": "Accertare la scientificità delle teorie è compito",
    "rispostaCorretta": "della filosofia e della scienza",
    "risposteErrate": [
      "della politica culturale",
      "della stessa teoria",
      "della logica",
      "della matematica"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 160,
    "materia": "Comprensione verbale",
    "domanda": "Collassando nella condizione di buco nero, il Sole",
    "rispostaCorretta": "ridurrebbe le sue dimensioni",
    "risposteErrate": [
      "diventerebbe più visibile",
      "perderebbe una parte della sua massa",
      "perderebbe la sua gravità",
      "si dilaterebbe enormemente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 161,
    "materia": "Comprensione verbale",
    "domanda": "Da un buco nero la luce",
    "rispostaCorretta": "non viene emessa",
    "risposteErrate": [
      "è più brillante sull’orizzonte assoluto",
      "esce con una velocità inferiore a 300 000 km/s",
      "viene emessa irregolarmente",
      "viene emessa a intervalli regolari"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 162,
    "materia": "Comprensione verbale",
    "domanda": "Il raggio dell’orizzonte assoluto",
    "rispostaCorretta": "è proporzionale alla massa",
    "risposteErrate": [
      "è proporzionale alla distanza dall’osservatore",
      "coincide con il limite della galassia di appartenenza",
      "coincide con il limite dell’universo",
      "è uguale per tutti i buchi neri"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 163,
    "materia": "Comprensione verbale",
    "domanda": "La teoria della relatività generale",
    "rispostaCorretta": "non è stata confermata da molte prove sperimentali",
    "risposteErrate": [
      "ha avuto moltissime conferme sperimentali",
      "non riguarda le stelle di neutroni",
      "era già nota a Newton",
      "non ha nulla a che fare con l’esperienza"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 164,
    "materia": "Comprensione verbale",
    "domanda": "L’esistenza di un buco nero",
    "rispostaCorretta": "è affermata in base alla teoria della relatività generale",
    "risposteErrate": [
      "è osservabile da un satellite artificiale",
      "era già nota dall’antichità",
      "è osservabile con un normale telescopio",
      "costituisce una ipotesi fantasiosa"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 165,
    "materia": "Comprensione verbale",
    "domanda": "Gli stati nazionali usciti dalla conferenza di Versailles",
    "rispostaCorretta": "erano in realtà plurinazionali",
    "risposteErrate": [
      "rispecchiavano gli interessi delle nazioni vinte",
      "erano del tutto indifferenti ai valori nazionali",
      "garantivano gli interessi di ogni gruppo nazionale",
      "realizzavano perfettamente il principio wilsoniano"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 166,
    "materia": "Comprensione verbale",
    "domanda": "Il principio wilsoniano postulava",
    "rispostaCorretta": "coincidenza fra frontiere statali e nazionalità",
    "risposteErrate": [
      "organizzazioni federali come negli USA",
      "organismi rappresentativi delle singole nazionalità",
      "stati multinazionali",
      "confini statali indipendenti dalla nazionalità"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 167,
    "materia": "Comprensione verbale",
    "domanda": "Nel caso della Germania i trattati di pace",
    "rispostaCorretta": "infrangevano il principio nazionale per ragioni politico–militari",
    "risposteErrate": [
      "univano alla Germania considerevoli minoranze",
      "riunivano nella Germania tutte le popolazioni tedesche",
      "stabilivano una riunione perpetua tra Germania e Austria",
      "rispettavano perfettamente il principio nazionale"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 168,
    "materia": "Comprensione verbale",
    "domanda": "L’eliminazione degli Ebrei",
    "rispostaCorretta": "nacque da una interpretazione razzista della nazionalità",
    "risposteErrate": [
      "non si estese oltre la Germania",
      "non ebbe legami con il totalitarismo",
      "non fu dovuta a questioni politiche",
      "è una conseguenza automatica del principio nazionale"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 169,
    "materia": "Comprensione verbale",
    "domanda": "Negli stati nazionali",
    "rispostaCorretta": "le minoranze erano oppresse",
    "risposteErrate": [
      "le minoranze erano tutelate e protette",
      "la lingua delle minoranze era tutelata",
      "nessun individuo era discriminato",
      "ogni gruppo nazionale aveva pari diritti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 170,
    "materia": "Comprensione verbale",
    "domanda": "Il vero criterio di demarcazione",
    "rispostaCorretta": "è la falsificabilità",
    "risposteErrate": [
      "è la verificabilità empirica",
      "ha una base esclusivamente universale",
      "deriva da constatazioni particolari",
      "deriva da esperimenti ripetuti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 171,
    "materia": "Comprensione verbale",
    "domanda": "Il criterio di demarcazione serve per distinguere",
    "rispostaCorretta": "le teorie scientifiche da quelle non scientifiche",
    "risposteErrate": [
      "la scienza e la metafisica",
      "il particolare dall’universale",
      "verità e falsità",
      "gli empiristi dai razionalisti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 172,
    "materia": "Comprensione verbale",
    "domanda": "L’errore dell’induzione sta",
    "rispostaCorretta": "nella pretesa di passare da asserti particolari a teorie universali",
    "risposteErrate": [
      "in una eccessiva fiducia nella logica",
      "nel trascurare la verificazione",
      "nell’accettare verità astratte",
      "nella negazione dell’esperienza"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 173,
    "materia": "Comprensione verbale",
    "domanda": "Da asserzioni particolari",
    "rispostaCorretta": "si può per inferenza deduttiva stabilire la falsità di asserti universali",
    "risposteErrate": [
      "non si possono conoscere nuovi fenomeni",
      "si può per inferenza induttiva convalidare una teoria",
      "si può costruire una nuova teoria",
      "non si possono ottenere informazioni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 174,
    "materia": "Comprensione verbale",
    "domanda": "L’affermazione “domani pioverà o non pioverà” è infalsificabile perché",
    "rispostaCorretta": "è vera in ogni caso",
    "risposteErrate": [
      "non ha basi attendibili",
      "è sicuramente falsa",
      "la meteorologia non è una scienza esatta",
      "la scienza non prevede fatti singoli"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 175,
    "materia": "Comprensione verbale",
    "domanda": "Gli strati profondi della crosta marziana",
    "rispostaCorretta": "rivelano maggiori tracce del passato",
    "risposteErrate": [
      "sono i più facili da osservare",
      "sono più recenti",
      "sono costituiti solo da rocce compatte",
      "non hanno subito alterazioni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 176,
    "materia": "Comprensione verbale",
    "domanda": "La forte presenza di zolfo su Marte",
    "rispostaCorretta": "ha provocato piogge acide",
    "risposteErrate": [
      "è causata dalla sua scarsa interazione con altri elementi",
      "abbassa l’acidità dell’acqua",
      "ha favorito la formazione di argille",
      "non dipende dall’attività vulcanica"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 177,
    "materia": "Comprensione verbale",
    "domanda": "L’età relativa di diverse parti della crosta marziana",
    "rispostaCorretta": "è difficile da stabilire",
    "risposteErrate": [
      "è indipendente dall’età assoluta",
      "era già nota ai tempi di Schiapparelli",
      "è impossibile con datazione radioisotopica",
      "è facile da determinare mediante confronto con la Terra"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 178,
    "materia": "Comprensione verbale",
    "domanda": "La presenza dei carbonati",
    "rispostaCorretta": "non è osservabile dalla superficie",
    "risposteErrate": [
      "non è alterabile da piogge acide",
      "richiede condizioni di clima arido",
      "non è correlata con la presenza di acqua",
      "è molto diffusa"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 179,
    "materia": "Comprensione verbale",
    "domanda": "La somiglianza dell’ambiente marziano a quello terrestre",
    "rispostaCorretta": "durò circa un miliardo di anni",
    "risposteErrate": [
      "ha avuto scarsa durata",
      "non è mai esistita",
      "è stata costante",
      "ha riguardato solo la temperatura"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 180,
    "materia": "Comprensione verbale",
    "domanda": "Isotropia significa",
    "rispostaCorretta": "distribuzione omogenea di un fenomeno in ogni direzione dello spazio",
    "risposteErrate": [
      "costanza del moto angolare",
      "variazioni uniformi",
      "diminuzione scalare della velocità",
      "livelli crescenti di intensità di un fenomeno"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 181,
    "materia": "Comprensione verbale",
    "domanda": "Lo spostamento verso il rosso dello spettro di galassie lontane",
    "rispostaCorretta": "prova la realtà dell’espansione attuale",
    "risposteErrate": [
      "dimostra l’avvicinamento delle galassie",
      "è incompatibile con la presenza di materia oscura",
      "contrasta con la teoria della relatività generale",
      "è osservabile solo con telescopi spaziali"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 182,
    "materia": "Comprensione verbale",
    "domanda": "Una verifica sperimentale della teoria dell’inflazione è data",
    "rispostaCorretta": "dalle anisotropie della radiazione cosmica",
    "risposteErrate": [
      "dal calcolo della temperatura costante della radiazione cosmica",
      "dall’osservazione delle nebulose nane",
      "dalla frequenza dei raggi cosmici",
      "dall’emissione dei raggi γ dai buchi neri"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 183,
    "materia": "Comprensione verbale",
    "domanda": "Nello stato di falso vuoto",
    "rispostaCorretta": "una forte energia non è immediatamente dissipabile",
    "risposteErrate": [
      "la materia è molto rarefatta",
      "la materia è estremamente densa",
      "l’energia è uniforme",
      "l’energia è minima"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 184,
    "materia": "Comprensione verbale",
    "domanda": "Secondo la teoria della relatività generale, il falso vuoto",
    "rispostaCorretta": "genera una pressione negativa",
    "risposteErrate": [
      "produce la materia ordinaria",
      "riduce lo spazio",
      "eleva la temperatura del plasma",
      "altera la massa del protone"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 185,
    "materia": "Comprensione verbale",
    "domanda": "Posizione e impulso",
    "rispostaCorretta": "sono localizzabili contemporaneamente solo in forma approssimata",
    "risposteErrate": [
      "falsificano le disuguaglianze di Heisenberg",
      "sono totalmente indeterminati",
      "coincidono se hanno valori uguali",
      "si determinano contemporaneamente in modo assoluto"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 186,
    "materia": "Comprensione verbale",
    "domanda": "Oggetto della fisica quantistica",
    "rispostaCorretta": "è l’interazione fra microoggetto e mezzo di osservazione",
    "risposteErrate": [
      "sono reazioni di tipo molecolare",
      "è l’oggetto a livello macroscopico",
      "è l’oggetto assoluto",
      "è l’interazione fra fenomeni diversi"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 187,
    "materia": "Comprensione verbale",
    "domanda": "Il carattere probabilistico della descrizione dell’oggetto",
    "rispostaCorretta": "non indica incompletezza di conoscenze",
    "risposteErrate": [
      "dipende dalla limitatezza degli strumenti",
      "è tipica dei fenomeni macroscopici",
      "non deriva da proprietà dell’oggetto",
      "dimostra i limiti delle conoscenze"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 188,
    "materia": "Comprensione verbale",
    "domanda": "Il compito della teoria",
    "rispostaCorretta": "è inferenziale e predittivo",
    "risposteErrate": [
      "determina compatibilità di fenomeni complementari",
      "consiste nella categorizzazione dei fenomeni",
      "consiste nel trovare compatibilità con la teoria classica",
      "è puramente analitico"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 189,
    "materia": "Comprensione verbale",
    "domanda": "La relatività ai mezzi di osservazione",
    "rispostaCorretta": "ha consentito la spiegazione teorica di proprietà fondamentali della materia",
    "risposteErrate": [
      "rende inaffidabili i risultati delle teorie",
      "contrasta con la relatività ai sistemi di riferimento",
      "impedisce conclusioni certe",
      "è estranea alla fisica quantistica"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Logica e Comprensione Verbale vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 190,
    "materia": "Matematica",
    "domanda": "Luigi ha due figli di 15 e 11 anni. Fra 18 anni la sua età sarà uguale alla somma delle età che avranno i figli. Quanti anni ha oggi Luigi?",
    "rispostaCorretta": "44",
    "risposteErrate": [
      "30",
      "non si può dire.",
      "52",
      "26"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 191,
    "materia": "Matematica",
    "domanda": "Per quale dei seguenti valori di x vale cos(x) + sin(x) = 0?",
    "rispostaCorretta": "x = 3π 4",
    "risposteErrate": [
      "x = π 4",
      "x = 0",
      "x = π",
      "x = π 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 192,
    "materia": "Matematica",
    "domanda": "Per 0 ≤ x ≤ π l’equazione sin(x) = 2 − k ha almeno una soluzione se e solo se",
    "rispostaCorretta": "1 ≤ k ≤ 2",
    "risposteErrate": [
      "k ≥ 1",
      "k ≤ 2",
      "−1 ≤ k ≤ 1",
      "1 ≤ k ≤ 3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 193,
    "materia": "Matematica",
    "domanda": "Nell’insieme dei numeri reali la disequazione x^4 + 5 < 0 è verificata",
    "rispostaCorretta": "mai",
    "risposteErrate": [
      "sempre",
      "se x = −5",
      "se x > −5",
      "se x < − 4 √ 5"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 194,
    "materia": "Matematica",
    "domanda": "L’insieme delle soluzioni della disequazione x + 3 x + 1 ≥ 2 è costituito da tutti i numeri reali x tali che",
    "rispostaCorretta": "−1 < x ≤ 1",
    "risposteErrate": [
      "−1 < x ≤ 2",
      "x ≤ 1",
      "x ≥ 1",
      "x < −1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 195,
    "materia": "Matematica",
    "domanda": "Il resto della divisione del polinomio x^5 −3x^4 + 3 per x + 1 è",
    "rispostaCorretta": "−1",
    "risposteErrate": [
      "1",
      "3",
      "0",
      "x − 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 196,
    "materia": "Matematica",
    "domanda": "Sia T un triangolo rettangolo isoscele. Allora la somma dei coseni degli angoli interni di T è uguale a",
    "rispostaCorretta": "√ 2",
    "risposteErrate": [
      "2",
      "1",
      "√ 3",
      "1 + √ 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 197,
    "materia": "Matematica",
    "domanda": "Quale delle seguenti uguaglianze è verificata qualunque siano i numeri reali x e y?",
    "rispostaCorretta": "3^(x+y)3^(x−y) = (3^x)^2",
    "risposteErrate": [
      "3^(x+y)3^(x−y) = 3^(x^2−y^2)",
      "3^(x+y)3^(x−y) = 3^(x^2) − 3y^2",
      "3^(x+y)3^(x−y) = 3^(x^2)",
      "3^(x+y)3^(x−y) = 3^x(3^y^3^(−y))"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 198,
    "materia": "Matematica",
    "domanda": "Da un punto P esterno ad una circonferenza di centro O e raggio di 1 cm, si tracciano le tangenti a tale circonferenza che la incontrano nei punti A e B. L’area del poligono PAOB è di √ 3 cm^2 se la distanza di P da O è",
    "rispostaCorretta": "2 cm",
    "risposteErrate": [
      "3 cm",
      "4 cm",
      "√ 3 2 cm",
      "3 2 cm"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 199,
    "materia": "Matematica",
    "domanda": "L’equazione x + 1 x = k, con x reale non nullo, ammette una ed una sola soluzione se",
    "rispostaCorretta": "k = 2",
    "risposteErrate": [
      "k = 1",
      "k = 3",
      "k = −3",
      "k = −1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 200,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano l’equazione x^2 + y^2 + 4x = γ, con γ numero reale positivo, è:",
    "rispostaCorretta": "l’equazione di una circonferenza di centro (−2,0) e raggio √ γ + 4",
    "risposteErrate": [
      "l’equazione di una circonferenza di centro (0, − 4) e raggio √ γ + 2",
      "l’equazione di una circonferenza di centro l’origine e raggio √ γ",
      "l’equazione di una circonferenza di centro (−4,0) e raggio √ γ + 2",
      "l’equazione di una circonferenza di centro (0, − 2) e raggio √ γ + 4"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 201,
    "materia": "Matematica",
    "domanda": "Dato un numero reale positivo x e posto f(x) = log_(10) x, si ha f(10 · x^(−2)) =",
    "rispostaCorretta": "1 − 2 f(x)",
    "risposteErrate": [
      "1 f(x)",
      "2 − 2 f(x)",
      "1 2 f(x)",
      "−2 f(x)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 202,
    "materia": "Matematica",
    "domanda": "Dal semicerchio di diametro AB = 2 cm e centro 0 si toglie il semicerchio di diametro AO. La figura così ottenuta si fa ruotare attorno ad AB con un giro di 360°. Il volume del solido ottenuto è",
    "rispostaCorretta": "7 6 π cm^3",
    "risposteErrate": [
      "25 3 π cm^3",
      "5 6 π cm^3",
      "4π cm^3",
      "28 3 π cm^3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 203,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano quanti sono i punti P(x, y) per cui sono verificate tutte e tre le seguenti condizioni? (x + y)2 = 1, x^2 + y^2 = 1, x + y ≤ 0",
    "rispostaCorretta": "Due",
    "risposteErrate": [
      "Uno",
      "Infiniti",
      "Nessuno",
      "Quattro"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 204,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano l’asse del segmento di estremi A(0,0) , B(1, 1) ha equazione",
    "rispostaCorretta": "y = 1 − x",
    "risposteErrate": [
      "y = 1 2 − x",
      "y = 2 − x",
      "y = 1 − x 2",
      "y = 1 − x 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 205,
    "materia": "Matematica",
    "domanda": "Il numero (81/√64)^(1/4) è uguale a",
    "rispostaCorretta": "24/8^(5/4)",
    "risposteErrate": [
      "3/√2",
      "3/(2√2)",
      "24/64",
      "3/2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 206,
    "materia": "Matematica",
    "domanda": "La seguente espressione: [(3^20 + 3^20 + 3^20)^(1/3)] / [(3^3)^2] vale",
    "rispostaCorretta": "3",
    "risposteErrate": [
      "3^2",
      "1",
      "1/3",
      "1/9"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 207,
    "materia": "Matematica",
    "domanda": "Sia Q un quadrato di lato `, C1 il cerchio circoscritto a Q, C2 il cerchio inscritto in Q. Il rapporto tra l’area della superficie di C_1 e l’area della superficie di C_2 vale",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "√ 2",
      "varia al variare di `",
      "2 √ 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 208,
    "materia": "Matematica",
    "domanda": "Dato il triangolo equilatero ABC il cui lato misura 2 cm, siano D, E, F i punti medi rispettivamente dei lati AB, BC, AC. L’area del rombo DECF è",
    "rispostaCorretta": "√ 3 2 cm^2",
    "risposteErrate": [
      "2 cm^2",
      "√ 3 cm^2",
      "√ 2 cm^2",
      "1 √ 3 cm^2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 209,
    "materia": "Matematica",
    "domanda": "Il 30% degli studenti iscritti ad un corso universitario ha superato l’esame relativo al corso al primo appello. Se, dei restanti studenti iscritti, il 10% supera l’esame al secondo appello, gli studenti che devono ancora superare l’esame dopo i primi due appelli saranno:",
    "rispostaCorretta": "il 63% del numero totale di studenti iscritti al corso.",
    "risposteErrate": [
      "il 37% del numero totale di studenti iscritti al corso.",
      "il 70% del numero totale di studenti iscritti al corso.",
      "il 60% del numero totale di studenti iscritti al corso.",
      "il 40% del numero totale di studenti iscritti al corso."
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 210,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano, il luogo dei punti di coordinate (x, y) che verificano l’equazione (y −2x^2)(y^2 −4) = 0 è:",
    "rispostaCorretta": "L’unione di una parabola e di due rette",
    "risposteErrate": [
      "L’insieme costituito dai punti di coordinate (1, −2), (1, 2)",
      "L’insieme costituito dai punti di coordinate (1, 2), (−1, 2)",
      "L’intersezione di un’iperbole e di due rette",
      "L’intersezione di una parabola e di due rette"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 211,
    "materia": "Matematica",
    "domanda": "I numeri interi strettamente positivi a, b, c, d sono tutti differenti tra loro e sono tutti minori di 6. Sapendo che la loro somma vale 12 determinare il loro prodotto.",
    "rispostaCorretta": "40",
    "risposteErrate": [
      "60",
      "24",
      "50",
      "30"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 212,
    "materia": "Matematica",
    "domanda": "Quanti sono i numeri reali x che sono soluzioni dell’equazione tan(2x −5π) = −10^4",
    "rispostaCorretta": "infiniti",
    "risposteErrate": [
      "uno",
      "cinque",
      "nessuno",
      "due"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 213,
    "materia": "Matematica",
    "domanda": "Un triangolo rettangolo, ruotando attorno ai propri cateti, genera due coni. Il rapporto fra i volumi dei due coni è pari al rapporto fra",
    "rispostaCorretta": "i cateti",
    "risposteErrate": [
      "il cateto maggiore e l’ipotenusa",
      "i quadrati dei cateti",
      "il cateto minore e l’ipotenusa",
      "i cubi dei cateti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 214,
    "materia": "Matematica",
    "domanda": "Per quale dei seguenti valori di x si ha sin(x/3) = sin(x)/3",
    "rispostaCorretta": "x = 3π",
    "risposteErrate": [
      "x = π/3",
      "x = 2π",
      "x = π/6",
      "x = π/2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 215,
    "materia": "Matematica",
    "domanda": "Si considerino tutti i numeri reali a della forma a = 3n + 3 + (−1)n n + 1 dove n è un qualunque intero positivo. Quanti dei numeri a sono maggiori di 2,99?",
    "rispostaCorretta": "infiniti, ma non tutti",
    "risposteErrate": [
      "nessuno",
      "uno",
      "due",
      "tutti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 216,
    "materia": "Matematica",
    "domanda": "Siano dati nel piano due triangoli equilateri che si possono ruotare e traslare liberamente uno rispetto all’altro. Data una qualsiasi posizione dei due triangoli, la loro porzione di superficie sovrapposta non potrà mai essere",
    "rispostaCorretta": "un rettangolo",
    "risposteErrate": [
      "un trapezio",
      "un esagono",
      "un triangolo equilatero",
      "un triangolo rettangolo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 217,
    "materia": "Matematica",
    "domanda": "Sia x un numero razionale che soddisfa questa proprietà: x ≤ y per ogni y razionale tale che y > √ 2 Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "x < √ 2",
    "risposteErrate": [
      "x è il più grande numero razionale minore di √ 2",
      "x è il più piccolo numero razionale maggiore di √ 2",
      "x = y",
      "x = √ 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 218,
    "materia": "Matematica",
    "domanda": "Date le due circonferenze rispettivamente di centro (0, 0) e raggio 1 e di centro (2, 2) e raggio 1, si indichi con d(P_1, P_2) la distanza tra un generico punto P_1 che sta sulla prima circonferenza ed un generico punto P_2 che sta sulla seconda circonferenza. Si consideri poi il minimo m di d(P_1, P_2) al variare di P_1 e di P_2. Si ha che",
    "rispostaCorretta": "m = 2( √ 2 − 1)",
    "risposteErrate": [
      "m = √ 2",
      "m = √ 2 2",
      "m = √ 2 − 1",
      "tale minimo non esiste"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 219,
    "materia": "Matematica",
    "domanda": "Un’azienda vinicola produce il rinomato pirlot, un miscuglio di bianco pinot e di rosso merlot in parti uguali. Da una bottiglia il produttore ne preleva 1/3 e lo rimpiazza con una parte identica di solo pinot, poi preleva 1/4 del nuovo miscuglio e lo rimpiazza ancora con una parte identica di solo pinot. Quale frazione del miscuglio finale è composta di pinot?",
    "rispostaCorretta": "3/4",
    "risposteErrate": [
      "5/7",
      "7/12",
      "5/12",
      "2/3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 220,
    "materia": "Matematica",
    "domanda": "Rispetto ad un sistema cartesiano Oxy la distanza del punto di coordinate (−4, 2) dalla retta di equazione x = 2 è:",
    "rispostaCorretta": "6",
    "risposteErrate": [
      "−2",
      "2",
      "−6",
      "4"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 221,
    "materia": "Matematica",
    "domanda": "La scomposizione in fattori primi del numero 30^(13) è:",
    "rispostaCorretta": "2^(13)3^(13)5^(13)",
    "risposteErrate": [
      "2^(15)3^(12)7^(13)",
      "30^(13)",
      "6^(13)5^(13)",
      "impossibile"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 222,
    "materia": "Matematica",
    "domanda": "Sia a un numero reale maggiore di 1. L’espressione numerica log_a √[(a^2·√a)/(a^(5/2))] è uguale a:",
    "rispostaCorretta": "0",
    "risposteErrate": [
      "−1",
      "a",
      "e",
      "+1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 223,
    "materia": "Matematica",
    "domanda": "Una squadra di operai deve asfaltare una piazza circolare. Arrivata sul posto scopre che la piazza ha diametro doppio del previsto. Quanto asfalto serve rispetto a quello preventivato?",
    "rispostaCorretta": "Il quadruplo",
    "risposteErrate": [
      "Non si può rispondere se non si conosce il raggio previsto o quello effettivo.",
      "Una quantità π^2 volte quella prevista",
      "Il doppio",
      "Una quantità 2π volte quella prevista"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 224,
    "materia": "Matematica",
    "domanda": "Un motociclista accorto, in un suo viaggio di 600 km, fa uso anche della ruota di scorta in maniera che alla fine del viaggio le tre ruote subiscano la stessa usura. Quanti chilometri avrà percorso ogni ruota alla fine del viaggio?",
    "rispostaCorretta": "400 km",
    "risposteErrate": [
      "350 km",
      "450 km",
      "500 km",
      "200 km"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 225,
    "materia": "Matematica",
    "domanda": "Sia A l’ insieme dei numeri interi positivi dispari o primi. Allora è vero che:",
    "rispostaCorretta": "2 ∈ A",
    "risposteErrate": [
      "12 ∈ A",
      "98 ∈ A",
      "13 ∉ A",
      "3 ∉ A"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 226,
    "materia": "Matematica",
    "domanda": "Rispetto ad un piano cartesiano Oxy i punti del piano diversi dal punto (−1,2) sono tutti e soli i punti (x,y) tali che:",
    "rispostaCorretta": "x ≠ −1 oppure y ≠ 2",
    "risposteErrate": [
      "y ≠ 2",
      "xy ≠ −2",
      "x ≠ −1",
      "x ≠ −1 e y ≠ 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 227,
    "materia": "Matematica",
    "domanda": "Rispetto ad un piano cartesiano Oxy l’equazione dell’asse del segmento di estremi (0,0) e (2,2) è:",
    "rispostaCorretta": "x + y = 2",
    "risposteErrate": [
      "x − y = 2",
      "x = 1",
      "y = x",
      "y = 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 228,
    "materia": "Matematica",
    "domanda": "Se a e b sono numeri reali tali che a^2 + b^2 = 0 allora si può concludere che certamente è:",
    "rispostaCorretta": "a + b = 0",
    "risposteErrate": [
      "a > b",
      "ab < −1",
      "a + b = 1",
      "ab > 0"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 229,
    "materia": "Matematica",
    "domanda": "La disequazione cos x + sin x ≥ √ 2 è verificata nell’ intervallo 0 ≤ x ≤ 2π per:",
    "rispostaCorretta": "x = π 4",
    "risposteErrate": [
      "ogni x",
      "x = −π 4",
      "almeno un x tale che π 2 < x < π",
      "nessun x"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 230,
    "materia": "Matematica",
    "domanda": "Rispetto ad un sistema di riferimento cartesiano ortogonale Oxy, è data la circonferenza di equazione √3 x^2 + √3 y^2 − 2x − 2y = 0. Allora il suo raggio è:",
    "rispostaCorretta": "√(2/3)",
    "risposteErrate": [
      "3",
      "√3",
      "1",
      "2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 231,
    "materia": "Matematica",
    "domanda": "In un parallelogramma di perimetro 2p si ha che :",
    "rispostaCorretta": "ogni diagonale ha lunghezza minore di p",
    "risposteErrate": [
      "almeno una diagonale ha lunghezza pari a p",
      "ogni diagonale ha lunghezza maggiore di p",
      "la somma delle lunghezze delle diagonali è minore di p",
      "una diagonale ha lunghezza maggiore di p, l’altra minore di p"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 232,
    "materia": "Matematica",
    "domanda": "Dato un esagono regolare di lato L, l’area del rettangolo che ha due lati coincidenti con due lati paralleli dell’esagono è uguale a:",
    "rispostaCorretta": "√ 3L^2",
    "risposteErrate": [
      "2 √ 2L",
      "quella del cerchio circoscritto all’ esagono",
      "2L^2",
      "quella del cerchio inscritto all’ esagono"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 233,
    "materia": "Matematica",
    "domanda": "L’equazione √(x^2 − x) = 0 è verificata",
    "rispostaCorretta": "solo per x ≥ 0",
    "risposteErrate": [
      "solo per x = −1",
      "solo per x = 0",
      "solo per x = 1",
      "∀x ∈ℝ"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 234,
    "materia": "Matematica",
    "domanda": "Un numero razionale compreso tra √ 5 e √ 8 è:",
    "rispostaCorretta": "2,52",
    "risposteErrate": [
      "1,98",
      "3,01",
      "( √ 5)( √ 8)/2",
      "( √ 5 + √ 8)/2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 235,
    "materia": "Matematica",
    "domanda": "L’espressione (sin(π/12) − cos(π/12))^2 è anche uguale a:",
    "rispostaCorretta": "1/2",
    "risposteErrate": [
      "1 − √3/2",
      "3/2",
      "1 − √2/2",
      "1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 236,
    "materia": "Matematica",
    "domanda": "Una sfera è inscritta in un cubo; il rapporto tra il volume della sfera e quello del cubo è:",
    "rispostaCorretta": "π 6",
    "risposteErrate": [
      "π 4",
      "2π 3",
      "4π 3",
      "π 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 237,
    "materia": "Matematica",
    "domanda": "Un triangolo equilatero è inscritto in una circonferenza; il rapporto tra la lunghezza della circonferenza e il perimetro del triangolo è:",
    "rispostaCorretta": "2 √ 3π 9",
    "risposteErrate": [
      "4π 3",
      "π 3",
      "√ 3π 2",
      "2π √ 3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 238,
    "materia": "Matematica",
    "domanda": "L’equazione in campo reale x^4 + 3x^2 −4 = 0 ha:",
    "rispostaCorretta": "una soluzione positiva e una negativa",
    "risposteErrate": [
      "due soluzioni positive e nessuna soluzione negativa",
      "nessuna soluzione",
      "due soluzioni negative e nessuna soluzione positiva",
      "due soluzioni positive e due soluzioni negative"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 239,
    "materia": "Matematica",
    "domanda": "L’equazione x^2 −3|x| + 2 = 0 ha:",
    "rispostaCorretta": "quattro soluzioni",
    "risposteErrate": [
      "tre soluzioni",
      "due soluzioni",
      "una sola soluzione",
      "nessuna soluzione"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 240,
    "materia": "Matematica",
    "domanda": "L’equazione cos^2 x −cos x −2 ≥0 è verificata per:",
    "rispostaCorretta": "x = π + 2kπ per ogni k intero",
    "risposteErrate": [
      "nessun valore reale di x",
      "x = 2kπ per ogni k intero",
      "qualunque valore reale di x",
      "x = 3kπ per ogni k intero"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 241,
    "materia": "Matematica",
    "domanda": "Un foglio di carta di forma quadrata viene piegato in due parti uguali in modo da formare due rettangoli sovrapposti. Sapendo che il perimetro del rettangolo è di 12 cm, qual è l’area del quadrato originario?",
    "rispostaCorretta": "16 cm^2",
    "risposteErrate": [
      "9 cm^2",
      "36 cm^2",
      "24 cm^2",
      "72 cm^2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 242,
    "materia": "Matematica",
    "domanda": "Fissato nel piano un sistema di assi cartesiani ortogonali Oxy, consideriamo i punti A = (1,0) e B = (0,2). Per quale scelta del punto C il triangolo ABC non è rettangolo?",
    "rispostaCorretta": "C = (−1,0)",
    "risposteErrate": [
      "C = (0, − 1/2)",
      "C = (1,2)",
      "C = (−4,0)",
      "C = (0,0)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 243,
    "materia": "Matematica",
    "domanda": "L’equazione |x − 1| = 1 − |x| ha",
    "rispostaCorretta": "infinite soluzioni",
    "risposteErrate": [
      "esattamente due soluzioni",
      "esattamente tre soluzioni",
      "esattamente quattro soluzioni",
      "nessuna soluzione"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 244,
    "materia": "Matematica",
    "domanda": "Per quali x reali è verificata la disequazione √ x^2 −1 > 2x ?",
    "rispostaCorretta": "x ≤ −1",
    "risposteErrate": [
      "x ≥ −1",
      "−1 < x < 1",
      "per nessun x reale",
      "x ≥ 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 245,
    "materia": "Matematica",
    "domanda": "Aldo, Bea, Carlo, Dario, Ebe, Franco vanno in treno e trovano uno scompartimento a sei posti libero. Considerando che Aldo e Bea devono stare vicino al finestrino, quanti modi diversi hanno i sei amici di disporsi nello scompartimento?",
    "rispostaCorretta": "48",
    "risposteErrate": [
      "4",
      "240",
      "8",
      "10"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 246,
    "materia": "Matematica",
    "domanda": "In un paese in cui ogni cittadino è tenuto a pagare in tasse il 25% del proprio reddito, un anno l’aliquota viene abbassata al 20%. Viene però contestualmente introdotta una tassa “una tantum” di 1000 € che ogni contribuente è tenuto a pagare. Si può dire che in quello stesso anno, in rapporto a questa operazione:",
    "rispostaCorretta": "i cittadini con un reddito superiore a 25 000 € sono stati avvantaggiati",
    "risposteErrate": [
      "i cittadini con un reddito superiore a 25 000 € hanno dovuto pagare un importo maggiorato di un quinto rispetto a quello che avrebbero dovuto pagare secondo le norme dell’anno precedente",
      "il peso fiscale è rimasto invariato per tutti",
      "solo i cittadini con un reddito superiore a 10 000 € sono stati avvantaggiati",
      "solo i cittadini con un reddito inferiore a 20 000 € sono stati avvantaggiati"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 247,
    "materia": "Matematica",
    "domanda": "Rispetto ad un riferimento cartesiano ortogonale Oxy del piano, l’equazione (x − 1)2 − y^2 = 0 individua:",
    "rispostaCorretta": "due rette incidenti",
    "risposteErrate": [
      "una parabola",
      "due soli punti",
      "una circonferenza",
      "due rette parallele"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 248,
    "materia": "Matematica",
    "domanda": "Una quantità di liquido che riempie una sfera di raggio K viene travasata in cilindri aventi diametro di base K ed altezza K. Qual è il numero minimo di cilindri che occorrono per compiere questa operazione?",
    "rispostaCorretta": "6",
    "risposteErrate": [
      "5",
      "3",
      "9",
      "4"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 249,
    "materia": "Matematica",
    "domanda": "In un gruppo di 100 persone 51 parlano inglese, 36 francese, delle quali 12 sia inglese che francese. Quante di loro non parlano né inglese né francese?",
    "rispostaCorretta": "25",
    "risposteErrate": [
      "49",
      "15",
      "29",
      "13"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 250,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale delle seguenti rette è parallela alla retta passante per i punti di coordinate (1, 0) e (0,1) ?",
    "rispostaCorretta": "x + y = 3",
    "risposteErrate": [
      "2x + 3y = 0",
      "x = y − 1",
      "x = 2",
      "y = 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 251,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale dei seguenti punti è interno al triangolo racchiuso tra le tre rette r_1 : y = 0, r_2 : y = 2x, r_3 : y = −x + 7 ?",
    "rispostaCorretta": "P = (3,3)",
    "risposteErrate": [
      "P = (3,5)",
      "P = (4,4)",
      "P = (1, − 3)",
      "P = (−3,2)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 252,
    "materia": "Matematica",
    "domanda": "A parità di tutte le altre condizioni (materiale, rugosità, stato di pulizia, ecc.) serve meno quantità di pittura per tinteggiare:",
    "rispostaCorretta": "una piramide avente tutte le facce che sono triangoli equilateri (tetraedro) di lato 1 metro",
    "risposteErrate": [
      "un cono (circolare retto) di altezza 1 metro e base di raggio 1 metro",
      "una sfera di raggio 1 metro",
      "un cubo di lato 1 m",
      "un cilindro (circolare retto) di raggio 1 metro e di altezza 1 metro"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 253,
    "materia": "Matematica",
    "domanda": "Si ha 3 √ x^3 + 8 < 0",
    "rispostaCorretta": "se e solo se x < −2",
    "risposteErrate": [
      "se e solo se x < −1",
      "per nessun valore reale di x",
      "se e solo se x < 0",
      "se e solo se x < 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 254,
    "materia": "Matematica",
    "domanda": "Avendo un triangolo equilatero A di lato a ed un triangolo equilatero B di lato 2a si ha che la superficie di B risulta:",
    "rispostaCorretta": "quadrupla di quella di A",
    "risposteErrate": [
      "maggiore di quella di A ma comunque minore di quella del doppio di A",
      "maggiore del quadruplo di quella di A",
      "doppia di quella di A",
      "non deducibile da quella di A"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 255,
    "materia": "Matematica",
    "domanda": "Un angolo misura 2 radianti, quindi",
    "rispostaCorretta": "il suo seno è positivo",
    "risposteErrate": [
      "il suo seno e il suo coseno hanno lo stesso segno",
      "l’angolo è acuto",
      "la sua tangente non esiste",
      "il suo coseno è positivo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 256,
    "materia": "Matematica",
    "domanda": "La somma degli angoli interni di un esagono non regolare",
    "rispostaCorretta": "è uguale a 4π radianti",
    "risposteErrate": [
      "è uguale a cinque angoli piatti",
      "non è calcolabile senza ulteriori dati",
      "è uguale a 360 gradi",
      "è uguale a 6 angoli retti"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 257,
    "materia": "Matematica",
    "domanda": "Dato un numero reale x, la seguente relazione 2x·2 √ 4x+1 vale:",
    "rispostaCorretta": "1",
    "risposteErrate": [
      "1 2^x",
      "0",
      "1 2",
      "2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 258,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, la circonferenza di centro C di coordinate (1,1) e tangente all’asse delle x ha equazione",
    "rispostaCorretta": "x^2 + y^2 −2x −2y + 1 = 0",
    "risposteErrate": [
      "x^2 + y^2 + 2x + 2y = 2",
      "x^2 + y^2 −2x + 2y = 0",
      "x^2 + y^2 −2x −2y = 0",
      "x^2 + y^2 −2x −2y = 1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 259,
    "materia": "Matematica",
    "domanda": "Dato un qualunque numero reale positivo x, allora log(x^3) −log(x^2) è uguale a",
    "rispostaCorretta": "log(x)",
    "risposteErrate": [
      "log(x^5)",
      "log(x^3) log(x^2)",
      "0",
      "log(x^3 −x^2)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 260,
    "materia": "Matematica",
    "domanda": "Il polinomio 12a^2 −18b^2 è divisibile per",
    "rispostaCorretta": "√ 2a − √ 3b",
    "risposteErrate": [
      "√ 6(a − b)",
      "12a + 18b",
      "12a − 18b",
      "a − b"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 261,
    "materia": "Matematica",
    "domanda": "Le soluzioni dell’equazione trigonometrica sin x = 1 sin x sono",
    "rispostaCorretta": "x = π 2 + kπ, per ogni valore intero di k",
    "risposteErrate": [
      "nessuna delle altre risposte",
      "x = kπ 2 , per ogni valore intero di k",
      "x = 3π 2 + 2kπ, per ogni valore intero di k",
      "x = π 2 + 2kπ, per ogni valore intero di k"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 262,
    "materia": "Matematica",
    "domanda": "Mettere in ordine crescente i tre numeri 7, √ 47, √ 3 + √ 27",
    "rispostaCorretta": "√ 47 < √ 3 + √ 27 < 7",
    "risposteErrate": [
      "√ 3 + √ 27 < √ 47 < 7",
      "7 < √ 47 < √ 3 + √ 27",
      "7 < √ 3 + √ 27 < √ 47",
      "√ 47 < 7 < √ 3 + √ 27"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 263,
    "materia": "Matematica",
    "domanda": "Sia γ una circonferenza e sia P un punto del piano interno a γ, diverso dal centro. Quante sono le circonferenze di centro P tangenti a γ?",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "0",
      "1",
      "3"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 264,
    "materia": "Matematica",
    "domanda": "Se f(x) = x^2 −x^3 allora f(x −2) vale",
    "rispostaCorretta": "(3 −x)(x −2)^2",
    "risposteErrate": [
      "x^2 −x^3 + 2",
      "nessuna delle altre risposte",
      "x^2 −x^3 −2",
      "x^2 −2 −x^3 + 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 265,
    "materia": "Matematica",
    "domanda": "L’espressione log_10(∛(x^2 + 1)) · log_10 1000 vale",
    "rispostaCorretta": "log_10(x^2 + 1)",
    "risposteErrate": [
      "log_10(1000(x^2 + 1)/3)",
      "log_10(∛(x^2 + 1)) + log_10 1000",
      "(1/3) log_10[1000(x^2 + 1)]",
      "log_10(1000∛(x^2 + 1))"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 266,
    "materia": "Matematica",
    "domanda": "Il Circolo Canottieri Santerno è formato da sei rematori tutti ugualmente bravi e affiatati fra loro. Deve mandare una rappresentanza di quattro atleti al campionato regionale. In quanti modi diversi può essere formata una tale rappresentanza?",
    "rispostaCorretta": "15",
    "risposteErrate": [
      "720",
      "5",
      "4",
      "6"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 267,
    "materia": "Matematica",
    "domanda": "Per 0 ≤ x ≤ π 2 , l’equazione √ 3 sin^2 x + √ 3 cos^2 x −2 sin x = 0 ha soluzione",
    "rispostaCorretta": "x = π 3",
    "risposteErrate": [
      "x = π 6",
      "x = π 4",
      "x = 0",
      "x = π 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 268,
    "materia": "Matematica",
    "domanda": "Date due sfere concentriche di raggio 1 e r (con r < 1) che valore deve assumere r affinché il volume della parte esterna alla sfera minore sia metà del volume della sfera maggiore?",
    "rispostaCorretta": "r = 1 3 √ 2",
    "risposteErrate": [
      "r = 1 √ 3",
      "r = 1 3 √ 3",
      "r = 1 2",
      "r = 1 √ 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 269,
    "materia": "Matematica",
    "domanda": "Quale delle seguenti affermazioni vale per ogni coppia di polinomi p(x) e q(x) di grado 3 a coefficienti reali, con p(x) ≠ q(x)?",
    "rispostaCorretta": "p(x) + q(x) ha grado ≤ 3 e p(x) · q(x) ha grado 6",
    "risposteErrate": [
      "p(x) + q(x) ha grado 6 e p(x) · q(x) ha grado ≤ 6",
      "p(x) + q(x) ha grado 3 e p(x) · q(x) ha grado 3",
      "p(x) + q(x) ha grado 6 e p(x) · q(x) ha grado ≤ 9",
      "p(x) + q(x) ha grado 3 e p(x) · q(x) ha grado ≤ 6"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 270,
    "materia": "Matematica",
    "domanda": "L’equazione x(x − a) = 1 ha due soluzioni distinte",
    "rispostaCorretta": "per tutti gli a reali",
    "risposteErrate": [
      "se e solo se a ≥ 0",
      "se e solo se −1 < a < 1",
      "per nessun valore reale di a",
      "se e solo se −2 < a < 2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 271,
    "materia": "Matematica",
    "domanda": "L’equazione sin x = −x",
    "rispostaCorretta": "ammette soltanto una soluzione",
    "risposteErrate": [
      "ammette infinite soluzioni",
      "se h > 0 è una soluzione, allora anche x = h + π lo è",
      "non ammette soluzioni",
      "ammette esattamente due soluzioni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 272,
    "materia": "Matematica",
    "domanda": "Nel salvadanaio di Geremia ci sono monete da 1 € e da 2 €, per un totale di 60 €. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "Se il salvadanaio contiene meno di 40 monete, allora la maggior parte di queste sono da 2 €",
    "risposteErrate": [
      "Se il salvadanaio contiene almeno 30 monete, allora la maggior parte di queste sono da 2 €",
      "Il numero di monete da 1 € non può essere uguale al numero di monete da 2 €",
      "Il numero di monete da 1 € è sicuramente minore del numero di monete da 2 €",
      "Il numero di monete da 1 € è sicuramente maggiore del numero di monete da 2 €"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 273,
    "materia": "Matematica",
    "domanda": "Il resto della divisione del polinomio 2x^3 −3x + 2 per x −2 è:",
    "rispostaCorretta": "12",
    "risposteErrate": [
      "8",
      "-1",
      "-8",
      "-12"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 274,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano consideriamo le rette r_k di equazione y = kx + 2k + 1 dove k è un parametro reale. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "Tutte le rette r_k passano per il punto (−2,1)",
    "risposteErrate": [
      "Le rette r_k sono a due a due incidenti, ma non esiste un punto comune a tutte",
      "Per k = 0 non si ottiene l’equazione di una retta",
      "Tutte le rette r_k passano per il punto (1, −2)",
      "Le rette r_k sono parallele fra di loro"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 275,
    "materia": "Matematica",
    "domanda": "L’insieme {(x,y) ∈ R2 : x , 0, y x > 2} è costituito da",
    "rispostaCorretta": "un semipiano",
    "risposteErrate": [
      "una delle parti di piano delimitate da una iperbole",
      "una corona circolare",
      "due angoli opposti al vertice",
      "due semipiani"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 276,
    "materia": "Matematica",
    "domanda": "Sia p un numero positivo dispari e q il numero dispari successivo. Si ha che",
    "rispostaCorretta": "q^2 −p^2 è divisibile per 8 e può non essere divisibile per 16",
    "risposteErrate": [
      "q^2 −p^2 è divisibile per 16 e può non essere divisibile per 32",
      "q^2 −p^2 può essere dispari",
      "q^2 −p^2 è divisibile per 2 e può non essere divisibile per 4",
      "q^2 −p^2 è divisibile per 4 e può non essere divisibile per 8"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 277,
    "materia": "Matematica",
    "domanda": "L’espressione log(x^4 + 2x^2 + sin^2 x + cos^2 x) coincide con",
    "rispostaCorretta": "2 log(1 + x^2)",
    "risposteErrate": [
      "4 log(1 + x)",
      "[log(1 + x^2)]^2",
      "log(x^4 + 2x^2) + log(sin^2 x + cos^2 x)",
      "2 log(1 + x + sin x + cos x)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 278,
    "materia": "Matematica",
    "domanda": "Un rettangolo è formato da due quadrati il cui lato misura 2 cm e da sette quadrati il cui lato misura 1 cm. Il perimetro del rettangolo misura:",
    "rispostaCorretta": "16 cm",
    "risposteErrate": [
      "22 cm",
      "18 cm",
      "24 cm",
      "20 cm"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 279,
    "materia": "Matematica",
    "domanda": "Dato n numero intero positivo, sia x_n la soluzione dell’equazione (x + 1)/1 + (x + 2)/2 + · · · + (x + n)/n = n Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "x_n = x_(n+1) per ogni n",
    "risposteErrate": [
      "x_n ≠ 0 per ogni n",
      "se n_1 < n_2 allora x_(n_1) < x_(n_2)",
      "se n_1 < n_2 allora x_(n_1) > x_(n_2)",
      "x_n = x_n + 1 per ogni n"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 280,
    "materia": "Scienze",
    "domanda": "Il periodo di un pendolo di massa m legata a un filo inestensibile di lunghezza l:",
    "rispostaCorretta": "diminuisce accorciando il filo",
    "risposteErrate": [
      "non varia né con la massa, né con la lunghezza del filo",
      "diminuisce con la massa",
      "aumenta con la massa",
      "aumenta accorciando il filo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 281,
    "materia": "Scienze",
    "domanda": "Due bacinelle rigide di uguale volume sono completamente riempite rispettivamente di ceci (sfere, di diametro medio d_c = 8 mm) e piselli (sfere, di diametro medio d_p = 6 mm). Qual è approssimativamente il rapporto N_c/N_p fra il numero di ceci N_c e del numero dei piselli N_p in esse contenuti?",
    "rispostaCorretta": "circa 0,42",
    "risposteErrate": [
      "circa 1,8",
      "circa 2,4",
      "circa 0,56",
      "circa 0,75"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 282,
    "materia": "Scienze",
    "domanda": "Nella pratica sportiva del bungee jumping un uomo, legato alle caviglie con una corda elastica, si lancia da un ponte. Nel momento di massima distensione della corda (minima distanza dal fondo), dopo il quale l’uomo comincia a risalire:",
    "rispostaCorretta": "l’energia cinetica dell’uomo si annulla",
    "risposteErrate": [
      "la forza totale sull’uomo si annulla",
      "l’energia cinetica dell’uomo è massima",
      "l’accelerazione dell’uomo si annulla",
      "il peso dell’uomo si annulla"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 283,
    "materia": "Scienze",
    "domanda": "Due corpi A e B, di volume uguale e masse m_B = 3m_A, sono completamente immersi in un liquido. Quando i due corpi, tenuti inizialmente fermi, vengono lasciati andare, la forza idrostatica (spinta di Archimede) che il liquido esercita su B è:",
    "rispostaCorretta": "uguale a quella su A",
    "risposteErrate": [
      "nove volte quella su A",
      "tre volte quella su A",
      "un nono di quella su A",
      "un terzo di quella su A"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 284,
    "materia": "Scienze",
    "domanda": "Un’automobile, inizialmente ferma, parte con un’accelerazione costante di 2 m/s^2. Nel medesimo istante, viene sorpassata da una bicicletta che viaggia alla velocità costante di 8 m/s. A quale distanza dal punto di partenza l’auto raggiungerà la bicicletta?",
    "rispostaCorretta": "64 m",
    "risposteErrate": [
      "32 m",
      "6 m",
      "128 m",
      "16 m"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 285,
    "materia": "Scienze",
    "domanda": "Un corpo di peso P, situato in prossimità della superficie terrestre, cade partendo da fermo. Se g è l’accelerazione di gravità e si trascura la resistenza dell’aria, l’energia cinetica acquistata dal corpo dopo un tempo t è pari a:",
    "rispostaCorretta": "(1/2)Pgt^2",
    "risposteErrate": [
      "(1/2)Pgt",
      "2Pgt",
      "2Pgt^2",
      "(1/2)Pg^2t^2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 286,
    "materia": "Scienze",
    "domanda": "Il rapporto tra peso specifico e densità di un corpo sulla Terra è:",
    "rispostaCorretta": "uguale per tutti i corpi",
    "risposteErrate": [
      "inversamente proporzionale al volume",
      "direttamente proporzionale alla massa",
      "un numero puro",
      "diverso per ogni corpo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 287,
    "materia": "Scienze",
    "domanda": "Un tubo di sezione S costante piegato ad U è aperto su un ramo e chiuso da un tappo T sull’altro (vedi figura). Se il tubo contiene acqua (densità ρ) e le altezze dell’acqua nei due rami sono H ed h, la forza che l’acqua esercita sul tappo vale: H livello1 livello 2 h T S",
    "rispostaCorretta": "ρg(H − h)S , diretta verso l’alto",
    "risposteErrate": [
      "ρg(H − h), diretta verso il basso",
      "ρgh, diretta verso l’alto",
      "ρgHS , diretta verso l’alto",
      "ρg(H + h), diretta verso il basso"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 288,
    "materia": "Scienze",
    "domanda": "Una macchina termica ha un rendimento del 75%. Quanto calore viene assorbito in un ciclo di funzionamento, se al termine di esso il lavoro fatto dalla macchina è pari a 3,6 kJ ?",
    "rispostaCorretta": "4,8 kJ",
    "risposteErrate": [
      "2,7 kJ",
      "14,4 kJ",
      "0,9 kJ",
      "3,6 kJ"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 289,
    "materia": "Scienze",
    "domanda": "Secondo quale ordine sono disposti gli elementi chimici nella tavola periodica?",
    "rispostaCorretta": "per numero di protoni",
    "risposteErrate": [
      "alfabetico",
      "per abbondanza nell’universo",
      "per dimensione",
      "per anno di scoperta"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 290,
    "materia": "Scienze",
    "domanda": "L’accelerazione di gravità sulla Terra è circa sei volte quella sulla Luna. Ciò significa che:",
    "rispostaCorretta": "il peso di un uomo sulla Luna è 1/6 di quello sulla Terra",
    "risposteErrate": [
      "la massa di un uomo sulla Luna è i 5/6 di quella sulla Terra",
      "la massa di un uomo sulla Luna è 1/6 di quella sulla Terra",
      "sia la massa sia il peso di un uomo sulla Luna sono 1/6 di quelli sulla Terra",
      "il peso di un uomo sulla Luna è i 5/6 di quello sulla Terra"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 291,
    "materia": "Scienze",
    "domanda": "Il suono è:",
    "rispostaCorretta": "un’onda che si propaga in un mezzo elastico con una velocità che dipende dal mezzo",
    "risposteErrate": [
      "un’onda elastica che si propaga nel vuoto alla velocità di 340 m/s",
      "un’onda che si propaga in un mezzo elastico alla velocità di 300 000 km/s",
      "un’onda elastica che si propaga nel vuoto alla velocità di 300 000 km/s",
      "un’onda che si propaga nel vuoto ed in tutti i mezzi materiali alla velocità di 340 m/s"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 292,
    "materia": "Scienze",
    "domanda": "Mescolate 60 litri d’acqua a 20 °C con 20 litri d’acqua a 60 °C. Trascurando le dissipazioni di calore, la temperatura finale che si raggiunge è:",
    "rispostaCorretta": "30 °C",
    "risposteErrate": [
      "25 °C",
      "28 °C",
      "40 °C",
      "35 °C"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 293,
    "materia": "Scienze",
    "domanda": "La tariffa dell’energia elettrica per uso domestico è di 0,20 €/kWh. Ricordando che il calore specifico dell’acqua è di 4186 Jkg^(−1)K^(−1) e trascurando le perdite, quanto costa scaldare 50 litri di acqua da 20 °C a 60 °C usando uno scaldabagno elettrico?",
    "rispostaCorretta": "circa 0,46 €",
    "risposteErrate": [
      "circa 0,92 €",
      "circa 0,13 €",
      "circa 1,92 €",
      "circa 1,66 €"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 294,
    "materia": "Scienze",
    "domanda": "Due condensatori sono collegati in serie e hanno capacità di 1 µF e 3 µF. Applicando una differenza di potenziale di 100 V:",
    "rispostaCorretta": "i valori della differenza di potenziale ai capi dei condensatori sono diversi",
    "risposteErrate": [
      "la capacità equivalente è di 4 µF",
      "la capacità equivalente è di 2 µF",
      "i valori della carica elettrica sulle armature dei condensatori sono diversi",
      "la differenza di potenziale ai capi di ciascun condensatore è di 100 V"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 295,
    "materia": "Scienze",
    "domanda": "Due sferette metalliche A e B sono sospese mediante fili isolanti. Una bacchetta di vetro viene caricata positivamente, quindi avvicinata prima ad A e successivamente a B, senza toccarle. Si osserva che la sferetta A viene attratta dalla bacchetta, mentre B viene respinta dalla stessa. Possiamo concludere che:",
    "rispostaCorretta": "B è carica positivamente, mentre A può essere sia carica negativamente sia avere carica nulla",
    "risposteErrate": [
      "sia A sia B possono avere carica nulla",
      "sia A sia B sono cariche negativamente",
      "A è carica negativamente, mentre B può essere sia carica positivamente sia avere carica nulla",
      "A è carica negativamente e B positivamente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 296,
    "materia": "Scienze",
    "domanda": "In un appartamento sono in funzione alcune utenze: un ferro da stiro che ha una resistenza di circa 40 Ω, ed una serie di lampadine da 100 W. Sapendo che la potenza massima utilizzabile è di 1,65 kW a 220 V, qual è il numero massimo di lampadine che possono essere accese quando il ferro è in funzione?",
    "rispostaCorretta": "4 lampadine",
    "risposteErrate": [
      "9 lampadine",
      "nessuna lampadina",
      "16 lampadine",
      "6 lampadine"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 297,
    "materia": "Scienze",
    "domanda": "Quale dei seguenti fenomeni non coinvolge reazioni chimiche?",
    "rispostaCorretta": "formazione di brina mattutina sui campi",
    "risposteErrate": [
      "formazione di fuliggine durante una combustione",
      "formazione di ruggine su un vecchio chiodo",
      "formazione di muffa su un pezzo di formaggio",
      "formazione di depositi di calcare in una conduttura"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 298,
    "materia": "Scienze",
    "domanda": "Indicando con “·” il prodotto scalare e con “×” il prodotto vettore, quale delle seguenti operazioni genera la proiezione del vettore ~ a sul vettore ~ b ?",
    "rispostaCorretta": "~ a · ~ b |~ b|",
    "risposteErrate": [
      "~ a × ~ b |~ b|",
      "~ a × ~ b",
      "~ a · ~ b",
      "~ a + ~ b"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 299,
    "materia": "Scienze",
    "domanda": "Un treno viaggia alla velocità di 144 km/h. Supponendo che le ruote aderiscano perfet- tamente ai binari (non c’è slittamento) e che abbiano un diametro d = 80 cm, il numero di giri che fanno in un secondo è circa pari a:",
    "rispostaCorretta": "16",
    "risposteErrate": [
      "8",
      "57",
      "32",
      "115"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 300,
    "materia": "Scienze",
    "domanda": "Una particella si muove di moto circolare uniforme sotto l’azione di una forza centripeta. Volendo raddoppiare il raggio della traiettoria senza modificare il modulo della velocità occorre moltiplicare la forza per un fattore",
    "rispostaCorretta": "1/2",
    "risposteErrate": [
      "1",
      "3",
      "1/3",
      "2"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 301,
    "materia": "Scienze",
    "domanda": "Gli atomi che costituiscono un solido:",
    "rispostaCorretta": "vibrano attorno alla loro posizione d’equilibrio",
    "risposteErrate": [
      "scorrono l’uno sull’altro",
      "ruotano con orbite fisse",
      "sono assolutamente immobili",
      "si muovono di moto rettilineo uniforme"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 302,
    "materia": "Scienze",
    "domanda": "Due buste di plastica di massa trascurabile contengono ciascuna 15 mele e sono poste su di un tavolo ad una certa distanza. Se 10 mele vengono trasferite da una busta all’altra, la forza di attrazione gravitazionale tra le due buste:",
    "rispostaCorretta": "si riduce ai 5/9 di quella prima del trasferimento",
    "risposteErrate": [
      "aumenta, divenendo i 5/3 di quella prima del trasferimento",
      "rimane invariata",
      "aumenta, divenendo i 3/2 di quella prima del trasferimento",
      "si riduce ai 2/5 di quella prima del trasferimento"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 303,
    "materia": "Scienze",
    "domanda": "L’impulso di una forza costante può essere calcolato come:",
    "rispostaCorretta": "Il prodotto tra la forza e l’intervallo di tempo durante il quale essa agisce",
    "risposteErrate": [
      "Il prodotto tra la forza e lo spazio percorso",
      "Il rapporto tra la forza e lo spazio percorso",
      "Il prodotto della forza per la velocità",
      "Il rapporto tra la forza e l’intervallo di tempo durante il quale essa agisce"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 304,
    "materia": "Scienze",
    "domanda": "La quantità di moto di un pendolo oscillante:",
    "rispostaCorretta": "è massima in modulo nel punto più basso della traiettoria",
    "risposteErrate": [
      "è sempre diretta verso il punto di sospensione",
      "è sempre costante",
      "si conserva nel tempo",
      "costante in modulo, ma non in direzione"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 305,
    "materia": "Scienze",
    "domanda": "La legge oraria di un moto rettilineo illustrata nel piano cartesiano Ots da un ramo di parabola con concavità verso l’alto indica:",
    "rispostaCorretta": "un moto ad accelerazione costante",
    "risposteErrate": [
      "un moto ad accelerazione uniformemente crescente",
      "un moto con velocità costante",
      "un moto con velocità positiva",
      "un moto con spostamento positivo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 306,
    "materia": "Scienze",
    "domanda": "Una soluzione è definita come un sistema costituito:",
    "rispostaCorretta": "da una sola fase indipendentemente dal numero delle specie chimiche che la costituiscono",
    "risposteErrate": [
      "da un numero di fasi dipendente dalla temperatura e dalla pressione",
      "da un numero di fasi dipendente dalla pressione",
      "da tante fasi quante sono le specie chimiche che la costituiscono",
      "da un numero di fasi variabile con la temperatura"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 307,
    "materia": "Scienze",
    "domanda": "Una macchina termica, che lavora compiendo un ciclo tra due sorgenti, trasferisce alla sorgente più fredda un’energia pari a 3 volte il lavoro compiuto. Qual è l’efficienza della macchina?",
    "rispostaCorretta": "0.25",
    "risposteErrate": [
      "0.9",
      "1.33",
      "0.33",
      "0.67"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 308,
    "materia": "Scienze",
    "domanda": "Un contenitore rigido contiene aria alla pressione atmosferica e alla temperatura di 27 °C. Viene scaldato finché la pressione dell’aria raddoppia. Quale temperatura ha raggiunto?",
    "rispostaCorretta": "327 °C",
    "risposteErrate": [
      "216 °C",
      "54 °C",
      "573 °C",
      "non si può rispondere perché non è noto il volume iniziale"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 309,
    "materia": "Scienze",
    "domanda": "La seguente reazione: As_2O_3 + HCl = AsCl_3 + H_2O, opportunamente bilanciata, si scrive:",
    "rispostaCorretta": "As_2O_3 + 6HCl = 2AsCl_3 + 3H_2O",
    "risposteErrate": [
      "As_2O_3 + 3HCl = AsCl_3 + 3H_2O",
      "As_2O_3 + HCl = 2AsCl_3 + H_2O",
      "As_2O_3 + 9HCl = 2AsCl_3 + 5H_2O",
      "As_2O_3 + HCl = AsCl_3 + H_2O"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 310,
    "materia": "Scienze",
    "domanda": "Quale delle seguenti affermazioni è vera? La conducibilità termica di un materiale",
    "rispostaCorretta": "si può misurare in Wm^(−1)K^(−1)",
    "risposteErrate": [
      "si può misurare in Wm^(−2)K^(−1)",
      "si può misurare in Nm^(−1)K^(−1)",
      "si può misurare in Js^(−1)m^(−2)K^(−1)",
      "si può misurare in Ws^(−1)m^(−2)K^(−1)"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 311,
    "materia": "Scienze",
    "domanda": "Un ingegnere afferma con orgoglio di avere costruito un motore termico che funziona fra le temperature di 200 °C e 50 °C con un rendimento di 0,35. Si può dire che:",
    "rispostaCorretta": "Un tale motore non può esistere perché il rendimento dichiarato è al di sopra del massimo consentito dal II principio della termodinamica",
    "risposteErrate": [
      "Il rendimento ottenuto è eccellente",
      "L’ingegnere non ha ragione di vantarsi perché con tali temperature disponibili il rendimento ottenuto è scarso",
      "Un tale motore non può esistere perché il rendimento dichiarato è al di sotto del minimo imposto dal II principio della termodinamica",
      "Si tratta del valore di rendimento fissato obbligatoriamente per un motore termico avendo a disposizione le due temperature indicate"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 312,
    "materia": "Scienze",
    "domanda": "Un circuito è costituito da una batteria da 36 V, un gruppo di due resistenze in parallelo da 6 Ω e da 3 Ω rispettivamente, una resistenza in serie di valore R sconosciuto. In queste condizioni la corrente circolante è 3 A. Assumendo che la resistenza interna della batteria sia trascurabile il valore della resistenza R è:",
    "rispostaCorretta": "10 Ω",
    "risposteErrate": [
      "2 Ω",
      "12 Ω",
      "18 Ω",
      "4 Ω"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 313,
    "materia": "Scienze",
    "domanda": "Un condensatore di capacità 100 µF è carico alla tensione di 2 kV; un induttore di induttanza 25 H è percorso da una corrente continua di 4 A. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "Le energie accumulate nell’induttore e nel condensatore sono uguali",
    "risposteErrate": [
      "L’energia accumulata nel condensatore è maggiore di quella accumulata nell’induttore",
      "Il confronto tra le energie accumulate nell’induttore e nel condensatore non è possibile se non si conosce la geometria.",
      "Le energie accumulate nell’induttore e nel condensatore non sono confrontabili perché sono di natura diversa.",
      "L’energia accumulata nell’induttore è maggiore di quella accumulata nel condensatore"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 314,
    "materia": "Scienze",
    "domanda": "Due conduttori, il primo di rame Cu (resistività ρ = 1,7 × 10^(−8) Ωm) ed il secondo di platino Pt (resistività ρ = 11,7 × 10^(−8) Ωm) hanno lunghezza uguale e sezione rispettivamente, 1 cm^2 ed 8 cm^2. Quali delle seguenti affermazioni è corretta?",
    "rispostaCorretta": "il conduttore in Pt ha resistenza minore perché il rapporto resistività/sezione è minore",
    "risposteErrate": [
      "la resistenza dei due conduttori è la stessa poiché hanno uguale lunghezza",
      "il conduttore in Cu ha minor resistenza perché ha minor sezione",
      "il conduttore in Pt ha resistenza minore perché la sua sezione è maggiore",
      "il conduttore in Cu ha minor resistenza perché ha minor resistività"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 315,
    "materia": "Scienze",
    "domanda": "Una quantità di carica Q viene depositata su un conduttore isolato costituito da una sfera piena dotata di una cavità sferica al suo interno. In condizioni statiche la carica si distribuirà:",
    "rispostaCorretta": "Uniformemente sulla superficie esterna della sfera",
    "risposteErrate": [
      "Sulle due superfici interna ed esterna, proporzionalmente alla loro superficie",
      "La carica non rimane sul conduttore ma viene immediatamente dispersa nell’atmosfera per effetto “corona”.",
      "Uniformemente sulla superficie interna della cavità",
      "Uniformemente nel volume del metallo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 316,
    "materia": "Scienze",
    "domanda": "Quale di questi fenomeni relativi alla propagazione ondulatoria non può essere messa in luce utilizzando onde sonore?",
    "rispostaCorretta": "Polarizzazione",
    "risposteErrate": [
      "Rifrazione",
      "Interferenza",
      "Riflessione",
      "Diffrazione"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 317,
    "materia": "Scienze",
    "domanda": "Indicare come cambiano la velocità v e la lunghezza d’onda λ della luce quando questa passa dall’aria al vetro.",
    "rispostaCorretta": "v diminuisce e λ diminuisce",
    "risposteErrate": [
      "v aumenta e λ aumenta",
      "v diminuisce e λ aumenta",
      "v aumenta e λ non cambia",
      "v aumenta e λ diminuisce"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 318,
    "materia": "Scienze",
    "domanda": "Le macchie di olio nelle pozzanghere danno luogo a striscie colorate. Questo fenomeno è dovuto:",
    "rispostaCorretta": "all’interferenza tra le interfacce dello strato sottile di olio con l’acqua e l’aria",
    "risposteErrate": [
      "alla combinazione di interferenza e diffrazione",
      "alla differenza in riflettività tra acqua ed olio",
      "al fatto che il cielo diffonde tutti i colori e l’olio ne riflette solo alcuni",
      "alla diffrazione della luce"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 319,
    "materia": "Scienze",
    "domanda": "Un oggetto è posto a 60 cm da una lente convergente. L’immagine prodotta dalla lente è rovesciata e ha una dimensione pari alla metà dell’oggetto. Qual è la lunghezza focale della lente?",
    "rispostaCorretta": "20 cm",
    "risposteErrate": [
      "60 cm",
      "45 cm",
      "30 cm",
      "90 cm"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 320,
    "materia": "Scienze",
    "domanda": "Dati due vettori − → A e − → B di modulo rispettivamente pari a 2 e 3, il vettore − → C, somma dei due, ha modulo:",
    "rispostaCorretta": "indeterminabile",
    "risposteErrate": [
      "√ 13",
      "5",
      "13",
      "6"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 321,
    "materia": "Scienze",
    "domanda": "Il costo unitario medio della benzina in Italia è di 1,2 € al litro. Negli USA, invece, la benzina è venduta in dollari ($) al gallone (gal). Sapendo che i fattori di conversione sono: 1,3 $ = 1 €; 1 gal=3,8 litri, quale sarebbe in USA il costo corrispondente a quello italiano?",
    "rispostaCorretta": "5,93 $/gal",
    "risposteErrate": [
      "0,28 $/gal",
      "4,12 $/gal",
      "0,41 $/gal",
      "3,51 $/gal"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 322,
    "materia": "Scienze",
    "domanda": "Viaggiando in treno, un passeggero percepisce gli urti di una ruota sui giunti delle rotaie. Se egli ne conta 240 ogni due minuti e le tratte di rotaia sono lunghe 15 metri, qual è la velocità del treno, supposta costante?",
    "rispostaCorretta": "30 m/s",
    "risposteErrate": [
      "60 m/s",
      "15 m/s",
      "45 m/s",
      "80 m/s"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 323,
    "materia": "Scienze",
    "domanda": "Quale di queste quantità fisiche non è una grandezza vettoriale?",
    "rispostaCorretta": "lavoro",
    "risposteErrate": [
      "campo elettrico",
      "quantità di moto",
      "accelerazione",
      "forza"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 324,
    "materia": "Scienze",
    "domanda": "Un corpo si muove di moto rettilineo uniformemente accelerato. Partendo da fermo, esso percorre 8 metri in 3 secondi. Che distanza percorrerà in 6 secondi?",
    "rispostaCorretta": "32 m",
    "risposteErrate": [
      "24 m",
      "12 m",
      "48 m",
      "16 m"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 325,
    "materia": "Scienze",
    "domanda": "In un film di fantascienza è rappresentata una scena in cui un astronauta, che si trova sulla superficie lunare, si accorge dell’arrivo di una astronave percependone il rumore dei motori. Questa scena è fisicamente inconsistente perché:",
    "rispostaCorretta": "la Luna è priva di atmosfera e il suono non si può propagare in assenza di un mezzo materiale",
    "risposteErrate": [
      "le leggi della Fisica non sono valide sulla Luna",
      "l’accelerazione di gravità sulla Luna è più piccola che sulla Terra",
      "la tuta dell’astronauta, come tutti gli indumenti, assorbe completamente i suoni",
      "la temperatura della Luna è così alta che il suono non si può propagare"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 326,
    "materia": "Scienze",
    "domanda": "Due sfere dello stesso raggio e di massa diversa sono totalmente immerse nell’acqua di una vasca e tenute ferme da due fili. Le spinte di Archimede che ricevono:",
    "rispostaCorretta": "sono uguali",
    "risposteErrate": [
      "sono proporzionali alle masse delle sfere",
      "sono inversamente proporzionali alle masse delle sfere",
      "dipendono dalla profondità a cui sono immerse",
      "dipendono dalle densità delle sfere"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 327,
    "materia": "Scienze",
    "domanda": "Detta λ la lunghezza d’onda, la distanza tra una cresta ed un ventre successivo di un’onda che propaga sulla superficie di un lago è:",
    "rispostaCorretta": "λ/2",
    "risposteErrate": [
      "4λ",
      "λ",
      "2λ",
      "λ/4"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 328,
    "materia": "Scienze",
    "domanda": "Quando un corpo cade verticalmente in assenza della resistenza dell’aria, l’energia meccanica si conserva. Ne consegue che:",
    "rispostaCorretta": "le variazioni di energia cinetica sono uguali e di segno opposto a quelle dell’energia potenziale",
    "risposteErrate": [
      "il rapporto fra l’energia cinetica e quella potenziale non varia durante il moto",
      "l’energia cinetica cresce proporzionalmente al tempo",
      "la velocità con cui cade è proporzionale agli spazi percorsi",
      "la sua energia cinetica non varia durante il moto"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 329,
    "materia": "Scienze",
    "domanda": "Il periodo delle piccole oscillazioni di un pendolo semplice è:",
    "rispostaCorretta": "direttamente proporzionale alla radice quadrata della lunghezza del filo",
    "risposteErrate": [
      "inversamente proporzionale alla lunghezza del filo",
      "direttamente proporzionale alla lunghezza del filo",
      "inversamente proporzionale alla radice quadrata della massa oscillante",
      "direttamente proporzionale alla radice quadrata della accelerazione di gravità"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 330,
    "materia": "Scienze",
    "domanda": "La resistenza di un filo metallico è in proporzione:",
    "rispostaCorretta": "diretta della resistività e della lunghezza del filo",
    "risposteErrate": [
      "diretta della sezione e della lunghezza del filo",
      "inversa della resistività e della sezione del filo",
      "diretta della resistività e della sezione del filo",
      "inversa della resistività e della lunghezza del filo"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 331,
    "materia": "Scienze",
    "domanda": "L’impianto elettrico a 220 V di un appartamento è dotato di un limitatore di sicurezza, che interrompe il passaggio di corrente quando questa superi il valore di 18 A. Se nell’appartamento sono contemporaneamente in funzione una stufa elettrica da 1 kW ed una lavatrice che assorbe 1,5 kW, quante lampadine da 100 W possono al massimo essere accese contemporaneamente prima che il limitatore intervenga?",
    "rispostaCorretta": "14",
    "risposteErrate": [
      "15",
      "12",
      "16",
      "13"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 332,
    "materia": "Scienze",
    "domanda": "Sapendo che un comune atomo di magnesio contiene 12 protoni, 12 elettroni e 12 neutroni, quale delle seguenti combinazioni corrisponde ad un suo possibile isotopo?",
    "rispostaCorretta": "12 protoni, 12 elettroni e 13 neutroni",
    "risposteErrate": [
      "13 protoni, 12 elettroni e 13 neutroni",
      "13 protoni, 12 elettroni e 12 neutroni",
      "12 protoni, 13 elettroni e 12 neutroni",
      "13 protoni, 13 elettroni e 12 neutroni"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 333,
    "materia": "Scienze",
    "domanda": "Una sorgente luminosa emette luce in modo isotropo (ossia uguale in tutte le direzioni). Se diciamo I l’intensità luminosa osservata ad una distanza d dalla sorgente, l’intensità a distanza 2d vale:",
    "rispostaCorretta": "I/4",
    "risposteErrate": [
      "2I",
      "I",
      "I/2",
      "I/16"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 334,
    "materia": "Scienze",
    "domanda": "Una lampadina da 10 W, alimentata ad una tensione di 4 V viene accesa per 10 s. Quanta carica passa per il filamento della lampadina?",
    "rispostaCorretta": "25 C",
    "risposteErrate": [
      "4 C",
      "100 C",
      "1 C",
      "10 C"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 335,
    "materia": "Scienze",
    "domanda": "Mezzo kilogrammo d’acqua si trova alla temperatura di 25 °C. Quale temperatu- ra raggiunge se le vengono forniti 5000 J di calore? (Calore specifico dell’acqua: 4186 J/kgK)",
    "rispostaCorretta": "circa 27,4 °C",
    "risposteErrate": [
      "circa 25,6 °C",
      "la temperatura rimane costante",
      "circa 23,8 °C",
      "circa 26,2 °C"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 336,
    "materia": "Scienze",
    "domanda": "Perché per rigirare gli spaghetti in una pentola d’acqua che bolle, senza scottarsi le dita, è meglio adoperare una forchetta di legno piuttosto che una metallica?",
    "rispostaCorretta": "perché la conducibilità termica dei metalli è molto più grande di quella del legno",
    "risposteErrate": [
      "perché il calore specifico dei metalli è maggiore di quello del legno",
      "perché la conducibilità elettrica dei metalli è maggiore di quella del legno",
      "perché il legno si elettrizza meno dei metalli",
      "perché il legno è più leggero dei metalli"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 337,
    "materia": "Scienze",
    "domanda": "Tre moli di H_2O vengono dissociate in una cella elettrolitica ed i gas di reazio- ne vengono raccolti in contenitori separati a pressione costante. Il rapporto tra il volume del contenitore che contiene idrogeno e di quello che contiene ossigeno è approssimativamente:",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "1/2",
      "1/3",
      "3",
      "1"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 338,
    "materia": "Scienze",
    "domanda": "La reazione CaO + H_2O = Ca(OH)_2 è una reazione esotermica. Questo significa che:",
    "rispostaCorretta": "la reazione sviluppa calore ed il Ca(OH)_2 si riscalda",
    "risposteErrate": [
      "la reazione sviluppa calore e di conseguenza il Ca(OH)_2 perde istantaneamente il contenuto d’acqua, che evapora, e ritorna ad essere CaO",
      "la reazione assorbe calore dall’ambiente e il Ca(OH)_2 si raffredda",
      "la reazione avviene senza alcuna variazione di temperatura",
      "la reazione assorbe calore dall’ambiente ed il Ca(OH)_2 solidifica perché l’acqua contenuta ghiaccia istantaneamente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 339,
    "materia": "Scienze",
    "domanda": "La stessa quantità di calore viene fornita a due corpi di uguale massa, inizialmente alla stessa temperatura, costituiti rispettivamente di vetro e di rame. Il calore specifico del vetro è maggiore di quello del rame. Da queste premesse si può dedurre che:",
    "rispostaCorretta": "Il corpo di rame avrà una temperatura finale maggiore di quella del corpo di vetro",
    "risposteErrate": [
      "Il corpo di rame si riscalderà prima del corpo di vetro, ma raggiungerà una temperatura finale minore",
      "Il corpo di vetro avrà una temperatura finale maggiore di quella del corpo di rame",
      "Il corpo di rame si riscalderà prima del corpo di vetro, ma raggiungerà la stessa temperatura finale",
      "Le temperature finali dei due corpi saranno in ogni caso uguali"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  }
];

export default questionBank;
