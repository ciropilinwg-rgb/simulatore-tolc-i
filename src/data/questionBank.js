// questionBank — Banca dati ufficiale integrata (317 quesiti)
// 252 quesiti storici TOLC-I canonici deduplicati + 65 quesiti da NEW Test1.pdf

const questionBank = [
  {
    "id": 1,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale delle seguenti rette è parallela alla retta passante per i punti di coordinate $(1,0)$ e $(0,1)$?",
    "rispostaCorretta": "$x + y = 3$",
    "risposteErrate": [
      "$x = y - 1$",
      "$x = 2$",
      "$y = 1$",
      "$2x + 3y = 0$"
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
    "domanda": "A parità di tutte le altre condizioni (materiale, rugosità, stato di pulizia, ecc.) serve meno quantità di pittura per tinteggiare:",
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
    "domanda": "Si ha: $\\sqrt[3]{x^3 + 8} < 0$",
    "rispostaCorretta": "se e solo se $x < -2$",
    "risposteErrate": [
      "se e solo se $x < 0$",
      "se e solo se $x < 1$",
      "per nessun valore reale di x",
      "se e solo se $x < -1$"
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
    "domanda": "Avendo un triangolo equilatero A di lato a e un triangolo equilatero B di lato 2a, si ha che la superficie di B risulta:",
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
      "il suo seno e il suo coseno hanno lo stesso segno",
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
    "rispostaCorretta": "è uguale a $4\\pi$ radianti",
    "risposteErrate": [
      "è uguale a cinque angoli piatti",
      "non è calcolabile senza ulteriori dati",
      "è uguale a $360$ gradi",
      "è uguale a $6$ angoli retti"
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
    "domanda": "Dato un numero reale $x$, la frazione $\\frac{2^x \\cdot 2}{\\sqrt{4^{x+1}}}$ vale:",
    "rispostaCorretta": "1",
    "risposteErrate": [
      "un mezzo",
      "$\\frac{1}{2^x}$",
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
    "domanda": "In un piano cartesiano, la circonferenza di centro $C$ e di coordinate $(1,1)$, tangente all’asse delle ascisse, ha equazione:",
    "rispostaCorretta": "$x^2 + y^2 - 2x - 2y + 1 = 0$",
    "risposteErrate": [
      "$x^2 + y^2 + 2x + 2y = 2$",
      "$x^2 + y^2 - 2x + 2y = 0$",
      "$x^2 + y^2 - 2x - 2y = 0$",
      "$x^2 + y^2 - 2x - 2y = 1$"
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
    "domanda": "Dato un qualunque numero reale positivo $x$, allora $\\log(x^3) - \\log(x^2)$ è uguale a:",
    "rispostaCorretta": "$\\log(x)$",
    "risposteErrate": [
      "$\\log(x^5)$",
      "$\\frac{\\log(x^3)}{\\log(x^2)}$",
      "$0$",
      "$\\log(x^3 - x^2)$"
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
    "domanda": "Il polinomio $12a^2 - 18b^2$ è divisibile per:",
    "rispostaCorretta": "$\\sqrt{2}a - \\sqrt{3}b$",
    "risposteErrate": [
      "$\\sqrt{6}(a - b)$",
      "$12a + 18b$",
      "$12a - 18b$",
      "$a - b$"
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
    "domanda": "Le soluzioni dell’equazione trigonometrica $\\sin(x) = \\frac{1}{\\sin(x)}$ sono:",
    "rispostaCorretta": "$x = \\frac{\\pi}{2} + k\\pi$, per ogni valore intero di $k$",
    "risposteErrate": [
      "$x = \\frac{\\pi}{2} + 2k\\pi$, per ogni valore intero di $k$",
      "$x = \\frac{3\\pi}{2} + 2k\\pi$, per ogni valore intero di $k$",
      "$x = \\frac{k\\pi}{2}$, per ogni valore intero di $k$",
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
    "domanda": "Mettere in ordine crescente i tre numeri $7$, $\\sqrt{47}$, $\\sqrt{3} + \\sqrt{27}$:",
    "rispostaCorretta": "$\\sqrt{47} < \\sqrt{3} + \\sqrt{27} < 7$",
    "risposteErrate": [
      "$\\sqrt{47} < 7 < \\sqrt{3} + \\sqrt{27}$",
      "$7 < \\sqrt{47} < \\sqrt{3} + \\sqrt{27}$",
      "$7 < \\sqrt{3} + \\sqrt{27} < \\sqrt{47}$",
      "$\\sqrt{3} + \\sqrt{27} < \\sqrt{47} < 7$"
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
    "domanda": "Sia $\\gamma$ una circonferenza e sia $P$ un punto del piano interno a $\\gamma$, diverso dal centro. Quante sono le circonferenze di centro $P$ tangenti a $\\gamma$?",
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
    "domanda": "Se $f(x)=x^2-x^3$, allora $f(x-2)$ vale:",
    "rispostaCorretta": "$(3-x)(x-2)^2$",
    "risposteErrate": [
      "$x^2 - x^3 + 2$",
      "nessuna delle altre risposte",
      "$x^2 - x^3 - 2$",
      "$x^2 - 2 - x^3 + 2$"
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
    "domanda": "L’espressione $\\log_{10}(\\sqrt[3]{x^2 + 1}) \\cdot \\log_{10}(1000)$ vale:",
    "rispostaCorretta": "$\\log_{10}(x^2 + 1)$",
    "risposteErrate": [
      "$\\log_{10}\\left(\\frac{1000(x^2 + 1)}{3}\\right)$",
      "$\\log_{10}(\\sqrt[3]{x^2 + 1}) + \\log_{10}(1000)$",
      "$\\frac{1}{3}\\log_{10}\\left[1000(x^2 + 1)\\right]$",
      "$\\log_{10}\\left(1000\\sqrt[3]{x^2 + 1}\\right)$"
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
    "domanda": "Il Circolo Canottieri Santerno è formato da sei rematori, tutti ugualmente bravi e affiatati fra loro. Deve mandare una rappresentanza di quattro atleti al campionato regionale. In quanti modi diversi può essere formata una tale rappresentanza?",
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
    "id": 19,
    "materia": "Matematica",
    "domanda": "Date due sfere concentriche di raggio $1$ e $r$ (con $r < 1$), che valore deve assumere $r$ affinché il volume della parte esterna alla sfera minore sia la metà del volume della sfera maggiore?",
    "rispostaCorretta": "$\\frac{1}{\\sqrt[3]{2}}$",
    "risposteErrate": [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{1}{\\sqrt[3]{3}}$"
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
    "domanda": "Quale delle seguenti affermazioni vale per ogni coppia di polinomi $p(x)$ e $q(x)$ di grado $3$ a coefficienti reali, con $p(x) \\ne q(x)$?",
    "rispostaCorretta": "$p(x) + q(x)$ ha grado al più 3 e $p(x) \\cdot q(x)$ ha grado 6",
    "risposteErrate": [
      "$p(x) + q(x)$ ha grado 6 e $p(x) \\cdot q(x)$ ha grado al più 6",
      "$p(x) + q(x)$ ha grado 3 e $p(x) \\cdot q(x)$ ha grado al più 6",
      "$p(x) + q(x)$ ha grado 6 e $p(x) \\cdot q(x)$ ha grado al più 9",
      "$p(x) + q(x)$ ha grado 3 e $p(x) \\cdot q(x)$ ha grado 3"
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
    "domanda": "Dei 120 parlamentari di Allegrandia si sa che un terzo è stato inquisito dalla magistratura e condannato definitivamente e i tre quarti sono al secondo (o comunque, non al primo) mandato parlamentare. Se ne può concludere che:",
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
    "id": 26,
    "materia": "Logica",
    "domanda": "Un chimico, studiando una soluzione che si era tinta di arancione, constatò che in essa era presente del sodio o del potassio (o entrambi); inoltre osservò che, se non c’era sodio, c’era ferro, e che, se c’era potassio, c’era anche iodio. Quale di queste situazioni si può verificare?",
    "rispostaCorretta": "La soluzione contiene solo sodio",
    "risposteErrate": [
      "La soluzione contiene solo potassio e ferro",
      "La soluzione contiene solo ferro e iodio",
      "La soluzione contiene sodio e potassio, e non contiene iodio",
      "La soluzione non contiene né sodio né iodio"
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
    "domanda": "Dati due vettori $\\vec{A}$ e $\\vec{B}$ di modulo rispettivamente pari a 2 e 3, il vettore $\\vec{C}$, somma dei due, ha modulo:",
    "rispostaCorretta": "indeterminabile",
    "risposteErrate": [
      "13",
      "5",
      "6",
      "$\\sqrt{13}$"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova TOLC-I (screen reader).pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 31,
    "excludedFromTolcPool": true,
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
    "domanda": "Una sorgente luminosa emette luce in modo isotropo (ossia uguale in tutte le direzioni). Se indichiamo con $I$ l’intensità luminosa osservata a una distanza $d$ dalla sorgente, l’intensità luminosa alla distanza $2d$ vale:",
    "rispostaCorretta": "$\\frac{I}{4}$",
    "risposteErrate": [
      "$\\frac{I}{2}$",
      "$\\frac{I}{16}$",
      "$2I$",
      "$I$"
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
    "domanda": "Tre moli di $\\mathrm{H_2O}$ vengono dissociate in una cella elettrolitica e i gas di reazione vengono raccolti in contenitori separati a pressione costante. Il rapporto tra il volume del contenitore che contiene idrogeno e quello che contiene ossigeno è approssimativamente:",
    "rispostaCorretta": "$2$",
    "risposteErrate": [
      "$3$",
      "$\\frac{1}{3}$",
      "$1$",
      "$\\frac{1}{2}$"
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
    "domanda": "La reazione $\\mathrm{CaO + H_2O \\to Ca(OH)_2}$ è esotermica. Questo significa che:",
    "rispostaCorretta": "la reazione sviluppa calore e il $\\mathrm{Ca(OH)_2}$ si riscalda",
    "risposteErrate": [
      "la reazione avviene senza alcuna variazione di temperatura",
      "la reazione assorbe calore dall’ambiente e il $\\mathrm{Ca(OH)_2}$ solidifica perché l’acqua contenuta ghiaccia istantaneamente",
      "la reazione sviluppa calore e di conseguenza il $\\mathrm{Ca(OH)_2}$ perde istantaneamente il contenuto d’acqua, che evapora, e ritorna a essere $\\mathrm{CaO}$",
      "la reazione assorbe calore dall’ambiente e il $\\mathrm{Ca(OH)_2}$ si raffredda"
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
    "domanda": "La stessa quantità di calore viene fornita a due corpi di uguale massa, inizialmente alla stessa temperatura, costituiti rispettivamente di vetro e di rame. Il calore specifico del vetro è maggiore di quello del rame. Da queste premesse si può dedurre che:",
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
    "rispostaCorretta": "è difficile da stabilire",
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
    "domanda": "Luigi ha due figli di 15 e 11 anni. Fra 18 anni la sua età sarà uguale alla somma delle età che avranno i figli. Quanti anni ha oggi Luigi?",
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
    "domanda": "Per quale dei seguenti valori di $x$ vale $\\cos(x) + \\sin(x) = 0$?",
    "rispostaCorretta": "$x = \\frac{3\\pi}{4}$",
    "risposteErrate": [
      "$x = \\frac{\\pi}{4}$",
      "$x = 0$",
      "$x = \\pi$",
      "$x = \\frac{\\pi}{2}$"
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
    "domanda": "Per $0 \\le x \\le \\pi$ l’equazione $\\sin(x) = 2 - k$ ha almeno una soluzione se e solo se:",
    "rispostaCorretta": "$1 \\le k \\le 2$",
    "risposteErrate": [
      "$k \\ge 1$",
      "$k \\le 2$",
      "$-1 \\le k \\le 1$",
      "$1 \\le k \\le 3$"
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
    "domanda": "Nell’insieme dei numeri reali la disequazione $x^4 + 5 < 0$ è verificata:",
    "rispostaCorretta": "mai",
    "risposteErrate": [
      "sempre",
      "$x = -5$",
      "$x > -5$",
      "$x < -4\\sqrt{5}$"
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
    "domanda": "L’insieme delle soluzioni della disequazione $\\frac{x + 3}{x + 1} \\ge 2$ è costituito da tutti i numeri reali $x$ tali che:",
    "rispostaCorretta": "$-1 < x \\le 1$",
    "risposteErrate": [
      "$-1 < x \\le 2$",
      "$x \\le 1$",
      "$x \\ge 1$",
      "$x < -1$"
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
    "domanda": "Il resto della divisione del polinomio $x^5 - 3x^4 + 3$ per $x + 1$ è:",
    "rispostaCorretta": "$-1$",
    "risposteErrate": [
      "1",
      "3",
      "0",
      "$x - 1$"
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
    "rispostaCorretta": "$\\sqrt{2}$",
    "risposteErrate": [
      "2",
      "1",
      "$\\sqrt{3}$",
      "$1 + \\sqrt{2}$"
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
    "domanda": "Quale delle seguenti uguaglianze è verificata qualunque siano i numeri reali $x$ e $y$?",
    "rispostaCorretta": "$3^{x+y} \\cdot 3^{x-y} = (3^x)^2$",
    "risposteErrate": [
      "$3^{x+y} \\cdot 3^{x-y} = 3^{x^2-y^2}$",
      "$3^{x+y} \\cdot 3^{x-y} = 3^{x^2} - 3^{y^2}$",
      "$3^{x+y} \\cdot 3^{x-y} = 3^{x^2}$",
      "$3^{x+y} \\cdot 3^{x-y} = 3^x(3^y \\cdot 3^{-y})$"
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
    "domanda": "Da un punto $P$ esterno a una circonferenza di centro $O$ e raggio di $1\\ \\mathrm{cm}$, si tracciano le tangenti a tale circonferenza che la incontrano nei punti $A$ e $B$. L’area del poligono $PAOB$ è di $\\sqrt{3}\\ \\mathrm{cm}^2$ se la distanza di $P$ da $O$ è:",
    "rispostaCorretta": "$2\\ \\mathrm{cm}$",
    "risposteErrate": [
      "$3\\ \\mathrm{cm}$",
      "$4\\ \\mathrm{cm}$",
      "$\\frac{\\sqrt{3}}{2}\\ \\mathrm{cm}$",
      "$\\frac{3}{2}\\ \\mathrm{cm}$"
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
    "domanda": "L’equazione $x + \\frac{1}{x} = k$, con $x$ reale non nullo, ammette una e una sola soluzione se:",
    "rispostaCorretta": "$k = 2$",
    "risposteErrate": [
      "$k = 1$",
      "$k = 3$",
      "$k = -3$",
      "$k = -1$"
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
    "domanda": "Nel piano cartesiano l’equazione $x^2 + y^2 + 4x = \\gamma$, con $\\gamma$ numero reale positivo, è:",
    "rispostaCorretta": "l’equazione di una circonferenza di centro $(-2,0)$ e raggio $\\sqrt{\\gamma + 4}$",
    "risposteErrate": [
      "l’equazione di una circonferenza di centro $(0,-4)$ e raggio $\\sqrt{\\gamma + 2}$",
      "l’equazione di una circonferenza di centro l’origine e raggio $\\sqrt{\\gamma}$",
      "l’equazione di una circonferenza di centro $(-4,0)$ e raggio $\\sqrt{\\gamma + 2}$",
      "l’equazione di una circonferenza di centro $(0,-2)$ e raggio $\\sqrt{\\gamma + 4}$"
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
    "domanda": "Dato un numero reale positivo $x$ e posto $f(x)=\\log_{10}(x)$, si ha che $f(10\\cdot x^{-2})$ è uguale a:",
    "rispostaCorretta": "$1 - 2f(x)$",
    "risposteErrate": [
      "$\\frac{1}{f(x)}$",
      "$2 - 2f(x)$",
      "$\\frac{1}{2f(x)}$",
      "$-2f(x)$"
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
    "domanda": "Dal semicerchio di diametro $AB = 2\\ \\mathrm{cm}$ e centro $O$ si toglie il semicerchio di diametro $AO$. La figura così ottenuta si fa ruotare attorno ad $AB$ con un giro di $360^\\circ$. Il volume del solido ottenuto è:",
    "rispostaCorretta": "$\\frac{7}{6}\\pi\\ \\mathrm{cm}^3$",
    "risposteErrate": [
      "$\\frac{25}{3}\\pi\\ \\mathrm{cm}^3$",
      "$\\frac{5}{6}\\pi\\ \\mathrm{cm}^3$",
      "$4\\pi\\ \\mathrm{cm}^3$",
      "$\\frac{28}{3}\\pi\\ \\mathrm{cm}^3$"
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
    "domanda": "Nel piano cartesiano, quanti sono i punti $P(x,y)$ per cui sono verificate tutte e tre le seguenti condizioni: $(x+y)^2 = 1$, $x^2 + y^2 = 1$, $x+y \\le 0$?",
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
    "domanda": "Nel piano cartesiano l’asse del segmento di estremi $A(0,0)$ e $B(1,1)$ ha equazione:",
    "rispostaCorretta": "$y = 1 - x$",
    "risposteErrate": [
      "$y = \\frac{1}{2} - x$",
      "$y = 2 - x$",
      "$y = 1 - \\frac{x}{2}$",
      "$y = \\frac{1 - x}{2}$"
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
    "domanda": "Il numero $\\left(\\frac{81}{\\sqrt{64}}\\right)^{1/4}$ è uguale a:",
    "rispostaCorretta": "$\\frac{24}{8^{5/4}}$",
    "risposteErrate": [
      "$\\frac{3}{\\sqrt{2}}$",
      "$\\frac{3}{2\\sqrt{2}}$",
      "$\\frac{24}{64}$",
      "$\\frac{3}{2}$"
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
    "domanda": "La seguente espressione $\\frac{\\left(3^{20} + 3^{20} + 3^{20}\\right)^{1/3}}{(3^3)^2}$ vale:",
    "rispostaCorretta": "3",
    "risposteErrate": [
      "$3^2$",
      "1",
      "$\\frac{1}{3}$",
      "$\\frac{1}{9}$"
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
    "domanda": "Sia $Q$ un quadrato di lato $\\ell$, $C_1$ il cerchio circoscritto a $Q$, $C_2$ il cerchio inscritto in $Q$. Il rapporto tra l’area di $C_1$ e l’area di $C_2$ vale:",
    "rispostaCorretta": "2",
    "risposteErrate": [
      "4",
      "$\\sqrt{2}$",
      "varia al variare di $\\ell$",
      "$2\\sqrt{2}$"
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
    "domanda": "Dato il triangolo equilatero $ABC$ il cui lato misura $2\\ \\mathrm{cm}$, siano $D$, $E$ e $F$ i punti medi rispettivamente dei lati $AB$, $BC$, $AC$. L’area del rombo $DECF$ è:",
    "rispostaCorretta": "$\\frac{\\sqrt{3}}{2}\\ \\mathrm{cm}^2$",
    "risposteErrate": [
      "$2\\ \\mathrm{cm}^2$",
      "$\\sqrt{3}\\ \\mathrm{cm}^2$",
      "$\\sqrt{2}\\ \\mathrm{cm}^2$",
      "$\\frac{1}{\\sqrt{3}}\\ \\mathrm{cm}^2$"
    ],
    "spiegazione": "",
    "fonte": "Esempio di prova.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 69,
    "excludedFromTolcPool": true,
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
    "domanda": "Volendo disporre i numeri 28, 29, 36, 43, 55 in modo che i dispari occupino una posizione dispari e i pari occupino una posizione pari, in quanti modi diversi si può operare?",
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
    "domanda": "Nonno Peperino non ricorda più la combinazione del suo forziere elettronico. Egli ricorda solo che la combinazione è di quattro cifre distinte fra 0 e 9, non contiene il 4, la terza cifra è la metà della quarta e le cifre sono in ordine crescente dalla prima all’ultima. Qual è il minimo numero di tentativi che Nonno Peperino deve fare per essere sicuro di aprire il forziere?",
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
    "domanda": "Il cuoco Giovanni osserva che, cucinando l’arrosto, se non si usa il forno a gas la carne o è cruda all’interno o è bruciata all’esterno, o entrambe le cose. Quindi se ne deduce che:",
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
    "domanda": "Il grande teorico dei numeri Kontakerikonta ha scoperto i numeri Incredibili; egli non sa ancora se essi siano in numero finito, però ha fatto la seguente congettura: se sono infiniti, almeno uno di essi deve avere 8 fattori primi distinti. Il suo allievo Rikontoijo, studiando con cura questi numeri, dimostra che la congettura di Kontakerikonta è falsa. Dunque Rikontoijo ha provato che:",
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
    "excludedFromTolcPool": true,
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
    "domanda": "Due corpi $A$ e $B$, di volume uguale e masse $m_B = 3m_A$, sono completamente immersi in un liquido. Quando i due corpi, tenuti inizialmente fermi, vengono lasciati andare, la forza idrostatica (spinta di Archimede) che il liquido esercita su $B$ è:",
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
    "domanda": "Un corpo di peso $P$, situato in prossimità della superficie terrestre, cade partendo da fermo. Se $g$ è l’accelerazione di gravità e si trascura la resistenza dell’aria, l’energia cinetica acquistata dal corpo dopo un tempo $t$ è pari a:",
    "rispostaCorretta": "$\\frac{1}{2}Pgt^2$",
    "risposteErrate": [
      "$\\frac{1}{2}Pgt$",
      "$2Pgt$",
      "$2Pgt^2$",
      "$\\frac{1}{2}Pg^2t^2$"
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
    "domanda": "Un tubo di sezione $S$ costante, piegato a U, è aperto su un ramo e chiuso da un tappo $T$ sull’altro (vedi figura). Se il tubo contiene acqua di densità $\\rho$ e le altezze dell’acqua nei due rami sono $H$ e $h$, la forza che l’acqua esercita sul tappo vale:",
    "rispostaCorretta": "$\\rho g(H - h)S$, diretta verso l’alto",
    "risposteErrate": [
      "$\\rho g(H - h)$, diretta verso il basso",
      "$\\rho gh$, diretta verso l’alto",
      "$\\rho gHS$, diretta verso l’alto",
      "$\\rho g(H + h)$, diretta verso il basso"
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
    "excludedFromTolcPool": true,
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
    "rispostaCorretta": "B è carica positivamente, mentre A può essere sia carica negativamente sia avere carica nulla",
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
    "domanda": "Un treno viaggia alla velocità di $144\\,\\mathrm{km/h}$. Supponendo che le ruote aderiscano perfettamente ai binari (non c’è slittamento) e che abbiano un diametro $d = 80\\,\\mathrm{cm}$, il numero di giri che fanno in un secondo è circa pari a:",
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
    "domanda": "La libertà interiore consiste",
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
    "domanda": "I giudizi di valore",
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
    "domanda": "La scuola dovrebbe",
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
    "domanda": "Il progresso tecnico",
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
    "domanda": "Il progresso scientifico",
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
    "domanda": "La diffusione dei graffiti indica che",
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
    "domanda": "La presenza di graffiti in Britannia è significativa perché",
    "rispostaCorretta": "indica alfabetizzazione anche alla periferia dell’Impero",
    "risposteErrate": [
      "dimostra l’assimilazione delle popolazioni celtiche",
      "segnala la presenza di presidi militari",
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
    "domanda": "L’alfabetizzazione era legata a",
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
    "domanda": "La funzione dei graffiti era",
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
    "domanda": "La frequenza dei reperimenti di graffiti è",
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
    "id": 102,
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
    "id": 103,
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
    "id": 104,
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
    "id": 105,
    "materia": "Logica",
    "domanda": "Quali dei numeri $x$, $y$ proposti vanno inseriti nella tabella? $1,\\ 3,\\ 6,\\ 10,\\ x,\\ 21,\\ 28$ e $1,\\ 2,\\ 6,\\ 24,\\ 120,\\ y,\\ 5040$",
    "rispostaCorretta": "$x = 15$ e $y = 720$",
    "risposteErrate": [
      "$x = 14$ e $y = 720$",
      "$x = 14$ e $y = 240$",
      "$x = 12$ e $y = 240$",
      "$x = 15$ e $y = 240$"
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
    "id": 107,
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
    "id": 108,
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
    "id": 109,
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
    "id": 110,
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
    "id": 111,
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
    "id": 112,
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
    "id": 113,
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
    "id": 114,
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
    "id": 115,
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
    "id": 116,
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
    "id": 117,
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
    "id": 118,
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
    "id": 119,
    "materia": "Logica",
    "domanda": "Una famosa congettura afferma che vi sono infinite coppie $(p,q)$ di numeri primi tali che $p = q + 2$. Confutare questa affermazione equivale a mostrare che:",
    "rispostaCorretta": "esiste un intero positivo $n$ tale che, qualunque sia il numero primo $q$ con $q > n$, il numero $q + 2$ non è primo",
    "risposteErrate": [
      "per ogni intero positivo $n$ e per ogni numero primo $q$ con $q > n$ il numero $q + 2$ non è primo",
      "esistono un intero positivo $n$ e un numero primo $q$ con $q > n$ tali che il numero $q + 2$ non è primo",
      "per ogni intero positivo $n$ esiste un numero primo $q$ con $q > n$ tale che il numero $q + 2$ non è primo",
      "esiste un intero positivo $n$ tale che, per ogni numero (primo e non primo) $m$ con $m > n$, il numero $m + 2$ non è primo"
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
    "domanda": "Considero una tabella quadrata formata da 4 numeri diversi e disposti in 2 righe da 2 numeri ciascuna: $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$. Siano $r_1$ il più piccolo dei numeri della prima riga, $r_2$ il più piccolo dei numeri della seconda riga, $R$ il maggiore tra $r_1$ e $r_2$, $K_1$ il più grande dei numeri della prima colonna, $K_2$ il più grande dei numeri della seconda colonna e $k$ il minore tra $K_1$ e $K_2$. Allora possiamo concludere che:",
    "rispostaCorretta": "$R \\le k$",
    "risposteErrate": [
      "$R < k$",
      "$R = k$",
      "$R > k$",
      "$R \\ge k$"
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
    "id": 122,
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
    "id": 123,
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
    "id": 124,
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
    "id": 125,
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
    "id": 126,
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
    "id": 127,
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
    "id": 128,
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
    "id": 129,
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
    "id": 130,
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
    "id": 131,
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
    "id": 132,
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
    "id": 133,
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
    "id": 134,
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
    "id": 135,
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
    "id": 136,
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
    "id": 137,
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
    "id": 138,
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
    "id": 139,
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
    "id": 140,
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
    "id": 141,
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
    "id": 142,
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
    "id": 143,
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
    "id": 144,
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
    "id": 145,
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
    "id": 146,
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
    "id": 147,
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
    "id": 148,
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
    "id": 149,
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
    "id": 150,
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
    "id": 151,
    "materia": "Comprensione verbale",
    "domanda": "Una verifica sperimentale della teoria dell’inflazione è data",
    "rispostaCorretta": "dalle anisotropie della radiazione cosmica",
    "risposteErrate": [
      "dal calcolo della temperatura costante della radiazione cosmica",
      "dall’osservazione delle nebulose nane",
      "dalla frequenza dei raggi cosmici",
      "dall’emissione dei raggi $\\gamma$ dai buchi neri"
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
    "id": 153,
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
    "id": 154,
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
    "id": 155,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano, il luogo dei punti di coordinate $(x,y)$ che verificano l’equazione $(y - 2x^2)(y^2 - 4) = 0$ è:",
    "rispostaCorretta": "L’unione di una parabola e di due rette",
    "risposteErrate": [
      "L’insieme costituito dai punti di coordinate $(1,-2)$, $(1,2)$",
      "L’insieme costituito dai punti di coordinate $(1,2)$, $(-1,2)$",
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
    "id": 156,
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
    "id": 157,
    "materia": "Matematica",
    "domanda": "Quanti sono i numeri reali $x$ che sono soluzioni dell’equazione $\\tan(2x-5\\pi) = -10^4$?",
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
    "id": 158,
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
    "id": 159,
    "materia": "Matematica",
    "domanda": "Per quale dei seguenti valori di $x$ si ha $\\sin\\left(\\frac{x}{3}\\right) = \\frac{\\sin(x)}{3}$?",
    "rispostaCorretta": "$x = 3\\pi$",
    "risposteErrate": [
      "$x = \\frac{\\pi}{3}$",
      "$x = 2\\pi$",
      "$x = \\frac{\\pi}{6}$",
      "$x = \\frac{\\pi}{2}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 160,
    "materia": "Matematica",
    "domanda": "Si considerino tutti i numeri reali $a$ della forma $a = \\frac{3n + 3 + (-1)^n}{n + 1}$, dove $n$ è un qualunque intero positivo. Quanti dei numeri $a$ sono maggiori di $2{,}99$?",
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
    "id": 161,
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
    "id": 162,
    "materia": "Matematica",
    "domanda": "Sia $x$ un numero razionale che soddisfa questa proprietà: $x \\le y$ per ogni $y$ razionale tale che $y > \\sqrt{2}$. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "$x < \\sqrt{2}$",
    "risposteErrate": [
      "$x$ è il più grande numero razionale minore di $\\sqrt{2}$",
      "$x$ è il più piccolo numero razionale maggiore di $\\sqrt{2}$",
      "$x = y$",
      "$x = \\sqrt{2}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 163,
    "materia": "Matematica",
    "domanda": "Date le due circonferenze rispettivamente di centro $(0,0)$ e raggio $1$, e di centro $(2,2)$ e raggio $1$, si indichi con $d(P_1,P_2)$ la distanza tra un generico punto $P_1$ che sta sulla prima circonferenza e un generico punto $P_2$ che sta sulla seconda circonferenza. Si consideri poi il minimo $m$ di $d(P_1,P_2)$ al variare di $P_1$ e di $P_2$. Si ha che:",
    "rispostaCorretta": "$m = 2(\\sqrt{2} - 1)$",
    "risposteErrate": [
      "$m = \\sqrt{2}$",
      "$m = \\frac{\\sqrt{2}}{2}$",
      "$m = \\sqrt{2} - 1$",
      "tale minimo non esiste"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 164,
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
    "id": 165,
    "materia": "Matematica",
    "domanda": "Rispetto ad un sistema cartesiano $Oxy$, la distanza del punto di coordinate $(-4,2)$ dalla retta di equazione $x = 2$ è:",
    "rispostaCorretta": "$6$",
    "risposteErrate": [
      "$-2$",
      "$2$",
      "$-6$",
      "$4$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 166,
    "materia": "Matematica",
    "domanda": "La scomposizione in fattori primi del numero $30^{13}$ è:",
    "rispostaCorretta": "$2^{13}3^{13}5^{13}$",
    "risposteErrate": [
      "$2^{15}3^{12}7^{13}$",
      "$30^{13}$",
      "$6^{13}5^{13}$",
      "impossibile"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 167,
    "materia": "Matematica",
    "domanda": "Sia $a$ un numero reale maggiore di $1$. L’espressione numerica $\\log_a\\sqrt{\\frac{a^2\\cdot\\sqrt{a}}{a^{5/2}}}$ è uguale a:",
    "rispostaCorretta": "$0$",
    "risposteErrate": [
      "$-1$",
      "$a$",
      "$e$",
      "$+1$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 168,
    "materia": "Matematica",
    "domanda": "Una squadra di operai deve asfaltare una piazza circolare. Arrivata sul posto scopre che la piazza ha diametro doppio del previsto. Quanto asfalto serve rispetto a quello preventivato?",
    "rispostaCorretta": "Il quadruplo",
    "risposteErrate": [
      "Non si può rispondere se non si conosce il raggio previsto o quello effettivo.",
      "Una quantità $\\pi^2$ volte quella prevista",
      "Il doppio",
      "Una quantità $2\\pi$ volte quella prevista"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 169,
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
    "id": 170,
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
    "id": 171,
    "materia": "Matematica",
    "domanda": "Rispetto ad un piano cartesiano $Oxy$, i punti del piano diversi dal punto $(-1,2)$ sono tutti e soli i punti $(x,y)$ tali che:",
    "rispostaCorretta": "$x \\ne -1$ oppure $y \\ne 2$",
    "risposteErrate": [
      "$y \\ne 2$",
      "$xy \\ne -2$",
      "$x \\ne -1$",
      "$x \\ne -1$ e $y \\ne 2$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 172,
    "materia": "Matematica",
    "domanda": "Rispetto ad un piano cartesiano $Oxy$, l’equazione dell’asse del segmento di estremi $(0,0)$ e $(2,2)$ è:",
    "rispostaCorretta": "$x + y = 2$",
    "risposteErrate": [
      "$x - y = 2$",
      "$x = 1$",
      "$y = x$",
      "$y = 1$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 173,
    "materia": "Matematica",
    "domanda": "Se $a$ e $b$ sono numeri reali tali che $a^2 + b^2 = 0$, allora si può concludere che certamente:",
    "rispostaCorretta": "$a + b = 0$",
    "risposteErrate": [
      "$a > b$",
      "$ab < -1$",
      "$a + b = 1$",
      "$ab > 0$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 174,
    "materia": "Matematica",
    "domanda": "La disequazione $\\cos x + \\sin x \\ge \\sqrt{2}$ è verificata nell’intervallo $0 \\le x \\le 2\\pi$ per:",
    "rispostaCorretta": "$x = \\frac{\\pi}{4}$",
    "risposteErrate": [
      "ogni x",
      "$x = -\\frac{\\pi}{4}$",
      "almeno un x tale che $\\frac{\\pi}{2} < x < \\pi$",
      "nessun x"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 175,
    "materia": "Matematica",
    "domanda": "Rispetto a un sistema di riferimento cartesiano ortogonale $Oxy$, è data la circonferenza di equazione $\\sqrt{3}x^2 + \\sqrt{3}y^2 - 2x - 2y = 0$. Allora il suo raggio è:",
    "rispostaCorretta": "$\\sqrt{\\frac{2}{3}}$",
    "risposteErrate": [
      "$3$",
      "$\\sqrt{3}$",
      "$1$",
      "$2$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 176,
    "materia": "Matematica",
    "domanda": "In un parallelogramma di perimetro 2p si ha che :",
    "rispostaCorretta": "ogni diagonale ha lunghezza minore di $p$",
    "risposteErrate": [
      "almeno una diagonale ha lunghezza pari a $p$",
      "ogni diagonale ha lunghezza maggiore di $p$",
      "la somma delle lunghezze delle diagonali è minore di $p$",
      "una diagonale ha lunghezza maggiore di $p$, l’altra minore di $p$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 177,
    "materia": "Matematica",
    "domanda": "Dato un esagono regolare di lato $L$, l’area del rettangolo che ha due lati coincidenti con due lati paralleli dell’esagono è uguale a:",
    "rispostaCorretta": "$\\sqrt{3}L^2$",
    "risposteErrate": [
      "$2\\sqrt{2}L$",
      "quella del cerchio circoscritto all’esagono",
      "$2L^2$",
      "quella del cerchio inscritto all’esagono"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 178,
    "materia": "Matematica",
    "domanda": "L’equazione $\\sqrt{x^2} - x = 0$ è verificata:",
    "rispostaCorretta": "solo per $x \\ge 0$",
    "risposteErrate": [
      "solo per $x = -1$",
      "solo per $x = 0$",
      "solo per $x = 1$",
      "$\\forall x \\in \\mathbb{R}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 179,
    "materia": "Matematica",
    "domanda": "Un numero razionale compreso tra $\\sqrt{5}$ e $\\sqrt{8}$ è:",
    "rispostaCorretta": "2,52",
    "risposteErrate": [
      "1,98",
      "3,01",
      "$\\frac{\\sqrt{5}\\sqrt{8}}{2}$",
      "$\\frac{\\sqrt{5} + \\sqrt{8}}{2}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 180,
    "materia": "Matematica",
    "domanda": "L’espressione $\\left(\\sin\\left(\\frac{\\pi}{12}\\right) - \\cos\\left(\\frac{\\pi}{12}\\right)\\right)^2$ è anche uguale a:",
    "rispostaCorretta": "$\\frac{1}{2}$",
    "risposteErrate": [
      "$1 - \\frac{\\sqrt{3}}{2}$",
      "$\\frac{3}{2}$",
      "$1 - \\frac{\\sqrt{2}}{2}$",
      "$1$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 181,
    "materia": "Matematica",
    "domanda": "Una sfera è inscritta in un cubo; il rapporto tra il volume della sfera e quello del cubo è:",
    "rispostaCorretta": "$\\frac{\\pi}{6}$",
    "risposteErrate": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{2\\pi}{3}$",
      "$\\frac{4\\pi}{3}$",
      "$\\frac{\\pi}{2}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 182,
    "materia": "Matematica",
    "domanda": "Un triangolo equilatero è inscritto in una circonferenza; il rapporto tra la lunghezza della circonferenza e il perimetro del triangolo è:",
    "rispostaCorretta": "$\\frac{2\\sqrt{3}\\pi}{9}$",
    "risposteErrate": [
      "$\\frac{4\\pi}{3}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\sqrt{3}\\pi}{2}$",
      "$2\\pi\\sqrt{3}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 183,
    "materia": "Matematica",
    "domanda": "L’equazione in campo reale $x^4 + 3x^2 - 4 = 0$ ha:",
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
    "id": 184,
    "materia": "Matematica",
    "domanda": "L’equazione $x^2 - 3|x| + 2 = 0$ ha:",
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
    "id": 185,
    "materia": "Matematica",
    "domanda": "L’equazione $\\cos^2 x - \\cos x - 2 \\ge 0$ è verificata per:",
    "rispostaCorretta": "$x = \\pi + 2k\\pi$, per ogni valore intero di $k$",
    "risposteErrate": [
      "nessun valore reale di x",
      "$x = 2k\\pi$, per ogni valore intero di $k$",
      "qualunque valore reale di x",
      "$x = 3k\\pi$, per ogni valore intero di $k$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 186,
    "materia": "Matematica",
    "domanda": "Un foglio di carta di forma quadrata viene piegato in due parti uguali in modo da formare due rettangoli sovrapposti. Sapendo che il perimetro del rettangolo è di 12 cm, qual è l’area del quadrato originario?",
    "rispostaCorretta": "$16\\ \\mathrm{cm}^2$",
    "risposteErrate": [
      "$9\\ \\mathrm{cm}^2$",
      "$36\\ \\mathrm{cm}^2$",
      "$24\\ \\mathrm{cm}^2$",
      "$72\\ \\mathrm{cm}^2$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 187,
    "materia": "Matematica",
    "domanda": "Fissato nel piano un sistema di assi cartesiani ortogonali $Oxy$, consideriamo i punti $A=(1,0)$ e $B=(0,2)$. Per quale scelta del punto $C$ il triangolo $ABC$ non è rettangolo?",
    "rispostaCorretta": "$C = (-1,0)$",
    "risposteErrate": [
      "$C = \\left(0,-\\frac{1}{2}\\right)$",
      "$C = (1,2)$",
      "$C = (-4,0)$",
      "$C = (0,0)$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 188,
    "materia": "Matematica",
    "domanda": "L’equazione $|x - 1| = 1 - |x|$ ha:",
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
    "id": 189,
    "materia": "Matematica",
    "domanda": "Per quali $x$ reali è verificata la disequazione $\\sqrt{x^2 - 1} > 2x$?",
    "rispostaCorretta": "$x \\le -1$",
    "risposteErrate": [
      "$x \\ge -1$",
      "$-1 < x < 1$",
      "per nessun x reale",
      "$x \\ge 1$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 190,
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
    "id": 191,
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
    "id": 192,
    "materia": "Matematica",
    "domanda": "Rispetto ad un riferimento cartesiano ortogonale $Oxy$ del piano, l’equazione $(x-1)^2 - y^2 = 0$ individua:",
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
    "id": 193,
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
    "id": 194,
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
    "id": 195,
    "materia": "Matematica",
    "domanda": "In un piano cartesiano, quale delle seguenti rette ha lo stesso coefficiente angolare della retta passante per i punti $(1,0)$ e $(0,1)$?",
    "rispostaCorretta": "$x + y = 3$",
    "risposteErrate": [
      "$2x + 3y = 0$",
      "$x = y - 1$",
      "$x = 2$",
      "$y = 1$"
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
    "domanda": "In un piano cartesiano, quale dei seguenti punti è interno al triangolo racchiuso tra le tre rette $r_1: y = 0$, $r_2: y = 2x$, $r_3: y = -x + 7$?",
    "rispostaCorretta": "$P = (3,3)$",
    "risposteErrate": [
      "$P = (3,5)$",
      "$P = (4,4)$",
      "$P = (1,-3)$",
      "$P = (-3,2)$"
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
    "domanda": "Si ha $\\sqrt[3]{x^3 + 8} < 0$:",
    "rispostaCorretta": "se e solo se $x < -2$",
    "risposteErrate": [
      "se e solo se $x < -1$",
      "per nessun valore reale di $x$",
      "se e solo se $x < 0$",
      "se e solo se $x < 1$"
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
    "domanda": "Dato un numero reale $x$, la seguente relazione $\\frac{2^x\\cdot 2}{\\sqrt{4^{x+1}}}$ vale:",
    "rispostaCorretta": "$1$",
    "risposteErrate": [
      "$\\frac{1}{2^x}$",
      "$0$",
      "$\\frac{1}{2}$",
      "$2$"
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
    "domanda": "L’equazione trigonometrica $\\sin(x) = \\frac{1}{\\sin(x)}$ ammette come soluzioni:",
    "rispostaCorretta": "$x = \\frac{\\pi}{2} + k\\pi$, per ogni $k$ intero",
    "risposteErrate": [
      "nessuna delle altre risposte",
      "$x = \\frac{k\\pi}{2}$, per ogni $k$ intero",
      "$x = \\frac{3\\pi}{2} + 2k\\pi$, per ogni $k$ intero",
      "$x = \\frac{\\pi}{2} + 2k\\pi$, per ogni $k$ intero"
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
    "domanda": "Per $0 \\le x \\le \\frac{\\pi}{2}$, l’equazione $\\sqrt{3}\\sin^2 x + \\sqrt{3}\\cos^2 x - 2\\sin x = 0$ ha soluzione:",
    "rispostaCorretta": "$x = \\frac{\\pi}{3}$",
    "risposteErrate": [
      "$x = \\frac{\\pi}{6}$",
      "$x = \\frac{\\pi}{4}$",
      "$x = 0$",
      "$x = \\frac{\\pi}{2}$"
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
    "domanda": "Date due sfere concentriche di raggio $1$ e $r$ (con $r < 1$), che valore deve assumere $r$ affinché il volume della parte esterna alla sfera minore sia metà del volume della sfera maggiore?",
    "rispostaCorretta": "$r = \\frac{1}{\\sqrt[3]{2}}$",
    "risposteErrate": [
      "$r = \\frac{1}{\\sqrt{3}}$",
      "$r = \\frac{1}{\\sqrt[3]{3}}$",
      "$r = \\frac{1}{2}$",
      "$r = \\frac{1}{\\sqrt{2}}$"
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
    "domanda": "L’equazione $x(x-a)=1$ ha due soluzioni distinte:",
    "rispostaCorretta": "per tutti gli $a$ reali",
    "risposteErrate": [
      "se e solo se $a \\ge 0$",
      "se e solo se $-1 < a < 1$",
      "per nessun valore reale di $a$",
      "se e solo se $-2 < a < 2$"
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
    "domanda": "L’equazione $\\sin x = -x$:",
    "rispostaCorretta": "ammette soltanto una soluzione",
    "risposteErrate": [
      "ammette infinite soluzioni",
      "se $h > 0$ è una soluzione, allora anche $x = h + \\pi$ lo è",
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
    "id": 205,
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
    "id": 206,
    "materia": "Matematica",
    "domanda": "Il resto della divisione del polinomio $2x^3 - 3x + 2$ per $x - 2$ è:",
    "rispostaCorretta": "$12$",
    "risposteErrate": [
      "$8$",
      "$-1$",
      "$-8$",
      "$-12$"
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
    "domanda": "In un piano cartesiano consideriamo le rette $r_k$ di equazione $y = kx + 2k + 1$, dove $k$ è un parametro reale. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "Tutte le rette $r_k$ passano per il punto $(-2,1)$",
    "risposteErrate": [
      "Le rette $r_k$ sono a due a due incidenti, ma non esiste un punto comune a tutte",
      "Per $k = 0$ non si ottiene l’equazione di una retta",
      "Tutte le rette $r_k$ passano per il punto $(1,-2)$",
      "Le rette $r_k$ sono parallele fra di loro"
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
    "domanda": "L’insieme $\\{(x,y) \\in \\mathbb{R}^2 : x \\ne 0, \\frac{y}{x} > 2\\}$ è costituito da:",
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
    "id": 209,
    "materia": "Matematica",
    "domanda": "Sia $p$ un numero positivo dispari e $q$ il numero dispari successivo. Si ha che:",
    "rispostaCorretta": "$q^2 - p^2$ è divisibile per $8$ e può non essere divisibile per $16$",
    "risposteErrate": [
      "$q^2 - p^2$ è divisibile per $16$ e può non essere divisibile per $32$",
      "$q^2 - p^2$ può essere dispari",
      "$q^2 - p^2$ è divisibile per $2$ e può non essere divisibile per $4$",
      "$q^2 - p^2$ è divisibile per $4$ e può non essere divisibile per $8$"
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
    "domanda": "L’espressione $\\log(x^4 + 2x^2 + \\sin^2 x + \\cos^2 x)$ coincide con:",
    "rispostaCorretta": "$2\\log(1 + x^2)$",
    "risposteErrate": [
      "$4\\log(1 + x)$",
      "$[\\log(1 + x^2)]^2$",
      "$\\log(x^4 + 2x^2) + \\log(\\sin^2 x + \\cos^2 x)$",
      "$2\\log(1 + x + \\sin x + \\cos x)$"
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
    "id": 212,
    "materia": "Matematica",
    "domanda": "Dato un numero intero positivo $n$, sia $x_n$ la soluzione dell’equazione $\\frac{x+1}{1} + \\frac{x+2}{2} + \\cdots + \\frac{x+n}{n} = n$. Quale delle seguenti affermazioni è vera?",
    "rispostaCorretta": "$x_n = x_{n+1}$ per ogni $n$",
    "risposteErrate": [
      "$x_n \\neq 0$ per ogni $n$",
      "se $n_1 < n_2$ allora $x_{n_1} < x_{n_2}$",
      "se $n_1 < n_2$ allora $x_{n_1} > x_{n_2}$",
      "$x_n = x_n + 1$ per ogni $n$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Matematica vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 213,
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
    "id": 214,
    "materia": "Scienze",
    "domanda": "Due bacinelle rigide di uguale volume sono completamente riempite rispettivamente di ceci (sfere, di diametro medio $d_c = 8\\ \\mathrm{mm}$) e piselli (sfere, di diametro medio $d_p = 6\\ \\mathrm{mm}$). Qual è approssimativamente il rapporto $N_c/N_p$ fra il numero di ceci $N_c$ e il numero dei piselli $N_p$ in esse contenuti?",
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
    "id": 215,
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
    "id": 216,
    "materia": "Scienze",
    "domanda": "Un’automobile, inizialmente ferma, parte con un’accelerazione costante di $2\\,\\mathrm{m/s^2}$. Nel medesimo istante, viene sorpassata da una bicicletta che viaggia alla velocità costante di $8\\,\\mathrm{m/s}$. A quale distanza dal punto di partenza l’auto raggiungerà la bicicletta?",
    "rispostaCorretta": "$64\\ \\mathrm{m}$",
    "risposteErrate": [
      "$32\\ \\mathrm{m}$",
      "$6\\ \\mathrm{m}$",
      "$128\\ \\mathrm{m}$",
      "$16\\ \\mathrm{m}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 217,
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
    "id": 218,
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
    "id": 219,
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
    "id": 220,
    "materia": "Scienze",
    "domanda": "La tariffa dell’energia elettrica per uso domestico è di 0,20 €/kWh. Ricordando che il calore specifico dell’acqua è $4186\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$ e trascurando le perdite, quanto costa scaldare 50 litri di acqua da 20 °C a 60 °C usando uno scaldabagno elettrico?",
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
    "id": 221,
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
    "id": 222,
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
    "id": 223,
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
    "id": 224,
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
    "id": 225,
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
    "id": 226,
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
    "id": 227,
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
    "id": 228,
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
    "id": 229,
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
    "id": 230,
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
    "id": 231,
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
    "id": 232,
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
    "id": 233,
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
    "id": 234,
    "materia": "Scienze",
    "domanda": "La seguente reazione: $\\mathrm{As_2O_3} + \\mathrm{HCl} = \\mathrm{AsCl_3} + \\mathrm{H_2O}$, opportunamente bilanciata, si scrive:",
    "rispostaCorretta": "$\\mathrm{As_2O_3} + 6\\,\\mathrm{HCl} = 2\\,\\mathrm{AsCl_3} + 3\\,\\mathrm{H_2O}$",
    "risposteErrate": [
      "$\\mathrm{As_2O_3} + 3\\,\\mathrm{HCl} = \\mathrm{AsCl_3} + 3\\,\\mathrm{H_2O}$",
      "$\\mathrm{As_2O_3} + \\mathrm{HCl} = 2\\,\\mathrm{AsCl_3} + \\mathrm{H_2O}$",
      "$\\mathrm{As_2O_3} + 9\\,\\mathrm{HCl} = 2\\,\\mathrm{AsCl_3} + 5\\,\\mathrm{H_2O}$",
      "$\\mathrm{As_2O_3} + \\mathrm{HCl} = \\mathrm{AsCl_3} + \\mathrm{H_2O}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 235,
    "materia": "Scienze",
    "domanda": "Quale delle seguenti affermazioni è vera? La conducibilità termica di un materiale",
    "rispostaCorretta": "si può misurare in $\\mathrm{W\\,m^{-1}\\,K^{-1}}$",
    "risposteErrate": [
      "si può misurare in $\\mathrm{W\\,m^{-2}\\,K^{-1}}$",
      "si può misurare in $\\mathrm{N\\,m^{-1}\\,K^{-1}}$",
      "si può misurare in $\\mathrm{J\\,s^{-1}\\,m^{-2}\\,K^{-1}}$",
      "si può misurare in $\\mathrm{W\\,s^{-1}\\,m^{-2}\\,K^{-1}}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 236,
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
    "id": 237,
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
    "id": 238,
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
    "id": 239,
    "materia": "Scienze",
    "domanda": "Due conduttori, il primo di rame Cu (resistività $\\rho = 1{,}7 \\times 10^{-8}\\ \\Omega\\,\\mathrm{m}$) e il secondo di platino Pt (resistività $\\rho = 11{,}7 \\times 10^{-8}\\ \\Omega\\,\\mathrm{m}$), hanno lunghezza uguale e sezione rispettivamente $1\\ \\mathrm{cm}^2$ ed $8\\ \\mathrm{cm}^2$. Quale delle seguenti affermazioni è corretta?",
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
    "id": 240,
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
    "id": 241,
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
    "id": 242,
    "materia": "Scienze",
    "domanda": "Indicare come cambiano la velocità $v$ e la lunghezza d’onda $\\lambda$ della luce quando questa passa dall’aria al vetro.",
    "rispostaCorretta": "$v$ diminuisce e $\\lambda$ diminuisce",
    "risposteErrate": [
      "$v$ aumenta e $\\lambda$ aumenta",
      "$v$ diminuisce e $\\lambda$ aumenta",
      "$v$ aumenta e $\\lambda$ non cambia",
      "$v$ aumenta e $\\lambda$ diminuisce"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 243,
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
    "id": 244,
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
    "id": 245,
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
    "id": 246,
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
    "id": 247,
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
    "id": 248,
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
    "id": 249,
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
    "id": 250,
    "materia": "Scienze",
    "domanda": "Detta $\\lambda$ la lunghezza d’onda, la distanza tra una cresta ed un ventre successivo di un’onda che si propaga sulla superficie di un lago è:",
    "rispostaCorretta": "$\\lambda/2$",
    "risposteErrate": [
      "$4\\lambda$",
      "$\\lambda$",
      "$2\\lambda$",
      "$\\lambda/4$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 251,
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
    "id": 252,
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
    "id": 253,
    "materia": "Scienze",
    "domanda": "Una sorgente luminosa emette luce isotropicamente. Indicata con $I$ l’intensità luminosa misurata alla distanza $d$ dalla sorgente, quale intensità si osserva alla distanza $2d$?",
    "rispostaCorretta": "$\\frac{I}{4}$",
    "risposteErrate": [
      "$2I$",
      "$I$",
      "$\\frac{I}{2}$",
      "$\\frac{I}{16}$"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 254,
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
    "id": 255,
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
    "id": 256,
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
    "id": 257,
    "materia": "Scienze",
    "domanda": "Per la reazione $\\mathrm{CaO + H_2O \\to Ca(OH)_2}$, il fatto che il processo sia esotermico implica che:",
    "rispostaCorretta": "la reazione sviluppa calore e il $\\mathrm{Ca(OH)_2}$ si riscalda",
    "risposteErrate": [
      "la reazione sviluppa calore e di conseguenza il $\\mathrm{Ca(OH)_2}$ perde istantaneamente il contenuto d’acqua, che evapora, e ritorna a essere $\\mathrm{CaO}$",
      "la reazione assorbe calore dall’ambiente e il $\\mathrm{Ca(OH)_2}$ si raffredda",
      "la reazione avviene senza alcuna variazione di temperatura",
      "la reazione assorbe calore dall’ambiente e il $\\mathrm{Ca(OH)_2}$ solidifica perché l’acqua contenuta ghiaccia istantaneamente"
    ],
    "spiegazione": "",
    "fonte": "Il Test CISIA INGEGNERIA - Scienze vol.1.pdf",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 258,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Her brothers ________ in Jakarta.",
    "rispostaCorretta": "were born",
    "risposteErrate": [
      "are born",
      "have born",
      "born",
      "borned"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 1",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 1
  },
  {
    "id": 259,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "________ that documentary on Winston Churchill last night?",
    "rispostaCorretta": "Did you record",
    "risposteErrate": [
      "Did you recorded",
      "Recorded you",
      "Have you recorded",
      "Recorded it you"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 2",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 2
  },
  {
    "id": 260,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "I put the beer in the fridge ________.",
    "rispostaCorretta": "four hours ago",
    "risposteErrate": [
      "since four hours",
      "for four hours",
      "before four hours",
      "at four hours"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 3",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 3
  },
  {
    "id": 261,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "We’re going to the cinema tonight. Would you like ________ us?",
    "rispostaCorretta": "to join",
    "risposteErrate": [
      "join",
      "joining",
      "to joining",
      "of joining"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 4",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 4
  },
  {
    "id": 262,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "He needs a portable computer but he doesn’t have ________ money.",
    "rispostaCorretta": "much",
    "risposteErrate": [
      "a lot",
      "too",
      "almost",
      "many"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 5",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 5
  },
  {
    "id": 263,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "The company has improved its income ________ five months.",
    "rispostaCorretta": "for",
    "risposteErrate": [
      "since",
      "during",
      "until",
      "last"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 6",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 6
  },
  {
    "id": 264,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "You are a pirate! How many songs and films ________ from the Internet this week?",
    "rispostaCorretta": "have you downloaded",
    "risposteErrate": [
      "do you download",
      "did you download",
      "want you to download",
      "were you downloaded"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 7",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 7
  },
  {
    "id": 265,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "I don’t know what my father ________ with his students. With me he’s always nice.",
    "rispostaCorretta": "is like",
    "risposteErrate": [
      "likes",
      "looks like",
      "would like",
      "likes all"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 8",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 8
  },
  {
    "id": 266,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Our holidays were not as expensive ________ we thought.",
    "rispostaCorretta": "as",
    "risposteErrate": [
      "than",
      "that",
      "like",
      "so"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 9",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 9
  },
  {
    "id": 267,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "When the thieves broke in they ________.",
    "rispostaCorretta": "were sleeping",
    "risposteErrate": [
      "slept",
      "are sleeping",
      "have been sleeping",
      "had slept"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 10",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 10
  },
  {
    "id": 268,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "“Are you meeting her tonight ?” - “Yes, I ________. Why?”",
    "rispostaCorretta": "am",
    "risposteErrate": [
      "am meeting",
      "meet",
      "can meet",
      "do"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 11",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 11
  },
  {
    "id": 269,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "I ________ this watch since I got married.",
    "rispostaCorretta": "have had",
    "risposteErrate": [
      "had",
      "have",
      "am having",
      "had had"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 12",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 12
  },
  {
    "id": 270,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "She’ll be at home between ________ and five. Call her.",
    "rispostaCorretta": "half past two",
    "risposteErrate": [
      "two past half",
      "thirty past two",
      "two and half",
      "two half past"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 13",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 13
  },
  {
    "id": 271,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Why don’t you want to go to the Far East? It’s ________ interesting.",
    "rispostaCorretta": "very",
    "risposteErrate": [
      "much",
      "many",
      "a lot",
      "too"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 14",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 14
  },
  {
    "id": 272,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "“So that’s your new boyfriend. And ________ ?” - “He works in a bank.”",
    "rispostaCorretta": "what does he do",
    "risposteErrate": [
      "what he makes",
      "what job he does",
      "where is he",
      "which job does he"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 15",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 15
  },
  {
    "id": 273,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Last year I ________ on holiday with two friends of mine.",
    "rispostaCorretta": "was",
    "risposteErrate": [
      "spent",
      "passed",
      "trip",
      "stayed"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 16",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 16
  },
  {
    "id": 274,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "The country was against the war ________ the president started it.",
    "rispostaCorretta": "but",
    "risposteErrate": [
      "so",
      "why",
      "and",
      "otherwise"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 17",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 17
  },
  {
    "id": 275,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "________ something special for your next anniversary?",
    "rispostaCorretta": "Are you doing",
    "risposteErrate": [
      "Do you do",
      "Will you doing",
      "Do you",
      "Are you go"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 18",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 18
  },
  {
    "id": 276,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Don’t you think that ________ in Milan is dangerous?",
    "rispostaCorretta": "cycling",
    "risposteErrate": [
      "you cycle",
      "to cycle",
      "by cycling",
      "the cycling"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 19",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 19
  },
  {
    "id": 277,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Jayapura is ________ place they’ve been to.",
    "rispostaCorretta": "the most distant",
    "risposteErrate": [
      "more distant",
      "the distantest",
      "distant than",
      "the distant of"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 20",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 20
  },
  {
    "id": 278,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "The room is ________ and nobody is allowed to enter it.",
    "rispostaCorretta": "hers",
    "risposteErrate": [
      "of her",
      "her",
      "she’s",
      "of she"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 21",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 21
  },
  {
    "id": 279,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "I met a young lady ________ cousin lives near me.",
    "rispostaCorretta": "whose",
    "risposteErrate": [
      "who’s",
      "that",
      "which",
      "who her"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 22",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 22
  },
  {
    "id": 280,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "If the restaurant is closed where ________ ?",
    "rispostaCorretta": "shall we go",
    "risposteErrate": [
      "about we go",
      "go we",
      "let’s go",
      "do we go"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 23",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 23
  },
  {
    "id": 281,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Have they cleaned their room ________ ?",
    "rispostaCorretta": "yet",
    "risposteErrate": [
      "still",
      "just",
      "ready",
      "ever"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 24",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 24
  },
  {
    "id": 282,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "What time does she have ________ lunch?",
    "rispostaCorretta": "- - - -",
    "risposteErrate": [
      "a",
      "the",
      "some",
      "any"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 25",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 25
  },
  {
    "id": 283,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Look at ________ girls over there! They’re Mr White’s daughters.",
    "rispostaCorretta": "those",
    "risposteErrate": [
      "they",
      "them",
      "these",
      "their"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 26",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 26
  },
  {
    "id": 284,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "“________ do you go to the dentist’s?” - “Once a year.”",
    "rispostaCorretta": "How often",
    "risposteErrate": [
      "How many times",
      "How long",
      "How much",
      "How old"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 27",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 27
  },
  {
    "id": 285,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "When do you usually have ________ breakfast?",
    "rispostaCorretta": "- - - -",
    "risposteErrate": [
      "a",
      "the",
      "any",
      "first"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 28",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 28
  },
  {
    "id": 286,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "This is our son James and ________ are our twin daughters, Sabrina and Jessica.",
    "rispostaCorretta": "these",
    "risposteErrate": [
      "their",
      "that",
      "them",
      "this"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 29",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 29
  },
  {
    "id": 287,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "Those ________ are very efficient! What about a promotion?",
    "rispostaCorretta": "policemen",
    "risposteErrate": [
      "policeman",
      "policemens",
      "policemans",
      "policemen’s"
    ],
    "spiegazione": "",
    "fonte": "NEW Test1.pdf — Quesito 30",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 30
  },
  {
    "id": 288,
    "materia": "Matematica",
    "domanda": "Se x è un numero reale negativo, allora",
    "rispostaCorretta": "x − |x| < 0",
    "risposteErrate": [
      "x · |x| > 0",
      "x / |x| > 0",
      "x + |x| > 0",
      "−x · |x| < 0"
    ],
    "spiegazione": "Se x < 0, allora |x| = -x > 0. Ne segue che x - |x| = x - (-x) = 2x < 0.",
    "fonte": "NEW Test1.pdf — Quesito 31",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 31
  },
  {
    "id": 289,
    "materia": "Matematica",
    "domanda": "Se un polinomio P(x) è divisibile per x² − 4, allora",
    "rispostaCorretta": "2 e −2 sono certamente radici di P(x)",
    "risposteErrate": [
      "P(x) non ha radici reali",
      "2 non è una radice di P(x)",
      "−2 non è una radice di P(x)",
      "√2 e −√2 sono certamente radici di P(x)"
    ],
    "spiegazione": "Poiché x² - 4 = (x - 2)(x + 2), se P(x) è divisibile per x² - 4 si ha P(2) = 0 e P(-2) = 0.",
    "fonte": "NEW Test1.pdf — Quesito 32",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 32
  },
  {
    "id": 290,
    "materia": "Matematica",
    "domanda": "Indicato con x un angolo la cui misura in radianti può variare tra 0 e 2π, l’equazione\nsin x + cos x = 0\nammette",
    "rispostaCorretta": "due soluzioni",
    "risposteErrate": [
      "quattro soluzioni",
      "una soluzione",
      "otto soluzioni",
      "nessuna soluzione"
    ],
    "spiegazione": "sin x + cos x = 0 equivale a tan x = -1 (con cos x ≠ 0). Nell'intervallo [0, 2π] le soluzioni sono due: x = 3π/4 e x = 7π/4.",
    "fonte": "NEW Test1.pdf — Quesito 33",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 33
  },
  {
    "id": 291,
    "materia": "Matematica",
    "domanda": "Fissato nel piano un sistema di riferimento cartesiano ortogonale Oxy, si consideri la retta r di equazione\ny = (2x + 1) / −3\nLa retta passante per il punto di coordinate (1, 1) e perpendicolare ad r ha equazione",
    "rispostaCorretta": "y = (3x − 1) / 2",
    "risposteErrate": [
      "y = (2x + 1) / 3",
      "y = (3x + 1) / 2",
      "y = (2x − 5) / 3",
      "y = (2x − 5) / −3"
    ],
    "spiegazione": "La retta r ha coefficiente angolare m = -2/3. La perpendicolare ha m' = -1/m = 3/2. La retta per (1,1) ha equazione y - 1 = 3/2 (x - 1) ⇒ y = (3x - 1)/2.",
    "fonte": "NEW Test1.pdf — Quesito 34",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 34
  },
  {
    "id": 292,
    "materia": "Logica",
    "domanda": "Sapendo che l’affermazione\n«Tutti i sabati vado in pizzeria e poi al cinema»\nè falsa, se ne deduce che",
    "rispostaCorretta": "qualche sabato non vado in pizzeria o al cinema",
    "risposteErrate": [
      "tutti i sabati non vado in pizzeria o al cinema",
      "qualche sabato non vado né in pizzeria né al cinema",
      "tutti i sabati non vado né in pizzeria né al cinema",
      "tutti i giorni vado in pizzeria e al cinema"
    ],
    "spiegazione": "La negazione di «Per ogni sabato (pizzeria E cinema)» è «Esiste almeno un sabato in cui NON (pizzeria E cinema)», ossia «qualche sabato non vado in pizzeria O [non vado] al cinema» (legge di De Morgan).",
    "fonte": "NEW Test1.pdf — Quesito 35",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 35
  },
  {
    "id": 293,
    "materia": "Matematica",
    "domanda": "Siano α e β due angoli legati fra di loro dalla relazione β = π − α. Quale delle seguenti uguaglianze è vera?",
    "rispostaCorretta": "tan α + tan β = 0",
    "risposteErrate": [
      "sin α + sin β = 0",
      "cos α + cos β = −1",
      "tan α = tan β",
      "cos α = cos β"
    ],
    "spiegazione": "Per angoli supplementari si ha tan(π - α) = -tan α, dunque tan β = -tan α ⇒ tan α + tan β = 0.",
    "fonte": "NEW Test1.pdf — Quesito 36",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 36
  },
  {
    "id": 294,
    "materia": "Matematica",
    "domanda": "L’età media dei partecipanti ad una festa è di 24 anni. Se l’età media degli uomini è 28 anni e quella delle donne è 18 anni, qual è il rapporto tra il numero degli uomini e quello delle donne?",
    "rispostaCorretta": "3/2",
    "risposteErrate": [
      "2",
      "14/9",
      "4/3",
      "9/14"
    ],
    "spiegazione": "Posto U il numero di uomini e D quello di donne: 28U + 18D = 24(U + D) ⇒ 4U = 6D ⇒ U/D = 6/4 = 3/2.",
    "fonte": "NEW Test1.pdf — Quesito 37",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 37
  },
  {
    "id": 295,
    "materia": "Matematica",
    "domanda": "Un triangolo rettangolo ha perimetro lungo 12 cm. Allora i suoi due cateti sono lunghi",
    "rispostaCorretta": "3 e 4 cm",
    "risposteErrate": [
      "1 e 2 cm",
      "2 e 3 cm",
      "4 e 5 cm",
      "5 e 6 cm"
    ],
    "spiegazione": "Con cateti di 3 cm e 4 cm, l'ipotenusa è √(3² + 4²) = 5 cm. Il perimetro è 3 + 4 + 5 = 12 cm.",
    "fonte": "NEW Test1.pdf — Quesito 38",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 38
  },
  {
    "id": 296,
    "materia": "Matematica",
    "domanda": "Quale delle seguenti affermazioni è falsa?\nAffinché due frazioni siano uguali",
    "rispostaCorretta": "è necessario che abbiano uguale numeratore e uguale denominatore",
    "risposteErrate": [
      "è sufficiente che abbiano lo stesso numeratore e lo stesso denominatore",
      "è necessario che abbiano numeratori e denominatori proporzionali",
      "non è necessario che abbiano uguale numeratore e uguale denominatore",
      "è necessario e sufficiente che abbiano numeratori e denominatori proporzionali"
    ],
    "spiegazione": "Due frazioni possono essere uguali anche se hanno numeratori e denominatori diversi (es. 1/2 = 2/4). Dunque non è «necessario» avere numeratore e denominatore identici.",
    "fonte": "NEW Test1.pdf — Quesito 39",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 39
  },
  {
    "id": 297,
    "materia": "Matematica",
    "domanda": "La metà di (1/2)⁵⁰ è uguale a",
    "rispostaCorretta": "(1/2)⁵¹",
    "risposteErrate": [
      "(1/4)⁵⁰",
      "(1/2)²⁵",
      "(1/2)⁴⁹",
      "(1/4)²⁵"
    ],
    "spiegazione": "La metà di (1/2)⁵⁰ è (1/2) · (1/2)⁵⁰ = (1/2)⁵¹.",
    "fonte": "NEW Test1.pdf — Quesito 40",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 40
  },
  {
    "id": 298,
    "materia": "Matematica",
    "domanda": "La seguente tabella rappresenta la distribuzione dei redditi annuali (in migliaia di euro) di una certa collettività di persone.\nSe ne deduce che:",
    "rispostaCorretta": "le persone con reddito inferiore a 20 000 sono tante quante quelle che hanno un reddito compreso fra 20 000 e 50 000",
    "risposteErrate": [
      "le persone con reddito inferiore a 10 000 sono meno di quelle che hanno un reddito superiore a 30 000",
      "il 60% delle persone ha un reddito inferiore a 25 000",
      "il 20% delle persone ha un reddito superiore a 40 000",
      "nessuno ha un reddito di 5 000"
    ],
    "spiegazione": "La percentuale con reddito ≤ 20 (migliaia) è il 47%. La percentuale con reddito compreso fra 20 e 50 è pari a 94% - 47% = 47%. I due gruppi hanno pertanto la stessa consistenza.",
    "fonte": "NEW Test1.pdf — Quesito 41",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 41,
    "tabella": {
      "headers": [
        "reddito",
        "≤ 10",
        "≤ 20",
        "≤ 30",
        "≤ 50",
        "> 50"
      ],
      "rows": [
        [
          "% di persone",
          "28%",
          "47%",
          "73%",
          "94%",
          "6%"
        ]
      ]
    }
  },
  {
    "id": 299,
    "materia": "Matematica",
    "domanda": "Fissato nel piano un sistema di assi cartesiani ortogonali Oxy, quale tra le seguenti è la retta di equazione 4x − 2y + 1 = 0?",
    "rispostaCorretta": "Grafico A",
    "risposteErrate": [
      "Grafico B",
      "Grafico C",
      "Grafico D",
      "Grafico E"
    ],
    "spiegazione": "Riscrivendo l'equazione in forma esplicita: 2y = 4x + 1 ⇒ y = 2x + 1/2. La retta ha pendenza positiva (m = 2), intercetta sull'asse y positiva (y = 1/2 > 0) e intercetta sull'asse x negativa (x = -1/4 < 0), corrispondente esattamente al Grafico A.",
    "fonte": "NEW Test1.pdf — Quesito 42",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 42,
    "rispostaCorrettaImg": "/images/q42_a.svg",
    "risposteErrateImg": [
      "/images/q42_b.svg",
      "/images/q42_c.svg",
      "/images/q42_d.svg",
      "/images/q42_e.svg"
    ]
  },
  {
    "id": 300,
    "materia": "Matematica",
    "domanda": "L’equazione nell’incognita reale x\n(x² − 3x) / (3 − x) = −2",
    "rispostaCorretta": "ha un’unica soluzione la quale è diversa da 3",
    "risposteErrate": [
      "non ha soluzioni",
      "ha due soluzioni",
      "ha l’unica soluzione x = 3",
      "ha più di due soluzioni"
    ],
    "spiegazione": "Il dominio richiede x ≠ 3. Scomponendo il numeratore x(x - 3) = -x(3 - x), per x ≠ 3 l'equazione si riduce a -x = -2 ⇒ x = 2, che è un'unica soluzione reale e diversa da 3.",
    "fonte": "NEW Test1.pdf — Quesito 43",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 43
  },
  {
    "id": 301,
    "materia": "Logica",
    "domanda": "Aldo Bruno e Carlo sono tre amici. Si sa che:\n(a) almeno uno di essi è laureato\n(b) se Aldo è laureato, anche Bruno lo è\n(c) se Carlo è laureato, anche Aldo lo è\n(d) solo uno tra Bruno e Carlo è laureato\n\nAllora si deduce che:",
    "rispostaCorretta": "Bruno è laureato",
    "risposteErrate": [
      "Aldo e Bruno sono laureati",
      "Aldo è laureato e Bruno non lo è",
      "Carlo è laureato",
      "i laureati sono due"
    ],
    "spiegazione": "Se Carlo fosse laureato, per la (c) anche Aldo lo sarebbe, e per la (b) anche Bruno lo sarebbe. Ma allora sia Bruno che Carlo sarebbero laureati, contraddicendo la (d). Dunque Carlo non è laureato. Dalla (d) ne consegue necessariamente che Bruno è laureato.",
    "fonte": "NEW Test1.pdf — Quesito 44",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 44
  },
  {
    "id": 302,
    "materia": "Matematica",
    "domanda": "Fissato nel piano un sistema di riferimento cartesiano ortogonale Oxy, quale delle seguenti è l’equazione di una circonferenza?",
    "rispostaCorretta": "4x² − 3x + 4y² − 5y − 1 = 0",
    "risposteErrate": [
      "x² + y² − 2xy − 1 = 0",
      "(x − 1)² − (y − 2)² − 1 = 0",
      "x² + y² + 1 = 0",
      "x⁴ + y⁴ − 1 = 0"
    ],
    "spiegazione": "Dividendo per 4: x² + y² - 3/4 x - 5/4 y - 1/4 = 0. Il raggio al quadrato r² = (3/8)² + (5/8)² + 1/4 = 50/64 > 0, che descrive una circonferenza reale.",
    "fonte": "NEW Test1.pdf — Quesito 45",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 45
  },
  {
    "id": 303,
    "materia": "Matematica",
    "domanda": "Un macchinario produce bulloni. Un bullone è ritenuto difettoso quando ha peso oppure dimensioni sbagliate. Il controllo di qualità mette in evidenza che il 5% dei bulloni prodotti ha almeno il peso sbagliato e che il 3% ha almeno le dimensioni sbagliate. Nell’ipotesi che il 2% dei bulloni prodotti abbia sia peso che dimensioni sbagliate, qual è la percentuale di bulloni difettosi che produce quel macchinario?",
    "rispostaCorretta": "6%",
    "risposteErrate": [
      "8%",
      "10%",
      "4%",
      "Non è possibile rispondere con i dati assegnati"
    ],
    "spiegazione": "Per il principio di inclusione-esclusione: P(Peso ∪ Dimensioni) = P(Peso) + P(Dimensioni) - P(Peso ∩ Dimensioni) = 5% + 3% - 2% = 6%.",
    "fonte": "NEW Test1.pdf — Quesito 46",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 46
  },
  {
    "id": 304,
    "materia": "Matematica",
    "domanda": "Posto\na = 0,21    b = 1/5    c = 1 / log₂ 5\nsi ha",
    "rispostaCorretta": "b < a < c",
    "risposteErrate": [
      "c < a < b",
      "a < b < c",
      "c < b < a",
      "a < c < b"
    ],
    "spiegazione": "b = 1/5 = 0,20; a = 0,21; c = 1 / log₂ 5 = log₅ 2 ≈ 0,43. Dunque b < a < c.",
    "fonte": "NEW Test1.pdf — Quesito 47",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 47
  },
  {
    "id": 305,
    "materia": "Matematica",
    "domanda": "Per trasmettere segnali Aldo issa 5 bandierine (3 gialle e 2 blu) su di un’asta. Quanti segnali diversi può ottenere Aldo?",
    "rispostaCorretta": "10",
    "risposteErrate": [
      "6",
      "5",
      "25",
      "20"
    ],
    "spiegazione": "Permutazioni con ripetizione di 5 elementi con 3 gialle e 2 blu: 5! / (3! · 2!) = 120 / (6 · 2) = 10.",
    "fonte": "NEW Test1.pdf — Quesito 48",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 48
  },
  {
    "id": 306,
    "materia": "Logica",
    "domanda": "L’affermazione\n«A nessuno studente sono antipatici tutti i professori»\nequivale a dire che:",
    "rispostaCorretta": "ad ogni studente è simpatico almeno un professore",
    "risposteErrate": [
      "c’è uno studente a cui tutti i professori sono antipatici",
      "tutti i professori sono antipatici a tutti gli studenti",
      "a qualche studente sono simpatici tutti i professori",
      "c’è un professore che è simpatico a tutti gli studenti"
    ],
    "spiegazione": "Negare che a uno studente siano antipatici tutti i professori significa affermare che per ogni studente esiste almeno un professore che non gli è antipatico (ossia gli è simpatico).",
    "fonte": "NEW Test1.pdf — Quesito 49",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 49
  },
  {
    "id": 307,
    "materia": "Matematica",
    "domanda": "L’ombra di un campanile è lunga la metà della sua altezza. Detta α la misura dell’angolo formato dal sole sull’orizzonte in quel momento, si può dire che",
    "rispostaCorretta": "60° ≤ α",
    "risposteErrate": [
      "α < 30°",
      "30° ≤ α < 45°",
      "è notte",
      "45° ≤ α < 60°"
    ],
    "spiegazione": "Posto H l'altezza del campanile e L = H/2 la lunghezza dell'ombra, tan α = H / L = 2. Poiché tan 60° = √3 ≈ 1,732 e tan α = 2 > √3, risulta α > 60°.",
    "fonte": "NEW Test1.pdf — Quesito 50",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 50
  },
  {
    "id": 308,
    "materia": "Matematica",
    "domanda": "Si consideri la seguente equazione per i valori reali della variabile x:\n8^(x − 1/3) = 4^(3/2 x + 1/2)\nL’equazione data ha",
    "rispostaCorretta": "nessuna soluzione",
    "risposteErrate": [
      "quattro soluzioni",
      "due soluzioni",
      "infinite soluzioni",
      "una soluzione"
    ],
    "spiegazione": "Esprimendo entrambe le basi in potenza di 2: (2³)^(x - 1/3) = 2^(3x - 1) e (2²)^(3/2 x + 1/2) = 2^(3x + 1). Uguagliando gli esponenti si ottiene 3x - 1 = 3x + 1 ⇒ -1 = 1, equazione impossibile.",
    "fonte": "NEW Test1.pdf — Quesito 51",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 51
  },
  {
    "id": 309,
    "materia": "Matematica",
    "domanda": "Un triangolo rettangolo, avente cateti di lunghezza rispettiva 1 cm e 2 cm, viene fatto ruotare di un giro completo una volta intorno al cateto minore, generando un cono C₁, e una volta intorno al cateto maggiore, generando un cono C₂. Allora il volume di C₁ è",
    "rispostaCorretta": "il doppio del volume di C₂",
    "risposteErrate": [
      "uguale al volume di C₂",
      "un quarto del volume di C₂",
      "il quadruplo del volume di C₂",
      "la metà del volume di C₂"
    ],
    "spiegazione": "Volume cono: V = 1/3 π r² h. Per C₁ (r = 2, h = 1): V₁ = 4/3 π. Per C₂ (r = 1, h = 2): V₂ = 2/3 π. Dunque V₁ / V₂ = 2.",
    "fonte": "NEW Test1.pdf — Quesito 52",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 52
  },
  {
    "id": 310,
    "materia": "Matematica",
    "domanda": "Due circonferenze concentriche hanno diametri rispettivamente uguali a 6 cm e a 2 cm. Qual è l’area della parte di piano compresa tra esse?",
    "rispostaCorretta": "8π cm²",
    "risposteErrate": [
      "4π cm²",
      "10π cm²",
      "16π cm²",
      "32π cm²"
    ],
    "spiegazione": "I raggi sono R = 3 cm e r = 1 cm. L'area della corona circolare è π (R² - r²) = π (9 - 1) = 8π cm².",
    "fonte": "NEW Test1.pdf — Quesito 53",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 53
  },
  {
    "id": 311,
    "materia": "Matematica",
    "domanda": "La disequazione x³ ≤ x⁴ è verificata se e solo se",
    "rispostaCorretta": "x ≤ 0 oppure x ≥ 1",
    "risposteErrate": [
      "x ≥ 0",
      "x ≥ 1",
      "x ≤ −1 oppure x ≥ 1",
      "x è un numero reale qualunque"
    ],
    "spiegazione": "x⁴ - x³ ≥ 0 ⇒ x³(x - 1) ≥ 0. Studiando il segno dei fattori, il prodotto è ≥ 0 per x ≤ 0 oppure x ≥ 1.",
    "fonte": "NEW Test1.pdf — Quesito 54",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 54
  },
  {
    "id": 312,
    "materia": "Matematica",
    "domanda": "In una città sono pubblicati tre giornali: il Mattino, il Pomeriggio e la Sera. Il 40% dei cittadini legge il Mattino, il 30% legge il Pomeriggio e il 10% legge la Sera. Inoltre, il 15% dei cittadini legge sia il Mattino che il Pomeriggio, il 7% sia il Mattino che la Sera e il 5% sia il Pomeriggio che la Sera. Infine, il 2% dei cittadini legge tutti e tre i giornali. Qual è la percentuale di cittadini che non legge alcun giornale?",
    "rispostaCorretta": "45%",
    "risposteErrate": [
      "1%",
      "20%",
      "50%",
      "60%"
    ],
    "spiegazione": "Percentuale che legge almeno un giornale = 40 + 30 + 10 - 15 - 7 - 5 + 2 = 55%. Chi non legge alcun giornale = 100% - 55% = 45%.",
    "fonte": "NEW Test1.pdf — Quesito 55",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 55
  },
  {
    "id": 313,
    "materia": "Comprensione verbale",
    "domanda": "Nel linguaggio politico degli Stati Uniti non si parlava esplicitamente di nazione",
    "rispostaCorretta": "per evitare ogni suggestione centralistica",
    "risposteErrate": [
      "per garantire l’aggregazione di nuovi stati",
      "perché il corpo sociale era multietnico",
      "perché quel termine non era di uso comune",
      "per differenziarsi dalla sudditanza all’Inghilterra"
    ],
    "spiegazione": "Il brano afferma: «Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione” ... nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione”».",
    "fonte": "NEW Test1.pdf — Quesito 56",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 56,
    "brano": "Il significato primario di “nazione”, e uno dei più ricorrenti sul piano bibliografico, era politico. In pratica assimilava “popolo” e Stato allo stesso modo delle Rivoluzioni americana e francese: un’equazione che ritorna spesso in espressioni del tipo “Stato-nazione” e “Nazioni Unite”, o nel linguaggio dei presidenti degli ultimi decenni del secolo XX. Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione”, “nostra terra comune”, “pubblico”, “benessere pubblico”, “comunità”, nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione” contrarie in qualche modo ai diritti dei singoli Stati federati. Infatti era, o dovette diventarlo prontamente, parte integrante del concetto di nazione, nell’Età della rivoluzione, l’essere questa “una e indivisibile”, secondo l’espressione francese. La “nazione” cui qui si faceva riferimento era il corpo dei cittadini la cui sovranità collettiva costituiva quello Stato che ne era l’espressione politica. Al di là di che cosa fosse precisamente una nazione, l’elemento di “cittadinanza”, di partecipazione di massa e di scelta risultava comunque sempre presente. Jonh Stuart Mill non si limitò a definire la nazione sulla scorta dell’esistenza di un sentimento nazionale, ma volle aggiungere che gli appartenenti a una nazionalità “desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro”.\nL’equazione nazione=Stato=popolo, e in particolare popolo sovrano, rapportò la nazione al territorio dato che la struttura e la definizione degli Stati erano diventate sostanzialmente territoriali. Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare. Come affermato nella Dichiarazione dei Diritti del 1795 in Francia: “Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l’estensione del territorio che occupa. Questa sovranità è inalienabile”.\nD’altra parte, però, si dice assai poco su che cosa costituisca un “popolo”. In particolare mancava una relazione logica tra, da una parte, il corpo dei cittadini di uno Stato territoriale e, dall’altra, l’identificazione della “nazione” su basi etniche, linguistiche o altre caratteristiche che consentissero un riconoscimento collettivo del gruppo di appartenenza.\nDa un punto di vista popolare-rivoluzionario l’elemento accomunante della “nazione” non poteva essere in senso sostanziale né l’etnia, né la lingua, né l’affinità, sebbene poi queste potessero indicare una qualche appartenenza collettiva.\nCom’è stato sottolineato da Pierre Vilar, ciò che caratterizzava il popolo-nazione visto dal basso era precisamente il fatto di rappresentare l’interesse comune in contrapposizione agli interessi particolari, il bene comune contro il privilegio, come del resto è adombrato dalla terminologia americana prima del 1800 per indicare la nazionalità e nello stesso tempo evitare l’uso del termine.\nNon possiamo pertanto rintracciare nella “nazione” rivoluzionaria alcunché di simile al successivo programma nazionalistico di fare dello Stato-nazione un corpo definibile sulla base dei criteri oggetto di accanita discussione da parte dei teorici del secolo XIX, quali etnia, lingua, religione, territorio e memoria storica comuni, per citare ancora una volta John Stuart Mill. Come abbiamo visto, ad esclusione del territorio, la cui estensione restava peraltro indefinita, e forse del colore della pelle, nessuno di questi costituiva un elemento unificante nel caso della neonata nazione americana.",
    "titoloBrano": "Il concetto di nazione"
  },
  {
    "id": 314,
    "materia": "Comprensione verbale",
    "domanda": "L’estensione del territorio condiziona la definizione di nazione?",
    "rispostaCorretta": "No, l’estensione è ininfluente",
    "risposteErrate": [
      "Sì, per garantire la sovranità",
      "Sì, perché occorrono dei confini definiti",
      "No, perché l’estensione è variabile",
      "Sì, una estensione ristretta non permette l’autonomia"
    ],
    "spiegazione": "La Dichiarazione del 1795 citata nel brano stabilisce: «Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l'estensione del territorio che occupa».",
    "fonte": "NEW Test1.pdf — Quesito 57",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 57,
    "brano": "Il significato primario di “nazione”, e uno dei più ricorrenti sul piano bibliografico, era politico. In pratica assimilava “popolo” e Stato allo stesso modo delle Rivoluzioni americana e francese: un’equazione che ritorna spesso in espressioni del tipo “Stato-nazione” e “Nazioni Unite”, o nel linguaggio dei presidenti degli ultimi decenni del secolo XX. Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione”, “nostra terra comune”, “pubblico”, “benessere pubblico”, “comunità”, nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione” contrarie in qualche modo ai diritti dei singoli Stati federati. Infatti era, o dovette diventarlo prontamente, parte integrante del concetto di nazione, nell’Età della rivoluzione, l’essere questa “una e indivisibile”, secondo l’espressione francese. La “nazione” cui qui si faceva riferimento era il corpo dei cittadini la cui sovranità collettiva costituiva quello Stato che ne era l’espressione politica. Al di là di che cosa fosse precisamente una nazione, l’elemento di “cittadinanza”, di partecipazione di massa e di scelta risultava comunque sempre presente. Jonh Stuart Mill non si limitò a definire la nazione sulla scorta dell’esistenza di un sentimento nazionale, ma volle aggiungere che gli appartenenti a una nazionalità “desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro”.\nL’equazione nazione=Stato=popolo, e in particolare popolo sovrano, rapportò la nazione al territorio dato che la struttura e la definizione degli Stati erano diventate sostanzialmente territoriali. Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare. Come affermato nella Dichiarazione dei Diritti del 1795 in Francia: “Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l’estensione del territorio che occupa. Questa sovranità è inalienabile”.\nD’altra parte, però, si dice assai poco su che cosa costituisca un “popolo”. In particolare mancava una relazione logica tra, da una parte, il corpo dei cittadini di uno Stato territoriale e, dall’altra, l’identificazione della “nazione” su basi etniche, linguistiche o altre caratteristiche che consentissero un riconoscimento collettivo del gruppo di appartenenza.\nDa un punto di vista popolare-rivoluzionario l’elemento accomunante della “nazione” non poteva essere in senso sostanziale né l’etnia, né la lingua, né l’affinità, sebbene poi queste potessero indicare una qualche appartenenza collettiva.\nCom’è stato sottolineato da Pierre Vilar, ciò che caratterizzava il popolo-nazione visto dal basso era precisamente il fatto di rappresentare l’interesse comune in contrapposizione agli interessi particolari, il bene comune contro il privilegio, come del resto è adombrato dalla terminologia americana prima del 1800 per indicare la nazionalità e nello stesso tempo evitare l’uso del termine.\nNon possiamo pertanto rintracciare nella “nazione” rivoluzionaria alcunché di simile al successivo programma nazionalistico di fare dello Stato-nazione un corpo definibile sulla base dei criteri oggetto di accanita discussione da parte dei teorici del secolo XIX, quali etnia, lingua, religione, territorio e memoria storica comuni, per citare ancora una volta John Stuart Mill. Come abbiamo visto, ad esclusione del territorio, la cui estensione restava peraltro indefinita, e forse del colore della pelle, nessuno di questi costituiva un elemento unificante nel caso della neonata nazione americana.",
    "titoloBrano": "Il concetto di nazione"
  },
  {
    "id": 315,
    "excludedFromTolcPool": true,
    "materia": "Comprensione verbale",
    "domanda": "La comunità di linguaggio è essenziale per una nazione?",
    "rispostaCorretta": "Soltanto se unita a fattori etnici ed economici",
    "risposteErrate": [
      "Sì, perché è il veicolo della cultura comune",
      "Sì, è una condizione preliminare per il formarsi di una nazione",
      "Solo se si tratta di una nazione multietnica",
      "Sì, per garantire l’identità nazionale"
    ],
    "spiegazione": "Nel brano si specifica che «l'elemento accomunante della 'nazione' non poteva essere in senso sostanziale né l'etnia, né la lingua, né l'affinità». Le alternative del quesito nel PDF originale contengono solo risposte affermative o condizionate, senza una chiara corrispondenza con la tesi del testo.",
    "fonte": "NEW Test1.pdf — Quesito 58",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 58,
    "brano": "Il significato primario di “nazione”, e uno dei più ricorrenti sul piano bibliografico, era politico. In pratica assimilava “popolo” e Stato allo stesso modo delle Rivoluzioni americana e francese: un’equazione che ritorna spesso in espressioni del tipo “Stato-nazione” e “Nazioni Unite”, o nel linguaggio dei presidenti degli ultimi decenni del secolo XX. Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione”, “nostra terra comune”, “pubblico”, “benessere pubblico”, “comunità”, nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione” contrarie in qualche modo ai diritti dei singoli Stati federati. Infatti era, o dovette diventarlo prontamente, parte integrante del concetto di nazione, nell’Età della rivoluzione, l’essere questa “una e indivisibile”, secondo l’espressione francese. La “nazione” cui qui si faceva riferimento era il corpo dei cittadini la cui sovranità collettiva costituiva quello Stato che ne era l’espressione politica. Al di là di che cosa fosse precisamente una nazione, l’elemento di “cittadinanza”, di partecipazione di massa e di scelta risultava comunque sempre presente. Jonh Stuart Mill non si limitò a definire la nazione sulla scorta dell’esistenza di un sentimento nazionale, ma volle aggiungere che gli appartenenti a una nazionalità “desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro”.\nL’equazione nazione=Stato=popolo, e in particolare popolo sovrano, rapportò la nazione al territorio dato che la struttura e la definizione degli Stati erano diventate sostanzialmente territoriali. Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare. Come affermato nella Dichiarazione dei Diritti del 1795 in Francia: “Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l’estensione del territorio che occupa. Questa sovranità è inalienabile”.\nD’altra parte, però, si dice assai poco su che cosa costituisca un “popolo”. In particolare mancava una relazione logica tra, da una parte, il corpo dei cittadini di uno Stato territoriale e, dall’altra, l’identificazione della “nazione” su basi etniche, linguistiche o altre caratteristiche che consentissero un riconoscimento collettivo del gruppo di appartenenza.\nDa un punto di vista popolare-rivoluzionario l’elemento accomunante della “nazione” non poteva essere in senso sostanziale né l’etnia, né la lingua, né l’affinità, sebbene poi queste potessero indicare una qualche appartenenza collettiva.\nCom’è stato sottolineato da Pierre Vilar, ciò che caratterizzava il popolo-nazione visto dal basso era precisamente il fatto di rappresentare l’interesse comune in contrapposizione agli interessi particolari, il bene comune contro il privilegio, come del resto è adombrato dalla terminologia americana prima del 1800 per indicare la nazionalità e nello stesso tempo evitare l’uso del termine.\nNon possiamo pertanto rintracciare nella “nazione” rivoluzionaria alcunché di simile al successivo programma nazionalistico di fare dello Stato-nazione un corpo definibile sulla base dei criteri oggetto di accanita discussione da parte dei teorici del secolo XIX, quali etnia, lingua, religione, territorio e memoria storica comuni, per citare ancora una volta John Stuart Mill. Come abbiamo visto, ad esclusione del territorio, la cui estensione restava peraltro indefinita, e forse del colore della pelle, nessuno di questi costituiva un elemento unificante nel caso della neonata nazione americana.",
    "titoloBrano": "Il concetto di nazione",
    "daVerificare": true
  },
  {
    "id": 316,
    "materia": "Comprensione verbale",
    "domanda": "Per cittadinanza si intende",
    "rispostaCorretta": "essere soggetti ad un unico governo",
    "risposteErrate": [
      "essere stabilmente residenti in un luogo",
      "far parte di un solo gruppo etnico",
      "avere i documenti in regola",
      "non avere diritti politici e civili"
    ],
    "spiegazione": "Il brano cita John Stuart Mill, spiegando che gli appartenenti a una nazionalità «desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro».",
    "fonte": "NEW Test1.pdf — Quesito 59",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 59,
    "brano": "Il significato primario di “nazione”, e uno dei più ricorrenti sul piano bibliografico, era politico. In pratica assimilava “popolo” e Stato allo stesso modo delle Rivoluzioni americana e francese: un’equazione che ritorna spesso in espressioni del tipo “Stato-nazione” e “Nazioni Unite”, o nel linguaggio dei presidenti degli ultimi decenni del secolo XX. Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione”, “nostra terra comune”, “pubblico”, “benessere pubblico”, “comunità”, nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione” contrarie in qualche modo ai diritti dei singoli Stati federati. Infatti era, o dovette diventarlo prontamente, parte integrante del concetto di nazione, nell’Età della rivoluzione, l’essere questa “una e indivisibile”, secondo l’espressione francese. La “nazione” cui qui si faceva riferimento era il corpo dei cittadini la cui sovranità collettiva costituiva quello Stato che ne era l’espressione politica. Al di là di che cosa fosse precisamente una nazione, l’elemento di “cittadinanza”, di partecipazione di massa e di scelta risultava comunque sempre presente. Jonh Stuart Mill non si limitò a definire la nazione sulla scorta dell’esistenza di un sentimento nazionale, ma volle aggiungere che gli appartenenti a una nazionalità “desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro”.\nL’equazione nazione=Stato=popolo, e in particolare popolo sovrano, rapportò la nazione al territorio dato che la struttura e la definizione degli Stati erano diventate sostanzialmente territoriali. Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare. Come affermato nella Dichiarazione dei Diritti del 1795 in Francia: “Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l’estensione del territorio che occupa. Questa sovranità è inalienabile”.\nD’altra parte, però, si dice assai poco su che cosa costituisca un “popolo”. In particolare mancava una relazione logica tra, da una parte, il corpo dei cittadini di uno Stato territoriale e, dall’altra, l’identificazione della “nazione” su basi etniche, linguistiche o altre caratteristiche che consentissero un riconoscimento collettivo del gruppo di appartenenza.\nDa un punto di vista popolare-rivoluzionario l’elemento accomunante della “nazione” non poteva essere in senso sostanziale né l’etnia, né la lingua, né l’affinità, sebbene poi queste potessero indicare una qualche appartenenza collettiva.\nCom’è stato sottolineato da Pierre Vilar, ciò che caratterizzava il popolo-nazione visto dal basso era precisamente il fatto di rappresentare l’interesse comune in contrapposizione agli interessi particolari, il bene comune contro il privilegio, come del resto è adombrato dalla terminologia americana prima del 1800 per indicare la nazionalità e nello stesso tempo evitare l’uso del termine.\nNon possiamo pertanto rintracciare nella “nazione” rivoluzionaria alcunché di simile al successivo programma nazionalistico di fare dello Stato-nazione un corpo definibile sulla base dei criteri oggetto di accanita discussione da parte dei teorici del secolo XIX, quali etnia, lingua, religione, territorio e memoria storica comuni, per citare ancora una volta John Stuart Mill. Come abbiamo visto, ad esclusione del territorio, la cui estensione restava peraltro indefinita, e forse del colore della pelle, nessuno di questi costituiva un elemento unificante nel caso della neonata nazione americana.",
    "titoloBrano": "Il concetto di nazione"
  },
  {
    "id": 317,
    "materia": "Comprensione verbale",
    "domanda": "Dal principio dell’autodeterminazione dipende",
    "rispostaCorretta": "la pluralità degli stati-nazione",
    "risposteErrate": [
      "il carattere multietnico del popolo",
      "il carattere democratico del governo",
      "il federalismo",
      "il principio di territorialità"
    ],
    "spiegazione": "Il brano recita: «Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare».",
    "fonte": "NEW Test1.pdf — Quesito 60",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 60,
    "brano": "Il significato primario di “nazione”, e uno dei più ricorrenti sul piano bibliografico, era politico. In pratica assimilava “popolo” e Stato allo stesso modo delle Rivoluzioni americana e francese: un’equazione che ritorna spesso in espressioni del tipo “Stato-nazione” e “Nazioni Unite”, o nel linguaggio dei presidenti degli ultimi decenni del secolo XX. Il linguaggio politico degli Stati Uniti d’America preferì in un primo tempo parlare di “popolo”, “unione”, “confederazione”, “nostra terra comune”, “pubblico”, “benessere pubblico”, “comunità”, nell’intento di evitare le implicazioni di tipo centralistico e unitario del termine “nazione” contrarie in qualche modo ai diritti dei singoli Stati federati. Infatti era, o dovette diventarlo prontamente, parte integrante del concetto di nazione, nell’Età della rivoluzione, l’essere questa “una e indivisibile”, secondo l’espressione francese. La “nazione” cui qui si faceva riferimento era il corpo dei cittadini la cui sovranità collettiva costituiva quello Stato che ne era l’espressione politica. Al di là di che cosa fosse precisamente una nazione, l’elemento di “cittadinanza”, di partecipazione di massa e di scelta risultava comunque sempre presente. Jonh Stuart Mill non si limitò a definire la nazione sulla scorta dell’esistenza di un sentimento nazionale, ma volle aggiungere che gli appartenenti a una nazionalità “desiderano di essere sottoposti a un governo, e altresì desiderano che si tratti di un governo composto esclusivamente da loro o da una parte di loro”.\nL’equazione nazione=Stato=popolo, e in particolare popolo sovrano, rapportò la nazione al territorio dato che la struttura e la definizione degli Stati erano diventate sostanzialmente territoriali. Implicava inoltre una molteplicità di Stati-nazione costituiti su questa base, quale necessaria conseguenza dell’autodeterminazione popolare. Come affermato nella Dichiarazione dei Diritti del 1795 in Francia: “Ogni popolo è indipendente e sovrano, quale che sia il numero degli individui che lo compone e l’estensione del territorio che occupa. Questa sovranità è inalienabile”.\nD’altra parte, però, si dice assai poco su che cosa costituisca un “popolo”. In particolare mancava una relazione logica tra, da una parte, il corpo dei cittadini di uno Stato territoriale e, dall’altra, l’identificazione della “nazione” su basi etniche, linguistiche o altre caratteristiche che consentissero un riconoscimento collettivo del gruppo di appartenenza.\nDa un punto di vista popolare-rivoluzionario l’elemento accomunante della “nazione” non poteva essere in senso sostanziale né l’etnia, né la lingua, né l’affinità, sebbene poi queste potessero indicare una qualche appartenenza collettiva.\nCom’è stato sottolineato da Pierre Vilar, ciò che caratterizzava il popolo-nazione visto dal basso era precisamente il fatto di rappresentare l’interesse comune in contrapposizione agli interessi particolari, il bene comune contro il privilegio, come del resto è adombrato dalla terminologia americana prima del 1800 per indicare la nazionalità e nello stesso tempo evitare l’uso del termine.\nNon possiamo pertanto rintracciare nella “nazione” rivoluzionaria alcunché di simile al successivo programma nazionalistico di fare dello Stato-nazione un corpo definibile sulla base dei criteri oggetto di accanita discussione da parte dei teorici del secolo XIX, quali etnia, lingua, religione, territorio e memoria storica comuni, per citare ancora una volta John Stuart Mill. Come abbiamo visto, ad esclusione del territorio, la cui estensione restava peraltro indefinita, e forse del colore della pelle, nessuno di questi costituiva un elemento unificante nel caso della neonata nazione americana.",
    "titoloBrano": "Il concetto di nazione"
  },
  {
    "id": 318,
    "materia": "Scienze",
    "domanda": "Un veicolo, che viaggia inizialmente alla velocità di 100 km/h, frena con decelerazione costante sino a fermarsi nello spazio di 200 m. La sua decelerazione è di circa",
    "rispostaCorretta": "2 m/s²",
    "risposteErrate": [
      "5 m/s²",
      "3 m/s²",
      "9 m/s²",
      "1 m/s²"
    ],
    "spiegazione": "v₀ = 100 km/h = 27,78 m/s. Usando la legge v² = v₀² - 2 a s con v = 0 e s = 200 m: a = v₀² / (2s) = (27,78)² / 400 ≈ 771,6 / 400 ≈ 1,93 m/s² ≈ 2 m/s².",
    "fonte": "NEW Test1.pdf — Quesito 61",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 61
  },
  {
    "id": 319,
    "materia": "Scienze",
    "domanda": "Una delle radiazioni sottoelencate non è un’onda elettromagnetica. Quale?",
    "rispostaCorretta": "Raggi catodici",
    "risposteErrate": [
      "Raggi infrarossi",
      "Raggi ultravioletti",
      "Raggi X",
      "Raggi laser"
    ],
    "spiegazione": "I raggi catodici sono fasci di elettroni (radiazione corpuscolare), non onde elettromagnetiche.",
    "fonte": "NEW Test1.pdf — Quesito 62",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 62
  },
  {
    "id": 320,
    "materia": "Scienze",
    "domanda": "Un segnale radio inviato da Milano impiega per arrivare a Napoli (circa 600 km)",
    "rispostaCorretta": "0, 002 s",
    "risposteErrate": [
      "2 s",
      "0, 1 s",
      "1 min",
      "1 µs"
    ],
    "spiegazione": "I segnali radio viaggiano alla velocità della luce c ≈ 300.000 km/s. Il tempo impiegato è t = d / c = 600 / 300.000 s = 0,002 s.",
    "fonte": "NEW Test1.pdf — Quesito 63",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 63
  },
  {
    "id": 321,
    "materia": "Scienze",
    "domanda": "Quanto pesano 2 dm³ di mercurio? (Peso specifico del mercurio = 13,59 g/cm³.)",
    "rispostaCorretta": "27, 18 kg",
    "risposteErrate": [
      "2, 718 kg",
      "271, 8 g",
      "27, 18 g",
      "271, 8 kg"
    ],
    "spiegazione": "13,59 g/cm³ = 13,59 kg/dm³. La massa di 2 dm³ è m = 13,59 kg/dm³ · 2 dm³ = 27,18 kg.",
    "fonte": "NEW Test1.pdf — Quesito 64",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 64
  },
  {
    "id": 322,
    "materia": "Scienze",
    "domanda": "Quanti litri d’acqua a 100 °C occorre aggiungere ad un litro d’acqua a 40 °C per ottenere acqua a 80 °C ?",
    "rispostaCorretta": "Due litri",
    "risposteErrate": [
      "Un litro",
      "Tre litri",
      "Quattro litri",
      "Cinque litri"
    ],
    "spiegazione": "All'equilibrio termico: m_calda · c · (100 - 80) = m_fredda · c · (80 - 40) ⇒ 20 · V = 40 · 1 ⇒ V = 2 litri.",
    "fonte": "NEW Test1.pdf — Quesito 65",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0,
    "sourceDocument": "NEW Test1.pdf",
    "sourceQuestionNumber": 65
  },
  {
    "id": 323,
    "materia": "Matematica",
    "domanda": "Un abito da 120 euro viene scontato del 25% e poi del 10%. Il prezzo finale è:",
    "rispostaCorretta": "81 euro",
    "risposteErrate": [
      "78 euro",
      "84 euro",
      "90 euro",
      "108 euro"
    ],
    "spiegazione": "Dopo il primo sconto del 25%, il prezzo diventa $120 \\cdot (1 - 0{,}25) = 120 \\cdot 0{,}75 = 90$ euro. Con l’ulteriore sconto del 10% applicato a 90 euro, il prezzo finale risulta $90 \\cdot (1 - 0{,}10) = 90 \\cdot 0{,}90 = 81$ euro.",
    "fonte": "Lotto M1 del progetto — M1-01 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 324,
    "materia": "Matematica",
    "domanda": "L’espressione $(2^5 \\cdot 4^{-2}) : 8^{-1}$ è uguale a:",
    "rispostaCorretta": "$16$",
    "risposteErrate": [
      "$4$",
      "$8$",
      "$32$",
      "$64$"
    ],
    "spiegazione": "Esprimiamo tutti i termini come potenze in base 2: $4^{-2} = (2^2)^{-2} = 2^{-4}$ e $8^{-1} = (2^3)^{-1} = 2^{-3}$. L’espressione diventa $(2^5 \\cdot 2^{-4}) : 2^{-3} = 2^{5 - 4} : 2^{-3} = 2^1 : 2^{-3} = 2^{1 - (-3)} = 2^4 = 16$.",
    "fonte": "Lotto M1 del progetto — M1-02 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 325,
    "materia": "Matematica",
    "domanda": "Semplificando $(2a - 3b)^2 - (2a + 3b)(2a - 3b)$ si ottiene:",
    "rispostaCorretta": "$18b^2 - 12ab$",
    "risposteErrate": [
      "$-12ab$",
      "$8a^2 - 12ab$",
      "$18b^2 + 12ab$",
      "$-18b^2 - 12ab$"
    ],
    "spiegazione": "Sviluppiamo il quadrato di binomio: $(2a - 3b)^2 = 4a^2 - 12ab + 9b^2$. Sviluppiamo il prodotto somma per differenza: $(2a + 3b)(2a - 3b) = 4a^2 - 9b^2$. Sottraendo le due espressioni: $(4a^2 - 12ab + 9b^2) - (4a^2 - 9b^2) = 4a^2 - 12ab + 9b^2 - 4a^2 + 9b^2 = 18b^2 - 12ab$.",
    "fonte": "Lotto M1 del progetto — M1-03 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 326,
    "materia": "Matematica",
    "domanda": "La soluzione dell’equazione $\\frac{3x - 1}{2} = 2x - 3$ è:",
    "rispostaCorretta": "$x = 5$",
    "risposteErrate": [
      "$x = -5$",
      "$x = 7$",
      "$x = \\frac{7}{4}$",
      "$x = \\frac{5}{7}$"
    ],
    "spiegazione": "Moltiplichiamo ambo i membri per 2: $3x - 1 = 2(2x - 3) \\implies 3x - 1 = 4x - 6 \\implies 4x - 3x = 6 - 1 \\implies x = 5$.",
    "fonte": "Lotto M1 del progetto — M1-04 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 327,
    "materia": "Matematica",
    "domanda": "Due tubi riempiono una vasca in 6 ore. Il primo da solo impiega 10 ore. Il secondo impiega:",
    "rispostaCorretta": "15 ore",
    "risposteErrate": [
      "4 ore",
      "8 ore",
      "12 ore",
      "16 ore"
    ],
    "spiegazione": "La portata congiunta è pari a $\\frac{1}{6}$ di vasca all’ora. Il primo tubo ha portata $\\frac{1}{10}$ di vasca all’ora. La portata del secondo tubo è data dalla differenza $\\frac{1}{6} - \\frac{1}{10} = \\frac{5 - 3}{30} = \\frac{2}{30} = \\frac{1}{15}$ di vasca all’ora. Il secondo tubo impiega quindi $15$ ore da solo.",
    "fonte": "Lotto M1 del progetto — M1-05 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 328,
    "materia": "Matematica",
    "domanda": "Scomponendo $x^3 - 2x^2 - 9x + 18$ in fattori irriducibili si ottiene:",
    "rispostaCorretta": "$(x - 2)(x - 3)(x + 3)$",
    "risposteErrate": [
      "$(x + 2)(x - 3)(x + 3)$",
      "$(x - 2)(x - 3)^2$",
      "$(x - 2)(x^2 + 9)$",
      "$(x + 2)(x - 9)(x + 1)$"
    ],
    "spiegazione": "Applichiamo il raccoglimento parziale a fattor comune: $x^3 - 2x^2 - 9x + 18 = x^2(x - 2) - 9(x - 2) = (x - 2)(x^2 - 9)$. Riconoscendo la differenza di quadrati $x^2 - 9 = (x - 3)(x + 3)$, la scomposizione completa è $(x - 2)(x - 3)(x + 3)$.",
    "fonte": "Lotto M1 del progetto — M1-06 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 329,
    "materia": "Matematica",
    "domanda": "L’espressione $\\sqrt{75} - \\sqrt{48} + \\sqrt{12}$ equivale a:",
    "rispostaCorretta": "$3\\sqrt{3}$",
    "risposteErrate": [
      "$\\sqrt{39}$",
      "$5\\sqrt{3}$",
      "$7\\sqrt{3}$",
      "$\\sqrt{3}$"
    ],
    "spiegazione": "Scomponiamo i radicandi estraendo i fattori quadrati perfetti: $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$, $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$, $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$. Quindi: $5\\sqrt{3} - 4\\sqrt{3} + 2\\sqrt{3} = (5 - 4 + 2)\\sqrt{3} = 3\\sqrt{3}$.",
    "fonte": "Lotto M1 del progetto — M1-07 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 330,
    "materia": "Matematica",
    "domanda": "Le radici reali dell’equazione $2x^2 - 5x = 0$ sono:",
    "rispostaCorretta": "$x_1 = 0$ e $x_2 = \\frac{5}{2}$",
    "risposteErrate": [
      "$x_1 = 0$ e $x_2 = -\\frac{5}{2}$",
      "$x_1 = 0$ e $x_2 = 5$",
      "L’unica radice è $x = \\frac{5}{2}$",
      "$x_1 = \\sqrt{\\frac{5}{2}}$ e $x_2 = -\\sqrt{\\frac{5}{2}}$"
    ],
    "spiegazione": "Si tratta di un’equazione di secondo grado spuria. Raccogliamo a fattor comune $x$: $x(2x - 5) = 0$. Per la legge di annullamento del prodotto, si ottiene $x_1 = 0$ oppure $2x - 5 = 0 \\implies x_2 = \\frac{5}{2}$.",
    "fonte": "Lotto M1 del progetto — M1-08 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 331,
    "materia": "Matematica",
    "domanda": "Semplificando l’espressione $(-2a^2 b)^3 : (4a^4 b^2)$ si ottiene:",
    "rispostaCorretta": "$-2a^2 b$",
    "risposteErrate": [
      "$2a^2 b$",
      "$-2ab$",
      "$-4a^2 b$",
      "$-2a^2 b^2$"
    ],
    "spiegazione": "Calcoliamo la potenza del monomo: $(-2a^2 b)^3 = (-2)^3 (a^2)^3 b^3 = -8a^6 b^3$. Eseguiamo la divisione per $4a^4 b^2$: $\\frac{-8a^6 b^3}{4a^4 b^2} = \\frac{-8}{4} a^{6-4} b^{3-2} = -2a^2 b$.",
    "fonte": "Lotto M1 del progetto — M1-09 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 332,
    "materia": "Matematica",
    "domanda": "Un bene costa 610 euro inclusa IVA al 22%. Il prezzo netto è:",
    "rispostaCorretta": "500 euro",
    "risposteErrate": [
      "475 euro e 80 centesimi",
      "488 euro",
      "510 euro",
      "520 euro"
    ],
    "spiegazione": "Indicando con $P$ il prezzo al netto dell’IVA, il prezzo lordo è dato da $P \\cdot (1 + 0{,}22) = 1{,}22 \\cdot P = 610$. Ricavando $P$: $P = \\frac{610}{1{,}22} = \\frac{61000}{122} = 500$ euro.",
    "fonte": "Lotto M1 del progetto — M1-10 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 333,
    "materia": "Matematica",
    "domanda": "Il valore numerico di $10{,}5^2 - 9{,}5^2$ è:",
    "rispostaCorretta": "$20$",
    "risposteErrate": [
      "$1$",
      "$10$",
      "$40$",
      "$2$"
    ],
    "spiegazione": "Utilizzando l’identità della differenza di quadrati $a^2 - b^2 = (a - b)(a + b)$ con $a = 10{,}5$ e $b = 9{,}5$: $(10{,}5 - 9{,}5)(10{,}5 + 9{,}5) = 1 \\cdot 20 = 20$.",
    "fonte": "Lotto M1 del progetto — M1-11 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 334,
    "materia": "Matematica",
    "domanda": "Semplificando $(2x^2 - 8)/(x^2 + 2x)$ per $x \\ne 0$ e $x \\ne -2$ si ottiene:",
    "rispostaCorretta": "$\\frac{2(x - 2)}{x}$",
    "risposteErrate": [
      "$\\frac{2(x + 2)}{x}$",
      "$\\frac{x - 2}{x}$",
      "$\\frac{2(x - 2)}{x + 2}$",
      "$2x - 4$"
    ],
    "spiegazione": "Scomponiamo numeratore e denominatore: al numeratore raccogliamo $2(x^2 - 4) = 2(x - 2)(x + 2)$; al denominatore raccogliamo $x(x + 2)$. Semplificando il fattore comune non nullo $(x + 2)$ per le condizioni di esistenza $x \\ne -2$ e $x \\ne 0$, otteniamo $\\frac{2(x - 2)}{x}$.",
    "fonte": "Lotto M1 del progetto — M1-12 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 335,
    "materia": "Matematica",
    "domanda": "L’insieme di tutte le soluzioni reali della disequazione $4(x - 1) - 3(2x + 1) \\ge 5$ è dato da:",
    "rispostaCorretta": "$x \\le -6$",
    "risposteErrate": [
      "$x \\ge -6$",
      "$x \\le 6$",
      "$x \\ge -3$",
      "$x \\le -3$"
    ],
    "spiegazione": "Svolgiamo i calcoli: $4x - 4 - 6x - 3 \\ge 5 \\implies -2x - 7 \\ge 5 \\implies -2x \\ge 12$. Dividendo entrambi i membri per $-2$ e invertendo il verso della disuguaglianza si ottiene $x \\le -6$.",
    "fonte": "Lotto M1 del progetto — M1-13 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 336,
    "materia": "Matematica",
    "domanda": "L’insieme delle soluzioni reali della disequazione fratta $\\frac{2x - 5}{3 - x} \\ge 0$ è:",
    "rispostaCorretta": "$\\frac{5}{2} \\le x < 3$",
    "risposteErrate": [
      "$\\frac{5}{2} \\le x \\le 3$",
      "$x \\le \\frac{5}{2}$ oppure $x > 3$",
      "$x < 3$",
      "$\\frac{5}{2} < x < 3$"
    ],
    "spiegazione": "Studiamo il segno di numeratore e denominatore. Numeratore: $2x - 5 \\ge 0 \\iff x \\ge \\frac{5}{2}$. Denominatore: $3 - x > 0 \\iff x < 3$ (strettamente maggiore di 0 per condizione di esistenza $x \\ne 3$). Il prodotto dei segni è positivo o nullo per $\\frac{5}{2} \\le x < 3$, con estremo $3$ escluso poiché annullerebbe il denominatore.",
    "fonte": "Lotto M1 del progetto — M1-14 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 337,
    "materia": "Matematica",
    "domanda": "Per quale valore del parametro reale $k$ la somma delle radici dell’equazione $2x^2 + (k - 3)x - 8 = 0$ è uguale a $-4$?",
    "rispostaCorretta": "$k = 11$",
    "risposteErrate": [
      "$k = -5$",
      "$k = 5$",
      "$k = -11$",
      "$k = 8$"
    ],
    "spiegazione": "In un’equazione di secondo grado $ax^2 + bx + c = 0$, la somma delle radici è data dalla relazione di Viète $x_1 + x_2 = -\\frac{b}{a}$. Nel nostro caso $a = 2$ e $b = k - 3$, quindi $-\\frac{k - 3}{2} = -4 \\implies \\frac{k - 3}{2} = 4 \\implies k - 3 = 8 \\implies k = 11$. Poiché per $k = 11$ il discriminante è $\\Delta = (8)^2 - 4(2)(-8) = 64 + 64 = 128 > 0$, le radici reali esistono e la loro somma è $-4$.",
    "fonte": "Lotto M1 del progetto — M1-15 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 338,
    "materia": "Matematica",
    "domanda": "In un bar, 3 caffè e 2 cornetti costano in totale 6,20 euro, mentre 2 caffè e 3 cornetti costano 6,80 euro. Quanto costa un singolo cornetto?",
    "rispostaCorretta": "1,60 euro",
    "risposteErrate": [
      "1,00 euro",
      "1,20 euro",
      "1,40 euro",
      "1,80 euro"
    ],
    "spiegazione": "Indichiamo con $c$ il prezzo del caffè e con $k$ il prezzo del cornetto. Impostiamo il sistema lineare: $\\begin{cases} 3c + 2k = 6{,}20 \\\\ 2c + 3k = 6{,}80 \\end{cases}$. Sottraendo la prima equazione dalla seconda: $(2c + 3k) - (3c + 2k) = 6{,}80 - 6{,}20 \\implies k - c = 0{,}60 \\implies c = k - 0{,}60$. Sostituendo nella prima: $3(k - 0{,}60) + 2k = 6{,}20 \\implies 3k - 1{,}80 + 2k = 6{,}20 \\implies 5k = 8{,}00 \\implies k = 1{,}60$ euro (e $c = 1{,}00$ euro).",
    "fonte": "Lotto M1 del progetto — M1-16 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 339,
    "materia": "Matematica",
    "domanda": "Qual è l’insieme delle soluzioni reali della disequazione quadratica $3x^2 - 5x - 2 \\le 0$?",
    "rispostaCorretta": "$-\\frac{1}{3} \\le x \\le 2$",
    "risposteErrate": [
      "$x \\le -\\frac{1}{3}$ oppure $x \\ge 2$",
      "$-2 \\le x \\le \\frac{1}{3}$",
      "$-\\frac{1}{3} < x < 2$",
      "$x \\le 2$"
    ],
    "spiegazione": "Troviamo le radici dell’equazione associata $3x^2 - 5x - 2 = 0$: $\\Delta = (-5)^2 - 4(3)(-2) = 25 + 24 = 49 = 7^2$. Le radici sono $x = \\frac{5 \\pm 7}{6}$, da cui $x_1 = -\\frac{2}{6} = -\\frac{1}{3}$ e $x_2 = \\frac{12}{6} = 2$. Poiché il coefficiente di $x^2$ è positivo ($a = 3 > 0$) e il verso è $\\le 0$, la disequazione è verificata per i valori interni all’intervallo delle radici: $-\\frac{1}{3} \\le x \\le 2$.",
    "fonte": "Lotto M1 del progetto — M1-17 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 340,
    "materia": "Matematica",
    "domanda": "Determinare tutte le soluzioni reali dell’equazione con valore assoluto $|2x - 3| = x + 1$ nell’insieme dei numeri reali:",
    "rispostaCorretta": "Due soluzioni: $x = 4$ e $x = \\frac{2}{3}$",
    "risposteErrate": [
      "Una sola soluzione: $x = 4$",
      "Una sola soluzione: $x = \\frac{2}{3}$",
      "Due soluzioni: $x = 4$ e $x = -4$",
      "Nessuna soluzione reale"
    ],
    "spiegazione": "L’equazione $|2x - 3| = x + 1$ richiede la condizione di esistenza/positività del secondo membro: $x + 1 \\ge 0 \\iff x \\ge -1$. Spezzando nei due casi: 1) $2x - 3 = x + 1 \\implies x = 4$ (accettabile, poiché $4 \\ge -1$); 2) $2x - 3 = -(x + 1) = -x - 1 \\implies 3x = 2 \\implies x = \\frac{2}{3}$ (accettabile, poiché $\\frac{2}{3} \\ge -1$). L’equazione ha quindi due soluzioni distinte: $x = 4$ e $x = \\frac{2}{3}$.",
    "fonte": "Lotto M1 del progetto — M1-18 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 341,
    "materia": "Matematica",
    "domanda": "Semplificando l’espressione $\\frac{1}{x - 2} - \\frac{4}{x^2 - 4}$ nel suo insieme di definizione si ottiene:",
    "rispostaCorretta": "$\\frac{1}{x + 2}$ con $x \\ne 2$ e $x \\ne -2$",
    "risposteErrate": [
      "$\\frac{1}{x + 2}$ con $x \\ne -2$",
      "$\\frac{x - 6}{x^2 - 4}$ con $x \\ne 2$ e $x \\ne -2$",
      "$\\frac{1}{x - 2}$ con $x \\ne 2$ e $x \\ne -2$",
      "$\\frac{3}{x^2 - 4}$ con $x \\ne 2$ e $x \\ne -2$"
    ],
    "spiegazione": "Scomponiamo il denominatore $x^2 - 4 = (x - 2)(x + 2)$. Le condizioni di esistenza dell’espressione originaria impongono $x \\ne 2$ e $x \\ne -2$. Il minimo comune denominatore è $(x - 2)(x + 2)$. Eseguiamo la sottrazione: $\\frac{1}{x - 2} - \\frac{4}{(x - 2)(x + 2)} = \\frac{1 \\cdot (x + 2) - 4}{(x - 2)(x + 2)} = \\frac{x - 2}{(x - 2)(x + 2)}$. Semplificando per il fattore non nullo $(x - 2)$, otteniamo $\\frac{1}{x + 2}$, mantenendo le condizioni di esistenza $x \\ne 2$ e $x \\ne -2$.",
    "fonte": "Lotto M1 del progetto — M1-19 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 342,
    "materia": "Matematica",
    "domanda": "Razionalizzando il denominatore della frazione $\\frac{4}{\\sqrt{5} + 1}$, quale espressione equivalente si ottiene?",
    "rispostaCorretta": "$\\sqrt{5} - 1$",
    "risposteErrate": [
      "$\\sqrt{5} + 1$",
      "$\\frac{\\sqrt{5} - 1}{4}$",
      "$2(\\sqrt{5} - 1)$",
      "$\\frac{2\\sqrt{5} - 2}{3}$"
    ],
    "spiegazione": "Moltiplichiamo numeratore e denominatore per il binomio coniugato $(\\sqrt{5} - 1)$: $\\frac{4}{\\sqrt{5} + 1} = \\frac{4(\\sqrt{5} - 1)}{(\\sqrt{5} + 1)(\\sqrt{5} - 1)} = \\frac{4(\\sqrt{5} - 1)}{(\\sqrt{5})^2 - 1^2} = \\frac{4(\\sqrt{5} - 1)}{5 - 1} = \\frac{4(\\sqrt{5} - 1)}{4} = \\sqrt{5} - 1$.",
    "fonte": "Lotto M1 del progetto — M1-20 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 343,
    "materia": "Matematica",
    "domanda": "Mescolando 200 grammi di una soluzione acquosa con concentrazione del 10% in massa di sale con 300 grammi di una soluzione al 20% in massa di sale, qual è la concentrazione percentuale in massa della miscela risultante?",
    "rispostaCorretta": "$16\\%$",
    "risposteErrate": [
      "$15\\%$",
      "$14\\%$",
      "$12\\%$",
      "$18\\%$"
    ],
    "spiegazione": "Calcoliamo la massa totale di sale disciolto: nella prima soluzione ci sono $200 \\cdot 0{,}10 = 20$ g di sale; nella seconda ci sono $300 \\cdot 0{,}20 = 60$ g di sale. La massa totale della miscela è $200 + 300 = 500$ g e il sale totale è $20 + 60 = 80$ g. La concentrazione percentuale in massa è data da $\\frac{80}{500} = \\frac{16}{100} = 16\\%$.",
    "fonte": "Lotto M1 del progetto — M1-21 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 344,
    "materia": "Matematica",
    "domanda": "In una biblioteca scolastica ci sono in totale 280 libri tra narrativa e saggistica. Se i libri di narrativa superano di 40 unità il triplo dei libri di saggistica, quanti sono i libri di narrativa?",
    "rispostaCorretta": "220",
    "risposteErrate": [
      "60",
      "180",
      "200",
      "240"
    ],
    "spiegazione": "Indichiamo con $N$ il numero di libri di narrativa e con $S$ il numero di libri di saggistica. Impostiamo il sistema lineare: $\\begin{cases} N + S = 280 \\\\ N = 3S + 40 \\end{cases}$. Sostituendo la seconda equazione nella prima: $(3S + 40) + S = 280 \\implies 4S + 40 = 280 \\implies 4S = 240 \\implies S = 60$. Ricaviamo quindi il numero di libri di narrativa: $N = 280 - 60 = 220$ (oppure $N = 3(60) + 40 = 180 + 40 = 220$).",
    "fonte": "Lotto M1 del progetto — M1-22 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 345,
    "materia": "Matematica",
    "domanda": "Qual è il numero complessivo di soluzioni reali distinte dell’equazione biquadratica $x^4 - 10x^2 + 9 = 0$?",
    "rispostaCorretta": "4 soluzioni",
    "risposteErrate": [
      "2 soluzioni",
      "3 soluzioni",
      "1 soluzione",
      "Nessuna soluzione reale"
    ],
    "spiegazione": "Poniamo $t = x^2$ con il vincolo $t \\ge 0$. L’equazione ausiliaria diventa $t^2 - 10t + 9 = 0$, le cui radici sono $t_1 = 1$ e $t_2 = 9$. Poiché entrambi i valori sono strettamente positivi, risostituendo $x^2 = 1 \\implies x = \\pm 1$ e $x^2 = 9 \\implies x = \\pm 3$. L’equazione ammette quindi 4 soluzioni reali distinte: $\\{-3, -1, 1, 3\\}$.",
    "fonte": "Lotto M1 del progetto — M1-23 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 346,
    "materia": "Matematica",
    "domanda": "Qual è l’insieme delle soluzioni reali del sistema di disequazioni lineari $\\begin{cases} 3x - 2 > 4 \\\\ 5 - 2x \\ge -1 \\end{cases}$?",
    "rispostaCorretta": "$2 < x \\le 3$",
    "risposteErrate": [
      "$x > 2$",
      "$x \\le 3$",
      "$2 \\le x \\le 3$",
      "Il sistema non ammette soluzioni"
    ],
    "spiegazione": "Risolviamo la prima disequazione: $3x - 2 > 4 \\implies 3x > 6 \\implies x > 2$. Risolviamo la seconda disequazione: $5 - 2x \\ge -1 \\implies -2x \\ge -6 \\implies x \\le 3$. L’insieme delle soluzioni del sistema è dato dall’intersezione dei due intervalli: $x > 2$ e $x \\le 3$, ovvero $2 < x \\le 3$.",
    "fonte": "Lotto M1 del progetto — M1-24 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 347,
    "materia": "Matematica",
    "domanda": "Qual è l’insieme di tutte le soluzioni reali della disequazione di terzo grado $x^3 - 3x^2 - 4x + 12 \\ge 0$?",
    "rispostaCorretta": "$-2 \\le x \\le 2$ oppure $x \\ge 3$",
    "risposteErrate": [
      "$x \\le -2$ oppure $2 \\le x \\le 3$",
      "$-2 \\le x \\le 3$",
      "$x \\ge 3$",
      "$x \\le 2$ oppure $x \\ge 3$"
    ],
    "spiegazione": "Scomponiamo il polinomio di terzo grado mediante raccoglimento parziale a fattor comune: $x^3 - 3x^2 - 4x + 12 = x^2(x - 3) - 4(x - 3) = (x - 3)(x^2 - 4) = (x - 3)(x - 2)(x + 2)$. La disequazione è quindi $(x + 2)(x - 2)(x - 3) \\ge 0$. Studiamo i segni dei singoli fattori: $(x + 2) \\ge 0 \\iff x \\ge -2$; $(x - 2) \\ge 0 \\iff x \\ge 2$; $(x - 3) \\ge 0 \\iff x \\ge 3$. Compilando la tabella dei segni: per $x < -2$ il prodotto è negativo; per $-2 \\le x \\le 2$ due fattori sono negativi e uno positivo, quindi il prodotto è $\\ge 0$; per $2 < x < 3$ un fattore è negativo e due positivi, quindi il prodotto è negativo; per $x \\ge 3$ tutti i tre fattori sono $\\ge 0$, quindi il prodotto è $\\ge 0$. L’insieme delle soluzioni è pertanto $[-2, 2] \\cup [3, +\\infty)$, ovvero $-2 \\le x \\le 2$ oppure $x \\ge 3$.",
    "fonte": "Lotto M1 del progetto — M1-25 (Aritmetica e algebra)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 348,
    "materia": "Matematica",
    "domanda": "Nel piano cartesiano, quali sono le coordinate del punto $P'$, simmetrico del punto $P(-3, 5)$ rispetto all’origine degli assi $O(0,0)$?",
    "rispostaCorretta": "$(3, -5)$",
    "risposteErrate": [
      "$(-3, -5)$",
      "$(3, 5)$",
      "$(5, -3)$",
      "$(-5, 3)$"
    ],
    "spiegazione": "La simmetria centrale rispetto all’origine degli assi cartesiani trasforma un generico punto di coordinate $(x, y)$ nel punto $(-x, -y)$. Applicando la trasformazione al punto $P(-3, 5)$, si ottiene $P'(-(-3), -5) = (3, -5)$.",
    "fonte": "Lotto M2 del progetto — M2-01 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 349,
    "materia": "Matematica",
    "domanda": "Qual è la distanza tra i punti $A(1, -2)$ e $B(4, 2)$ nel piano cartesiano?",
    "rispostaCorretta": "$5$",
    "risposteErrate": [
      "$\\sqrt{7}$",
      "$7$",
      "$\\sqrt{13}$",
      "$25$"
    ],
    "spiegazione": "La distanza euclidea tra due punti $A(x_A, y_A)$ e $B(x_B, y_B)$ è data dalla formula $d = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$. Sostituendo le coordinate di $A(1, -2)$ e $B(4, 2)$: $d = \\sqrt{(4 - 1)^2 + (2 - (-2))^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
    "fonte": "Lotto M2 del progetto — M2-02 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 350,
    "materia": "Matematica",
    "domanda": "Il punto medio del segmento $AB$ ha coordinate $M(2, 3)$. Se il punto $A$ ha coordinate $(-1, 7)$, quali sono le coordinate del punto $B$?",
    "rispostaCorretta": "$(5, -1)$",
    "risposteErrate": [
      "$(1/2, 5)$",
      "$(3, -4)$",
      "$(5, 1)$",
      "$(1, 10)$"
    ],
    "spiegazione": "Le formule del punto medio $M(x_M, y_M)$ di un segmento $AB$ sono $x_M = \\frac{x_A + x_B}{2}$ e $y_M = \\frac{y_A + y_B}{2}$. Ricavando le coordinate incognite di $B$: $x_B = 2x_M - x_A = 2(2) - (-1) = 4 + 1 = 5$ e $y_B = 2y_M - y_A = 2(3) - 7 = 6 - 7 = -1$. Il punto $B$ ha coordinate $(5, -1)$.",
    "fonte": "Lotto M2 del progetto — M2-03 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 351,
    "materia": "Matematica",
    "domanda": "Qual è il coefficiente angolare della retta passante per i punti $A(-2, 3)$ e $B(4, -1)$?",
    "rispostaCorretta": "$-\\frac{2}{3}$",
    "risposteErrate": [
      "$\\frac{2}{3}$",
      "$-\\frac{3}{2}$",
      "$\\frac{3}{2}$",
      "$-2$"
    ],
    "spiegazione": "Il coefficiente angolare $m$ della retta passante per due punti distinti $A(x_A, y_A)$ e $B(x_B, y_B)$ è dato dal rapporto $m = \\frac{y_B - y_A}{x_B - x_A}$. Sostituendo i valori: $m = \\frac{-1 - 3}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$.",
    "fonte": "Lotto M2 del progetto — M2-04 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 352,
    "materia": "Matematica",
    "domanda": "Qual è il coefficiente angolare della retta di equazione $3x + 2y - 7 = 0$?",
    "rispostaCorretta": "$-\\frac{3}{2}$",
    "risposteErrate": [
      "$\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$-3$"
    ],
    "spiegazione": "Per una retta espressa in forma implicita $ax + by + c = 0$, il coefficiente angolare è dato da $m = -\\frac{a}{b}$. Nel caso dell’equazione $3x + 2y - 7 = 0$, si ha $a = 3$ e $b = 2$, da cui $m = -\\frac{3}{2}$.",
    "fonte": "Lotto M2 del progetto — M2-05 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 353,
    "materia": "Matematica",
    "domanda": "Per quale valore del parametro reale $k$ il punto $P(k, 3)$ appartiene alla retta di equazione $2x - 5y + 7 = 0$?",
    "rispostaCorretta": "$k = 4$",
    "risposteErrate": [
      "$k = -4$",
      "$k = 11$",
      "$k = -11$",
      "$k = 1$"
    ],
    "spiegazione": "Un punto appartiene a una retta se e solo se le sue coordinate soddisfano l’equazione della retta. Sostituendo $x = k$ e $y = 3$ nell’equazione $2x - 5y + 7 = 0$: $2k - 5(3) + 7 = 0 \\implies 2k - 15 + 7 = 0 \\implies 2k - 8 = 0 \\implies 2k = 8 \\implies k = 4$.",
    "fonte": "Lotto M2 del progetto — M2-06 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 354,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione della retta parallela all’asse delle ascisse passante per il punto $P(-4, 6)$?",
    "rispostaCorretta": "$y = 6$",
    "risposteErrate": [
      "$x = -4$",
      "$y = -4$",
      "$x = 6$",
      "$6x - 4y = 0$"
    ],
    "spiegazione": "L’asse delle ascisse (asse $x$) ha equazione $y = 0$. Tutte le rette parallele all’asse $x$ sono orizzontali e hanno equazione del tipo $y = c$, dove $c$ è una costante reale. Poiché la retta deve passare per il punto $P(-4, 6)$, la sua ordinata è costante e pari a $6$, per cui l’equazione cercata è $y = 6$.",
    "fonte": "Lotto M2 del progetto — M2-07 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 355,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione della retta parallela alla retta $y = 3x - 1$ e passante per il punto $A(2, 1)$?",
    "rispostaCorretta": "$y = 3x - 5$",
    "risposteErrate": [
      "$y = 3x + 5$",
      "$y = -\\frac{1}{3}x + \\frac{5}{3}$",
      "$y = 3x - 1$",
      "$y = 3x - 7$"
    ],
    "spiegazione": "Due rette sono parallele se e solo se hanno lo stesso coefficiente angolare. La retta data ha $m = 3$. La retta cercata passa per il punto $A(2, 1)$ con pendenza $m = 3$: $y - 1 = 3(x - 2) \\implies y - 1 = 3x - 6 \\implies y = 3x - 5$.",
    "fonte": "Lotto M2 del progetto — M2-08 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 356,
    "materia": "Matematica",
    "domanda": "Qual è il coefficiente angolare di una qualsiasi retta perpendicolare alla retta di equazione $4x - 2y + 5 = 0$?",
    "rispostaCorretta": "$-\\frac{1}{2}$",
    "risposteErrate": [
      "$\\frac{1}{2}$",
      "$-2$",
      "$2$",
      "$-\\frac{2}{5}$"
    ],
    "spiegazione": "Esplicitiamo l’equazione della retta data rispetto a $y$: $2y = 4x + 5 \\implies y = 2x + \\frac{5}{2}$, da cui il coefficiente angolare è $m_1 = 2$. La condizione di perpendicolarità tra due rette nel piano cartesiano impone che il prodotto dei coefficienti angolari sia uguale a $-1$: $m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1} = -\\frac{1}{2}$.",
    "fonte": "Lotto M2 del progetto — M2-09 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 357,
    "materia": "Matematica",
    "domanda": "In quali punti la retta di equazione $3x - 4y + 12 = 0$ interseca rispettivamente l’asse delle ascisse e l’asse delle ordinate?",
    "rispostaCorretta": "$(-4, 0)$ e $(0, 3)$",
    "risposteErrate": [
      "$(4, 0)$ e $(0, -3)$",
      "$(0, -4)$ e $(3, 0)$",
      "$(-4, 0)$ e $(0, -3)$",
      "$(4, 0)$ e $(0, 3)$"
    ],
    "spiegazione": "Per trovare l’intersezione con l’asse delle ascisse poniamo $y = 0$: $3x + 12 = 0 \\implies x = -4$, ottenendo il punto $(-4, 0)$. Per l’intersezione con l’asse delle ordinate poniamo $x = 0$: $-4y + 12 = 0 \\implies y = 3$, ottenendo il punto $(0, 3)$. I punti cercati sono $(-4, 0)$ e $(0, 3)$.",
    "fonte": "Lotto M2 del progetto — M2-10 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 358,
    "materia": "Matematica",
    "domanda": "Quali sono le coordinate del centro $C$ e la misura del raggio $R$ della circonferenza di equazione $(x - 3)^2 + (y + 2)^2 = 16$?",
    "rispostaCorretta": "$C(3, -2)$ e $R = 4$",
    "risposteErrate": [
      "$C(-3, 2)$ e $R = 4$",
      "$C(3, -2)$ e $R = 16$",
      "$C(-3, 2)$ e $R = 16$",
      "$C(3, 2)$ e $R = 4$"
    ],
    "spiegazione": "L’equazione canonica della circonferenza con centro $C(x_0, y_0)$ e raggio $R$ è $(x - x_0)^2 + (y - y_0)^2 = R^2$. Confrontando con $(x - 3)^2 + (y + 2)^2 = 16$: $x_0 = 3$, $y_0 = -2$ e $R = \\sqrt{16} = 4$. Il centro è $C(3, -2)$ e il raggio è $R = 4$.",
    "fonte": "Lotto M2 del progetto — M2-11 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 359,
    "materia": "Matematica",
    "domanda": "Quali sono le coordinate del vertice $V$ della parabola di equazione $y = x^2 - 4x + 1$?",
    "rispostaCorretta": "$V(2, -3)$",
    "risposteErrate": [
      "$V(-2, 13)$",
      "$V(2, 3)$",
      "$V(4, 1)$",
      "$V(2, -4)$"
    ],
    "spiegazione": "L’ascissa del vertice di una parabola con asse verticale $y = ax^2 + bx + c$ è data da $x_V = -\\frac{b}{2a}$. Per l’equazione $y = x^2 - 4x + 1$, con $a = 1$ e $b = -4$, si ha $x_V = -\\frac{-4}{2(1)} = 2$. Sostituendo $x = 2$ nell’equazione della parabola otteniamo l’ordinata: $y_V = (2)^2 - 4(2) + 1 = 4 - 8 + 1 = -3$. Il vertice è $V(2, -3)$.",
    "fonte": "Lotto M2 del progetto — M2-12 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 360,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione della retta passante per i punti $A(1, 4)$ e $B(3, -2)$ nel piano cartesiano?",
    "rispostaCorretta": "$y = -3x + 7$",
    "risposteErrate": [
      "$y = -3x + 1$",
      "$y = 3x + 1$",
      "$y = -\\frac{1}{3}x + \\frac{13}{3}$",
      "$y = -3x + 10$"
    ],
    "spiegazione": "Calcoliamo innanzitutto il coefficiente angolare della retta: $m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{-2 - 4}{3 - 1} = \\frac{-6}{2} = -3$. Utilizzando l’equazione del fascio per il punto $A(1, 4)$: $y - 4 = -3(x - 1) \\implies y - 4 = -3x + 3 \\implies y = -3x + 7$.",
    "fonte": "Lotto M2 del progetto — M2-13 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 361,
    "materia": "Matematica",
    "domanda": "Qual è il punto di intersezione $P$ tra le rette di equazione $2x - y - 1 = 0$ e $x + 2y - 8 = 0$ nel piano cartesiano?",
    "rispostaCorretta": "$(2, 3)$",
    "risposteErrate": [
      "$(3, 2)$",
      "$(2, -3)$",
      "$(1, 1)$",
      "$(4, 2)$"
    ],
    "spiegazione": "Il punto di intersezione è la soluzione del sistema lineare formato dalle due equazioni: $\\begin{cases} 2x - y = 1 \\\\ x + 2y = 8 \\end{cases}$. Dalla prima equazione ricaviamo $y = 2x - 1$ e la sostituiamo nella seconda: $x + 2(2x - 1) = 8 \\implies x + 4x - 2 = 8 \\implies 5x = 10 \\implies x = 2$. Sostituendo $x = 2$ nell’espressione di $y$: $y = 2(2) - 1 = 3$. Il punto di intersezione è $(2, 3)$.",
    "fonte": "Lotto M2 del progetto — M2-14 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 362,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione dell’asse del segmento avente per estremi i punti $A(-1, 2)$ e $B(3, 4)$ nel piano cartesiano?",
    "rispostaCorretta": "$y = -2x + 5$",
    "risposteErrate": [
      "$y = -2x + 1$",
      "$y = \\frac{1}{2}x + \\frac{5}{2}$",
      "$y = 2x + 1$",
      "$y = -2x - 5$"
    ],
    "spiegazione": "L’asse di un segmento è la retta perpendicolare al segmento passante per il suo punto medio $M$. Il punto medio di $AB$ è $M\\left(\\frac{-1 + 3}{2}, \\frac{2 + 4}{2}\\right) = (1, 3)$. Il coefficiente angolare della retta $AB$ è $m_{AB} = \\frac{4 - 2}{3 - (-1)} = \\frac{2}{4} = \\frac{1}{2}$. Il coefficiente angolare della retta perpendicolare è $m = -\\frac{1}{m_{AB}} = -2$. L’equazione dell’asse è: $y - 3 = -2(x - 1) \\implies y - 3 = -2x + 2 \\implies y = -2x + 5$.",
    "fonte": "Lotto M2 del progetto — M2-15 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 363,
    "materia": "Matematica",
    "domanda": "Qual è la distanza del punto $P(2, -1)$ dalla retta di equazione $3x - 4y + 5 = 0$ nel piano cartesiano?",
    "rispostaCorretta": "$3$",
    "risposteErrate": [
      "$\\frac{7}{5}$",
      "$5$",
      "$\\frac{15}{25}$",
      "$15$"
    ],
    "spiegazione": "La distanza di un punto $P(x_0, y_0)$ da una retta $ax + by + c = 0$ è data da $d = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$. Sostituendo i valori: $d = \\frac{|3(2) - 4(-1) + 5|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 + 4 + 5|}{\\sqrt{9 + 16}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3$.",
    "fonte": "Lotto M2 del progetto — M2-16 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 364,
    "materia": "Matematica",
    "domanda": "I vertici di un triangolo nel piano cartesiano sono $A(0, 0)$, $B(6, 0)$ e $C(2, 4)$. Qual è l’area del triangolo?",
    "rispostaCorretta": "$12$",
    "risposteErrate": [
      "$24$",
      "$8$",
      "$6$",
      "$16$"
    ],
    "spiegazione": "I vertici $A(0,0)$ e $B(6,0)$ appartengono entrambi all’asse delle ascisse, pertanto il segmento $AB$ può essere assunto come base del triangolo, di lunghezza $b = 6 - 0 = 6$. L’altezza relativa a tale base è data dal valore assoluto dell’ordinata del terzo vertice $C(2, 4)$, ovvero $h = 4$. L’area del triangolo è: $\\text{Area} = \\frac{b \\cdot h}{2} = \\frac{6 \\cdot 4}{2} = 12$.",
    "fonte": "Lotto M2 del progetto — M2-17 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 365,
    "materia": "Matematica",
    "domanda": "Quali sono le coordinate del centro $C$ e la misura del raggio $R$ della circonferenza di equazione $x^2 + y^2 - 6x + 4y - 12 = 0$?",
    "rispostaCorretta": "$C(3, -2)$ e $R = 5$",
    "risposteErrate": [
      "$C(-3, 2)$ e $R = 5$",
      "$C(3, -2)$ e $R = 25$",
      "$C(3, -2)$ e $R = \\sqrt{12}$",
      "$C(-6, 4)$ e $R = 5$"
    ],
    "spiegazione": "Dall’equazione generale $x^2 + y^2 + ax + by + c = 0$, le coordinate del centro sono $x_C = -\\frac{a}{2} = -\\frac{-6}{2} = 3$ e $y_C = -\\frac{b}{2} = -\\frac{4}{2} = -2$, quindi $C(3, -2)$. Il raggio è dato da $R = \\sqrt{x_C^2 + y_C^2 - c} = \\sqrt{3^2 + (-2)^2 - (-12)} = \\sqrt{9 + 4 + 12} = \\sqrt{25} = 5$.",
    "fonte": "Lotto M2 del progetto — M2-18 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 366,
    "materia": "Matematica",
    "domanda": "Qual è la posizione reciproca della retta $x = 4$ rispetto alla circonferenza di equazione $x^2 + y^2 = 25$ nel piano cartesiano?",
    "rispostaCorretta": "La retta è secante e interseca la circonferenza in due punti distinti",
    "risposteErrate": [
      "La retta è tangente alla circonferenza in un solo punto",
      "La retta è esterna alla circonferenza e non ha punti in comune",
      "La retta passa per il centro della circonferenza",
      "La retta coincide con il diametro orizzontale"
    ],
    "spiegazione": "La circonferenza $x^2 + y^2 = 25$ ha centro nell’origine $O(0,0)$ e raggio $R = \\sqrt{25} = 5$. La retta verticale $x = 4$ dista $d = 4$ dall’origine. Essendo $d < R$ ($4 < 5$), la distanza del centro dalla retta è strettamente minore del raggio, per cui la retta è secante e interseca la circonferenza in due punti reali e distinti: $(4, 3)$ e $(4, -3)$.",
    "fonte": "Lotto M2 del progetto — M2-19 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 367,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione della circonferenza avente centro nel punto $C(2, -3)$ e passante per l’origine degli assi $O(0,0)$?",
    "rispostaCorretta": "$x^2 + y^2 - 4x + 6y = 0$",
    "risposteErrate": [
      "$x^2 + y^2 + 4x - 6y = 0$",
      "$x^2 + y^2 - 4x + 6y + 13 = 0$",
      "$x^2 + y^2 - 2x + 3y = 0$",
      "$x^2 + y^2 - 4x + 6y - 13 = 0$"
    ],
    "spiegazione": "Poiché la circonferenza passa per l’origine $O(0,0)$, il raggio al quadrato coincide con la distanza al quadrato tra il centro $C(2, -3)$ e l’origine: $R^2 = 2^2 + (-3)^2 = 4 + 9 = 13$. L’equazione è $(x - 2)^2 + (y + 3)^2 = 13$. Sviluppando i quadrati: $x^2 - 4x + 4 + y^2 + 6y + 9 = 13 \\implies x^2 + y^2 - 4x + 6y = 0$.",
    "fonte": "Lotto M2 del progetto — M2-20 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 368,
    "materia": "Matematica",
    "domanda": "In quanti punti distinti la retta $y = 2x - 1$ interseca la parabola $y = x^2 - x + 1$ nel piano cartesiano?",
    "rispostaCorretta": "In 2 punti distinti",
    "risposteErrate": [
      "In 1 solo punto (tangente)",
      "In nessun punto (esterna)",
      "In 3 punti",
      "In infiniti punti"
    ],
    "spiegazione": "Per determinare i punti di intersezione impostiamo l’equazione risolvente uguagliando le espressioni di $y$: $x^2 - x + 1 = 2x - 1 \\implies x^2 - 3x + 2 = 0$. Il discriminante dell’equazione quadratica è $\\Delta = (-3)^2 - 4(1)(2) = 9 - 8 = 1 > 0$. Poiché $\\Delta > 0$, l’equazione ammette due soluzioni reali e distinte ($x = 1$ e $x = 2$), a cui corrispondono due punti di intersezione distinti: $(1, 1)$ e $(2, 3)$.",
    "fonte": "Lotto M2 del progetto — M2-21 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 369,
    "materia": "Matematica",
    "domanda": "Qual è l’equazione dell’asse di simmetria della parabola di equazione $y = -2x^2 + 8x - 5$?",
    "rispostaCorretta": "$x = 2$",
    "risposteErrate": [
      "$x = -2$",
      "$x = 4$",
      "$y = 2$",
      "$y = 3$"
    ],
    "spiegazione": "L’asse di simmetria di una parabola con asse verticale di equazione $y = ax^2 + bx + c$ è la retta verticale passante per il vertice, avente equazione $x = -\\frac{b}{2a}$. Nel nostro caso $a = -2$ e $b = 8$, quindi $x = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$.",
    "fonte": "Lotto M2 del progetto — M2-22 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 370,
    "materia": "Matematica",
    "domanda": "Nel fascio di rette di equazione $(k + 1)x + (2k - 1)y - 5 = 0$, quale retta si ottiene per il valore del parametro $k$ tale che la retta sia parallela all’asse delle ascisse?",
    "rispostaCorretta": "$y = -\\frac{5}{3}$",
    "risposteErrate": [
      "$y = \\frac{5}{3}$",
      "$x = 5$",
      "$x = \\frac{10}{3}$",
      "$y = -5$"
    ],
    "spiegazione": "Una retta del fascio è parallela all’asse delle ascisse (orizzontale) se e solo se il coefficiente di $x$ si annulla: $k + 1 = 0 \\implies k = -1$. Sostituendo $k = -1$ nell’equazione del fascio: $0 \\cdot x + (2(-1) - 1)y - 5 = 0 \\implies -3y - 5 = 0 \\implies -3y = 5 \\implies y = -\\frac{5}{3}$.",
    "fonte": "Lotto M2 del progetto — M2-23 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 371,
    "materia": "Matematica",
    "domanda": "Quali sono le coordinate dei fuochi dell’ellisse di equazione $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ nel piano cartesiano?",
    "rispostaCorretta": "$F_1(-4, 0)$ e $F_2(4, 0)$",
    "risposteErrate": [
      "$F_1(0, -4)$ e $F_2(0, 4)$",
      "$F_1(-\\sqrt{34}, 0)$ e $F_2(\\sqrt{34}, 0)$",
      "$F_1(-5, 0)$ e $F_2(5, 0)$",
      "$F_1(-2, 0)$ e $F_2(2, 0)$"
    ],
    "spiegazione": "L’equazione canonica dell’ellisse è $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Qui $a^2 = 25$ e $b^2 = 9$. Essendo $a > b$, i fuochi si trovano sull’asse delle ascisse nei punti $(\\pm c, 0)$. La semidistanza focale $c$ è data da $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. I fuochi dell’ellisse sono quindi $F_1(-4, 0)$ e $F_2(4, 0)$.",
    "fonte": "Lotto M2 del progetto — M2-24 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    "id": 372,
    "materia": "Matematica",
    "domanda": "La parabola $y = 4 - x^2$ interseca l’asse delle ascisse nei punti $A$ e $B$ e ha vertice nel punto $V$. Qual è l’area del triangolo $ABV$ nel piano cartesiano?",
    "rispostaCorretta": "$8$",
    "risposteErrate": [
      "$16$",
      "$4$",
      "$\\frac{32}{3}$",
      "$12$"
    ],
    "spiegazione": "Troviamo innanzitutto i punti di intersezione con l’asse delle ascisse ($y = 0$): $4 - x^2 = 0 \\implies x = \\pm 2$, quindi $A(-2, 0)$ e $B(2, 0)$. La lunghezza della base $AB$ è $b = 2 - (-2) = 4$. Il vertice della parabola è $V(0, 4)$, per cui l’altezza relativa alla base $AB$ (che giace sull’asse $x$) è l’ordinata del vertice $h = 4$. L’area del triangolo $ABV$ è data da: $\\text{Area} = \\frac{b \\cdot h}{2} = \\frac{4 \\cdot 4}{2} = 8$.",
    "fonte": "Lotto M2 del progetto — M2-25 (Geometria analitica)",
    "numeroVolteProposta": 0,
    "numeroRisposteCorrette": 0,
    "numeroRisposteErrate": 0
  },
  {
    id: 373,
    materia: "Matematica",
    domanda: "A quanti radianti corrisponde un angolo di ampiezza pari a $150^\\circ$?",
    rispostaCorretta: "$\\frac{5}{6}\\pi$",
    risposteErrate: [
      "$\\frac{2}{3}\\pi$",
      "$\\frac{3}{4}\\pi$",
      "$\\frac{7}{6}\\pi$",
      "$\\frac{5}{3}\\pi$"
    ],
    spiegazione: "Per convertire un angolo da gradi sessagesimali $\\alpha^\\circ$ a radianti si moltiplica per $\\frac{\\pi}{180^\\circ}$: $\\alpha_{\\text{rad}} = 150^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{150}{180}\\pi = \\frac{5}{6}\\pi$.",
    fonte: "Lotto M3 del progetto — M3-01 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 374,
    materia: "Matematica",
    domanda: "Qual è il valore numerico dell’espressione $\\sin\\left(\\frac{\\pi}{3}\\right) + \\cos\\left(\\frac{\\pi}{6}\\right)$?",
    rispostaCorretta: "$\\sqrt{3}$",
    risposteErrate: [
      "$1$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\sqrt{2}$",
      "$2\\sqrt{3}$"
    ],
    spiegazione: "I valori notevoli per gli angoli fondamentali sono $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$ e $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$. Sommando i due termini si ottiene: $\\sin\\left(\\frac{\\pi}{3}\\right) + \\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} = \\sqrt{3}$.",
    fonte: "Lotto M3 del progetto — M3-02 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 375,
    materia: "Matematica",
    domanda: "Se $\\alpha$ è un angolo appartenente al secondo quadrante ($\\frac{\\pi}{2} < \\alpha < \\pi$), quali sono i segni rispettivi di $\\sin\\alpha$, $\\cos\\alpha$ e $\\tan\\alpha$?",
    rispostaCorretta: "$\\sin\\alpha > 0$, $\\cos\\alpha < 0$, $\\tan\\alpha < 0$",
    risposteErrate: [
      "$\\sin\\alpha < 0$, $\\cos\\alpha > 0$, $\\tan\\alpha < 0$",
      "$\\sin\\alpha > 0$, $\\cos\\alpha > 0$, $\\tan\\alpha > 0$",
      "$\\sin\\alpha < 0$, $\\cos\\alpha < 0$, $\\tan\\alpha > 0$",
      "$\\sin\\alpha > 0$, $\\cos\\alpha < 0$, $\\tan\\alpha > 0$"
    ],
    spiegazione: "Nel secondo quadrante del piano cartesiano ($\\frac{\\pi}{2} < \\alpha < \\pi$), i punti sulla circonferenza goniometrica hanno ordinata positiva ($y > 0$) e ascissa negativa ($x < 0$). Di conseguenza, $\\sin\\alpha > 0$, $\\cos\\alpha < 0$ e $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} < 0$.",
    fonte: "Lotto M3 del progetto — M3-03 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 376,
    materia: "Matematica",
    domanda: "Sapendo che $\\cos x = -\\frac{3}{5}$ e che $\\pi < x < \\frac{3}{2}\\pi$ (terzo quadrante), qual è il valore di $\\sin x$?",
    rispostaCorretta: "$-\\frac{4}{5}$",
    risposteErrate: [
      "$\\frac{4}{5}$",
      "$-\\frac{2}{5}$",
      "$\\frac{2}{5}$",
      "$-\\frac{16}{25}$"
    ],
    spiegazione: "Dalla prima relazione fondamentale $\\sin^2 x + \\cos^2 x = 1$, ricaviamo $\\sin^2 x = 1 - \\cos^2 x = 1 - \\left(-\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$. Poiché $x$ appartiene al terzo quadrante ($\\pi < x < \\frac{3}{2}\\pi$), il seno è strettamente negativo, per cui $\\sin x = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$.",
    fonte: "Lotto M3 del progetto — M3-04 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 377,
    materia: "Matematica",
    domanda: "A quale espressione equivale $\\cos(\\pi - x)$ per ogni valore reale di $x$?",
    rispostaCorretta: "$-\\cos x$",
    risposteErrate: [
      "$\\cos x$",
      "$-\\sin x$",
      "$\\sin x$",
      "$1 - \\cos x$"
    ],
    spiegazione: "Gli angoli $x$ e $\\pi - x$ sono supplementari. Sulla circonferenza goniometrica, i punti corrispondenti hanno la stessa ordinata e ascisse opposte, per cui $\\cos(\\pi - x) = -\\cos x$ e $\\sin(\\pi - x) = \\sin x$.",
    fonte: "Lotto M3 del progetto — M3-05 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 378,
    materia: "Matematica",
    domanda: "Quante soluzioni ammette l’equazione $\\sin x = \\frac{1}{2}$ nell’intervallo $[0, 2\\pi)$?",
    rispostaCorretta: "Esattamente 2 soluzioni",
    risposteErrate: [
      "Esattamente 1 soluzione",
      "Esattamente 4 soluzioni",
      "Nessuna soluzione",
      "Infinite soluzioni"
    ],
    spiegazione: "Sulla circonferenza goniometrica, la retta orizzontale $y = \\frac{1}{2}$ interseca la circonferenza in due punti nel primo giro $[0, 2\\pi)$, corrispondenti agli angoli $x = \\frac{\\pi}{6}$ (nel primo quadrante) e $x = \\frac{5}{6}\\pi$ (nel secondo quadrante). L’equazione ammette quindi esattamente 2 soluzioni nell’intervallo considerato.",
    fonte: "Lotto M3 del progetto — M3-06 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 379,
    materia: "Matematica",
    domanda: "In un triangolo rettangolo, l’ipotenusa misura $10\\text{ cm}$ e uno degli angoli acuti misura $30^\\circ$. Quanto misura il cateto opposto a tale angolo?",
    rispostaCorretta: "$5\\text{ cm}$",
    risposteErrate: [
      "$5\\sqrt{3}\\text{ cm}$",
      "$5\\sqrt{2}\\text{ cm}$",
      "$20\\text{ cm}$",
      "$\\frac{10}{3}\\text{ cm}$"
    ],
    spiegazione: "In un triangolo rettangolo, la lunghezza di un cateto è uguale al prodotto della lunghezza dell’ipotenusa per il seno dell’angolo opposto: $a = c \\cdot \\sin(30^\\circ) = 10 \\cdot \\frac{1}{2} = 5\\text{ cm}$.",
    fonte: "Lotto M3 del progetto — M3-07 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 380,
    materia: "Matematica",
    domanda: "A quale espressione equivale $\\sin\\left(\\frac{\\pi}{2} - x\\right)$ per ogni $x \\in \\mathbb{R}$?",
    rispostaCorretta: "$\\cos x$",
    risposteErrate: [
      "$-\\cos x$",
      "$\\sin x$",
      "$-\\sin x$",
      "$1 - \\sin x$"
    ],
    spiegazione: "Gli angoli $x$ e $\\frac{\\pi}{2} - x$ sono complementari. Dalle relazioni degli angoli associati complementari si ha $\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$ e $\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x$.",
    fonte: "Lotto M3 del progetto — M3-08 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 381,
    materia: "Matematica",
    domanda: "Sapendo che per un angolo $\\alpha$ si ha $\\sin\\alpha = \\frac{4}{5}$ e $\\cos\\alpha = -\\frac{3}{5}$, quanto vale $\\tan\\alpha$?",
    rispostaCorretta: "$-\\frac{4}{3}$",
    risposteErrate: [
      "$\\frac{4}{3}$",
      "$-\\frac{3}{4}$",
      "$\\frac{3}{4}$",
      "$-\\frac{7}{5}$"
    ],
    spiegazione: "La seconda relazione fondamentale della goniometria definisce la tangente come rapporto tra seno e coseno: $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$.",
    fonte: "Lotto M3 del progetto — M3-09 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 382,
    materia: "Matematica",
    domanda: "Qual è il periodo fondamentale $T$ della funzione $f(x) = \\cos(3x)$?",
    rispostaCorretta: "$\\frac{2}{3}\\pi$",
    risposteErrate: [
      "$6\\pi$",
      "$3\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{3}$"
    ],
    spiegazione: "La funzione coseno $\\cos(\\omega x)$ ha periodo fondamentale dato da $T = \\frac{2\\pi}{\\omega}$. Per la funzione $f(x) = \\cos(3x)$, con $\\omega = 3$, si ottiene $T = \\frac{2\\pi}{3}$.",
    fonte: "Lotto M3 del progetto — M3-10 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 383,
    materia: "Matematica",
    domanda: "Per quale dei seguenti valori dell’angolo $x \\in [0, \\pi)$ la funzione $\\tan x$ non è definita?",
    rispostaCorretta: "$x = \\frac{\\pi}{2}$",
    risposteErrate: [
      "$x = 0$",
      "$x = \\frac{\\pi}{4}$",
      "$x = \\frac{\\pi}{3}$",
      "$x = \\frac{3}{4}\\pi$"
    ],
    spiegazione: "La funzione tangente $\\tan x = \\frac{\\sin x}{\\cos x}$ è definita per tutti i valori reali di $x$ in cui il denominatore non si annulla, ossia per $x \\ne \\frac{\\pi}{2} + k\\pi$ con $k \\in \\mathbb{Z}$. Nell’intervallo $[0, \\pi)$, l’unico valore escluso è $x = \\frac{\\pi}{2}$ (pari a $90^\\circ$).",
    fonte: "Lotto M3 del progetto — M3-11 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 384,
    materia: "Matematica",
    domanda: "Semplificando l’espressione $\\frac{1 - \\sin^2 x}{\\cos x}$ per tutti i valori di $x$ in cui $\\cos x \\ne 0$, si ottiene:",
    rispostaCorretta: "$\\cos x$",
    risposteErrate: [
      "$\\sin x$",
      "$\\frac{1}{\\cos x}$",
      "$1$",
      "$\\tan x$"
    ],
    spiegazione: "Dalla prima relazione fondamentale della goniometria $\\sin^2 x + \\cos^2 x = 1$, si ha $1 - \\sin^2 x = \\cos^2 x$. Sostituendo al numeratore: $\\frac{1 - \\sin^2 x}{\\cos x} = \\frac{\\cos^2 x}{\\cos x} = \\cos x$.",
    fonte: "Lotto M3 del progetto — M3-12 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 385,
    materia: "Matematica",
    domanda: "Se per un angolo acuto $x \\in \\left(0, \\frac{\\pi}{2}\\right)$ si ha $\\sin x = \\frac{3}{5}$, quanto vale $\\sin(2x)$?",
    rispostaCorretta: "$\\frac{24}{25}$",
    risposteErrate: [
      "$\\frac{6}{5}$",
      "$\\frac{12}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{16}{25}$"
    ],
    spiegazione: "Poiché $x$ è un angolo acuto, $\\cos x = \\sqrt{1 - \\sin^2 x} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$. Applicando la formula di duplicazione del seno: $\\sin(2x) = 2\\sin x \\cos x = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$.",
    fonte: "Lotto M3 del progetto — M3-13 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 386,
    materia: "Matematica",
    domanda: "Se $\\cos x = \\frac{1}{3}$, qual è il valore di $\\cos(2x)$?",
    rispostaCorretta: "$-\\frac{7}{9}$",
    risposteErrate: [
      "$\\frac{7}{9}$",
      "$\\frac{2}{3}$",
      "$-\\frac{8}{9}$",
      "$\\frac{1}{9}$"
    ],
    spiegazione: "Dalla formula di duplicazione del coseno $\\cos(2x) = 2\\cos^2 x - 1$, sostituendo $\\cos x = \\frac{1}{3}$: $\\cos(2x) = 2\\left(\\frac{1}{3}\\right)^2 - 1 = 2 \\cdot \\frac{1}{9} - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$.",
    fonte: "Lotto M3 del progetto — M3-14 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 387,
    materia: "Matematica",
    domanda: "Quali sono tutte le soluzioni dell’equazione $2\\cos^2 x - \\cos x = 0$ nell’intervallo $[0, 2\\pi)$?",
    rispostaCorretta: "$x = \\frac{\\pi}{3},\\ \\frac{\\pi}{2},\\ \\frac{3}{2}\\pi,\\ \\frac{5}{3}\\pi$",
    risposteErrate: [
      "$x = \\frac{\\pi}{3},\\ \\frac{5}{3}\\pi$",
      "$x = \\frac{\\pi}{2},\\ \\frac{3}{2}\\pi$",
      "$x = \\frac{\\pi}{6},\\ \\frac{\\pi}{2},\\ \\frac{3}{2}\\pi,\\ \\frac{11}{6}\\pi$",
      "$x = 0,\\ \\frac{\\pi}{3},\\ \\pi,\\ \\frac{5}{3}\\pi$"
    ],
    spiegazione: "Raccogliamo a fattor comune $\\cos x$: $\\cos x (2\\cos x - 1) = 0$. Per la legge di annullamento del prodotto abbiamo due casi: 1) $\\cos x = 0 \\implies x = \\frac{\\pi}{2}$ e $x = \\frac{3}{2}\\pi$; 2) $2\\cos x - 1 = 0 \\implies \\cos x = \\frac{1}{2} \\implies x = \\frac{\\pi}{3}$ e $x = \\frac{5}{3}\\pi$. Nell’intervallo $[0, 2\\pi)$ le soluzioni sono quattro: $\\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{3}{2}\\pi, \\frac{5}{3}\\pi$.",
    fonte: "Lotto M3 del progetto — M3-15 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 388,
    materia: "Matematica",
    domanda: "Per quali valori di $x \\in [0, 2\\pi)$ è verificata la disequazione $\\sin x > \\frac{\\sqrt{3}}{2}$?",
    rispostaCorretta: "$\\frac{\\pi}{3} < x < \\frac{2}{3}\\pi$",
    risposteErrate: [
      "$0 \\le x < \\frac{\\pi}{3}$ oppure $\\frac{2}{3}\\pi < x < 2\\pi$",
      "$\\frac{\\pi}{6} < x < \\frac{5}{6}\\pi$",
      "$\\frac{\\pi}{3} \\le x \\le \\frac{4}{3}\\pi$",
      "$\\frac{2}{3}\\pi < x < \\frac{4}{3}\\pi$"
    ],
    spiegazione: "Sulla circonferenza goniometrica, la condizione $\\sin x > \\frac{\\sqrt{3}}{2}$ corrisponde ai punti con ordinata strettamente maggiore di $\\frac{\\sqrt{3}}{2}$. I punti di confine nel primo giro sono $x = \\frac{\\pi}{3}$ e $x = \\pi - \\frac{\\pi}{3} = \\frac{2}{3}\\pi$. L’insieme delle soluzioni in $[0, 2\\pi)$ è quindi l’intervallo $\\frac{\\pi}{3} < x < \\frac{2}{3}\\pi$.",
    fonte: "Lotto M3 del progetto — M3-16 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 389,
    materia: "Matematica",
    domanda: "In un triangolo, due lati misurano $6\\text{ cm}$ e $8\\text{ cm}$ e l’angolo tra essi compreso misura $60^\\circ$. Qual è l’area del triangolo?",
    rispostaCorretta: "$12\\sqrt{3}\\text{ cm}^2$",
    risposteErrate: [
      "$24\\sqrt{3}\\text{ cm}^2$",
      "$12\\text{ cm}^2$",
      "$24\\text{ cm}^2$",
      "$12\\sqrt{2}\\text{ cm}^2$"
    ],
    spiegazione: "L’area di un triangolo di cui si conoscono due lati $a, b$ e l’angolo compreso $\\gamma$ è data dalla formula trigonometrica $\\text{Area} = \\frac{1}{2} a b \\sin\\gamma$. Sostituendo i dati: $\\text{Area} = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin(60^\\circ) = 24 \\cdot \\frac{\\sqrt{3}}{2} = 12\\sqrt{3}\\text{ cm}^2$.",
    fonte: "Lotto M3 del progetto — M3-17 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 390,
    materia: "Matematica",
    domanda: "In un triangolo $ABC$, i lati $AB$ e $AC$ misurano rispettivamente $4\\text{ cm}$ e $5\\text{ cm}$ e l’angolo compreso $\\widehat{BAC}$ misura $60^\\circ$. Qual è la misura del terzo lato $BC$?",
    rispostaCorretta: "$\\sqrt{21}\\text{ cm}$",
    risposteErrate: [
      "$\\sqrt{41}\\text{ cm}$",
      "$\\sqrt{61}\\text{ cm}$",
      "$\\sqrt{31}\\text{ cm}$",
      "$6\\text{ cm}$"
    ],
    spiegazione: "Per il teorema del coseno (o di Carnot): $BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos(\\widehat{BAC})$. Sostituendo i valori: $BC^2 = 4^2 + 5^2 - 2 \\cdot 4 \\cdot 5 \\cdot \\cos(60^\\circ) = 16 + 25 - 40 \\cdot \\frac{1}{2} = 41 - 20 = 21$. Quindi $BC = \\sqrt{21}\\text{ cm}$.",
    fonte: "Lotto M3 del progetto — M3-18 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 391,
    materia: "Matematica",
    domanda: "In un triangolo $ABC$, l’angolo in $A$ misura $45^\\circ$, l’angolo in $B$ misura $30^\\circ$ e il lato opposto ad $A$ misura $a = 6\\sqrt{2}\\text{ cm}$. Quanto misura il lato $b$ opposto all’angolo $B$?",
    rispostaCorretta: "$6\\text{ cm}$",
    risposteErrate: [
      "$6\\sqrt{2}\\text{ cm}$",
      "$3\\sqrt{2}\\text{ cm}$",
      "$12\\text{ cm}$",
      "$3\\sqrt{3}\\text{ cm}$"
    ],
    spiegazione: "Per il teorema dei seni si ha $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$, da cui $b = a \\cdot \\frac{\\sin B}{\\sin A}$. Sostituendo i valori noti: $b = 6\\sqrt{2} \\cdot \\frac{\\sin(30^\\circ)}{\\sin(45^\\circ)} = 6\\sqrt{2} \\cdot \\frac{1/2}{\\sqrt{2}/2} = 6\\sqrt{2} \\cdot \\frac{1}{\\sqrt{2}} = 6\\text{ cm}$.",
    fonte: "Lotto M3 del progetto — M3-19 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 392,
    materia: "Matematica",
    domanda: "Un osservatore posto a $30\\text{ metri}$ dalla base di un edificio verticale ne misura la sommità con un angolo di elevazione di $30^\\circ$ rispetto al terreno orizzontale. Trascurando l’altezza dell’osservatore, qual è l’altezza dell’edificio?",
    rispostaCorretta: "$10\\sqrt{3}\\text{ metri}$",
    risposteErrate: [
      "$30\\sqrt{3}\\text{ metri}$",
      "$15\\text{ metri}$",
      "$15\\sqrt{3}\\text{ metri}$",
      "$10\\text{ metri}$"
    ],
    spiegazione: "Considerando il triangolo rettangolo formato dal terreno, dall’edificio e dalla linea di vista, l’altezza $h$ dell’edificio corrisponde al cateto opposto all’angolo di elevazione: $h = d \\cdot \\tan(30^\\circ) = 30 \\cdot \\frac{\\sqrt{3}}{3} = 10\\sqrt{3}\\text{ metri}$.",
    fonte: "Lotto M3 del progetto — M3-20 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 393,
    materia: "Matematica",
    domanda: "Quali sono tutte le soluzioni dell’equazione $\\sin x - \\sqrt{3}\\cos x = 0$ nell’intervallo $[0, 2\\pi)$?",
    rispostaCorretta: "$x = \\frac{\\pi}{3}$ e $x = \\frac{4}{3}\\pi$",
    risposteErrate: [
      "$x = \\frac{\\pi}{6}$ e $x = \\frac{7}{6}\\pi$",
      "$x = \\frac{\\pi}{3}$ e $x = \\frac{2}{3}\\pi$",
      "$x = \\frac{\\pi}{3}$",
      "$x = \\frac{2}{3}\\pi$ e $x = \\frac{5}{3}\\pi$"
    ],
    spiegazione: "Poiché per i valori in cui $\\cos x = 0$ si avrebbe $\\sin x \\ne 0$, possiamo dividere entrambi i membri per $\\cos x \\ne 0$, ottenendo $\\frac{\\sin x}{\\cos x} - \\sqrt{3} = 0 \\implies \\tan x = \\sqrt{3}$. La tangente assume valore $\\sqrt{3}$ nel primo giro in corrispondenza degli angoli $x = \\frac{\\pi}{3}$ (I quadrante) e $x = \\frac{\\pi}{3} + \\pi = \\frac{4}{3}\\pi$ (III quadrante).",
    fonte: "Lotto M3 del progetto — M3-21 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 394,
    materia: "Matematica",
    domanda: "Per quali valori di $x \\in [0, 2\\pi)$ è verificata la disequazione $\\cos x \\le -\\frac{1}{2}$?",
    rispostaCorretta: "$\\frac{2}{3}\\pi \\le x \\le \\frac{4}{3}\\pi$",
    risposteErrate: [
      "$0 \\le x \\le \\frac{2}{3}\\pi$ oppure $\\frac{4}{3}\\pi \\le x < 2\\pi$",
      "$\\frac{\\pi}{3} \\le x \\le \\frac{5}{3}\\pi$",
      "$\\frac{5}{6}\\pi \\le x \\le \\frac{7}{6}\\pi$",
      "$\\frac{\\pi}{2} \\le x \\le \\frac{3}{2}\\pi$"
    ],
    spiegazione: "Sulla circonferenza goniometrica, la disequazione $\\cos x \\le -\\frac{1}{2}$ individua i punti con ascissa minore o uguale a $-\\frac{1}{2}$. Gli angoli di confine sono $x_1 = \\pi - \\frac{\\pi}{3} = \\frac{2}{3}\\pi$ e $x_2 = \\pi + \\frac{\\pi}{3} = \\frac{4}{3}\\pi$. L’intervallo delle soluzioni in $[0, 2\\pi)$ è quindi $\\frac{2}{3}\\pi \\le x \\le \\frac{4}{3}\\pi$.",
    fonte: "Lotto M3 del progetto — M3-22 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 395,
    materia: "Matematica",
    domanda: "Qual è l’espressione semplificata di $(\\sin x + \\cos x)^2 - \\sin(2x)$ per ogni $x \\in \\mathbb{R}$?",
    rispostaCorretta: "$1$",
    risposteErrate: [
      "$0$",
      "$1 - 2\\sin(2x)$",
      "$\\cos(2x)$",
      "$2\\sin^2 x$"
    ],
    spiegazione: "Sviluppiamo il quadrato di binomio: $(\\sin x + \\cos x)^2 = \\sin^2 x + \\cos^2 x + 2\\sin x \\cos x$. Poiché per la prima relazione fondamentale $\\sin^2 x + \\cos^2 x = 1$ e per la formula di duplicazione $2\\sin x \\cos x = \\sin(2x)$, l’espressione diventa: $(1 + \\sin(2x)) - \\sin(2x) = 1$.",
    fonte: "Lotto M3 del progetto — M3-23 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 396,
    materia: "Matematica",
    domanda: "Per ogni $x \\ne \\frac{\\pi}{2} + k\\pi$, con $k \\in \\mathbb{Z}$, a quale delle seguenti espressioni equivale $1 + \\tan^2 x$?",
    rispostaCorretta: "$\\frac{1}{\\cos^2 x}$",
    risposteErrate: [
      "$\\frac{1}{\\sin^2 x}$",
      "$\\cos^2 x$",
      "$\\sin^2 x$",
      "$\\frac{1}{\\cos x}$"
    ],
    spiegazione: "Esprimendo la tangente come rapporto $\\tan x = \\frac{\\sin x}{\\cos x}$ e sommando i termini: $1 + \\tan^2 x = 1 + \\frac{\\sin^2 x}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$. Poiché $\\sin^2 x + \\cos^2 x = 1$, si ottiene l’identità notevole $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$.",
    fonte: "Lotto M3 del progetto — M3-24 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 397,
    materia: "Matematica",
    domanda: "In un triangolo isoscele di base $b = 12\\text{ cm}$, i due lati obliqui misurano ciascuno $10\\text{ cm}$. Detto $\\alpha$ ciascuno dei due angoli alla base, qual è il valore esatto di $\\sin(2\\alpha)$?",
    rispostaCorretta: "$\\frac{24}{25}$",
    risposteErrate: [
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{5}$"
    ],
    spiegazione: "Tracciamo l’altezza $h$ relativa alla base del triangolo isoscele, che divide la base a metà in due segmenti lunghi $6\\text{ cm}$. Nel triangolo rettangolo avente come ipotenusa il lato obliquo di $10\\text{ cm}$, l’altezza misura per il teorema di Pitagora $h = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8\\text{ cm}$. Le funzioni goniometriche dell’angolo alla base $\\alpha$ sono quindi $\\cos\\alpha = \\frac{6}{10} = \\frac{3}{5}$ e $\\sin\\alpha = \\frac{8}{10} = \\frac{4}{5}$. Applicando la formula di duplicazione del seno: $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$.",
    fonte: "Lotto M3 del progetto — M3-25 (Trigonometria)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 398,
    materia: "Matematica",
    domanda: "In un poligono regolare ciascun angolo esterno misura $45^\\circ$. Quanti lati ha il poligono?",
    rispostaCorretta: "8",
    risposteErrate: [
      "4",
      "6",
      "10",
      "12"
    ],
    spiegazione: "In qualunque poligono convesso la somma delle ampiezze degli angoli esterni è sempre pari a $360^\\circ$. Poiché il poligono è regolare, gli $n$ angoli esterni sono tutti congruenti. Dalla relazione $n \\cdot 45^\\circ = 360^\\circ$, ricaviamo il numero di lati: $n = \\frac{360^\\circ}{45^\\circ} = 8$.",
    fonte: "Lotto M4 del progetto — M4-01 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 399,
    materia: "Matematica",
    domanda: "Un triangolo equilatero ha il lato che misura $6\\text{ cm}$. Qual è la sua area?",
    rispostaCorretta: "$9\\sqrt{3}\\text{ cm}^2$",
    risposteErrate: [
      "$18\\sqrt{3}\\text{ cm}^2$",
      "$18\\text{ cm}^2$",
      "$36\\sqrt{3}\\text{ cm}^2$",
      "$9\\text{ cm}^2$"
    ],
    spiegazione: "L’altezza di un triangolo equilatero di lato $\\ell$ è $h = \\frac{\\sqrt{3}}{2}\\ell = \\frac{\\sqrt{3}}{2} \\cdot 6 = 3\\sqrt{3}\\text{ cm}$. L’area è quindi: $\\text{Area} = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{altezza} = \\frac{1}{2} \\cdot 6 \\cdot 3\\sqrt{3} = 9\\sqrt{3}\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-02 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 400,
    materia: "Matematica",
    domanda: "In un rombo, le due diagonali misurano rispettivamente $10\\text{ cm}$ e $24\\text{ cm}$. Quanto misura il perimetro del rombo?",
    rispostaCorretta: "$52\\text{ cm}$",
    risposteErrate: [
      "$26\\text{ cm}$",
      "$68\\text{ cm}$",
      "$48\\text{ cm}$",
      "$120\\text{ cm}$"
    ],
    spiegazione: "Le diagonali di un rombo sono perpendicolari e si tagliano a metà. Ciascuno dei quattro triangoli rettangoli formati dalle diagonali ha cateti pari a $5\\text{ cm}$ e $12\\text{ cm}$. Per il teorema di Pitagora, il lato del rombo misura $\\ell = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}$. Il perimetro è $4\\ell = 4 \\cdot 13 = 52\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-03 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 401,
    materia: "Matematica",
    domanda: "Se il volume di un cubo è pari a $64\\text{ cm}^3$, qual è la sua superficie totale?",
    rispostaCorretta: "$96\\text{ cm}^2$",
    risposteErrate: [
      "$64\\text{ cm}^2$",
      "$48\\text{ cm}^2$",
      "$16\\text{ cm}^2$",
      "$144\\text{ cm}^2$"
    ],
    spiegazione: "Dalla relazione del volume $V = \\ell^3 = 64\\text{ cm}^3$, ricaviamo lo spigolo del cubo: $\\ell = \\sqrt[3]{64} = 4\\text{ cm}$. La superficie totale di un cubo è data dalla somma delle aree delle sue 6 facce quadrate: $S_t = 6 \\cdot \\ell^2 = 6 \\cdot 4^2 = 6 \\cdot 16 = 96\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-04 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 402,
    materia: "Matematica",
    domanda: "Un trapezio ha la base maggiore lunga $14\\text{ cm}$, la base minore lunga $6\\text{ cm}$ e l’altezza lunga $5\\text{ cm}$. Qual è la sua area?",
    rispostaCorretta: "$50\\text{ cm}^2$",
    risposteErrate: [
      "$100\\text{ cm}^2$",
      "$70\\text{ cm}^2$",
      "$40\\text{ cm}^2$",
      "$30\\text{ cm}^2$"
    ],
    spiegazione: "L’area del trapezio è data dal semiprodotto della somma delle basi per l’altezza: $\\text{Area} = \\frac{(B + b) \\cdot h}{2} = \\frac{(14 + 6) \\cdot 5}{2} = \\frac{20 \\cdot 5}{2} = 50\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-05 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 403,
    materia: "Matematica",
    domanda: "Un cilindro retto ha raggio di base pari a $3\\text{ cm}$ e altezza pari a $5\\text{ cm}$. Qual è il suo volume?",
    rispostaCorretta: "$45\\pi\\text{ cm}^3$",
    risposteErrate: [
      "$15\\pi\\text{ cm}^3$",
      "$30\\pi\\text{ cm}^3$",
      "$90\\pi\\text{ cm}^3$",
      "$75\\pi\\text{ cm}^3$"
    ],
    spiegazione: "Il volume di un cilindro retto di raggio di base $r$ e altezza $h$ è dato dal prodotto dell’area di base per l’altezza: $V = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 5 = 45\\pi\\text{ cm}^3$.",
    fonte: "Lotto M4 del progetto — M4-06 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 404,
    materia: "Matematica",
    domanda: "Una figura piana è formata da un rettangolo di dimensioni $8\\text{ cm}$ e $4\\text{ cm}$ e da un semicircolo esterno avente come diametro uno dei lati del rettangolo lungo $8\\text{ cm}$. Le due parti non si sovrappongono. Qual è l’area complessiva della figura?",
    rispostaCorretta: "$32 + 8\\pi\\text{ cm}^2$",
    risposteErrate: [
      "$32 + 16\\pi\\text{ cm}^2$",
      "$32 + 2\\pi\\text{ cm}^2$",
      "$32 + 4\\pi\\text{ cm}^2$",
      "$32 + 32\\pi\\text{ cm}^2$"
    ],
    spiegazione: "L’area del rettangolo è data dal prodotto delle dimensioni: $A_{\\text{rett}} = 8 \\cdot 4 = 32\\text{ cm}^2$. Il semicircolo ha come diametro il lato da $8\\text{ cm}$, quindi il suo raggio è $r = \\frac{8}{2} = 4\\text{ cm}$. L’area del semicircolo è $A_{\\text{semic}} = \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi \\cdot 4^2 = 8\\pi\\text{ cm}^2$. L’area complessiva della figura è la somma delle due aree: $A_{\\text{tot}} = 32 + 8\\pi\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-07 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 405,
    materia: "Matematica",
    domanda: "Un parallelepipedo rettangolo ha le tre dimensioni che misurano $2\\text{ cm}$, $3\\text{ cm}$ e $6\\text{ cm}$. Quanto misura la sua diagonale principale?",
    rispostaCorretta: "$7\\text{ cm}$",
    risposteErrate: [
      "$11\\text{ cm}$",
      "$\\sqrt{13}\\text{ cm}$",
      "$\\sqrt{45}\\text{ cm}$",
      "$49\\text{ cm}$"
    ],
    spiegazione: "La lunghezza della diagonale spaziale di un parallelepipedo rettangolo di dimensioni $a, b, c$ è data da $d = \\sqrt{a^2 + b^2 + c^2} = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-08 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 406,
    materia: "Matematica",
    domanda: "Se il raggio di una sfera viene triplicato, qual è il rapporto tra la nuova superficie totale e quella iniziale?",
    rispostaCorretta: "9",
    risposteErrate: [
      "3",
      "27",
      "6",
      "12"
    ],
    spiegazione: "La superficie di una sfera di raggio $r$ è data da $S = 4\\pi r^2$. Triplicando il raggio ($r' = 3r$), la nuova superficie totale diventa $S' = 4\\pi (3r)^2 = 4\\pi \\cdot 9r^2 = 9 \\cdot (4\\pi r^2) = 9S$. Il rapporto tra la nuova superficie e quella iniziale è quindi $\\frac{S'}{S} = 9$.",
    fonte: "Lotto M4 del progetto — M4-09 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 407,
    materia: "Matematica",
    domanda: "In un triangolo rettangolo, l’ipotenusa misura $25\\text{ cm}$ e la proiezione di un cateto sull’ipotenusa misura $9\\text{ cm}$. Quanto misura tale cateto?",
    rispostaCorretta: "$15\\text{ cm}$",
    risposteErrate: [
      "$12\\text{ cm}$",
      "$20\\text{ cm}$",
      "$16\\text{ cm}$",
      "$\\frac{25}{3}\\text{ cm}$"
    ],
    spiegazione: "Per il primo teorema di Euclide, in un triangolo rettangolo il quadrato costruito su un cateto è equivalente al rettangolo avente per dimensioni l’ipotenusa e la proiezione del cateto stesso sull’ipotenusa ($c^2 = i \\cdot p$). Sostituendo: $c = \\sqrt{25 \\cdot 9} = \\sqrt{225} = 15\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-10 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 408,
    materia: "Matematica",
    domanda: "Un cono circolare retto ha raggio di base $r = 6\\text{ cm}$ e apotema $a = 10\\text{ cm}$. Quanto misura la sua altezza?",
    rispostaCorretta: "$8\\text{ cm}$",
    risposteErrate: [
      "$4\\text{ cm}$",
      "$\\sqrt{136}\\text{ cm}$",
      "$16\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    spiegazione: "Nel cono retto, l’asse, il raggio di base e l’apotema formano un triangolo rettangolo in cui l’apotema è l’ipotenusa. Per il teorema di Pitagora, l’altezza è: $h = \\sqrt{a^2 - r^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-11 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 409,
    materia: "Matematica",
    domanda: "In una circonferenza, un angolo alla circonferenza insiste su un arco $AB$ ed ha ampiezza pari a $35^\\circ$. Qual è l’ampiezza del corrispondente angolo al centro che insiste sullo stesso arco?",
    rispostaCorretta: "$70^\\circ$",
    risposteErrate: [
      "$35^\\circ$",
      "$17{,}5^\\circ$",
      "$145^\\circ$",
      "$110^\\circ$"
    ],
    spiegazione: "Per un fondamentale teorema della geometria euclidea, ogni angolo al centro ha un’ampiezza che è esattamente il doppio dell’ampiezza di qualsiasi angolo alla circonferenza che insiste sul medesimo arco. Quindi: $\\text{angolo al centro} = 2 \\cdot 35^\\circ = 70^\\circ$.",
    fonte: "Lotto M4 del progetto — M4-12 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 410,
    materia: "Matematica",
    domanda: "Due prismi retti simili hanno il rapporto tra l’altezza del prisma minore e quella del prisma maggiore pari a $\\frac{2}{3}$. Se il volume del prisma minore è $40\\text{ cm}^3$, qual è il volume del prisma maggiore?",
    rispostaCorretta: "$135\\text{ cm}^3$",
    risposteErrate: [
      "$60\\text{ cm}^3$",
      "$90\\text{ cm}^3$",
      "$120\\text{ cm}^3$",
      "$270\\text{ cm}^3$"
    ],
    spiegazione: "Per due solidi simili, il rapporto tra i volumi è uguale al cubo del rapporto di similitudine lineare tra le altezze: $\\frac{V_1}{V_2} = \\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$. Poiché $V_1 = 40\\text{ cm}^3$, ricaviamo il volume del prisma maggiore: $V_2 = 40 \\cdot \\frac{27}{8} = 5 \\cdot 27 = 135\\text{ cm}^3$.",
    fonte: "Lotto M4 del progetto — M4-13 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 411,
    materia: "Matematica",
    domanda: "Un esagono regolare ha il perimetro pari a $36\\text{ cm}$. Qual è la sua area?",
    rispostaCorretta: "$54\\sqrt{3}\\text{ cm}^2$",
    risposteErrate: [
      "$108\\sqrt{3}\\text{ cm}^2$",
      "$27\\sqrt{3}\\text{ cm}^2$",
      "$54\\text{ cm}^2$",
      "$36\\sqrt{3}\\text{ cm}^2$"
    ],
    spiegazione: "Il lato dell’esagono regolare è $\\ell = \\frac{36}{6} = 6\\text{ cm}$. Un esagono regolare è formato da 6 triangoli equilateri congruenti di lato $\\ell$. L’area di ciascun triangolo è $\\frac{\\sqrt{3}}{4}\\ell^2 = \\frac{\\sqrt{3}}{4} \\cdot 36 = 9\\sqrt{3}\\text{ cm}^2$. L’area totale dell’esagono è quindi: $\\text{Area} = 6 \\cdot 9\\sqrt{3} = 54\\sqrt{3}\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-14 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 412,
    materia: "Matematica",
    domanda: "Una piramide retta ha per base un quadrato di lato $10\\text{ cm}$ e ha altezza pari a $12\\text{ cm}$. Qual è la sua superficie totale?",
    rispostaCorretta: "$360\\text{ cm}^2$",
    risposteErrate: [
      "$260\\text{ cm}^2$",
      "$340\\text{ cm}^2$",
      "$400\\text{ cm}^2$",
      "$520\\text{ cm}^2$"
    ],
    spiegazione: "L’area di base è $A_b = 10^2 = 100\\text{ cm}^2$. L’apotema della piramide si calcola con il teorema di Pitagora tra l’altezza e la metà del lato di base: $a = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13\\text{ cm}$. L’area laterale è $A_l = \\frac{\\text{perimetro} \\cdot a}{2} = \\frac{40 \\cdot 13}{2} = 260\\text{ cm}^2$. La superficie totale è quindi $S_t = A_b + A_l = 100 + 260 = 360\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-15 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 413,
    materia: "Matematica",
    domanda: "In un triangolo rettangolo i due cateti misurano $a = 6\\text{ cm}$ e $b = 8\\text{ cm}$. Qual è il raggio della circonferenza inscritta nel triangolo?",
    rispostaCorretta: "$2\\text{ cm}$",
    risposteErrate: [
      "$5\\text{ cm}$",
      "$4\\text{ cm}$",
      "$3\\text{ cm}$",
      "$2{,}4\\text{ cm}$"
    ],
    spiegazione: "L’ipotenusa misura $c = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. L’area del triangolo è $\\text{Area} = \\frac{6 \\cdot 8}{2} = 24\\text{ cm}^2$ e il semiperimetro è $p = \\frac{6 + 8 + 10}{2} = 12\\text{ cm}$. Il raggio della circonferenza inscritta è $r = \\frac{\\text{Area}}{p} = \\frac{24}{12} = 2\\text{ cm}$ (oppure, per i triangoli rettangoli, $r = \\frac{a + b - c}{2} = \\frac{6 + 8 - 10}{2} = 2\\text{ cm}$).",
    fonte: "Lotto M4 del progetto — M4-16 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 414,
    materia: "Matematica",
    domanda: "Un solido è formato da un cilindro circolare retto sormontato da un cono avente la stessa base di raggio $r = 3\\text{ cm}$. Se l’altezza del cilindro è $4\\text{ cm}$ e l’altezza del cono è $4\\text{ cm}$, qual è il volume complessivo del solido?",
    rispostaCorretta: "$48\\pi\\text{ cm}^3$",
    risposteErrate: [
      "$72\\pi\\text{ cm}^3$",
      "$24\\pi\\text{ cm}^3$",
      "$36\\pi\\text{ cm}^3$",
      "$54\\pi\\text{ cm}^3$"
    ],
    spiegazione: "Il volume del cilindro è $V_{\\text{cil}} = \\pi r^2 h_{\\text{cil}} = \\pi \\cdot 3^2 \\cdot 4 = 36\\pi\\text{ cm}^3$. Il volume del cono è $V_{\\text{cono}} = \\frac{1}{3}\\pi r^2 h_{\\text{cono}} = \\frac{1}{3}\\pi \\cdot 3^2 \\cdot 4 = 12\\pi\\text{ cm}^3$. Il volume complessivo del solido è: $V_{\\text{tot}} = 36\\pi + 12\\pi = 48\\pi\\text{ cm}^3$.",
    fonte: "Lotto M4 del progetto — M4-17 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 415,
    materia: "Matematica",
    domanda: "In un cerchio di raggio $R = 6\\text{ cm}$, un settore circolare ha un angolo al centro di ampiezza pari a $60^\\circ$. Qual è l’area del settore circolare?",
    rispostaCorretta: "$6\\pi\\text{ cm}^2$",
    risposteErrate: [
      "$12\\pi\\text{ cm}^2$",
      "$2\\pi\\text{ cm}^2$",
      "$36\\pi\\text{ cm}^2$",
      "$3\\pi\\text{ cm}^2$"
    ],
    spiegazione: "L’area di un settore circolare è proporzionale all’angolo al centro: $\\text{Area} = \\pi R^2 \\cdot \\frac{\\alpha}{360^\\circ} = \\pi \\cdot 6^2 \\cdot \\frac{60^\\circ}{360^\\circ} = 36\\pi \\cdot \\frac{1}{6} = 6\\pi\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-18 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 416,
    materia: "Matematica",
    domanda: "Un triangolo isoscele ha il perimetro pari a $36\\text{ cm}$ e la base lunga $10\\text{ cm}$. Qual è la sua area?",
    rispostaCorretta: "$60\\text{ cm}^2$",
    risposteErrate: [
      "$120\\text{ cm}^2$",
      "$65\\text{ cm}^2$",
      "$30\\text{ cm}^2$",
      "$50\\text{ cm}^2$"
    ],
    spiegazione: "Ciascuno dei due lati obliqui misura $\\ell = \\frac{36 - 10}{2} = 13\\text{ cm}$. L’altezza relativa alla base divide il triangolo in due triangoli rettangoli congruenti aventi ipotenusa pari a $13\\text{ cm}$ e un cateto (la semibase) pari a $\\frac{10}{2} = 5\\text{ cm}$. Per il teorema di Pitagora, l’altezza misura $h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$. L’area del triangolo è quindi: $\\text{Area} = \\frac{\\text{base} \\cdot \\text{altezza}}{2} = \\frac{10 \\cdot 12}{2} = 60\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-19 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 417,
    materia: "Matematica",
    domanda: "In un triangolo rettangolo, l’altezza relativa all’ipotenusa divide l’ipotenusa in due segmenti lunghi $4\\text{ cm}$ e $9\\text{ cm}$. Quanto misura tale altezza?",
    rispostaCorretta: "$6\\text{ cm}$",
    risposteErrate: [
      "$6{,}5\\text{ cm}$",
      "$13\\text{ cm}$",
      "$36\\text{ cm}$",
      "$\\sqrt{97}\\text{ cm}$"
    ],
    spiegazione: "Per il secondo teorema di Euclide, in un triangolo rettangolo il quadrato dell’altezza relativa all’ipotenusa è equivalente al rettangolo avente per dimensioni le proiezioni dei due cateti sull’ipotenusa ($h^2 = p_1 \\cdot p_2$). Dunque: $h = \\sqrt{4 \\cdot 9} = \\sqrt{36} = 6\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-20 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 418,
    materia: "Matematica",
    domanda: "Un trapezio rettangolo ha la base maggiore di $10\\text{ cm}$, la base minore di $6\\text{ cm}$ e il lato obliquo di $5\\text{ cm}$. Qual è la sua area?",
    rispostaCorretta: "$24\\text{ cm}^2$",
    risposteErrate: [
      "$40\\text{ cm}^2$",
      "$48\\text{ cm}^2$",
      "$32\\text{ cm}^2$",
      "$18\\text{ cm}^2$"
    ],
    spiegazione: "Tracciando l’altezza dal vertice della base minore, si ottiene un triangolo rettangolo con ipotenusa pari al lato obliquo ($5\\text{ cm}$) e base pari a $B - b = 10 - 6 = 4\\text{ cm}$. Per il teorema di Pitagora, l’altezza misura $h = \\sqrt{5^2 - 4^2} = \\sqrt{9} = 3\\text{ cm}$. L’area del trapezio è: $\\text{Area} = \\frac{(B + b) \\cdot h}{2} = \\frac{(10 + 6) \\cdot 3}{2} = 24\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-21 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 419,
    materia: "Matematica",
    domanda: "Una sfera è inscritta in un cilindro circolare retto equilatero (avente altezza pari al diametro di base, $h = 2R$). Qual è il rapporto tra il volume della sfera e il volume del cilindro?",
    rispostaCorretta: "$\\frac{2}{3}$",
    risposteErrate: [
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{4}{5}$"
    ],
    spiegazione: "Il volume della sfera di raggio $R$ è $V_{\\text{sfera}} = \\frac{4}{3}\\pi R^3$. Il cilindro circoscritto ha raggio di base $R$ e altezza $h = 2R$, dunque il suo volume è $V_{\\text{cil}} = \\pi R^2 (2R) = 2\\pi R^3$. Il rapporto tra i due volumi è: $\\frac{V_{\\text{sfera}}}{V_{\\text{cil}}} = \\frac{\\frac{4}{3}\\pi R^3}{2\\pi R^3} = \\frac{4}{3} \\cdot \\frac{1}{2} = \\frac{2}{3}$.",
    fonte: "Lotto M4 del progetto — M4-22 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 420,
    materia: "Matematica",
    domanda: "In un parallelogramma, due lati consecutivi misurano $a = 15\\text{ cm}$ e $b = 10\\text{ cm}$. Se l’altezza relativa al lato maggiore $a$ misura $h_a = 6\\text{ cm}$, quanto misura l’altezza $h_b$ relativa al lato minore $b$?",
    rispostaCorretta: "$9\\text{ cm}$",
    risposteErrate: [
      "$4\\text{ cm}$",
      "$6\\text{ cm}$",
      "$5\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    spiegazione: "L’area del parallelogramma è data dal prodotto di un lato per la rispettiva altezza: $\\text{Area} = a \\cdot h_a = 15 \\cdot 6 = 90\\text{ cm}^2$. Poiché l’area si esprime anche come $b \\cdot h_b$, si ha: $10 \\cdot h_b = 90 \\implies h_b = \\frac{90}{10} = 9\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-23 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 421,
    materia: "Matematica",
    domanda: "In una circonferenza, due corde $AB$ e $CD$ si intersecano internamente nel punto $P$. Sapendo che i segmenti sulla prima corda misurano $AP = 3\\text{ cm}$ e $PB = 8\\text{ cm}$, e che sulla seconda corda si ha $CP = 4\\text{ cm}$, quanto misura il segmento $PD$?",
    rispostaCorretta: "$6\\text{ cm}$",
    risposteErrate: [
      "$7\\text{ cm}$",
      "$4\\text{ cm}$",
      "$24\\text{ cm}$",
      "$8\\text{ cm}$"
    ],
    spiegazione: "Per il teorema delle corde, se due corde di una circonferenza si intersecano in un punto interno $P$, i segmenti determinati su una corda formano un prodotto uguale al prodotto dei segmenti determinati sull’altra: $AP \\cdot PB = CP \\cdot PD$. Sostituendo: $3 \\cdot 8 = 4 \\cdot PD \\implies 24 = 4 \\cdot PD \\implies PD = \\frac{24}{4} = 6\\text{ cm}$.",
    fonte: "Lotto M4 del progetto — M4-24 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 422,
    materia: "Matematica",
    domanda: "Una piramide retta ha per base un rombo le cui diagonali misurano $30\\text{ cm}$ e $40\\text{ cm}$. Sapendo che l’altezza della piramide misura $5\\text{ cm}$, qual è l’area della superficie totale della piramide?",
    rispostaCorretta: "$1250\\text{ cm}^2$",
    risposteErrate: [
      "$650\\text{ cm}^2$",
      "$1000\\text{ cm}^2$",
      "$850\\text{ cm}^2$",
      "$1100\\text{ cm}^2$"
    ],
    spiegazione: "1. Nel rombo di base, le semidiagonali misurano $15\\text{ cm}$ e $20\\text{ cm}$. Il lato del rombo è $\\ell = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\text{ cm}$, per cui il perimetro è $2p = 4 \\cdot 25 = 100\\text{ cm}$. 2. L’area di base è $A_b = \\frac{30 cdot 40}{2} = 600\\text{ cm}^2$. 3. Il raggio del cerchio inscritto nella base (apotema di base) è $r = \\frac{A_b}{\\text{semiperimetro}} = \\frac{600}{50} = 12\\text{ cm}$. 4. L’apotema della piramide si ottiene applicando il teorema di Pitagora tra l’altezza e il raggio inscritto: $a = \\sqrt{h^2 + r^2} = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\text{ cm}$. 5. L’area laterale è $A_l = \\frac{2p \\cdot a}{2} = \\frac{100 \\cdot 13}{2} = 650\\text{ cm}^2$. 6. La superficie totale è quindi: $S_t = A_b + A_l = 600 + 650 = 1250\\text{ cm}^2$.",
    fonte: "Lotto M4 del progetto — M4-25 (Geometria piana e solida)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 423,
    materia: "Matematica",
    domanda: "Per ogni numero reale positivo $a$, a quale delle seguenti espressioni equivale $\\sqrt[3]{a^2 \\cdot \\sqrt{a}}$?",
    rispostaCorretta: "$a^{\\frac{5}{6}}$",
    risposteErrate: [
      "$a^{\\frac{2}{3}}$",
      "$a^{\\frac{7}{6}}$",
      "$a^{\\frac{1}{3}}$",
      "$a^{\\frac{5}{3}}$"
    ],
    spiegazione: "Esprimiamo i radicali come potenze a esponente frazionario: $\\sqrt{a} = a^{\\frac{1}{2}}$. All’interno della radice cubica si ha: $a^2 \\cdot a^{\\frac{1}{2}} = a^{2 + \\frac{1}{2}} = a^{\\frac{5}{2}}$. Applicando la radice cubica esterna: $\\sqrt[3]{a^{\\frac{5}{2}}} = (a^{\\frac{5}{2}})^{\\frac{1}{3}} = a^{\\frac{5}{2} \\cdot \\frac{1}{3}} = a^{\\frac{5}{6}}$.",
    fonte: "Lotto M5 del progetto — M5-01 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 424,
    materia: "Matematica",
    domanda: "Qual è l’ordinamento corretto, dal più piccolo al più grande, dei tre numeri $A = 2^{30}$, $B = 3^{20}$ e $C = 5^{10}$?",
    rispostaCorretta: "$C < A < B$",
    risposteErrate: [
      "$A < B < C$",
      "$C < B < A$",
      "$B < A < C$",
      "$A < C < B$"
    ],
    spiegazione: "Riconduciamo le tre potenze al medesimo esponente $10$: $A = 2^{30} = (2^3)^{10} = 8^{10}$, $B = 3^{20} = (3^2)^{10} = 9^{10}$, $C = 5^{10} = 5^{10}$. Poiché la funzione esponenziale con base maggiore di $1$ è strettamente crescente e $5 < 8 < 9$, si ha: $5^{10} < 8^{10} < 9^{10}$, ovvero $C < A < B$.",
    fonte: "Lotto M5 del progetto — M5-02 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 425,
    materia: "Matematica",
    domanda: "Qual è la soluzione dell’equazione esponenziale $27^{x - 1} = 9^{x + 2}$?",
    rispostaCorretta: "$x = 7$",
    risposteErrate: [
      "$x = 5$",
      "$x = 3$",
      "$x = -1$",
      "$x = \\frac{7}{5}$"
    ],
    spiegazione: "Esprimiamo entrambe le basi come potenze di $3$: $27 = 3^3$ e $9 = 3^2$. L’equazione diventa: $(3^3)^{x-1} = (3^2)^{x+2} \\implies 3^{3(x-1)} = 3^{2(x+2)}$. Uguagliando gli esponenti: $3x - 3 = 2x + 4 \\implies 3x - 2x = 4 + 3 \\implies x = 7$.",
    fonte: "Lotto M5 del progetto — M5-03 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 426,
    materia: "Matematica",
    domanda: "Una popolazione di batteri raddoppia ogni $3$ ore. Se la popolazione iniziale è di $500$ individui, quanti batteri saranno presenti dopo $12$ ore?",
    rispostaCorretta: "$8000$",
    risposteErrate: [
      "$2000$",
      "$4000$",
      "$6000$",
      "$16000$"
    ],
    spiegazione: "In $12$ ore si compiono $\\frac{12}{3} = 4$ cicli di raddoppio. La popolazione finale è data dalla legge di crescita esponenziale: $N = N_0 \\cdot 2^k = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$ batteri.",
    fonte: "Lotto M5 del progetto — M5-04 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 427,
    materia: "Matematica",
    domanda: "Qual è l’insieme delle soluzioni reali dell’equazione esponenziale $4^x - 5 \\cdot 2^x + 4 = 0$?",
    rispostaCorretta: "$\\{0, 2\\}$",
    risposteErrate: [
      "$\\{1, 4\\}$",
      "$\\{1, 2\\}$",
      "$\\{0, 4\\}$",
      "$\\{-2, 0\\}$"
    ],
    spiegazione: "Poiché $4^x = (2^x)^2$, poniamo l’incognita ausiliaria $t = 2^x$ con la condizione $t > 0$. L’equazione diventa: $t^2 - 5t + 4 = 0 \\implies (t - 1)(t - 4) = 0$. Si ottengono le soluzioni $t_1 = 1$ e $t_2 = 4$. Risostituendo $t = 2^x$: da $2^x = 1$ si ottiene $x = 0$; da $2^x = 4 = 2^2$ si ottiene $x = 2$. L’insieme delle soluzioni è $\\{0, 2\\}$.",
    fonte: "Lotto M5 del progetto — M5-05 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 428,
    materia: "Matematica",
    domanda: "Qual è l’insieme delle soluzioni della disequazione esponenziale $\\left(\\frac{1}{2}\\right)^{3x - 1} > \\left(\\frac{1}{4}\\right)^{x + 2}$?",
    rispostaCorretta: "$x < 5$",
    risposteErrate: [
      "$x > 5$",
      "$x < -5$",
      "$x > 3$",
      "$x < \\frac{5}{2}$"
    ],
    spiegazione: "Esprimiamo il secondo membro in base $\\frac{1}{2}$: $\\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$, quindi $\\left(\\frac{1}{4}\\right)^{x+2} = \\left(\\frac{1}{2}\\right)^{2(x+2)} = \\left(\\frac{1}{2}\\right)^{2x+4}$. La disequazione diventa $\\left(\\frac{1}{2}\\right)^{3x-1} > \\left(\\frac{1}{2}\\right)^{2x+4}$. Poiché la base $0 < \\frac{1}{2} < 1$, la funzione esponenziale è strettamente decrescente e il verso della disuguaglianza si inverte nel confronto degli esponenti: $3x - 1 < 2x + 4 \\implies 3x - 2x < 4 + 1 \\implies x < 5$.",
    fonte: "Lotto M5 del progetto — M5-06 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 429,
    materia: "Matematica",
    domanda: "Per ogni intero $n$, a quale valore numerico costante equivale la frazione $\\frac{2^{n+3} + 2^{n+1}}{2^{n+2} - 2^n}$?",
    rispostaCorretta: "$\\frac{10}{3}$",
    risposteErrate: [
      "$\\frac{5}{3}$",
      "$2$",
      "$\\frac{4}{3}$",
      "$\\frac{8}{3}$"
    ],
    spiegazione: "Raccogliamo a fattor comune la potenza $2^n$ sia a numeratore che a denominatore: $\\frac{2^{n+3} + 2^{n+1}}{2^{n+2} - 2^n} = \\frac{2^n \\cdot (2^3 + 2^1)}{2^n \\cdot (2^2 - 2^0)} = \\frac{2^n \\cdot (8 + 2)}{2^n \\cdot (4 - 1)} = \\frac{10}{3}$.",
    fonte: "Lotto M5 del progetto — M5-07 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 430,
    materia: "Matematica",
    domanda: "Qual è la soluzione reale dell’equazione esponenziale $3^{x+1} + 3^{x-1} = 90$?",
    rispostaCorretta: "$x = 3$",
    risposteErrate: [
      "$x = 2$",
      "$x = 4$",
      "$x = 1$",
      "$x = \\frac{9}{2}$"
    ],
    spiegazione: "Scomponiamo le potenze applicando le proprietà: $3^{x+1} = 3^x \\cdot 3$ e $3^{x-1} = 3^x \\cdot \\frac{1}{3}$. Raccogliendo $3^x$: $3^x \\left(3 + \\frac{1}{3}\\right) = 90 \\implies 3^x \\left(\\frac{10}{3}\\right) = 90$. Moltiplicando ambo i membri per $\\frac{3}{10}$: $3^x = 90 \\cdot \\frac{3}{10} = 9 \\cdot 3 = 27 = 3^3 \\implies x = 3$.",
    fonte: "Lotto M5 del progetto — M5-08 (Potenze ed esponenziali)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 431,
    materia: "Matematica",
    domanda: "Qual è il valore numerico dell’espressione $\\log_2(32) + \\log_3\\left(\\frac{1}{27}\\right) - \\log_5(\\sqrt{5})$?",
    rispostaCorretta: "$\\frac{3}{2}$",
    risposteErrate: [
      "$\\frac{5}{2}$",
      "$1$",
      "$2$",
      "$\\frac{15}{2}$"
    ],
    spiegazione: "Calcoliamo i singoli termini applicando la definizione di logaritmo: 1) $\\log_2(32) = \\log_2(2^5) = 5$; 2) $\\log_3\\left(\\frac{1}{27}\\right) = \\log_3(3^{-3}) = -3$; 3) $\\log_5(\\sqrt{5}) = \\log_5(5^{\\frac{1}{2}}) = \\frac{1}{2}$. Sostituendo: $5 + (-3) - \\frac{1}{2} = 2 - \\frac{1}{2} = \\frac{3}{2}$.",
    fonte: "Lotto M5 del progetto — M5-09 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 432,
    materia: "Matematica",
    domanda: "Posto $\\log_{10} 2 = a$ e $\\log_{10} 3 = b$, a quale espressione corrisponde $\\log_{10} 18$?",
    rispostaCorretta: "$a + 2b$",
    risposteErrate: [
      "$2a + b$",
      "$a + b^2$",
      "$2ab$",
      "$a^2 + b$"
    ],
    spiegazione: "Scomponiamo l’argomento in fattori primi: $18 = 2 \\cdot 3^2$. Applicando i teoremi sul logaritmo del prodotto e della potenza: $\\log_{10} 18 = \\log_{10}(2 \\cdot 3^2) = \\log_{10} 2 + \\log_{10}(3^2) = \\log_{10} 2 + 2\\log_{10} 3 = a + 2b$.",
    fonte: "Lotto M5 del progetto — M5-10 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 433,
    materia: "Matematica",
    domanda: "Qual è il dominio naturale (o campo di esistenza) della funzione reale $f(x) = \\log_2\\left(\\frac{x - 3}{5 - x}\\right)$?",
    rispostaCorretta: "$3 < x < 5$",
    risposteErrate: [
      "$x < 3 \\lor x > 5$",
      "$x > 3$",
      "$x \\ne 5$",
      "$x \\le 3 \\lor x \\ge 5$"
    ],
    spiegazione: "L’argomento del logaritmo deve essere strettamente positivo: $\\frac{x - 3}{5 - x} > 0$. Studiamo il segno della frazione: Numeratore $> 0 \\iff x - 3 > 0 \\iff x > 3$; Denominatore $> 0 \\iff 5 - x > 0 \\iff x < 5$. La frazione è strettamente positiva nell’intervallo interno in cui numeratore e denominatore sono concordi (entrambi positivi): $3 < x < 5$.",
    fonte: "Lotto M5 del progetto — M5-11 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 434,
    materia: "Matematica",
    domanda: "Qual è la soluzione dell’equazione $\\log_4(2x + 6) = 2$?",
    rispostaCorretta: "$x = 5$",
    risposteErrate: [
      "$x = 1$",
      "$x = 8$",
      "$x = 2$",
      "$x = 10$"
    ],
    spiegazione: "Condizione di esistenza: $2x + 6 > 0 \\implies x > -3$. Applicando la definizione di logaritmo: $2x + 6 = 4^2 = 16 \\implies 2x = 16 - 6 = 10 \\implies x = 5$. Poiché $5 > -3$, la soluzione è pienamente accettabile.",
    fonte: "Lotto M5 del progetto — M5-12 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 435,
    materia: "Matematica",
    domanda: "Sapendo che $\\log_2 3 = k$, a quale delle seguenti espressioni equivale $\\log_3 16$?",
    rispostaCorretta: "$\\frac{4}{k}$",
    risposteErrate: [
      "$\\frac{k}{4}$",
      "$4k$",
      "$\\frac{2}{k}$",
      "$k^4$"
    ],
    spiegazione: "Applichiamo la formula del cambiamento di base passando alla base $2$: $\\log_3 16 = \\frac{\\log_2 16}{\\log_2 3}$. Poiché $16 = 2^4$, si ha $\\log_2 16 = 4$. Sostituendo $\\log_2 3 = k$, si ottiene immediatamente: $\\log_3 16 = \\frac{4}{k}$.",
    fonte: "Lotto M5 del progetto — M5-13 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 436,
    materia: "Matematica",
    domanda: "Qual è l’insieme delle soluzioni reali dell’equazione $\\log_2(x) + \\log_2(x - 2) = 3$?",
    rispostaCorretta: "$\\{4\\}$",
    risposteErrate: [
      "$\\{-2, 4\\}$",
      "$\\{2, 4\\}$",
      "$\\{8\\}$",
      "$\\{6\\}$"
    ],
    spiegazione: "Condizioni di esistenza: $x > 0$ e $x - 2 > 0 \\implies x > 2$. Applicando la proprietà della somma di logaritmi: $\\log_2(x(x - 2)) = 3 \\implies x^2 - 2x = 2^3 = 8 \\implies x^2 - 2x - 8 = 0$. Fattorizzando: $(x - 4)(x + 2) = 0$, da cui $x_1 = 4$ e $x_2 = -2$. Il valore $x_2 = -2$ non appartiene al dominio ($x > 2$) ed è da scartare. L’unica soluzione reale è $x = 4$.",
    fonte: "Lotto M5 del progetto — M5-14 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 437,
    materia: "Matematica",
    domanda: "Qual è l’insieme delle soluzioni reali della disequazione $\\log_{\\frac{1}{2}}(2x - 1) \\ge -2$?",
    rispostaCorretta: "$\\frac{1}{2} < x \\le \\frac{5}{2}$",
    risposteErrate: [
      "$x \\le \\frac{5}{2}$",
      "$x \\ge \\frac{5}{2}$",
      "$\\frac{1}{2} < x < 5$",
      "$x > \\frac{1}{2}$"
    ],
    spiegazione: "1) Condizione di esistenza: $2x - 1 > 0 \\implies x > \\frac{1}{2}$. 2) Poiché la base è $0 < \\frac{1}{2} < 1$, la funzione logaritmica è strettamente decrescente e il verso della disuguaglianza si inverte: $2x - 1 \\le \\left(\\frac{1}{2}\\right)^{-2} = 2^2 = 4 \\implies 2x \\le 5 \\implies x \\le \\frac{5}{2}$. Mettendo a sistema con la C.E.: $\\frac{1}{2} < x \\le \\frac{5}{2}$.",
    fonte: "Lotto M5 del progetto — M5-15 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 438,
    materia: "Matematica",
    domanda: "Qual è la somma di tutte le soluzioni reali dell’equazione $(\\log_3 x)^2 - \\log_3(x^3) + 2 = 0$?",
    rispostaCorretta: "$12$",
    risposteErrate: [
      "$3$",
      "$9$",
      "$27$",
      "$6$"
    ],
    spiegazione: "Condizione di esistenza: $x > 0$. Applichiamo la proprietà della potenza: $\\log_3(x^3) = 3\\log_3 x$. Ponendo $t = \\log_3 x$, l’equazione diventa: $t^2 - 3t + 2 = 0 \\implies (t - 1)(t - 2) = 0$. Le radici sono $t_1 = 1$ e $t_2 = 2$. Risolvendo per $x$: da $\\log_3 x = 1$ si ha $x_1 = 3^1 = 3$; da $\\log_3 x = 2$ si ha $x_2 = 3^2 = 9$. Entrambe sono accettabili ($x > 0$). La somma delle soluzioni è: $x_1 + x_2 = 3 + 9 = 12$.",
    fonte: "Lotto M5 del progetto — M5-16 (Logaritmi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 439,
    materia: "Matematica",
    domanda: "Lanciando una sola volta un dado a $6$ facce non truccato, qual è la probabilità di ottenere un numero primo?",
    rispostaCorretta: "$\\frac{1}{2}$",
    risposteErrate: [
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{5}{6}$"
    ],
    spiegazione: "I casi possibili sono $6$: $\\{1, 2, 3, 4, 5, 6\\}$. I numeri primi presenti sul dado sono $3$: $\\{2, 3, 5\\}$ (ricordando che $1$ non è primo). La probabilità classica è il rapporto tra casi favorevoli e casi possibili: $P = \\frac{3}{6} = \\frac{1}{2}$.",
    fonte: "Lotto M5 del progetto — M5-17 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 440,
    materia: "Matematica",
    domanda: "La probabilità che un tiratore colpisca il bersaglio con un singolo colpo è pari a $0{,}75$. Qual è la probabilità che, effettuando un tiro, il bersaglio non venga colpito?",
    rispostaCorretta: "$\\frac{1}{4}$",
    risposteErrate: [
      "$\\frac{3}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{5}$",
      "$0{,}05$"
    ],
    spiegazione: "L’evento \"non colpire il bersaglio\" è l’evento complementare di \"colpire il bersaglio\". La probabilità dell’evento complementare è: $P(\\bar{E}) = 1 - P(E) = 1 - 0{,}75 = 0{,}25 = \\frac{1}{4}$.",
    fonte: "Lotto M5 del progetto — M5-18 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 441,
    materia: "Matematica",
    domanda: "Un’urna contiene $5$ palline rosse, $7$ palline blu e $8$ palline verdi, tutte identiche per forma e peso. Estraendo a caso una sola pallina, qual è la probabilità che essa sia rossa oppure verde?",
    rispostaCorretta: "$\\frac{13}{20}$",
    risposteErrate: [
      "$\\frac{7}{20}$",
      "$\\frac{1}{4}$",
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$"
    ],
    spiegazione: "Il numero totale di palline nell’urna (casi possibili) è $5 + 7 + 8 = 20$. Le palline favorevoli (rosse oppure verdi) sono $5 + 8 = 13$. La probabilità è data da: $P = \\frac{13}{20}$.",
    fonte: "Lotto M5 del progetto — M5-19 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 442,
    materia: "Matematica",
    domanda: "Lanciando contemporaneamente due dadi equi a $6$ facce, qual è la probabilità che la somma dei punteggi ottenuti sia pari a $7$?",
    rispostaCorretta: "$\\frac{1}{6}$",
    risposteErrate: [
      "$\\frac{1}{12}$",
      "$\\frac{7}{36}$",
      "$\\frac{5}{36}$",
      "$\\frac{1}{4}$"
    ],
    spiegazione: "I casi possibili lanciando due dadi sono $6 \\times 6 = 36$. Le coppie ordinate la cui somma è $7$ sono $6$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. La probabilità è: $P = \\frac{6}{36} = \\frac{1}{6}$.",
    fonte: "Lotto M5 del progetto — M5-20 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 443,
    materia: "Matematica",
    domanda: "Da un mazzo di $40$ carte italiane ben mescolate si estraggono consecutivamente due carte senza reinserire la prima nel mazzo. Qual è la probabilità che entrambe le carte estratte siano assi?",
    rispostaCorretta: "$\\frac{1}{130}$",
    risposteErrate: [
      "$\\frac{1}{100}$",
      "$\\frac{1}{10}$",
      "$\\frac{1}{13}$",
      "$\\frac{1}{65}$"
    ],
    spiegazione: "In un mazzo di $40$ carte ci sono $4$ assi. La probabilità che la prima carta sia un asso è $\\frac{4}{40} = \\frac{1}{10}$. Senza reinserimento, restano $39$ carte di cui $3$ assi. La probabilità che anche la seconda carta sia un asso è $\\frac{3}{39} = \\frac{1}{13}$. Per il teorema delle probabilità composte: $P = \\frac{1}{10} \\cdot \\frac{1}{13} = \\frac{1}{130}$.",
    fonte: "Lotto M5 del progetto — M5-21 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 444,
    materia: "Matematica",
    domanda: "Si lancia una moneta non truccata e contemporaneamente un dado regolare a $6$ facce. Qual è la probabilità di ottenere \"Testa\" sulla moneta e un numero strettamente maggiore di $4$ sul dado?",
    rispostaCorretta: "$\\frac{1}{6}$",
    risposteErrate: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{12}$",
      "$\\frac{5}{6}$"
    ],
    spiegazione: "I due eventi sono stocasticamente indipendenti. La probabilità di ottenere \"Testa\" è $P(T) = \\frac{1}{2}$. I numeri strettamente maggiori di $4$ sul dado sono $\\{5, 6\\}$, quindi $P(D > 4) = \\frac{2}{6} = \\frac{1}{3}$. La probabilità dell’evento congiunto è il prodotto delle singole probabilità: $P = P(T) \\cdot P(D > 4) = \\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6}$.",
    fonte: "Lotto M5 del progetto — M5-22 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 445,
    materia: "Matematica",
    domanda: "Lanciando $3$ volte consecutive una moneta perfettamente bilanciata, qual è la probabilità di ottenere almeno una volta \"Testa\"?",
    rispostaCorretta: "$\\frac{7}{8}$",
    risposteErrate: [
      "$\\frac{1}{8}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$"
    ],
    spiegazione: "L’evento contrario di \"ottenere almeno una volta Testa\" è \"ottenere zero volte Testa\", ovvero ottenere $3$ volte consecutive \"Croce\". Poiché i lanci sono indipendenti, la probabilità di $3$ croci è $P(\\text{CCC}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. La probabilità richiesta è quindi: $P = 1 - P(\\text{CCC}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.",
    fonte: "Lotto M5 del progetto — M5-23 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 446,
    materia: "Matematica",
    domanda: "Un’urna contiene $4$ palline bianche e $6$ palline nere. Si estrae una pallina, se ne annota il colore, la si reinserisce nell’urna e si procede a una seconda estrazione. Qual è la probabilità di estrarre prima una pallina bianca e poi una nera?",
    rispostaCorretta: "$\\frac{6}{25}$",
    risposteErrate: [
      "$\\frac{4}{15}$",
      "$\\frac{12}{25}$",
      "$\\frac{1}{5}$",
      "$\\frac{2}{15}$"
    ],
    spiegazione: "Essendoci reinserimento, la composizione dell’urna rimane invariata ($10$ palline: $4$ bianche e $6$ nere) e le due estrazioni sono indipendenti. La probabilità di estrarre bianca alla prima estrazione è $\\frac{4}{10} = \\frac{2}{5}$. La probabilità di estrarre nera alla seconda è $\\frac{6}{10} = \\frac{3}{5}$. La probabilità dell’evento ordinato (Bianca, Nera) è: $P = \\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{6}{25}$.",
    fonte: "Lotto M5 del progetto — M5-24 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 447,
    materia: "Matematica",
    domanda: "Si lanciano due dadi a $6$ facce non truccati. Sapendo che i due punteggi ottenuti sono diversi tra loro, qual è la probabilità che la loro somma sia pari a $6$?",
    rispostaCorretta: "$\\frac{2}{15}$",
    risposteErrate: [
      "$\\frac{5}{36}$",
      "$\\frac{1}{9}$",
      "$\\frac{1}{6}$",
      "$\\frac{4}{35}$"
    ],
    spiegazione: "Lo spazio campionario ridotto dalla condizione \"punteggi diversi\" esclude le $6$ coppie con esiti uguali $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$, contando quindi $36 - 6 = 30$ casi possibili equiprobabili. Tra questi, le coppie con somma pari a $6$ e punteggi diversi sono $4$: $(1,5), (2,4), (4,2), (5,1)$ (la coppia $(3,3)$ è esclusa dalla condizione). La probabilità condizionata è: $P = \\frac{4}{30} = \\frac{2}{15}$.",
    fonte: "Lotto M5 del progetto — M5-25 (Probabilità)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 448,
    materia: "Matematica",
    domanda: "Quanti codici PIN di $4$ cifre tutte diverse tra loro è possibile formare utilizzando esclusivamente le cifre da $1$ a $9$?",
    rispostaCorretta: "$3024$",
    risposteErrate: [
      "$6561$",
      "$126$",
      "$504$",
      "$24$"
    ],
    spiegazione: "Poiché l’ordine delle cifre è rilevante e le cifre devono essere tutte distinte, si calcolano le disposizioni semplici di $9$ elementi distinti presi a gruppi di $4$: $D(9, 4) = 9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$.",
    fonte: "Lotto M5 del progetto — M5-26 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 449,
    materia: "Matematica",
    domanda: "Quanti anagrammi, anche privi di significato linguistico, si possono comporre permutando tutte le lettere della parola \"PRISMA\"?",
    rispostaCorretta: "$720$",
    risposteErrate: [
      "$120$",
      "$360$",
      "$5040$",
      "$64$"
    ],
    spiegazione: "La parola \"PRISMA\" è composta da $6$ lettere tutte distinte tra loro (P, R, I, S, M, A). Il numero totale di anagrammi è dato dalle permutazioni semplici di $6$ elementi: $P_6 = 6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$.",
    fonte: "Lotto M5 del progetto — M5-27 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 450,
    materia: "Matematica",
    domanda: "In un gruppo di $10$ studenti, in quanti modi diversi è possibile scegliere una commissione formata da $3$ studenti?",
    rispostaCorretta: "$120$",
    risposteErrate: [
      "$720$",
      "$30$",
      "$240$",
      "$60$"
    ],
    spiegazione: "Poiché l’ordine di scelta all’interno della commissione non ha alcuna importanza, il numero di possibili commissioni è dato dalle combinazioni semplici di $10$ elementi a gruppi di $3$: $C(10, 3) = \\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$.",
    fonte: "Lotto M5 del progetto — M5-28 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 451,
    materia: "Matematica",
    domanda: "Un ristorante propone un menù a prezzo fisso che prevede la scelta di $1$ antipasto tra $4$ disponibili, $1$ primo piatto tra $5$ disponibili e $1$ dolce tra $3$ disponibili. Quanti menù diversi e completi è possibile comporre?",
    rispostaCorretta: "$60$",
    risposteErrate: [
      "$12$",
      "$20$",
      "$120$",
      "$23$"
    ],
    spiegazione: "Per il principio fondamentale del moltiplicazione del conteggio, il numero totale di combinazioni indipendenti di scelte è il prodotto del numero di opzioni per ciascuna portata: $N = 4 \\cdot 5 \\cdot 3 = 60$.",
    fonte: "Lotto M5 del progetto — M5-29 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 452,
    materia: "Matematica",
    domanda: "Quanti anagrammi distinti, anche privi di senso, si possono formare utilizzando tutte le lettere della parola \"MATEMATICA\"?",
    rispostaCorretta: "$151200$",
    risposteErrate: [
      "$3628800$",
      "$302400$",
      "$75600$",
      "$181440$"
    ],
    spiegazione: "La parola \"MATEMATICA\" contiene $n = 10$ lettere in totale, con le seguenti frequenze di ripetizione: M compare $2$ volte, A compare $3$ volte, T compare $2$ volte, E compare $1$ volta, I compare $1$ volta, C compare $1$ volta. Il numero di permutazioni con ripetizione è: $P_{10}^{(2,3,2)} = \\frac{10!}{2! \\cdot 3! \\cdot 2!} = \\frac{3628800}{2 \\cdot 6 \\cdot 2} = \\frac{3628800}{24} = 151200$.",
    fonte: "Lotto M5 del progetto — M5-30 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 453,
    materia: "Matematica",
    domanda: "Da un gruppo composto da $6$ ingegneri e $4$ architetti si deve formare una squadra di lavoro composta da $3$ ingegneri e $2$ architetti. In quanti modi diversi è possibile selezionare i componenti della squadra?",
    rispostaCorretta: "$120$",
    risposteErrate: [
      "$240$",
      "$720$",
      "$26$",
      "$252$"
    ],
    spiegazione: "I modi di scegliere i $3$ ingegneri tra i $6$ disponibili sono $C(6, 3) = \\frac{6 \\cdot 5 \\cdot 4}{3 \\cdot 2 \\cdot 1} = 20$. I modi di scegliere i $2$ architetti tra i $4$ disponibili sono $C(4, 2) = \\frac{4 \\cdot 3}{2 \\cdot 1} = 6$. Per il principio di moltiplicazione, i modi complessivi per formare la squadra sono: $N = C(6, 3) \\cdot C(4, 2) = 20 \\cdot 6 = 120$.",
    fonte: "Lotto M5 del progetto — M5-31 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 454,
    materia: "Matematica",
    domanda: "$5$ amici, tra cui Anna, si mettono in fila indiana per una foto. Se Anna deve obbligatoriamente occupare il primo posto della fila, in quanti modi diversi possono disporsi complessivamente i $5$ amici?",
    rispostaCorretta: "$24$",
    risposteErrate: [
      "$120$",
      "$60$",
      "$48$",
      "$12$"
    ],
    spiegazione: "Fissata Anna nel primo posto della fila (1 sola scelta), rimangono $4$ posti liberi da assegnare agli altri $4$ amici. I modi possibili di ordinare $4$ persone sono le permutazioni di $4$ elementi: $P_4 = 4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.",
    fonte: "Lotto M5 del progetto — M5-32 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 455,
    materia: "Matematica",
    domanda: "Ad una conferenza partecipano $8$ scienziati. Al termine della riunione, ciascun partecipante stringe la mano esattamente una volta a ciascuno degli altri. Quante strette di mano si verificano in totale?",
    rispostaCorretta: "$28$",
    risposteErrate: [
      "$56$",
      "$64$",
      "$32$",
      "$16$"
    ],
    spiegazione: "Ogni stretta di mano coinvolge in modo non ordinato ed univoco una coppia di partecipanti distinti. Il numero totale di strette di mano corrisponde al numero di combinazioni semplici di $8$ elementi presi a $2$ a $2$: $C(8, 2) = \\binom{8}{2} = \\frac{8 \\cdot 7}{2 \\cdot 1} = 28$.",
    fonte: "Lotto M5 del progetto — M5-33 (Calcolo combinatorio)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  }
,
  {
    id: 456,
    materia: "Scienze",
    domanda: "In base all’analisi dimensionale nel Sistema Internazionale, in quali unità di misura fondamentali si esprime la costante elastica $k$ di una molla ideale definita dalla legge di Hooke ($F = k \\cdot \\Delta x$)?",
    rispostaCorretta: "$\\text{kg}\\cdot\\text{s}^{-2}$",
    risposteErrate: [
      "$\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}$",
      "$\\text{kg}\\cdot\\text{m}^{-1}\\cdot\\text{s}^{-2}$",
      "$\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}$",
      "$\\text{kg}\\cdot\\text{s}^{-1}$"
    ],
    spiegazione: "Dalla legge di Hooke $F = k \\cdot \\Delta x$, si ricava $k = \\frac{F}{\\Delta x}$. Nel SI, la forza si misura in newton ($\\text{N} = \\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}$) e l’allungamento $\\Delta x$ in metri ($\\text{m}$). Quindi le dimensioni di $k$ sono: $[k] = \\frac{\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}}{\\text{m}} = \\text{kg}\\cdot\\text{s}^{-2}$ (equivalente a $\\text{N/m}$).",
    fonte: "Lotto S1 del progetto — S1-01 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 457,
    materia: "Scienze",
    domanda: "Due forze complanari perpendicolari tra loro, di modulo rispettivamente pari a $F_1 = 6\\text{ N}$ e $F_2 = 8\\text{ N}$, sono applicate contemporaneamente al medesimo punto materiale. Qual è il modulo della forza risultante applicata al corpo?",
    rispostaCorretta: "$10\\text{ N}$",
    risposteErrate: [
      "$14\\text{ N}$",
      "$2\\text{ N}$",
      "$7\\text{ N}$",
      "$48\\text{ N}$"
    ],
    spiegazione: "Trattandosi di due vettori ortogonali, il modulo della forza risultante si calcola mediante il teorema di Pitagora: $F_{\\text{tot}} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-02 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 458,
    materia: "Scienze",
    domanda: "Un blocco di massa $m = 4\\text{ kg}$ è posato su un piano inclinato liscio che forma un angolo di $30^\\circ$ rispetto all’orizzontale. Assumendo l’accelerazione di gravità $g = 10\\text{ m/s}^2$, qual è il modulo della componente della forza peso parallela al piano inclinato?",
    rispostaCorretta: "$20\\text{ N}$",
    risposteErrate: [
      "$40\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$40\\sqrt{3}\\text{ N}$",
      "$10\\text{ N}$"
    ],
    spiegazione: "Il modulo della forza peso totale è $P = m \\cdot g = 4\\text{ kg} \\cdot 10\\text{ m/s}^2 = 40\\text{ N}$. La componente della forza peso parallela al piano inclinato è data da $P_\\parallel = P \\cdot \\sin(30^\\circ) = 40 \\cdot 0{,}5 = 20\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-03 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 459,
    materia: "Scienze",
    domanda: "Una forza costante di modulo $F = 50\\text{ N}$, inclinata di un angolo di $60^\\circ$ rispetto alla direzione orizzontale, trascina un carrello su una guida orizzontale priva di attrito per uno spostamento $s = 4\\text{ m}$. Qual è il lavoro complessivo compiuto dalla forza?",
    rispostaCorretta: "$100\\text{ J}$",
    risposteErrate: [
      "$200\\text{ J}$",
      "$100\\sqrt{3}\\text{ J}$",
      "$25\\text{ J}$",
      "$50\\text{ J}$"
    ],
    spiegazione: "Il lavoro compiuto da una forza costante è dato dal prodotto scalare $L = F \\cdot s \\cdot \\cos(\\alpha)$. Con $\\alpha = 60^\\circ$, si ha $\\cos(60^\\circ) = 0{,}5$. Dunque: $L = 50\\text{ N} \\cdot 4\\text{ m} \\cdot 0{,}5 = 100\\text{ J}$.",
    fonte: "Lotto S1 del progetto — S1-04 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 460,
    materia: "Scienze",
    domanda: "Due automobili $A$ e $B$ viaggiano su una strada rettilinea l’una verso l’altra con velocità costanti rispettivamente pari a $v_A = 20\\text{ m/s}$ e $v_B = 30\\text{ m/s}$. Se all’istante iniziale $t = 0$ la loro distanza reciproca è di $500\\text{ m}$, dopo quanti secondi avverrà l’incrocio tra le due vetture?",
    rispostaCorretta: "$10\\text{ s}$",
    risposteErrate: [
      "$25\\text{ s}$",
      "$50\\text{ s}$",
      "$16{,}7\\text{ s}$",
      "$5\\text{ s}$"
    ],
    spiegazione: "Muovendosi in versi opposti l’uno verso l’altro, la velocità relativa di avvicinamento è la somma delle velocità: $v_{\\text{rel}} = v_A + v_B = 20 + 30 = 50\\text{ m/s}$. Il tempo di incontro è: $t = \\frac{d}{v_{\\text{rel}}} = \\frac{500\\text{ m}}{50\\text{ m/s}} = 10\\text{ s}$.",
    fonte: "Lotto S1 del progetto — S1-05 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 461,
    materia: "Scienze",
    domanda: "Un punto materiale, inizialmente fermo, si muove lungo una retta con accelerazione costante pari a $a = 3\\text{ m/s}^2$. Qual è la velocità raggiunta dal punto materiale dopo aver percorso uno spazio di $24\\text{ m}$ a partire dalla posizione di quiete?",
    rispostaCorretta: "$12\\text{ m/s}$",
    risposteErrate: [
      "$8\\text{ m/s}$",
      "$72\\text{ m/s}$",
      "$144\\text{ m/s}$",
      "$6\\text{ m/s}$"
    ],
    spiegazione: "Applicando la formula di Torricelli per il moto uniformemente accelerato con partenza da fermo ($v_0 = 0$): $v^2 = 2 \\cdot a \\cdot s = 2 \\cdot 3\\text{ m/s}^2 \\cdot 24\\text{ m} = 144\\text{ m}^2/\\text{s}^2$. Estraendo la radice quadrata: $v = \\sqrt{144} = 12\\text{ m/s}$.",
    fonte: "Lotto S1 del progetto — S1-06 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 462,
    materia: "Scienze",
    domanda: "Un sasso viene lasciato cadere da fermo dalla sommità di una torre alta $45\\text{ m}$. Trascurando la resistenza dell’aria e ponendo $g = 10\\text{ m/s}^2$, quanto tempo impiega il sasso a raggiungere il suolo?",
    rispostaCorretta: "$3\\text{ s}$",
    risposteErrate: [
      "$4{,}5\\text{ s}$",
      "$9\\text{ s}$",
      "$2{,}25\\text{ s}$",
      "$1{,}5\\text{ s}$"
    ],
    spiegazione: "Dalla legge oraria della caduta libera con partenza da fermo: $h = \\frac{1}{2} g t^2$. Esplicitando il tempo: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 45}{10}} = \\sqrt{\\frac{90}{10}} = \\sqrt{9} = 3\\text{ s}$.",
    fonte: "Lotto S1 del progetto — S1-07 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 463,
    materia: "Scienze",
    domanda: "Un corpo viene lanciato verticalmente verso l’alto dal livello del suolo con una velocità iniziale di $20\\text{ m/s}$. Trascurando ogni attrito con l’aria e assumendo $g = 10\\text{ m/s}^2$, quale altezza massima raggiunge il corpo rispetto al punto di lancio?",
    rispostaCorretta: "$20\\text{ m}$",
    risposteErrate: [
      "$40\\text{ m}$",
      "$10\\text{ m}$",
      "$2\\text{ m}$",
      "$200\\text{ m}$"
    ],
    spiegazione: "Nel punto di massima altezza la velocità si annulla ($v = 0$). Per la conservazione dell’energia meccanica (oppure dalla cinematica $0 = v_0^2 - 2gh_{\\max}$): $h_{\\max} = \\frac{v_0^2}{2g} = \\frac{20^2}{2 \\cdot 10} = \\frac{400}{20} = 20\\text{ m}$.",
    fonte: "Lotto S1 del progetto — S1-08 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 464,
    materia: "Scienze",
    domanda: "Un carrello si muove lungo una traiettoria rettilinea. Il grafico della velocità in funzione del tempo ha forma triangolare: parte da $v = 0\\text{ m/s}$ a $t = 0\\text{ s}$, raggiunge linearmente la velocità di picco $v = 10\\text{ m/s}$ a $t = 3\\text{ s}$, e decelera linearmente fino a fermarsi ($v = 0\\text{ m/s}$) all’istante $t = 6\\text{ s}$. Qual è lo spazio totale percorso dal carrello nei $6\\text{ s}$?",
    rispostaCorretta: "$30\\text{ m}$",
    risposteErrate: [
      "$60\\text{ m}$",
      "$15\\text{ m}$",
      "$20\\text{ m}$",
      "$45\\text{ m}$"
    ],
    spiegazione: "In un grafico velocità-tempo, lo spazio percorso corrisponde all’area sottesa dalla curva. Per un profilo triangolare con base $b = 6\\text{ s}$ e altezza $h = 10\\text{ m/s}$, l’area è data da: $\\Delta s = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{altezza} = \\frac{1}{2} \\cdot 6\\text{ s} \\cdot 10\\text{ m/s} = 30\\text{ m}$.",
    fonte: "Lotto S1 del progetto — S1-09 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 465,
    materia: "Scienze",
    domanda: "Una biglia viene lanciata orizzontalmente con velocità $v_x = 15\\text{ m/s}$ dal bordo di un tavolo alto $h = 20\\text{ m}$ rispetto al pavimento. Trascurando la resistenza dell’aria e ponendo $g = 10\\text{ m/s}^2$, a quale distanza orizzontale dalla base del tavolo la biglia tocca terra?",
    rispostaCorretta: "$30\\text{ m}$",
    risposteErrate: [
      "$15\\text{ m}$",
      "$60\\text{ m}$",
      "$45\\text{ m}$",
      "$20\\text{ m}$"
    ],
    spiegazione: "Il moto verticale è una caduta libera da fermo: $h = \\frac{1}{2} g t^2 \\implies t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 20}{10}} = \\sqrt{4} = 2\\text{ s}$. Il moto orizzontale è rettilineo uniforme: la gittata orizzontale è data da $x = v_x \\cdot t = 15\\text{ m/s} \\cdot 2\\text{ s} = 30\\text{ m}$.",
    fonte: "Lotto S1 del progetto — S1-10 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 466,
    materia: "Scienze",
    domanda: "Un corpo di massa $m = 5\\text{ kg}$ è posto su un piano orizzontale privo di attrito ed è soggetto a tre forze orizzontali: $F_1 = 12\\text{ N}$ e $F_2 = 8\\text{ N}$ dirette verso destra, e $F_3 = 5\\text{ N}$ diretta verso sinistra. Qual è l’accelerazione del corpo?",
    rispostaCorretta: "$3\\text{ m/s}^2$",
    risposteErrate: [
      "$5\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$",
      "$15\\text{ m/s}^2$"
    ],
    spiegazione: "La forza netta risultante agente sul corpo lungo la direzione orizzontale è: $F_{\\text{net}} = F_1 + F_2 - F_3 = 12 + 8 - 5 = 15\\text{ N}$ (verso destra). Per il secondo principio della dinamica ($F_{\\text{net}} = m \\cdot a$): $a = \\frac{F_{\\text{net}}}{m} = \\frac{15\\text{ N}}{5\\text{ kg}} = 3\\text{ m/s}^2$.",
    fonte: "Lotto S1 del progetto — S1-11 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 467,
    materia: "Scienze",
    domanda: "Un cavallo trascina un carretto esercitando su di esso una forza orizzontale in avanti pari a $600\\text{ N}$. In base al terzo principio della dinamica (azione e reazione), quale forza esercita contemporaneamente il carretto sul cavallo?",
    rispostaCorretta: "Una forza di modulo esattamente pari a $600\\text{ N}$, diretta all’indietro",
    risposteErrate: [
      "Una forza di modulo inferiore a $600\\text{ N}$, altrimenti il sistema non potrebbe accelerare in avanti",
      "Una forza di modulo nullo, poiché il carretto è un corpo passivo trainato",
      "Una forza di modulo superiore a $600\\text{ N}$, dovuta alla presenza dell’attrito con il terreno",
      "Una forza di modulo pari a $600\\text{ N}$, ma diretta nello stesso verso del moto del cavallo"
    ],
    spiegazione: "Per il terzo principio di Newton (principio di azione e reazione), le forze di interazione tra due corpi sono sempre uguali in modulo, opposte in verso e applicate a corpi distinti. Il carretto esercita sul cavallo una forza di modulo esattamente pari a $600\\text{ N}$ diretta in verso opposto (all’indietro).",
    fonte: "Lotto S1 del progetto — S1-12 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 468,
    materia: "Scienze",
    domanda: "Una cassa di massa $m = 6\\text{ kg}$ scivola su un pavimento orizzontale con coefficiente di attrito dinamico $\\mu_d = 0{,}25$. Assumendo $g = 10\\text{ m/s}^2$, qual è il modulo della forza di attrito dinamico che si oppone allo scivolamento della cassa?",
    rispostaCorretta: "$15\\text{ N}$",
    risposteErrate: [
      "$60\\text{ N}$",
      "$1{,}5\\text{ N}$",
      "$240\\text{ N}$",
      "$2{,}5\\text{ N}$"
    ],
    spiegazione: "Su un piano orizzontale, la reazione vincolare normale $N$ eguaglia la forza peso: $N = m \\cdot g = 6\\text{ kg} \\cdot 10\\text{ m/s}^2 = 60\\text{ N}$. La forza di attrito dinamico è data da: $F_{\\text{att}} = \\mu_d \\cdot N = 0{,}25 \\cdot 60\\text{ N} = 15\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-13 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 469,
    materia: "Scienze",
    domanda: "Un blocco di massa $m = 10\\text{ kg}$ è fermo su un tavolo orizzontale. Il coefficiente di attrito statico tra blocco e piano è $\\mu_s = 0{,}40$ ($g = 10\\text{ m/s}^2$). Se al blocco viene applicata una forza orizzontale $F = 25\\text{ N}$, qual è il modulo della forza di attrito statico effettivamente agente sul blocco?",
    rispostaCorretta: "$25\\text{ N}$",
    risposteErrate: [
      "$40\\text{ N}$",
      "$100\\text{ N}$",
      "$0\\text{ N}$",
      "$15\\text{ N}$"
    ],
    spiegazione: "La forza di attrito statico massima (forza di primo distacco) è $F_{s,\\max} = \\mu_s \\cdot m \\cdot g = 0{,}40 \\cdot 100\\text{ N} = 40\\text{ N}$. Poiché la forza applicata $F = 25\\text{ N}$ è inferiore a $F_{s,\\max}$, il blocco rimane fermo in equilibrio statico; pertanto la forza di attrito statico bilancia esattamente la forza applicata, assumendo il valore di $25\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-14 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 470,
    materia: "Scienze",
    domanda: "Una persona di massa $m = 70\\text{ kg}$ si trova in piedi sopra una bilancia all’interno di un ascensore. Se l’ascensore accelera verso l’alto con accelerazione costante $a = 2\\text{ m/s}^2$, quale valore di forza normale (peso apparente) registra la bilancia? (Si assuma $g = 10\\text{ m/s}^2$)",
    rispostaCorretta: "$840\\text{ N}$",
    risposteErrate: [
      "$700\\text{ N}$",
      "$560\\text{ N}$",
      "$140\\text{ N}$",
      "$980\\text{ N}$"
    ],
    spiegazione: "Applicando il secondo principio di Newton lungo la verticale: $N - P = m \\cdot a \\implies N = m(g + a)$. Sostituendo i valori numerici: $N = 70\\text{ kg} \\cdot (10 + 2)\\text{ m/s}^2 = 70 \\cdot 12 = 840\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-15 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 471,
    materia: "Scienze",
    domanda: "In una macchina di Atwood ideale, due masse $m_1 = 3\\text{ kg}$ e $m_2 = 2\\text{ kg}$ sono collegate agli estremi di un filo inestensibile e privo di massa che scorre su una carrucola ideale priva di attrito e di inerzia. Posto $g = 10\\text{ m/s}^2$, qual è l’accelerazione del sistema una volta lasciato libero di muoversi?",
    rispostaCorretta: "$2\\text{ m/s}^2$",
    risposteErrate: [
      "$10\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$3{,}3\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$"
    ],
    spiegazione: "L’accelerazione di una macchina di Atwood ideale è data da: $a = \\frac{m_1 - m_2}{m_1 + m_2} \\cdot g$. Sostituendo i valori numerici: $a = \\frac{3 - 2}{3 + 2} \\cdot 10 = \\frac{1}{5} \\cdot 10 = 2\\text{ m/s}^2$.",
    fonte: "Lotto S1 del progetto — S1-16 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 472,
    materia: "Scienze",
    domanda: "Due blocchi $A$ e $B$ di massa $m_A = 2\\text{ kg}$ e $m_B = 3\\text{ kg}$ sono appoggiati su un piano orizzontale liscio e collegati tra loro da una corda inestensibile di massa trascurabile. Se al blocco $B$ viene applicata una forza orizzontale costante $F = 20\\text{ N}$ che traina l’intero sistema, qual è la tensione $T$ nella corda che unisce i due blocchi?",
    rispostaCorretta: "$8\\text{ N}$",
    risposteErrate: [
      "$12\\text{ N}$",
      "$20\\text{ N}$",
      "$10\\text{ N}$",
      "$4\\text{ N}$"
    ],
    spiegazione: "L’accelerazione comune dell’intero sistema è $a = \\frac{F}{m_A + m_B} = \\frac{20\\text{ N}}{2 + 3\\text{ kg}} = 4\\text{ m/s}^2$. La tensione $T$ è l’unica forza orizzontale che accelera il blocco $A$: $T = m_A \\cdot a = 2\\text{ kg} \\cdot 4\\text{ m/s}^2 = 8\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-17 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 473,
    materia: "Scienze",
    domanda: "Un’automobile di massa $m = 1200\\text{ kg}$ accelera lungo un tratto rettilineo raddoppiando la propria velocità da $v_1 = 10\\text{ m/s}$ a $v_2 = 20\\text{ m/s}$. Di quanto aumenta la sua energia cinetica?",
    rispostaCorretta: "$180\\text{ kJ}$",
    risposteErrate: [
      "$360\\text{ kJ}$",
      "$60\\text{ kJ}$",
      "$240\\text{ kJ}$",
      "$300\\text{ kJ}$"
    ],
    spiegazione: "La variazione di energia cinetica è: $\\Delta E_c = \\frac{1}{2} m v_2^2 - \\frac{1}{2} m v_1^2 = \\frac{1}{2} m (v_2^2 - v_1^2)$. Sostituendo: $\\Delta E_c = \\frac{1}{2} \\cdot 1200\\text{ kg} \\cdot (20^2 - 10^2)\\text{ m}^2/\\text{s}^2 = 600 \\cdot (400 - 100) = 600 \\cdot 300 = 180\\,000\\text{ J} = 180\\text{ kJ}$.",
    fonte: "Lotto S1 del progetto — S1-18 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 474,
    materia: "Scienze",
    domanda: "Una molla ideale di costante elastica $k = 400\\text{ N/m}$ viene compressa di una quantità $\\Delta x = 10\\text{ cm} = 0{,}10\\text{ m}$ rispetto alla sua lunghezza di riposo. Qual è l’energia potenziale elastica immagazzinata nella molla compressa?",
    rispostaCorretta: "$2\\text{ J}$",
    risposteErrate: [
      "$4\\text{ J}$",
      "$20\\text{ J}$",
      "$40\\text{ J}$",
      "$0{,}2\\text{ J}$"
    ],
    spiegazione: "L’energia potenziale elastica è data da: $E_{pe} = \\frac{1}{2} k (\\Delta x)^2$. Sostituendo i valori numerici in unità SI: $E_{pe} = \\frac{1}{2} \\cdot 400\\text{ N/m} \\cdot (0{,}10\\text{ m})^2 = 200 \\cdot 0{,}01 = 2\\text{ J}$.",
    fonte: "Lotto S1 del progetto — S1-19 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 475,
    materia: "Scienze",
    domanda: "Un carrellino di massa $m = 0{,}5\\text{ kg}$ è appoggiato a una molla orizzontale compressa di $x = 0{,}10\\text{ m}$ con costante elastica $k = 200\\text{ N/m}$. Se il sistema viene rilasciato da fermo su un piano privo di attrito, con quale velocità il carrellino si separa dalla molla nel momento in cui essa torna alla lunghezza di riposo?",
    rispostaCorretta: "$2\\text{ m/s}$",
    risposteErrate: [
      "$4\\text{ m/s}$",
      "$1\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$0{,}2\\text{ m/s}$"
    ],
    spiegazione: "In assenza di attriti, l’energia potenziale elastica iniziale si trasforma interamente in energia cinetica del carrello: $\\frac{1}{2} k x^2 = \\frac{1}{2} m v^2 \\implies v = x \\sqrt{\\frac{k}{m}}$. Sostituendo: $v = 0{,}10 \\cdot \\sqrt{\\frac{200}{0{,}5}} = 0{,}10 \\cdot \\sqrt{400} = 0{,}10 \\cdot 20 = 2\\text{ m/s}$.",
    fonte: "Lotto S1 del progetto — S1-20 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 476,
    materia: "Scienze",
    domanda: "Un blocco di massa $m = 2\\text{ kg}$, animato da una velocità iniziale di modulo $v_0 = 6\\text{ m/s}$, scivola su un pavimento orizzontale scabro fino a fermarsi completamente per effetto dell’attrito. Qual è il lavoro complessivo compiuto dalla forza di attrito durante la frenata?",
    rispostaCorretta: "$-36\\text{ J}$",
    risposteErrate: [
      "$+36\\text{ J}$",
      "$-72\\text{ J}$",
      "$-18\\text{ J}$",
      "$-12\\text{ J}$"
    ],
    spiegazione: "Per il teorema dell’energia cinetica (forze vive), il lavoro totale compiuto sul corpo è uguale alla variazione di energia cinetica: $L = \\Delta E_c = E_{c,f} - E_{c,i} = 0 - \\frac{1}{2} m v_0^2 = -\\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (6\\text{ m/s})^2 = -36\\text{ J}$ (il segno negativo indica che la forza di attrito dissipa energia compiendo lavoro resistente).",
    fonte: "Lotto S1 del progetto — S1-21 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 477,
    materia: "Scienze",
    domanda: "Un motore elettrico solleva verticalmente a velocità costante un carico di massa $m = 300\\text{ kg}$ fino a un’altezza $h = 10\\text{ m}$ in un intervallo di tempo pari a $15\\text{ s}$. Assumendo $g = 10\\text{ m/s}^2$, qual è la potenza media erogata dal motore?",
    rispostaCorretta: "$2\\text{ kW}$",
    risposteErrate: [
      "$30\\text{ kW}$",
      "$200\\text{ W}$",
      "$450\\text{ kW}$",
      "$1\\text{ kW}$"
    ],
    spiegazione: "Il lavoro compiuto per sollevare il carico è $L = m \\cdot g \\cdot h = 300\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 10\\text{ m} = 30\\,000\\text{ J}$. La potenza media è il rapporto tra lavoro e tempo: $P = \\frac{L}{\\Delta t} = \\frac{30\\,000\\text{ J}}{15\\text{ s}} = 2000\\text{ W} = 2\\text{ kW}$.",
    fonte: "Lotto S1 del progetto — S1-22 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 478,
    materia: "Scienze",
    domanda: "Un blocco di massa $m = 4\\text{ kg}$ scivola partendo da fermo dalla sommità di un piano inclinato alto $h = 3\\text{ m}$. A causa dell’attrito con la superficie del piano, il blocco giunge alla base con una velocità di modulo $v = 3\\text{ m/s}$. Assumendo $g = 10\\text{ m/s}^2$, qual è la quantità complessiva di energia termica dissipata dalla forza di attrito durante la discesa?",
    rispostaCorretta: "$102\\text{ J}$",
    risposteErrate: [
      "$120\\text{ J}$",
      "$18\\text{ J}$",
      "$138\\text{ J}$",
      "$84\\text{ J}$"
    ],
    spiegazione: "L’energia meccanica iniziale è puramente potenziale gravitazionale: $E_i = m \\cdot g \\cdot h = 4\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 3\\text{ m} = 120\\text{ J}$. L’energia cinetica finale alla base è: $E_f = \\frac{1}{2} m v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (3\\text{ m/s})^2 = 18\\text{ J}$. L’energia dissipata dall’attrito corrisponde alla perdita di energia meccanica: $Q = E_i - E_f = 120 - 18 = 102\\text{ J}$.",
    fonte: "Lotto S1 del progetto — S1-23 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 479,
    materia: "Scienze",
    domanda: "Una forza costante orizzontale $F$ agisce su un corpo di massa $m = 4\\text{ kg}$ per un intervallo di tempo $\\Delta t = 0{,}5\\text{ s}$, incrementandone la velocità da $v_1 = 2\\text{ m/s}$ a $v_2 = 8\\text{ m/s}$. Qual è il modulo della forza $F$ applicata?",
    rispostaCorretta: "$48\\text{ N}$",
    risposteErrate: [
      "$24\\text{ N}$",
      "$12\\text{ N}$",
      "$6\\text{ N}$",
      "$96\\text{ N}$"
    ],
    spiegazione: "Per il teorema dell’impulso: $I = F \\cdot \\Delta t = \\Delta p = m(v_2 - v_1)$. Sostituendo i valori numerici: $F \\cdot 0{,}5 = 4 \\cdot (8 - 2) = 4 \\cdot 6 = 24\\text{ kg}\\cdot\\text{m/s} \\implies F = \\frac{24}{0{,}5} = 48\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-24 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 480,
    materia: "Scienze",
    domanda: "Un cannone di massa $M = 1000\\text{ kg}$, inizialmente fermo su una superficie orizzontale priva di attrito, spara orizzontalmente un proiettile di massa $m = 10\\text{ kg}$ con velocità $v = 400\\text{ m/s}$. Qual è il modulo della velocità di rinculo del cannone subito dopo lo sparo?",
    rispostaCorretta: "$4\\text{ m/s}$",
    risposteErrate: [
      "$40\\text{ m/s}$",
      "$0{,}4\\text{ m/s}$",
      "$400\\text{ m/s}$",
      "$2\\text{ m/s}$"
    ],
    spiegazione: "Essendo nulle le forze esterne orizzontali, la quantità di moto totale del sistema si conserva: $P_{\\text{tot}} = 0 \\implies M \\cdot V_{\\text{rinculo}} - m \\cdot v = 0 \\implies V_{\\text{rinculo}} = \\frac{m \\cdot v}{M} = \\frac{10\\text{ kg} \\cdot 400\\text{ m/s}}{1000\\text{ kg}} = \\frac{4000}{1000} = 4\\text{ m/s}$.",
    fonte: "Lotto S1 del progetto — S1-25 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 481,
    materia: "Scienze",
    domanda: "Un carrello $A$ di massa $m_A = 2\\text{ kg}$ si muove su un binario rettilineo privo di attrito con velocità $v_A = 6\\text{ m/s}$ e urta un carrello $B$ di massa $m_B = 4\\text{ kg}$ inizialmente fermo. Se dopo l’urto i due carrelli rimangono uniti muovendosi assieme (urto perfettamente anelastico), qual è la loro velocità finale comune?",
    rispostaCorretta: "$2\\text{ m/s}$",
    risposteErrate: [
      "$3\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$1{,}5\\text{ m/s}$"
    ],
    spiegazione: "Nel corso dell’urto si conserva la quantità di moto totale: $m_A \\cdot v_A + m_B \\cdot 0 = (m_A + m_B) \\cdot v_f$. Da cui: $v_f = \\frac{m_A \\cdot v_A}{m_A + m_B} = \\frac{2\\text{ kg} \\cdot 6\\text{ m/s}}{2 + 4\\text{ kg}} = \\frac{12}{6} = 2\\text{ m/s}$.",
    fonte: "Lotto S1 del progetto — S1-26 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 482,
    materia: "Scienze",
    domanda: "Una sferetta di massa $m$, in moto rettilineo con velocità $v$ su un piano liscio, urta frontalmente ed elasticamente una seconda sferetta identica (di pari massa $m$) inizialmente ferma. Cosa accade alle velocità delle due sferette subito dopo l’urto?",
    rispostaCorretta: "La prima sferetta si ferma completamente e la seconda si muove in avanti con velocità $v$",
    risposteErrate: [
      "Entrambe le sferette proseguono assieme in avanti con velocità $v/2$",
      "La prima sferetta rimbalza all’indietro con velocità $-v$ e la seconda resta ferma",
      "Entrambe le sferette proseguono in avanti con la medesima velocità $v$",
      "La prima sferetta rimbalza all’indietro con velocità $-v/2$ e la seconda avanza con velocità $v/2$"
    ],
    spiegazione: "In un urto elastico frontale tra due corpi di uguale massa in cui uno è inizialmente fermo, la conservazione simultanea della quantità di moto ($m v = m v_1 + m v_2$) e dell’energia cinetica ($\\frac{1}{2}mv^2 = \\frac{1}{2}mv_1^2 + \\frac{1}{2}mv_2^2$) impone lo scambio completo delle velocità: il corpo incidente si ferma ($v_1 = 0$) e il corpo bersaglio acquisisce la velocità iniziale $v_2 = v$.",
    fonte: "Lotto S1 del progetto — S1-27 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 483,
    materia: "Scienze",
    domanda: "Una palla di massa $m = 0{,}20\\text{ kg}$ viaggia orizzontalmente con velocità $v = 15\\text{ m/s}$, urta perpendicolarmente una parete rigida verticale e rimbalza all’indietro in senso opposto con la medesima velocità in modulo ($15\\text{ m/s}$). Qual è il modulo della variazione della quantità di moto della palla?",
    rispostaCorretta: "$6\\text{ kg}\\cdot\\text{m/s}$",
    risposteErrate: [
      "$0\\text{ kg}\\cdot\\text{m/s}$",
      "$3\\text{ kg}\\cdot\\text{m/s}$",
      "$1{,}5\\text{ kg}\\cdot\\text{m/s}$",
      "$30\\text{ kg}\\cdot\\text{m/s}$"
    ],
    spiegazione: "Tenendo conto della natura vettoriale della quantità di moto, fissato un asse orizzontale concorde alla velocità iniziale ($p_i = +m \\cdot v = +0{,}20 \\cdot 15 = +3\\text{ kg}\\cdot\\text{m/s}$), dopo il rimbalzo la velocità è invertita ($p_f = -m \\cdot v = -3\\text{ kg}\\cdot\\text{m/s}$). La variazione è: $\\Delta p = p_f - p_i = -3 - (+3) = -6\\text{ kg}\\cdot\\text{m/s}$, il cui modulo è $|\\Delta p| = 6\\text{ kg}\\cdot\\text{m/s}$.",
    fonte: "Lotto S1 del progetto — S1-28 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 484,
    materia: "Scienze",
    domanda: "Un punto materiale si muove di moto circolare uniforme lungo una circonferenza di raggio $R = 0{,}5\\text{ m}$ compiendo $2$ giri completi al secondo (frequenza $f = 2\\text{ Hz}$). Qual è il modulo della sua velocità tangenziale?",
    rispostaCorretta: "$2\\pi\\text{ m/s}$",
    risposteErrate: [
      "$\\pi\\text{ m/s}$",
      "$4\\pi\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$0{,}5\\pi\\text{ m/s}$"
    ],
    spiegazione: "Nel moto circolare uniforme, la velocità tangenziale è data da $v = 2\\pi \\cdot f \\cdot R = \\omega \\cdot R$. Sostituendo $f = 2\\text{ s}^{-1}$ e $R = 0{,}5\\text{ m}$: $v = 2\\pi \\cdot 2 \\cdot 0{,}5 = 2\\pi\\text{ m/s}$.",
    fonte: "Lotto S1 del progetto — S1-29 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 485,
    materia: "Scienze",
    domanda: "Un’automobile percorre a velocità costante pari a $v = 20\\text{ m/s}$ ($72\\text{ km/h}$) una curva circolare pianeggiante di raggio $R = 80\\text{ m}$. Qual è l’accelerazione centripeta a cui è sottoposto il veicolo?",
    rispostaCorretta: "$5\\text{ m/s}^2$",
    risposteErrate: [
      "$0{,}25\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$",
      "$0{,}20\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$"
    ],
    spiegazione: "L’accelerazione centripeta in un moto circolare uniforme è data dalla relazione: $a_c = \\frac{v^2}{R}$. Sostituendo i valori: $a_c = \\frac{20^2}{80} = \\frac{400}{80} = 5\\text{ m/s}^2$.",
    fonte: "Lotto S1 del progetto — S1-30 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 486,
    materia: "Scienze",
    domanda: "Un sasso di massa $m = 0{,}5\\text{ kg}$ è fissato a un estremo di una fune inestensibile di lunghezza $r = 2\\text{ m}$, il cui altro estremo è vincolato al centro di una guida circolare su un piano orizzontale liscio. Se il sasso ruota a velocità angolare costante $\\omega = 4\\text{ rad/s}$, qual è la tensione $T$ esercitata dalla fune sul sasso?",
    rispostaCorretta: "$16\\text{ N}$",
    risposteErrate: [
      "$4\\text{ N}$",
      "$8\\text{ N}$",
      "$32\\text{ N}$",
      "$64\\text{ N}$"
    ],
    spiegazione: "Sul piano orizzontale liscio, la tensione della fune fornisce interamente la forza centripeta necessaria a mantenere il sasso in traiettoria circolare: $T = F_c = m \\cdot \\omega^2 \\cdot r$. Sostituendo i valori numerici: $T = 0{,}5\\text{ kg} \\cdot (4\\text{ rad/s})^2 \\cdot 2\\text{ m} = 0{,}5 \\cdot 16 \\cdot 2 = 16\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-31 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 487,
    materia: "Scienze",
    domanda: "Un pianeta sferico ha massa pari al doppio di quella terrestre ($M_P = 2 M_T$) e raggio pari al doppio di quello terrestre ($R_P = 2 R_T$). Sapendo che l’accelerazione di gravità sulla superficie della Terra vale $g_T = 10\\text{ m/s}^2$, qual è il valore dell’accelerazione di gravità $g_P$ sulla superficie di tale pianeta?",
    rispostaCorretta: "$5\\text{ m/s}^2$",
    risposteErrate: [
      "$10\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$",
      "$40\\text{ m/s}^2$"
    ],
    spiegazione: "L’accelerazione di gravità sulla superficie di un pianeta di massa $M$ e raggio $R$ è data dalla legge di gravitazione: $g = G \\frac{M}{R^2}$. Per il pianeta considerato: $g_P = G \\frac{M_P}{R_P^2} = G \\frac{2 M_T}{(2 R_T)^2} = G \\frac{2 M_T}{4 R_T^2} = \\frac{1}{2} \\left(G \\frac{M_T}{R_T^2}\\right) = \\frac{1}{2} g_T = \\frac{1}{2} \\cdot 10\\text{ m/s}^2 = 5\\text{ m/s}^2$.",
    fonte: "Lotto S1 del progetto — S1-32 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 488,
    materia: "Scienze",
    domanda: "Per serrare un bullone, un meccanico applica una forza perpendicolare di modulo $F = 80\\text{ N}$ all’estremità di una chiave inglese lunga $L = 25\\text{ cm} = 0{,}25\\text{ m}$. Qual è il modulo del momento della forza applicata rispetto al centro del bullone?",
    rispostaCorretta: "$20\\text{ N}\\cdot\\text{m}$",
    risposteErrate: [
      "$2000\\text{ N}\\cdot\\text{m}$",
      "$320\\text{ N}\\cdot\\text{m}$",
      "$40\\text{ N}\\cdot\\text{m}$",
      "$10\\text{ N}\\cdot\\text{m}$"
    ],
    spiegazione: "Il momento di una forza rispetto a un polo è dato dal prodotto vettoriale del braccio per la forza. Essendo la forza perpendicolare al braccio: $M = F \\cdot b = 80\\text{ N} \\cdot 0{,}25\\text{ m} = 20\\text{ N}\\cdot\\text{m}$.",
    fonte: "Lotto S1 del progetto — S1-33 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 489,
    materia: "Scienze",
    domanda: "Un’asta rigida orizzontale di massa trascurabile è incernierata su un fulcro. A sinistra del fulcro, a una distanza $b_1 = 0{,}40\\text{ m}$, è applicato un peso di $150\\text{ N}$. Quale forza $F_2$ diretta verso il basso deve essere applicata a destra del fulcro, a una distanza $b_2 = 1{,}20\\text{ m}$, per mantenere l’asta in perfetto equilibrio orizzontale?",
    rispostaCorretta: "$50\\text{ N}$",
    risposteErrate: [
      "$450\\text{ N}$",
      "$60\\text{ N}$",
      "$75\\text{ N}$",
      "$100\\text{ N}$"
    ],
    spiegazione: "La condizione di equilibrio per una leva alla rotazione rispetto al fulcro è l’annullamento della somma dei momenti: $F_1 \\cdot b_1 = F_2 \\cdot b_2$. Ricavando $F_2$: $F_2 = \\frac{F_1 \\cdot b_1}{b_2} = \\frac{150\\text{ N} \\cdot 0{,}40\\text{ m}}{1{,}20\\text{ m}} = \\frac{60}{1{,}20} = 50\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-34 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 490,
    materia: "Scienze",
    domanda: "Una trave omogenea di massa $M = 20\\text{ kg}$ e lunghezza $L$ è incernierata a una parete verticale in corrispondenza del suo estremo sinistro. L’estremo destro della trave è sostenuto da un cavo tirante inclinato di $30^\\circ$ rispetto alla trave stessa. Assumendo $g = 10\\text{ m/s}^2$, qual è la tensione $T$ nel cavo per mantenere la trave in equilibrio statico orizzontale?",
    rispostaCorretta: "$200\\text{ N}$",
    risposteErrate: [
      "$100\\text{ N}$",
      "$400\\text{ N}$",
      "$\\frac{200}{\\sqrt{3}}\\text{ N}$",
      "$\\frac{400}{\\sqrt{3}}\\text{ N}$"
    ],
    spiegazione: "Trattandosi di una trave omogenea, la forza peso totale $P = M \\cdot g = 20\\text{ kg} \\cdot 10\\text{ m/s}^2 = 200\\text{ N}$ è applicata nel baricentro a distanza $L/2$ dalla cerniera. Il momento orario del peso rispetto alla cerniera è: $M_P = P \\cdot \\frac{L}{2} = 200 \\cdot \\frac{L}{2} = 100 L$. La tensione $T$ del cavo, applicata all’estremo a distanza $L$, esercita una componente verticale verso l’alto $T \\sin(30^\\circ) = 0{,}5 T$, generando un momento antiorario: $M_T = (T \\sin(30^\\circ)) \\cdot L = 0{,}5 T L$. Uguagliando i momenti per l’equilibrio statico: $0{,}5 T L = 100 L \\implies T = \\frac{100}{0{,}5} = 200\\text{ N}$.",
    fonte: "Lotto S1 del progetto — S1-35 (Meccanica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 491,
    materia: "Scienze",
    domanda: "La temperatura iniziale di uno pneumatico è pari a $27^\\circ\\text{C}$ ($300{,}15\\text{ K} \\approx 300\\text{ K}$). A seguito del rotolamento su strada, la temperatura assoluta dell’aria all’interno aumenta di una variazione $\\Delta T = 45\\text{ K}$. Qual è la temperatura finale dell’aria espressa in gradi Celsius ($^\\circ\\text{C}$)?",
    rispostaCorretta: "$72^\\circ\\text{C}$",
    risposteErrate: [
      "$345^\\circ\\text{C}$",
      "$18^\\circ\\text{C}$",
      "$117^\\circ\\text{C}$",
      "$27^\\circ\\text{C}$"
],
    spiegazione: "Una variazione di temperatura di $1\\text{ K}$ equivale esattamente a una variazione di $1^\\circ\\text{C}$ ($\\Delta T_{\\text{Celsius}} = \\Delta T_{\\text{Kelvin}}$). Pertanto, la temperatura finale in gradi Celsius è: $T_f = T_i + \\Delta T = 27^\\circ\\text{C} + 45^\\circ\\text{C} = 72^\\circ\\text{C}$ (equivalente a $345\\text{ K}$).",
    fonte: "Lotto S2 del progetto — S2-01 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 492,
    materia: "Scienze",
    domanda: "Una rotaia d’acciaio ha una lunghezza iniziale $L_0 = 50\\text{ m}$ alla temperatura di $10^\\circ\\text{C}$. Durante una calda giornata estiva la sua temperatura sale a $40^\\circ\\text{C}$. Sapendo che il coefficiente di dilatazione lineare dell’acciaio è $\\lambda = 1{,}2 \\times 10^{-5}\\text{ K}^{-1}$, di quanti millimetri si allunga complessivamente la rotaia?",
    rispostaCorretta: "$18\\text{ mm}$",
    risposteErrate: [
      "$1{,}8\\text{ mm}$",
      "$24\\text{ mm}$",
      "$6\\text{ mm}$",
      "$180\\text{ mm}$"
],
    spiegazione: "La variazione di temperatura è $\\Delta T = 40^\\circ\\text{C} - 10^\\circ\\text{C} = 30\\text{ K}$. L’allungamento termico lineare è dato da $\\Delta L = L_0 \\cdot \\lambda \\cdot \\Delta T = 50\\text{ m} \\cdot 1{,}2 \\times 10^{-5}\\text{ K}^{-1} \\cdot 30\\text{ K} = 1800 \\times 10^{-5}\\text{ m} = 0{,}018\\text{ m} = 18\\text{ mm}$.",
    fonte: "Lotto S2 del progetto — S2-02 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 493,
    materia: "Scienze",
    domanda: "Un blocco metallico di massa $m = 2\\text{ kg}$ assorbe una quantità di calore pari a $Q = 9000\\text{ J}$, incrementando la propria temperatura di $\\Delta T = 15^\\circ\\text{C}$. Qual è il calore specifico $c$ del metallo?",
    rispostaCorretta: "$300\\text{ J}/(\\text{kg}\\cdot\\text{K})$",
    risposteErrate: [
      "$600\\text{ J}/(\\text{kg}\\cdot\\text{K})$",
      "$150\\text{ J}/(\\text{kg}\\cdot\\text{K})$",
      "$4500\\text{ J}/(\\text{kg}\\cdot\\text{K})$",
      "$60\\text{ J}/(\\text{kg}\\cdot\\text{K})$"
],
    spiegazione: "Dalla legge fondamentale della calorimetria $Q = m \\cdot c \\cdot \\Delta T$, esplicitando il calore specifico si ha: $c = \\frac{Q}{m \\cdot \\Delta T} = \\frac{9000\\text{ J}}{2\\text{ kg} \\cdot 15\\text{ K}} = \\frac{9000}{30} = 300\\text{ J}/(\\text{kg}\\cdot\\text{K})$.",
    fonte: "Lotto S2 del progetto — S2-03 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 494,
    materia: "Scienze",
    domanda: "In un calorimetro ideale privo di dispersioni termiche, un blocchetto di alluminio di massa $m_1 = 0{,}20\\text{ kg}$ e calore specifico $c_1 = 900\\text{ J}/(\\text{kg}\\cdot\\text{K})$ alla temperatura $T_1 = 100^\\circ\\text{C}$ viene immerso in una massa $m_2 = 0{,}10\\text{ kg}$ di acqua ($c_2 = 4200\\text{ J}/(\\text{kg}\\cdot\\text{K})$) inizialmente alla temperatura $T_2 = 20^\\circ\\text{C}$. Qual è la temperatura di equilibrio $T_{\\text{eq}}$ raggiunta dal sistema?",
    rispostaCorretta: "$44^\\circ\\text{C}$",
    risposteErrate: [
      "$60^\\circ\\text{C}$",
      "$73{,}3^\\circ\\text{C}$",
      "$76^\\circ\\text{C}$",
      "$30^\\circ\\text{C}$"
],
    spiegazione: "Le capacità termiche dei due corpi sono: $C_1 = m_1 c_1 = 0{,}20 \\cdot 900 = 180\\text{ J/K}$ e $C_2 = m_2 c_2 = 0{,}10 \\cdot 4200 = 420\\text{ J/K}$. La temperatura di equilibrio termico è data da: $T_{\\text{eq}} = \\frac{C_1 T_1 + C_2 T_2}{C_1 + C_2} = \\frac{180 \\cdot 100 + 420 \\cdot 20}{180 + 420} = \\frac{18000 + 8400}{600} = \\frac{26400}{600} = 44^\\circ\\text{C}$.",
    fonte: "Lotto S2 del progetto — S2-04 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 495,
    materia: "Scienze",
    domanda: "Una massa $m = 0{,}50\\text{ kg}$ di ghiaccio si trova alla temperatura di fusione ($0^\\circ\\text{C}$). Sapendo che il calore latente di fusione del ghiaccio è $\\lambda_f = 334\\text{ kJ/kg}$, quanto calore occorre somministrare per sciogliere completamente l’intero blocco di ghiaccio trasformandolo in acqua liquida a $0^\\circ\\text{C}$?",
    rispostaCorretta: "$167\\text{ kJ}$",
    risposteErrate: [
      "$334\\text{ kJ}$",
      "$668\\text{ kJ}$",
      "$83{,}5\\text{ kJ}$",
      "$16{,}7\\text{ kJ}$"
],
    spiegazione: "Durante una transizione di fase a temperatura costante, il calore scambiato dipende unicamente dalla massa e dal calore latente: $Q = m \\cdot \\lambda_f = 0{,}50\\text{ kg} \\cdot 334\\text{ kJ/kg} = 167\\text{ kJ}$.",
    fonte: "Lotto S2 del progetto — S2-05 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 496,
    materia: "Scienze",
    domanda: "Tra i tre meccanismi fondamentali di trasferimento del calore (conduzione, convezione e irraggiamento), quale può propagarsi anche attraverso il vuoto assoluto in totale assenza di materia?",
    rispostaCorretta: "Esclusivamente l’irraggiamento, mediante propagazione di onde elettromagnetiche",
    risposteErrate: [
      "Sia la conduzione sia l’irraggiamento",
      "Esclusivamente la convezione, mediante flussi di particelle",
      "Sia la convezione sia la conduzione",
      "Nessun meccanismo, poiché il calore richiede necessariamente un mezzo materiale"
],
    spiegazione: "La conduzione e la convezione necessitano della presenza di materia (contatto microscopico o moto convettivo di fluidi). L’irraggiamento termico, invece, avviene mediante emissione e assorbimento di onde elettromagnetiche (radiazione termica) e si propaga regolarmente nel vuoto, come avviene per l’energia solare che raggiunge la Terra.",
    fonte: "Lotto S2 del progetto — S2-06 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 497,
    materia: "Scienze",
    domanda: "Durante una trasformazione termodinamica, una massa di gas ideale assorbe dall’ambiente circostante una quantità di calore $Q = 800\\text{ J}$ ed espandendosi compie verso l’esterno un lavoro meccanico $L = 300\\text{ J}$. Qual è la variazione di energia interna $\\Delta U$ del gas?",
    rispostaCorretta: "$+500\\text{ J}$",
    risposteErrate: [
      "$+1100\\text{ J}$",
      "$-500\\text{ J}$",
      "$-1100\\text{ J}$",
      "$+240\\text{ kJ}$"
],
    spiegazione: "Per il primo principio della termodinamica: $\\Delta U = Q - L$. Avendo calore assorbito ($Q = +800\\text{ J}$) e lavoro compiuto dal sistema ($L = +300\\text{ J}$), si ottiene: $\\Delta U = 800\\text{ J} - 300\\text{ J} = +500\\text{ J}$.",
    fonte: "Lotto S2 del progetto — S2-07 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 498,
    materia: "Scienze",
    domanda: "Un gas ideale racchiuso in un cilindro a pareti termicamente isolanti subisce una rapida compressione adiabatica ($Q = 0$). Se durante la compressione le forze esterne compiono sul gas un lavoro di modulo pari a $450\\text{ J}$ ($L = -450\\text{ J}$), cosa accade alla sua energia interna $\\Delta U$ e alla sua temperatura?",
    rispostaCorretta: "L’energia interna aumenta di $+450\\text{ J}$ e la temperatura del gas aumenta",
    risposteErrate: [
      "L’energia interna diminuisce di $-450\\text{ J}$ e la temperatura del gas diminuisce",
      "L’energia interna rimane rigorosamente costante poiché $Q = 0$",
      "L’energia interna aumenta di $+450\\text{ J}$, ma la temperatura rimane invariata",
      "L’energia interna diminuisce di $-450\\text{ J}$, ma la temperatura aumenta"
],
    spiegazione: "In una trasformazione adiabatica $Q = 0$, per cui il primo principio della termodinamica diviene $\\Delta U = -L$. Essendo il lavoro subìto dal gas negativo ($L = -450\\text{ J}$), si ha $\\Delta U = -(-450\\text{ J}) = +450\\text{ J}$. Poiché l’energia interna di un gas ideale è proporzionale alla temperatura assoluta, all’aumentare di $U$ corrisponde un aumento della temperatura.",
    fonte: "Lotto S2 del progetto — S2-08 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 499,
    materia: "Scienze",
    domanda: "Un gas ideale si espande a pressione costante $p = 2{,}0 \\times 10^5\\text{ Pa}$, aumentando il proprio volume da $V_1 = 3{,}0\\text{ L}$ a $V_2 = 7{,}0\\text{ L}$ ($1\\text{ L} = 10^{-3}\\text{ m}^3$). Qual è il lavoro $L$ compiuto dal gas durante l’espansione?",
    rispostaCorretta: "$800\\text{ J}$",
    risposteErrate: [
      "$800\\text{ kJ}$",
      "$1400\\text{ J}$",
      "$600\\text{ J}$",
      "$400\\text{ J}$"
],
    spiegazione: "In una trasformazione isobara, il lavoro è dato da $L = p \\cdot \\Delta V$. La variazione di volume in unità SI è $\\Delta V = (7{,}0 - 3{,}0)\\text{ L} = 4{,}0\\text{ L} = 4{,}0 \\times 10^{-3}\\text{ m}^3$. Sostituendo: $L = 2{,}0 \\times 10^5\\text{ Pa} \\cdot 4{,}0 \\times 10^{-3}\\text{ m}^3 = 800\\text{ J}$.",
    fonte: "Lotto S2 del progetto — S2-09 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 500,
    materia: "Scienze",
    domanda: "Un gas ideale racchiuso in un contenitore rigido indeformabile subisce una trasformazione isocora (a volume costante) assorbendo una quantità di calore $Q = 600\\text{ J}$. Quanto valgono rispettivamente il lavoro $L$ compiuto dal gas e la variazione della sua energia interna $\\Delta U$?",
    rispostaCorretta: "$L = 0\\text{ J}$ e $\\Delta U = +600\\text{ J}$",
    risposteErrate: [
      "$L = +600\\text{ J}$ e $\\Delta U = 0\\text{ J}$",
      "$L = +300\\text{ J}$ e $\\Delta U = +300\\text{ J}$",
      "$L = -600\\text{ J}$ e $\\Delta U = +1200\\text{ J}$",
      "$L = 0\\text{ J}$ e $\\Delta U = -600\\text{ J}$"
],
    spiegazione: "In una trasformazione a volume costante non vi è alcuna variazione volumetrica ($\\Delta V = 0$), pertanto il lavoro meccanico di espansione è nullo ($L = 0\\text{ J}$). Dal primo principio della termodinamica ($\\Delta U = Q - L$) ne consegue che tutto il calore assorbito si traduce in variazione di energia interna: $\\Delta U = Q = +600\\text{ J}$.",
    fonte: "Lotto S2 del progetto — S2-10 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 501,
    materia: "Scienze",
    domanda: "Una massa di gas ideale si trova inizialmente alla pressione $p_1 = 1{,}5\\text{ bar}$ occupando un volume $V_1 = 4{,}0\\text{ L}$. Se il gas subisce un’espansione isoterma a temperatura costante fino a raggiungere un volume finale $V_2 = 12{,}0\\text{ L}$, quale sarà la sua pressione finale $p_2$?",
    rispostaCorretta: "$0{,}5\\text{ bar}$",
    risposteErrate: [
      "$4{,}5\\text{ bar}$",
      "$3{,}0\\text{ bar}$",
      "$0{,}125\\text{ bar}$",
      "$6{,}0\\text{ bar}$"
],
    spiegazione: "Per la legge di Boyle-Mariotte sulle trasformazioni isoterme a temperatura costante: $p_1 \\cdot V_1 = p_2 \\cdot V_2$. Ricavando la pressione finale: $p_2 = \\frac{p_1 \\cdot V_1}{V_2} = \\frac{1{,}5\\text{ bar} \\cdot 4{,}0\\text{ L}}{12{,}0\\text{ L}} = \\frac{6{,}0}{12{,}0} = 0{,}5\\text{ bar}$.",
    fonte: "Lotto S2 del progetto — S2-11 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 502,
    materia: "Scienze",
    domanda: "Una determinata quantità di gas perfetto mantenuta a pressione costante occupa un volume $V_1 = 2{,}0\\text{ L}$ alla temperatura assoluta $T_1 = 300\\text{ K}$. Se il gas viene riscaldato isobaricamente fino alla temperatura assoluta $T_2 = 450\\text{ K}$, quale volume $V_2$ occuperà al termine della trasformazione?",
    rispostaCorretta: "$3{,}0\\text{ L}$",
    risposteErrate: [
      "$1{,}33\\text{ L}$",
      "$1{,}0\\text{ L}$",
      "$13{,}1\\text{ L}$",
      "$1{,}5\\text{ L}$"
],
    spiegazione: "Per la prima legge di Gay-Lussac (legge di Charles), a pressione costante il volume è direttamente proporzionale alla temperatura assoluta: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$. Ricavando il volume finale: $V_2 = V_1 \\cdot \\frac{T_2}{T_1} = 2{,}0\\text{ L} \\cdot \\frac{450\\text{ K}}{300\\text{ K}} = 2{,}0 \\cdot 1{,}5 = 3{,}0\\text{ L}$.",
    fonte: "Lotto S2 del progetto — S2-12 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 503,
    materia: "Scienze",
    domanda: "Un recipiente rigido di volume $V = 8{,}31\\text{ L} = 8{,}31 \\times 10^{-3}\\text{ m}^3$ contiene un gas ideale alla pressione $p = 3{,}0 \\times 10^5\\text{ Pa}$ e alla temperatura $T = 300\\text{ K}$. Assumendo la costante universale dei gas $R = 8{,}31\\text{ J}/(\\text{mol}\\cdot\\text{K})$, quante moli $n$ di gas sono presenti all’interno del recipiente?",
    rispostaCorretta: "$1{,}0\\text{ mol}$",
    risposteErrate: [
      "$1000\\text{ mol}$",
      "$300\\text{ mol}$",
      "$11{,}1\\text{ mol}$",
      "$0{,}001\\text{ mol}$"
],
    spiegazione: "Dall’equazione di stato dei gas perfetti $p V = n R T$, esplicitando il numero di moli si ricava: $n = \\frac{p \\cdot V}{R \\cdot T} = \\frac{3{,}0 \\times 10^5\\text{ Pa} \\cdot 8{,}31 \\times 10^{-3}\\text{ m}^3}{8{,}31\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\cdot 300\\text{ K}} = \\frac{2493}{2493} = 1{,}0\\text{ mol}$.",
    fonte: "Lotto S2 del progetto — S2-13 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 504,
    materia: "Scienze",
    domanda: "Secondo la teoria cinetica dei gas, da quale grandezza fisica dipende direttamente l’energia cinetica media di traslazione delle molecole di un gas ideale monoatomico?",
    rispostaCorretta: "Esclusivamente dalla temperatura assoluta $T$ del gas",
    risposteErrate: [
      "Dalla pressione $p$ esercitata sulle pareti del contenitore",
      "Dal volume $V$ del recipiente a parità di temperatura",
      "Dalla massa molare delle singole molecole del gas",
      "Dalla densità volumetrica del gas nel recipiente"
],
    spiegazione: "In base all’interpretazione microscopica della termodinamica e al teorema di equipartizione dell’energia, l’energia cinetica media di traslazione di una molecola di gas ideale monoatomico è data da $\\langle E_c \\rangle = \\frac{3}{2} k_B T$ (dove $k_B$ è la costante di Boltzmann), dipendendo quindi unicamente dalla temperatura termodinamica assoluta $T$.",
    fonte: "Lotto S2 del progetto — S2-14 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 505,
    materia: "Scienze",
    domanda: "Una macchina termica ideale di Carnot opera ciclicamente tra una sorgente calda a temperatura $T_{\\text{calda}} = 600\\text{ K}$ e una sorgente fredda a temperatura $T_{\\text{fredda}} = 300\\text{ K}$. Qual è il rendimento termodinamico teorico $\\eta$ di tale macchina?",
    rispostaCorretta: "$50\\%$",
    risposteErrate: [
      "$100\\%$",
      "$33{,}3\\%$",
      "$91{,}7\\%$",
      "$25\\%$"
],
    spiegazione: "Il rendimento massimo teorico di una macchina di Carnot reversibile che lavora tra due termostati è dato da: $\\eta = 1 - \\frac{T_{\\text{fredda}}}{T_{\\text{calda}}} = 1 - \\frac{300\\text{ K}}{600\\text{ K}} = 1 - 0{,}50 = 0{,}50 = 50\\%$.",
    fonte: "Lotto S2 del progetto — S2-15 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 506,
    materia: "Scienze",
    domanda: "Un blocco rettangolare omogeneo ha dimensioni $10\\text{ cm} \\times 5\\text{ cm} \\times 4\\text{ cm}$ (volume $V = 200\\text{ cm}^3 = 2{,}0 \\times 10^{-4}\\text{ m}^3$) e possiede una massa $m = 1{,}6\\text{ kg}$. Qual è la densità $\\rho$ del materiale nel Sistema Internazionale?",
    rispostaCorretta: "$8000\\text{ kg/m}^3$",
    risposteErrate: [
      "$800\\text{ kg/m}^3$",
      "$3200\\text{ kg/m}^3$",
      "$0{,}80\\text{ kg/m}^3$",
      "$80\\text{ kg/m}^3$"
],
    spiegazione: "La densità è il rapporto tra massa e volume: $\\rho = \\frac{m}{V} = \\frac{1{,}6\\text{ kg}}{2{,}0 \\times 10^{-4}\\text{ m}^3} = \\frac{1{,}6}{0{,}0002} = 8000\\text{ kg/m}^3$ (pari a $8{,}0\\text{ g/cm}^3$).",
    fonte: "Lotto S2 del progetto — S2-16 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 507,
    materia: "Scienze",
    domanda: "Una forza perpendicolare costante di modulo $F = 600\\text{ N}$ viene esercitata in modo uniforme su una piastra quadrata di lato $L = 20\\text{ cm} = 0{,}20\\text{ m}$. Qual è la pressione $p$ generata sulla superficie di contatto?",
    rispostaCorretta: "$15\\text{ kPa}$",
    risposteErrate: [
      "$3\\text{ kPa}$",
      "$60\\text{ kPa}$",
      "$0{,}75\\text{ kPa}$",
      "$1{,}5\\text{ kPa}$"
],
    spiegazione: "L’area della piastra quadrata è $A = L^2 = (0{,}20\\text{ m})^2 = 0{,}04\\text{ m}^2$. La pressione è data da: $p = \\frac{F}{A} = \\frac{600\\text{ N}}{0{,}04\\text{ m}^2} = 15\\,000\\text{ Pa} = 15\\text{ kPa}$.",
    fonte: "Lotto S2 del progetto — S2-17 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 508,
    materia: "Scienze",
    domanda: "Un subacqueo nuota in un lago d’acqua dolce ($\rho = 1000\\text{ kg/m}^3$) a una profondità $h = 15\\text{ m}$ sotto la superficie. Assumendo $g = 10\\text{ m/s}^2$, qual è il valore della sola pressione idrostatica relativa esercitata dalla colonna d’acqua sovrastante?",
    rispostaCorretta: "$1{,}5 \\times 10^5\\text{ Pa}$",
    risposteErrate: [
      "$1{,}5 \\times 10^4\\text{ Pa}$",
      "$1{,}5 \\times 10^6\\text{ Pa}$",
      "$3{,}0 \\times 10^5\\text{ Pa}$",
      "$7{,}5 \\times 10^4\\text{ Pa}$"
],
    spiegazione: "Per la legge di Stevino, la pressione idrostatica relativa dovuta alla colonna di fluido è data da: $p_{\\text{idro}} = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\cdot 10\\text{ m/s}^2 \\cdot 15\\text{ m} = 150\\,000\\text{ Pa} = 1{,}5 \\times 10^5\\text{ Pa}$ (pari a $1{,}5\\text{ bar}$).",
    fonte: "Lotto S2 del progetto — S2-18 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 509,
    materia: "Scienze",
    domanda: "Assumendo la pressione atmosferica al livello della superficie libera pari a $p_{\\text{atm}} = 1{,}0 \\times 10^5\\text{ Pa}$, qual è la pressione assoluta totale agente a una profondità $h = 20\\text{ m}$ in un bacino d’acqua dolce ($\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$)?",
    rispostaCorretta: "$3{,}0 \\times 10^5\\text{ Pa}$",
    risposteErrate: [
      "$2{,}0 \\times 10^5\\text{ Pa}$",
      "$1{,}0 \\times 10^5\\text{ Pa}$",
      "$4{,}0 \\times 10^5\\text{ Pa}$",
      "$2{,}0 \\times 10^6\\text{ Pa}$"
],
    spiegazione: "La pressione assoluta totale a profondità $h$ è la somma della pressione atmosferica e della pressione idrostatica: $p_{\\text{tot}} = p_{\\text{atm}} + \\rho g h = 1{,}0 \\times 10^5\\text{ Pa} + (1000 \\cdot 10 \\cdot 20)\\text{ Pa} = 1{,}0 \\times 10^5 + 2{,}0 \\times 10^5 = 3{,}0 \\times 10^5\\text{ Pa}$ (pari a $3\\text{ bar}$).",
    fonte: "Lotto S2 del progetto — S2-19 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 510,
    materia: "Scienze",
    domanda: "In un torchio idraulico ideale, il pistone di ingresso ha un’area $A_1 = 10\\text{ cm}^2$, mentre il pistone di sollevamento ha un’area $A_2 = 250\\text{ cm}^2$. Se sul pistone piccolo viene applicata una forza $F_1 = 40\\text{ N}$, quale forza $F_2$ viene sviluppata sul pistone grande?",
    rispostaCorretta: "$1000\\text{ N}$",
    risposteErrate: [
      "$1{,}6\\text{ N}$",
      "$40\\text{ N}$",
      "$250\\text{ N}$",
      "$10\\,000\\text{ N}$"
],
    spiegazione: "Per il principio di Pascal, la pressione si trasmette inalterata in tutto il liquido incompressibile ($p_1 = p_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$). La forza sul pistone grande è quindi: $F_2 = F_1 \\cdot \\frac{A_2}{A_1} = 40\\text{ N} \\cdot \\frac{250\\text{ cm}^2}{10\\text{ cm}^2} = 40 \\cdot 25 = 1000\\text{ N}$.",
    fonte: "Lotto S2 del progetto — S2-20 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 511,
    materia: "Scienze",
    domanda: "In un tubo a U aperto ad entrambe le estremità sono presenti due liquidi immiscibili in equilibrio: olio di densità $\\rho_1 = 800\\text{ kg/m}^3$ e acqua di densità $\\rho_2 = 1000\\text{ kg/m}^3$. Se nel ramo sinistro la colonna d’olio ha un’altezza $h_1 = 20\\text{ cm}$ al di sopra della superficie di separazione olio-acqua, quale altezza $h_2$ (misurata verticalmente dal livello della superficie di separazione fino alla superficie libera nel ramo destro) raggiunge la colonna d’acqua?",
    rispostaCorretta: "$16\\text{ cm}$",
    risposteErrate: [
      "$25\\text{ cm}$",
      "$20\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12{,}5\\text{ cm}$"
],
    spiegazione: "In un tubo a U con liquidi immiscibili in equilibrio, le pressioni idrostatiche alla quota della superficie di separazione devono uguagliarsi: $\\rho_1 \\cdot g \\cdot h_1 = \\rho_2 \\cdot g \\cdot h_2 \\implies \\rho_1 h_1 = \\rho_2 h_2$. Da cui: $h_2 = h_1 \\cdot \\frac{\\rho_1}{\\rho_2} = 20\\text{ cm} \\cdot \\frac{800}{1000} = 20 \\cdot 0{,}8 = 16\\text{ cm}$.",
    fonte: "Lotto S2 del progetto — S2-21 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 512,
    materia: "Scienze",
    domanda: "Nel barometro a mercurio di Torricelli a livello del mare, la pressione atmosferica standard sostiene un dislivello verticale della colonna di mercurio pari a $h = 76\\text{ cm}$ (equivalente a $76\\text{ cmHg}$). Se il tubo viene leggermente inclinato formando un angolo di $30^\\circ$ rispetto alla verticale, cosa accade all’altezza verticale del dislivello rispetto alla superficie libera della vaschetta?",
    rispostaCorretta: "L’altezza verticale rimane invariata a $76\\text{ cm}$, mentre aumenta la lunghezza del tratto di tubo occupato dal mercurio",
    risposteErrate: [
      "L’altezza verticale diminuisce proporzionalmente al coseno dell’angolo",
      "L’altezza verticale aumenta poiché il mercurio scorre più facilmente",
      "La colonna di mercurio si svuota completamente nella vaschetta per assenza di equilibrio",
      "Sia l’altezza verticale sia la lunghezza occupata nel tubo rimangono rigorosamente identiche"
],
    spiegazione: "Per la legge di Stevino, la pressione idrostatica dipende unicamente dal dislivello verticale $h$ tra la superficie libera e il menisco superiore ($p_{\\text{atm}} = \\rho g h$). Inclinando il tubo, l’altezza verticale $h$ rimane costante a $76\\text{ cm}$, mentre la lunghezza del mercurio lungo il tubo aumenta secondo la relazione $L = \\frac{h}{\\cos(30^\\circ)}$.",
    fonte: "Lotto S2 del progetto — S2-22 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 513,
    materia: "Scienze",
    domanda: "Un manometro a tubo a U a estremità aperta contenente mercurio (densità $\\rho = 13\\,600\\text{ kg/m}^3$) è collegato a un serbatoio di gas. Se la superficie libera del mercurio nel ramo aperto all’atmosfera si trova $\\Delta h = 5\\text{ cm} = 0{,}05\\text{ m}$ più in alto rispetto alla superficie nel ramo collegato al serbatoio, assumendo $g = 10\\text{ m/s}^2$, qual è la pressione relativa (manometrica) del gas nel serbatoio?",
    rispostaCorretta: "$6{,}8\\text{ kPa}$",
    risposteErrate: [
      "$680\\text{ Pa}$",
      "$68\\text{ kPa}$",
      "$0{,}5\\text{ kPa}$",
      "$13{,}6\\text{ kPa}$"
],
    spiegazione: "La pressione relativa (o manometrica) in un manometro a tubo aperto è data direttamente dal dislivello della colonna di fluido: $p_{\\text{man}} = \\rho \\cdot g \\cdot \\Delta h = 13\\,600\\text{ kg/m}^3 \\cdot 10\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} = 6800\\text{ Pa} = 6{,}8\\text{ kPa}$.",
    fonte: "Lotto S2 del progetto — S2-23 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 514,
    materia: "Scienze",
    domanda: "Un solido metallico pesa in aria $P = 50\\text{ N}$. Quando viene completamente immerso in acqua dolce ($\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$), riceve una spinta idrostatica di Archimede di modulo pari a $F_A = 20\\text{ N}$. Qual è il valore del suo peso apparente misurato da un dinamometro mentre è immerso?",
    rispostaCorretta: "$30\\text{ N}$",
    risposteErrate: [
      "$70\\text{ N}$",
      "$20\\text{ N}$",
      "$50\\text{ N}$",
      "$2{,}5\\text{ N}$"
],
    spiegazione: "Il peso apparente di un corpo immerso è la risultante tra la forza peso reale diretta verso il basso e la spinta di Archimede diretta verso l’alto: $P_{\\text{app}} = P - F_A = 50\\text{ N} - 20\\text{ N} = 30\\text{ N}$.",
    fonte: "Lotto S2 del progetto — S2-24 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 515,
    materia: "Scienze",
    domanda: "Un blocco di legno omogeneo di densità $\\rho_{\\text{legno}} = 600\\text{ kg/m}^3$ galleggia liberamente in equilibrio sulla superficie dell’acqua dolce ($\rho_{\\text{acqua}} = 1000\\text{ kg/m}^3$). Quale percentuale del volume totale del blocco rimane immersa al di sotto del pelo libero dell’acqua?",
    rispostaCorretta: "$60\\%$",
    risposteErrate: [
      "$40\\%$",
      "$167\\%$",
      "$37{,}5\\%$",
      "$62{,}5\\%$"
],
    spiegazione: "In condizioni di galleggiamento statico, il peso del corpo eguaglia la spinta di Archimede sul volume immerso: $P = F_A \\implies \\rho_{\\text{corpo}} V_{\\text{tot}} g = \\rho_{\\text{fluido}} V_{\\text{imm}} g$. La frazione di volume immerso è quindi: $\\frac{V_{\\text{imm}}}{V_{\\text{tot}}} = \\frac{\\rho_{\\text{legno}}}{\\rho_{\\text{acqua}}} = \\frac{600}{1000} = 0{,}60 = 60\\%$.",
    fonte: "Lotto S2 del progetto — S2-25 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 516,
    materia: "Scienze",
    domanda: "Una sfera solida omogenea viene rilasciata all’interno di una vaschetta riempita di olio sintetico avente densità pari a $\\rho_{\\text{olio}} = 850\\text{ kg/m}^3$. In quale circostanza la sfera affonderà inesorabilmente fino a raggiungere il fondo della vaschetta?",
    rispostaCorretta: "Se la densità della sfera è strettamente maggiore di $850\\text{ kg/m}^3$",
    risposteErrate: [
      "Se la massa complessiva della sfera supera $1\\text{ kg}$, indipendentemente dal suo volume",
      "Se la densità della sfera è compresa tra $400\\text{ kg/m}^3$ e $850\\text{ kg/m}^3$",
      "Se il raggio della sfera supera la profondità della vaschetta",
      "Se la densità della sfera è esattamente pari alla metà di quella dell’olio"
],
    spiegazione: "Un corpo completamente immerso affonda se la sua forza peso supera la spinta di Archimede massima: $P > F_A \\implies \\rho_{\\text{corpo}} V g > \\rho_{\\text{fluido}} V g \\implies \\rho_{\\text{corpo}} > \\rho_{\\text{fluido}}$. Pertanto, la sfera affonda solo se la sua densità è strettamente superiore a $850\\text{ kg/m}^3$.",
    fonte: "Lotto S2 del progetto — S2-26 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 517,
    materia: "Scienze",
    domanda: "Un blocco di ghiaccio omogeneo di densità $\\rho_g = 920\\text{ kg/m}^3$ galleggia in acqua dolce ($\rho_a = 1000\\text{ kg/m}^3$). Se il volume della porzione che sporge al di sopra del livello dell’acqua (volume emerso) è pari a $V_{\\text{em}} = 80\\text{ dm}^3$, qual è il volume totale complessivo dell’intero blocco di ghiaccio?",
    rispostaCorretta: "$1000\\text{ dm}^3$",
    risposteErrate: [
      "$920\\text{ dm}^3$",
      "$87\\text{ dm}^3$",
      "$73{,}6\\text{ dm}^3$",
      "$800\\text{ dm}^3$"
],
    spiegazione: "La frazione di volume immerso è $\\frac{V_{\\text{imm}}}{V_{\\text{tot}}} = \\frac{\\rho_g}{\\rho_a} = \\frac{920}{1000} = 0{,}92$ ($92\\%$). Di conseguenza, la frazione di volume emerso corrisponde all’$8\\%$: $\\frac{V_{\\text{em}}}{V_{\\text{tot}}} = 1 - 0{,}92 = 0{,}08$. Il volume totale è: $V_{\\text{tot}} = \\frac{V_{\\text{em}}}{0{,}08} = \\frac{80\\text{ dm}^3}{0{,}08} = 1000\\text{ dm}^3$ ($1\\text{ m}^3$).",
    fonte: "Lotto S2 del progetto — S2-27 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 518,
    materia: "Scienze",
    domanda: "Un pallone aerostatico occupa un volume complessivo $V = 500\\text{ m}^3$ nell’atmosfera terrestre. Sapendo che la densità dell’aria circostante a livello del suolo vale $\\rho_{\\text{aria}} = 1{,}2\\text{ kg/m}^3$ e assumendo $g = 10\\text{ m/s}^2$, qual è il modulo della spinta di Archimede esercitata dall’aria sul pallone?",
    rispostaCorretta: "$6000\\text{ N}$",
    risposteErrate: [
      "$600\\text{ N}$",
      "$3000\\text{ N}$",
      "$60\\text{ N}$",
      "$60\\text{ kN}$"
],
    spiegazione: "La spinta di Archimede si applica a tutti i fluidi, inclusi i gas: $F_A = \\rho_{\\text{aria}} \\cdot g \\cdot V = 1{,}2\\text{ kg/m}^3 \\cdot 10\\text{ m/s}^2 \\cdot 500\\text{ m}^3 = 6000\\text{ N} = 6\\text{ kN}$.",
    fonte: "Lotto S2 del progetto — S2-28 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 519,
    materia: "Scienze",
    domanda: "In una conduttura idraulica a sezione circolare costante di area $A = 5{,}0\\text{ cm}^2 = 5{,}0 \\times 10^{-4}\\text{ m}^2$, l’acqua scorre a una velocità uniforme $v = 2{,}0\\text{ m/s}$. Qual è la portata volumetrica $Q$ del condotto espressa in litri al secondo ($\\text{L/s}$)?",
    rispostaCorretta: "$1{,}0\\text{ L/s}$",
    risposteErrate: [
      "$10\\text{ L/s}$",
      "$0{,}10\\text{ L/s}$",
      "$0{,}50\\text{ L/s}$",
      "$0{,}001\\text{ L/s}$"
],
    spiegazione: "La portata volumetrica è il prodotto dell’area della sezione per la velocità del fluido: $Q = A \\cdot v = 5{,}0 \\times 10^{-4}\\text{ m}^2 \\cdot 2{,}0\\text{ m/s} = 1{,}0 \\times 10^{-3}\\text{ m}^3/\\text{s}$. Ricordando che $1\\text{ m}^3 = 1000\\text{ L}$, si ottiene: $Q = 1{,}0 \\times 10^{-3} \\times 1000\\text{ L/s} = 1{,}0\\text{ L/s}$.",
    fonte: "Lotto S2 del progetto — S2-29 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 520,
    materia: "Scienze",
    domanda: "Un rubinetto eroga acqua con una portata volumetrica costante $Q = 12\\text{ L/min}$. Quanto tempo impiega a riempire completamente una vasca avente una capacità complessiva di $180\\text{ litri}$?",
    rispostaCorretta: "$15\\text{ minuti}$",
    risposteErrate: [
      "$150\\text{ minuti}$",
      "$12\\text{ minuti}$",
      "$900\\text{ minuti}$",
      "$0{,}25\\text{ minuti}$"
],
    spiegazione: "Dalla definizione di portata $Q = \\frac{V}{\\Delta t}$, il tempo necessario per erogare il volume desiderato è: $\\Delta t = \\frac{V}{Q} = \\frac{180\\text{ L}}{12\\text{ L/min}} = 15\\text{ minuti}$ (pari a $900\\text{ s}$).",
    fonte: "Lotto S2 del progetto — S2-30 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 521,
    materia: "Scienze",
    domanda: "In un tubo orizzontale a sezione variabile scorre un fluido ideale incompressibile. Nella sezione più larga di area $A_1 = 40\\text{ cm}^2$ il fluido scorre a velocità $v_1 = 1{,}5\\text{ m/s}$. Qual è la velocità $v_2$ del fluido in un tratto successivo in cui l’area della sezione si riduce a $A_2 = 10\\text{ cm}^2$?",
    rispostaCorretta: "$6{,}0\\text{ m/s}$",
    risposteErrate: [
      "$0{,}375\\text{ m/s}$",
      "$3{,}0\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$0{,}75\\text{ m/s}$"
],
    spiegazione: "Per l’equazione di continuità dei fluidi incompressibili, la portata volumetrica si conserva: $A_1 \\cdot v_1 = A_2 \\cdot v_2$. Ricavando la velocità nel restringimento: $v_2 = v_1 \\cdot \\frac{A_1}{A_2} = 1{,}5\\text{ m/s} \\cdot \\frac{40\\text{ cm}^2}{10\\text{ cm}^2} = 1{,}5 \\cdot 4 = 6{,}0\\text{ m/s}$.",
    fonte: "Lotto S2 del progetto — S2-31 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 522,
    materia: "Scienze",
    domanda: "Un condotto cilindrico subisce una strozzatura per cui il suo diametro interno si dimezza ($d_2 = \\frac{d_1}{2}$). Se l’acqua scorre nel tratto iniziale più largo con velocità $v_1 = 2\\text{ m/s}$, quale velocità $v_2$ assume nel tratto ristretto?",
    rispostaCorretta: "$8\\text{ m/s}$",
    risposteErrate: [
      "$4\\text{ m/s}$",
      "$1\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$0{,}5\\text{ m/s}$"
],
    spiegazione: "L’area di una sezione circolare è proporzionale al quadrato del diametro ($A = \\frac{\\pi d^2}{4}$). Se il diametro si dimezza, l’area si riduce a un quarto: $A_2 = \\frac{A_1}{4}$. Per l’equazione di continuità $A_1 v_1 = A_2 v_2$, la velocità deve quadruplicare: $v_2 = v_1 \\cdot \\frac{A_1}{A_2} = 2\\text{ m/s} \\cdot 4 = 8\\text{ m/s}$.",
    fonte: "Lotto S2 del progetto — S2-32 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 523,
    materia: "Scienze",
    domanda: "In un condotto orizzontale in cui scorre un fluido ideale in regime stazionario, cosa accade alla pressione statica del fluido nel punto in cui la sezione della conduttura si restringe provocando un incremento della velocità di scorrimento (effetto Venturi)?",
    rispostaCorretta: "La pressione statica diminuisce all’aumentare della velocità di scorrimento",
    risposteErrate: [
      "La pressione statica aumenta proporzionalmente al quadrato della velocità",
      "La pressione statica rimane rigorosamente invariata trattandosi di condotto orizzontale",
      "La pressione statica si annulla completamente nel punto di restringimento",
      "La pressione statica aumenta solo se il fluido è incomprimibile"
],
    spiegazione: "Per il teorema di Bernoulli lungo una linea di flusso orizzontale ($h = \\text{costante}$), la somma della pressione statica e della pressione dinamica è costante: $p + \\frac{1}{2}\\rho v^2 = \\text{costante}$. Dove la sezione diminuisce e la velocità $v$ aumenta, l’energia cinetica specifica $\\frac{1}{2}\\rho v^2$ cresce e, di conseguenza, la pressione statica $p$ deve necessariamente diminuire (effetto Venturi).",
    fonte: "Lotto S2 del progetto — S2-33 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 524,
    materia: "Scienze",
    domanda: "Un ampio serbatoio aperto superiormente contiene acqua fino a un’altezza $h = 5\\text{ m}$ al di sopra di un piccolo foro circolare di area $A = 2{,}0\\text{ cm}^2 = 2{,}0 \\times 10^{-4}\\text{ m}^2$ praticato sulla parete laterale. Assumendo $g = 10\\text{ m/s}^2$ e trascurando gli attriti viscosi, qual è la portata volumetrica $Q$ con cui l’acqua fuoriesce inizialmente dal foro espressa in litri al secondo ($\\text{L/s}$)?",
    rispostaCorretta: "$2{,}0\\text{ L/s}$",
    risposteErrate: [
      "$1{,}0\\text{ L/s}$",
      "$20\\text{ L/s}$",
      "$10\\text{ L/s}$",
      "$0{,}20\\text{ L/s}$"
],
    spiegazione: "Per la legge di Torricelli, la velocità di efflusso dell’acqua dal foro è data da $v = \\sqrt{2 g h} = \\sqrt{2 \\cdot 10\\text{ m/s}^2 \\cdot 5\\text{ m}} = \\sqrt{100} = 10\\text{ m/s}$. La portata volumetrica è il prodotto dell’area del foro per la velocità: $Q = A \\cdot v = 2{,}0 \\times 10^{-4}\\text{ m}^2 \\cdot 10\\text{ m/s} = 2{,}0 \\times 10^{-3}\\text{ m}^3/\\text{s} = 2{,}0\\text{ L/s}$.",
    fonte: "Lotto S2 del progetto — S2-34 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 525,
    materia: "Scienze",
    domanda: "In una conduttura orizzontale scorre acqua (densità $\\rho = 1000\\text{ kg/m}^3$) in regime stazionario. Assumendo l’acqua come fluido ideale incompressibile e trascurando ogni attrito viscoso, nella sezione 1 di area maggiore la velocità è $v_1 = 2\\text{ m/s}$ e la pressione statica è $p_1 = 1{,}80 \\times 10^5\\text{ Pa}$. In corrispondenza di una strozzatura (sezione 2), la velocità sale a $v_2 = 6\\text{ m/s}$. Qual è il valore della pressione statica $p_2$ all’interno della strozzatura?",
    rispostaCorretta: "$1{,}64 \\times 10^5\\text{ Pa}$",
    risposteErrate: [
      "$1{,}96 \\times 10^5\\text{ Pa}$",
      "$1{,}48 \\times 10^5\\text{ Pa}$",
      "$1{,}62 \\times 10^5\\text{ Pa}$",
      "$0{,}16 \\times 10^5\\text{ Pa}$"
],
    spiegazione: "Applicando il teorema di Bernoulli lungo la conduttura orizzontale: $p_1 + \\frac{1}{2}\\rho v_1^2 = p_2 + \\frac{1}{2}\\rho v_2^2 \\implies p_2 = p_1 - \\frac{1}{2}\\rho (v_2^2 - v_1^2)$. Calcoliamo la variazione di pressione dinamica: $\\Delta p_{\\text{cin}} = \\frac{1}{2} \\cdot 1000\\text{ kg/m}^3 \\cdot (6^2 - 2^2)\\text{ m}^2/\\text{s}^2 = 500 \\cdot (36 - 4) = 500 \\cdot 32 = 16\\,000\\text{ Pa} = 0{,}16 \\times 10^5\\text{ Pa}$. Pertanto la pressione statica finale è: $p_2 = 1{,}80 \\times 10^5\\text{ Pa} - 0{,}16 \\times 10^5\\text{ Pa} = 1{,}64 \\times 10^5\\text{ Pa}$ (pari a $164\\text{ kPa}$).",
    fonte: "Lotto S2 del progetto — S2-35 (Termodinamica e fluidi)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 526,
    materia: "Scienze",
    domanda: "Un conduttore metallico isolato possiede una carica elettrica netta negativa $Q = -3{,}2 \\times 10^{-8}\\text{ C}$. Sapendo che la carica elementare dell’elettrone è $e = 1{,}6 \\times 10^{-19}\\text{ C}$, a quanti elettroni in eccesso corrisponde tale carica?",
    rispostaCorretta: "$2{,}0 \\times 10^{11}\\text{ elettroni}$",
    risposteErrate: [
      "$2{,}0 \\times 10^{-27}\\text{ elettroni}$",
      "$1{,}0 \\times 10^{11}\\text{ elettroni}$",
      "$4{,}0 \\times 10^{11}\\text{ elettroni}$",
      "Nessun elettrone in eccesso, poiché la carica negativa indica una carenza netta di elettroni"
    ],
    spiegazione: "La carica elettrica è quantizzata secondo la relazione $|Q| = N \\cdot e$. Il numero di elettroni in eccesso è dato da: $N = \\frac{|Q|}{e} = \\frac{3{,}2 \\times 10^{-8}\\text{ C}}{1{,}6 \\times 10^{-19}\\text{ C}} = 2{,}0 \\times 10^{11}\\text{ elettroni}$.",
    fonte: "Lotto S3 del progetto — S3-01 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 527,
    materia: "Scienze",
    domanda: "Due cariche elettriche puntiformi positive $q_1 = +2{,}0\\text{ }\\mu\\text{C} = 2{,}0 \\times 10^{-6}\\text{ C}$ e $q_2 = +3{,}0\\text{ }\\mu\\text{C} = 3{,}0 \\times 10^{-6}\\text{ C}$ sono poste nel vuoto a una distanza $r = 0{,}30\\text{ m}$. Assumendo la costante di Coulomb $k = 9{,}0 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, qual è il modulo della forza elettrostatica repulsiva esercitata tra le due cariche?",
    rispostaCorretta: "$0{,}60\\text{ N}$",
    risposteErrate: [
      "$0{,}18\\text{ N}$",
      "$6{,}0 \\times 10^5\\text{ N}$",
      "$1{,}30\\text{ N}$",
      "Modulo pari a $0{,}60\\text{ N}$, ma con forza di tipo attrattivo"
    ],
    spiegazione: "Per la legge di Coulomb, il modulo della forza elettrostatica tra due cariche puntiformi nel vuoto è dato da: $F = k \\cdot \\frac{q_1 \\cdot q_2}{r^2} = 9{,}0 \\times 10^9 \\cdot \\frac{2{,}0 \\times 10^{-6} \\cdot 3{,}0 \\times 10^{-6}}{(0{,}30)^2} = 9{,}0 \\times 10^9 \\cdot \\frac{6{,}0 \\times 10^{-12}}{0{,}09} = \\frac{54 \\times 10^{-3}}{0{,}09} = 0{,}60\\text{ N}$.",
    fonte: "Lotto S3 del progetto — S3-02 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 528,
    materia: "Scienze",
    domanda: "Due particelle cariche stazionarie si attraggono nel vuoto con una forza elettrostatica di modulo $F$. Se la distanza reciproca tra le due cariche viene triplicata ($r' = 3r$) mantenendo invariate le cariche, quale valore assume il modulo della nuova forza elettrostatica $F'$?",
    rispostaCorretta: "$F' = \\frac{F}{9}$",
    risposteErrate: [
      "$F' = \\frac{F}{3}$",
      "$F' = 3F$",
      "$F' = 9F$",
      "$F' = \\frac{F}{6}$"
    ],
    spiegazione: "Per la legge di Coulomb, la forza elettrostatica è inversamente proporzionale al quadrato della distanza tra le cariche ($F \\propto \\frac{1}{r^2}$). Triplicando la distanza ($r' = 3r$), la forza si riduce di un fattore $3^2 = 9$, divenendo: $F' = \\frac{k q_1 q_2}{(3r)^2} = \\frac{1}{9} \\left(\\frac{k q_1 q_2}{r^2}\\right) = \\frac{F}{9}$.",
    fonte: "Lotto S3 del progetto — S3-03 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 529,
    materia: "Scienze",
    domanda: "Nel vuoto, una carica puntiforme positiva $Q = +4{,}0 \\times 10^{-8}\\text{ C}$ genera un campo elettrostatico radiale. Assumendo la costante $k = 9{,}0 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, qual è l’intensità del campo elettrico $E$ a una distanza $r = 2{,}0\\text{ m}$ dalla carica?",
    rispostaCorretta: "$90\\text{ N/C}$",
    risposteErrate: [
      "$22{,}5\\text{ N/C}$",
      "$180\\text{ N/C}$",
      "$45\\text{ N/C}$",
      "Il campo elettrico è nullo ($E = 0\\text{ N/C}$) all’esterno di una carica isolata stazionaria"
    ],
    spiegazione: "Il modulo del campo elettrico generato da una carica puntiforme nel vuoto è dato da: $E = k \\cdot \\frac{|Q|}{r^2} = 9{,}0 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2 \\cdot \\frac{4{,}0 \\times 10^{-8}\\text{ C}}{(2{,}0\\text{ m})^2} = \\frac{360}{4} = 90\\text{ N/C}$ (pari a $90\\text{ V/m}$).",
    fonte: "Lotto S3 del progetto — S3-04 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 530,
    materia: "Scienze",
    domanda: "Una particella con carica negativa $q = -5{,}0\\text{ }\\mu\\text{C} = -5{,}0 \\times 10^{-6}\\text{ C}$ è immersa in una regione di spazio in cui è presente un campo elettrico uniforme di modulo $E = 4{,}0 \\times 10^3\\text{ N/C}$ diretto orizzontalmente verso destra. Quali sono il modulo e il verso della forza elettrica agente sulla particella?",
    rispostaCorretta: "Modulo pari a $0{,}020\\text{ N}$, diretta orizzontalmente verso sinistra",
    risposteErrate: [
      "Modulo pari a $0{,}020\\text{ N}$, diretta orizzontalmente verso destra",
      "Modulo pari a $0{,}020\\text{ N}$, diretta verticalmente verso l’alto",
      "Modulo pari a $8{,}0 \\times 10^8\\text{ N}$, diretta orizzontalmente verso sinistra",
      "La forza elettrica è nulla ($F = 0\\text{ N}$), poiché una carica stazionaria non interagisce con un campo elettrostatico"
    ],
    spiegazione: "La forza elettrica agente su una carica immersa in un campo $\\vec{E}$ è data da $\\vec{F} = q \\vec{E}$. Il modulo è $F = |q| \\cdot E = 5{,}0 \\times 10^{-6}\\text{ C} \\cdot 4{,}0 \\times 10^3\\text{ N/C} = 2{,}0 \\times 10^{-2}\\text{ N} = 0{,}020\\text{ N}$. Essendo la carica $q$ negativa, il vettore forza $\\vec{F}$ ha verso opposto rispetto a quello del campo elettrico, quindi è diretta verso sinistra.",
    fonte: "Lotto S3 del progetto — S3-05 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 531,
    materia: "Scienze",
    domanda: "In una regione sede di un campo elettrostatico conservativo, una carica puntiforme positiva $q = +3{,}0\\text{ mC} = 3{,}0 \\times 10^{-3}\\text{ C}$ si sposta spontaneamente da un punto $A$ a un punto $B$. Sapendo che la differenza di potenziale tra i due punti è $V_A - V_B = 120\\text{ V}$, qual è il lavoro meccanico $L$ compiuto dalle forze del campo elettrico durante lo spostamento?",
    rispostaCorretta: "$0{,}36\\text{ J}$",
    risposteErrate: [
      "$360\\text{ J}$",
      "$40\\text{ J}$",
      "$0{,}18\\text{ J}$",
      "$L = 0\\text{ J}$, poiché le forze di un campo elettrostatico conservativo non compiono mai lavoro"
    ],
    spiegazione: "Il lavoro compiuto dalle forze del campo elettrostatico per spostare una carica $q$ da un punto $A$ a un punto $B$ è legato alla differenza di potenziale dalla relazione: $L = q \\cdot (V_A - V_B) = 3{,}0 \\times 10^{-3}\\text{ C} \\cdot 120\\text{ V} = 0{,}36\\text{ J}$.",
    fonte: "Lotto S3 del progetto — S3-06 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 532,
    materia: "Scienze",
    domanda: "Un condensatore piano di capacità $C = 50\\text{ }\\mu\\text{F} = 50 \\times 10^{-6}\\text{ F}$ viene collegato ai morsetti di una batteria che fornisce una differenza di potenziale costante $\\Delta V = 12\\text{ V}$. Qual è il valore della carica elettrica $Q$ accumulata su ciascuna delle sue armature all’equilibrio?",
    rispostaCorretta: "$0{,}60\\text{ mC}$",
    risposteErrate: [
      "$600\\text{ C}$",
      "$4{,}17\\text{ mC}$",
      "$0{,}24\\text{ mC}$",
      "La carica netta accumulata sulle armature è nulla ($Q = 0\\text{ C}$), pertanto il condensatore non immagazzina carica"
    ],
    spiegazione: "Dalla definizione fondamentale di capacità elettrica $C = \\frac{Q}{\\Delta V}$, la carica accumulata sulle armature è: $Q = C \\cdot \\Delta V = 50 \\times 10^{-6}\\text{ F} \\cdot 12\\text{ V} = 600 \\times 10^{-6}\\text{ C} = 6{,}0 \\times 10^{-4}\\text{ C} = 0{,}60\\text{ mC}$.",
    fonte: "Lotto S3 del progetto — S3-07 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 533,
    materia: "Scienze",
    domanda: "Un condensatore di capacità $C = 20\\text{ }\\mu\\text{F} = 20 \\times 10^{-6}\\text{ F}$ è carico con una differenza di potenziale tra le armature pari a $\\Delta V = 100\\text{ V}$. Qual è l’energia potenziale elettrostatica $U_e$ immagazzinata all’interno del condensatore?",
    rispostaCorretta: "$0{,}10\\text{ J}$",
    risposteErrate: [
      "$0{,}20\\text{ J}$",
      "$100\\text{ kJ}$",
      "$2{,}0\\text{ mJ}$",
      "$U_e = 0\\text{ J}$, poiché l’energia è immagazzinata solo sotto forma di campo magnetico"
    ],
    spiegazione: "L’energia potenziale elettrostatica immagazzinata in un condensatore di capacità $C$ carico alla tensione $\\Delta V$ è data da: $U_e = \\frac{1}{2} C (\\Delta V)^2 = \\frac{1}{2} \\cdot 20 \\times 10^{-6}\\text{ F} \\cdot (100\\text{ V})^2 = 10 \\times 10^{-6} \\cdot 10\\,000 = 0{,}10\\text{ J}$.",
    fonte: "Lotto S3 del progetto — S3-08 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 534,
    materia: "Scienze",
    domanda: "In un conduttore metallico scorre una corrente continua di intensità costante $I = 2{,}5\\text{ A}$ per un intervallo di tempo $\\Delta t = 2\\text{ minuti}$. Qual è la quantità complessiva di carica elettrica $Q$ che attraversa una sezione trasversale del conduttore?",
    rispostaCorretta: "$300\\text{ C}$",
    risposteErrate: [
      "$5{,}0\\text{ C}$",
      "$150\\text{ C}$",
      "$48\\text{ C}$",
      "$1{,}25\\text{ C}$"
    ],
    spiegazione: "L’intensità di corrente è il rapporto tra la carica transitata e l’intervallo di tempo ($I = \\frac{Q}{\\Delta t}$). Convertendo il tempo in secondi: $\\Delta t = 2\\text{ min} = 120\\text{ s}$. La carica è: $Q = I \\cdot \\Delta t = 2{,}5\\text{ A} \\cdot 120\\text{ s} = 300\\text{ C}$.",
    fonte: "Lotto S3 del progetto — S3-09 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 535,
    materia: "Scienze",
    domanda: "Un resistore ohmico avente resistenza $R = 40\\text{ }\\Omega$ è alimentato da un generatore che mantiene ai suoi capi una differenza di potenziale costante $\\Delta V = 24\\text{ V}$. Qual è l’intensità della corrente elettrica $I$ che attraversa il resistore?",
    rispostaCorretta: "$0{,}60\\text{ A}$",
    risposteErrate: [
      "$1{,}67\\text{ A}$",
      "$960\\text{ A}$",
      "La corrente è nulla ($I = 0\\text{ A}$) poiché un resistore ohmico ideale non lascia transitare cariche",
      "La corrente non può essere determinata senza conoscere la lunghezza e la sezione del conduttore"
    ],
    spiegazione: "Per la prima legge di Ohm, la relazione tra tensione, resistenza e corrente è $\\Delta V = R \\cdot I$. Ricavando l’intensità di corrente si ha: $I = \\frac{\\Delta V}{R} = \\frac{24\\text{ V}}{40\\text{ }\\Omega} = 0{,}60\\text{ A}$ (pari a $600\\text{ mA}$).",
    fonte: "Lotto S3 del progetto — S3-10 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 536,
    materia: "Scienze",
    domanda: "Un filo metallico cilindrico di lunghezza $L$ e sezione trasversale $A$ possiede una resistenza elettrica $R = 8\\text{ }\\Omega$. Se si realizza un secondo filo dello stesso materiale avente lunghezza doppia ($2L$) e sezione quadrupla ($4A$), qual è la resistenza elettrica $R'$ del nuovo filo?",
    rispostaCorretta: "$4\\text{ }\\Omega$",
    risposteErrate: [
      "$64\\text{ }\\Omega$",
      "$16\\text{ }\\Omega$",
      "$2\\text{ }\\Omega$",
      "$R' = 8\\text{ }\\Omega$, poiché la resistenza dipende esclusivamente dal materiale e non dalla geometria"
    ],
    spiegazione: "Per la seconda legge di Ohm, la resistenza di un conduttore omogeneo è data da $R = \\rho \\frac{L}{A}$. Raddoppiando la lunghezza e quadruplicando la sezione, la nuova resistenza diventa: $R' = \\rho \\frac{2L}{4A} = \\frac{2}{4} \\left(\\rho \\frac{L}{A}\\right) = \\frac{1}{2} R = \\frac{8\\text{ }\\Omega}{2} = 4\\text{ }\\Omega$.",
    fonte: "Lotto S3 del progetto — S3-11 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 537,
    materia: "Scienze",
    domanda: "Due resistori $R_1 = 20\\text{ }\\Omega$ e $R_2 = 30\\text{ }\\Omega$ sono collegati in serie a un generatore ideale di tensione continua da $\\Delta V = 50\\text{ V}$. Qual è la differenza di potenziale $V_2$ presente ai capi del resistore $R_2$?",
    rispostaCorretta: "$30\\text{ V}$",
    risposteErrate: [
      "$20\\text{ V}$",
      "$50\\text{ V}$",
      "$25\\text{ V}$",
      "$10\\text{ V}$"
    ],
    spiegazione: "In un collegamento in serie, la resistenza equivalente è $R_{\\text{eq}} = R_1 + R_2 = 20 + 30 = 50\\text{ }\\Omega$. La corrente che attraversa il circuito è $I = \\frac{\\Delta V}{R_{\\text{eq}}} = \\frac{50\\text{ V}}{50\\text{ }\\Omega} = 1{,}0\\text{ A}$. La caduta di potenziale ai capi di $R_2$ vale: $V_2 = R_2 \\cdot I = 30\\text{ }\\Omega \\cdot 1{,}0\\text{ A} = 30\\text{ V}$.",
    fonte: "Lotto S3 del progetto — S3-12 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 538,
    materia: "Scienze",
    domanda: "Due resistori di resistenza $R_1 = 30\\text{ }\\Omega$ e $R_2 = 60\\text{ }\\Omega$ sono collegati in parallelo a un generatore ideale che eroga una tensione $\\Delta V = 12\\text{ V}$. Qual è l’intensità della corrente totale $I_{\\text{tot}}$ erogata dal generatore al circuito?",
    rispostaCorretta: "$0{,}60\\text{ A}$",
    risposteErrate: [
      "$0{,}133\\text{ A}$",
      "$0{,}40\\text{ A}$",
      "$0{,}20\\text{ A}$",
      "La corrente totale è nulla ($I_{\\text{tot}} = 0\\text{ A}$) poiché due rami in parallelo si annullano a vicenda"
    ],
    spiegazione: "La resistenza equivalente di due resistori in parallelo è $R_{\\text{eq}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{30 \\cdot 60}{30 + 60} = \\frac{1800}{90} = 20\\text{ }\\Omega$. La corrente totale erogata dal generatore è: $I_{\\text{tot}} = \\frac{\\Delta V}{R_{\\text{eq}}} = \\frac{12\\text{ V}}{20\\text{ }\\Omega} = 0{,}60\\text{ A}$ (corrispondente alla somma delle correnti nei rami: $I_1 = 0{,}40\\text{ A}$ e $I_2 = 0{,}20\\text{ A}$).",
    fonte: "Lotto S3 del progetto — S3-13 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 539,
    materia: "Scienze",
    domanda: "In un circuito elettrico, un resistore $R_1 = 4\\text{ }\\Omega$ è posto in serie al parallelo formato da altri due resistori $R_2 = 6\\text{ }\\Omega$ e $R_3 = 12\\text{ }\\Omega$. Qual è la resistenza equivalente totale $R_{\\text{tot}}$ dell’intera rete di resistori?",
    rispostaCorretta: "$8\\text{ }\\Omega$",
    risposteErrate: [
      "$22\\text{ }\\Omega$",
      "$2\\text{ }\\Omega$",
      "$10\\text{ }\\Omega$",
      "$16\\text{ }\\Omega$"
    ],
    spiegazione: "Calcoliamo prima la resistenza equivalente del gruppo in parallelo ($R_2 \\parallel R_3$): $R_{23} = \\frac{R_2 \\cdot R_3}{R_2 + R_3} = \\frac{6 \\cdot 12}{6 + 12} = \\frac{72}{18} = 4\\text{ }\\Omega$. Poiché $R_1$ è in serie con questo blocco, la resistenza totale vale: $R_{\\text{tot}} = R_1 + R_{23} = 4\\text{ }\\Omega + 4\\text{ }\\Omega = 8\\text{ }\\Omega$.",
    fonte: "Lotto S3 del progetto — S3-14 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 540,
    materia: "Scienze",
    domanda: "Un conduttore ohmico di resistenza $R = 50\\text{ }\\Omega$ è attraversato da una corrente continua costante di intensità $I = 2{,}0\\text{ A}$. Qual è la potenza termica $P$ dissipata dal conduttore per effetto Joule?",
    rispostaCorretta: "$200\\text{ W}$",
    risposteErrate: [
      "$100\\text{ W}$",
      "$25\\text{ W}$",
      "$12{,}5\\text{ W}$",
      "$P = 0\\text{ W}$, poiché in regime stazionario un conduttore ohmico non dissipa potenza termica"
    ],
    spiegazione: "La potenza elettrica dissipata per effetto Joule da un resistore percorso da corrente è espressa dalla formula $P = R \\cdot I^2$. Sostituendo i dati numerici: $P = 50\\text{ }\\Omega \\cdot (2{,}0\\text{ A})^2 = 50 \\cdot 4 = 200\\text{ W}$.",
    fonte: "Lotto S3 del progetto — S3-15 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 541,
    materia: "Scienze",
    domanda: "Una stufa elettrica con potenza nominale costante $P = 1500\\text{ W} = 1{,}5\\text{ kW}$ rimane accesa ininterrottamente per un periodo di tempo pari a $\\Delta t = 4\\text{ ore}$. Quanta energia elettrica complessiva consuma la stufa, espressa in kilowattora ($\\text{kWh}$)?",
    rispostaCorretta: "$6{,}0\\text{ kWh}$",
    risposteErrate: [
      "$6000\\text{ kWh}$",
      "$0{,}375\\text{ kWh}$",
      "$375\\text{ kWh}$",
      "Il consumo in kilowattora è nullo perché il kilowattora misura esclusivamente la potenza istantanea e non l’energia"
    ],
    spiegazione: "L’energia elettrica consumata è data dal prodotto tra la potenza assorbita e l’intervallo di tempo di funzionamento ($E = P \\cdot \\Delta t$). Esprimendo la potenza in kilowatt e il tempo in ore si ottiene direttamente: $E = 1{,}5\\text{ kW} \\cdot 4\\text{ h} = 6{,}0\\text{ kWh}$ (pari a $21{,}6 \\times 10^6\\text{ J} = 21{,}6\\text{ MJ}$).",
    fonte: "Lotto S3 del progetto — S3-16 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 542,
    materia: "Scienze",
    domanda: "Una particella carica con $q = +2{,}0\\text{ }\\mu\\text{C} = 2{,}0 \\times 10^{-6}\\text{ C}$ entra con una velocità $v = 3{,}0 \\times 10^5\\text{ m/s}$ in una regione in cui è presente un campo magnetico uniforme di modulo $B = 0{,}40\\text{ T}$. Se la velocità della particella è perpendicolare alle linee di induzione magnetica ($\\theta = 90^\\circ$), qual è il modulo della forza di Lorentz esercitata sulla particella?",
    rispostaCorretta: "$0{,}24\\text{ N}$",
    risposteErrate: [
      "$2{,}4 \\times 10^5\\text{ N}$",
      "$0{,}60\\text{ N}$",
      "$1{,}5\\text{ N}$",
      "$F = 0\\text{ N}$, poiché una carica in moto perpendicolare a un campo magnetico non subisce alcuna forza"
    ],
    spiegazione: "Il modulo della forza di Lorentz su una carica in moto in un campo magnetico è $F = |q| \\cdot v \\cdot B \\cdot \\sin(\\theta)$. Essendo il moto perpendicolare al campo ($\\sin(90^\\circ) = 1$): $F = 2{,}0 \\times 10^{-6}\\text{ C} \\cdot 3{,}0 \\times 10^5\\text{ m/s} \\cdot 0{,}40\\text{ T} = 0{,}60 \\cdot 0{,}40 = 0{,}24\\text{ N}$.",
    fonte: "Lotto S3 del progetto — S3-17 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 543,
    materia: "Scienze",
    domanda: "Un filo conduttore rettilineo di lunghezza $L = 0{,}50\\text{ m}$ percorso da una corrente continua $I = 4{,}0\\text{ A}$ è immerso ortogonalmente in un campo magnetico uniforme $B = 0{,}20\\text{ T}$. Qual è il modulo della forza magnetica agente sul tratto di filo?",
    rispostaCorretta: "$0{,}40\\text{ N}$",
    risposteErrate: [
      "$2{,}0\\text{ N}$",
      "$10\\text{ N}$",
      "$1{,}6\\text{ N}$",
      "$F = 0\\text{ N}$, poiché un filo conduttore rettilineo immerso ortogonalmente in un campo magnetico non è soggetto ad alcuna forza meccanica"
    ],
    spiegazione: "Per la seconda legge di Laplace, la forza magnetica su un conduttore rettilineo percorso da corrente è $F = I \\cdot L \\cdot B \\cdot \\sin(\\theta)$. Essendo il conduttore ortogonale al campo ($\\theta = 90^\\circ$): $F = 4{,}0\\text{ A} \\cdot 0{,}50\\text{ m} \\cdot 0{,}20\\text{ T} = 0{,}40\\text{ N}$.",
    fonte: "Lotto S3 del progetto — S3-18 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 544,
    materia: "Scienze",
    domanda: "Una particella carica positiva viene iniettata con velocità $\\vec{v}$ in una regione sede di un campo magnetico uniforme $\\vec{B}$, muovendosi perpendicolarmente alle linee di campo. Quale tra le seguenti affermazioni descrive correttamente l’azione della forza di Lorentz sull’energia cinetica e sulla velocità della particella?",
    rispostaCorretta: "La forza magnetica compie lavoro nullo ($L = 0$), pertanto l’energia cinetica e il modulo della velocità rimangono rigorosamente costanti",
    risposteErrate: [
      "La forza magnetica compie lavoro positivo accelerando continuamente la particella in modulo",
      "L’energia cinetica aumenta proporzionalmente all’intensità del campo magnetico $\\vec{B}$",
      "La velocità vettoriale rimane costante sia in modulo sia in direzione",
      "La forza magnetica compie lavoro negativo arrestando gradualmente il moto della particella"
    ],
    spiegazione: "Poiché la forza di Lorentz $\\vec{F} = q \\vec{v} \\times \\vec{B}$ è in ogni istante ortogonale al vettore velocità istantanea $\\vec{v}$ (e quindi allo spostamento infinitesimo), la potenza istantanea $P = \\vec{F} \\cdot \\vec{v} = 0$ e il lavoro compiuto è nullo. Di conseguenza, per il teorema dell’energia cinetica, il modulo della velocità (e l’energia cinetica) rimane costante, mentre varia unicamente la direzione del moto (traiettoria circolare uniforme).",
    fonte: "Lotto S3 del progetto — S3-19 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 545,
    materia: "Scienze",
    domanda: "Per un filo conduttore rettilineo indefinito percorso da una corrente continua costante $I$, come varia l’intensità del campo magnetico $B$ al variare della distanza radiale $r$ dal filo?",
    rispostaCorretta: "L’intensità del campo magnetico è inversamente proporzionale alla distanza $r$ ($B \\propto \\frac{1}{r}$)",
    risposteErrate: [
      "L’intensità del campo magnetico è inversamente proporzionale al quadrato della distanza ($B \\propto \\frac{1}{r^2}$)",
      "L’intensità del campo magnetico è direttamente proporzionale alla distanza $r$ ($B \\propto r$)",
      "L’intensità del campo magnetico rimane rigorosamente costante a qualsiasi distanza dal filo",
      "L’intensità del campo magnetico è direttamente proporzionale al quadrato della distanza ($B \\propto r^2$)"
    ],
    spiegazione: "In base alla legge di Biot-Savart (o applicando la legge di Ampère su una linea circolare coassiale), il campo magnetico generato da un filo rettilineo indefinito è dato da $B = \\frac{\\mu_0 I}{2\\pi r}$. L’intensità è quindi inversamente proporzionale alla prima potenza della distanza $r$.",
    fonte: "Lotto S3 del progetto — S3-20 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 546,
    materia: "Scienze",
    domanda: "Una spira piana quadrata di area $A = 0{,}05\\text{ m}^2$ è immersa in un campo magnetico uniforme di modulo $B = 0{,}40\\text{ T}$. Sapendo che il vettore normale alla superficie della spira è parallelo alle linee di forza del campo magnetico ($\\theta = 0^\\circ$), qual è il flusso magnetico $\\Phi(\\vec{B})$ concatenato con la spira?",
    rispostaCorretta: "$0{,}020\\text{ Wb}$",
    risposteErrate: [
      "$8{,}0\\text{ Wb}$",
      "$0{,}125\\text{ Wb}$",
      "$0{,}40\\text{ Wb}$",
      "$\\Phi = 0\\text{ Wb}$, poiché per $\\theta = 0^\\circ$ il flusso del campo magnetico è rigorosamente nullo"
    ],
    spiegazione: "Il flusso del campo magnetico uniforme attraverso una superficie piana $A$ è dato da $\\Phi(\\vec{B}) = B \\cdot A \\cdot \\cos(\\theta)$. Essendo il vettore normale parallelo al campo ($\\theta = 0^\\circ \\implies \\cos(0^\\circ) = 1$): $\\Phi(\\vec{B}) = 0{,}40\\text{ T} \\cdot 0{,}05\\text{ m}^2 = 0{,}020\\text{ Wb}$ (pari a $20\\text{ mWb}$).",
    fonte: "Lotto S3 del progetto — S3-21 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 547,
    materia: "Scienze",
    domanda: "Il flusso magnetico concatenato con una singola spira conduttrice chiusa varia uniformemente nel tempo diminuendo da un valore iniziale $\\Phi_1 = 0{,}18\\text{ Wb}$ a un valore finale $\\Phi_2 = 0{,}06\\text{ Wb}$ in un intervallo $\\Delta t = 0{,}04\\text{ s}$. Qual è il valore assoluto della forza elettromotrice media indotta nella spira?",
    rispostaCorretta: "$3{,}0\\text{ V}$",
    risposteErrate: [
      "$4{,}5\\text{ V}$",
      "$1{,}5\\text{ V}$",
      "$6{,}0\\text{ V}$",
      "$|\\text{fem}| = 0\\text{ V}$, poiché un campo magnetico uniforme non può indurre alcuna forza elettromotrice"
    ],
    spiegazione: "Per la legge di induzione elettromagnetica di Faraday-Neumann, il valore assoluto della forza elettromotrice media indotta in una spira ($N = 1$) è dato da: $|\\text{fem}| = \\frac{|\\Delta \\Phi|}{\\Delta t} = \\frac{|0{,}06\\text{ Wb} - 0{,}18\\text{ Wb}|}{0{,}04\\text{ s}} = \\frac{0{,}12\\text{ Wb}}{0{,}04\\text{ s}} = 3{,}0\\text{ V}$.",
    fonte: "Lotto S3 del progetto — S3-22 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 548,
    materia: "Scienze",
    domanda: "Un diapason acustico oscilla producendo un’onda sonora pura avente un periodo di oscillazione $T = 2{,}5\\text{ ms} = 2{,}5 \\times 10^{-3}\\text{ s}$. Qual è la frequenza $f$ del suono emesso dal diapason?",
    rispostaCorretta: "$400\\text{ Hz}$",
    risposteErrate: [
      "$0{,}40\\text{ Hz}$",
      "$2{,}5\\text{ Hz}$",
      "$2500\\text{ Hz}$",
      "La frequenza non può essere determinata senza conoscere la velocità di propagazione del suono nell’aria"
    ],
    spiegazione: "La frequenza è l’inverso del periodo di oscillazione: $f = \\frac{1}{T} = \\frac{1}{2{,}5 \\times 10^{-3}\\text{ s}} = \\frac{1000}{2{,}5} = 400\\text{ Hz}$.",
    fonte: "Lotto S3 del progetto — S3-23 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 549,
    materia: "Scienze",
    domanda: "Un’onda trasversale periodica si propaga lungo una corda elastica tesa con una velocità $v = 18\\text{ m/s}$. Sapendo che la distanza tra due creste d’onda consecutive (lunghezza d’onda) è $\\lambda = 0{,}60\\text{ m}$, qual è la frequenza di oscillazione $f$ della sorgente?",
    rispostaCorretta: "$30\\text{ Hz}$",
    risposteErrate: [
      "$10{,}8\\text{ Hz}$",
      "$0{,}033\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "La frequenza dipende esclusivamente dall’ampiezza dell’onda e non dalla velocità di propagazione sulla corda"
    ],
    spiegazione: "Dalla relazione fondamentale di propagazione delle onde periodiche $v = \\lambda \\cdot f$, ricavando la frequenza si ottiene: $f = \\frac{v}{\\lambda} = \\frac{18\\text{ m/s}}{0{,}60\\text{ m}} = 30\\text{ Hz}$.",
    fonte: "Lotto S3 del progetto — S3-24 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 550,
    materia: "Scienze",
    domanda: "Due altoparlanti identici e coerenti $S_1$ e $S_2$ emettono in concordanza di fase due onde sonore sinusoidali con la stessa lunghezza d’onda $\\lambda = 0{,}80\\text{ m}$. Un microfono ricevitore è posizionato a una distanza $d_1 = 3{,}60\\text{ m}$ da $S_1$ e a una distanza $d_2 = 2{,}00\\text{ m}$ da $S_2$. Qual è la differenza di cammino $\\Delta d = d_1 - d_2$ e quale tipo di interferenza si produce nella posizione del microfono?",
    rispostaCorretta: "$\\Delta d = 1{,}60\\text{ m}$, con interferenza costruttiva",
    risposteErrate: [
      "$\\Delta d = 1{,}60\\text{ m}$, con interferenza distruttiva",
      "$\\Delta d = 5{,}60\\text{ m}$, con interferenza distruttiva",
      "$\\Delta d = 0{,}80\\text{ m}$, con interferenza costruttiva",
      "$\\Delta d = 2{,}80\\text{ m}$, con interferenza distruttiva"
    ],
    spiegazione: "La differenza di cammino tra le due sorgenti in fase è: $\\Delta d = d_1 - d_2 = 3{,}60\\text{ m} - 2{,}00\\text{ m} = 1{,}60\\text{ m}$. Poiché $\\Delta d = 1{,}60\\text{ m} = 2 \\cdot (0{,}80\\text{ m}) = 2\\lambda$ (un multiplo intero esatto della lunghezza d’onda, cioè $\\Delta d = k\\lambda$ con $k=2$), le due onde giungono al microfono perfettamente in fase, dando luogo a un’interferenza costruttiva con ampiezza sonora massima.",
    fonte: "Lotto S3 del progetto — S3-25 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 551,
    materia: "Scienze",
    domanda: "In quale tipologia di onde meccaniche la direzione lungo cui oscillano le particelle del mezzo materiale coincide ed è parallela alla direzione di propagazione dell’onda nello spazio?",
    rispostaCorretta: "Esclusivamente nelle onde longitudinali (come il suono nei fluidi)",
    risposteErrate: [
      "Esclusivamente nelle onde trasversali (come la luce nel vuoto)",
      "In tutte le onde elettromagnetiche",
      "Nelle onde su una corda tesa pizzicata",
      "In nessun tipo di onda, poiché l’oscillazione è sempre rigorosamente perpendicolare"
    ],
    spiegazione: "Nelle onde longitudinali (ad esempio le onde sonore che si propagano nei fluidi come sequenze di compressioni e rarefazioni), le particelle del mezzo oscillano avanti e indietro parallelamente alla direzione di propagazione dell’onda. Nelle onde trasversali, invece, l’oscillazione avviene perpendicolarmente alla direzione di propagazione.",
    fonte: "Lotto S3 del progetto — S3-26 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 552,
    materia: "Scienze",
    domanda: "Un escursionista emette un breve grido in direzione di una parete rocciosa verticale e percepisce l’eco riflessa della propria voce dopo un intervallo di tempo $\\Delta t = 0{,}80\\text{ s}$. Assumendo che la velocità del suono nell’aria sia costante e pari a $v = 340\\text{ m/s}$, a quale distanza $d$ dall’escursionista si trova la parete rocciosa?",
    rispostaCorretta: "$136\\text{ m}$",
    risposteErrate: [
      "$272\\text{ m}$",
      "$425\\text{ m}$",
      "$544\\text{ m}$",
      "La distanza non può essere calcolata perché l’eco dipende unicamente dalla frequenza del suono emesso"
    ],
    spiegazione: "Nel fenomeno dell’eco, il segnale sonoro compie un percorso di andata e ritorno percorrendo una distanza totale pari a $2d$. Pertanto: $2d = v \\cdot \\Delta t \\implies d = \\frac{v \\cdot \\Delta t}{2} = \\frac{340\\text{ m/s} \\cdot 0{,}80\\text{ s}}{2} = 340 \\cdot 0{,}40 = 136\\text{ m}$.",
    fonte: "Lotto S3 del progetto — S3-27 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 553,
    materia: "Scienze",
    domanda: "Ordinando le seguenti regioni dello spettro delle onde elettromagnetiche in senso crescente di frequenza (dalla frequenza più bassa alla frequenza più elevata), quale sequenza risulta rigorosamente corretta?",
    rispostaCorretta: "Onde radio < Microonde < Luce visibile < Raggi X < Raggi gamma",
    risposteErrate: [
      "Raggi gamma < Raggi X < Luce visibile < Microonde < Onde radio",
      "Microonde < Onde radio < Luce visibile < Raggi gamma < Raggi X",
      "Onde radio < Luce visibile < Microonde < Raggi X < Raggi gamma",
      "Raggi X < Onde radio < Microonde < Luce visibile < Raggi gamma"
    ],
    spiegazione: "Nello spettro elettromagnetico, la frequenza aumenta procedendo da: onde radio ($f \\approx 10^4 - 10^9\\text{ Hz}$), microonde ($10^9 - 10^{12}\\text{ Hz}$), infrarossi, luce visibile ($4 \\times 10^{14} - 7{,}5 \\times 10^{14}\\text{ Hz}$), ultravioletti, raggi X ($10^{16} - 10^{19}\\text{ Hz}$) fino ai raggi gamma ($f > 10^{19}\\text{ Hz}$).",
    fonte: "Lotto S3 del progetto — S3-28 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 554,
    materia: "Scienze",
    domanda: "Un raggio di luce incide sulla superficie piana di uno specchio formando un angolo di incidenza $\\theta_i = 35^\\circ$ rispetto alla retta normale alla superficie. Qual è l’angolo $\\alpha$ che il raggio riflesso forma rispetto al piano della superficie dello specchio?",
    rispostaCorretta: "$55^\\circ$",
    risposteErrate: [
      "$35^\\circ$",
      "$70^\\circ$",
      "$145^\\circ$",
      "$110^\\circ$"
    ],
    spiegazione: "Per la legge della riflessione, l’angolo di riflessione rispetto alla normale è identico all’angolo di incidenza: $\\theta_r = \\theta_i = 35^\\circ$. Poiché la normale forma un angolo di $90^\\circ$ con il piano dello specchio, l’angolo compreso tra il raggio riflesso e la superficie dello specchio è il complementare: $\\alpha = 90^\\circ - \\theta_r = 90^\\circ - 35^\\circ = 55^\\circ$.",
    fonte: "Lotto S3 del progetto — S3-29 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 555,
    materia: "Scienze",
    domanda: "Un fascio di luce si propaga nel vuoto con velocità $c = 3{,}0 \\times 10^8\\text{ m/s}$ e penetra in un blocco di vetro trasparente avente indice di rifrazione assoluto $n = 1{,}50$. Qual è la velocità di propagazione $v$ della luce all’interno del vetro?",
    rispostaCorretta: "$2{,}0 \\times 10^8\\text{ m/s}$",
    risposteErrate: [
      "$4{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$",
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$5{,}0 \\times 10^{-9}\\text{ m/s}$"
    ],
    spiegazione: "L’indice di rifrazione assoluto di un mezzo trasparente è il rapporto tra la velocità della luce nel vuoto $c$ e quella nel mezzo $v$ ($n = \\frac{c}{v}$). Ricavando la velocità nel mezzo: $v = \\frac{c}{n} = \\frac{3{,}0 \\times 10^8\\text{ m/s}}{1{,}50} = 2{,}0 \\times 10^8\\text{ m/s}$.",
    fonte: "Lotto S3 del progetto — S3-30 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 556,
    materia: "Scienze",
    domanda: "Un raggio luminoso passa dall’aria (indice di rifrazione $n_1 = 1{,}0$) a un mezzo ottico trasparente con indice $n_2 = \\sqrt{3} \\approx 1{,}73$. Se l’angolo di incidenza nell’aria rispetto alla normale è $\\theta_1 = 60^\\circ$ (sapendo che $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2}$), qual è l’angolo di rifrazione $\\theta_2$ all’interno del mezzo?",
    rispostaCorretta: "$30^\\circ$",
    risposteErrate: [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "Il raggio non penetra nel mezzo perché subisce riflessione totale per qualsiasi angolo di incidenza"
    ],
    spiegazione: "Per la legge di Snell: $n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$. Sostituendo i valori: $1{,}0 \\cdot \\sin(60^\\circ) = \\sqrt{3} \\cdot \\sin(\\theta_2) \\implies 1{,}0 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3} \\sin(\\theta_2) \\implies \\sin(\\theta_2) = \\frac{1}{2}$. Poiché l’angolo cercato è compreso nel primo quadrante, si ottiene: $\\theta_2 = 30^\\circ$.",
    fonte: "Lotto S3 del progetto — S3-31 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 557,
    materia: "Scienze",
    domanda: "Un raggio di luce si propaga all’interno di un mezzo ottico denso avente indice di rifrazione $n_1 = 2{,}0$ e incide sulla superficie piana di separazione con l’aria ($n_2 = 1{,}0$). Qual è il valore dell’angolo limite $\\theta_L$ di incidenza oltre il quale si manifesta il fenomeno della riflessione totale interna?",
    rispostaCorretta: "$30^\\circ$",
    risposteErrate: [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "L’angolo limite non esiste perché la riflessione totale si verifica solo passando dall’aria a un mezzo più denso"
    ],
    spiegazione: "Il fenomeno della riflessione totale può avvenire quando la luce passa da un mezzo più denso a uno meno denso ($n_1 > n_2$). L’angolo limite $\\theta_L$ corrisponde a un angolo di rifrazione di $90^\\circ$: $\\sin(\\theta_L) = \\frac{n_2}{n_1} = \\frac{1{,}0}{2{,}0} = 0{,}50$. Da cui: $\\theta_L = 30^\\circ$. Per angoli di incidenza $\\theta_i > 30^\\circ$ la luce viene interamente riflessa nel primo mezzo.",
    fonte: "Lotto S3 del progetto — S3-32 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 558,
    materia: "Scienze",
    domanda: "Un oggetto reale puntiforme è posizionato a una distanza $p = 40\\text{ cm}$ davanti alla superficie riflettente di uno specchio piano verticale. Quali sono le proprietà dell’immagine ottica formata dallo specchio e la sua posizione?",
    rispostaCorretta: "L’immagine è virtuale, diritta, delle stesse dimensioni dell’oggetto e posizionata simmetricamente a $40\\text{ cm}$ dietro la superficie dello specchio",
    risposteErrate: [
      "L’immagine è reale, capovolta, ingrandita del doppio e posizionata a $80\\text{ cm}$ davanti allo specchio",
      "L’immagine è reale, diritta, rimpicciolita e posizionata a $20\\text{ cm}$ davanti allo specchio",
      "L’immagine è virtuale, capovolta e posizionata a $40\\text{ cm}$ dietro lo specchio",
      "L’immagine è virtuale, diritta, rimpicciolita della metà e posizionata a $20\\text{ cm}$ dietro lo specchio"
    ],
    spiegazione: "Uno specchio piano forma sempre un’immagine virtuale (data dal prolungamento dei raggi riflessi), diritta, con ingrandimento unitario ($G = 1$, stesse dimensioni) e collocata simmetricamente dietro il piano riflettente alla medesima distanza dell’oggetto reale ($q = p = 40\\text{ cm}$).",
    fonte: "Lotto S3 del progetto — S3-33 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 559,
    materia: "Scienze",
    domanda: "Una lente sottile convergente ha una distanza focale positiva $f = 25\\text{ cm} = 0{,}25\\text{ m}$. Qual è il potere diottrico (convergenza $D$) di tale lente espresso in diottrie ($\\text{m}^{-1}$)?",
    rispostaCorretta: "$+4{,}0\\text{ diottrie}$",
    risposteErrate: [
      "$+0{,}040\\text{ diottrie}$",
      "$-4{,}0\\text{ diottrie}$",
      "$+0{,}25\\text{ diottrie}$",
      "$+25\\text{ diottrie}$"
    ],
    spiegazione: "La convergenza o potere diottrico di una lente è definita come il reciproco della distanza focale espressa in metri: $D = \\frac{1}{f} = \\frac{1}{0{,}25\\text{ m}} = +4{,}0\\text{ diottrie}$ ($\\text{m}^{-1}$). Il segno positivo indica che la lente è convergente.",
    fonte: "Lotto S3 del progetto — S3-34 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 560,
    materia: "Scienze",
    domanda: "Un oggetto reale è posto a una distanza $p = 30\\text{ cm}$ davanti a una lente sottile convergente avente distanza focale $f = 20\\text{ cm}$. A quale distanza $q$ dalla lente si forma l’immagine e qual è il modulo dell’ingrandimento lineare $|G|$ dell’immagine prodotta?",
    rispostaCorretta: "$q = +60\\text{ cm}$ con ingrandimento $|G| = 2{,}0$",
    risposteErrate: [
      "$q = +12\\text{ cm}$ con ingrandimento $|G| = 0{,}40$",
      "$q = +60\\text{ cm}$ con ingrandimento $|G| = 0{,}50$",
      "$q = +50\\text{ cm}$ con ingrandimento $|G| = 1{,}67$",
      "$q = +30\\text{ cm}$ con ingrandimento $|G| = 1{,}0$"
    ],
    spiegazione: "Applicando l’equazione dei punti coniugati per le lenti sottili: $\\frac{1}{p} + \\frac{1}{q} = \\frac{1}{f} \\implies \\frac{1}{q} = \\frac{1}{f} - \\frac{1}{p} = \\frac{1}{20\\text{ cm}} - \\frac{1}{30\\text{ cm}} = \\frac{3 - 2}{60\\text{ cm}} = \\frac{1}{60\\text{ cm}} \\implies q = +60\\text{ cm}$ (immagine reale). Il modulo dell’ingrandimento lineare è dato dal rapporto tra la distanza dell’immagine e quella dell’oggetto: $|G| = \\frac{q}{p} = \\frac{60\\text{ cm}}{30\\text{ cm}} = 2{,}0$ (l’immagine risulta reale, capovolta e ingrandita di un fattore 2).",
    fonte: "Lotto S3 del progetto — S3-35 (Elettromagnetismo, onde e ottica)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 561,
    materia: "Scienze",
    domanda: "Il nuclide del ferro $^{56}_{26}\\text{Fe}$ è presente nel nucleo di molti atomi stabili. Quanti protoni, neutroni ed elettroni possiede un atomo neutro di $^{56}_{26}\\text{Fe}$?",
    rispostaCorretta: "$26\\text{ protoni}$, $30\\text{ neutroni}$ e $26\\text{ elettroni}$",
    risposteErrate: [
      "$26\\text{ protoni}$, $56\\text{ neutroni}$ e $26\\text{ elettroni}$",
      "$30\\text{ protoni}$, $26\\text{ neutroni}$ e $30\\text{ elettroni}$",
      "$26\\text{ protoni}$, $30\\text{ neutroni}$ e $30\\text{ elettroni}$",
      "$56\\text{ protoni}$, $26\\text{ neutroni}$ e $56\\text{ elettroni}$"
    ],
    spiegazione: "In un nuclide generico $^{A}_{Z}\\text{X}$, il numero atomico $Z$ indica il numero di protoni (qui $Z = 26$). In un atomo elettricamente neutro, il numero di elettroni eguaglia quello dei protoni ($26\\text{ elettroni}$). Il numero di massa $A = 56$ rappresenta la somma di protoni e neutroni ($A = Z + N$); pertanto il numero di neutroni è $N = A - Z = 56 - 26 = 30\\text{ neutroni}$.",
    fonte: "Lotto S4 del progetto — S4-01 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 562,
    materia: "Scienze",
    domanda: "Lo ione alluminio $^{27}_{13}\\text{Al}^{3+}$ si forma quando un atomo di alluminio perde elettroni. Quanti protoni, neutroni ed elettroni sono presenti in un singolo ione $^{27}_{13}\\text{Al}^{3+}$?",
    rispostaCorretta: "$13\\text{ protoni}$, $14\\text{ neutroni}$ e $10\\text{ elettroni}$",
    risposteErrate: [
      "$13\\text{ protoni}$, $14\\text{ neutroni}$ e $16\\text{ elettroni}$",
      "$13\\text{ protoni}$, $27\\text{ neutroni}$ e $10\\text{ elettroni}$",
      "$10\\text{ protoni}$, $14\\text{ neutroni}$ e $13\\text{ elettroni}$",
      "$16\\text{ protoni}$, $11\\text{ neutroni}$ e $13\\text{ elettroni}$"
    ],
    spiegazione: "Per l'alluminio $^{27}_{13}\\text{Al}^{3+}$, il numero atomico $Z = 13$ stabilisce la presenza immutabile di $13\\text{ protoni}$ nel nucleo. Il numero di neutroni è $N = A - Z = 27 - 13 = 14\\text{ neutroni}$. La carica $+3$ indica la cessione di 3 elettroni rispetto allo stato neutro: $N_e = Z - 3 = 13 - 3 = 10\\text{ elettroni}$.",
    fonte: "Lotto S4 del progetto — S4-02 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 563,
    materia: "Scienze",
    domanda: "Lo ione solfuro $^{32}_{16}\\text{S}^{2-}$ deriva dall'acquisto di elettroni da parte dell'atomo di zolfo. Qual è la corretta composizione subatomica di questo anione?",
    rispostaCorretta: "$16\\text{ protoni}$, $16\\text{ neutroni}$ e $18\\text{ elettroni}$",
    risposteErrate: [
      "$16\\text{ protoni}$, $16\\text{ neutroni}$ e $14\\text{ elettroni}$",
      "$18\\text{ protoni}$, $16\\text{ neutroni}$ e $16\\text{ elettroni}$",
      "$16\\text{ protoni}$, $32\\text{ neutroni}$ e $18\\text{ elettroni}$",
      "$14\\text{ protoni}$, $18\\text{ neutroni}$ e $16\\text{ elettroni}$"
    ],
    spiegazione: "Per lo zolfo $^{32}_{16}\\text{S}^{2-}$, il numero atomico è $Z = 16$ ($16\\text{ protoni}$). Il numero di neutroni è $N = A - Z = 32 - 16 = 16\\text{ neutroni}$. La carica $-2$ indica l'acquisto di 2 elettroni rispetto all'atomo neutro: $N_e = Z + 2 = 16 + 2 = 18\\text{ elettroni}$.",
    fonte: "Lotto S4 del progetto — S4-03 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 564,
    materia: "Scienze",
    domanda: "Due atomi che costituiscono una coppia di isotopi dello stesso elemento chimico presentano necessariamente:",
    rispostaCorretta: "Lo stesso numero atomico $Z$ ma differente numero di massa $A$",
    risposteErrate: [
      "Lo stesso numero di massa $A$ ma differente numero atomico $Z$",
      "Lo stesso numero di neutroni ma differente numero di protoni",
      "Differenti proprietà chimiche fondamentali e identica massa atomica",
      "Lo stesso numero di neutroni e lo stesso numero di elettroni"
    ],
    spiegazione: "Gli isotopi sono atomi appartenenti allo stesso elemento chimico (quindi con lo stesso numero atomico $Z$, ossia medesimo numero di protoni ed elettroni nello stato neutro) che differiscono per il numero di neutroni $N$ nel nucleo, e di conseguenza presentano un diverso numero di massa $A = Z + N$ pur mantenendo identico comportamento chimico.",
    fonte: "Lotto S4 del progetto — S4-04 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 565,
    materia: "Scienze",
    domanda: "Quale delle seguenti serie è formata esclusivamente da specie chimiche isoelettroniche fra loro (aventi lo stesso numero complessivo di elettroni)?",
    rispostaCorretta: "$\\text{N}^{3-}$, $\\text{O}^{2-}$, $\\text{F}^-$, $\\text{Na}^+$, $\\text{Mg}^{2+}$",
    risposteErrate: [
      "$\\text{Li}^+$, $\\text{Na}^+$, $\\text{K}^+$, $\\text{Rb}^+$, $\\text{Cs}^+$",
      "$\\text{F}^-$, $\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$, $\\text{At}^-$",
      "$\\text{O}^{2-}$, $\\text{S}^{2-}$, $\\text{Se}^{2-}$, $\\text{Te}^{2-}$, $\\text{Po}^{2-}$",
      "$\\text{C}$, $\\text{N}$, $\\text{O}$, $\\text{F}$, $\\text{Ne}$"
    ],
    spiegazione: "Specie isoelettroniche possiedono lo stesso numero totale di elettroni. Con $Z(\\text{N})=7$, $Z(\\text{O})=8$, $Z(\\text{F})=9$, $Z(\\text{Na})=11$, $Z(\\text{Mg})=12$: $\\text{N}^{3-}$ ha $7+3=10\\ e^-$, $\\text{O}^{2-}$ ha $8+2=10\\ e^-$, $\\text{F}^-$ ha $9+1=10\\ e^-$, $\\text{Na}^+$ ha $11-1=10\\ e^-$, $\\text{Mg}^{2+}$ ha $12-2=10\\ e^-$. Tutte hanno esattamente 10 elettroni (isoelettroniche con il gas nobile Neon).",
    fonte: "Lotto S4 del progetto — S4-05 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 566,
    materia: "Scienze",
    domanda: "In base al modello atomico a livelli quantizzati, qual è il numero massimo di elettroni che può essere ospitato complessivamente nel terzo livello energetico principale ($n = 3$)?",
    rispostaCorretta: "$18\\text{ elettroni}$",
    risposteErrate: [
      "$8\\text{ elettroni}$",
      "$32\\text{ elettroni}$",
      "$6\\text{ elettroni}$",
      "$9\\text{ elettroni}$"
    ],
    spiegazione: "La capacità massima di elettroni di un livello quantico principale $n$ è data dalla formula $2n^2$. Per $n = 3$, il numero massimo di elettroni è $2 \\cdot (3)^2 = 2 \\cdot 9 = 18\\text{ elettroni}$ (suddivisi nei sottolivelli $3s$ con 2 elettroni, $3p$ con 6 elettroni e $3d$ con 10 elettroni).",
    fonte: "Lotto S4 del progetto — S4-06 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 567,
    materia: "Scienze",
    domanda: "Quanti orbitali atomici costituiscono complessivamente un sottolivello di tipo $p$ e quanti elettroni può contenere al massimo tale sottolivello?",
    rispostaCorretta: "$3\\text{ orbitali}$, per un massimo di $6\\text{ elettroni}$",
    risposteErrate: [
      "$1\\text{ orbitale}$, per un massimo di $2\\text{ elettroni}$",
      "$5\\text{ orbitali}$, per un massimo di $10\\text{ elettroni}$",
      "$3\\text{ orbitali}$, per un massimo di $3\\text{ elettroni}$",
      "$6\\text{ orbitali}$, per un massimo di $12\\text{ elettroni}$"
    ],
    spiegazione: "Un sottolivello di tipo $p$ (corrispondente a numero quantico secondario $l = 1$) è composto da $2l + 1 = 3$ orbitali degeneri ($p_x, p_y, p_z$). Poiché ciascun orbitale può ospitare al massimo 2 elettroni con spin antiparallelo (principio di Pauli), la capacità massima complessiva del sottolivello $p$ è $3 \\times 2 = 6\\text{ elettroni}$.",
    fonte: "Lotto S4 del progetto — S4-07 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 568,
    materia: "Scienze",
    domanda: "Il cloro naturale è costituito da una miscela di due isotopi stabili: $^{35}\\text{Cl}$ (massa isotopica $35{,}0\\text{ u}$, abbondanza relativa $75\\%$) e $^{37}\\text{Cl}$ (massa isotopica $37{,}0\\text{ u}$, abbondanza relativa $25\\%$). Qual è la massa atomica relativa media del cloro?",
    rispostaCorretta: "$35{,}5\\text{ u}$",
    risposteErrate: [
      "$36{,}0\\text{ u}$",
      "$35{,}25\\text{ u}$",
      "$36{,}5\\text{ u}$",
      "$34{,}5\\text{ u}$"
    ],
    spiegazione: "La massa atomica relativa media è la media ponderata delle masse degli isotopi moltiplicate per le rispettive abbondanze percentuali: $\\bar{M} = \\frac{35{,}0 \\cdot 75 + 37{,}0 \\cdot 25}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35{,}5\\text{ u}$.",
    fonte: "Lotto S4 del progetto — S4-08 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 569,
    materia: "Scienze",
    domanda: "Il silicio possiede numero atomico $Z = 14$. Qual è la corretta configurazione elettronica del silicio nel suo stato fondamentale?",
    rispostaCorretta: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^2$",
    risposteErrate: [
      "$1s^2\\,2s^2\\,2p^6\\,3s^4$",
      "$1s^2\\,2s^2\\,2p^6\\,3p^4$",
      "$1s^2\\,2s^2\\,2p^4\\,3s^2\\,3p^4$",
      "$1s^2\\,2s^2\\,2p^6\\,3s^1\\,3p^3$"
    ],
    spiegazione: "Distribuendo i 14 elettroni secondo il principio di Aufbau (ordine crescente di energia): $1s^2$ (2 elettroni), $2s^2$ (2 elettroni), $2p^6$ (6 elettroni, totale 10), $3s^2$ (2 elettroni, totale 12), $3p^2$ (2 elettroni, totale 14). La configurazione dello stato fondamentale è dunque $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^2$.",
    fonte: "Lotto S4 del progetto — S4-09 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 570,
    materia: "Scienze",
    domanda: "Il potassio ha numero atomico $Z = 19$. Qual è la configurazione elettronica dello ione potassio $\\text{K}^+$ nello stato fondamentale?",
    rispostaCorretta: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$",
    risposteErrate: [
      "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^1$",
      "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2$",
      "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$",
      "$1s^2\\,2s^2\\,2p^6\\,3s^1\\,3p^6$"
    ],
    spiegazione: "L'atomo neutro di potassio ($Z = 19$) ha configurazione $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^1$. Formando il catione $\\text{K}^+$, perde l'unico elettrone di valenza $4s^1$, assumendo la configurazione a guscio chiuso con 18 elettroni $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$, isoelettronica con il gas nobile Argon.",
    fonte: "Lotto S4 del progetto — S4-10 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 571,
    materia: "Scienze",
    domanda: "Il fosforo ha numero atomico $Z = 15$. Quanti sono gli elettroni di valenza presenti nel livello energetico più esterno di un atomo di fosforo?",
    rispostaCorretta: "$5\\text{ elettroni di valenza}$",
    risposteErrate: [
      "$3\\text{ elettroni di valenza}$",
      "$15\\text{ elettroni di valenza}$",
      "$2\\text{ elettroni di valenza}$",
      "$8\\text{ elettroni di valenza}$"
    ],
    spiegazione: "La configurazione elettronica del fosforo ($Z = 15$) è $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^3$. Gli elettroni di valenza sono quelli situati nel guscio principale più esterno ($n = 3$), ossia $2\\text{ elettroni in }3s + 3\\text{ elettroni in }3p = 5\\text{ elettroni di valenza}$ (coerente con l'appartenenza al gruppo 15 / V A).",
    fonte: "Lotto S4 del progetto — S4-11 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 572,
    materia: "Scienze",
    domanda: "Un elemento neutro $X$ presenta la seguente configurazione elettronica nello stato fondamentale: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$. A quale periodo e a quale gruppo della tavola periodica appartiene?",
    rispostaCorretta: "Periodo 3 e Gruppo 17 (VII A, alogeni)",
    risposteErrate: [
      "Periodo 2 e Gruppo 15 (V A)",
      "Periodo 3 e Gruppo 15 (V A)",
      "Periodo 5 e Gruppo 17 (VII A)",
      "Periodo 3 e Gruppo 7 (metalli di transizione)"
    ],
    spiegazione: "Il livello principale massimo occupato è $n = 3$, indicando che l'elemento appartiene al Periodo 3. Il numero di elettroni di valenza nel livello 3 è $2 + 5 = 7$, corrispondente al Gruppo 17 (o VII A dei gruppi principali, famiglia degli alogeni; si tratta dell'atomo di cloro, $Z = 17$).",
    fonte: "Lotto S4 del progetto — S4-12 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 573,
    materia: "Scienze",
    domanda: "Quale delle seguenti terne di elementi chimici è formata, nell’ordine esatto, da un metallo alcalino, un alogeno e un gas nobile?",
    rispostaCorretta: "Sodio ($\\text{Na}$), Cloro ($\\text{Cl}$), Elio ($\\text{He}$)",
    risposteErrate: [
      "Calcio ($\\text{Ca}$), Fluoro ($\\text{F}$), Neon ($\\text{Ne}$)",
      "Potassio ($\\text{K}$), Zolfo ($\\text{S}$), Argon ($\\text{Ar}$)",
      "Magnesio ($\\text{Mg}$), Bromo ($\\text{Br}$), Cripton ($\\text{Kr}$)",
      "Litio ($\\text{Li}$), Azoto ($\\text{N}$), Xeno ($\\text{Xe}$)"
    ],
    spiegazione: "Il sodio ($\\text{Na}$) appartiene al gruppo 1 (metalli alcalini); il cloro ($\\text{Cl}$) appartiene al gruppo 17 (alogeni); l'elio ($\\text{He}$) appartiene al gruppo 18 (gas nobili). Calcio e magnesio sono metalli alcalino-terrosi (gruppo 2), mentre zolfo e azoto non sono alogeni.",
    fonte: "Lotto S4 del progetto — S4-13 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 574,
    materia: "Scienze",
    domanda: "Perché gli elementi appartenenti allo stesso gruppo principale (gruppi 1, 2 e 13–18) della tavola periodica manifestano proprietà chimiche tra loro molto simili?",
    rispostaCorretta: "Perché possiedono lo stesso numero e la medesima configurazione di elettroni nel guscio di valenza",
    risposteErrate: [
      "Perché possiedono lo stesso numero totale di protoni nel nucleo",
      "Perché hanno tutti lo stesso identico raggio atomico e massa",
      "Perché possiedono lo stesso numero di livelli energetici occupati",
      "Perché hanno tutti la medesima temperatura di fusione ed ebollizione"
    ],
    spiegazione: "Le proprietà chimiche e la reattività di un elemento dei gruppi principali dipendono primariamente dagli elettroni di valenza (quelli del guscio più esterno). Gli elementi dello stesso gruppo condividono la medesima configurazione elettronica esterna (ad esempio $ns^1$ per gli alcalini, $ns^2\\,np^5$ per gli alogeni), determinando comportamenti chimici analoghi.",
    fonte: "Lotto S4 del progetto — S4-14 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 575,
    materia: "Scienze",
    domanda: "Come varia generalmente il raggio atomico degli elementi chimici lungo la tavola periodica?",
    rispostaCorretta: "Aumenta scendendo lungo un gruppo e diminuisce procedendo da sinistra verso destra lungo un periodo",
    risposteErrate: [
      "Diminuisce scendendo lungo un gruppo e aumenta da sinistra verso destra lungo un periodo",
      "Aumenta sia scendendo lungo un gruppo sia procedendo da sinistra verso destra lungo un periodo",
      "Diminuisce sia scendendo lungo un gruppo sia procedendo da sinistra verso destra lungo un periodo",
      "Rimane costante lungo i periodi e varia solo in funzione del numero di massa"
    ],
    spiegazione: "Scendendo lungo un gruppo si aggiungono nuovi livelli quantici principali ($n$), allontanando gli elettroni esterni dal nucleo e aumentando il raggio. Muovendosi da sinistra a destra lungo un periodo, il numero quantico $n$ resta lo stesso ma aumenta la carica nucleare efficace ($Z_{\\text{eff}}$), attirando più fortemente gli elettroni verso il nucleo e riducendo il raggio atomico.",
    fonte: "Lotto S4 del progetto — S4-15 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 576,
    materia: "Scienze",
    domanda: "L’energia di prima ionizzazione è l’energia minima necessaria per rimuovere l'elettrone più debolmente legato da un atomo gassoso neutro isolato. Quale dei seguenti elementi presenta la maggiore energia di prima ionizzazione?",
    rispostaCorretta: "Elio ($\\text{He}$)",
    risposteErrate: [
      "Cesio ($\\text{Cs}$)",
      "Sodio ($\\text{Na}$)",
      "Litio ($\\text{Li}$)",
      "Bario ($\\text{Ba}$)"
    ],
    spiegazione: "L'energia di prima ionizzazione cresce dal basso verso l'alto lungo i gruppi e da sinistra a destra lungo i periodi. L'elio ($\\text{He}$), situato in alto a destra nella tavola periodica, possiede il guscio $1s^2$ completo vicinissimo al nucleo senza schermatura da livelli interni, risultando l'elemento con la più alta energia di prima ionizzazione dell'intera tavola periodica.",
    fonte: "Lotto S4 del progetto — S4-16 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 577,
    materia: "Scienze",
    domanda: "L'elettronegatività misura la tendenza di un atomo ad attrarre verso di sé gli elettroni di legame. Quale elemento chimico presenta il valore di elettronegatività più elevato secondo la scala di Pauling?",
    rispostaCorretta: "Fluoro ($\\text{F}$)",
    risposteErrate: [
      "Francio ($\\text{Fr}$)",
      "Cloro ($\\text{Cl}$)",
      "Ossigeno ($\\text{O}$)",
      "Sodio ($\\text{Na}$)"
    ],
    spiegazione: "Sulla scala di Pauling, l'elettronegatività aumenta da sinistra a destra lungo un periodo e dal basso verso l'alto lungo un gruppo. Escludendo i gas nobili non reattivi, il fluoro ($\\text{F}$) ha la massima elettronegatività assoluta (valore convenzionale $3{,}98 \\approx 4{,}0$), seguito dall'ossigeno ($3{,}44$).",
    fonte: "Lotto S4 del progetto — S4-17 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 578,
    materia: "Scienze",
    domanda: "Tra quali delle seguenti coppie di elementi è massima la probabilità che si instauri un legame prevalentemente ionico?",
    rispostaCorretta: "Potassio ($\\text{K}$) e Cloro ($\\text{Cl}$)",
    risposteErrate: [
      "Carbonio ($\\text{C}$) e Idrogeno ($\\text{H}$)",
      "Azoto ($\\text{N}$) e Ossigeno ($\\text{O}$)",
      "Cloro ($\\text{Cl}$) e Cloro ($\\text{Cl}$)",
      "Silicio ($\\text{Si}$) e Ossigeno ($\\text{O}$)"
    ],
    spiegazione: "Un legame è tipicamente ionico quando si forma tra un elemento a bassissima elettronegatività (metallo alcalino come il potassio, $\\chi \\approx 0{,}8$) e un elemento a elevata elettronegatività (non metallo come il cloro, $\\chi \\approx 3{,}2$). La grande differenza di elettronegatività ($\\Delta\\chi \\approx 2{,}4 > 1{,}7$) comporta il trasferimento di un elettrone e l'attrazione elettrostatica tra $\\text{K}^+$ e $\\text{Cl}^-$.",
    fonte: "Lotto S4 del progetto — S4-18 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 579,
    materia: "Scienze",
    domanda: "Qual è la formula chimica minima del composto ionico neutro formato dagli ioni magnesio $\\text{Mg}^{2+}$ e dagli ioni nitruro $\\text{N}^{3-}$?",
    rispostaCorretta: "$\\text{Mg}_3\\text{N}_2$",
    risposteErrate: [
      "$\\text{Mg}_2\\text{N}_3$",
      "$\\text{MgN}$",
      "$\\text{MgN}_2$",
      "$\\text{Mg}_3\\text{N}$"
    ],
    spiegazione: "In un composto ionico neutro la somma algebrica delle cariche deve essere rigorosamente nulla. Combinando 3 ioni $\\text{Mg}^{2+}$ ($3 \\times (+2) = +6$) con 2 ioni $\\text{N}^{3-}$ ($2 \\times (-3) = -6$), si ottiene la neutralità elettrica complessiva ($+6 - 6 = 0$). La formula minima corretta è dunque $\\text{Mg}_3\\text{N}_2$.",
    fonte: "Lotto S4 del progetto — S4-19 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 580,
    materia: "Scienze",
    domanda: "I composti ionici come il cloruro di sodio ($\\text{NaCl}$) solidi presentano proprietà caratteristiche. Quale delle seguenti affermazioni sul loro comportamento è corretta?",
    rispostaCorretta: "Allo stato solido sono isolanti elettrici, ma diventano buoni conduttori quando vengono fusi o disciolti in acqua",
    risposteErrate: [
      "Conducono sempre la corrente elettrica sia allo stato solido che fuso grazie alla presenza di elettroni liberi",
      "Hanno temperature di fusione ed ebollizione molto basse a causa della debolezza del legame ionico",
      "Sono materiali estremamente malleabili e duttili che si deformano facilmente senza fratturarsi",
      "Sono completamente insolubili in qualsiasi solvente polare come l'acqua"
    ],
    spiegazione: "Nei solidi ionici gli ioni sono bloccati nelle posizioni fisse del reticolo cristallino tridimensionale, impedendo il trasporto di carica (isolanti allo stato solido). Quando il reticolo viene demolito tramite fusione termica o solvatazione in acqua, gli ioni $\\text{Na}^+$ e $\\text{Cl}^-$ acquistano mobilità, permettendo la conduzione elettrica per trasporto ionico.",
    fonte: "Lotto S4 del progetto — S4-20 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 581,
    materia: "Scienze",
    domanda: "Il modello del legame metallico noto come «mare di elettroni» (o nube elettronica delocalizzata) spiega molte proprietà fisiche dei metalli. Quale delle seguenti caratteristiche deriva direttamente dalla delocalizzazione elettronica?",
    rispostaCorretta: "L'elevata conducibilità elettrica e termica allo stato solido",
    risposteErrate: [
      "La fragilità cristallina e la tendenza a frantumarsi sotto percussione",
      "La totale trasparenza ottica alla luce visibile",
      "La formazione di molecole discrete gassose a temperatura ambiente",
      "L'incapacità di condurre il calore lungo il reticolo"
    ],
    spiegazione: "Nel legame metallico i cationi metallici occupano nodi reticolari regolari, mentre gli elettroni di valenza sono liberi di muoversi attraverso l'intero reticolo solido. Questa elevata mobilità degli elettroni delocalizzati spiega sia l'eccellente conducibilità elettrica (flusso di elettroni sotto campo elettrico) sia la conducibilità termica e la malleabilità dei metalli.",
    fonte: "Lotto S4 del progetto — S4-21 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 582,
    materia: "Scienze",
    domanda: "Una molecola biatomica di azoto ($\\text{N}_2$) è tenuta unita da un legame covalente. Quante coppie di elettroni (doppietti elettronici) sono complessivamente condivise tra i due atomi di azoto?",
    rispostaCorretta: "$3\\text{ coppie di elettroni}$ (legame covalente triplo, pari a 6 elettroni condivisi)",
    risposteErrate: [
      "$1\\text{ coppia di elettroni}$ (legame covalente singolo, pari a 2 elettroni condivisi)",
      "$2\\text{ coppie di elettroni}$ (legame covalente doppio, pari a 4 elettroni condivisi)",
      "$4\\text{ coppie di elettroni}$ (legame quadruplo, pari a 8 elettroni condivisi)",
      "$5\\text{ coppie di elettroni}$ (pari a 10 elettroni condivisi)"
    ],
    spiegazione: "L'azoto ($Z = 7$) ha 5 elettroni di valenza ($2s^2\\,2p^3$). Per raggiungere la configurazione stabile a ottetto (8 elettroni), ciascun atomo di azoto deve condividere 3 elettroni. I due atomi formano così un legame covalente triplo ($:\\text{N}\\equiv\\text{N}:$), condividendo esattamente 3 doppietti (6 elettroni in totale), oltre a possedere ciascuno un doppietto solitario non condiviso.",
    fonte: "Lotto S4 del progetto — S4-22 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 583,
    materia: "Scienze",
    domanda: "Confrontando un legame covalente singolo $\\text{C}-\\text{C}$, un legame doppio $\\text{C}=\\text{C}$ e un legame triplo $\\text{C}\\equiv\\text{C}$ tra atomi di carbonio, quale affermazione è corretta?",
    rispostaCorretta: "Il legame triplo ha la massima energia di dissociazione e la minore lunghezza di legame",
    risposteErrate: [
      "Il legame singolo ha la massima energia di legame e la minore lunghezza di legame",
      "Il legame triplo è il più lungo e il più debole tra i tre",
      "Tutti e tre i legami presentano la stessa lunghezza e la stessa energia di rottura",
      "Il legame doppio ha lunghezza maggiore rispetto al legame singolo"
    ],
    spiegazione: "All'aumentare dell'ordine di legame tra la stessa coppia di atomi di carbonio, aumenta la densità elettronica condivisa tra i nuclei, determinando una maggiore attrazione elettrostatica nucleo-elettroni. Ne consegue che il legame triplo $\\text{C}\\equiv\\text{C}$ è il più corto (circa $0{,}120\\text{ nm}$ vs $0{,}154\\text{ nm}$ del singolo) e possiede la più alta energia di legame (dissociazione più difficile).",
    fonte: "Lotto S4 del progetto — S4-23 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 584,
    materia: "Scienze",
    domanda: "Nella molecola di acido cloridrico ($\\text{H}-\\text{Cl}$), il legame tra idrogeno e cloro è di tipo:",
    rispostaCorretta: "Covalente polare, con parziale carica negativa $\\delta^-$ localizzata sul cloro",
    risposteErrate: [
      "Covalente puro (omopolare), con distribuzione perfettamente simmetrica della carica",
      "Covalente polare, con parziale carica negativa $\\delta^-$ localizzata sull'idrogeno",
      "Prevalentemente ionico, costituito da ioni liberi separati a temperatura ambiente",
      "Metallico, con elettroni completamente delocalizzati tra le molecole"
    ],
    spiegazione: "Il cloro ha un'elettronegatività ($\\chi \\approx 3{,}16$) sensibilmente superiore a quella dell'idrogeno ($\\chi \\approx 2{,}20$), con una differenza $\\Delta\\chi \\approx 0{,}96$. La coppia di elettroni condivisa è attratta maggiormente verso il nucleo del cloro, generando un dipolo permanente con parziale carica negativa $\\delta^-$ sul cloro e parziale carica positiva $\\delta^+$ sull'idrogeno.",
    fonte: "Lotto S4 del progetto — S4-24 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 585,
    materia: "Scienze",
    domanda: "In cosa consiste un legame covalente dativo (o di coordinazione), come quello presente nello ione ammonio $\\text{NH}_4^+$ o nello ione idronio $\\text{H}_3\\text{O}^+$?",
    rispostaCorretta: "La coppia di elettroni condivisa è fornita per intero da uno solo dei due atomi (donatore) a un orbitale vuoto dell'altro (accettore)",
    risposteErrate: [
      "Entrambi gli atomi cedono un elettrone ciascuno per formare una nube delocalizzata",
      "Uno ione positivo e uno negativo si attraggono senza alcuna condivisione di elettroni",
      "Un atomo cede definitivamente due elettroni trasformandosi in anione stabile",
      "Il legame si instaura esclusivamente per attrazione gravitazionale tra i due nuclei"
    ],
    spiegazione: "Nel legame dativo (o di coordinazione), il doppietto elettronico di legame proviene interamente da un solo atomo (donatore, dotato di una coppia di elettroni solitaria / lone pair), che lo condivide con un secondo atomo o ione (accettore) che dispone di un orbitale di valenza vuoto (come il protone $\\text{H}^+$ che si lega alla coppia solitaria dell'azoto in $\\text{NH}_3$ formando $\\text{NH}_4^+$).",
    fonte: "Lotto S4 del progetto — S4-25 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 586,
    materia: "Scienze",
    domanda: "Secondo la regola dell’ottetto enunciata da Lewis, gli atomi degli elementi dei gruppi principali tendono a combinarsi chimicamente per:",
    rispostaCorretta: "Raggiungere una configurazione elettronica esterna con 8 elettroni di valenza ($ns^2\\,np^6$), caratteristica dei gas nobili dal neon in poi",
    risposteErrate: [
      "Avere sempre un numero totale di 8 protoni all’interno del nucleo atomico",
      "Riempire completamente tutti i livelli energetici quantici fino a $n = 4$",
      "Assumere una carica elettrica netta complessiva pari a $+8$ oppure $-8$",
      "Dimezzare il proprio numero di massa per massimizzare l’energia di legame nucleare"
    ],
    spiegazione: "La regola dell'ottetto stabilisce che gli atomi dei gruppi principali tendono a cedere, acquistare o condividere elettroni fino a raggiungere una configurazione a guscio di valenza completo con 8 elettroni ($ns^2\\,np^6$), corrispondente alla massima stabilità tipica dei gas nobili dal neon in poi (l'idrogeno e l'elio fanno eccezione stabilizzandosi con il duetto $1s^2$).",
    fonte: "Lotto S4 del progetto — S4-26 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 587,
    materia: "Scienze",
    domanda: "Nella struttura di Lewis della molecola d'acqua ($\\text{H}_2\\text{O}$), quanti doppietti elettronici di legame e quanti doppietti solitari (lone pairs) sono presenti attorno all'atomo centrale di ossigeno?",
    rispostaCorretta: "$2\\text{ doppietti di legame}$ e $2\\text{ doppietti solitari}$",
    risposteErrate: [
      "$4\\text{ doppietti di legame}$ e $0\\text{ doppietti solitari}$",
      "$1\\text{ doppietto di legame}$ e $3\\text{ doppietti solitari}$",
      "$3\\text{ doppietti di legame}$ e $1\\text{ doppietto solitario}$",
      "$2\\text{ doppietti di legame}$ e $0\\text{ doppietti solitari}$"
    ],
    spiegazione: "L'ossigeno ha 6 elettroni di valenza e ogni idrogeno ne ha 1, per un totale di 8 elettroni di valenza (4 coppie). L'ossigeno forma due legami singoli $\\text{O}-\\text{H}$ (usando 2 coppie di legame, 4 elettroni) e conserva i rimanenti 4 elettroni come 2 doppietti non condivisi (lone pairs), completando l'ottetto.",
    fonte: "Lotto S4 del progetto — S4-27 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 588,
    materia: "Scienze",
    domanda: "Nella struttura di Lewis della molecola di ammoniaca ($\\text{NH}_3$), quanti doppietti di legame e quanti doppietti solitari circondano l'atomo centrale di azoto?",
    rispostaCorretta: "$3\\text{ doppietti di legame}$ e $1\\text{ doppietto solitario}$",
    risposteErrate: [
      "$3\\text{ doppietti di legame}$ e $0\\text{ doppietti solitari}$",
      "$2\\text{ doppietti di legame}$ e $2\\text{ doppietti solitari}$",
      "$1\\text{ doppietto di legame}$ e $3\\text{ doppietti solitari}$",
      "$4\\text{ doppietti di legame}$ e $0\\text{ doppietti solitari}$"
    ],
    spiegazione: "L'azoto possiede 5 elettroni di valenza e i 3 idrogeni forniscono 1 elettrone ciascuno, per un totale di 8 elettroni (4 doppietti). L'azoto forma 3 legami covalenti singoli $\\text{N}-\\text{H}$ (3 doppietti di legame) e presenta 1 doppietto solitario (lone pair) non condiviso.",
    fonte: "Lotto S4 del progetto — S4-28 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 589,
    materia: "Scienze",
    domanda: "Quale delle seguenti molecole costituisce un classico esempio di eccezione alla regola dell'ottetto per difetto (specie ipovalente con ottetto incompleto sull'atomo centrale)?",
    rispostaCorretta: "Trifluoruro di boro ($\\text{BF}_3$)",
    risposteErrate: [
      "Metano ($\\text{CH}_4$)",
      "Acqua ($\\text{H}_2\\text{O}$)",
      "Tetracloruro di carbonio ($\\text{CCl}_4$)",
      "Anidride carbonica ($\\text{CO}_2$)"
    ],
    spiegazione: "Nel trifluoruro di boro ($\\text{BF}_3$), il boro ($Z = 5$, gruppo 13) possiede 3 elettroni di valenza e forma 3 legami covalenti singoli con i 3 atomi di fluoro. Attorno al boro sono presenti solo 6 elettroni di valenza (3 coppie di legame), configurando una specie chimica ipovalente stabile con ottetto incompleto.",
    fonte: "Lotto S4 del progetto — S4-29 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 590,
    materia: "Scienze",
    domanda: "In base alla teoria VSEPR (repulsione delle coppie elettroniche di valenza), quale geometria molecolare e quale angolo di legame presenta la molecola di anidride carbonica ($\\text{CO}_2$)?",
    rispostaCorretta: "Lineare, con angolo di legame pari a $180^\\circ$",
    risposteErrate: [
      "Piegata (angolare), con angolo di legame pari a circa $104{,}5^\\circ$",
      "Trigonale planare, con angolo di legame pari a $120^\\circ$",
      "Tetraedrica, con angolo di legame pari a $109{,}5^\\circ$",
      "Piramidale trigonale, con angolo di legame pari a circa $107^\\circ$"
    ],
    spiegazione: "Nella molecola $\\text{O}=\\text{C}=\\text{O}$, l'atomo centrale di carbonio forma due doppi legami con i due atomi di ossigeno e non possiede doppietti elettronici solitari (lone pairs). I due domini elettronici si dispongono alla massima distanza angolare possibile per minimizzare la repulsione, determinando una geometria rigorosamente lineare con angolo di legame di $180^\\circ$.",
    fonte: "Lotto S4 del progetto — S4-30 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 591,
    materia: "Scienze",
    domanda: "Qual è la geometria molecolare prevista dalla teoria VSEPR per la molecola di metano ($\\text{CH}_4$) e quanto vale l'angolo di legame $\\text{H}-\\text{C}-\\text{H}$?",
    rispostaCorretta: "Tetraedrica, con angoli di legame pari a circa $109{,}5^\\circ$",
    risposteErrate: [
      "Quadrata planare, con angoli di legame pari a $90^\\circ$",
      "Trigonale planare, con angoli di legame pari a $120^\\circ$",
      "Piramidale a base quadrata, con angoli di legame pari a $90^\\circ$",
      "Lineare, con angoli di legame pari a $180^\\circ$"
    ],
    spiegazione: "Nel metano ($\\text{CH}_4$), il carbonio centrale è circondato da 4 coppie elettroniche di legame identiche e nessun doppietto solitario. La disposizione spaziale che massimizza la distanza tra 4 coppie equivalenti è il tetraedro regolare, con angoli di legame $\\text{H}-\\text{C}-\\text{H}$ pari a circa $109{,}5^\\circ$.",
    fonte: "Lotto S4 del progetto — S4-31 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 592,
    materia: "Scienze",
    domanda: "Perché l'angolo di legame $\\text{H}-\\text{O}-\\text{H}$ nella molecola d'acqua (circa $104{,}5^\\circ$) è inferiore all'angolo ideale tetraedrico ($109{,}5^\\circ$) presente nel metano?",
    rispostaCorretta: "Perché la repulsione reciproca esercitata dai due doppietti solitari (lone pairs) è maggiore di quella tra doppietti di legame, comprimendo l'angolo",
    risposteErrate: [
      "Perché l'atomo di ossigeno ha un numero di protoni inferiore rispetto al carbonio",
      "Perché l'idrogeno nell'acqua non condivide elettroni con l'ossigeno",
      "Perché nella molecola d'acqua è presente un legame covalente triplo rigido",
      "Perché la molecola d'acqua presenta una geometria quadrata planare simmetrica"
    ],
    spiegazione: "Secondo la teoria VSEPR, i doppietti solitari (lone pairs) sono trattenuti da un solo nucleo e occupano un volume angolare maggiore rispetto ai doppietti di legame condivisi tra due nuclei. La repulsione tra lone pairs comprime l'angolo tra i legami $\\text{O}-\\text{H}$, riducendolo da $109{,}5^\\circ$ a circa $104{,}5^\\circ$.",
    fonte: "Lotto S4 del progetto — S4-32 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 593,
    materia: "Scienze",
    domanda: "Sia il tetracloruro di carbonio ($\\text{CCl}_4$) sia l'anidride carbonica ($\\text{CO}_2$) contengono legami covalenti fortemente polari. Perché entrambe le molecole risultano globalmente apolari (momento di dipolo netto nullo, $\\mu = 0$)?",
    rispostaCorretta: "Perché l'elevata simmetria geometrica delle molecole fa sì che la somma vettoriale dei singoli momenti di dipolo di legame sia esattamente nulla",
    risposteErrate: [
      "Perché il carbonio annulla l'elettronegatività degli altri atomi quando forma 4 legami",
      "Perché i legami $\\text{C}-\\text{Cl}$ e $\\text{C}=\\text{O}$ diventano istantaneamente omopolari allo stato gassoso",
      "Perché le molecole ruotano così rapidamente da impedire qualsiasi interazione elettrostatica",
      "Perché la differenza di elettronegatività tra carbonio, cloro e ossigeno è rigorosamente pari a zero"
    ],
    spiegazione: "La polarità complessiva di una molecola dipende dalla somma vettoriale dei singoli momenti di dipolo di legame. Nella molecola lineare $\\text{CO}_2$ i due vettori uguali e opposti si annullano ($\\vec{\\mu}_1 + \\vec{\\mu}_2 = \\vec{0}$); nel $\\text{CCl}_4$, la perfetta simmetria tetraedrica annulla la risultante dei 4 dipoli di legame, rendendo entrambe le molecole apolari.",
    fonte: "Lotto S4 del progetto — S4-33 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 594,
    materia: "Scienze",
    domanda: "Quale tra le seguenti sostanze liquide presenta un punto di ebollizione notevolmente più elevato rispetto ad altre molecole di massa molecolare analoga, grazie alla presenza di estesi legami a idrogeno intermolecolari?",
    rispostaCorretta: "Acqua ($\\text{H}_2\\text{O}$)",
    risposteErrate: [
      "Metano ($\\text{CH}_4$)",
      "Solfuro di idrogeno ($\\text{H}_2\\text{S}$)",
      "Idruro di silicio ($\\text{SiH}_4$)",
      "Clorometano ($\\text{CH}_3\\text{Cl}$)"
    ],
    spiegazione: "Il legame a idrogeno è una forza intermolecolare particolarmente intensa che si forma quando l'idrogeno è legato covalentemente a un atomo piccolo e fortemente elettronegativo ($\\text{F}, \\text{O}, \\text{N}$) dotato di lone pairs. Nell'acqua ($\\text{H}_2\\text{O}$), ciascuna molecola può formare fino a 4 legami a idrogeno, conferendo all'acqua un punto di ebollizione straordinariamente alto ($100^\\circ\\text{C}$) rispetto ad analoghi più pesanti come $\\text{H}_2\\text{S}$ (ebollizione a $-60^\\circ\\text{C}$).",
    fonte: "Lotto S4 del progetto — S4-34 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 595,
    materia: "Scienze",
    domanda: "Si consideri la molecola di biossido di zolfo ($\\text{SO}_2$). Sapendo che lo zolfo ($Z = 16$) e l'ossigeno ($Z = 8$) appartengono entrambi al gruppo 16, quanti elettroni di valenza totali possiede la molecola, quale geometria molecolare presenta secondo la teoria VSEPR e qual è il suo comportamento rispetto alla polarità?",
    rispostaCorretta: "$18\\text{ elettroni di valenza}$, geometria piegata (angolare con angolo $< 120^\\circ$) e molecola polare ($\\mu \\ne 0$)",
    risposteErrate: [
      "$16\\text{ elettroni di valenza}$, geometria lineare ($180^\\circ$) e molecola apolare ($\\mu = 0$)",
      "$18\\text{ elettroni di valenza}$, geometria lineare ($180^\\circ$) e molecola apolare ($\\mu = 0$)",
      "$18\\text{ elettroni di valenza}$, geometria trigonale planare ($120^\\circ$) e molecola apolare ($\\mu = 0$)",
      "$18\\text{ elettroni di valenza}$, geometria piegata (angolare con angolo $< 120^\\circ$) e molecola apolare ($\\mu = 0$)"
    ],
    spiegazione: "1) Conteggio elettroni di valenza: lo zolfo ha 6 elettroni e ciascun ossigeno ha 6 elettroni $\\implies 6 + 2 \\times 6 = 18\\text{ elettroni di valenza}$ (9 coppie). 2) Struttura di Lewis e VSEPR: lo zolfo centrale è legato ai due ossigeni e possiede 1 doppietto solitario (lone pair), corrispondente a 3 domini elettronici (geometria elettronica trigonale planare). La presenza del lone pair conferisce alla molecola una geometria molecolare piegata (angolare) con angolo $\\text{O}-\\text{S}-\\text{O} < 120^\\circ$ (circa $119^\\circ$). 3) Polarità: a causa della geometria asimmetrica piegata, i dipoli dei legami $\\text{S}-\\text{O}$ non si elidono vettorialmente, rendendo $\\text{SO}_2$ una molecola polare ($\\mu \\ne 0$).",
    fonte: "Lotto S4 del progetto — S4-35 (Struttura atomica, sistema periodico e legami chimici)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 596,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "In un recipiente chiuso e a tenuta stagna avvengono la combustione e la completa trasformazione di $12{,}0\\text{ g}$ di carbonio puro con $32{,}0\\text{ g}$ di ossigeno gassoso, secondo la reazione $\\text{C} + \\text{O}_2 \\to \\text{CO}_2$. In base alla legge di conservazione della massa di Lavoisier, quale massa complessiva di biossido di carbonio si ottiene al termine del processo?",
    rispostaCorretta: "$44{,}0\\text{ g}$",
    risposteErrate: [
      "$20{,}0\\text{ g}$",
      "$24{,}0\\text{ g}$",
      "$32{,}0\\text{ g}$",
      "$56{,}0\\text{ g}$"
    ],
    spiegazione: "In base alla legge di conservazione della massa (Lavoisier), in un sistema chiuso la massa totale dei prodotti deve essere esattamente uguale alla massa totale dei reagenti consumati: $m_{\\text{totale}} = m_{\\text{C}} + m_{\\text{O}_2} = 12{,}0\\text{ g} + 32{,}0\\text{ g} = 44{,}0\\text{ g}$ di $\\text{CO}_2$.",
    fonte: "Lotto S5 del progetto — S5-01 (Reazioni chimiche e bilanciamento (Lavoisier))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 597,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Si consideri la reazione di combustione completa del propano: $a\\,\\text{C}_3\\text{H}_8 + b\\,\\text{O}_2 \\to c\\,\\text{CO}_2 + d\\,\\text{H}_2\\text{O}$. Qual è il valore del coefficiente stechiometrico $b$ relativo all’ossigeno quando l’equazione è bilanciata con i minimi coefficienti interi?",
    rispostaCorretta: "$5$",
    risposteErrate: [
      "$3$",
      "$4$",
      "$7$",
      "$10$"
    ],
    spiegazione: "Bilanciando gli atomi: per $3$ atomi di C nei reagenti occorrono $3\\,\\text{CO}_2$ ($c = 3$); per $8$ atomi di H occorrono $4\\,\\text{H}_2\\text{O}$ ($d = 4$). A destra si hanno complessivamente $(3 \\times 2) + (4 \\times 1) = 6 + 4 = 10$ atomi di ossigeno, che richiedono $b = 10 / 2 = 5$ molecole di $\\text{O}_2$. L’equazione bilanciata è $\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\to 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$.",
    fonte: "Lotto S5 del progetto — S5-02 (Reazioni chimiche e bilanciamento (combustione propano))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 598,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Si consideri la reazione chimica non bilanciata: $\\text{Al} + \\text{H}_2\\text{SO}_4 \\to \\text{Al}_2(\\text{SO}_4)_3 + \\text{H}_2$. Qual è la somma di tutti i coefficienti stechiometrici interi minimi dell’equazione chimica bilanciata?",
    rispostaCorretta: "$9$",
    risposteErrate: [
      "$7$",
      "$8$",
      "$10$",
      "$11$"
    ],
    spiegazione: "Bilanciando la reazione: $2\\,\\text{Al} + 3\\,\\text{H}_2\\text{SO}_4 \\to 1\\,\\text{Al}_2(\\text{SO}_4)_3 + 3\\,\\text{H}_2$. La somma di tutti i coefficienti stechiometrici interi minimi è pari a $2 + 3 + 1 + 3 = 9$.",
    fonte: "Lotto S5 del progetto — S5-03 (Reazioni chimiche e bilanciamento (somma coefficienti minimi))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 599,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Mescolando due soluzioni acquose limpide di cloruro di bario ($\\text{BaCl}_2$) e di solfato di sodio ($\\text{Na}_2\\text{SO}_4$), si osserva l’immediata formazione di un solido bianco insolubile (precipitato) di solfato di bario: $\\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)} + 2\\,\\text{NaCl}\\text{(aq)}$. A quale tipologia appartiene questa trasformazione?",
    rispostaCorretta: "Reazione di doppio scambio (o metatesi) con precipitazione",
    risposteErrate: [
      "Reazione di sintesi diretta",
      "Reazione di decomposizione termica",
      "Reazione di scambio semplice (o spostamento)",
      "Reazione di combustione redox"
    ],
    spiegazione: "Una reazione di doppio scambio (metatesi) avviene quando due composti ionici in soluzione si scambiano i rispettivi partner ionici ($\text{Ba}^{2+}$ si unisce a $\text{SO}_4^{2-}$ e $\text{Na}^+$ a $\text{Cl}^-$), portando alla formazione di un sale insolubile che precipita.",
    fonte: "Lotto S5 del progetto — S5-04 (Reazioni chimiche e bilanciamento (doppio scambio e precipitazione))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 600,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Qual è il numero di ossidazione dell’atomo di manganese nel composto permanganato di potassio ($\\text{KMnO}_4$)?",
    rispostaCorretta: "$+7$",
    risposteErrate: [
      "$+2$",
      "$+4$",
      "$+5$",
      "$+6$"
    ],
    spiegazione: "Nel composto neutro $\\text{KMnO}_4$, il potassio ha numero di ossidazione $+1$ e ciascun ossigeno ha $-2$. Ponendo la somma algebrica pari a zero: $(+1) + x + 4(-2) = 0 \\implies 1 + x - 8 = 0 \\implies x - 7 = 0 \\implies x = +7$.",
    fonte: "Lotto S5 del progetto — S5-05 (Reazioni chimiche e bilanciamento (numero ossidazione manganese))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 601,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Nella reazione di ossidoriduzione $\\text{Zn}\\text{(s)} + 2\\,\\text{HCl}\\text{(aq)} \\to \\text{ZnCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$, quale specie chimica subisce il processo di ossidazione comportandosi da agente riducente?",
    rispostaCorretta: "Lo zinco metallico ($\\text{Zn}$), il cui numero di ossidazione passa da $0$ a $+2$",
    risposteErrate: [
      "Lo ione idrogeno ($\\text{H}^+$), il cui numero di ossidazione passa da $+1$ a $0$",
      "Lo ione cloruro ($\\text{Cl}^-$), il cui numero di ossidazione passa da $-1$ a $0$",
      "L’idrogeno molecolare ($\\text{H}_2$), il cui numero di ossidazione passa da $0$ a $+1$",
      "Lo ione zinco ($\\text{Zn}^{2+}$), che acquista due elettroni dal cloro"
    ],
    spiegazione: "L’ossidazione consiste nella perdita di elettroni con aumento del numero di ossidazione. Lo zinco metallico passa da stato di ossidazione $0$ a $+2$ in $\\text{ZnCl}_2$, perdendo $2$ elettroni e fungendo quindi da agente riducente.",
    fonte: "Lotto S5 del progetto — S5-06 (Reazioni chimiche e bilanciamento (ossidazione e agente riducente))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 602,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Facendo reagire una soluzione acquosa di acido cloridrico ($\\text{HCl}$) con una soluzione di idrossido di sodio ($\\text{NaOH}$), quali specie svolgono esclusivamente il ruolo di «ioni spettatori» nell’equazione ionica netta?",
    rispostaCorretta: "$\\text{Na}^+$ e $\\text{Cl}^-$",
    risposteErrate: [
      "$\\text{H}^+$ e $\\text{OH}^-$",
      "$\\text{H}^+$ e $\\text{Cl}^-$",
      "$\\text{Na}^+$ e $\\text{OH}^-$",
      "Esclusivamente $\\text{H}_2\\text{O}$"
    ],
    spiegazione: "L’equazione ionica completa è $\\text{H}^+ + \\text{Cl}^- + \\text{Na}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O} + \\text{Na}^+ + \\text{Cl}^-$. Gli ioni $\\text{Na}^+$ e $\\text{Cl}^-$ rimangono invariati e dissociati in soluzione prima e dopo la reazione, costituendo gli ioni spettatori, mentre la reazione netta è $\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$.",
    fonte: "Lotto S5 del progetto — S5-07 (Reazioni chimiche e bilanciamento (ioni spettatori))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 603,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Qual è il numero di ossidazione del cromo nello ione poliatomico dicromato ($\\text{Cr}_2\\text{O}_7^{2-}$)?",
    rispostaCorretta: "$+6$",
    risposteErrate: [
      "$+3$",
      "$+4$",
      "$+5$",
      "$+7$"
    ],
    spiegazione: "Nello ione $\\text{Cr}_2\\text{O}_7^{2-}$, la somma algebrica dei numeri di ossidazione deve essere pari alla carica complessiva dello ione ($-2$). Sapendo che ciascun atomo di ossigeno ha numero di ossidazione $-2$: $2x + 7(-2) = -2 \\implies 2x - 14 = -2 \\implies 2x = +12 \\implies x = +6$.",
    fonte: "Lotto S5 del progetto — S5-08 (Reazioni chimiche e bilanciamento (numero ossidazione cromo in dicromato))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 604,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Nel Sistema Internazionale, che cosa rappresenta una «mole» di una determinata sostanza chimica?",
    rispostaCorretta: "La quantità di sostanza che contiene esattamente un numero di entità elementari pari alla costante di Avogadro ($N_A \\approx 6{,}022 \\times 10^{23}$)",
    risposteErrate: [
      "La massa in grammi di esattamente $1\\text{ litro}$ di gas a temperatura ambiente",
      "Il volume occupato da $1\\text{ grammo}$ di idrogeno gassoso a $0^\\circ\\text{C}$",
      "Il numero totale di elettroni presenti in un chilogrammo di sostanza pura",
      "La quantità di materia avente un volume pari a $22{,}4\\text{ dm}^3$ a qualsiasi pressione"
    ],
    spiegazione: "La mole è l’unità di misura della quantità di sostanza nel SI ed è definita come la quantità di materia che contiene esattamente $6{,}02214076 \\times 10^{23}$ entità elementari (atomi, molecole, ioni o altre particelle designate).",
    fonte: "Lotto S5 del progetto — S5-09 (Mole, costante di Avogadro e massa molare (definizione mole))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 605,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Sapendo che le masse atomiche relative sono $\\text{C} = 12{,}0\\text{ u}$, $\\text{H} = 1{,}0\\text{ u}$ e $\\text{O} = 16{,}0\\text{ u}$, qual è la massa molare del glucosio ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)?",
    rispostaCorretta: "$180{,}0\\text{ g/mol}$",
    risposteErrate: [
      "$90{,}0\\text{ g/mol}$",
      "$150{,}0\\text{ g/mol}$",
      "$216{,}0\\text{ g/mol}$",
      "$360{,}0\\text{ g/mol}$"
    ],
    spiegazione: "La massa molare del glucosio $\\text{C}_6\\text{H}_{12}\\text{O}_6$ si calcola sommando le masse molari dei singoli atomi: $M = (6 \\times 12{,}0) + (12 \\times 1{,}0) + (6 \\times 16{,}0) = 72{,}0 + 12{,}0 + 96{,}0 = 180{,}0\\text{ g/mol}$.",
    fonte: "Lotto S5 del progetto — S5-10 (Mole, costante di Avogadro e massa molare (massa molare glucosio))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 606,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Un campione di glucosio puro ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, massa molare $M = 180{,}0\\text{ g/mol}$) ha una massa pari a $45{,}0\\text{ g}$. A quante moli di glucosio corrisponde tale quantità?",
    rispostaCorretta: "$0{,}250\\text{ mol}$",
    risposteErrate: [
      "$0{,}125\\text{ mol}$",
      "$0{,}500\\text{ mol}$",
      "$2{,}00\\text{ mol}$",
      "$4{,}00\\text{ mol}$"
    ],
    spiegazione: "Il numero di moli $n$ è dato dal rapporto tra la massa del campione in grammi e la massa molare del composto: $n = \\frac{m}{M} = \\frac{45{,}0\\text{ g}}{180{,}0\\text{ g/mol}} = 0{,}250\\text{ mol}$.",
    fonte: "Lotto S5 del progetto — S5-11 (Mole, costante di Avogadro e massa molare (calcolo moli da massa))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 607,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Un campione d’acqua distillata contiene esattamente $0{,}50\\text{ mol}$ di molecole di $\\text{H}_2\\text{O}$. Assumendo per la costante di Avogadro il valore $N_A = 6{,}0 \\times 10^{23}\\text{ mol}^{-1}$, qual è il numero complessivo di atomi di idrogeno presenti nel campione?",
    rispostaCorretta: "$6{,}0 \\times 10^{23}\\text{ atomi}$",
    risposteErrate: [
      "$3{,}0 \\times 10^{23}\\text{ atomi}$",
      "$9{,}0 \\times 10^{23}\\text{ atomi}$",
      "$1{,}2 \\times 10^{24}\\text{ atomi}$",
      "$1{,}5 \\times 10^{23}\\text{ atomi}$"
    ],
    spiegazione: "In $0{,}50\\text{ mol}$ di molecole d’acqua ci sono $0{,}50 \\times N_A = 0{,}50 \\times 6{,}0 \\times 10^{23} = 3{,}0 \\times 10^{23}$ molecole di $\\text{H}_2\\text{O}$. Poiché ciascuna molecola contiene $2$ atomi di idrogeno, il numero complessivo di atomi di H è pari a $2 \\times 3{,}0 \\times 10^{23} = 6{,}0 \\times 10^{23}$ atomi.",
    fonte: "Lotto S5 del progetto — S5-12 (Mole, costante di Avogadro e massa molare (numero atomi idrogeno))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 608,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Sapendo che le masse atomiche relative sono $\\text{C} = 12{,}0\\text{ u}$ e $\\text{O} = 16{,}0\\text{ u}$, qual è la percentuale in massa di carbonio presente nell’anidride carbonica (biossido di carbonio, $\\text{CO}_2$, massa molare $44{,}0\\text{ g/mol}$)?",
    rispostaCorretta: "Circa il $27{,}3\\%$",
    risposteErrate: [
      "Circa il $12{,}0\\%$",
      "Circa il $33{,}3\\%$",
      "Circa il $50{,}0\\%$",
      "Circa il $72{,}7\\%$"
    ],
    spiegazione: "La percentuale in massa del carbonio in $\\text{CO}_2$ è data dal rapporto tra la massa di carbonio e la massa molare complessiva: $\\%\\text{C} = \\frac{12{,}0\\text{ g/mol}}{44{,}0\\text{ g/mol}} \\times 100\\% \\approx 27{,}27\\% \\approx 27{,}3\\%$.",
    fonte: "Lotto S5 del progetto — S5-13 (Mole, costante di Avogadro e massa molare (percentuale in massa carbonio))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 609,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Assumendo per i gas ideali le condizioni standard tradizionali ($0^\\circ\\text{C}$ e $1\\text{ atm}$) con volume molare $V_m = 22{,}4\\text{ L/mol}$, quale volume occupano $2{,}5\\text{ moli}$ di ossigeno gassoso ($\\text{O}_2$)?",
    rispostaCorretta: "$56{,}0\\text{ L}$",
    risposteErrate: [
      "$22{,}4\\text{ L}$",
      "$44{,}8\\text{ L}$",
      "$67{,}2\\text{ L}$",
      "$112{,}0\\text{ L}$"
    ],
    spiegazione: "Il volume di un gas ideale alle condizioni standard fissate ($V_m = 22{,}4\\text{ L/mol}$) è dato dal prodotto tra il numero di moli e il volume molare: $V = n \\times V_m = 2{,}5\\text{ mol} \\times 22{,}4\\text{ L/mol} = 56{,}0\\text{ L}$.",
    fonte: "Lotto S5 del progetto — S5-14 (Mole, costante di Avogadro e massa molare (volume molare STP))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 610,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Si consideri la reazione di sintesi dell’ammoniaca: $\\text{N}_2\\text{(g)} + 3\\,\\text{H}_2\\text{(g)} \\to 2\\,\\text{NH}_3\\text{(g)}$. Facendo reagire completamente $6{,}0\\text{ moli}$ di idrogeno molecolare ($\\text{H}_2$) con una quantità in eccesso di azoto, quante moli di ammoniaca ($\\text{NH}_3$) si formano?",
    rispostaCorretta: "$4{,}0\\text{ moli}$",
    risposteErrate: [
      "$2{,}0\\text{ moli}$",
      "$3{,}0\\text{ moli}$",
      "$6{,}0\\text{ moli}$",
      "$9{,}0\\text{ moli}$"
    ],
    spiegazione: "Dal rapporto stechiometrico dell’equazione bilanciata, $3\\text{ moli}$ di $\\text{H}_2$ producono $2\\text{ moli}$ di $\\text{NH}_3$. Pertanto, $n_{\\text{NH}_3} = 6{,}0\\text{ mol }\\text{H}_2 \\times \\frac{2\\text{ mol }\\text{NH}_3}{3\\text{ mol }\\text{H}_2} = 4{,}0\\text{ moli di }\\text{NH}_3$.",
    fonte: "Lotto S5 del progetto — S5-15 (Stechiometria, reagente limitante e resa (rapporto molare sintesi NH3))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 611,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "La decomposizione termica del carbonato di calcio avviene secondo la reazione: $\\text{CaCO}_3\\text{(s)} \\to \\text{CaO}\\text{(s)} + \\text{CO}_2\\text{(g)}$. Sapendo che le masse molari sono $\\text{CaCO}_3 = 100{,}0\\text{ g/mol}$ e $\\text{CaO} = 56{,}0\\text{ g/mol}$, quale massa di ossido di calcio ($\\text{CaO}$) si ottiene dalla decomposizione completa di $250{,}0\\text{ g}$ di carbonato di calcio puro?",
    rispostaCorretta: "$140{,}0\\text{ g}$",
    risposteErrate: [
      "$56{,}0\\text{ g}$",
      "$112{,}0\\text{ g}$",
      "$194{,}0\\text{ g}$",
      "$224{,}0\\text{ g}$"
    ],
    spiegazione: "Moli di $\\text{CaCO}_3$: $n = \\frac{250{,}0\\text{ g}}{100{,}0\\text{ g/mol}} = 2{,}50\\text{ mol}$. Poiché il rapporto stechiometrico con $\\text{CaO}$ è $1:1$, si formano $2{,}50\\text{ mol}$ di $\\text{CaO}$. La massa ottenuta è $m = n \\times M = 2{,}50\\text{ mol} \\times 56{,}0\\text{ g/mol} = 140{,}0\\text{ g}$.",
    fonte: "Lotto S5 del progetto — S5-16 (Stechiometria, reagente limitante e resa (calcolo massa CaO da CaCO3))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 612,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Si consideri la reazione di formazione dell’acqua: $2\\,\\text{H}_2 + \\text{O}_2 \\to 2\\,\\text{H}_2\\text{O}$. Se in un reattore vengono introdotte $6{,}0\\text{ moli}$ di $\\text{H}_2$ e $4{,}0\\text{ moli}$ di $\\text{O}_2$, quale delle due specie agisce come «reagente limitante»?",
    rispostaCorretta: "L’idrogeno ($\\text{H}_2$), perché per reagire completamente richiederebbe solo $3{,}0\\text{ moli}$ di $\\text{O}_2$, che è presente in eccesso",
    risposteErrate: [
      "L’ossigeno ($\\text{O}_2$), perché è presente in minor numero di moli iniziali ($4{,}0\\text{ mol}$ contro $6{,}0\\text{ mol}$)",
      "Nessuno dei due, perché entrambi i reagenti si consumano esattamente nello stesso istante",
      "L’acqua ($\\text{H}_2\\text{O}$), perché è il prodotto con il coefficiente stechiometrico più alto",
      "L’idrogeno ($\\text{H}_2$), perché la sua massa molare è minore di quella dell’ossigeno"
    ],
    spiegazione: "La reazione richiede un rapporto molare $\\text{H}_2 : \\text{O}_2 = 2 : 1$. Per consumare interamente $6{,}0\\text{ mol}$ di $\\text{H}_2$ occorrono $\\frac{6{,}0}{2} = 3{,}0\\text{ mol}$ di $\\text{O}_2$. Poiché sono disponibili $4{,}0\\text{ mol}$ di $\\text{O}_2$, l’ossigeno è in eccesso e l’idrogeno $\\text{H}_2$ è il reagente limitante che esaurisce la reazione.",
    fonte: "Lotto S5 del progetto — S5-17 (Stechiometria, reagente limitante e resa (individuazione reagente limitante))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 613,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Facendo reagire $6{,}0\\text{ moli}$ di $\\text{H}_2$ con $4{,}0\\text{ moli}$ di $\\text{O}_2$ secondo la reazione $2\\,\\text{H}_2 + \\text{O}_2 \\to 2\\,\\text{H}_2\\text{O}$, quante moli di acqua ($\\text{H}_2\\text{O}$) si formano teoricamente al termine della trasformazione?",
    rispostaCorretta: "$6{,}0\\text{ moli}$",
    risposteErrate: [
      "$4{,}0\\text{ moli}$",
      "$8{,}0\\text{ moli}$",
      "$10{,}0\\text{ moli}$",
      "$12{,}0\\text{ moli}$"
    ],
    spiegazione: "Essendo $\\text{H}_2$ il reagente limitante ($6{,}0\\text{ mol}$), la quantità massima di acqua che si può formare dipende esclusivamente da esso. Poiché il rapporto stechiometrico tra $\\text{H}_2$ e $\\text{H}_2\\text{O}$ è $2 : 2$ (ovvero $1 : 1$), si formano esattamente $6{,}0\\text{ moli}$ di $\\text{H}_2\\text{O}$.",
    fonte: "Lotto S5 del progetto — S5-18 (Stechiometria, reagente limitante e resa (calcolo prodotto da reagente limitante))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 614,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Nella reazione $2\\,\\text{H}_2 + \\text{O}_2 \\to 2\\,\\text{H}_2\\text{O}$, partendo da una miscela iniziale contenente $6{,}0\\text{ moli}$ di $\\text{H}_2$ e $4{,}0\\text{ moli}$ di $\\text{O}_2$, quante moli del reagente in eccesso restano non reagite nel recipiente al termine del processo?",
    rispostaCorretta: "$1{,}0\\text{ mole di }\\text{O}_2$",
    risposteErrate: [
      "$0{,}5\\text{ moli di }\\text{O}_2$",
      "$2{,}0\\text{ moli di }\\text{O}_2$",
      "$1{,}0\\text{ mole di }\\text{H}_2$",
      "$3{,}0\\text{ moli di }\\text{O}_2$"
    ],
    spiegazione: "Il reagente limitante $\\text{H}_2$ ($6{,}0\\text{ mol}$) reagisce consumando $\\frac{6{,}0}{2} = 3{,}0\\text{ mol}$ di $\\text{O}_2$. Le moli iniziali di $\\text{O}_2$ erano $4{,}0\\text{ mol}$, quindi le moli residue non reagite sono $n_{\\text{residue}} = 4{,}0 - 3{,}0 = 1{,}0\\text{ mole di }\\text{O}_2$.",
    fonte: "Lotto S5 del progetto — S5-19 (Stechiometria, reagente limitante e resa (moli residue reagente in eccesso))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 615,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "In una sintesi organica, la resa teorica calcolata in base alla stechiometria della reazione è pari a $80{,}0\\text{ g}$ di prodotto. Al termine della purificazione sperimentale in laboratorio, vengono effettivamente isolati $64{,}0\\text{ g}$ di sostanza pura. Qual è la resa percentuale del processo?",
    rispostaCorretta: "$80{,}0\\%$",
    risposteErrate: [
      "$64{,}0\\%$",
      "$75{,}0\\%$",
      "$85{,}0\\%$",
      "$90{,}0\\%$"
    ],
    spiegazione: "La resa percentuale è definita come il rapporto percentuale tra la resa effettiva sperimentale e la resa teorica stechiometrica: $\\text{Resa }\\% = \\frac{m_{\\text{effettiva}}}{m_{\\text{teorica}}} \\times 100\\% = \\frac{64{,}0\\text{ g}}{80{,}0\\text{ g}} \\times 100\\% = 0{,}800 \\times 100\\% = 80{,}0\\%$.",
    fonte: "Lotto S5 del progetto — S5-20 (Stechiometria, reagente limitante e resa (calcolo resa percentuale))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 616,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Una reazione chimica industriale ha una resa teorica prevista pari a $120{,}0\\text{ kg}$ di prodotto. Sapendo che l’impianto opera con una resa percentuale accertata dell’$85{,}0\\%$, quale massa effettiva di prodotto viene ricavata?",
    rispostaCorretta: "$102{,}0\\text{ kg}$",
    risposteErrate: [
      "$85{,}0\\text{ kg}$",
      "$96{,}0\\text{ kg}$",
      "$108{,}0\\text{ kg}$",
      "$115{,}0\\text{ kg}$"
    ],
    spiegazione: "La massa effettivamente ottenuta è data dal prodotto tra la resa teorica e la frazione di resa: $m_{\\text{effettiva}} = m_{\\text{teorica}} \\times \\frac{\\text{Resa }\\%}{100} = 120{,}0\\text{ kg} \\times 0{,}850 = 102{,}0\\text{ kg}$.",
    fonte: "Lotto S5 del progetto — S5-21 (Stechiometria, reagente limitante e resa (calcolo massa effettiva da resa %))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 617,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "In chimica, che cosa si intende per «soluzione satura» di un solido in un dato solvente liquido a una temperatura fissata?",
    rispostaCorretta: "Una soluzione in cui è disciolta la massima quantità possibile di soluto a quella temperatura, in equilibrio dinamico con l’eventuale corpo di fondo solido",
    risposteErrate: [
      "Una soluzione in cui il soluto ha una concentrazione esattamente pari al $50\\%$ in massa",
      "Una soluzione che non è più in grado di condurre la corrente elettrica",
      "Una miscela eterogenea in cui il solvente è completamente evaporato",
      "Una soluzione in cui il numero di moli di soluto è esattamente uguale al numero di moli di solvente"
    ],
    spiegazione: "Una soluzione si definisce satura quando contiene la massima quantità di soluto che può rimanere stabilmente disciolta in una determinata quantità di solvente a una specifica temperatura; ogni ulteriore aggiunta di soluto si deposita sul fondo come corpo di fondo indisciolto.",
    fonte: "Lotto S5 del progetto — S5-22 (Soluzioni, concentrazione e diluizioni (definizione soluzione satura))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 618,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Vengono disciolti $25{,}0\\text{ g}$ di cloruro di sodio ($\\text{NaCl}$) in $225{,}0\\text{ g}$ di acqua distillata. Qual è la concentrazione percentuale in massa $(\\%\\text{ m/m})$ della soluzione acquosa così ottenuta?",
    rispostaCorretta: "$10{,}0\\%\\text{ m/m}$",
    risposteErrate: [
      "$9{,}0\\%\\text{ m/m}$",
      "$11{,}1\\%\\text{ m/m}$",
      "$12{,}5\\%\\text{ m/m}$",
      "$25{,}0\\%\\text{ m/m}$"
    ],
    spiegazione: "La massa totale della soluzione è data dalla somma della massa del soluto e del solvente: $m_{\\text{soluzione}} = 25{,}0\\text{ g} + 225{,}0\\text{ g} = 250{,}0\\text{ g}$. La concentrazione percentuale in massa è: $\\%\\text{ m/m} = \\frac{m_{\\text{soluto}}}{m_{\\text{soluzione}}} \\times 100\\% = \\frac{25{,}0\\text{ g}}{250{,}0\\text{ g}} \\times 100\\% = 10{,}0\\%$.",
    fonte: "Lotto S5 del progetto — S5-23 (Soluzioni, concentrazione e diluizioni (concentrazione percentuale massa su massa))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 619,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quanti grammi di glucosio puro sono contenuti in $200\\text{ mL}$ di una soluzione acquosa zuccherina avente una concentrazione percentuale massa su volume pari al $5{,}0\\%\\text{ m/V}$?",
    rispostaCorretta: "$10{,}0\\text{ g}$",
    risposteErrate: [
      "$2{,}5\\text{ g}$",
      "$5{,}0\\text{ g}$",
      "$20{,}0\\text{ g}$",
      "$40{,}0\\text{ g}$"
    ],
    spiegazione: "Una concentrazione del $5{,}0\\%\\text{ m/V}$ indica che sono presenti $5{,}0\\text{ g}$ di soluto per ogni $100\\text{ mL}$ di soluzione. In $200\\text{ mL}$ di soluzione la massa di soluto è: $m = 5{,}0\\text{ g} \\times \\frac{200\\text{ mL}}{100\\text{ mL}} = 10{,}0\\text{ g}$.",
    fonte: "Lotto S5 del progetto — S5-24 (Soluzioni, concentrazione e diluizioni (concentrazione percentuale massa su volume))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 620,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Vengono disciolte $0{,}40\\text{ moli}$ di idrossido di potassio ($\\text{KOH}$) in acqua fino a raggiungere un volume complessivo finale di soluzione pari a $800\\text{ mL} = 0{,}80\\text{ L}$. Qual è la concentrazione molare (molarità $M$) della soluzione?",
    rispostaCorretta: "$0{,}50\\text{ M}$ (ossia $0{,}50\\text{ mol/L}$)",
    risposteErrate: [
      "$0{,}20\\text{ M}$",
      "$0{,}32\\text{ M}$",
      "$0{,}40\\text{ M}$",
      "$2{,}00\\text{ M}$"
    ],
    spiegazione: "La concentrazione molare (molarità $M$) è definita come il rapporto tra il numero di moli di soluto e il volume della soluzione espresso in litri: $M = \\frac{n}{V} = \\frac{0{,}40\\text{ mol}}{0{,}80\\text{ L}} = 0{,}50\\text{ mol/L} = 0{,}50\\text{ M}$.",
    fonte: "Lotto S5 del progetto — S5-25 (Soluzioni, concentrazione e diluizioni (calcolo concentrazione molare))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 621,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quale massa di idrossido di sodio ($\\text{NaOH}$, massa molare $M = 40{,}0\\text{ g/mol}$) è necessaria per preparare esattamente $250\\text{ mL} = 0{,}250\\text{ L}$ di una soluzione acquosa a concentrazione $0{,}20\\text{ mol/L}$?",
    rispostaCorretta: "$2{,}00\\text{ g}$",
    risposteErrate: [
      "$1{,}00\\text{ g}$",
      "$4{,}00\\text{ g}$",
      "$8{,}00\\text{ g}$",
      "$10{,}00\\text{ g}$"
    ],
    spiegazione: "Moli di $\\text{NaOH}$ necessarie: $n = M \\times V = 0{,}20\\text{ mol/L} \\times 0{,}250\\text{ L} = 0{,}050\\text{ mol}$. La massa in grammi richiesta è: $m = n \\times M = 0{,}050\\text{ mol} \\times 40{,}0\\text{ g/mol} = 2{,}00\\text{ g}$.",
    fonte: "Lotto S5 del progetto — S5-26 (Soluzioni, concentrazione e diluizioni (massa soluto per molarità data))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 622,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quale volume di una soluzione concentrata di acido cloridrico $2{,}0\\text{ M}$ deve essere prelevato e diluito con acqua distillata per preparare $500\\text{ mL}$ di una soluzione diluita a concentrazione $0{,}10\\text{ M}$?",
    rispostaCorretta: "$25\\text{ mL}$",
    risposteErrate: [
      "$10\\text{ mL}$",
      "$50\\text{ mL}$",
      "$100\\text{ mL}$",
      "$250\\text{ mL}$"
    ],
    spiegazione: "Applicando l’equazione fondamentale delle diluizioni $M_1 V_1 = M_2 V_2$: $V_1 = \\frac{M_2 V_2}{M_1} = \\frac{0{,}10\\text{ M} \\times 500\\text{ mL}}{2{,}0\\text{ M}} = \\frac{50}{2{,}0} = 25\\text{ mL}$.",
    fonte: "Lotto S5 del progetto — S5-27 (Soluzioni, concentrazione e diluizioni (formula delle diluizioni))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 623,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "A $100\\text{ mL}$ di una soluzione acquosa di glucosio a concentrazione $0{,}60\\text{ M}$ vengono aggiunti $200\\text{ mL}$ di acqua distillata (assumendo i volumi perfettamente additivi per un volume totale di $300\\text{ mL}$). Qual è la molarità della soluzione diluita finale?",
    rispostaCorretta: "$0{,}20\\text{ M}$",
    risposteErrate: [
      "$0{,}15\\text{ M}$",
      "$0{,}30\\text{ M}$",
      "$0{,}40\\text{ M}$",
      "$0{,}50\\text{ M}$"
    ],
    spiegazione: "Le moli di soluto rimangono costanti durante la diluizione: $n = M_1 V_1 = 0{,}60\\text{ M} \\times 0{,}100\\text{ L} = 0{,}060\\text{ mol}$. Il volume totale finale è $V_2 = 100\\text{ mL} + 200\\text{ mL} = 300\\text{ mL} = 0{,}300\\text{ L}$. La concentrazione finale è $M_2 = \\frac{n}{V_2} = \\frac{0{,}060\\text{ mol}}{0{,}300\\text{ L}} = 0{,}20\\text{ M}$.",
    fonte: "Lotto S5 del progetto — S5-28 (Soluzioni, concentrazione e diluizioni (molarità finale post-diluizione))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 624,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quale tra le seguenti sostanze, una volta disciolta in acqua, si comporta come un «non elettrolita», ovvero non produce ioni e non rende la soluzione conduttrice di elettricità?",
    rispostaCorretta: "Saccarosio (zucchero da tavola, $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$)",
    risposteErrate: [
      "Cloruro di sodio ($\\text{NaCl}$)",
      "Acido cloridrico ($\\text{HCl}$)",
      "Idrossido di potassio ($\\text{KOH}$)",
      "Solfato di magnesio ($\\text{MgSO}_4$)"
    ],
    spiegazione: "Il saccarosio è un composto molecolare a legami covalenti che in acqua si scioglie mantenendo integre le singole molecole neutre senza dissociarsi o ionizzarsi in ioni; perciò non conduce la corrente elettrica ed è un non elettrolita.",
    fonte: "Lotto S5 del progetto — S5-29 (Elettroliti e dissociazione ionica (non elettroliti molecolari))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 625,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Una soluzione acquosa contiene cloruro di calcio ($\\text{CaCl}_2$, elettrolita forte che si dissocia completamente secondo $\\text{CaCl}_2\\text{(aq)} \\to \\text{Ca}^{2+}\\text{(aq)} + 2\\,\\text{Cl}^-\\text{(aq)}$) a concentrazione $0{,}15\\text{ mol/L}$. Qual è la concentrazione molare complessiva di tutti gli ioni presenti in soluzione?",
    rispostaCorretta: "$0{,}45\\text{ mol/L}$",
    risposteErrate: [
      "$0{,}15\\text{ mol/L}$",
      "$0{,}30\\text{ mol/L}$",
      "$0{,}60\\text{ mol/L}$",
      "$0{,}75\\text{ mol/L}$"
    ],
    spiegazione: "Per ogni mole di $\\text{CaCl}_2$ dissociata si formano $1\\text{ mole}$ di ioni $\\text{Ca}^{2+}$ e $2\\text{ moli}$ di ioni $\\text{Cl}^-$, per un totale di $3\\text{ moli}$ di ioni. Pertanto, la concentrazione ionica totale è pari a $3 \\times 0{,}15\\text{ mol/L} = 0{,}45\\text{ mol/L}$ ($[\\text{Ca}^{2+}] = 0{,}15\\text{ M}$ e $[\\text{Cl}^-] = 0{,}30\\text{ M}$).",
    fonte: "Lotto S5 del progetto — S5-30 (Elettroliti e dissociazione ionica (concentrazione ionica totale CaCl2))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 626,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Assumendo un modello di dissociazione ionica completa e ideale in soluzione acquosa secondo la reazione $\\text{Al}_2(\\text{SO}_4)_3\\text{(s)} \\to 2\\,\\text{Al}^{3+}\\text{(aq)} + 3\\,\\text{SO}_4^{2-}\\text{(aq)}$, qual è il valore del coefficiente di van ’t Hoff teorico ($i$) per il solfato di alluminio?",
    rispostaCorretta: "$i = 5$",
    risposteErrate: [
      "$i = 2$",
      "$i = 3$",
      "$i = 4$",
      "$i = 6$"
    ],
    spiegazione: "In base al modello di dissociazione completa e ideale, da ciascuna unità formula di $\\text{Al}_2(\\text{SO}_4)_3$ si liberano $2$ cationi $\\text{Al}^{3+}$ e $3$ anioni $\\text{SO}_4^{2-}$. Il numero totale di particelle ioniche prodotte per unità formula è pertanto pari a $i = 2 + 3 = 5$.",
    fonte: "Lotto S5 del progetto — S5-31 (Elettroliti e dissociazione ionica (coefficiente di van ’t Hoff teorico))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 627,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "A parità di concentrazione molare iniziale ($0{,}10\\text{ M}$ a $25^\\circ\\text{C}$), quale delle seguenti soluzioni acquose presenterà una conducibilità elettrica marcatamente inferiore rispetto alle altre?",
    rispostaCorretta: "Acido acetico ($\\text{CH}_3\\text{COOH}$)",
    risposteErrate: [
      "Acido cloridrico ($\\text{HCl}$)",
      "Idrossido di sodio ($\\text{NaOH}$)",
      "Nitrato di potassio ($\\text{KNO}_3$)",
      "Cloruro di bario ($\\text{BaCl}_2$)"
    ],
    spiegazione: "L’acido acetico è un acido debole (elettrolita debole) che in acqua si ionizza solo parzialmente (meno dell’$1\\text{--}2\\%$ a $0{,}10\\text{ M}$), lasciando la maggior parte delle molecole indissociate. Le altre sostanze sono elettroliti forti completamente dissociati, con concentrazione ionica e conducibilità enormemente maggiori.",
    fonte: "Lotto S5 del progetto — S5-32 (Elettroliti e dissociazione ionica (conducibilità elettrolita debole))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 628,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Secondo la teoria acido-base formulata da Brønsted e Lowry, una sostanza si comporta come una «base» se e solo se:",
    rispostaCorretta: "È in grado di accettare uno ione idrogeno (protone, $\\text{H}^+$) da un’altra specie chimica",
    risposteErrate: [
      "In soluzione acquosa libera esclusivamente ioni ossidrile $\\text{OH}^-$ dissociandosi",
      "È in grado di donare un doppietto elettronico per formare un legame covalente dativo",
      "Contiene obbligatoriamente un atomo di metallo alcalino nella propria formula",
      "È in grado di cedere uno ione idrogeno (protone, $\\text{H}^+$) all’ambiente circostante"
    ],
    spiegazione: "Secondo la teoria di Brønsted-Lowry, un acido è una specie capace di donare un protone ($\text{H}^+$), mentre una base è una specie capace di accettare un protone ($\text{H}^+$).",
    fonte: "Lotto S5 del progetto — S5-33 (Acidi, basi, pH, pOH e neutralizzazione (definizione base Brønsted-Lowry))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 629,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "In chimica, lo ione idrogenocarbonato ($\\text{HCO}_3^-$) e l’acqua ($\\text{H}_2\\text{O}$) sono classificati come specie «anfotere» (o anfiprotiche). Che cosa significa questa proprietà?",
    rispostaCorretta: "Che possono comportarsi sia da acido (donando un protone) sia da base (accettando un protone) a seconda del partner di reazione",
    risposteErrate: [
      "Che hanno una solubilità infinita in qualsiasi solvente polare e apolare",
      "Che si dissociano completamente in ioni solo a temperature superiori a $100^\\circ\\text{C}$",
      "Che non possono partecipare ad alcuna reazione di trasferimento protonico",
      "Che formano soluzioni aventi sempre e rigorosamente un $\\text{pH} = 7{,}0$"
    ],
    spiegazione: "Una specie è anfotera (o anfiprotica) se è in grado sia di donare un protone (agendo da acido di Brønsted, es. $\text{HCO}_3^- \to \text{H}^+ + \text{CO}_3^{2-}$) sia di accettare un protone (agendo da base di Brønsted, es. $\text{HCO}_3^- + \text{H}^+ \to \text{H}_2\text{CO}_3$).",
    fonte: "Lotto S5 del progetto — S5-34 (Acidi, basi, pH, pOH e neutralizzazione (specie anfotere anfiprotiche))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 630,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "A $25^\\circ\\text{C}$, il prodotto ionico dell’acqua vale $K_w = [\\text{H}^+][\\text{OH}^-] = 1{,}0 \\times 10^{-14}$. Se in una soluzione acquosa la concentrazione degli ioni idrogeno è pari a $[\\text{H}^+] = 1{,}0 \\times 10^{-4}\\text{ mol/L}$, qual è la concentrazione degli ioni ossidrile $[\\text{OH}^-]$?",
    rispostaCorretta: "$1{,}0 \\times 10^{-10}\\text{ mol/L}$",
    risposteErrate: [
      "$1{,}0 \\times 10^{-4}\\text{ mol/L}$",
      "$1{,}0 \\times 10^{-7}\\text{ mol/L}$",
      "$1{,}0 \\times 10^{-14}\\text{ mol/L}$",
      "$1{,}0 \\times 10^{-18}\\text{ mol/L}$"
    ],
    spiegazione: "Dal prodotto ionico dell’acqua $K_w = [\\text{H}^+][\\text{OH}^-] = 1{,}0 \\times 10^{-14}$: $[\\text{OH}^-] = \\frac{K_w}{[\\text{H}^+]} = \\frac{1{,}0 \\times 10^{-14}}{1{,}0 \\times 10^{-4}} = 1{,}0 \\times 10^{-10}\\text{ mol/L}$.",
    fonte: "Lotto S5 del progetto — S5-35 (Acidi, basi, pH, pOH e neutralizzazione (calcolo [OH-] da Kw a 25°C))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 631,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Come è definita matematicamente la scala di acidità del $\\text{pH}$ per una soluzione acquosa diluita?",
    rispostaCorretta: "$\\text{pH} = -\\log_{10}[\\text{H}^+]$",
    risposteErrate: [
      "$\\text{pH} = \\log_{10}[\\text{H}^+]$",
      "$\\text{pH} = -\\ln[\\text{OH}^-]$",
      "$\\text{pH} = \\frac{1}{[\\text{H}^+]}$",
      "$\\text{pH} = 10^{-[\\text{H}^+]}$"
    ],
    spiegazione: "Il $\\text{pH}$ (introdotto da Sørensen) è definito come il logaritmo decimale negativo della concentrazione molare (più rigorosamente attività) degli ioni idrogeno $\\text{H}^+$ (o idronio $\\text{H}_3\\text{O}^+$): $\\text{pH} = -\\log_{10}[\\text{H}^+]$.",
    fonte: "Lotto S5 del progetto — S5-36 (Acidi, basi, pH, pOH e neutralizzazione (definizione matematica del pH))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 632,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Qual è il $\\text{pH}$ di una soluzione acquosa di acido nitrico ($\\text{HNO}_3$, acido forte monoprotico completamente dissociato) a concentrazione $0{,}0010\\text{ mol/L}$ ($1{,}0 \\times 10^{-3}\\text{ M}$)?",
    rispostaCorretta: "$\\text{pH} = 3{,}0$",
    risposteErrate: [
      "$\\text{pH} = 1{,}0$",
      "$\\text{pH} = 2{,}0$",
      "$\\text{pH} = 4{,}0$",
      "$\\text{pH} = 11{,}0$"
    ],
    spiegazione: "Essendo $\\text{HNO}_3$ un acido forte monoprotico a dissociazione totale: $[\\text{H}^+] = C_a = 1{,}0 \\times 10^{-3}\\text{ M}$. Il $\\text{pH}$ vale quindi: $\\text{pH} = -\\log_{10}(1{,}0 \\times 10^{-3}) = 3{,}0$.",
    fonte: "Lotto S5 del progetto — S5-37 (Acidi, basi, pH, pOH e neutralizzazione (calcolo pH acido forte))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 633,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Qual è il $\\text{pH}$ a $25^\\circ\\text{C}$ di una soluzione acquosa di idrossido di sodio ($\\text{NaOH}$, base forte a dissociazione completa) a concentrazione $0{,}010\\text{ mol/L}$ ($1{,}0 \\times 10^{-2}\\text{ M}$)?",
    rispostaCorretta: "$\\text{pH} = 12{,}0$",
    risposteErrate: [
      "$\\text{pH} = 2{,}0$",
      "$\\text{pH} = 7{,}0$",
      "$\\text{pH} = 10{,}0$",
      "$\\text{pH} = 14{,}0$"
    ],
    spiegazione: "La base forte $\\text{NaOH}$ si dissocia completamente: $[\\text{OH}^-] = 1{,}0 \\times 10^{-2}\\text{ M}$. Il $\\text{pOH}$ è pari a $\\text{pOH} = -\\log_{10}(1{,}0 \\times 10^{-2}) = 2{,}0$. Poiché a $25^\\circ\\text{C}$ $\\text{pH} + \\text{pOH} = 14{,}0$, si ottiene: $\\text{pH} = 14{,}0 - 2{,}0 = 12{,}0$.",
    fonte: "Lotto S5 del progetto — S5-38 (Acidi, basi, pH, pOH e neutralizzazione (calcolo pH base forte))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 634,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Una soluzione acquosa di acido cloridrico ha un $\\text{pH} = 2{,}0$. Se viene diluita con acqua distillata di un fattore $100$ (aumentando il volume di $100$ volte), quale valore assume il $\\text{pH}$ della nuova soluzione a $25^\\circ\\text{C}$?",
    rispostaCorretta: "$\\text{pH} = 4{,}0$",
    risposteErrate: [
      "$\\text{pH} = 0{,}02$",
      "$\\text{pH} = 1{,}0$",
      "$\\text{pH} = 3{,}0$",
      "$\\text{pH} = 8{,}0$"
    ],
    spiegazione: "A $\\text{pH} = 2{,}0$, $[\\text{H}^+] = 10^{-2}\\text{ M} = 0{,}010\\text{ M}$. Diluendo di $100$ volte ($10^2$), la concentrazione degli ioni idrogeno si riduce di un fattore $100$: $[\\text{H}^+]_{\\text{nuovo}} = \\frac{10^{-2}\\text{ M}}{100} = 10^{-4}\\text{ M}$. Il nuovo $\\text{pH}$ è $\\text{pH} = -\\log_{10}(10^{-4}) = 4{,}0$ (aumento di $2$ unità di pH).",
    fonte: "Lotto S5 del progetto — S5-39 (Acidi, basi, pH, pOH e neutralizzazione (variazione pH per diluizione 100x))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 635,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quante moli di idrossido di sodio ($\\text{NaOH}$) sono necessarie per neutralizzare completamente $0{,}15\\text{ moli}$ di acido solforico ($\\text{H}_2\\text{SO}_4$, acido diprotico) secondo la reazione $\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$?",
    rispostaCorretta: "$0{,}30\\text{ moli}$",
    risposteErrate: [
      "$0{,}075\\text{ moli}$",
      "$0{,}15\\text{ moli}$",
      "$0{,}45\\text{ moli}$",
      "$0{,}60\\text{ moli}$"
    ],
    spiegazione: "L’acido solforico $\\text{H}_2\\text{SO}_4$ è un acido diprotico che libera $2\\text{ moli}$ di $\\text{H}^+$ per ogni mole di acido. Dalla stechiometria della reazione bilanciata, occorrono $2\\text{ moli}$ di $\\text{NaOH}$ per ogni mole di $\\text{H}_2\\text{SO}_4$. Dunque: $n_{\\text{NaOH}} = 2 \\times 0{,}15\\text{ mol} = 0{,}30\\text{ moli}$.",
    fonte: "Lotto S5 del progetto — S5-40 (Acidi, basi, pH, pOH e neutralizzazione (moli NaOH neutralizzazione H2SO4))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 636,
    materia: "Scienze",
    difficolta: "medio",
    domanda: "Quale volume di una soluzione di idrossido di potassio ($\\text{KOH}$) a concentrazione $0{,}20\\text{ M}$ è necessario per neutralizzare completamente $100\\text{ mL}$ di una soluzione di acido cloridrico ($\\text{HCl}$) a concentrazione $0{,}10\\text{ M}$?",
    rispostaCorretta: "$50\\text{ mL}$",
    risposteErrate: [
      "$25\\text{ mL}$",
      "$100\\text{ mL}$",
      "$150\\text{ mL}$",
      "$200\\text{ mL}$"
    ],
    spiegazione: "La reazione di neutralizzazione tra $\\text{HCl}$ e $\\text{KOH}$ è $1:1$ ($\\text{HCl} + \\text{KOH} \\to \\text{KCl} + \\text{H}_2\\text{O}$). Moli di acido: $n_{\\text{HCl}} = M_a V_a = 0{,}10\\text{ M} \\times 0{,}100\\text{ L} = 0{,}010\\text{ mol}$. All’equivalenza $n_{\\text{KOH}} = n_{\\text{HCl}} = 0{,}010\\text{ mol}$. Il volume richiesto di base è $V_b = \\frac{n_{\\text{KOH}}}{M_b} = \\frac{0{,}010\\text{ mol}}{0{,}20\\text{ mol/L}} = 0{,}050\\text{ L} = 50\\text{ mL}$.",
    fonte: "Lotto S5 del progetto — S5-41 (Acidi, basi, pH, pOH e neutralizzazione (volume KOH per titolazione HCl))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 637,
    materia: "Scienze",
    difficolta: "medio-difficile",
    domanda: "Vengono mescolati $100\\text{ mL}$ di una soluzione acquosa di acido cloridrico ($\\text{HCl}$) a concentrazione $0{,}30\\text{ M}$ con $100\\text{ mL}$ di una soluzione acquosa di idrossido di sodio ($\\text{NaOH}$) a concentrazione $0{,}10\\text{ M}$. Assumendo che i volumi siano perfettamente additivi ($V_{\\text{totale}} = 200\\text{ mL} = 0{,}20\\text{ L}$) e che la temperatura sia $25^\\circ\\text{C}$, quali sono la concentrazione residua di ioni $[\\text{H}^+]$ e il $\\text{pH}$ finale della soluzione risultante?",
    rispostaCorretta: "$[\\text{H}^+] = 0{,}10\\text{ M}$ e $\\text{pH} = 1{,}0$",
    risposteErrate: [
      "$[\\text{H}^+] = 0{,}20\\text{ M}$ e $\\text{pH} = 0{,}70$",
      "$[\\text{H}^+] = 0{,}020\\text{ M}$ e $\\text{pH} = 1{,}7$",
      "$[\\text{H}^+] = 1{,}0 \\times 10^{-7}\\text{ M}$ e $\\text{pH} = 7{,}0$ (soluzione perfettamente neutra)",
      "$[\\text{H}^+] = 0{,}15\\text{ M}$ e $\\text{pH} = 0{,}82$"
    ],
    spiegazione: "1) Moli iniziali di acido: $n_{\\text{H}^+} = 0{,}30\\text{ mol/L} \\times 0{,}100\\text{ L} = 0{,}030\\text{ mol}$. 2) Moli iniziali di base: $n_{\\text{OH}^-} = 0{,}10\\text{ mol/L} \\times 0{,}100\\text{ L} = 0{,}010\\text{ mol}$. 3) Reazione di neutralizzazione: $\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$. La base è il reagente limitante e si consuma interamente. Moli di $\\text{H}^+$ residue in eccesso: $n_{\\text{H}^+}^{\\text{res}} = 0{,}030 - 0{,}010 = 0{,}020\\text{ mol}$. 4) Volume totale: $V_{\\text{tot}} = 100\\text{ mL} + 100\\text{ mL} = 200\\text{ mL} = 0{,}20\\text{ L}$. 5) Concentrazione finale: $[\\text{H}^+] = \\frac{0{,}020\\text{ mol}}{0{,}20\\text{ L}} = 0{,}10\\text{ mol/L} = 10^{-1}\\text{ M}$. 6) $\\text{pH}$ finale: $\\text{pH} = -\\log_{10}(0{,}10) = 1{,}0$.",
    fonte: "Lotto S5 del progetto — S5-42 (Acidi, basi, pH, pOH e neutralizzazione (problema multi-step neutralizzazione con eccesso))",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 638,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Nella logica proposizionale classica, che cosa si intende per «proposizione» (o enunciato dichiarativo)?",
    rispostaCorretta: "Una frase di senso compiuto per la quale ha senso univoco stabilire se sia vera oppure falsa",
    risposteErrate: [
      "Qualsiasi frase che contenga almeno un verbo al modo congiuntivo o condizionale",
      "Un’espressione linguistica di tipo esclamativo o interrogativo priva di soggetto",
      "Una formula matematica che contiene obbligatoriamente almeno una variabile incognita non quantificata",
      "Un comando o una prescrizione etica la cui validità dipende dal contesto"
    ],
    spiegazione: "In logica proposizionale classica (bivalente), una proposizione è un’affermazione dichiarativa suscettibile di assumere uno e uno solo dei due valori di verità: Vero ($V$) o Falso ($F$). Le domande, le esclamazioni, i comandi e le formule aperte con variabili libere non sono proposizioni.",
    fonte: "Lotto L1 del progetto — L1-01 (ID 638)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 639,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano $P$ e $Q$ due proposizioni logiche. In quali condizioni la loro congiunzione logica, indicata con $P \\land Q$ (letta «$P$ e $Q$»), risulta essere VERA?",
    rispostaCorretta: "Esclusivamente quando sia $P$ sia $Q$ sono entrambe contemporaneamente vere",
    risposteErrate: [
      "Quando almeno una delle due proposizioni $P$ o $Q$ è vera",
      "Quando $P$ è vera, indipendentemente dal valore di verità assunto da $Q$",
      "Esclusivamente quando una proposizione è vera e l’altra è falsa",
      "Quando entrambe le proposizioni $P$ e $Q$ sono contemporaneamente false"
    ],
    spiegazione: "La tavola di verità della congiunzione logica $\\land$ stabilisce che $P \\land Q$ è vera se e solo se entrambi i congiunti $P$ e $Q$ sono veri ($V \\land V = V$). In tutti gli altri tre casi ($V \\land F$, $F \\land V$, $F \\land F$), la congiunzione è falsa.",
    fonte: "Lotto L1 del progetto — L1-02 (ID 639)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 640,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano $P$ e $Q$ due proposizioni. In quali condizioni la loro disgiunzione inclusiva, indicata con $P \\lor Q$ (letta «$P$ o $Q$», corrispondente al latino *vel*), risulta essere FALSA?",
    rispostaCorretta: "Esclusivamente quando sia $P$ sia $Q$ sono entrambe contemporaneamente false",
    risposteErrate: [
      "Quando entrambe le proposizioni $P$ e $Q$ sono contemporaneamente vere",
      "Quando una delle due proposizioni è vera e l’altra è falsa",
      "Quando $P$ è falsa ma $Q$ è vera",
      "La disgiunzione inclusiva non può mai assumere valore di verità falso"
    ],
    spiegazione: "La disgiunzione inclusiva $\\lor$ è vera quando almeno una tra le proposizioni $P$ e $Q$ è vera (incluso il caso in cui siano entrambe vere). Essa risulta quindi falsa nell’unico caso in cui sia $P$ sia $Q$ siano entrambe false ($F \\lor F = F$).",
    fonte: "Lotto L1 del progetto — L1-03 (ID 640)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 641,
    materia: "Logica",
    difficolta: "medio",
    domanda: "La disgiunzione esclusiva tra due proposizioni $P$ e $Q$, indicata con $P \\oplus Q$ (o *aut-aut*), è definita come vera se e solo se si verifica esattamente una delle due proposizioni, ma non entrambe. Se $P$ è VERA e $Q$ è VERA, quale valore di verità assume $P \\oplus Q$?",
    rispostaCorretta: "Falso, perché la disgiunzione esclusiva esclude il caso in cui entrambe le proposizioni siano vere",
    risposteErrate: [
      "Vero, perché entrambe le proposizioni componenti sono vere",
      "Vero, purché $P$ implichi logicamente $Q$",
      "Indeterminato, perché il valore dipende dal contenuto semantico di $P$ e $Q$",
      "Falso, ma solo se anche la negazione $\\neg P$ è vera"
    ],
    spiegazione: "A differenza della disgiunzione inclusiva (che è vera anche quando entrambi i termini sono veri), la disgiunzione esclusiva $P \\oplus Q$ richiede che una sola delle due proposizioni sia vera. Pertanto, se $P$ è vera e $Q$ è vera, $P \\oplus Q$ assume valore di verità Falso ($V \\oplus V = F$).",
    fonte: "Lotto L1 del progetto — L1-04 (ID 641)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 642,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In base al principio della doppia negazione della logica classica, a quale proposizione equivale logicamente l’enunciato «Non è vero che Giorgio non ha superato la prova di ammissione»?",
    rispostaCorretta: "Giorgio ha superato la prova di ammissione",
    risposteErrate: [
      "Giorgio non ha sostenuto la prova di ammissione",
      "Giorgio è stato respinto alla prova di ammissione",
      "Non è possibile stabilire se Giorgio abbia superato la prova",
      "Tutti i candidati tranne Giorgio hanno superato la prova"
    ],
    spiegazione: "In logica classica vige la legge della doppia negazione: $\\neg(\\neg P) \\equiv P$. Negare che Giorgio non abbia superato la prova equivale logicamente ad affermare che Giorgio ha superato la prova.",
    fonte: "Lotto L1 del progetto — L1-05 (ID 642)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 643,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano date le proposizioni $P$ (VERA), $Q$ (FALSA) e $R$ (VERA). Qual è il valore di verità della proposizione composta $(\\neg P \\lor Q) \\lor R$?",
    rispostaCorretta: "Vero, perché la disgiunzione con $R$ (che è vera) rende vera l’intera espressione",
    risposteErrate: [
      "Falso, perché sia $\\neg P$ sia $Q$ sono entrambe false",
      "Falso, perché la presenza di un termine falso ($Q$) rende sempre falsa la disgiunzione",
      "Indeterminato, perché occorre conoscere se $P$ sia causa di $R$",
      "Vero, ma solo a condizione che $Q$ sia logicamente equivalente a $R$"
    ],
    spiegazione: "Valutiamo passo per passo: 1) $P$ è vera $\\implies \\neg P$ è falsa ($F$). 2) $\\neg P \\lor Q$ diventa $F \\lor F = F$. 3) L’intera espressione $(\\neg P \\lor Q) \\lor R$ diventa $F \\lor V = V$ (Vero), poiché nella disgiunzione è sufficiente che almeno un disgiunto sia vero.",
    fonte: "Lotto L1 del progetto — L1-06 (ID 643)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 644,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri l’implicazione materiale $P \\to Q$ (letta «Se $P$, allora $Q$»). In quale unico caso l’implicazione $P \\to Q$ risulta essere FALSA?",
    rispostaCorretta: "Quando l’antecedente $P$ è vero e il conseguente $Q$ è falso",
    risposteErrate: [
      "Quando l’antecedente $P$ è falso e il conseguente $Q$ è vero",
      "Quando sia l’antecedente $P$ sia il conseguente $Q$ sono entrambi falsi",
      "Quando sia l’antecedente $P$ sia il conseguente $Q$ sono entrambi veri",
      "Quando l’antecedente $P$ è falso, indipendentemente dal valore di $Q$"
    ],
    spiegazione: "La tavola di verità dell’implicazione materiale $P \\to Q$ è falsa in un solo e unico caso: quando la premessa (antecedente) $P$ è vera e la conclusione (conseguente) $Q$ è falsa ($V \\to F = F$). Quando l’antecedente $P$ è falso, l’implicazione è sempre vera per vacuità ($F \\to V = V$ e $F \\to F = V$).",
    fonte: "Lotto L1 del progetto — L1-07 (ID 644)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 645,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’implicazione materiale $P \\to Q$ («Se $P$, allora $Q$»)?",
    rispostaCorretta: "$P \\land \\neg Q$ («$P$ e non $Q$»)",
    risposteErrate: [
      "$\\neg P \\to \\neg Q$ («Se non $P$, allora non $Q$»)",
      "$\\neg P \\land \\neg Q$ («Non $P$ e non $Q$»)",
      "$\\neg P \\lor Q$ («Non $P$ oppure $Q$»)",
      "$Q \\to P$ («Se $Q$, allora $P$»)"
    ],
    spiegazione: "L’implicazione $P \\to Q$ è falsa solo quando $P$ è vera e $Q$ è falsa. Di conseguenza, la sua negazione $\\neg(P \\to Q)$ è vera esattamente nelle stesse condizioni, ovvero quando si verifica la congiunzione $P \\land \\neg Q$.",
    fonte: "Lotto L1 del progetto — L1-08 (ID 645)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 646,
    materia: "Logica",
    difficolta: "medio",
    domanda: "A quale delle seguenti proposizioni disgiuntive equivale logicamente l’implicazione materiale $P \\to Q$?",
    rispostaCorretta: "$\\neg P \\lor Q$ («Non $P$ oppure $Q$»)",
    risposteErrate: [
      "$P \\lor Q$ («$P$ oppure $Q$»)",
      "$\\neg P \\lor \\neg Q$ («Non $P$ oppure non $Q$»)",
      "$P \\land Q$ («$P$ e $Q$»)",
      "$\\neg P \\land Q$ («Non $P$ e $Q$»)"
    ],
    spiegazione: "L’equivalenza fondamentale dell’implicazione materiale afferma che $P \\to Q \\equiv \\neg P \\lor Q$. Entrambe le espressioni sono false unicamente quando $P$ è vera e $Q$ è falsa, e vere in tutti gli altri tre casi.",
    fonte: "Lotto L1 del progetto — L1-09 (ID 646)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 647,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la proposizione «contrapositiva» (o contronominale) dell’enunciato «Se piove, allora la strada è bagnata», la quale è logicamente equivalente all’enunciato di partenza?",
    rispostaCorretta: "Se la strada non è bagnata, allora non piove",
    risposteErrate: [
      "Se la strada è bagnata, allora piove",
      "Se non piove, allora la strada non è bagnata",
      "Piove e la strada non è bagnata",
      "Se non piove, allora la strada è bagnata"
    ],
    spiegazione: "Data una proposizione condizionale $P \\to Q$, la sua contrapositiva è $\\neg Q \\to \\neg P$. La contrapositiva è sempre logicamente equivalente alla proposizione originaria ($P \\to Q \\equiv \\neg Q \\to \\neg P$). Nel nostro caso: «Se la strada non è bagnata ($\\neg Q$), allora non piove ($\\neg P$)».",
    fonte: "Lotto L1 del progetto — L1-10 (ID 647)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 648,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le seguenti due premesse assunte come vere:\n1. «Se un dispositivo è in modalità Risparmio Energetico ($P$), allora la spia verde è accesa ($Q$)»;\n2. «La spia verde del dispositivo è accesa ($Q$)».\nQuale delle seguenti deduzioni costituisce la classica fallacia logica dell’«affermazione del conseguente» (traendo una conclusione non garantita dalle premesse)?",
    rispostaCorretta: "Il dispositivo è sicuramente in modalità Risparmio Energetico ($P$)",
    risposteErrate: [
      "Se la spia verde non fosse accesa, allora il dispositivo non sarebbe in modalità Risparmio Energetico",
      "La spia verde accesa è una condizione necessaria affinché il dispositivo sia in modalità Risparmio Energetico",
      "La modalità Risparmio Energetico è una condizione sufficiente affinché la spia verde sia accesa",
      "Dalle sole premesse date non è possibile dedurre con certezza se il dispositivo sia o meno in modalità Risparmio Energetico"
    ],
    spiegazione: "Lo schema d’inferenza dell’«affermazione del conseguente» assume la forma fallace: premesse $P \\to Q$ e $Q$, conclusione errata $\\therefore P$. Sapendo che $P \\implies Q$ e che $Q$ è vero, la spia potrebbe essere accesa anche per altri motivi (non essendo $Q \\to P$); dedurre che il dispositivo sia per forza in modalità $P$ è quindi una deduzione non valida (fallace).",
    fonte: "Lotto L1 del progetto — L1-11 (ID 648)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 649,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le seguenti due premesse assunte come vere:\n1. «Se un candidato possiede la certificazione linguistica di livello C2 ($P$), allora riceve il punteggio massimo nella prova ($Q$)»;\n2. «Il candidato Luca NON possiede la certificazione linguistica di livello C2 ($\\neg P$)».\nQuale delle seguenti conclusioni commette la classica fallacia della «negazione dell’antecedente»?",
    rispostaCorretta: "Il candidato Luca non riceverà il punteggio massimo nella prova ($\\neg Q$)",
    risposteErrate: [
      "Se un candidato non riceve il punteggio massimo nella prova, allora non possiede la certificazione C2",
      "Possedere la certificazione C2 è condizione sufficiente per ricevere il punteggio massimo",
      "Ricevere il punteggio massimo è condizione necessaria affinché sia presente la certificazione C2",
      "Dalle premesse non è possibile stabilire con certezza se Luca riceverà o meno il punteggio massimo"
    ],
    spiegazione: "La fallacia della «negazione dell’antecedente» segue lo schema errato: premesse $P \\to Q$ e $\\neg P$, conclusione indebita $\\therefore \\neg Q$. Il fatto che la certificazione C2 garantisca il punteggio massimo non esclude che Luca possa ottenere il punteggio massimo per altri meriti previsti dal regolamento; concludere categoricamente $\\neg Q$ da $\\neg P$ è pertanto logicamente invalido.",
    fonte: "Lotto L1 del progetto — L1-12 (ID 649)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 650,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la seguente regola formale di ammissione a un torneo scientifico: «Aver vinto la fase eliminatoria d’istituto ($P$) è condizione sufficiente per partecipare alla finale regionale ($Q$)». In base a questa sola regola, quale delle seguenti conclusioni è logicamente inoppugnabile?",
    rispostaCorretta: "Chiunque abbia vinto la fase eliminatoria d’istituto ha il diritto certo di partecipare alla finale regionale",
    risposteErrate: [
      "Solo chi ha vinto la fase eliminatoria d’istituto può partecipare alla finale regionale",
      "Chi non ha vinto la fase eliminatoria d’istituto non può in nessun caso partecipare alla finale regionale",
      "Tutti coloro che partecipano alla finale regionale hanno obbligatoriamente vinto la fase d’istituto",
      "Aver vinto la fase d’istituto è sia necessario sia sufficiente per accedere alla finale regionale"
    ],
    spiegazione: "Dire che $P$ è «condizione sufficiente» per $Q$ significa che il verificarsi di $P$ garantisce in modo certo il verificarsi di $Q$ ($P \\to Q$). Dunque, chiunque abbia vinto la fase d’istituto ($P$) è ammesso alla finale ($Q$). La condizione sufficiente non è necessaria: altri concorrenti potrebbero accedere alla finale tramite canali alternativi (ad es. ripescaggi o wild card).",
    fonte: "Lotto L1 del progetto — L1-13 (ID 650)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 651,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Si consideri l’enunciato: «Un cittadino può votare alle elezioni politiche *solo se* è maggiorenne». Qual è la corretta formalizzazione e interpretazione logica di questa proposizione, ponendo $V =$ «vota» e $M =$ «è maggiorenne»?",
    rispostaCorretta: "$V \\to M$, il che significa che essere maggiorenne ($M$) è condizione necessaria per votare ($V$), e chi non è maggiorenne non può votare ($\\neg M \\to \\neg V$)",
    risposteErrate: [
      "$M \\to V$, il che significa che tutti i maggiorenni votano obbligatoriamente alle elezioni politiche",
      "$V \\leftrightarrow M$, il che significa che votare ed essere maggiorenne sono condizioni reciprocamente sufficienti e necessarie",
      "$\\neg V \\to \\neg M$, il che significa che chi non vota è sicuramente minorenne",
      "$V \\land M$, il che significa che tutti i cittadini sono contemporaneamente votanti e maggiorenni"
    ],
    spiegazione: "La locuzione «$P$ solo se $Q$» introduce una condizione necessaria $Q$ per $P$, che si formalizza rigorosamente come $P \\to Q$ (e per contrapposizione $\\neg Q \\to \\neg P$: «se non sei maggiorenne, non puoi votare»). Non equivale a $M \\to V$ (un maggiorenne potrebbe decidere di astenersi o essere privo di diritti elettorali).",
    fonte: "Lotto L1 del progetto — L1-14 (ID 651)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 652,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Che cosa esprime il connettivo di coimplicazione (o doppio condizionale) $P \\leftrightarrow Q$, espresso in linguaggio naturale dalla formula «$P$ se e solo se $Q$»?",
    rispostaCorretta: "Che le due proposizioni $P$ e $Q$ hanno sempre lo stesso identico valore di verità (entrambe vere o entrambe false)",
    risposteErrate: [
      "Che $P$ è vera ogni volta che $Q$ è falsa",
      "Che $P$ è condizione sufficiente ma non necessaria per $Q$",
      "Che $P$ e $Q$ non possono mai essere entrambe false",
      "Che la verità di $P$ esclude logicamente la verità di $Q$"
    ],
    spiegazione: "Il bicondizionale $P \\leftrightarrow Q$ è vero quando $P$ e $Q$ concordano in valore di verità ($V \\leftrightarrow V = V$ e $F \\leftrightarrow F = V$) ed è falso quando i due valori discordano ($V \\leftrightarrow F = F$ e $F \\leftrightarrow V = F$).",
    fonte: "Lotto L1 del progetto — L1-15 (ID 652)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 653,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale delle seguenti formule logiche esprime in modo formalmente equivalente la coimplicazione (doppia implicazione) $P \\leftrightarrow Q$?",
    rispostaCorretta: "$(P \\to Q) \\land (Q \\to P)$",
    risposteErrate: [
      "$(P \\to Q) \\lor (Q \\to P)$",
      "$(P \\land Q) \\to (P \\lor Q)$",
      "$\\neg P \\leftrightarrow \\neg Q$",
      "$(P \\to Q) \\land (\\neg P \\to \\neg Q)$"
    ],
    spiegazione: "Per definizione, il bicondizionale $P \\leftrightarrow Q$ esprime la congiunzione delle due implicazioni dirette e inverse: $(P \\to Q) \\land (Q \\to P)$ («$P$ implica $Q$ E $Q$ implica $P$»).",
    fonte: "Lotto L1 del progetto — L1-16 (ID 653)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 654,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica della coimplicazione $P \\leftrightarrow Q$?",
    rispostaCorretta: "$(P \\land \\neg Q) \\lor (\\neg P \\land Q)$ (ossia la disgiunzione esclusiva $P \\oplus Q$)",
    risposteErrate: [
      "$\\neg P \\leftrightarrow \\neg Q$",
      "$\\neg P \\land \\neg Q$",
      "$(P \\lor \\neg Q) \\land (\\neg P \\lor Q)$",
      "$\\neg(P \\to Q) \\land \\neg(Q \\to P)$"
    ],
    spiegazione: "Poiché $P \\leftrightarrow Q$ è vero quando $P$ e $Q$ hanno lo stesso valore di verità, la sua negazione $\\neg(P \\leftrightarrow Q)$ è vera quando $P$ e $Q$ hanno valori di verità discordi (uno vero e l’altro falso), il che corrisponde esattamente alla disgiunzione esclusiva $(P \\land \\neg Q) \\lor (\\neg P \\land Q) \\equiv P \\oplus Q$.",
    fonte: "Lotto L1 del progetto — L1-17 (ID 654)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 655,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la differenza fondamentale tra l’implicazione semplice $P \\to Q$ («Se $P$, allora $Q$») e la coimplicazione $P \\leftrightarrow Q$ («$P$ se e solo se $Q$»)?",
    rispostaCorretta: "Nell’implicazione $P \\to Q$, $Q$ può essere vera anche se $P$ è falsa; nella coimplicazione $P \\leftrightarrow Q$, se $P$ è falsa anche $Q$ deve essere obbligatoriamente falsa",
    risposteErrate: [
      "Nell’implicazione $P \\to Q$, $P$ e $Q$ devono essere entrambe vere; nella coimplicazione possono essere entrambe false",
      "L’implicazione ammette solo proposizioni matematiche, mentre la coimplicazione si applica solo al linguaggio naturale",
      "Nella coimplicazione $P$ è solo sufficiente per $Q$, mentre nell’implicazione è sia necessaria sia sufficiente",
      "Non esiste alcuna differenza formale tra i due connettivi"
    ],
    spiegazione: "Nell’implicazione materiale $P \\to Q$, il caso $F \\to V$ è valido e vero (la premessa falsa non impedisce che la conclusione sia vera). Nella coimplicazione $P \\leftrightarrow Q$, invece, il legame è bidirezionale: la falsità di $P$ impone la falsità di $Q$ affinché l’enunciato sia vero.",
    fonte: "Lotto L1 del progetto — L1-18 (ID 655)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 656,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In base alla prima legge di De Morgan, a quale espressione logica equivale la negazione di una congiunzione, $\\neg(P \\land Q)$?",
    rispostaCorretta: "$\\neg P \\lor \\neg Q$ («Non $P$ oppure non $Q$»)",
    risposteErrate: [
      "$\\neg P \\land \\neg Q$ («Non $P$ e non $Q$»)",
      "$P \\lor Q$ («$P$ oppure $Q$»)",
      "$\\neg P \\to \\neg Q$ («Se non $P$, allora non $Q$»)",
      "$\\neg(P \\lor Q)$ («Non ($P$ oppure $Q$)»)"
    ],
    spiegazione: "La prima legge di De Morgan stabilisce l’equivalenza logica $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$. Negare che due eventi accadano entrambi contemporaneamente equivale ad affermare che almeno uno dei due non accade.",
    fonte: "Lotto L1 del progetto — L1-19 (ID 656)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 657,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In base alla seconda legge di De Morgan, a quale espressione logica equivale la negazione di una disgiunzione inclusiva, $\\neg(P \\lor Q)$?",
    rispostaCorretta: "$\\neg P \\land \\neg Q$ («Non $P$ e non $Q$»)",
    risposteErrate: [
      "$\\neg P \\lor \\neg Q$ («Non $P$ oppure non $Q$»)",
      "$P \\land Q$ («$P$ e $Q$»)",
      "$\\neg P \\to Q$ («Se non $P$, allora $Q$»)",
      "$P \\lor \\neg Q$ («$P$ oppure non $Q$»)"
    ],
    spiegazione: "La seconda legge di De Morgan stabilisce che $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$. Negare che si verifichi almeno uno tra $P$ e $Q$ equivale ad affermare che non si verifica né $P$ né $Q$ (ovvero «non $P$ E non $Q$»).",
    fonte: "Lotto L1 del progetto — L1-20 (ID 657)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 658,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica della proposizione: «Marco studia ingegneria e lavora come programmatore»?",
    rispostaCorretta: "Marco non studia ingegneria oppure non lavora come programmatore",
    risposteErrate: [
      "Marco non studia ingegneria e non lavora come programmatore",
      "Se Marco non studia ingegneria, allora non lavora come programmatore",
      "Marco studia ingegneria ma non lavora come programmatore",
      "Nessun programmatore studia ingegneria come Marco"
    ],
    spiegazione: "Applicando la legge di De Morgan $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$, la negazione della congiunzione è la disgiunzione delle singole negazioni: «Marco non studia ingegneria oppure non lavora come programmatore» (è sufficiente che almeno una delle due attività non sia svolta).",
    fonte: "Lotto L1 del progetto — L1-21 (ID 658)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 659,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’affermazione: «Nel fine settimana andrò al mare oppure andrò in montagna» (disgiunzione inclusiva)?",
    rispostaCorretta: "Nel fine settimana non andrò al mare e non andrò in montagna",
    risposteErrate: [
      "Nel fine settimana non andrò al mare oppure non andrò in montagna",
      "Nel fine settimana andrò sia al mare sia in montagna",
      "Se non andrò al mare, allora andrò sicuramente in montagna",
      "Nel fine settimana andrò al mare ma non in montagna"
    ],
    spiegazione: "Applicando la legge di De Morgan $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$, la negazione della disgiunzione «al mare oppure in montagna» è la congiunzione delle negazioni: «non andrò al mare E non andrò in montagna».",
    fonte: "Lotto L1 del progetto — L1-22 (ID 659)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 660,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Applicando le leggi di De Morgan e della doppia negazione, a quale formula equivale la negazione dell’enunciato $P \\land \\neg Q$?",
    rispostaCorretta: "$\\neg P \\lor Q$",
    risposteErrate: [
      "$\\neg P \\land Q$",
      "$\\neg P \\lor \\neg Q$",
      "$P \\to \\neg Q$",
      "$\\neg P \\land \\neg Q$"
    ],
    spiegazione: "$\\neg(P \\land \\neg Q) \\equiv \\neg P \\lor \\neg(\\neg Q) \\equiv \\neg P \\lor Q$.",
    fonte: "Lotto L1 del progetto — L1-23 (ID 660)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 661,
    materia: "Logica",
    difficolta: "medio",
    domanda: "A quale espressione logica semplificata equivale la negazione della proposizione $\\neg P \\lor Q$?",
    rispostaCorretta: "$P \\land \\neg Q$",
    risposteErrate: [
      "$P \\lor \\neg Q$",
      "$\\neg P \\land \\neg Q$",
      "$P \\to Q$",
      "$\\neg P \\lor \\neg Q$"
    ],
    spiegazione: "Applicando De Morgan e la doppia negazione: $\\neg(\\neg P \\lor Q) \\equiv \\neg(\\neg P) \\land \\neg Q \\equiv P \\land \\neg Q$. Si noti che questo coincide con la negazione dell’implicazione $P \\to Q$, essendo $P \\to Q \\equiv \\neg P \\lor Q$.",
    fonte: "Lotto L1 del progetto — L1-24 (ID 661)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 662,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la proposizione «Non è vero che (il semaforo è rosso oppure il passaggio a livello è chiuso), ed è giorno». Ponendo $R =$ «semaforo rosso», $C =$ «passaggio a livello chiuso» e $G =$ «è giorno», quale formula la rappresenta fedelmente?",
    rispostaCorretta: "$(\\neg R \\land \\neg C) \\land G$",
    risposteErrate: [
      "$\\neg(R \\land C) \\land G$",
      "$(\\neg R \\lor \\neg C) \\land G$",
      "$\\neg(R \\lor C \\lor G)$",
      "$(R \\land C) \\lor \\neg G$"
    ],
    spiegazione: "L’espressione iniziale è $\\neg(R \\lor C) \\land G$. Applicando la legge di De Morgan alla parte tra parentesi, $\\neg(R \\lor C) \\equiv \\neg R \\land \\neg C$. Quindi l’enunciato complessivo diventa $(\\neg R \\land \\neg C) \\land G$.",
    fonte: "Lotto L1 del progetto — L1-25 (ID 662)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 663,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale delle seguenti coppie di formule logiche è costituita da due espressioni tra loro NON logicamente equivalenti?",
    rispostaCorretta: "$P \\to Q$ e $Q \\to P$",
    risposteErrate: [
      "$\\neg(P \\land Q)$ e $\\neg P \\lor \\neg Q$",
      "$\\neg(P \\lor Q)$ e $\\neg P \\land \\neg Q$",
      "$P \\to Q$ e $\\neg Q \\to \\neg P$",
      "$P \\to Q$ e $\\neg P \\lor Q$"
    ],
    spiegazione: "L’implicazione diretta $P \\to Q$ e la sua conversa $Q \\to P$ non sono logicamente equivalenti (la verità di una non garantisce la verità dell’altra). Tutte le altre coppie proposte rappresentano invece note equivalenze logiche (De Morgan, contrapposizione, definizione dell’implicazione).",
    fonte: "Lotto L1 del progetto — L1-26 (ID 663)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 664,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica della promessa: «Se vincerò la gara, allora ti regalerò la mia medaglia»?",
    rispostaCorretta: "Vincerò la gara e non ti regalerò la mia medaglia",
    risposteErrate: [
      "Se non vincerò la gara, allora non ti regalerò la mia medaglia",
      "Non vincerò la gara oppure ti regalerò la mia medaglia",
      "Non vincerò la gara e non ti regalerò la mia medaglia",
      "Se ti regalerò la mia medaglia, allora avrò vinto la gara"
    ],
    spiegazione: "Una promessa condizionale del tipo «Se $P$, allora $Q$» viene smentita (negata) nell’unico caso in cui la condizione $P$ si avvera («vinco la gara») ma la conseguenza $Q$ non viene mantenuta («non ti regalo la medaglia»), ossia $P \\land \\neg Q$.",
    fonte: "Lotto L1 del progetto — L1-27 (ID 664)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 665,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Qual è la corretta negazione logica della proposizione complessa $A \\to (B \\land C)$?",
    rispostaCorretta: "$A \\land (\\neg B \\lor \\neg C)$",
    risposteErrate: [
      "$\\neg A \\to (\\neg B \\lor \\neg C)$",
      "$A \\land \\neg B \\land \\neg C$",
      "$\\neg A \\land (B \\land C)$",
      "$A \\lor (\\neg B \\land \\neg C)$"
    ],
    spiegazione: "La negazione di un’implicazione $P \\to Q$ è $P \\land \\neg Q$. Ponendo $P = A$ e $Q = (B \\land C)$, si ha: $\\neg[A \\to (B \\land C)] \\equiv A \\land \\neg(B \\land C)$. Applicando ora la legge di De Morgan a $\\neg(B \\land C)$, otteniamo $A \\land (\\neg B \\lor \\neg C)$.",
    fonte: "Lotto L1 del progetto — L1-28 (ID 665)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 666,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Nella logica dei predicati, il quantificatore universale $\\forall$ (letto «per ogni» o «per tutti») associato alla formula $\\forall x P(x)$ esprime che:",
    rispostaCorretta: "La proprietà $P$ è verificata da ogni singolo elemento del dominio di riferimento considerato",
    risposteErrate: [
      "Esiste almeno un elemento nel dominio che soddisfa la proprietà $P$",
      "La maggior parte degli elementi del dominio soddisfa la proprietà $P$",
      "La proprietà $P$ è vera per un numero infinito di elementi ma non necessariamente per tutti",
      "Nessun elemento del dominio soddisfa la proprietà $P$"
    ],
    spiegazione: "L’enunciato universale $\\forall x P(x)$ afferma che la proprietà o predicato $P$ vale indistintamente per la totalità degli elementi appartenenti al dominio di discorso. È sufficiente un solo controesempio per renderlo falso.",
    fonte: "Lotto L1 del progetto — L1-29 (ID 666)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 667,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Il quantificatore esistenziale $\\exists$ (letto «esiste» o «esiste almeno un») associato alla formula $\\exists x P(x)$ è vero se e solo se:",
    rispostaCorretta: "Nel dominio di discorso considerato esiste almeno un elemento che soddisfa la proprietà $P$",
    risposteErrate: [
      "Tutti gli elementi del dominio soddisfano rigorosamente la proprietà $P$",
      "Esattamente un solo ed unico elemento del dominio soddisfa la proprietà $P$",
      "La proprietà $P$ è soddisfatta da almeno il $50\\%$ degli elementi del dominio",
      "Nessun elemento del dominio soddisfa la proprietà $P$"
    ],
    spiegazione: "L’enunciato esistenziale $\\exists x P(x)$ richiede che vi sia almeno un elemento del dominio per cui il predicato $P(x)$ sia vero (possono essercene uno, molti o anche tutti).",
    fonte: "Lotto L1 del progetto — L1-30 (ID 667)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 668,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’affermazione universale «Tutti gli studenti iscritti al corso hanno superato la prova finale»?",
    rispostaCorretta: "Esiste almeno uno studente iscritto al corso che non ha superato la prova finale",
    risposteErrate: [
      "Nessuno studente iscritto al corso ha superato la prova finale",
      "Tutti gli studenti iscritti al corso sono stati respinti alla prova finale",
      "La maggior parte degli studenti iscritti al corso non ha superato la prova finale",
      "Esiste almeno uno studente iscritto al corso che ha superato la prova finale"
    ],
    spiegazione: "La negazione di un quantificatore universale è un quantificatore esistenziale con predicato negato: $\\neg[\\forall x P(x)] \\equiv \\exists x \\neg P(x)$. Per smentire che «tutti» abbiano superato la prova non serve che «nessuno» l’abbia superata; basta che vi sia almeno uno studente che non l’ha superata.",
    fonte: "Lotto L1 del progetto — L1-31 (ID 668)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 669,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la distinzione logica fondamentale tra l’espressione «Non tutti gli $A$ sono $B$» e l’espressione «Nessun $A$ è $B$»?",
    rispostaCorretta: "«Non tutti gli $A$ sono $B$» afferma che esiste almeno un $A$ che non è $B$ (ma altri potrebbero esserlo); «Nessun $A$ è $B$» esclude categoricamente che anche un solo $A$ sia $B$",
    risposteErrate: [
      "Le due espressioni sono perfettamente sinonime ed equivalenti in logica classica",
      "«Non tutti gli $A$ sono $B$» implica che nessun $A$ possa essere $B$",
      "«Nessun $A$ è $B$» ammette che una minoranza di $A$ sia $B$",
      "«Non tutti gli $A$ sono $B$» si applica solo a insiemi finiti, «Nessun $A$ è $B$» solo a insiemi infiniti"
    ],
    spiegazione: "«Non tutti gli $A$ sono $B$» corrisponde a $\\exists x (A(x) \\land \\neg B(x))$ (esiste almeno un controesempio, compatibile con il fatto che molti altri $A$ siano $B$). «Nessun $A$ è $B$» corrisponde a $\\forall x (A(x) \\to \\neg B(x))$ (totale disgiunzione tra gli insiemi $A$ e $B$).",
    fonte: "Lotto L1 del progetto — L1-32 (ID 669)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 670,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’enunciato esistenziale «Esiste almeno un gatto a cui piace fare il bagno nell’acqua»?",
    rispostaCorretta: "A nessun gatto piace fare il bagno nell’acqua (ossia a tutti i gatti non piace)",
    risposteErrate: [
      "Esiste almeno un gatto a cui non piace fare il bagno nell’acqua",
      "A tutti i gatti piace fare il bagno nell’acqua",
      "Alla maggior parte dei gatti non piace fare il bagno nell’acqua",
      "Esistono gatti a cui piace fare il bagno ma solo se l’acqua è tiepida"
    ],
    spiegazione: "La negazione del quantificatore esistenziale è un quantificatore universale con predicato negato: $\\neg[\\exists x P(x)] \\equiv \\forall x \\neg P(x)$. Negare che esista almeno un gatto con tale preferenza equivale ad affermare che nessun gatto ha tale preferenza (tutti i gatti non amano il bagno).",
    fonte: "Lotto L1 del progetto — L1-33 (ID 670)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 671,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica della proposizione «Nessun numero primo maggiore di 2 è un numero pari»?",
    rispostaCorretta: "Esiste almeno un numero primo maggiore di 2 che è un numero pari",
    risposteErrate: [
      "Tutti i numeri primi maggiori di 2 sono numeri pari",
      "Nessun numero pari maggiore di 2 è un numero primo",
      "Tutti i numeri dispari maggiori di 2 sono numeri primi",
      "Esiste almeno un numero primo maggiore di 2 che è dispari"
    ],
    spiegazione: "L’affermazione «Nessun $A$ è $B$» equivale a $\\forall x (A(x) \\to \\neg B(x))$. La sua negazione è $\\neg[\\forall x (A(x) \\to \\neg B(x))] \\equiv \\exists x (A(x) \\land B(x))$, ossia «Esiste almeno un $A$ che è $B$».",
    fonte: "Lotto L1 del progetto — L1-34 (ID 671)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 672,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’enunciato «Tutti gli alberi di questo parco sono pini oppure abeti» (disgiunzione inclusiva)?",
    rispostaCorretta: "Esiste almeno un albero in questo parco che non è né un pino né un abete",
    risposteErrate: [
      "Nessun albero di questo parco è un pino oppure un abete",
      "Tutti gli alberi di questo parco non sono né pini né abeti",
      "Esiste almeno un albero in questo parco che è sia un pino sia un abete",
      "Alcuni alberi del parco sono pini e altri sono abeti"
    ],
    spiegazione: "L’enunciato è $\\forall x (P(x) \\lor A(x))$. La sua negazione logica è $\\exists x \\neg(P(x) \\lor A(x))$. Applicando De Morgan alla disgiunzione, $\\neg(P(x) \\lor A(x)) \\equiv \\neg P(x) \\land \\neg A(x)$. Dunque: «Esiste almeno un albero che non è un pino E non è un abete» (cioè non è né l’uno né l’altro).",
    fonte: "Lotto L1 del progetto — L1-35 (ID 672)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 673,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’affermazione «Ogni volta che vado a correre all’aperto, indosso le scarpe da ginnastica»?",
    rispostaCorretta: "Esiste almeno una volta in cui vado a correre all’aperto e non indosso le scarpe da ginnastica",
    risposteErrate: [
      "Non vado mai a correre all’aperto e non indosso mai le scarpe da ginnastica",
      "Ogni volta che non vado a correre all’aperto, non indosso le scarpe da ginnastica",
      "Ogni volta che vado a correre all’aperto, non indosso le scarpe da ginnastica",
      "Indosso le scarpe da ginnastica solo quando non vado a correre all’aperto"
    ],
    spiegazione: "L’affermazione universale condizionale $\\forall t (C(t) \\to S(t))$ («Per ogni volta $t$, se corro allora metto le scarpe») viene smentita dall’esistenza di almeno un’occasione in cui la premessa è vera e la conseguenza è falsa: $\\exists t (C(t) \\land \\neg S(t))$.",
    fonte: "Lotto L1 del progetto — L1-36 (ID 673)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 674,
    materia: "Logica",
    difficolta: "medio",
    domanda: "A quale delle seguenti proposizioni equivale logicamente l’affermazione categorica «Nessun rettile è un animale a sangue caldo»?",
    rispostaCorretta: "Tutti gli animali a sangue caldo non sono rettili (e tutti i rettili non sono animali a sangue caldo)",
    risposteErrate: [
      "Tutti gli animali che non sono rettili sono a sangue caldo",
      "Esiste almeno un rettile che non è un animale a sangue caldo",
      "Nessun animale a sangue freddo è un rettile",
      "Tutti i rettili sono animali a sangue freddo solo se sono ovipari"
    ],
    spiegazione: "La proposizione «Nessun $A$ è $B$» è simmetrica e stabilisce che l’intersezione tra l’insieme $A$ e l’insieme $B$ è vuota ($A \\cap B = \\emptyset$). Ciò equivale sia a «Tutti gli $A$ sono non-$B$» sia a «Tutti i $B$ sono non-$A$» («Nessun $B$ è $A$»).",
    fonte: "Lotto L1 del progetto — L1-37 (ID 674)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 675,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sapendo che l’enunciato universale «Tutti i quadrati sono parallelogrammi» è vero, quale delle seguenti affermazioni ne costituisce la contrapositiva logicamente equivalente?",
    rispostaCorretta: "Se una figura geometrica non è un parallelogramma, allora non è un quadrato",
    risposteErrate: [
      "Se una figura geometrica è un parallelogramma, allora è sicuramente un quadrato",
      "Se una figura geometrica non è un quadrato, allora non è un parallelogramma",
      "Tutti i parallelogrammi sono figure con quattro lati uguali",
      "Esiste almeno un quadrato che non è un parallelogramma"
    ],
    spiegazione: "L’enunciato «Tutti i quadrati sono parallelogrammi» si formalizza come $\\forall x (Q(x) \\to P(x))$. La sua contrapositiva logicamente equivalente è $\\forall x (\\neg P(x) \\to \\neg Q(x))$: «Se una figura non è un parallelogramma, allora non è un quadrato».",
    fonte: "Lotto L1 del progetto — L1-38 (ID 675)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 676,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta negazione logica dell’enunciato: «Esiste almeno un candidato che è sia residente a Roma sia laureato in informatica»?",
    rispostaCorretta: "Tutti i candidati o non sono residenti a Roma oppure non sono laureati in informatica",
    risposteErrate: [
      "Nessun candidato è residente a Roma e nessun candidato è laureato in informatica",
      "Tutti i candidati sono residenti a Roma ma non laureati in informatica",
      "Esiste almeno un candidato che non è residente a Roma e non è laureato in informatica",
      "Tutti i candidati laureati in informatica non risiedono a Roma"
    ],
    spiegazione: "L’enunciato è $\\exists x (R(x) \\land L(x))$. La sua negazione è $\\neg[\\exists x (R(x) \\land L(x))] \\equiv \\forall x \\neg(R(x) \\land L(x))$. Per De Morgan, $\\neg(R(x) \\land L(x)) \\equiv \\neg R(x) \\lor \\neg L(x)$. Dunque per ogni candidato vale che non è residente a Roma oppure non è laureato in informatica.",
    fonte: "Lotto L1 del progetto — L1-39 (ID 676)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 677,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino due insiemi $X$ e $Y$ e un predicato binario $P(x,y)$. Qual è la differenza di significato logico tra le formule $\\forall x \\exists y P(x,y)$ e $\\exists y \\forall x P(x,y)$?",
    rispostaCorretta: "Nella prima l’elemento $y$ può dipendere da ciascun elemento $x$ scelto; nella seconda deve esistere un unico elemento $y$ comune che funziona contemporaneamente per tutti gli $x$",
    risposteErrate: [
      "Le due formule sono perfettamente equivalenti per la proprietà commutativa dei quantificatori",
      "La prima formula è sempre falsa, mentre la seconda è sempre vera in qualsiasi dominio",
      "Nella prima formula $x$ e $y$ devono coincidere, nella seconda devono essere distinti",
      "La seconda formula afferma che nessun elemento $x$ soddisfa la proprietà $P$"
    ],
    spiegazione: "L’ordine dei quantificatori di tipo diverso non è commutativo: $\\forall x \\exists y P(x,y)$ significa che per ogni $x$ si può trovare un adeguato $y$ (ad es. «per ogni persona $x$ esiste una madre $y$»). $\\exists y \\forall x P(x,y)$ è un’affermazione molto più forte che richiede un $y$ universale identico per tutti (ad es. «esiste una madre $y$ comune a tutte le persone $x$»).",
    fonte: "Lotto L1 del progetto — L1-40 (ID 677)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 678,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Applicando le regole di negazione per proposizioni con quantificatori multipli, a quale formula equivale la negazione di $\\forall x \\exists y P(x,y)$?",
    rispostaCorretta: "$\\exists x \\forall y \\neg P(x,y)$",
    risposteErrate: [
      "$\\forall x \\forall y \\neg P(x,y)$",
      "$\\exists x \\exists y \\neg P(x,y)$",
      "$\\forall x \\exists y \\neg P(x,y)$",
      "$\\neg(\\exists y \\forall x P(x,y))$"
    ],
    spiegazione: "Negare una sequenza di quantificatori trasforma ogni $\\forall$ in $\\exists$, ogni $\\exists$ in $\\forall$ e nega il predicato interno: $\\neg[\\forall x \\exists y P(x,y)] \\equiv \\exists x \\neg[\\exists y P(x,y)] \\equiv \\exists x \\forall y \\neg P(x,y)$.",
    fonte: "Lotto L1 del progetto — L1-41 (ID 678)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 679,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Qual è la corretta negazione formale della proposizione universale condizionale $\\forall x [P(x) \\to Q(x)]$?",
    rispostaCorretta: "$\\exists x [P(x) \\land \\neg Q(x)]$",
    risposteErrate: [
      "$\\forall x [P(x) \\land \\neg Q(x)]$",
      "$\\exists x [\\neg P(x) \\to \\neg Q(x)]$",
      "$\\forall x [\\neg P(x) \\lor Q(x)]$",
      "$\\exists x [\\neg P(x) \\land Q(x)]$"
    ],
    spiegazione: "1) La negazione del quantificatore universale è $\\exists x \\neg[P(x) \\to Q(x)]$. 2) La negazione dell’implicazione interna è $\\neg[P(x) \\to Q(x)] \\equiv P(x) \\land \\neg Q(x)$. 3) Unendo i due passaggi si ottiene: $\\exists x [P(x) \\land \\neg Q(x)]$, ossia «Esiste almeno un elemento $x$ che soddisfa $P(x)$ ma non soddisfa $Q(x)$».",
    fonte: "Lotto L1 del progetto — L1-42 (ID 679)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 680,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le due premesse:\n1. «Se l’allarme antincendio suona, allora l’edificio viene evacuato immediatamente»;\n2. «L’allarme antincendio sta suonando».\nIn base alla regola di inferenza classica del *Modus Ponens*, quale conclusione segue necessariamente?",
    rispostaCorretta: "L’edificio viene evacuato immediatamente",
    risposteErrate: [
      "L’edificio non viene evacuato",
      "C’è sicuramente un incendio reale all’interno dell’edificio",
      "L’allarme ha suonato a causa di un guasto tecnico",
      "Nessuna conclusione è possibile senza verificare la presenza di fumo"
    ],
    spiegazione: "Il *Modus Ponens* è la fondamentale regola d’inferenza della logica proposizionale: date le premesse $P \\to Q$ e $P$, ne consegue necessariamente $Q$. Essendo vere le premesse «Allarme $\\implies$ Evacuazione» e «Allarme suona», la conclusione necessaria e inoppugnabile è «L’edificio viene evacuato».",
    fonte: "Lotto L1 del progetto — L1-43 (ID 680)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 681,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le seguenti premesse vere:\n1. «Se un numero intero $n$ è divisibile per 6, allora $n$ è divisibile per 2»;\n2. «Il numero intero $k$ NON è divisibile per 2».\nApplicando la regola di inferenza del *Modus Tollens*, quale conclusione è logicamente certa?",
    rispostaCorretta: "Il numero $k$ non è divisibile per 6",
    risposteErrate: [
      "Il numero $k$ è divisibile per 3",
      "Il numero $k$ è un numero primo",
      "Il numero $k$ è divisibile per 6",
      "Non è possibile dedurre alcuna informazione sulla divisibilità di $k$ per 6"
    ],
    spiegazione: "Il *Modus Tollens* stabilisce che dalle premesse $P \\to Q$ e $\\neg Q$ segue necessariamente $\\neg P$. Poiché «divisibile per 6» ($P$) implica «divisibile per 2» ($Q$), e sapendo che $k$ non è divisibile per 2 ($\\neg Q$), concludiamo con certezza assoluta che $k$ non è divisibile per 6 ($\\neg P$).",
    fonte: "Lotto L1 del progetto — L1-44 (ID 681)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 682,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le premesse:\n1. «La riunione si terrà nell’Aula Magna oppure nella Sala Riunioni» (disgiunzione inclusiva);\n2. «La riunione NON si terrà nell’Aula Magna».\nIn base al sillogismo disgiuntivo, quale affermazione è necessariamente vera?",
    rispostaCorretta: "La riunione si terrà nella Sala Riunioni",
    risposteErrate: [
      "La riunione è stata annullata",
      "La riunione si terrà contemporaneamente in entrambe le aule",
      "La riunione si terrà all’aperto",
      "Non è possibile determinare dove si terrà la riunione"
    ],
    spiegazione: "La regola del sillogismo disgiuntivo afferma che da $P \\lor Q$ e $\\neg P$ si deduce necessariamente $Q$. Sapendo che una delle due opzioni deve verificarsi e che la prima è esclusa, la riunione deve obbligatoriamente svolgersi nella Sala Riunioni.",
    fonte: "Lotto L1 del progetto — L1-45 (ID 682)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 683,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Date le due implicazioni vere: «Se un triangolo è equilatero, allora è equiangolo» e «Se un triangolo è equiangolo, allora tutti i suoi angoli interni misurano $60^\\circ$», quale conclusione deriva per la proprietà di transitività (sillogismo ipotetico)?",
    rispostaCorretta: "Se un triangolo è equilatero, allora tutti i suoi angoli interni misurano $60^\\circ$",
    risposteErrate: [
      "Tutti i triangoli hanno angoli interni che misurano $60^\\circ$",
      "Se un triangolo ha angoli di $60^\\circ$, allora non può essere equiangolo",
      "Un triangolo è equilatero se e solo se ha almeno due lati uguali",
      "La transitività non si applica alle proprietà geometriche"
    ],
    spiegazione: "La regola del sillogismo ipotetico stabilisce la transitività dell’implicazione: $(P \\to Q) \\land (Q \\to R) \\implies (P \\to R)$. Di conseguenza, «equilatero $\\implies$ angoli di $60^\\circ$».",
    fonte: "Lotto L1 del progetto — L1-46 (ID 683)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 684,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Se si sa con certezza che la disgiunzione inclusiva $P \\lor Q$ è FALSA, quale valore di verità assume con certezza la proposizione composta $\\neg P \\land \\neg Q$?",
    rispostaCorretta: "Vero, perché se $P \\lor Q$ è falsa sia $P$ sia $Q$ sono false, rendendo vere entrambe le loro negazioni",
    risposteErrate: [
      "Falso, perché la negazione di una proposizione falsa è sempre indeterminata",
      "Falso, perché la congiunzione $\\land$ richiede che almeno una variabile sia $P$",
      "Indeterminato, perché dipende dal fatto che $P$ sia o meno equivalente a $Q$",
      "Vero solo se $P$ e $Q$ sono proposizioni tautologiche"
    ],
    spiegazione: "Se $P \\lor Q$ è falsa, allora per la tavola di verità della disgiunzione deve essere $P = F$ e $Q = F$. Di conseguenza $\\neg P = V$ e $\\neg Q = V$, per cui la loro congiunzione $\\neg P \\land \\neg Q$ è $V \\land V = V$ (Vero). Questo illustra direttamente la legge di De Morgan $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$.",
    fonte: "Lotto L1 del progetto — L1-47 (ID 684)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 685,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le premesse:\n1. «Tutti i soci del Circolo Nautico sanno nuotare»;\n2. «Valerio è un socio del Circolo Nautico».\nQuale affermazione rappresenta una deduzione corretta e necessaria?",
    rispostaCorretta: "Valerio sa nuotare",
    risposteErrate: [
      "Tutti coloro che sanno nuotare sono soci del Circolo Nautico",
      "Chi non è socio del Circolo Nautico non sa nuotare",
      "Valerio è l’unico socio del Circolo Nautico che sa nuotare",
      "Se una persona sa nuotare, allora si chiama Valerio"
    ],
    spiegazione: "Dall’enunciato universale $\\forall x (S(x) \\to N(x))$ e dall’istanziazione $S(\\text{Valerio})$, segue per Modus Ponens universale che $N(\\text{Valerio})$, ovvero che Valerio sa nuotare.",
    fonte: "Lotto L1 del progetto — L1-48 (ID 685)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 686,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In logica proposizionale classica, per la proprietà di verità vacua dell’implicazione materiale, se sappiamo che la proposizione antecedente $P$ è FALSA, quale valore di verità assume l’implicazione $P \\to Q$?",
    rispostaCorretta: "L’implicazione $P \\to Q$ è sicuramente VERA, indipendentemente dal valore di verità (vero o falso) assunto dal conseguente $Q$",
    risposteErrate: [
      "L’implicazione $P \\to Q$ è sicuramente FALSA",
      "L’implicazione $P \\to Q$ è vera solo se anche il conseguente $Q$ è falso",
      "L’implicazione $P \\to Q$ è vera solo se il conseguente $Q$ è vero",
      "Il valore di verità dell’implicazione è indeterminato e non calcolabile senza conoscere $Q$"
    ],
    spiegazione: "In virtù della tavola di verità dell’implicazione materiale classica, quando l’antecedente $P$ è falso ($F$), l’enunciato condizionale è considerato vacuamente vero ($F \\to V = V$ e $F \\to F = V$). Pertanto, la falsità della premessa rende l’implicazione $P \\to Q$ sempre vera indipendentemente dal valore assunto da $Q$.",
    fonte: "Lotto L1 del progetto — L1-49 (ID 686)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 687,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano date le seguenti tre premesse vere:\n1. «Se piove ($P$), allora prendo l’autobus ($A$)»;\n2. «Se prendo l’autobus ($A$), allora arrivo puntuale al lavoro ($L$)»;\n3. «Oggi NON sono arrivato puntuale al lavoro ($\\neg L$)».\nQuale conclusione segue logicamente in modo necessario e inconfutabile?",
    rispostaCorretta: "Oggi non piove ($\\neg P$)",
    risposteErrate: [
      "Oggi piove ($P$)",
      "Oggi ho preso l’autobus ($A$)",
      "Oggi sono arrivato in ritardo perché c’era traffico",
      "Non è possibile trarre alcuna conclusione meteorologica"
    ],
    spiegazione: "1) Dalle premesse 1 e 2, per transitività (sillogismo ipotetico) si ha $P \\to L$ («Se piove, arrivo puntuale»). 2) Dalla premessa 3 sappiamo che $\\neg L$ («Non sono arrivato puntuale»). 3) Applicando il *Modus Tollens* a $P \\to L$ e $\\neg L$, otteniamo con assoluta certezza logica $\\neg P$, ossia «Oggi non piove».",
    fonte: "Lotto L1 del progetto — L1-50 (ID 687)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  }
,
  {
    id: 688,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "In logica formale, che cosa si intende quando si afferma che la condizione $P$ è «sufficiente» per il verificarsi dell’evento $Q$?",
    rispostaCorretta: "Che il verificarsi di $P$ garantisce con certezza assoluta il verificarsi di $Q$ (ossia vale l’implicazione $P \\to Q$)",
    risposteErrate: [
      "Che $Q$ non può verificarsi in nessun caso se non si è prima verificato $P$",
      "Che $P$ e $Q$ devono obbligatoriamente verificarsi sempre e solo contemporaneamente",
      "Che il verificarsi di $Q$ rende impossibile il verificarsi di $P$",
      "Che $P$ è l’unica causa possibile capace di produrre l’evento $Q$"
    ],
    spiegazione: "Affermare che $P$ è condizione sufficiente per $Q$ significa che ogni volta che $P$ è vera, anche $Q$ è necessariamente vera ($P \\to Q$). Ciò non esclude che $Q$ possa verificarsi anche in assenza di $P$ per altre vie (quindi $P$ non è necessariamente una condizione necessaria).",
    fonte: "Lotto L2 del progetto — L2-01 (ID 688)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 689,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In logica formale, che cosa esprime l’affermazione: «La condizione $Q$ è *necessaria* per il verificarsi di $P$»?",
    rispostaCorretta: "Che se $Q$ non si verifica, allora $P$ non può in alcun modo verificarsi (ossia $\\neg Q \\to \\neg P$, equivalente a $P \\to Q$)",
    risposteErrate: [
      "Che il verificarsi di $Q$ è sufficiente a garantire da solo il verificarsi di $P$",
      "Che ogni volta che si verifica $Q$, si verifica automaticamente anche $P$",
      "Che $P$ e $Q$ sono due eventi tra loro mutuamente esclusivi e incompatibili",
      "Che $Q$ si verifica solo ed esclusivamente quando $P$ è falsa"
    ],
    spiegazione: "Una condizione $Q$ è necessaria per $P$ se la sua presenza è indispensabile affinché $P$ possa sussistere: in assenza di $Q$, $P$ non può accadere ($\\neg Q \\to \\neg P$). Per contrapposizione, ciò equivale alla forma condizionale $P \\to Q$.",
    fonte: "Lotto L2 del progetto — L2-02 (ID 689)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 690,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un sistema di accreditamento formale sono stabilite tre condizioni sufficienti alternative e indipendenti per ottenere la qualifica «Special» ($S$):\n1. «Aver superato il test teorico $A$ è sufficiente per ottenere la qualifica $S$ ($A \\to S$)»;\n2. «Aver completato il progetto pratico $B$ è sufficiente per ottenere la qualifica $S$ ($B \\to S$)»;\n3. «Aver maturato la certificazione esterna $C$ è sufficiente per ottenere la qualifica $S$ ($C \\to S$)».\nSapendo che un candidato NON ha superato il test teorico $A$ ($\\neg A$), quale conclusione segue necessariamente sul piano logico?",
    rispostaCorretta: "Non è possibile escludere il candidato dalla qualifica $S$, poiché potrebbe comunque ottenerla tramite il progetto $B$ o la certificazione $C$ (la condizione $A$ è sufficiente ma non necessaria)",
    risposteErrate: [
      "Il candidato non potrà in nessun caso conseguire la qualifica $S$",
      "Il candidato consegue automaticamente la qualifica $S$ grazie agli altri requisiti",
      "Il candidato deve obbligatoriamente possedere sia il requisito $B$ sia il requisito $C$",
      "La regola iniziale $A \\to S$ risulta invalidata e contraddittoria"
    ],
    spiegazione: "La struttura logica complessiva è $(A \\lor B \\lor C) \\to S$. Sapere che $\\neg A$ è vero elimina solo una delle tre vie sufficienti, ma non esclude che $B$ o $C$ possano essere veri. Concludere categoricamente $\\neg S$ da $\\neg A$ costituirebbe un’indebita assunzione di necessità per una condizione puramente sufficiente.",
    fonte: "Lotto L2 del progetto — L2-03 (ID 690)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 691,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un protocollo di sicurezza è stabilito che: «Il possesso di una chiave crittografica attiva ($K$) è condizione necessaria per autorizzare una transazione ($T$)». Quale delle seguenti situazioni reali costituisce una violazione diretta e inequivocabile di questa regola formale?",
    rispostaCorretta: "Una transazione viene autorizzata ($T$) pur essendo priva di una chiave crittografica attiva ($\\neg K$)",
    risposteErrate: [
      "Un utente possiede una chiave crittografica attiva ($K$) ma la sua transazione non viene autorizzata ($\\neg T$)",
      "Un utente privo di chiave crittografica ($\\neg K$) non vede autorizzata la propria transazione ($\\neg T$)",
      "Una chiave crittografica attiva ($K$) viene utilizzata per autorizzare con successo una transazione ($T$)",
      "Tutte le chiavi crittografiche vengono revocate contemporaneamente"
    ],
    spiegazione: "Una condizione necessaria per $T$ si formalizza come $T \\to K$ (ossia $\\neg K \\to \\neg T$). L’unico caso in cui un’implicazione materiale $T \\to K$ risulta falsa (violata) si verifica quando l’antecedente è vero e il conseguente è falso, ossia quando una transazione viene autorizzata in assenza di chiave ($T \\land \\neg K$). Il caso di chiave presente senza autorizzazione ($K \\land \\neg T$) non viola la regola, poiché la chiave è necessaria ma non necessariamente sufficiente.",
    fonte: "Lotto L2 del progetto — L2-04 (ID 691)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 692,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri l’enunciato: «Per attivare la garanzia convenzionale di un dispositivo *basta* conservare la ricevuta d’acquisto». Come si traduce rigorosamente in termini di condizioni logiche questa affermazione?",
    rispostaCorretta: "Conservare la ricevuta d’acquisto è una condizione sufficiente per attivare la garanzia",
    risposteErrate: [
      "Conservare la ricevuta d’acquisto è una condizione necessaria ma non sufficiente per attivare la garanzia",
      "La ricevuta d’acquisto è l’unico documento accettato per qualsiasi reclamo",
      "Attivare la garanzia è una condizione sufficiente per conservare la ricevuta d’acquisto",
      "Conservare la ricevuta d’acquisto rende impossibile l’attivazione della garanzia"
    ],
    spiegazione: "Nel linguaggio naturale, l’avverbio o verbo «bastare / è sufficiente» esprime formalmente una condizione sufficiente: $\\text{Ricevuta} \\to \\text{Attivazione Garanzia}$. Non implica che sia l’unica modalità possibile (non è necessariamente condizione necessaria).",
    fonte: "Lotto L2 del progetto — L2-05 (ID 692)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 693,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la prescrizione: «Per essere ammessi alla prova orale occorre aver ottenuto almeno 18 punti nella prova scritta». Qual è il corretto significato logico di questa affermazione?",
    rispostaCorretta: "Aver ottenuto almeno 18 punti allo scritto è condizione necessaria per l’ammissione all’orale",
    risposteErrate: [
      "Aver ottenuto almeno 18 punti allo scritto è condizione sufficiente per essere promossi all’esame finale",
      "Chiunque ottenga 18 punti allo scritto è automaticamente esentato dal sostenere la prova orale",
      "Ottenere meno di 18 punti allo scritto garantisce l’ammissione con riserva alla prova orale",
      "L’ammissione all’orale è condizione sufficiente per ottenere 30 punti allo scritto"
    ],
    spiegazione: "I termini «occorre», «è richiesto», «è indispensabile» esprimono una condizione necessaria: $\\text{Ammesso Orale} \\to \\text{Punteggio Scritto} \\ge 18$. Se non si ottengono almeno 18 punti allo scritto, non si può accedere all’orale.",
    fonte: "Lotto L2 del progetto — L2-06 (ID 693)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 694,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano date le seguenti premesse assunte come vere:\n1. «Il verificarsi dell’evento $A$ è condizione sufficiente per il verificarsi dell’evento $B$»;\n2. «L’evento $B$ NON si è verificato».\nQuale conclusione logica segue necessariamente?",
    rispostaCorretta: "L’evento $A$ non si è verificato",
    risposteErrate: [
      "L’evento $A$ si è verificato con certezza",
      "L’evento $B$ è condizione necessaria per $A$, ma $A$ può comunque verificarsi",
      "Non è possibile trarre alcuna conclusione circa il verificarsi dell’evento $A$",
      "L’evento $A$ e l’evento $B$ si sono verificati entrambi simultaneamente"
    ],
    spiegazione: "Dalla premessa 1 abbiamo l’implicazione $A \\to B$. Dalla premessa 2 sappiamo che $\\neg B$ è vero. Applicando la regola d’inferenza classica del *Modus Tollens* (o contronominale $\\neg B \\to \\neg A$), si deduce in modo inoppugnabile che $\\neg A$, ossia che l’evento $A$ non si è verificato.",
    fonte: "Lotto L2 del progetto — L2-07 (ID 694)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 695,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assumano come vere le due affermazioni:\n1. «Avere compiuto 25 anni è condizione necessaria per essere eletti al Senato del Paese Fantasia»;\n2. «Dario ha compiuto 28 anni ed è cittadino del Paese Fantasia».\nQuale deduzione è logicamente corretta?",
    rispostaCorretta: "Dario possiede il requisito anagrafico necessario, ma non si può concludere con certezza che sia stato eletto al Senato",
    risposteErrate: [
      "Dario è sicuramente un senatore eletto del Paese Fantasia",
      "Dario non potrà mai essere eletto al Senato del Paese Fantasia",
      "L’età di 25 anni è condizione sufficiente per l’elezione automatica al Senato",
      "Tutti i cittadini del Paese Fantasia che hanno più di 25 anni sono senatori"
    ],
    spiegazione: "La premessa stabilisce una condizione necessaria: $\\text{Senatore} \\to \\text{Età} \\ge 25$. Dario soddisfa la condizione necessaria (ha 28 anni), ma la condizione necessaria non è sufficiente a garantire l’elezione (occorre candidarsi, ricevere voti, ecc.). Dunque la sua elezione non è una conseguenza logica certa.",
    fonte: "Lotto L2 del progetto — L2-08 (ID 695)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 696,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In teoria degli insiemi, sia $A$ un sottoinsieme proprio di $B$ ($A \\subset B$, con $A \\neq \\emptyset$ e $A \\neq B$). Quale delle seguenti affermazioni descrive correttamente le relazioni di necessità e sufficienza tra l’appartenenza a $A$ e l’appartenenza a $B$?",
    rispostaCorretta: "Appartenere ad $A$ è condizione sufficiente per appartenere a $B$, mentre appartenere a $B$ è condizione necessaria per appartenere ad $A$",
    risposteErrate: [
      "Appartenere ad $A$ è condizione necessaria e sufficiente per appartenere a $B$",
      "Appartenere a $B$ è condizione sufficiente per appartenere ad $A$",
      "Appartenere ad $A$ è condizione necessaria ma non sufficiente per appartenere a $B$",
      "Nessun elemento appartenente a $A$ può appartenere anche all’insieme $B$"
    ],
    spiegazione: "Dato che $A \\subset B$, ogni elemento di $A$ appartiene a $B$ ($x \\in A \\implies x \\in B$), quindi essere in $A$ è condizione sufficiente per essere in $B$. Al contempo, se un elemento non appartiene a $B$, non può appartenere ad $A$ ($x \\notin B \\implies x \\notin A$), rendendo l’appartenenza a $B$ condizione necessaria per appartenere ad $A$.",
    fonte: "Lotto L2 del progetto — L2-09 (ID 696)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 697,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un candidato afferma: «Sapendo che piovere è condizione sufficiente affinché il prato sia bagnato, ne deduco che se non piove il prato non può essere bagnato». Quale errore logico è stato commesso in questa deduzione?",
    rispostaCorretta: "È stata trattata una condizione semplicemente sufficiente come se fosse anche una condizione necessaria",
    risposteErrate: [
      "È stata applicata correttamente la regola della contronominale",
      "È stata confusa una proposizione falsa con una tautologia",
      "È stata invertita la congiunzione con la disgiunzione inclusiva",
      "Nessun errore: la deduzione del candidato è logicamente inoppugnabile"
    ],
    spiegazione: "L’affermazione «Piove $\\implies$ Prato bagnato» stabilisce la sufficienza della pioggia. Sostenere che senza pioggia il prato non possa bagnarsi ($\\neg \\text{Piove} \\implies \\neg \\text{Bagnato}$) confonde la sufficienza con la necessità, ignorando che il prato potrebbe essere bagnato da irrigatori o idranti.",
    fonte: "Lotto L2 del progetto — L2-10 (ID 697)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 698,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la definizione formale: «Un apparato elettronico opera in modalità Super-Eco ($E$) se e solo se la tensione di alimentazione è inferiore a 12 Volt ($V$)». In base a questa sola definizione ($E \\leftrightarrow V$), quale delle seguenti combinazioni di stati operativi è logicamente IMPOSSIBILE?",
    rispostaCorretta: "L’apparato opera in modalità Super-Eco ($E$) con tensione non inferiore a 12 Volt ($\\neg V$), oppure non opera in modalità Super-Eco ($\\neg E$) con tensione inferiore a 12 Volt ($V$)",
    risposteErrate: [
      "L’apparato opera in modalità Super-Eco ($E$) con tensione pari a 9 Volt ($V$)",
      "L’apparato non opera in modalità Super-Eco ($\\neg E$) con tensione pari a 24 Volt ($\\neg V$)",
      "La tensione di alimentazione viene mantenuta a 15 Volt ($\\neg V$) e l’apparato non opera in modalità Super-Eco ($\\neg E$)",
      "La tensione di alimentazione scende a 5 Volt ($V$) e l’apparato si attiva in modalità Super-Eco ($E$)"
    ],
    spiegazione: "Il bicondizionale $E \\leftrightarrow V$ è vero se e solo se $E$ e $V$ hanno lo stesso valore di verità ($V \\land V$ oppure $F \\land F$). I casi discordi ($E \\land \\neg V$ e $\\neg E \\land V$) rendono falsa la relazione e sono pertanto logicamente impossibili nel sistema dato. Tutte le altre quattro alternative descrivono stati operativi perfettamente conformi e compatibili con la definizione.",
    fonte: "Lotto L2 del progetto — L2-11 (ID 698)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 699,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un sistema formale di controllo accessi è definita la regola: «Una richiesta è autorizzata *se e solo se* il certificato digitale è valido». Quale delle seguenti affermazioni è formalmente corretta?",
    rispostaCorretta: "La validità del certificato digitale è condizione necessaria e sufficiente per l’autorizzazione della richiesta",
    risposteErrate: [
      "La validità del certificato digitale è condizione sufficiente ma non necessaria per l’autorizzazione",
      "La validità del certificato digitale è condizione necessaria ma non sufficiente per l’autorizzazione",
      "Una richiesta può essere autorizzata anche se il certificato digitale non è valido",
      "Se una richiesta non è autorizzata, il certificato digitale è sicuramente valido"
    ],
    spiegazione: "La locuzione «se e solo se» esprime per definizione la doppia implicazione (equivalenza logica): $\\text{Autorizzata} \\leftrightarrow \\text{Certificato Valido}$. Ciò rende la validità del certificato condizione sia necessaria sia sufficiente per l’autorizzazione.",
    fonte: "Lotto L2 del progetto — L2-12 (ID 699)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 700,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la proposizione: «Un poligono regolare è un triangolo equilatero se e solo se ha esattamente tre lati». Sapendo che il poligono $K$ NON ha esattamente tre lati, quale conclusione segue necessariamente?",
    rispostaCorretta: "Il poligono $K$ non è un triangolo equilatero",
    risposteErrate: [
      "Il poligono $K$ è sicuramente un quadrato",
      "Il poligono $K$ potrebbe comunque essere un triangolo equilatero",
      "Non è possibile stabilire la natura del poligono $K$",
      "Tutti i poligoni regolari hanno più di tre lati"
    ],
    spiegazione: "Data la relazione $T \\leftrightarrow L_3$, l’equivalenza logica impone che $T$ e $L_3$ abbiano sempre lo stesso valore di verità. Poiché $L_3$ è falsa (non ha tre lati), anche $T$ deve essere necessariamente falsa (il poligono non è un triangolo equilatero).",
    fonte: "Lotto L2 del progetto — L2-13 (ID 700)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 701,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Date due proposizioni $P$ e $Q$ legate dalla relazione di equivalenza $P \\leftrightarrow Q$, se si constata che $Q$ è VERA, cosa si può dedurre con certezza su $P$?",
    rispostaCorretta: "$P$ è necessariamente VERA",
    risposteErrate: [
      "$P$ è necessariamente FALSA",
      "$P$ può essere sia vera sia falsa",
      "Il valore di verità di $P$ dipende da una terza variabile non specificata",
      "$P$ assume valore falso solo se $Q$ è una tautologia"
    ],
    spiegazione: "La tavola di verità del bicondizionale $P \\leftrightarrow Q$ è vera solo quando $P$ e $Q$ concordano. Se $P \\leftrightarrow Q$ è vera e $Q$ è vera, l’unico valore possibile per $P$ affinché il bicondizionale resti vero è $P = \\text{Vero}$.",
    fonte: "Lotto L2 del progetto — L2-14 (ID 701)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 702,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale delle seguenti terne di enunciati distingue correttamente il significato formale delle locuzioni «se», «solo se» e «se e solo se» tra due proposizioni $A$ e $B$?",
    rispostaCorretta: "«$A$ se $B$» equivale a $B \\to A$; «$A$ solo se $B$» equivale a $A \\to B$; «$A$ se e solo se $B$» equivale a $A \\leftrightarrow B$",
    risposteErrate: [
      "«$A$ se $B$» equivale a $A \\to B$; «$A$ solo se $B$» equivale a $B \\to A$; «$A$ se e solo se $B$» equivale a $A \\leftrightarrow B$",
      "«$A$ se $B$» equivale a $A \\land B$; «$A$ solo se $B$» equivale a $A \\lor B$; «$A$ se e solo se $B$» equivale a $A \\to B$",
      "«$A$ se $B$» equivale a $B \\to A$; «$A$ solo se $B$» equivale a $\\neg A \\to B$; «$A$ se e solo se $B$» equivale a $A \\oplus B$",
      "Non vi è alcuna differenza logica formale tra «$A$ se $B$» e «$A$ solo se $B$»"
    ],
    spiegazione: "In logica formale: 1) «$A$ se $B$» indica che $B$ è sufficiente per $A$ ($B \\to A$); 2) «$A$ solo se $B$» indica che $B$ è necessaria per $A$ ($A \\to B$); 3) «$A$ se e solo se $B$» unisce entrambe le direzioni ($A \\leftrightarrow B$).",
    fonte: "Lotto L2 del progetto — L2-15 (ID 702)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 703,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "In un sistema assiomatico ipotetico valgono le seguenti tre regole formali:\n1. Se $A$ e $B$ sono entrambi veri, allora $C$ è vero ($A \\land B \\to C$);\n2. Se $C$ è vero, allora $A$ è vero ($C \\to A$);\n3. Se $C$ è vero, allora $B$ è vero ($C \\to B$).\nQuale relazione logica esatta sussiste tra la congiunzione $A \\land B$ e la proposizione $C$?",
    rispostaCorretta: "$A \\land B$ è condizione necessaria e sufficiente per $C$ (ossia $(A \\land B) \\leftrightarrow C$)",
    risposteErrate: [
      "$A \\land B$ è condizione sufficiente ma non necessaria per $C$",
      "$A \\land B$ è condizione necessaria ma non sufficiente per $C$",
      "$A \\land B$ è incompatibile con $C$",
      "Nessuna relazione logica può essere stabilita tra $A \\land B$ e $C$"
    ],
    spiegazione: "Dalla regola 1 abbiamo la sufficienza: $(A \\land B) \\to C$. Dalle regole 2 e 3 abbiamo che se $C$ è vero, sia $A$ sia $B$ sono veri, quindi $C \\to (A \\land B)$, che rappresenta la necessità di $(A \\land B)$ per $C$. Essendo vere entrambe le implicazioni dirette e inverse, $(A \\land B) \\leftrightarrow C$ costituisce una condizione necessaria e sufficiente.",
    fonte: "Lotto L2 del progetto — L2-16 (ID 703)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 704,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Si assuma come vera la definizione: «In un insieme di numeri interi, un numero $n$ è pari se e solo se è divisibile per 2». Quale conclusione è direttamente equivalente a questa definizione?",
    rispostaCorretta: "La divisibilità per 2 è condizione necessaria e sufficiente affinché un numero intero sia pari",
    risposteErrate: [
      "La divisibilità per 2 è condizione sufficiente ma non necessaria per essere pari",
      "La divisibilità per 2 è condizione necessaria ma non sufficiente per essere pari",
      "Esistono numeri pari che non sono divisibili per 2",
      "Un numero intero è pari solo se è divisibile per 4"
    ],
    spiegazione: "La locuzione «se e solo se» stabilisce per definizione che la proprietà di essere divisibile per 2 è contemporaneamente necessaria e sufficiente per appartenere all’insieme dei numeri interi pari.",
    fonte: "Lotto L2 del progetto — L2-17 (ID 704)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 705,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Che cosa occorre mostrare per confutare (smentire) la tesi secondo cui la condizione $P$ sarebbe «necessaria e sufficiente» per $Q$?",
    rispostaCorretta: "È sufficiente trovare un caso in cui si verifichi $P$ ma non $Q$, oppure un caso in cui si verifichi $Q$ ma non $P$",
    risposteErrate: [
      "Occorre dimostrare che $P$ e $Q$ non si verificano mai contemporaneamente in nessun caso",
      "Occorre dimostrare che sia $P$ sia $Q$ sono sempre entrambe false in ogni circostanza",
      "È necessario mostrare che $P$ implica $\\neg Q$",
      "Non è possibile confutare una condizione necessaria e sufficiente"
    ],
    spiegazione: "Poiché $P \\leftrightarrow Q$ equivale a $(P \\to Q) \\land (Q \\to P)$, per smentirla basta confutare almeno una delle due implicazioni: o mostrando che $P$ non è sufficiente (esiste $P \\land \\neg Q$) oppure mostrando che $P$ non è necessaria (esiste $\\neg P \\land Q$).",
    fonte: "Lotto L2 del progetto — L2-18 (ID 705)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 706,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Nel linguaggio formale, a quale formula logica corrisponde esattamente la proposizione: «Il semaforo emette luce rossa ($R$) se la centralina rileva un guasto ($G$)»?",
    rispostaCorretta: "$G \\to R$",
    risposteErrate: [
      "$R \\to G$",
      "$R \\leftrightarrow G$",
      "$\\neg G \\to \\neg R$",
      "$R \\land G$"
    ],
    spiegazione: "La struttura «$A$ se $B$» pone $B$ come antecedente (premessa/condizione sufficiente) e $A$ come conseguente. Dunque «$R$ se $G$» si formalizza rigorosamente come $G \\to R$.",
    fonte: "Lotto L2 del progetto — L2-19 (ID 706)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 707,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Dato l’enunciato: «Un sensore di pressione emette un segnale d’allarme ($A$) *solo se* la pressione interna supera la soglia critica ($S$)», quale delle seguenti deduzioni è logicamente valida e necessaria?",
    rispostaCorretta: "Se la pressione interna non supera la soglia critica ($\\neg S$), allora il sensore non emette il segnale d’allarme ($\\neg A$)",
    risposteErrate: [
      "Se la pressione interna supera la soglia critica ($S$), allora il sensore emette sicuramente il segnale d’allarme ($A$)",
      "Se il sensore non emette il segnale d’allarme ($\\neg A$), allora la pressione interna è sicuramente sotto la soglia critica ($\\neg S$)",
      "Superare la soglia critica ($S$) è condizione sufficiente affinché il sensore emetta l’allarme ($A$)",
      "Il sensore emette il segnale d’allarme in modo casuale e continuo"
    ],
    spiegazione: "La locuzione «$A$ solo se $S$» si formalizza rigorosamente come $A \\to S$ ($S$ è condizione necessaria per $A$). La sua contronominale logicamente equivalente è $\\neg S \\to \\neg A$: se la pressione non supera la soglia critica, l’allarme non può essere emesso. La formula $S \\to A$ rappresenta il converso dell’implicazione originaria (non equivalente ad essa) e scambia indebitamente la condizione necessaria con una condizione sufficiente; inferire la conclusione $A$ dalla sola premessa $S$ costituirebbe inoltre la fallacia dell’affermazione del conseguente.",
    fonte: "Lotto L2 del progetto — L2-20 (ID 707)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 708,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la relazione logica tra i due enunciati: 1. «La sirena suona se c’è fumo» ($F \\to S$); 2. «La sirena suona solo se c’è fumo» ($S \\to F$)?",
    rispostaCorretta: "Il primo enunciato stabilisce che la presenza di fumo è condizione sufficiente per il suono della sirena; il secondo stabilisce che la presenza di fumo è condizione necessaria",
    risposteErrate: [
      "I due enunciati hanno esattamente lo stesso significato logico e sono reciprocamente equivalenti",
      "Il primo enunciato stabilisce una condizione necessaria, mentre il secondo stabilisce una condizione sufficiente",
      "Il primo enunciato esprime un bicondizionale, mentre il secondo esprime una disgiunzione",
      "I due enunciati sono entrambi falsi per contraddizione logica interna"
    ],
    spiegazione: "«$S$ se $F$» significa $F \\to S$ ($F$ è sufficiente per $S$). «$S$ solo se $F$» significa $S \\to F$ ($F$ è necessaria per $S$). Si tratta di due implicazioni con orientamento opposto (una è la conversa dell’altra).",
    fonte: "Lotto L2 del progetto — L2-21 (ID 708)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 709,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Data la proposizione condizionale $P \\to Q$, quale tra le seguenti formule ha SEMPRE e rigorosamente lo stesso identico valore di verità di $P \\to Q$ in qualsiasi assegnazione di verità delle variabili $P$ e $Q$?",
    rispostaCorretta: "La contronominale $\\neg Q \\to \\neg P$ (mentre il converso $Q \\to P$ e l’inverso $\\neg P \\to \\neg Q$ non sono logicamente equivalenti a $P \\to Q$)",
    risposteErrate: [
      "Il converso $Q \\to P$",
      "L’inverso $\\neg P \\to \\neg Q$",
      "La negazione congiunta $\\neg P \\land \\neg Q$",
      "La disgiunzione esclusiva $P \\oplus Q$"
    ],
    spiegazione: "Nelle trasformazioni condizionali, l’unica forma logicamente equivalente all’implicazione originaria $P \\to Q$ è la contronominale $\\neg Q \\to \\neg P$. Il converso ($Q \\to P$) e l’inverso ($\\neg P \\to \\neg Q$) sono equivalenti tra loro, ma NON equivalgono all’implicazione di partenza.",
    fonte: "Lotto L2 del progetto — L2-22 (ID 709)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 710,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Data la proposizione condizionale $P \\to Q$, quale formula ne rappresenta il «converso» e quale relazione di equivalenza sussiste con $P \\to Q$?",
    rispostaCorretta: "Il converso è $Q \\to P$, e NON è logicamente equivalente a $P \\to Q$",
    risposteErrate: [
      "Il converso è $\\neg Q \\to \\neg P$, ed è logicamente equivalente a $P \\to Q$",
      "Il converso è $\\neg P \\to \\neg Q$, ed è logicamente equivalente a $P \\to Q$",
      "Il converso è $P \\leftrightarrow Q$, ed è sempre vero",
      "Il converso è $\\neg P \\lor Q$, ed è logicamente equivalente a $P \\to Q$"
    ],
    spiegazione: "Il converso di $P \\to Q$ è $Q \\to P$, ottenuto invertendo l’antecedente con il conseguente. In generale, $P \\to Q \\not\\equiv Q \\to P$; confonderli costituisce la fallacia dell’affermazione del conseguente.",
    fonte: "Lotto L2 del progetto — L2-23 (ID 710)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 711,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Data la proposizione condizionale $P \\to Q$, quale formula ne rappresenta l’«inverso» e a quale altra forma condizionale esso risulta logicamente equivalente?",
    rispostaCorretta: "L’inverso è $\\neg P \\to \\neg Q$, ed è logicamente equivalente al converso ($Q \\to P$)",
    risposteErrate: [
      "L’inverso è $\\neg Q \\to \\neg P$, ed è logicamente equivalente all’implicazione originale ($P \\to Q$)",
      "L’inverso è $Q \\to P$, ed è logicamente equivalente a $P \\to Q$",
      "L’inverso è $P \\land \\neg Q$, ed è logicamente equivalente alla negazione di $P$",
      "L’inverso è $\\neg P \\lor \\neg Q$, ed è una tautologia"
    ],
    spiegazione: "L’inverso di $P \\to Q$ è $\\neg P \\to \\neg Q$ (si negano antecedente e conseguente senza scambiarli). L’inverso non è equivalente all’implicazione originaria $P \\to Q$, ma è la contronominale del converso $Q \\to P$, ed è quindi logicamente equivalente a quest’ultimo ($\\neg P \\to \\neg Q \\equiv Q \\to P$).",
    fonte: "Lotto L2 del progetto — L2-24 (ID 711)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 712,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale delle seguenti coppie di proposizioni condizionali è composta da due formule tra loro logicamente equivalenti?",
    rispostaCorretta: "Il converso ($Q \\to P$) e l’inverso ($\\neg P \\to \\neg Q$)",
    risposteErrate: [
      "L’implicazione diretta ($P \\to Q$) e il converso ($Q \\to P$)",
      "L’implicazione diretta ($P \\to Q$) e l’inverso ($\\neg P \\to \\neg Q$)",
      "La contronominale ($\\neg Q \\to \\neg P$) e il converso ($Q \\to P$)",
      "La contronominale ($\\neg Q \\to \\neg P$) e l’inverso ($\\neg P \\to \\neg Q$)"
    ],
    spiegazione: "In un quadrato di relazioni condizionali: 1) L’implicazione diretta ($P \\to Q$) è equivalente alla sua contronominale ($\\neg Q \\to \\neg P$); 2) Il converso ($Q \\to P$) è equivalente all’inverso ($\\neg P \\to \\neg Q$).",
    fonte: "Lotto L2 del progetto — L2-25 (ID 712)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 713,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la regola: «Se un file è crittografato con chiave RSA ($C$), allora il suo contenuto non è leggibile in chiaro ($\\neg L$)». Quale dei seguenti enunciati ne esprime la contronominale logicamente certa?",
    rispostaCorretta: "Se il contenuto di un file è leggibile in chiaro ($L$), allora il file non è crittografato con chiave RSA ($\\neg C$)",
    risposteErrate: [
      "Se il contenuto di un file non è leggibile in chiaro ($\\neg L$), allora il file è crittografato con chiave RSA ($C$)",
      "Se un file non è crittografato con chiave RSA ($\\neg C$), allora il suo contenuto è leggibile in chiaro ($L$)",
      "Un file è crittografato con chiave RSA se e solo se non è leggibile in chiaro",
      "Tutti i file non leggibili in chiaro sono privi di crittografia RSA"
    ],
    spiegazione: "L’implicazione iniziale è $C \\to \\neg L$. La contronominale si ottiene negando e scambiando i termini: $\\neg(\\neg L) \\to \\neg C$, ossia $L \\to \\neg C$ («Se è leggibile in chiaro, allora non è crittografato con chiave RSA»).",
    fonte: "Lotto L2 del progetto — L2-26 (ID 713)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 714,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un sistema di telemetria industriale è assunta come vera la regola: «Se l’attuatore principale è bloccato ($B$), allora la telemetria registra un assorbimento di corrente anomalo ($A$)». Quale delle seguenti deduzioni NON commette alcuna fallacia logica ed è formalmente valida e inoppugnabile?",
    rispostaCorretta: "Se la telemetria non registra alcun assorbimento anomalo ($\\neg A$), allora l’attuatore principale non è bloccato ($\\neg B$)",
    risposteErrate: [
      "Se la telemetria registra un assorbimento anomalo ($A$), allora l’attuatore principale è sicuramente bloccato ($B$)",
      "Se l’attuatore principale non è bloccato ($\\neg B$), allora la telemetria non può registrare alcun assorbimento anomalo ($\\neg A$)",
      "L’assorbimento anomalo ($A$) è condizione sufficiente per il blocco dell’attuatore ($B$)",
      "Registrare un assorbimento anomalo e avere l’attuatore bloccato sono eventi incompatibili"
    ],
    spiegazione: "La premessa stabilisce $B \\to A$. L’unica inferenza valida dedotta direttamente dalla regola è la sua contronominale $\\neg A \\to \\neg B$ (Modus Tollens). Dedurre $A \\to B$ costituisce la fallacia dell’affermazione del conseguente; dedurre $\\neg B \\to \\neg A$ costituisce la fallacia della negazione dell’antecedente.",
    fonte: "Lotto L2 del progetto — L2-27 (ID 714)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 715,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In logica proposizionale, si consideri la regola formale: «L’esecuzione del processo $P$ è inibita a meno che sia presente il flag di autorizzazione $A$» (ossia: in assenza del flag $\\neg A$, il processo $P$ non può essere eseguito $\\neg P$). A quale delle seguenti formule condizionali è logicamente equivalente questa regola?",
    rispostaCorretta: "$P \\to A$ (ossia $\\neg A \\to \\neg P$: la presenza del flag $A$ è condizione necessaria per l’esecuzione di $P$)",
    risposteErrate: [
      "$A \\to P$ (il flag $A$ è condizione sufficiente per l’esecuzione automatica di $P$)",
      "$P \\land \\neg A$",
      "$\\neg P \\to \\neg A$",
      "$P \\leftrightarrow \\neg A$"
    ],
    spiegazione: "La proposizione stabilisce in modo univoco che in assenza del flag ($\\neg A$) il processo non può essere eseguito ($\\neg P$), da cui $\\neg A \\to \\neg P$. Per contronominale, $\\neg A \\to \\neg P \\equiv P \\to A$. Il flag $A$ è dunque una condizione necessaria (ma non necessariamente sufficiente) per l’esecuzione del processo $P$.",
    fonte: "Lotto L2 del progetto — L2-28 (ID 715)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 716,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la regola: «Se un candidato possiede sia la laurea in fisica ($F$) sia la conoscenza dell’inglese ($I$), allora viene ammesso al colloquio ($A$)». Sapendo che un candidato possiede la laurea in fisica ($F$) ma NON conosce l’inglese ($\\neg I$), cosa si può dedurre con certezza sulla sua ammissione ($A$)?",
    rispostaCorretta: "Non è possibile stabilire con certezza se sarà ammesso o meno al colloquio",
    risposteErrate: [
      "Il candidato non sarà sicuramente ammesso al colloquio",
      "Il candidato sarà sicuramente ammesso al colloquio",
      "Il candidato è automaticamente escluso da tutte le selezioni future",
      "La regola formale iniziale viene smentita ed è falsa"
    ],
    spiegazione: "La regola è $(F \\land I) \\to A$. La congiunzione $F \\land I$ è falsa poiché il candidato non conosce l’inglese. Con antecedente falso, l’implicazione non fornisce alcuna informazione sul valore di $A$ (il candidato potrebbe essere ammesso in base ad altri titoli previsti dal bando).",
    fonte: "Lotto L2 del progetto — L2-29 (ID 716)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 717,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la corretta contronominale dell’implicazione con condizione sufficiente congiunta $(A \\land B) \\to C$?",
    rispostaCorretta: "$\\neg C \\to (\\neg A \\lor \\neg B)$",
    risposteErrate: [
      "$\\neg C \\to (\\neg A \\land \\neg B)$",
      "$(A \\lor B) \\to \\neg C$",
      "$\\neg A \\lor \\neg B \\to C$",
      "$C \\to (A \\land B)$"
    ],
    spiegazione: "La contronominale di $P \\to Q$ è $\\neg Q \\to \\neg P$. Ponendo $P = (A \\land B)$ e $Q = C$, si ha $\\neg C \\to \\neg(A \\land B)$. Applicando la legge di De Morgan a $\\neg(A \\land B)$, otteniamo $\\neg C \\to (\\neg A \\lor \\neg B)$.",
    fonte: "Lotto L2 del progetto — L2-30 (ID 717)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 718,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la regola: «Se un articolo è in saldo ($S$) oppure è acquistato con un buono sconto ($B$), allora l’acquirente ha diritto alla spedizione gratuita ($G$)». Sapendo che un cliente NON ha diritto alla spedizione gratuita ($\\neg G$), quale conclusione è logicamente certa?",
    rispostaCorretta: "L’articolo non è in saldo e non è stato acquistato con un buono sconto ($\\neg S \\land \\neg B$)",
    risposteErrate: [
      "L’articolo non è in saldo oppure non è stato acquistato con un buono sconto ($\\neg S \\lor \\neg B$)",
      "L’articolo è in saldo ma il cliente non ha usato il buono sconto",
      "L’articolo è stato acquistato a prezzo pieno ma con spedizione aerea",
      "Non si può stabilire se l’articolo fosse o meno in saldo"
    ],
    spiegazione: "La regola è $(S \\lor B) \\to G$. Per contronominale, $\\neg G \\to \\neg(S \\lor B)$. Per la legge di De Morgan, $\\neg(S \\lor B) \\equiv \\neg S \\land \\neg B$. Dunque, in assenza di spedizione gratuita, l’articolo non è in saldo E non è stato usato il buono.",
    fonte: "Lotto L2 del progetto — L2-31 (ID 718)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 719,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è la contronominale logicamente equivalente dell’implicazione con condizione sufficiente disgiunta $(A \\lor B) \\to C$?",
    rispostaCorretta: "$\\neg C \\to (\\neg A \\land \\neg B)$",
    risposteErrate: [
      "$\\neg C \\to (\\neg A \\lor \\neg B)$",
      "$(A \\land B) \\to \\neg C$",
      "$\\neg A \\land \\neg B \\to \\neg C$",
      "$C \\to (A \\lor B)$"
    ],
    spiegazione: "La contronominale di $(A \\lor B) \\to C$ è $\\neg C \\to \\neg(A \\lor B)$. Applicando la legge di De Morgan alla disgiunzione negata, $\\neg(A \\lor B) \\equiv \\neg A \\land \\neg B$. Quindi otteniamo $\\neg C \\to (\\neg A \\land \\neg B)$.",
    fonte: "Lotto L2 del progetto — L2-32 (ID 719)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 720,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "In un protocollo di sicurezza industriale si stabilisce che: «Affinché il reattore possa essere avviato ($R$), è necessario che siano attivi sia il sistema di raffreddamento primario ($C_1$) sia il sistema di raffreddamento ausiliario ($C_2$)». Se durante un controllo si rileva che il sistema ausiliario $C_2$ è GUASTO ($\\neg C_2$), quale conclusione segue necessariamente?",
    rispostaCorretta: "Il reattore non può essere avviato ($\\neg R$), indipendentemente dallo stato del sistema primario $C_1$",
    risposteErrate: [
      "Il reattore può essere avviato purché il sistema primario $C_1$ funzioni a potenza doppia",
      "Il reattore non può essere avviato solo se anche il sistema primario $C_1$ risulta guasto",
      "Il sistema primario $C_1$ è sicuramente guasto a sua volta",
      "Non si può dedurre alcunché sullo stato di avvio del reattore"
    ],
    spiegazione: "La condizione necessaria multipla si formalizza come $R \\to (C_1 \\land C_2)$. Per contronominale, $\\neg(C_1 \\land C_2) \\to \\neg R$, ossia $(\\neg C_1 \\lor \\neg C_2) \\to \\neg R$. Poiché $\\neg C_2$ è vero, la disgiunzione è soddisfatta e ne consegue inconfutabilmente che il reattore non può essere avviato ($\\neg R$).",
    fonte: "Lotto L2 del progetto — L2-33 (ID 720)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 721,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Siano date le due regole: 1. «Se piove ($P$), allora la partita viene rinviata ($R$)»; 2. «Se c’è nebbia fitta ($N$), allora la partita viene rinviata ($R$)». Quale singola formula riassume correttamente queste due condizioni sufficienti alternative?",
    rispostaCorretta: "$(P \\lor N) \\to R$",
    risposteErrate: [
      "$(P \\land N) \\to R$",
      "$R \\to (P \\land N)$",
      "$(P \\lor N) \\leftrightarrow R$",
      "$\\neg P \\land \\neg N \\to R$"
    ],
    spiegazione: "Avendo $P \\to R$ e $N \\to R$, per le proprietà dell’implicazione vale l’equivalenza $(P \\to R) \\land (N \\to R) \\equiv (P \\lor N) \\to R$. Dunque basta che si verifichi almeno uno tra pioggia o nebbia affinché la partita sia rinviata.",
    fonte: "Lotto L2 del progetto — L2-34 (ID 721)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 722,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si assuma come vera la proposizione: «Se un veicolo ottiene l’omologazione ecologica ($E$), allora deve avere emissioni di ossidi di azoto inferiori alla soglia ($N$) ed emissioni di particolato inferiori alla soglia ($P$)». Sapendo che un veicolo presenta emissioni di particolato SUPERIORI alla soglia ($\\neg P$), cosa si può dedurre con certezza?",
    rispostaCorretta: "Il veicolo non ha ottenuto l’omologazione ecologica ($\\neg E$)",
    risposteErrate: [
      "Il veicolo ha ottenuto l’omologazione ecologica purché rispetti la soglia $N$",
      "Il veicolo ha sicuramente emissioni di ossidi di azoto superiori alla soglia ($\\neg N$)",
      "Non si può stabilire se il veicolo abbia o meno ottenuto l’omologazione ecologica",
      "Tutti i veicoli con emissioni di particolato superiori alla soglia sono alimentati a gasolio"
    ],
    spiegazione: "L’implicazione è $E \\to (N \\land P)$. La contronominale è $\\neg(N \\land P) \\to \\neg E \\equiv (\\neg N \\lor \\neg P) \\to \\neg E$. Poiché $\\neg P$ è vero, la condizione d’innesco $(\\neg N \\lor \\neg P)$ è soddisfatta, da cui segue necessariamente $\\neg E$ (nessuna omologazione).",
    fonte: "Lotto L2 del progetto — L2-35 (ID 722)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 723,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la regola vera: «Se una transazione finanziaria viene segnalata come sospetta ($S$), allora deve essere sottoposta a verifica manuale ($V$) oppure essere bloccata automaticamente ($B$)». Sapendo che una transazione è stata segnalata come sospetta ($S$) e che NON è stata bloccata automaticamente ($\\neg B$), quale conclusione è logicamente certa?",
    rispostaCorretta: "La transazione è stata necessariamente sottoposta a verifica manuale ($V$)",
    risposteErrate: [
      "La transazione è stata annullata dal cliente",
      "La transazione non era in realtà sospetta ($\\neg S$)",
      "La transazione non è stata sottoposta a verifica manuale",
      "Non è possibile stabilire se la verifica manuale abbia avuto luogo"
    ],
    spiegazione: "Dalla regola $S \\to (V \\lor B)$, essendo $S$ vero (Modus Ponens), ne consegue $V \\lor B$. Sapendo che $\\neg B$ è vero, per il sillogismo disgiuntivo su $V \\lor B$ e $\\neg B$ segue necessariamente $V$ (verifica manuale).",
    fonte: "Lotto L2 del progetto — L2-36 (ID 723)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 724,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Data l’implicazione $P \\to (Q \\lor R)$, quale delle seguenti combinazioni di verità dei componenti falsifica categoricamente l’enunciato condizionale?",
    rispostaCorretta: "$P$ è VERA, $Q$ è FALSA e $R$ è FALSA",
    risposteErrate: [
      "$P$ è FALSA, $Q$ è VERA e $R$ è VERA",
      "$P$ è VERA, $Q$ è VERA e $R$ è FALSA",
      "$P$ è FALSA, $Q$ è FALSA e $R$ è FALSA",
      "$P$ è VERA, $Q$ è FALSA e $R$ è VERA"
    ],
    spiegazione: "Un condizionale $P \\to X$ è falso se e solo se l’antecedente $P$ è vero e il conseguente $X$ è falso. Poiché $X = Q \\lor R$, la disgiunzione è falsa solo quando sia $Q$ sia $R$ sono entrambe false. Dunque l’implicazione è falsa quando $P = V$, $Q = F$, $R = F$.",
    fonte: "Lotto L2 del progetto — L2-37 (ID 724)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 725,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un regolamento accademico sono stabilite due regole distinte per l’accesso alla qualifica «Esperto» ($Q$):\n1. «Aver completato 5 anni di servizio ($S$) è condizione necessaria per ottenere la qualifica ($Q \\to S$)»;\n2. «Aver vinto un premio scientifico internazionale ($P$) è condizione sufficiente per ottenere la qualifica ($P \\to Q$)».\nIn base a queste due sole regole, quale delle seguenti conclusioni è logicamente certa?",
    rispostaCorretta: "Chiunque vinca un premio scientifico internazionale ($P$) ottiene sicuramente la qualifica ($Q$) e possiede quindi necessariamente 5 anni di servizio ($S$)",
    risposteErrate: [
      "Aver completato 5 anni di servizio ($S$) è sufficiente da solo per ottenere automaticamente la qualifica ($Q$)",
      "Chi non vince il premio scientifico ($P$) non può in nessun caso ottenere la qualifica ($Q$)",
      "La qualifica $Q$ e il servizio $S$ sono condizioni reciprocamente necessarie e sufficienti ($Q \\leftrightarrow S$)",
      "Vincere il premio scientifico ($P$) è una condizione necessaria per ottenere la qualifica ($Q$)"
    ],
    spiegazione: "Dalle premesse abbiamo $P \\to Q$ (sufficienza di $P$ per $Q$) e $Q \\to S$ (necessità di $S$ per $Q$). Dalle due implicazioni $P \\to Q$ e $Q \\to S$ segue per transitività (sillogismo ipotetico) che $P \\to S$. Dunque, chiunque vinca il premio consegue la qualifica $Q$ e possiede necessariamente anche il requisito dei 5 anni di servizio $S$.",
    fonte: "Lotto L2 del progetto — L2-38 (ID 725)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 726,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano date le premesse vere:\n1. «Se l’interruttore $A$ è chiuso, allora la lampada $B$ si accende ($A \\to B$)»;\n2. «Se la lampada $B$ si accende, allora il sensore $C$ invia un segnale ($B \\to C$)»;\n3. «Il sensore $C$ NON ha inviato alcun segnale ($\\neg C$)».\nQuale conclusione segue necessariamente?",
    rispostaCorretta: "L’interruttore $A$ non è chiuso ($\\neg A$)",
    risposteErrate: [
      "L’interruttore $A$ è chiuso ($A$)",
      "La lampada $B$ si è accesa ma il sensore $C$ è guasto",
      "Il sensore $C$ non ha inviato il segnale perché la lampada $B$ è fulminata",
      "Non è possibile trarre alcuna conclusione sullo stato dell’interruttore $A$"
    ],
    spiegazione: "Per transitività (sillogismo ipotetico), dalle premesse 1 e 2 segue $A \\to C$. Sapendo che $\\neg C$ è vero, per Modus Tollens si deduce inconfutabilmente $\\neg A$ (l’interruttore $A$ non è chiuso).",
    fonte: "Lotto L2 del progetto — L2-39 (ID 726)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 727,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le seguenti tre implicazioni distinte assunte come vere in un sistema formale:\n1. $P \\to Q$;\n2. $Q \\to R$;\n3. $R \\to S$.\nSapendo con certezza che la proposizione $S$ è FALSA ($\\neg S$), quale conclusione segue necessariamente applicando la regola del Modus Tollens lungo la catena?",
    rispostaCorretta: "Le proposizioni $P$, $Q$ ed $R$ sono tutte e tre necessariamente FALSE",
    risposteErrate: [
      "La proposizione $P$ è vera, mentre $Q$ ed $R$ sono false",
      "Solo la proposizione $R$ è falsa, mentre $P$ e $Q$ possono essere vere",
      "Le proposizioni $P$, $Q$ ed $R$ sono tutte e tre necessariamente VERE",
      "Non si può determinare il valore di verità di alcuna delle proposizioni $P, Q, R$"
    ],
    spiegazione: "Dalle tre premesse separate e dal dato $\\neg S$, applicando iterativamente il Modus Tollens a ritroso: 1) da $R \\to S$ e $\\neg S$ segue $\\neg R$; 2) da $Q \\to R$ e $\\neg R$ segue $\\neg Q$; 3) da $P \\to Q$ e $\\neg Q$ segue $\\neg P$. Pertanto $P, Q, R$ sono tutte rigorosamente false.",
    fonte: "Lotto L2 del progetto — L2-40 (ID 727)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 728,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano date le tre premesse assunte come vere:\n1. «Se $A$ è vero, allora $B$ è falso ($A \\to \\neg B$)»;\n2. «$B$ è vero oppure $C$ è vero ($B \\lor C$)»;\n3. «$A$ è vero».\nQuale conclusione segue necessariamente?",
    rispostaCorretta: "$C$ è necessariamente VERO",
    risposteErrate: [
      "$C$ è necessariamente FALSO",
      "$B$ è necessariamente VERO",
      "$A$ e $C$ sono entrambi FALSI",
      "Le premesse sono tra loro contraddittorie e incompatibili"
    ],
    spiegazione: "1) Poiché $A$ è vero (premessa 3), da $A \\to \\neg B$ (premessa 1) per Modus Ponens segue che $\\neg B$ è vero ($B$ è falso). 2) Dalla premessa 2 abbiamo $B \\lor C$. Essendo $B$ falso, per il sillogismo disgiuntivo ne consegue necessariamente che $C$ è VERO.",
    fonte: "Lotto L2 del progetto — L2-41 (ID 728)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 729,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un algoritmo di controllo di un modulo web valgono tre regole formali:\n1. «Se il campo Nome è vuoto ($N$), allora il form è bloccato ($B$)» ($N \\to B$);\n2. «Se il campo Email non è valido ($E$), allora il form è bloccato ($B$)» ($E \\to B$);\n3. «Se il form è bloccato ($B$), allora il pulsante Invia è disabilitato ($D$)» ($B \\to D$).\nSapendo che il pulsante Invia è ABILITATO ($\\neg D$, ossia non è disabilitato), quale deduzione segue rigorosamente dalle sole premesse?",
    rispostaCorretta: "Il campo Nome non è vuoto ($\\neg N$) e il campo Email è valido ($\\neg E$)",
    risposteErrate: [
      "Il campo Nome non è vuoto oppure il campo Email è valido ($\\neg N \\lor \\neg E$)",
      "Il form è bloccato ($B$) ma il pulsante è abilitato",
      "Il campo Nome è vuoto ma l’email è valida",
      "Dalle sole premesse non è possibile stabilire lo stato dei campi Nome ed Email"
    ],
    spiegazione: "Dimostrazione passo-passo:\n1) Dalla regola 3 ($B \\to D$) e dal dato $\\neg D$, per Modus Tollens segue $\\neg B$ (il form non è bloccato);\n2) Dalla regola 1 ($N \\to B$) e da $\\neg B$, per Modus Tollens segue $\\neg N$ (il campo Nome non è vuoto);\n3) Dalla regola 2 ($E \\to B$) e da $\\neg B$, per Modus Tollens segue $\\neg E$ (il campo Email è valido);\n4) Congiungendo i risultati, vale sia $\\neg N$ sia $\\neg E$, ossia $\\neg N \\land \\neg E$.",
    fonte: "Lotto L2 del progetto — L2-42 (ID 729)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 730,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la premessa: «Se un metallo viene riscaldato oltre la sua temperatura di fusione ($R$), allora passa allo stato liquido ($L$)». Quale ulteriore premessa è necessaria e sufficiente per poter dedurre validamente che «Il metallo non è stato riscaldato oltre la sua temperatura di fusione ($\\neg R$)»?",
    rispostaCorretta: "«Il metallo non è passato allo stato liquido ($\\neg L$)»",
    risposteErrate: [
      "«Il metallo è passato allo stato liquido ($L$)»",
      "«Il metallo è stato raffreddato»",
      "«Tutti i metalli fondono a temperature elevate»",
      "«Il metallo è solido e conduce calore»"
    ],
    spiegazione: "Per dedurre $\\neg R$ dall’implicazione $R \\to L$ tramite la regola di inferenza valida del Modus Tollens ($\\neg L \\to \\neg R$), la premessa indispensabile da accertare è la negazione del conseguente, ossia $\\neg L$ («il metallo non è passato allo stato liquido»).",
    fonte: "Lotto L2 del progetto — L2-43 (ID 730)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 731,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Se sappiamo che la condizione $A$ è sufficiente per $B$ ($A \\to B$) e che $B$ è a sua volta sufficiente per $C$ ($B \\to C$), quale affermazione esprime correttamente il ruolo logico di $C$ rispetto ad $A$?",
    rispostaCorretta: "$C$ è condizione necessaria per $A$ (e $A$ è condizione sufficiente per $C$)",
    risposteErrate: [
      "$C$ è condizione sufficiente per $A$",
      "$C$ è condizione necessaria e sufficiente per $A$",
      "$C$ è indipendente da $A$",
      "$A$ è condizione necessaria per $C$"
    ],
    spiegazione: "Per transitività, $A \\to B$ e $B \\to C$ implicano $A \\to C$. In ogni implicazione $A \\to C$, l’antecedente $A$ è condizione sufficiente per il conseguente $C$, mentre il conseguente $C$ è condizione necessaria per l’antecedente $A$ (poiché $\\neg C \\implies \\neg A$).",
    fonte: "Lotto L2 del progetto — L2-44 (ID 731)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 732,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Nel contesto della logica proposizionale classica (in cui vale il principio del terzo escluso $X \\lor \\neg X$), si considerino due implicazioni vere: 1. $X \\to Y$; 2. $\\neg X \\to Z$. Quale delle seguenti conclusioni è sempre vera in ogni possibile valutazione di verità?",
    rispostaCorretta: "Almeno una tra le proposizioni $Y$ e $Z$ è vera ($Y \\lor Z$ è vera)",
    risposteErrate: [
      "$Y$ e $Z$ sono entrambe contemporaneamente vere ($Y \\land Z$)",
      "Né $Y$ né $Z$ possono essere vere ($\\neg Y \\land \\neg Z$)",
      "Se $Y$ è vera, allora $Z$ deve essere necessariamente falsa ($Y \\to \\neg Z$)",
      "Non si può dedurre alcuna informazione sulla verità di $Y$ e $Z$"
    ],
    spiegazione: "In logica classica bivalente, la variabile $X$ è o vera ($X$) oppure falsa ($\\neg X$). Se $X$ è vera, per la regola 1 si deduce $Y$; se $X$ è falsa, per la regola 2 si deduce $Z$. In tutti i casi possibili si verifica almeno una tra $Y$ o $Z$, rendendo la disgiunzione $Y \\lor Z$ una conseguenza logica tautologica del sistema $((X \\to Y) \\land (\\neg X \\to Z) \\implies Y \\lor Z)$.",
    fonte: "Lotto L2 del progetto — L2-45 (ID 732)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 733,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Date le premesse:\n1. «Se piove ($P$), allora resto a casa ($C$)»;\n2. «Se c’è vento forte ($V$), allora leggo un libro ($L$)»;\n3. «Oggi piove oppure c’è vento forte ($P \\lor V$)».\nIn base alla regola logica del *dilemma costruttivo*, quale conclusione segue necessariamente?",
    rispostaCorretta: "Oggi resto a casa oppure leggo un libro ($C \\lor L$)",
    risposteErrate: [
      "Oggi resto a casa e leggo un libro ($C \\land L$)",
      "Oggi non resto a casa e non leggo un libro",
      "Se resto a casa, allora leggo sicuramente un libro",
      "Nessuna conclusione è garantita dalle premesse fornite"
    ],
    spiegazione: "La regola classica del dilemma costruttivo stabilisce che da $(P \\to C) \\land (V \\to L)$ e dalla disgiunzione delle premesse $(P \\lor V)$, ne consegue la disgiunzione dei rispettivi conseguenti: $C \\lor L$ («resto a casa oppure leggo un libro»).",
    fonte: "Lotto L2 del progetto — L2-46 (ID 733)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 734,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Date le premesse:\n1. «Se $A$ è vero, allora $B$ è vero ($A \\to B$)»;\n2. «Se $C$ è vero, allora $D$ è vero ($C \\to D$)»;\n3. «$B$ è falso oppure $D$ è falso ($\\neg B \\lor \\neg D$)».\nIn base alla regola logica del *dilemma distruttivo*, quale conclusione è logicamente certa?",
    rispostaCorretta: "$A$ è falso oppure $C$ è falso ($\\neg A \\lor \\neg C$)",
    risposteErrate: [
      "$A$ è falso e $C$ è falso ($\\neg A \\land \\neg C$)",
      "$A$ è vero oppure $C$ è vero ($A \\lor C$)",
      "$B$ e $D$ sono entrambi contemporaneamente falsi",
      "Non è possibile determinare alcuna relazione tra $A$ e $C$"
    ],
    spiegazione: "Il dilemma distruttivo è l’estensione disgiuntiva del Modus Tollens: da $(A \\to B) \\land (C \\to D)$ e $(\\neg B \\lor \\neg D)$ segue necessariamente la disgiunzione delle negazioni degli antecedenti: $\\neg A \\lor \\neg C$.",
    fonte: "Lotto L2 del progetto — L2-47 (ID 734)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 735,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Nel contesto della logica proposizionale classica bivalente, siano date come vere entrambe le implicazioni: 1. $P \\to Q$; 2. $\\neg P \\to Q$. Che cosa si può affermare con certezza sul valore di verità della proposizione $Q$?",
    rispostaCorretta: "In ogni assegnazione di verità che rende vere entrambe le implicazioni date, la proposizione $Q$ è necessariamente VERA",
    risposteErrate: [
      "La proposizione $Q$ è necessariamente FALSA",
      "La proposizione $Q$ è vera solo nel caso in cui $P$ sia vera",
      "La proposizione $Q$ ha necessariamente lo stesso valore di verità di $P$",
      "Le due premesse date contengono una contraddizione insanabile"
    ],
    spiegazione: "In logica proposizionale classica vale il principio del terzo escluso $P \\lor \\neg P = \\text{Vero}$. Poiché entrambe le ipotesi $P$ e $\\neg P$ implicano $Q$, congiungendo le premesse si ha $(P \\to Q) \\land (\\neg P \\to Q) \\equiv (P \\lor \\neg P) \\to Q \\equiv \\text{Vero} \\to Q \\equiv Q$. Pertanto, sotto l’assunzione che entrambe le implicazioni siano vere, la proposizione $Q$ è necessariamente vera.",
    fonte: "Lotto L2 del progetto — L2-48 (ID 735)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 736,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un test di coerenza logica, si hanno le seguenti quattro affermazioni assunte come vere:\n1. «Se $A$ è vero, allora $B$ è vero ($A \\to B$)»;\n2. «Se $B$ è vero, allora $C$ è falso ($B \\to \\neg C$)»;\n3. «Se $D$ è falso, allora $C$ è vero ($\\neg D \\to C$)»;\n4. «$A$ è vero».\nQuale affermazione è sicuramente VERA?",
    rispostaCorretta: "$D$ è necessariamente VERO",
    risposteErrate: [
      "$D$ è necessariamente FALSO",
      "$C$ è necessariamente VERO",
      "$B$ è necessariamente FALSO",
      "Non si può dedurre il valore di verità di $D$"
    ],
    spiegazione: "1) Da $A$ e $A \\to B$ segue $B$. 2) Da $B$ e $B \\to \\neg C$ segue $\\neg C$ ($C$ è falso). 3) Dalla regola $\\neg D \\to C$, per contronominale abbiamo $\\neg C \\to \\neg(\\neg D) \\equiv \\neg C \\to D$. Poiché $\\neg C$ è vero, segue necessariamente che $D$ è VERO.",
    fonte: "Lotto L2 del progetto — L2-49 (ID 736)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 737,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "In un sistema formale di classificazione robotica sono stabilite cinque premesse assunte come vere:\n1. «Un robot è classificato Alpha ($A$) solo se possiede sensori laser ($L$)» ($A \\to L$);\n2. «Possedere sensori laser ($L$) e batteria al grafene ($G$) è condizione sufficiente per essere classificato Explorer ($E$)» ($(L \\land G) \\to E$);\n3. «Un robot è classificato Explorer ($E$) solo se ha superato il test di navigazione ($N$)» ($E \\to N$);\n4. «Il robot R-100 è classificato Alpha ($A$) e possiede una batteria al grafene ($G$)» ($A \\land G$);\n5. «Il robot R-100 NON ha superato il test di navigazione ($\\neg N$)».\nQuale conclusione segue necessariamente dall’analisi logica dell’insieme delle premesse 1–5?",
    rispostaCorretta: "L’insieme delle premesse 1–5 è logicamente incoerente (contraddittorio), poiché dalle premesse 1, 2, 3 e 4 si deduce che R-100 soddisfa $N$, in contraddizione diretta con la premessa 5 ($\\neg N$)",
    risposteErrate: [
      "Le premesse 1–5 sono reciprocamente compatibili e dimostrano che R-100 non possiede sensori laser ($\\neg L$)",
      "Il robot R-100 è classificato Alpha ma non può essere classificato Explorer",
      "La batteria al grafene è una condizione necessaria per la classificazione Alpha",
      "Non è possibile stabilire se vi sia contraddizione senza informazioni aggiuntive sul software di navigazione"
    ],
    spiegazione: "Ricostruzione formale passo-passo della contraddizione:\n1) Dalla premessa 4 si ha $A$ e $G$;\n2) Da $A$ e dalla premessa 1 ($A \\to L$), per Modus Ponens segue $L$;\n3) Da $L$ e $G$, per introduzione della congiunzione segue $L \\land G$;\n4) Da $L \\land G$ e dalla premessa 2 ($(L \\land G) \\to E$), per Modus Ponens segue $E$;\n5) Da $E$ e dalla premessa 3 ($E \\to N$), per Modus Ponens segue $N$;\n6) La premessa 5 asserisce categoricamente $\\neg N$.\nPoiché dall’insieme si deriva contemporaneamente $N$ e $\\neg N$, l’insieme delle premesse 1–5 è formalmente insoddisfacibile (contraddittorio).",
    fonte: "Lotto L2 del progetto — L2-50 (ID 737)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  }
,
  {
    id: 738,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Quattro atleti — Anna, Bruno, Carlo e Dario — partecipano a una gara a cronometro e ottengono tempi tutti diversi tra loro. Sono noti i seguenti fatti:\n1. Anna è arrivata prima di Bruno ($A < B$);\n2. Dario è arrivato prima di Carlo ($D < C$);\n3. Bruno è arrivato prima di Dario ($B < D$).\nQuale delle seguenti affermazioni DEVE essere necessariamente vera?",
    rispostaCorretta: "Anna ha vinto la gara (è arrivata prima in classifica)",
    risposteErrate: [
      "Carlo è arrivato secondo in classifica",
      "Dario è arrivato prima di Bruno",
      "Bruno è arrivato ultimo in classifica",
      "Non è possibile stabilire chi sia arrivato primo"
    ],
    spiegazione: "Dalle tre premesse di ordinamento lineare stretto: 1) $A < B$, 2) $D < C$, 3) $B < D$. Concatenando le disuguaglianze per transitività, otteniamo l’ordinamento completo e univoco: $A < B < D < C$. Anna è dunque 1ª, Bruno 2°, Dario 3° e Carlo 4°. Ne consegue con assoluta necessità logica che Anna ha vinto la gara.",
    fonte: "Lotto L3 del progetto — L3-01 (ID 738)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 739,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Cinque progetti informatici ($P_1, P_2, P_3, P_4, P_5$) devono essere collaudati in sequenza temporale dal 1° al 5° turno (un solo progetto per turno), rispettando i seguenti vincoli:\n1. $P_3$ viene collaudato al 1° turno;\n2. $P_4$ viene collaudato al 5° turno;\n3. $P_2$ viene collaudato immediatamente prima di $P_5$;\n4. $P_1$ viene collaudato prima di $P_2$.\nQuale progetto DEVE essere collaudato al 4° turno?",
    rispostaCorretta: "$P_5$",
    risposteErrate: [
      "$P_1$",
      "$P_2$",
      "$P_3$",
      "Non è possibile determinarlo in modo univoco"
    ],
    spiegazione: "I turni disponibili sono 1, 2, 3, 4, 5. I turni 1 e 5 sono occupati rispettivamente da $P_3$ e $P_4$. Restano liberi i turni 2, 3, 4 per i progetti $P_1, P_2, P_5$. Poiché $P_2$ precede immediatamente $P_5$ (turno di $P_5 = \\text{turno di } P_2 + 1$) e $P_1$ deve precedere $P_2$, l’unica disposizione compatibile con i turni rimasti è: turno 2 = $P_1$, turno 3 = $P_2$, turno 4 = $P_5$. L’assegnazione completa è $(P_3, P_1, P_2, P_5, P_4)$. Al 4° turno deve quindi necessariamente esserci $P_5$.",
    fonte: "Lotto L3 del progetto — L3-02 (ID 739)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 740,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Cinque conferenze universitarie ($A, B, C, D, E$) si tengono nella stessa aula in cinque fasce orarie consecutive (dalla fascia 1 alla fascia 5). Sono stabiliti i seguenti vincoli:\n1. La conferenza $C$ si tiene nella fascia 3;\n2. La conferenza $A$ precede la conferenza $B$ con esattamente una conferenza intermedia tra loro (ossia: $\\text{fascia}(B) = \\text{fascia}(A) + 2$);\n3. La conferenza $D$ precede la conferenza $E$ (non necessariamente in modo consecutivo).\nIn quale fascia oraria DEVE tenersi la conferenza $A$?",
    rispostaCorretta: "Nella fascia 2",
    risposteErrate: [
      "Nella fascia 1",
      "Nella fascia 4",
      "Nella fascia 5",
      "Indifferentemente nella fascia 1 o nella fascia 2"
    ],
    spiegazione: "Poiché la fascia 3 è occupata da $C$, la coppia $(A, B)$ con distanza 2 non può partire dalla fascia 1 (altrimenti $B$ cadrebbe nella fascia 3, in conflitto con $C$) né dalla fascia 4 o 5 (poiché $B$ eccederebbe le 5 fasce). L’unica posizione ammissibile per $A$ è dunque la fascia 2, da cui $B$ si colloca nella fascia 4. Le fasce rimaste (1 e 5) vengono occupate rispettivamente da $D$ ed $E$ per soddisfare il vincolo $D < E$. La sequenza completa è $(D, A, C, B, E)$, e la conferenza $A$ deve necessariamente tenersi nella fascia 2.",
    fonte: "Lotto L3 del progetto — L3-03 (ID 740)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 741,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Cinque studenti — Elena, Fabio, Giorgio, Ilaria e Luca — hanno ottenuto voti distinti in un esame. Sono note le seguenti relazioni:\n1. Elena ha ottenuto un voto superiore a Fabio ($E > F$);\n2. Giorgio ha ottenuto un voto superiore a Ilaria ($G > I$);\n3. Fabio ha ottenuto un voto superiore a Giorgio ($F > G$);\n4. Ilaria ha ottenuto un voto superiore a Luca ($I > L$).\nQuale posizione occupa con certezza assoluta lo studente Giorgio nella graduatoria ordinata dal voto più alto al più basso?",
    rispostaCorretta: "La 3ª posizione",
    risposteErrate: [
      "La 2ª posizione",
      "La 4ª posizione",
      "La 1ª posizione",
      "La posizione di Giorgio non è determinabile univocamente"
    ],
    spiegazione: "Concatenando i vincoli di disuguaglianza transitiva: $E > F$ (da 1), $F > G$ (da 3), $G > I$ (da 2), $I > L$ (da 4). L’ordinamento completo decrescente è rigorosamente: $E > F > G > I > L$. Le posizioni sono: 1ª Elena, 2° Fabio, 3° Giorgio, 4ª Ilaria, 5° Luca. Giorgio si trova quindi con certezza assoluta al 3° posto.",
    fonte: "Lotto L3 del progetto — L3-04 (ID 741)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 742,
    materia: "Logica",
    difficolta: "medio",
    domanda: "I cinque vagoni di un treno merci sono numerati da 1 a 5 (dove 1 è la testa e 5 è la coda) e trasportano cinque materiali diversi ($V, W, X, Y, Z$). Valgono le seguenti regole di sicurezza:\n1. Il carico $X$ è collocato nel vagone 3;\n2. Il carico $Y$ è collocato nel vagone 5;\n3. I carichi $V$ e $W$ devono trovarsi in due vagoni direttamente adiacenti;\n4. Il carico $Z$ NON può trovarsi nel vagone 1.\nQuale carico si trova NECESSARIAMENTE nel vagone 4?",
    rispostaCorretta: "$Z$",
    risposteErrate: [
      "$V$",
      "$W$",
      "$X$",
      "Non è possibile stabilire con certezza quale carico si trovi nel vagone 4"
    ],
    spiegazione: "I vagoni 3 e 5 sono già assegnati rispettivamente a $X$ e $Y$. I vagoni rimasti da assegnare sono 1, 2 e 4 per i materiali $V, W, Z$. Poiché $V$ e $W$ devono essere adiacenti, essi devono occupare due vagoni contigui: l’unica coppia contigua libera è ${1, 2}$. Di conseguenza, i vagoni 1 e 2 sono occupati da $V$ e $W$ (in un ordine qualsiasi). Il vagone 4 rimane come unico spazio per $Z$ (il che rispetta anche il vincolo che $Z$ non sia nel vagone 1). Nel vagone 4 deve quindi trovarsi necessariamente il carico $Z$.",
    fonte: "Lotto L3 del progetto — L3-05 (ID 742)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 743,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro dipendenti — Aldo, Bea, Carlo e Dario — lavorano in un edificio a 4 piani (piani 1, 2, 3, 4, con un solo dipendente per piano). Sono noti i seguenti vincoli:\n1. Carlo lavora al 1° piano;\n2. Aldo lavora a un piano più alto di Bea ($\\text{piano}(A) > \\text{piano}(B)$);\n3. Dario NON lavora al 4° piano.\nChi lavora NECESSARIAMENTE al 4° piano?",
    rispostaCorretta: "Aldo",
    risposteErrate: [
      "Bea",
      "Carlo",
      "Dario",
      "Non è possibile determinarlo senza conoscere il piano esatto di Dario"
    ],
    spiegazione: "Il piano 1 è occupato da Carlo. I piani 2, 3, 4 devono essere ripartiti tra Aldo, Bea e Dario. Dario non può stare al piano 4 (vincolo 3). Bea non può stare al piano 4 perché Aldo deve trovarsi a un piano superiore al suo (vincolo 2). Carlo è già al piano 1. L’unico dipendente che può occupare il 4° piano è dunque necessariamente Aldo (mentre Bea e Dario occuperanno i piani 2 e 3 in ordine compatibile).",
    fonte: "Lotto L3 del progetto — L3-06 (ID 743)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 744,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro relatori — Rossi, Bianchi, Verdi e Neri — tengono le loro lezioni in quattro aule distinte ($A_1, A_2, A_3, A_4$, un relatore per aula). Valgono le seguenti informazioni:\n1. Bianchi è assegnato all’aula $A_3$;\n2. Rossi NON può essere assegnato né all’aula $A_1$ né all’aula $A_4$;\n3. Neri non è assegnato all’aula $A_2$.\nIn quale aula DEVE essere assegnato il relatore Rossi?",
    rispostaCorretta: "Nell’aula $A_2$",
    risposteErrate: [
      "Nell’aula $A_1$",
      "Nell’aula $A_4$",
      "Indifferentemente nell’aula $A_1$ o nell’aula $A_2$",
      "L’aula di Rossi dipende dall’assegnazione di Verdi"
    ],
    spiegazione: "Le aule sono $A_1, A_2, A_3, A_4$. Bianchi è in $A_3$. Rossi non può andare in $A_1$, non può andare in $A_4$ (vincolo 2) e l’aula $A_3$ è già occupata da Bianchi. L’unica aula rimasta accessibile per Rossi è l’aula $A_2$. Dunque Rossi deve necessariamente essere assegnato all’aula $A_2$.",
    fonte: "Lotto L3 del progetto — L3-07 (ID 744)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 745,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro server ($S_1, S_2, S_3, S_4$) devono essere configurati ciascuno con un indirizzo di rete distinto scelto tra $IP_A, IP_B, IP_C, IP_D$. Valgono i seguenti vincoli di configurazione:\n1. Il server $S_1$ è configurato con l’indirizzo $IP_C$;\n2. Il server $S_3$ NON può avere l’indirizzo $IP_B$ né l’indirizzo $IP_D$;\n3. Il server $S_2$ NON può avere l’indirizzo $IP_A$.\nQuale associazione DEVE essere necessariamente vera?",
    rispostaCorretta: "Il server $S_3$ è configurato con $IP_A$",
    risposteErrate: [
      "Il server $S_2$ è configurato con $IP_A$",
      "Il server $S_4$ è configurato con $IP_C$",
      "Il server $S_3$ è configurato con $IP_D$",
      "Il server $S_4$ non può avere l’indirizzo $IP_D$"
    ],
    spiegazione: "$S_1$ ha $IP_C$. Gli indirizzi liberi per $S_2, S_3, S_4$ sono $IP_A, IP_B, IP_D$. Per il vincolo 2, $S_3$ non può avere $IP_B$ né $IP_D$ (e $IP_C$ è già di $S_1$); l’unico indirizzo possibile per $S_3$ è quindi $IP_A$. Ne segue che $S_2$ e $S_4$ si dividono $IP_B$ e $IP_D$; poiché $S_2$ non può avere $IP_A$ (già soddisfatto), la conclusione certa e necessaria è che $S_3$ ha $IP_A$.",
    fonte: "Lotto L3 del progetto — L3-08 (ID 745)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 746,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro autisti ($A_1, A_2, A_3, A_4$) guidano ciascuno un mezzo di trasporto diverso tra Bus, Tram, Metro e Taxi. Si sa che:\n1. $A_3$ guida il Bus;\n2. $A_1$ guida il Taxi;\n3. $A_4$ NON guida la Metro;\n4. $A_2$ non guida il Taxi.\nQuale mezzo guida con certezza assoluta l’autista $A_2$?",
    rispostaCorretta: "La Metro",
    risposteErrate: [
      "Il Tram",
      "Il Bus",
      "Il Taxi",
      "Non è possibile stabilire se $A_2$ guidi la Metro o il Tram"
    ],
    spiegazione: "I mezzi Bus e Taxi sono assegnati rispettivamente ad $A_3$ e $A_1$. Rimangono i mezzi Metro e Tram da assegnare ad $A_2$ e $A_4$. Poiché $A_4$ non guida la Metro (vincolo 3), $A_4$ deve necessariamente guidare il Tram. Di conseguenza, l’autista $A_2$ deve guidare con certezza assoluta la Metro.",
    fonte: "Lotto L3 del progetto — L3-09 (ID 746)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 747,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro veicoli ($V_1, V_2, V_3, V_4$) sono parcheggiati in quattro stalli numerati da 1 a 4 in linea retta. Si conoscono le seguenti regole:\n1. Il veicolo $V_3$ è parcheggiato nello stallo 1;\n2. I veicoli $V_1$ e $V_2$ occupano due stalli contigui ($|\\text{stallo}(V_1) - \\text{stallo}(V_2)| = 1$);\n3. Lo stallo di $V_4$ ha un numero maggiore rispetto a quello di $V_2$ ($\\text{stallo}(V_4) > \\text{stallo}(V_2)$).\nIn quale stallo si trova NECESSARIAMENTE il veicolo $V_4$?",
    rispostaCorretta: "Nello stallo 4",
    risposteErrate: [
      "Nello stallo 2",
      "Nello stallo 3",
      "Nello stallo 1",
      "Indifferentemente nello stallo 2 o nello stallo 4"
    ],
    spiegazione: "Lo stallo 1 è occupato da $V_3$. Restano liberi gli stalli 2, 3, 4 per $V_1, V_2, V_4$. Poiché $V_1$ e $V_2$ devono essere contigui, essi devono occupare la coppia di stalli ${2, 3}$. Il restante stallo 4 è obbligatoriamente assegnato a $V_4$. Ciò soddisfa anche la condizione $\\text{stallo}(V_4) > \\text{stallo}(V_2)$, poiché $4 > 2$ e $4 > 3$. Quindi $V_4$ è necessariamente nello stallo 4.",
    fonte: "Lotto L3 del progetto — L3-10 (ID 747)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 748,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Da un gruppo di sei esperti ($A, B, C, D, E, F$) si deve comporre una commissione di esattamente tre membri. Valgono le seguenti regole di selezione:\n1. Se viene scelto $A$, allora deve essere scelto anche $B$ ($A \\to B$);\n2. $C$ e $D$ sono incompatibili (non possono fare entrambi parte della commissione);\n3. Se viene scelto $E$, allora $B$ non può essere scelto ($E \\to \\neg B$);\n4. Gli esperti $A$ e $C$ sono entrambi obbligatoriamente inclusi nella commissione.\nQuale terna di esperti costituisce l’UNICA commissione ammissibile?",
    rispostaCorretta: "$\\{A, B, C\\}$",
    risposteErrate: [
      "$\\{A, B, D\\}$",
      "$\\{A, B, E\\}$",
      "$\\{A, C, F\\}$",
      "$\\{B, C, E\\}$"
    ],
    spiegazione: "Dato che $A$ e $C$ sono inclusi per la regola 4: poiché $A$ è scelto, per la regola 1 anche $B$ deve essere scelto. I tre membri selezionati sono quindi $A, B, C$, saturando i 3 posti disponibili. Verifichiamo la coerenza con le altre regole: $C$ è presente, quindi $D$ è escluso (regola 2, soddisfatta); $B$ è presente, quindi per contronominale della regola 3 $E$ è escluso (soddisfatta). La terna unica e priva di contraddizioni è $\\{A, B, C\\}$.",
    fonte: "Lotto L3 del progetto — L3-11 (ID 748)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 749,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sei partecipanti ($M, N, P, Q, R, S$) devono essere divisi in due squadre di tre persone ciascuna (Squadra Alfa e Squadra Beta). Valgono le seguenti regole:\n1. $M$ ed $N$ devono appartenere alla stessa squadra;\n2. $P$ e $Q$ non possono appartenere alla stessa squadra;\n3. $R$ appartiene alla Squadra Alfa;\n4. $M$ appartiene alla Squadra Beta.\nQuale delle seguenti affermazioni DEVE essere necessariamente vera?",
    rispostaCorretta: "Il partecipante $N$ appartiene alla Squadra Beta",
    risposteErrate: [
      "Il partecipante $P$ appartiene alla Squadra Beta",
      "Il partecipante $S$ appartiene alla Squadra Alfa",
      "Il partecipante $Q$ appartiene necessariamente alla Squadra Beta",
      "$R$ ed $M$ appartengono alla stessa squadra"
    ],
    spiegazione: "Dal vincolo 4 sappiamo che $M \\in \\text{Beta}$. Dal vincolo 1, $M$ ed $N$ devono stare insieme, quindi anche $N \\in \\text{Beta}$. Questa deduzione è immediata e categorica, indipendentemente dalla ripartizione degli altri partecipanti ($P, Q, S, R$). L’affermazione che $N$ appartiene alla Squadra Beta deve quindi essere necessariamente vera.",
    fonte: "Lotto L3 del progetto — L3-12 (ID 749)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 750,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Uno studente universitario deve inserire nel proprio piano di studi esattamente tre corsi scelti tra cinque opzioni ($C_1, C_2, C_3, C_4, C_5$). I regolamenti stabiliscono che:\n1. Non è consentito scegliere contemporaneamente $C_1$ e $C_2$;\n2. Se si sceglie il corso $C_3$, è obbligatorio scegliere anche $C_4$ ($C_3 \\to C_4$);\n3. Se non si sceglie il corso $C_5$, non si può scegliere il corso $C_4$ (ossia: $\\neg C_5 \\to \\neg C_4$, equivalente a $C_4 \\to C_5$).\nSapendo che lo studente ha inserito nel piano il corso $C_3$, quale terna di corsi ha scelto con certezza assoluta?",
    rispostaCorretta: "$\\{C_3, C_4, C_5\\}$",
    risposteErrate: [
      "$\\{C_1, C_3, C_4\\}$",
      "$\\{C_2, C_3, C_4\\}$",
      "$\\{C_1, C_2, C_3\\}$",
      "Non è possibile stabilire se lo studente abbia scelto $C_5$"
    ],
    spiegazione: "Poiché lo studente sceglie $C_3$: per la regola 2 ($C_3 \\to C_4$), sceglie obbligatoriamente anche $C_4$. Per la regola 3 nella sua forma contronominale ($C_4 \\to C_5$), avendo scelto $C_4$ deve obbligatoriamente scegliere anche $C_5$. Avendo selezionato $C_3, C_4, C_5$, il limite di esattamente 3 corsi è completato e i corsi $C_1, C_2$ restano esclusi (rispettando anche la regola 1). La terna scelta è univocamente $\\{C_3, C_4, C_5\\}$.",
    fonte: "Lotto L3 del progetto — L3-13 (ID 750)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 751,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un sistema operativo deve attivare esattamente tre servizi scelti tra cinque disponibili ($S_1, S_2, S_3, S_4, S_5$). Valgono i seguenti requisiti formali:\n1. L’attivazione di $S_1$ richiede l’attivazione di $S_2$ ($S_1 \\to S_2$);\n2. Il servizio $S_2$ è incompatibile con $S_3$ (non possono essere attivi insieme);\n3. Il servizio $S_4$ richiede per funzionare il servizio $S_3$ ($S_4 \\to S_3$);\n4. Il servizio $S_1$ è impostato come attivo.\nQuale terna di servizi DEVE essere attivata?",
    rispostaCorretta: "$\\{S_1, S_2, S_5\\}$",
    risposteErrate: [
      "$\\{S_1, S_2, S_3\\}$",
      "$\\{S_1, S_2, S_4\\}$",
      "$\\{S_1, S_4, S_5\\}$",
      "$\\{S_2, S_3, S_5\\}$"
    ],
    spiegazione: "Poiché $S_1$ è attivo: per il requisito 1, anche $S_2$ deve essere attivo. Per il requisito 2, essendo $S_2$ attivo, $S_3$ deve essere disattivato. Per il requisito 3, per contronominale $\\neg S_3 \\to \\neg S_4$, essendo $S_3$ disattivato anche $S_4$ deve essere disattivato. Per raggiungere esattamente tre servizi attivi tra i cinque, l’unico servizio rimasto disponibile è $S_5$. La terna attiva è quindi necessariamente $\\{S_1, S_2, S_5\\}$.",
    fonte: "Lotto L3 del progetto — L3-14 (ID 751)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 752,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Cinque delegati ($D_1, D_2, D_3, D_4, D_5$) sono ripartiti in due commissioni: Commissione A (esattamente 2 membri) e Commissione B (esattamente 3 membri). Valgono i seguenti vincoli:\n1. $D_1$ e $D_2$ sono assegnati a commissioni diverse;\n2. $D_3$ e $D_4$ sono assegnati alla stessa commissione;\n3. Se $D_5$ è assegnato alla Commissione A, allora $D_1$ è assegnato alla Commissione A ($D_5 \\in A \\to D_1 \\in A$);\n4. Il delegato $D_3$ è assegnato alla Commissione B.\nQuali delegati compongono la Commissione A?",
    rispostaCorretta: "$\\{D_1, D_5\\}$",
    risposteErrate: [
      "$\\{D_2, D_5\\}$",
      "$\\{D_1, D_2\\}$",
      "$\\{D_3, D_4\\}$",
      "La composizione della Commissione A non è determinabile in modo univoco"
    ],
    spiegazione: "Dato che $D_3 \\in B$, per il vincolo 2 anche $D_4 \\in B$. Quindi la Commissione B contiene già $\\{D_3, D_4\\}$ e ha spazio per un solo ulteriore membro. Se $D_1$ fosse assegnato a B, allora B sarebbe $\\{D_3, D_4, D_1\\}$ e la Commissione A sarebbe composta da $\\{D_2, D_5\\}$. Ma se $D_5 \\in A$, per il vincolo 3 dovremmo avere $D_1 \\in A$, generando una contraddizione. Dunque $D_1$ deve essere in A. Per il vincolo 1, $D_2$ va in B. La Commissione B è completa: $\\{D_3, D_4, D_2\\}$. La Commissione A è quindi formata univocamente da $\\{D_1, D_5\\}$.",
    fonte: "Lotto L3 del progetto — L3-15 (ID 752)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 753,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "In un laboratorio chimico si deve preparare una soluzione contenente esattamente tre reagenti scelti tra cinque sostanze ipotetiche ($R_1, R_2, R_3, R_4, R_5$). Valgono le seguenti regole di compatibilità e sicurezza:\n1. La presenza del reagente $R_1$ richiede obbligatoriamente la presenza del reagente $R_2$ ($R_1 \\to R_2$);\n2. I reagenti $R_2$ e $R_4$ sono incompatibili e non possono essere presenti insieme nella stessa soluzione ($\\neg(R_2 \\land R_4)$);\n3. Se nella miscela è presente $R_3$, allora NON può essere presente $R_5$ ($R_3 \\to \\neg R_5$);\n4. Se il reagente $R_4$ NON è presente nella miscela, allora il reagente $R_5$ DEVE essere presente ($\\neg R_4 \\to R_5$);\n5. Il reagente $R_1$ è stato inserito obbligatoriamente nella soluzione.\nQuale terna di reagenti costituisce l’UNICA miscela ammissibile?",
    rispostaCorretta: "$\\{R_1, R_2, R_5\\}$",
    risposteErrate: [
      "$\\{R_1, R_2, R_3\\}$",
      "$\\{R_1, R_2, R_4\\}$",
      "$\\{R_1, R_3, R_5\\}$",
      "$\\{R_2, R_4, R_5\\}$"
    ],
    spiegazione: "Procediamo per deduzione a catena: 1) Dal vincolo 5, $R_1$ è presente. 2) Dal vincolo 1 ($R_1 \\to R_2$), ne segue che $R_2$ è presente. 3) Dal vincolo 2 (incompatibilità tra $R_2$ e $R_4$), essendo $R_2$ presente, $R_4$ è categoricamente assente ($\\neg R_4$). 4) Dal vincolo 4 ($\\neg R_4 \\to R_5$), essendo $R_4$ assente, $R_5$ deve essere obbligatoriamente presente. 5) Dal vincolo 3 per contronominale ($R_5 \\to \\neg R_3$), essendo $R_5$ presente, $R_3$ è categoricamente escluso. La miscela deve contenere esattamente 3 reagenti, e abbiamo determinato la presenza di $R_1, R_2, R_5$ e l’esclusione di $R_3, R_4$. L’unica combinazione ammissibile è rigorosamente $\\{R_1, R_2, R_5\\}$. I distrattori risultano tutti inammissibili: $\\{R_1, R_2, R_3\\}$ viola il vincolo 4 (l’assenza di $R_4$ impone la presenza di $R_5$, assente in questa terna); $\\{R_1, R_2, R_4\\}$ viola il vincolo 2 di incompatibilità tra $R_2$ e $R_4$; $\\{R_1, R_3, R_5\\}$ viola il vincolo 1 (manca $R_2$) e il vincolo 3 (compresenza vietata di $R_3$ e $R_5$); $\\{R_2, R_4, R_5\\}$ manca del reagente obbligatorio $R_1$ e viola il vincolo 2.",
    fonte: "Lotto L3 del progetto — L3-16 (ID 753)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 754,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Una centrale di monitoraggio riceve i segnali da quattro allarmi indipendenti ($A_1, A_2, A_3, A_4$). Valgono le seguenti condizioni operative:\n1. La sirena generale scatta se e solo se risultano attivi contemporaneamente almeno due allarmi;\n2. Gli allarmi $A_1$ e $A_2$ sono mutuamente esclusivi (non possono essere attivi insieme);\n3. L’allarme $A_3$ è guasto ed è permanentemente disattivato.\nAffinché la sirena generale possa scattare, quale allarme DEVE essere necessariamente attivo?",
    rispostaCorretta: "$A_4$",
    risposteErrate: [
      "$A_1$",
      "$A_2$",
      "$A_3$",
      "Nessun allarme singolo è indispensabile"
    ],
    spiegazione: "Per far scattare la sirena occorrono almeno 2 allarmi attivi. L’allarme $A_3$ è disattivato (0 allarmi). Tra $A_1$ e $A_2$ può essercene al massimo uno attivo a causa della mutua esclusione. Pertanto, l’unico modo per raggiungere la quota minima di 2 allarmi attivi è avere attivo l’allarme $A_4$ insieme a uno tra $A_1$ o $A_2$. L’allarme $A_4$ è quindi una condizione necessaria indispensabile.",
    fonte: "Lotto L3 del progetto — L3-17 (ID 754)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 755,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro agenti di sicurezza ($G_1, G_2, G_3, G_4$) presidiano due postazioni (Postazione Nord e Postazione Sud) in due turni distinti (Turno Diurno e Turno Notturno), con esattamente un agente per postazione in ogni turno (4 assegnazioni biunivoche in totale). Sono noti i seguenti vincoli:\n1. L’agente $G_1$ è assegnato al Turno Notturno;\n2. La Postazione Nord nel Turno Diurno è presidiata dall’agente $G_2$;\n3. L’agente $G_3$ NON può svolgere il Turno Notturno;\n4. L’agente $G_4$ NON presidia la Postazione Sud.\nQuale agente presidia la Postazione Sud nel Turno Notturno?",
    rispostaCorretta: "$G_1$",
    risposteErrate: [
      "$G_2$",
      "$G_3$",
      "$G_4$",
      "Non è possibile stabilirlo in modo univoco"
    ],
    spiegazione: "Analisi delle 4 caselle: (Diurno, Nord), (Diurno, Sud), (Notturno, Nord), (Notturno, Sud). Dal vincolo 2: (Diurno, Nord) = $G_2$. Restano libere tre caselle per $G_1, G_3, G_4$. Dal vincolo 3: $G_3$ non fa la notte, quindi $G_3$ deve fare il giorno, ossia (Diurno, Sud) = $G_3$. Rimangono le due caselle notturne per $G_1$ e $G_4$. Dal vincolo 4: $G_4$ non può stare a Sud, quindi $G_4$ è assegnato a (Notturno, Nord). Di conseguenza, la casella (Notturno, Sud) deve essere presidiata necessariamente da $G_1$.",
    fonte: "Lotto L3 del progetto — L3-18 (ID 755)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 756,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un tecnico deve installare esattamente due schede di espansione scelte tra quattro modelli disponibili ($C_1, C_2, C_3, C_4$). Valgono le seguenti regole di compatibilità hardware:\n1. Se si installa la scheda $C_1$, NON è possibile installare la scheda $C_3$ ($\\neg(C_1 \\land C_3)$);\n2. Se NON si installa la scheda $C_4$, è obbligatorio installare la scheda $C_3$ (ossia: $\\neg C_4 \\to C_3$);\n3. Si decide di installare la scheda $C_1$.\nQuale altra scheda DEVE essere necessariamente installata insieme a $C_1$?",
    rispostaCorretta: "$C_4$",
    risposteErrate: [
      "$C_2$",
      "$C_3$",
      "Indifferentemente $C_2$ o $C_3$",
      "Nessuna scheda è compatibile con $C_1$"
    ],
    spiegazione: "Poiché $C_1$ viene installata: per la regola 1, la scheda $C_3$ non può essere installata ($\\neg C_3$). Applicando la contronominale alla regola 2 ($\\neg C_3 \\to C_4$), dall’assenza di $C_3$ consegue categoricamente che la scheda $C_4$ deve essere installata. Avendo raggiunto il limite stabilito di esattamente due schede ($C_1$ e $C_4$), la scheda $C_4$ deve essere necessariamente installata.",
    fonte: "Lotto L3 del progetto — L3-19 (ID 756)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 757,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro reperti museali ($R_A, R_B, R_C, R_D$) sono esposti in quattro vetrine allineate e numerate da 1 a 4. Valgono le seguenti condizioni di allestimento:\n1. Il reperto $R_A$ è collocato nella vetrina 2;\n2. Il reperto $R_B$ si trova in una vetrina con numero inferiore rispetto a quella del reperto $R_C$ ($\\text{vetrina}(R_B) < \\text{vetrina}(R_C)$);\n3. Il reperto $R_D$ NON può essere collocato nella vetrina 4.\nIn quale vetrina DEVE essere collocato il reperto $R_C$?",
    rispostaCorretta: "Nella vetrina 4",
    risposteErrate: [
      "Nella vetrina 1",
      "Nella vetrina 3",
      "Indifferentemente nella vetrina 3 o nella vetrina 4",
      "La posizione di $R_C$ dipende da quella di $R_A$"
    ],
    spiegazione: "La vetrina 2 è occupata da $R_A$. Le vetrine libere per $R_B, R_C, R_D$ sono 1, 3 e 4. La vetrina 4 non può essere occupata da $R_D$ (vincolo 3) e non può essere occupata da $R_B$ (poiché $R_B < R_C$ e 4 è il numero massimo, $R_B$ in 4 non lascerebbe spazio per $R_C$). Di conseguenza, la vetrina 4 deve essere obbligatoriamente occupata dal reperto $R_C$.",
    fonte: "Lotto L3 del progetto — L3-20 (ID 757)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 758,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Tre colleghi ($A, B, C$) partecipano a un seminario e scelgono ciascuno una tra due sessioni tematiche: Sessione X ($X$) o Sessione Y ($Y$). Valgono le seguenti condizioni:\n1. Almeno un collega partecipa alla Sessione X e almeno uno partecipa alla Sessione Y;\n2. Se $A$ sceglie la Sessione X, allora anche $B$ sceglie la Sessione X ($A_X \\to B_X$);\n3. Il collega $C$ sceglie sempre una sessione diversa da quella scelta da $B$ ($C_X \\leftrightarrow B_Y$).\nQuale delle seguenti affermazioni DEVE essere necessariamente vera in tutte le configurazioni ammissibili?",
    rispostaCorretta: "$B$ e $C$ partecipano sempre a due sessioni diverse",
    risposteErrate: [
      "$A$ partecipa sempre alla Sessione X",
      "$A$ partecipa sempre alla Sessione Y",
      "$B$ partecipa sempre alla Sessione X",
      "$C$ partecipa sempre alla Sessione X"
    ],
    spiegazione: "Analizziamo le configurazioni ammissibili delle scelte $(A, B, C)$: 1) Se $A=X \\implies B=X \\implies C=Y$, terna $(X, X, Y)$ (valida, sono presenti sia X sia Y). 2) Se $A=Y$: se poniamo $B=X \\implies C=Y$, terna $(Y, X, Y)$ (valida); se poniamo $B=Y \\implies C=X$, terna $(Y, Y, X)$ (valida). In tutte e tre le configurazioni ammissibili, per la regola 3, $B$ e $C$ scelgono rigorosamente sessioni opposte. Questa affermazione è vera in ogni modello possibile (ossia DEVE essere vera).",
    fonte: "Lotto L3 del progetto — L3-21 (ID 758)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 759,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro corridori ($W, X, Y, Z$) tagliano il traguardo in quattro posizioni distinte (dal 1° al 4° posto). Sono note le seguenti tre relazioni di arrivo:\n1. $W$ è arrivato prima di $X$ ($W < X$);\n2. $Y$ è arrivato prima di $Z$ ($Y < Z$);\n3. $W$ è arrivato prima di $Z$ ($W < Z$).\nQuale delle seguenti affermazioni PUÒ essere vera (è logicamente compatibile con i vincoli, pur non essendo necessaria)?",
    rispostaCorretta: "$Y$ vince la gara arrivando al 1° posto",
    risposteErrate: [
      "$X$ vince la gara arrivando al 1° posto",
      "$Z$ arriva prima di $W$",
      "$Z$ arriva prima di $Y$",
      "$X$ arriva prima di $W$"
    ],
    spiegazione: "I vincoli impongono: $W < X$, $Y < Z$, $W < Z$. Una configurazione valida è $(Y, W, X, Z)$ in cui $Y$ arriva 1°, $W$ 2°, $X$ 3°, $Z$ 4° (rispetta tutti i vincoli: $W<X, Y<Z, W<Z$). Dunque l’affermazione «$Y$ vince la gara» PUÒ essere vera. Al contrario: $X$ non può essere 1° (perché $W < X$); $Z$ non può precedere $W$ né $Y$ (violerebbe i vincoli); $X$ non può precedere $W$.",
    fonte: "Lotto L3 del progetto — L3-22 (ID 759)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 760,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro scatole chiuse (numerate 1, 2, 3, 4) contengono ciascuna una pallina di colore diverso: Rossa ($R$), Verde ($V$), Blu ($B$), Gialla ($G$). Si sa che:\n1. La pallina Rossa si trova nella scatola 1 oppure nella scatola 2;\n2. La pallina Verde si trova in una scatola con numero maggiore rispetto a quella della pallina Blu ($\\text{scatola}(V) > \\text{scatola}(B)$);\n3. La pallina Gialla si trova nella scatola 4.\nQuale delle seguenti affermazioni NON PUÒ in nessun caso essere vera?",
    rispostaCorretta: "La pallina Verde si trova nella scatola 1",
    risposteErrate: [
      "La pallina Blu si trova nella scatola 1",
      "La pallina Rossa si trova nella scatola 1",
      "La pallina Rossa si trova nella scatola 2",
      "La pallina Verde si trova nella scatola 3"
    ],
    spiegazione: "La scatola 4 contiene la pallina Gialla. Le scatole 1, 2, 3 ospitano le palline Rossa, Blu, Verde. Poiché la pallina Verde deve trovarsi in una scatola con indice maggiore di quella Blu ($\\text{scatola}(V) > \\text{scatola}(B)$), la scatola 1 non può in nessun caso contenere la pallina Verde (non esisterebbe alcuna scatola con numero inferiore a 1 per la Blu). Dunque l’affermazione «La pallina Verde si trova nella scatola 1» è categoricamente impossibile.",
    fonte: "Lotto L3 del progetto — L3-23 (ID 760)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 761,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un concorso per un singolo posto di lavoro sono in lizza tre candidati ($P, Q, R$). Valgono le seguenti regole:\n1. Se viene assunto $P$, allora $Q$ non viene assunto ($P \\to \\neg Q$);\n2. Se $Q$ non viene assunto, allora viene assunto $R$ ($\\neg Q \\to R$);\n3. Viene assunto esattamente un solo candidato.\nSi appura ufficialmente che il candidato $R$ NON è stato assunto ($\\neg R$). Quale conclusione segue con assoluta certezza logica?",
    rispostaCorretta: "Il candidato $Q$ è stato assunto e il candidato $P$ non è stato assunto",
    risposteErrate: [
      "Il candidato $P$ è stato assunto",
      "Nessun candidato è stato assunto",
      "Sono stati assunti sia $P$ sia $Q$",
      "Non è possibile stabilire se sia stato assunto $P$ o $Q$"
    ],
    spiegazione: "Dato che $\\neg R$ è vero: per contronominale della regola 2 ($R$ falso $\\implies \\neg Q$ falso), ne deduciamo con certezza che $Q$ è stato assunto. Poiché il posto disponibile è esattamente uno (regola 3), l’assunzione di $Q$ implica che nessun altro può essere assunto, quindi $P$ non è stato assunto. L’esito certo è: $Q$ assunto e $P$ non assunto.",
    fonte: "Lotto L3 del progetto — L3-24 (ID 761)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 762,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un menu degustazione deve essere composto selezionando esattamente tre portate distinte da una lista di cinque piatti ($A, B, C, D, E$). Valgono le seguenti regole dello chef:\n1. Non è consentito inserire contemporaneamente i piatti $A$ e $B$ nella stessa ordinazione ($\\neg(A \\land B)$);\n2. La scelta del piatto $C$ comporta obbligatoriamente la scelta del piatto $D$ ($C \\to D$);\n3. La scelta del piatto $E$ impone di inserire obbligatoriamente SIA il piatto $A$ SIA il piatto $B$ ($E \\to (A \\land B)$).\nQuale piatto è CATEGORICAMENTE ESCLUSO da qualsiasi menu valido?",
    rispostaCorretta: "Il piatto $E$",
    risposteErrate: [
      "Il piatto $A$",
      "Il piatto $B$",
      "Il piatto $C$",
      "Il piatto $D$"
    ],
    spiegazione: "Se si includesse il piatto $E$, per la regola 3 si dovrebbero includere obbligatoriamente sia $A$ sia $B$. Ma la regola 1 vieta categoricamente la compresenza di $A$ e $B$. Di conseguenza, l’inclusione di $E$ genera una contraddizione logica insanabile con la regola 1 (per contronominale, $\\neg(A \\land B) \\to \\neg E$). Il piatto $E$ non può quindi fare parte di nessun menu valido.",
    fonte: "Lotto L3 del progetto — L3-25 (ID 762)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 763,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un prezioso documento è custodito in uno solo tra tre forzieri (Oro, Argento, Bronzo). Su ciascun forziere è incisa una frase:\n- Forziere d’Oro: «Il documento è in questo forziere»;\n- Forziere d’Argento: «Il documento non è in questo forziere»;\n- Forziere di Bronzo: «Il documento non è nel forziere d’Oro».\nSi sa per certo che ESATTAMENTE UNA delle tre frasi è VERA, mentre le altre due sono FALSE. In quale forziere si trova il documento?",
    rispostaCorretta: "Nel forziere d’Argento",
    risposteErrate: [
      "Nel forziere d’Oro",
      "Nel forziere di Bronzo",
      "In nessuno dei tre forzieri",
      "Il problema ammette due soluzioni diverse"
    ],
    spiegazione: "Analizziamo i tre casi possibili: 1) Se il documento è nell’Oro: Oro dice il VERO, Argento dice il VERO (non è in Argento), Bronzo dice il FALSO (ci sarebbero 2 frasi vere: incompatibile con l’ipotesi). 2) Se il documento è nel Bronzo: Oro dice il FALSO, Argento dice il VERO (non è in Argento), Bronzo dice il VERO (non è in Oro) (ci sarebbero 2 frasi vere: incompatibile). 3) Se il documento è nell’Argento: Oro dice il FALSO, Argento dice il FALSO (è in Argento), Bronzo dice il VERO (non è in Oro). In questo caso vi è esattamente 1 frase vera (quella del Bronzo) e 2 false. Il documento si trova quindi necessariamente nel forziere d’Argento.",
    fonte: "Lotto L3 del progetto — L3-26 (ID 763)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 764,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Tre sospettati ($A, B, C$) vengono interrogati su un reato commesso da uno solo di loro. Ciascuno rilascia una sola dichiarazione:\n- $A$ dichiara: «Il colpevole è $B$»;\n- $B$ dichiara: «Io non sono il colpevole»;\n- $C$ dichiara: «Il colpevole non è $A$».\nSi sa che ESATTAMENTE UNA dichiarazione è VERA e DUE sono FALSE. Chi è il colpevole del reato?",
    rispostaCorretta: "$A$",
    risposteErrate: [
      "$B$",
      "$C$",
      "Nessuno dei tre",
      "Non è possibile individuare il colpevole con certezza"
    ],
    spiegazione: "Valutiamo i tre scenari: 1) Se il colpevole è $A$: la dichiarazione di $A$ è FALSA ($B$ non è colpevole); la dichiarazione di $B$ è VERA ($B$ non è colpevole); la dichiarazione di $C$ è FALSA ($C$ dice che non è $A$). In questo caso abbiamo esattamente 1 VERA ($B$) e 2 FALSE ($A$ e $C$), coerente con le premesse. 2) Se il colpevole è $B$: $A$ è VERA, $B$ è FALSA, $C$ è VERA (2 vere). 3) Se il colpevole è $C$: $A$ è FALSA, $B$ è VERA, $C$ è VERA (2 vere). L’unico caso con una sola dichiarazione vera si verifica quando il colpevole è $A$.",
    fonte: "Lotto L3 del progetto — L3-27 (ID 764)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 765,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un sistema di sicurezza informatica assegna due livelli di privilegio in base alle credenziali possedute:\n- Livello Super: concesso se e solo se l’utente possiede contemporaneamente sia il Badge ($B$) sia il PIN ($P$) ($B \\land P$);\n- Livello Base: concesso se l’utente possiede o il Badge ($B$) o il Token ($T$) (disgiunzione inclusiva $B \\lor T$).\nUn utente NON possiede il Badge ($\\neg B$), ma possiede regolarmente sia il Token ($T$) sia il PIN ($P$). A quale livello di accesso è ammesso questo utente?",
    rispostaCorretta: "Soltanto al livello Base (non al livello Super)",
    risposteErrate: [
      "A entrambi i livelli (sia Super sia Base)",
      "A nessun livello di accesso",
      "Soltanto al livello Super",
      "Non è possibile stabilirlo senza conoscere la validità del Token"
    ],
    spiegazione: "Verifichiamo le due condizioni logiche con i dati dell’utente ($B=0, P=1, T=1$): 1) Livello Super: $B \\land P = 0 \\land 1 = 0$ (FALSO, accesso negato). 2) Livello Base: $B \\lor T = 0 \\lor 1 = 1$ (VERO, accesso concesso). Dunque l’utente ottiene l’accesso esclusivamente al livello Base.",
    fonte: "Lotto L3 del progetto — L3-28 (ID 765)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 766,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un circuito logico di controllo è regolato dallo stato di tre interruttori ($I_1, I_2, I_3$), ciascuno dei quali può essere impostato su ON (1) oppure su OFF (0). Valgono le seguenti regole di dipendenza:\n1. Se $I_1$ è impostato su ON, allora $I_2$ è impostato su OFF ($I_1 = 1 \\to I_2 = 0$);\n2. Se $I_2$ è impostato su OFF, allora $I_3$ è impostato su ON ($I_2 = 0 \\to I_3 = 1$);\n3. Dai sensori di monitoraggio risulta che $I_3$ è impostato su OFF ($I_3 = 0$).\nQual è lo stato certo degli interruttori $I_1$ e $I_2$?",
    rispostaCorretta: "$I_1 = \\text{OFF}$ e $I_2 = \\text{ON}$",
    risposteErrate: [
      "$I_1 = \\text{ON}$ e $I_2 = \\text{OFF}$",
      "$I_1 = \\text{ON}$ e $I_2 = \\text{ON}$",
      "$I_1 = \\text{OFF}$ e $I_2 = \\text{OFF}$",
      "Lo stato di $I_1$ è indeterminato"
    ],
    spiegazione: "Procediamo a ritroso tramite Modus Tollens (contronominali): 1) Dal dato certo $I_3 = 0$ e dalla regola 2 ($I_2 = 0 \\to I_3 = 1$), per contronominale ($I_3 = 0 \\to I_2 = 1$) otteniamo $I_2 = 1$ (ON). 2) Dalla regola 1 ($I_1 = 1 \\to I_2 = 0$), per contronominale ($I_2 = 1 \\to I_1 = 0$) otteniamo $I_1 = 0$ (OFF). Lo stato dedotto con necessità logica è dunque $I_1 = \\text{OFF}$ e $I_2 = \\text{ON}$.",
    fonte: "Lotto L3 del progetto — L3-29 (ID 766)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 767,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro professionisti — Aldo, Bruno, Carlo e Dario — svolgono quattro professioni diverse tra Medico, Avvocato, Ingegnere e Architetto (una professione ciascuno). Si conoscono le seguenti informazioni certe:\n1. Il Medico e l’Ingegnere abitano entrambi nello stesso stabile di Aldo (il quale ha una professione diversa da entrambi);\n2. Bruno NON è né l’Avvocato né l’Ingegnere;\n3. Carlo è l’Architetto.\nQual è la professione svolta da Aldo?",
    rispostaCorretta: "L’Avvocato",
    risposteErrate: [
      "Il Medico",
      "L’Ingegnere",
      "L’Architetto",
      "La professione di Aldo non è determinabile"
    ],
    spiegazione: "Dalla premessa 1, Aldo non è né il Medico né l’Ingegnere. Dalla premessa 3, l’Architetto è Carlo, quindi Aldo non è l’Architetto. L’unica professione rimasta disponibile per Aldo è l’Avvocato. Di conseguenza, Aldo è con certezza assoluta l’Avvocato (e ne segue che Bruno è il Medico e Dario è l’Ingegnere).",
    fonte: "Lotto L3 del progetto — L3-30 (ID 767)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 768,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Cinque lezioni universitarie ($L_1, L_2, L_3, L_4, L_5$) devono essere collocate nei giorni feriali dal Lunedì al Venerdì (esattamente una lezione al giorno). Sono stabiliti i seguenti vincoli di calendario:\n1. La lezione $L_3$ si tiene di Lunedì;\n2. La lezione $L_2$ si tiene di Mercoledì;\n3. La lezione $L_5$ si tiene nel giorno immediatamente successivo a quello della lezione $L_4$;\n4. La lezione $L_1$ si tiene prima della lezione $L_4$.\nIn quale giorno della settimana DEVE tenersi la lezione $L_5$?",
    rispostaCorretta: "Venerdì",
    risposteErrate: [
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Indifferentemente Martedì o Venerdì"
    ],
    spiegazione: "I giorni Lunedì e Mercoledì sono occupati rispettivamente da $L_3$ e $L_2$. I giorni liberi sono Martedì, Giovedì, Venerdì. Le lezioni $L_4$ e $L_5$ devono tenersi in due giorni consecutivi (vincolo 3): l’unica coppia di giorni consecutivi liberi nel calendario è (Giovedì, Venerdì), quindi $L_4$ è Giovedì e $L_5$ è Venerdì. Il Martedì rimane assegnato a $L_1$ (che precede $L_4$, soddisfacendo anche il vincolo 4). La lezione $L_5$ si tiene quindi necessariamente di Venerdì.",
    fonte: "Lotto L3 del progetto — L3-31 (ID 768)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 769,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro apparecchiature industriali ($M_A, M_B, M_C, M_D$) vengono sottoposte a revisione in quattro turni sequenziali numerati da 1 a 4. Valgono le seguenti condizioni:\n1. L’apparecchiatura $M_A$ viene revisionata prima di $M_B$ ($\\text{turno}(M_A) < \\text{turno}(M_B)$);\n2. L’apparecchiatura $M_B$ viene revisionata prima di $M_C$ ($\\text{turno}(M_B) < \\text{turno}(M_C)$);\n3. Tra il turno di $M_A$ e il turno di $M_C$ trascorrono esattamente due turni intermedi (ossia: $\\text{turno}(M_C) - \\text{turno}(M_A) = 3$).\nQuale apparecchiatura DEVE essere revisionata al 4° turno?",
    rispostaCorretta: "$M_C$",
    risposteErrate: [
      "$M_A$",
      "$M_B$",
      "$M_D$",
      "Non è possibile stabilirlo univocamente"
    ],
    spiegazione: "Poiché i turni sono quattro (1, 2, 3, 4) e la differenza tra il turno di $M_C$ e quello di $M_A$ è esattamente pari a 3 con $M_A < M_C$, l’unica combinazione numerica possibile è $\\text{turno}(M_A) = 1$ e $\\text{turno}(M_C) = 4$. Al 4° turno deve quindi trovarsi necessariamente l’apparecchiatura $M_C$.",
    fonte: "Lotto L3 del progetto — L3-32 (ID 769)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 770,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Un processore esegue cinque processi distinti ($T_1, T_2, T_3, T_4, T_5$) in cinque cicli temporali successivi ($t_1, t_2, t_3, t_4, t_5$, un processo per ciclo). Sono imposti i seguenti vincoli di precedenza e allocazione:\n1. Il processo $T_1$ deve essere completato prima dell’inizio di $T_2$ ($t(T_1) < t(T_2)$);\n2. Il processo $T_2$ deve essere completato prima dell’inizio di $T_3$ ($t(T_2) < t(T_3)$);\n3. Il processo $T_4$ è allocato al ciclo $t_2$;\n4. Il processo $T_5$ NON può essere eseguito né al ciclo $t_1$ né al ciclo $t_5$.\nQuale processo DEVE essere eseguito al ciclo $t_5$?",
    rispostaCorretta: "$T_3$",
    risposteErrate: [
      "$T_1$",
      "$T_2$",
      "$T_4$",
      "$T_5$"
    ],
    spiegazione: "Analizziamo i 5 slot ($t_1, t_2, t_3, t_4, t_5$): il ciclo $t_2$ è occupato da $T_4$. Restano i quattro slot ${t_1, t_3, t_4, t_5}$ per i processi $T_1, T_2, T_3, T_5$. Dal vincolo 4, $T_5$ non può stare in $t_1$ né in $t_5$, quindi $T_5$ deve necessariamente occupare uno tra $t_3$ o $t_4$. I tre slot rimanenti sono quindi occupati dalla catena d’ordine $T_1 < T_2 < T_3$. Tra questi slot, il ciclo con indice temporale più alto è $t_5$ e quello con indice più basso è $t_1$. Poiché $T_3$ è l’elemento terminale della catena $T_1 < T_2 < T_3$ e $T_5$ non può occupare $t_5$, il ciclo $t_5$ deve essere assegnato con necessità assoluta al processo $T_3$.",
    fonte: "Lotto L3 del progetto — L3-33 (ID 770)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 771,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Una navetta automatizzata effettua un percorso unidirezionale che tocca quattro fermate ($F_1, F_2, F_3, F_4$). Valgono le seguenti regole:\n1. La partenza avviene dalla fermata $F_1$ (1ª fermata della sequenza);\n2. Il capolinea finale è la fermata $F_4$ (4ª fermata della sequenza);\n3. La fermata $F_2$ precede immediatamente la fermata $F_3$.\nQual è la sequenza esatta delle quattro fermate effettuate dalla navetta?",
    rispostaCorretta: "$F_1 \\to F_2 \\to F_3 \\to F_4$",
    risposteErrate: [
      "$F_1 \\to F_3 \\to F_2 \\to F_4$",
      "$F_2 \\to F_3 \\to F_1 \\to F_4$",
      "$F_1 \\to F_4 \\to F_2 \\to F_3$",
      "$F_4 \\to F_3 \\to F_2 \\to F_1$"
    ],
    spiegazione: "La 1ª posizione è $F_1$ e la 4ª posizione è $F_4$. Restano le posizioni 2 e 3. Poiché $F_2$ precede immediatamente $F_3$, la 2ª posizione deve essere $F_2$ e la 3ª posizione deve essere $F_3$. La sequenza completa e univoca è dunque $F_1 \\to F_2 \\to F_3 \\to F_4$.",
    fonte: "Lotto L3 del progetto — L3-34 (ID 771)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 772,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro sessioni di lavoro ($S_A, S_B, S_C, S_D$) sono ripartite nella giornata in quattro slot: due al Mattino (slot 1 e slot 2) e due al Pomeriggio (slot 3 e slot 4). Valgono le seguenti regole:\n1. La sessione $S_A$ deve tenersi al Mattino;\n2. La sessione $S_B$ si tiene nello slot immediatamente precedente a quello di $S_C$ (ossia: $\\text{slot}(S_C) = \\text{slot}(S_B) + 1$);\n3. La sessione $S_D$ è collocata nello slot 4 (fine pomeriggio).\nIn quale slot DEVE tenersi la sessione $S_A$?",
    rispostaCorretta: "Nello slot 1",
    risposteErrate: [
      "Nello slot 2",
      "Nello slot 3",
      "Nello slot 4",
      "Indifferentemente nello slot 1 o nello slot 2"
    ],
    spiegazione: "Lo slot 4 è occupato da $S_D$. Restano liberi gli slot 1, 2, 3. La coppia consecutiva $(S_B, S_C)$ può occupare gli slot ${1, 2}$ oppure ${2, 3}$. Se occupasse gli slot ${1, 2}$, la sessione $S_A$ rimarrebbe nello slot 3 (Pomeriggio), violando il vincolo 1 che impone che $S_A$ sia al Mattino (slot 1 o 2). Di conseguenza, la coppia $(S_B, S_C)$ deve occupare necessariamente gli slot ${2, 3}$, lasciando lo slot 1 (Mattino) alla sessione $S_A$.",
    fonte: "Lotto L3 del progetto — L3-35 (ID 772)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 773,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Tre colleghi ($P, Q, R$) lavorano in tre reparti diversi (Vendite, IT, Amministrazione) in tre città diverse (Roma, Milano, Napoli). Si conoscono le seguenti informazioni biunivoche:\n1. $P$ lavora nella sede di Milano;\n2. Il dipendente del reparto IT lavora nella sede di Roma;\n3. $Q$ lavora nel reparto Amministrazione.\nIn quale città lavora $Q$ e in quale reparto lavora $P$?",
    rispostaCorretta: "$Q$ lavora a Napoli e $P$ lavora alle Vendite",
    risposteErrate: [
      "$Q$ lavora a Roma e $P$ lavora all’IT",
      "$Q$ lavora a Milano e $P$ lavora all’Amministrazione",
      "$Q$ lavora a Napoli e $P$ lavora all’IT",
      "$Q$ lavora a Roma e $P$ lavora alle Vendite"
    ],
    spiegazione: "Analizziamo gli incroci: la sede IT è a Roma (premessa 2). Poiché $P$ è a Milano (premessa 1), $P$ non lavora all’IT. Poiché $Q$ è all’Amministrazione (premessa 3), neanche $Q$ lavora all’IT. Dunque all’IT a Roma lavora necessariamente $R$. Restano le sedi di Milano e Napoli per $P$ e $Q$: $P$ è a Milano, quindi $Q$ è a Napoli (all’Amministrazione). A Milano, per esclusione, $P$ lavora al reparto Vendite. L’abbinamento corretto è: $Q$ a Napoli e $P$ alle Vendite.",
    fonte: "Lotto L3 del progetto — L3-36 (ID 773)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 774,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In uno studio microbiologico su quattro ceppi batterici ($C_1, C_2, C_3, C_4$) e quattro sostanze antibatteriche ($A_1, A_2, A_3, A_4$), sono state accertate le seguenti proprietà:\n1. Il ceppo $C_1$ è resistente esclusivamente alla sostanza $A_1$;\n2. Il ceppo $C_2$ è resistente esattamente alle sostanze $A_2$ e $A_3$;\n3. Il ceppo $C_3$ è resistente a tutte le sostanze a cui è resistente $C_2$, più alla sostanza $A_4$ (e a nessun’altra);\n4. Il ceppo $C_4$ non resiste alla sostanza $A_4$.\nA quale combinazione esatta di sostanze è resistente il ceppo $C_3$?",
    rispostaCorretta: "Alle sostanze $A_2, A_3, A_4$",
    risposteErrate: [
      "Alle sostanze $A_1, A_2, A_3$",
      "Esclusivamente alla sostanza $A_4$",
      "A tutte e quattro le sostanze ($A_1, A_2, A_3, A_4$)",
      "Alle sostanze $A_1, A_4$"
    ],
    spiegazione: "Dalla premessa 2, il ceppo $C_2$ è resistente ad $A_2$ e $A_3$. Dalla premessa 3, il ceppo $C_3$ eredita tutte le resistenze di $C_2$ (quindi $A_2$ e $A_3$) con l’aggiunta specifica di $A_4$, senza ulteriori resistenze. Il ceppo $C_3$ è quindi resistente esattamente alla terna ${A_2, A_3, A_4}$.",
    fonte: "Lotto L3 del progetto — L3-37 (ID 774)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 775,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro squadre ($A, B, C, D$) disputano un torneo a girone all’italiana (ogni squadra affronta tutte le altre esattamente una volta, per un totale di 3 partite a squadra). Il punteggio assegna: 3 punti per la vittoria, 1 punto per il pareggio, 0 punti per la sconfitta. Al termine del torneo:\n- La squadra $A$ ha ottenuto 9 punti;\n- La squadra $B$ ha ottenuto 4 punti;\n- La squadra $C$ ha ottenuto 4 punti.\nQuanti punti ha totalizzato la squadra $D$?",
    rispostaCorretta: "0 punti",
    risposteErrate: [
      "1 punto",
      "2 punti",
      "3 punti",
      "Non è possibile stabilirlo senza conoscere i gol segnati"
    ],
    spiegazione: "Poiché la squadra $A$ ha 9 punti su 3 partite, ha vinto tutte le sue partite, sconfiggendo $B, C, D$. La squadra $B$ ha perso contro $A$ (0 pt); per totalizzare 4 punti nelle restanti 2 partite (contro $C$ e $D$), $B$ deve aver ottenuto 1 vittoria e 1 pareggio. Analogamente, la squadra $C$ ha perso contro $A$ (0 pt) e deve aver ottenuto 1 vittoria e 1 pareggio contro $B$ e $D$. L’unico pareggio possibile per entrambe è lo scontro diretto tra $B$ e $C$ (1 pt ciascuna). Ne segue che sia $B$ sia $C$ hanno vinto contro $D$. La squadra $D$ ha quindi perso tutte le 3 partite (contro $A$, contro $B$ e contro $C$), totalizzando esattamente 0 punti.",
    fonte: "Lotto L3 del progetto — L3-38 (ID 775)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 776,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Tre database aziendali ($D_A, D_B, D_C$) vengono allocati su tre server distinti aventi capacità di memoria RAM rispettivamente di 8 GB, 16 GB e 32 GB. Valgono le seguenti informazioni:\n1. Il database $D_A$ richiede una quantità di memoria RAM strettamente maggiore rispetto a $D_B$ ($\\text{RAM}(D_A) > \\text{RAM}(D_B)$);\n2. Il database $D_C$ è allocato sul server con 16 GB di RAM.\nQuale server con specifica capacità di RAM DEVE essere assegnato al database $D_A$?",
    rispostaCorretta: "Il server da 32 GB",
    risposteErrate: [
      "Il server da 8 GB",
      "Il server da 16 GB",
      "Indifferentemente il server da 16 GB o da 32 GB",
      "L’assegnazione non è determinabile univocamente"
    ],
    spiegazione: "Il server da 16 GB è assegnato a $D_C$. Restano disponibili i due server da 8 GB e da 32 GB per i database $D_A$ e $D_B$. Poiché il vincolo 1 impone $\\text{RAM}(D_A) > \\text{RAM}(D_B)$, al database $D_A$ deve essere assegnato necessariamente il server di capacità superiore, ossia quello da 32 GB (mentre a $D_B$ andrà quello da 8 GB).",
    fonte: "Lotto L3 del progetto — L3-39 (ID 776)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 777,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un impianto automatizzato tre sensori diagnostici ($S_1, S_2, S_3$) possono trovarsi nello stato Funzionante ($F$) oppure Guasto ($G$). Valgono le seguenti regole di dipendenza logica:\n1. Se $S_1$ è Guasto, allora $S_2$ è Funzionante ($S_1 = G \\to S_2 = F$);\n2. Se $S_2$ è Funzionante, allora $S_3$ è Guasto ($S_2 = F \\to S_3 = G$);\n3. Dalla telemetria risulta con certezza che $S_3$ è Funzionante ($S_3 = F$).\nQual è lo stato certo del sensore $S_1$?",
    rispostaCorretta: "$S_1$ è Funzionante",
    risposteErrate: [
      "$S_1$ è Guasto",
      "$S_1$ è in standby non diagnosticabile",
      "Lo stato di $S_1$ dipende dallo stato di alimentazione ausiliaria",
      "Nessuna conclusione è deducibile per $S_1$"
    ],
    spiegazione: "Dato $S_3 = F$ (non guasto): applicando il Modus Tollens alla regola 2 ($S_2 = F \\to S_3 = G$), per contronominale ($S_3 = F \\to S_2 = G$) otteniamo che $S_2$ è Guasto. Applicando nuovamente il Modus Tollens alla regola 1 ($S_1 = G \\to S_2 = F$), per contronominale ($S_2 = G \\to S_1 = F$) deduciamo con certezza che $S_1$ è Funzionante.",
    fonte: "Lotto L3 del progetto — L3-40 (ID 777)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 778,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Una condotta idraulica è dotata di quattro valvole automatizzate ($V_1, V_2, V_3, V_4$), ciascuna delle quali può essere Aperta ($A$) o Chiusa ($C$). Il sistema opera secondo le seguenti regole di propagazione:\n1. L’apertura della valvola $V_1$ causa la chiusura della valvola $V_2$ ($V_1 = A \\to V_2 = C$);\n2. La chiusura della valvola $V_2$ causa l’apertura della valvola $V_3$ ($V_2 = C \\to V_3 = A$);\n3. L’apertura della valvola $V_3$ causa la chiusura della valvola $V_4$ ($V_3 = A \\to V_4 = C$).\nSapendo che la valvola $V_1$ viene Aperta ($V_1 = A$), quale configurazione finale assumono con certezza le altre tre valvole?",
    rispostaCorretta: "$V_2 = C$, $V_3 = A$, $V_4 = C$",
    risposteErrate: [
      "$V_2 = A$, $V_3 = C$, $V_4 = A$",
      "$V_2 = C$, $V_3 = C$, $V_4 = C$",
      "$V_2 = A$, $V_3 = A$, $V_4 = A$",
      "$V_2 = C$, $V_3 = A$, $V_4 = A$"
    ],
    spiegazione: "Seguiamo la catena causale passo per passo: 1) $V_1 = A \\implies$ per la regola 1 si ha $V_2 = C$; 2) $V_2 = C \\implies$ per la regola 2 si ha $V_3 = A$; 3) $V_3 = A \\implies$ per la regola 3 si ha $V_4 = C$. La terna di stati conseguente è quindi rigorosamente: $V_2 = C$, $V_3 = A$, $V_4 = C$.",
    fonte: "Lotto L3 del progetto — L3-41 (ID 778)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 779,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un sistema di autorizzazioni aziendali vigono le seguenti definizioni formali:\n1. Il profilo «Amministratore» garantisce sia il permesso di Scrittura sia il permesso di Lettura;\n2. Il profilo «Redattore» garantisce sia il permesso di Scrittura sia il permesso di Lettura, ma esclude il permesso di Cancellazione;\n3. L’utente Mario possiede il permesso di Scrittura, ma NON possiede il permesso di Lettura.\nQuale conclusione segue con necessità logica assoluta?",
    rispostaCorretta: "Mario non può possedere né il profilo Amministratore né il profilo Redattore",
    risposteErrate: [
      "Mario possiede sicuramente il profilo Redattore",
      "Mario possiede sicuramente il profilo Amministratore",
      "Mario possiede sicuramente il permesso di Cancellazione",
      "La configurazione dei permessi di Mario è contraddittoria con il sistema"
    ],
    spiegazione: "Sia il profilo Amministratore sia il profilo Redattore richiedono come condizione necessaria il possesso del permesso di Lettura. Poiché Mario è privo del permesso di Lettura, per Modus Tollens non può essere associato a nessuno dei due profili.",
    fonte: "Lotto L3 del progetto — L3-42 (ID 779)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 780,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un workflow di collaudo software prevede quattro fasi sequenziali ($F_1, F_2, F_3, F_4$). Le regole di transizione stabiliscono che:\n1. La fase $F_2$ viene eseguita solo se $F_1$ ha avuto esito Positivo ($F_1 = P$);\n2. La fase $F_3$ viene eseguita solo se $F_2$ ha avuto esito Positivo ($F_2 = P$);\n3. La fase $F_4$ viene eseguita solo se $F_3$ ha avuto esito Positivo ($F_3 = P$).\nSi appura che un test ha raggiunto ed eseguito con successo la fase finale $F_4$. Cosa si può dedurre con certezza?",
    rispostaCorretta: "Le fasi $F_1, F_2, F_3$ hanno avuto tutte esito Positivo",
    risposteErrate: [
      "Almeno una tra $F_1$ o $F_2$ ha avuto esito Negativo",
      "Solo la fase $F_3$ ha avuto esito Positivo",
      "La fase $F_1$ è stata saltata per override di sistema",
      "Non è possibile determinare l’esito della fase $F_1$"
    ],
    spiegazione: "Per raggiungere la fase $F_4$ è necessario che $F_3$ sia stata positiva. Per aver eseguito $F_3$ è necessario che $F_2$ sia stata positiva. Per aver eseguito $F_2$ è necessario che $F_1$ sia stata positiva. Dunque l’esecuzione della fase finale $F_4$ garantisce con certezza assoluta che tutte le fasi propedeutiche $F_1, F_2, F_3$ hanno registrato esito Positivo.",
    fonte: "Lotto L3 del progetto — L3-43 (ID 780)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 781,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro veicoli ($A, B, C, D$) giungono contemporaneamente a un incrocio regolato da diritti di precedenza relativi. Valgono i seguenti vincoli:\n1. Il veicolo $A$ deve dare la precedenza al veicolo $B$ (transita dopo $B$, $B \\prec A$);\n2. Il veicolo $B$ deve dare la precedenza al veicolo $C$ ($C \\prec B$);\n3. Il veicolo $C$ ha la destra libera e transita per primo;\n4. Il veicolo $D$ transita per ultimo dopo che tutti gli altri veicoli hanno liberato l’incrocio.\nQual è l’ordine esatto e univoco di transito dei quattro veicoli?",
    rispostaCorretta: "$C \\to B \\to A \\to D$",
    risposteErrate: [
      "$B \\to C \\to A \\to D$",
      "$C \\to A \\to B \\to D$",
      "$A \\to B \\to C \\to D$",
      "$D \\to C \\to B \\to A$"
    ],
    spiegazione: "Concatenando i vincoli: $C$ è il primo (1° posto). $B$ transita dopo $C$ ma prima di $A$ (poiché $C \\prec B \\prec A$). Dunque $B$ è al 2° posto e $A$ al 3° posto. $D$ transita per ultimo (4° posto). L’ordine completo e privo di ambiguità è $C \\to B \\to A \\to D$.",
    fonte: "Lotto L3 del progetto — L3-44 (ID 781)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 782,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un protocollo di firma crittografica multifattoriale impiega tre chiavi ($K_1, K_2, K_3$). La transazione viene autorizzata se e solo se risultano valide contemporaneamente almeno due chiavi su tre. Si verifica la seguente situazione:\n1. La chiave $K_1$ risulta revocata e non valida;\n2. Le chiavi $K_2$ e $K_3$ risultano entrambe perfettamente integre e valide.\nQual è l’esito formale dell’operazione?",
    rispostaCorretta: "La transazione viene autorizzata grazie alla congiunzione valida di $K_2$ e $K_3$",
    risposteErrate: [
      "La transazione viene respinta perché è richiesta la validità di tutte e tre le chiavi",
      "La transazione viene respinta a causa della revoca di $K_1$",
      "La transazione viene congelata in attesa del ripristino di $K_1$",
      "La transazione viene autorizzata con un livello di sicurezza nullo"
    ],
    spiegazione: "La condizione necessaria e sufficiente per l’autorizzazione è avere almeno 2 chiavi valide tra ${K_1, K_2, K_3}$. Con $K_1 = 0, K_2 = 1, K_3 = 1$, il numero di chiavi valide è esattamente 2 (pari alla soglia minima richiesta). La transazione viene quindi regolarmente e pienamente autorizzata.",
    fonte: "Lotto L3 del progetto — L3-45 (ID 782)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 783,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quattro persone ($A, B, C, D$) siedono attorno a un tavolo quadrato avente quattro posti numerati da 1 a 4 in senso orario (il posto 1 è opposto al posto 3, il posto 2 è opposto al posto 4). Valgono i seguenti vincoli di seduta:\n1. La persona $A$ siede al posto 1;\n2. La persona $B$ siede di fronte ad $A$ (al posto 3);\n3. La persona $C$ siede a destra di $A$ (al posto 2 in senso orario).\nIn quale posizione siede la persona $D$?",
    rispostaCorretta: "Al posto 4 (a sinistra di $A$ e di fronte a $C$)",
    risposteErrate: [
      "Al posto 2 (a destra di $A$)",
      "Al posto 3 (di fronte ad $A$)",
      "Al posto 1 (accanto ad $A$)",
      "La posizione di $D$ non è univoca"
    ],
    spiegazione: "I posti 1, 2 e 3 sono già occupati rispettivamente da $A$, $C$ e $B$. L’unico posto rimasto per la persona $D$ è il posto 4. Nel tavolo circolare/quadrato, il posto 4 si trova a sinistra di $A$ e direttamente di fronte al posto 2 occupato da $C$.",
    fonte: "Lotto L3 del progetto — L3-46 (ID 783)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 784,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Tre logici ($P_1, P_2, P_3$) sono disposti in fila indiana: $P_3$ vede i cappelli di $P_2$ e $P_1$; $P_2$ vede solo il cappello di $P_1$; $P_1$ non vede alcun cappello. I tre sanno che sono disponibili in totale 2 cappelli Neri e 3 cappelli Bianchi, e che ciascuno indossa uno di questi 5 cappelli. Viene chiesto nell’ordine:\n1. A $P_3$: «Sai di che colore è il tuo cappello?», e $P_3$ risponde: «No»;\n2. A $P_2$: «Sai di che colore è il tuo cappello?», e $P_2$ risponde: «No»;\n3. Viene quindi chiesto a $P_1$ il colore del proprio cappello.\nCosa può affermare con assoluta certezza logica $P_1$?",
    rispostaCorretta: "«Il mio cappello è Bianco»",
    risposteErrate: [
      "«Il mio cappello è Nero»",
      "«Non posso conoscere il colore del mio cappello»",
      "«Il mio cappello ha lo stesso colore di quello di $P_3$»",
      "«I cappelli di $P_1$ e $P_2$ sono entrambi Neri»"
    ],
    spiegazione: "Analisi di metaragionamento: 1) Se $P_3$ avesse visto due cappelli Neri davanti a sé (su $P_2$ e $P_1$), sapendo che i cappelli Neri totali sono solo 2, avrebbe dedotto che il proprio cappello era Bianco. Avendo risposto «No», $P_3$ rivela a tutti che la coppia $(P_1, P_2)$ NON è $(N, N)$. 2) $P_2$ ascolta la risposta di $P_3$ e sa che non possono essere entrambi Neri. Se $P_2$ vedesse un cappello Nero su $P_1$, dedurrebbe subito che il proprio deve essere Bianco. Avendo risposto «No», $P_2$ dimostra che $P_1$ non ha un cappello Nero. 3) $P_1$, ascoltando le due risposte, deduce con certezza logica assoluta che il proprio cappello è BIANCO.",
    fonte: "Lotto L3 del progetto — L3-47 (ID 784)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 785,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Su una bilancia a due piatti vengono confrontate quattro sfere piene ($S_1, S_2, S_3, S_4$) aventi pesi incogniti. Si ottengono i seguenti esiti sperimentali certi:\n1. Prima pesata: la coppia $(S_1 + S_2)$ è in perfetto equilibrio con la coppia $(S_3 + S_4)$ (ossia: $S_1 + S_2 = S_3 + S_4$);\n2. Seconda pesata: la sfera $S_4$ è strettamente più pesante della sfera $S_1$ (ossia: $S_4 > S_1$).\nQuale relazione d’ordine tra i pesi delle sfere $S_2$ e $S_3$ DEVE essere necessariamente vera?",
    rispostaCorretta: "$S_2$ è strettamente più pesante di $S_3$ ($S_2 > S_3$)",
    risposteErrate: [
      "$S_3$ è strettamente più pesante di $S_2$ ($S_3 > S_2$)",
      "$S_2$ e $S_3$ hanno esattamente lo stesso peso ($S_2 = S_3$)",
      "$S_1$ è più pesante di $S_2$",
      "Non è possibile stabilire alcuna relazione tra $S_2$ e $S_3$"
    ],
    spiegazione: "Dall’uguaglianza della prima pesata: $S_1 + S_2 = S_3 + S_4 \\iff S_2 - S_3 = S_4 - S_1$. Dalla seconda pesata sappiamo che $S_4 > S_1$, il che implica che la quantità $(S_4 - S_1)$ è strettamente positiva ($S_4 - S_1 > 0$). Di conseguenza, anche $(S_2 - S_3)$ deve essere strettamente positiva ($S_2 - S_3 > 0$), da cui segue necessariamente $S_2 > S_3$.",
    fonte: "Lotto L3 del progetto — L3-48 (ID 785)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 786,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Una rete di trasmissione dati è strutturata su cinque nodi ($N_1, N_2, N_3, N_4, N_5$) collegati da canali unidirezionali orientati:\n- Da $N_1$ partono canali verso $N_2$ e verso $N_3$;\n- Da $N_2$ parte un canale verso $N_4$;\n- Da $N_3$ parte un canale verso $N_4$;\n- Da $N_4$ parte un canale verso $N_5$.\nA causa di un guasto, il nodo $N_2$ è completamente bloccato e non può ricevere né trasmettere dati. Qual è l’UNICO percorso orientato ammissibile per trasmettere un pacchetto dati da $N_1$ a $N_5$?",
    rispostaCorretta: "$N_1 \\to N_3 \\to N_4 \\to N_5$",
    risposteErrate: [
      "$N_1 \\to N_2 \\to N_4 \\to N_5$",
      "$N_1 \\to N_4 \\to N_5$",
      "$N_1 \\to N_3 \\to N_5$",
      "Non esiste alcun percorso valido a causa del guasto"
    ],
    spiegazione: "I percorsi possibili da $N_1$ a $N_5$ nel grafo sono originariamente due: 1) $N_1 \\to N_2 \\to N_4 \\to N_5$; 2) $N_1 \\to N_3 \\to N_4 \\to N_5$. Essendo il nodo $N_2$ bloccato e inaccessibile, il primo percorso è interrotto. Il secondo percorso $N_1 \\to N_3 \\to N_4 \\to N_5$ non transita per $N_2$, rispetta tutti i collegamenti orientati esistenti e costituisce l’unico tragitto ammissibile.",
    fonte: "Lotto L3 del progetto — L3-49 (ID 786)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 787,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Cinque ingegneri informatici ($A, B, C, D, E$) sviluppano cinque progetti software distinti ($P_1, P_2, P_3, P_4, P_5$), impiegando ciascuno un linguaggio di programmazione differente scelto tra Python, C++, Java, Rust e Go. Sono noti i seguenti vincoli di assegnazione biunivoca:\n1. L’ingegnere che programma in Rust lavora al progetto $P_3$;\n2. L’ingegnere $A$ programma in Python ed è assegnato al progetto $P_1$;\n3. L’ingegnere $B$ lavora al progetto $P_2$, ma NON programma né in Go né in Java;\n4. L’ingegnere $C$ programma in Java;\n5. L’ingegnere $D$ NON lavora al progetto $P_3$.\nIn quale linguaggio programma l’ingegnere $E$ e a quale progetto software è assegnato?",
    rispostaCorretta: "L’ingegnere $E$ programma in Rust ed è assegnato al progetto $P_3$",
    risposteErrate: [
      "L’ingegnere $E$ programma in Go ed è assegnato al progetto $P_4$",
      "L’ingegnere $E$ programma in C++ ed è assegnato al progetto $P_2$",
      "L’ingegnere $E$ programma in Java ed è assegnato al progetto $P_5$",
      "Non è possibile stabilire il linguaggio di $E$ senza conoscere l’assegnazione di $D$"
    ],
    spiegazione: "Procediamo con la deduzione completa a matrice: 1) $A$ è assegnato a $(P_1, \\text{Python})$ (vincolo 2). 2) $B$ è assegnato a $P_2$ (vincolo 3); per il linguaggio di $B$, escludiamo Python (di $A$), Java e Go (vietati dal vincolo 3), e Rust (poiché Rust è legato a $P_3$, vincolo 1): ne consegue che $B$ programma necessariamente in C++. 3) $C$ programma in Java (vincolo 4), quindi non può essere su $P_3$ (che richiede Rust). 4) Dobbiamo assegnare la coppia $(P_3, \\text{Rust})$ a uno tra gli ingegneri rimasti ($D$ o $E$). Poiché il vincolo 5 stabilisce esplicitamente che $D$ non lavora a $P_3$, l’assegnazione della coppia $(P_3, \\text{Rust})$ spetta con assoluta necessità logica all’ingegnere $E$.",
    fonte: "Lotto L3 del progetto — L3-50 (ID 787)",
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  }
,
  {
    id: 788,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "In una classe di 100 studenti, 60 studiano la lingua inglese, 45 studiano la lingua francese e 20 studiano entrambe le lingue. Quanti studenti non studiano né l’inglese né il francese?",
    rispostaCorretta: "15",
    risposteErrate: [
          "20",
          "25",
          "10",
          "5"
    ],
    spiegazione: "Applichiamo il principio di inclusione-esclusione per determinare il numero di studenti che studiano almeno una delle due lingue: $|A \\cup B| = |A| + |B| - |A \\cap B| = 60 + 45 - 20 = 85$. Il numero di studenti che non studiano alcuna lingua è dato dal complemento rispetto all’universo totale: $100 - 85 = 15$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 789,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano $A, B, C$ tre insiemi non vuoti. Si sa che $A$ è un sottoinsieme proprio di $B$ ($A \\subset B$) e che $B$ e $C$ sono disgiunti ($B \\cap C = \\emptyset$). Quale delle seguenti affermazioni è NECESSARIAMENTE vera?",
    rispostaCorretta: "$A$ e $C$ sono disgiunti ($A \\cap C = \\emptyset$)",
    risposteErrate: [
          "$A \\cup C = B$",
          "$A$ contiene elementi di $C$",
          "$B \\subset C$",
          "$A \\cup B = C$"
    ],
    spiegazione: "Poiché ogni elemento di $A$ appartiene anche a $B$ ($A \\subset B$) e nessun elemento di $B$ appartiene a $C$ ($B \\cap C = \\emptyset$), ne consegue per transitività dell’inclusione e disgiunzione che nessun elemento di $A$ può appartenere a $C$. Pertanto $A \\cap C = \\emptyset$ è necessariamente vera.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 790,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano $A, B, C$ tre insiemi finiti con cardinalità $|A| = 30$, $|B| = 25$ e $|C| = 20$. Sapendo che $B$ e $C$ sono disgiunti ($B \\cap C = \\emptyset$), qual è la cardinalità dell’insieme $A \\cup (B \\cap C)$?",
    rispostaCorretta: "30",
    risposteErrate: [
          "75",
          "55",
          "50",
          "0"
    ],
    spiegazione: "Poiché $B \\cap C = \\emptyset$ (l’intersezione tra due insiemi disgiunti è l’insieme vuoto), l’espressione $A \\cup (B \\cap C)$ si riduce a $A \\cup \\emptyset = A$. La cardinalità cercata è quindi semplicemente $|A| = 30$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 791,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un gruppo di 50 programmatori utilizza tre linguaggi: Python ($P$), C++ ($C$) e Java ($J$). I dati rilevati mostrano che:\n1. 30 programmatori usano Python;\n2. 25 programmatori usano C++;\n3. 20 programmatori usano Java;\n4. Nessun programmatore usa tutti e tre i linguaggi contemporaneamente ($|P \\cap C \\cap J| = 0$);\n5. Tutti i 50 programmatori usano almeno uno dei tre linguaggi ($|P \\cup C \\cup J| = 50$).\nQuanti programmatori utilizzano ESATTAMENTE due linguaggi?",
    rispostaCorretta: "25",
    risposteErrate: [
          "15",
          "20",
          "30",
          "10"
    ],
    spiegazione: "Per la formula di inclusione-esclusione a 3 insiemi: $|P \\cup C \\cup J| = (|P|+|C|+|J|) - \\sum |\\text{intersezioni a due}| + |P \\cap C \\cap J|$. Sostituendo i valori: $50 = (30 + 25 + 20) - \\sum |\\text{intersezioni a due}| + 0 \\implies 50 = 75 - \\sum |\\text{intersezioni a due}| \\implies \\sum |\\text{intersezioni a due}| = 25$. Poiché l’intersezione tripla è vuota, la somma delle intersezioni a due coincide esattamente con il numero di persone che usano esattamente due linguaggi, ovvero 25.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 792,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sia $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ l’universo di riferimento. Siano $A = \\{x \\in U \\mid x \\text{ è pari}\\}$ e $B = \\{x \\in U \\mid x \\text{ è multiplo di 3}\\}$. Qual è la cardinalità del complemento dell’intersezione, ossia $|(A \\cap B)^c|$?",
    rispostaCorretta: "9",
    risposteErrate: [
          "8",
          "7",
          "1",
          "10"
    ],
    spiegazione: "Gli elementi di $A$ sono i numeri pari: $A = \\{2, 4, 6, 8, 10\\}$. Gli elementi di $B$ sono i multipli di 3: $B = \\{3, 6, 9\\}$. L’intersezione $A \\cap B$ è data dai numeri sia pari sia multipli di 3 (multipli di 6), quindi $A \\cap B = \\{6\\}$, con cardinalità $|A \\cap B| = 1$. Il complemento in $U$ ha cardinalità $|U| - |A \\cap B| = 10 - 1 = 9$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 793,
    materia: "Logica",
    difficolta: "medio",
    domanda: "La differenza simmetrica tra due insiemi $A$ e $B$ è definita come $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$. Sapendo che $|A| = 18$, $|B| = 14$ e $|A \\cap B| = 6$, quanto vale $|A \\Delta B|$?",
    rispostaCorretta: "20",
    risposteErrate: [
          "26",
          "32",
          "8",
          "12"
    ],
    spiegazione: "Calcoliamo le cardinalità delle differenze: $|A \\setminus B| = |A| - |A \\cap B| = 18 - 6 = 12$. $|B \\setminus A| = |B| - |A \\cap B| = 14 - 6 = 8$. Poiché $(A \\setminus B)$ e $(B \\setminus A)$ sono disgiunti per definizione, $|A \\Delta B| = |A \\setminus B| + |B \\setminus A| = 12 + 8 = 20$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 794,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Siano $A$ e $B$ due insiemi tali che l’intersezione $A \\cap B$ contenga esattamente 3 elementi. Quanti elementi possiede l’insieme delle parti dell’intersezione, ossia $\\mathcal{P}(A \\cap B)$?",
    rispostaCorretta: "8",
    risposteErrate: [
          "6",
          "9",
          "3",
          "16"
    ],
    spiegazione: "Dato un insieme finito $S$ con $k$ elementi, il suo insieme delle parti $\\mathcal{P}(S)$ contiene esattamente $2^k$ sottoinsiemi. Avendo $A \\cap B$ cardinalità pari a 3, l’insieme delle parti possiede $2^3 = 8$ elementi.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 795,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si considerino le seguenti premesse insiemistiche:\n1. Tutti gli ingegneri sono laureati ($I \\subseteq L$);\n2. Nessun laureato è minorenne ($L \\cap M = \\emptyset$);\n3. Alcuni atleti sono ingegneri ($A \\cap I \\ne \\emptyset$).\nQuale conclusione segue NECESSARIAMENTE dalle premesse?",
    rispostaCorretta: "Alcuni atleti non sono minorenni",
    risposteErrate: [
          "Tutti gli atleti sono laureati",
          "Nessun atleta è minorenne",
          "Tutti i laureati sono atleti",
          "Nessun ingegnere è un atleta"
    ],
    spiegazione: "Dalla premessa 3 esiste almeno un elemento $x \\in A \\cap I$. Poiché $x \\in I$ e per la premessa 1 $I \\subseteq L$, ne segue $x \\in L$. Dalla premessa 2 $L \\cap M = \\emptyset$, quindi $x \\notin M$. Ne consegue che tale elemento $x$ appartiene ad $A$ ma non ad $M$. Dunque è necessariamente vero che «alcuni atleti non sono minorenni».",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 796,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un circolo di 40 soci si praticano tre attività: Tennis ($T$), Nuoto ($N$) e Scacchi ($S$). Si rilevano i seguenti dati:\n- Ogni socio pratica almeno un’attività ($|T \\cup N \\cup S| = 40$);\n- $|T| = 22$, $|N| = 20$, $|S| = 18$;\n- Chi fa Tennis e Nuoto sono 8 ($|T \\cap N| = 8$);\n- Chi fa Tennis e Scacchi sono 7 ($|T \\cap S| = 7$);\n- Chi fa Nuoto e Scacchi sono 6 ($|N \\cap S| = 6$).\nQuanti soci praticano TUTTE e tre le attività contemporaneamente?",
    rispostaCorretta: "1",
    risposteErrate: [
          "0",
          "3",
          "5",
          "2"
    ],
    spiegazione: "Applichiamo la formula di inclusione-esclusione a 3 insiemi: $|T \\cup N \\cup S| = |T| + |N| + |S| - (|T \\cap N| + |T \\cap S| + |N \\cap S|) + |T \\cap N \\cap S|$. Sostituendo i numeri noti: $40 = 22 + 20 + 18 - (8 + 7 + 6) + |T \\cap N \\cap S| \\implies 40 = 60 - 21 + |T \\cap N \\cap S| \\implies 40 = 39 + |T \\cap N \\cap S| \\implies |T \\cap N \\cap S| = 1$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 797,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Una partizione di un insieme $X$ è una famiglia di sottoinsiemi non vuoti di $X$ a due a due disgiunti la cui unione è $X$. Se $\\{A_1, A_2, A_3\\}$ è una partizione di $X$ con $|A_1| = 8$, $|A_2| = 12$ e $|A_3| = 15$, qual è la cardinalità di $X$?",
    rispostaCorretta: "35",
    risposteErrate: [
          "27",
          "30",
          "40",
          "Non determinabile senza conoscere le intersezioni"
    ],
    spiegazione: "Per definizione di partizione, i sottoinsiemi $A_1, A_2, A_3$ sono a due a due disgiunti ($A_i \\cap A_j = \\emptyset$ per $i \\ne j$) e la loro unione ricopre interamente $X$. Pertanto la cardinalità dell’unione è data esattamente dalla somma delle singole cardinalità: $|X| = |A_1| + |A_2| + |A_3| = 8 + 12 + 15 = 35$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 798,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sia $U = \\{n \\in \\mathbb{N} \\mid 1 \\le n \\le 60\\}$. Definiamo $A = \\{n \\in U \\mid n \\text{ è multiplo di 4}\\}$ e $B = \\{n \\in U \\mid n \\text{ è multiplo di 6}\\}$. Quanti elementi appartengono all’insieme differenza $A \\setminus B$?",
    rispostaCorretta: "10",
    risposteErrate: [
          "15",
          "5",
          "12",
          "8"
    ],
    spiegazione: "I multipli di 4 compresi tra 1 e 60 sono $60 / 4 = 15$, quindi $|A| = 15$. Gli elementi appartenenti all’intersezione $A \\cap B$ sono i numeri multipli sia di 4 sia di 6, cioè i multipli del loro minimo comune multiplo $\\text{mcm}(4, 6) = 12$. I multipli di 12 tra 1 e 60 sono $60 / 12 = 5$. L’insieme differenza $A \\setminus B$ contiene $|A| - |A \\cap B| = 15 - 5 = 10$ elementi.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 799,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è il numero che completa logicamente la seguente successione numerica?\n$$3, \\; 6, \\; 5, \\; 10, \\; 9, \\; 18, \\; 17, \\; ?$$",
    rispostaCorretta: "34",
    risposteErrate: [
          "16",
          "35",
          "18",
          "24"
    ],
    spiegazione: "La sequenza segue uno schema a due operazioni alternate: moltiplicare per 2, poi sottrarre 1. Verifichiamo: $3 \\times 2 = 6$; $6 - 1 = 5$; $5 \\times 2 = 10$; $10 - 1 = 9$; $9 \\times 2 = 18$; $18 - 1 = 17$; $17 \\times 2 = 34$. Il termine successivo è 34.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 800,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Si consideri la seguente successione numerica a binari intrecciati in cui le posizioni dispari e le posizioni pari seguono ciascuna una propria legge di ricorrenza deterministica:\n$$2, \\; 3, \\; 5, \\; 9, \\; 11, \\; 27, \\; 23, \\; 81, \\; 47, \\; ?$$Quale numero deve sostituire il punto interrogativo?",
    rispostaCorretta: "243",
    risposteErrate: [
          "95",
          "162",
          "240",
          "108"
    ],
    spiegazione: "Separiamo i due binari: 1) Posizioni dispari (1ª, 3ª, 5ª, 7ª, 9ª): $2, 5, 11, 23, 47$. La legge è $a_{n+1} = 2a_n + 1$ (oppure incrementi $+3, +6, +12, +24$). 2) Posizioni pari (2ª, 4ª, 6ª, 8ª, 10ª): $3, 9, 27, 81, ?$. La legge è $b_{n+1} = 3b_n$ (potenze di 3: $3^1, 3^2, 3^3, 3^4, 3^5$). Il termine da trovare si trova alla 10ª posizione (pari), quindi $81 \\times 3 = 243$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 801,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Qual è il termine successivo della seguente serie numerica?\n$$2, \\; 5, \\; 10, \\; 17, \\; 26, \\; ?$$",
    rispostaCorretta: "37",
    risposteErrate: [
          "35",
          "36",
          "38",
          "40"
    ],
    spiegazione: "I termini della sequenza corrispondono alla regola $n^2 + 1$ per $n = 1, 2, 3, 4, 5$: $1^2+1=2$, $2^2+1=5$, $3^2+1=10$, $4^2+1=17$, $5^2+1=26$. Il termine successivo corrisponde a $n=6$, ossia $6^2 + 1 = 37$ (equivalente ad applicare differenze crescenti $+3, +5, +7, +9, +11$).",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 802,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale numero completa la seguente successione basata su somme additive progressive?\n$$2, \\; 3, \\; 5, \\; 8, \\; 13, \\; 21, \\; ?$$",
    rispostaCorretta: "34",
    risposteErrate: [
          "32",
          "35",
          "29",
          "30"
    ],
    spiegazione: "Ogni termine a partire dal terzo è pari alla somma dei due termini che lo precedono immediatamente: $2+3=5$; $3+5=8$; $5+8=13$; $8+13=21$; $13+21=34$. Il termine successivo è dunque 34.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 803,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Individua la coppia alfanumerica che completa coerentemente la serie:\n$$\\text{A2}, \\; \\text{C4}, \\; \\text{E8}, \\; \\text{G16}, \\; ?$$",
    rispostaCorretta: "I32",
    risposteErrate: [
          "H32",
          "I24",
          "H20",
          "J32"
    ],
    spiegazione: "La serie è composta da due regole indipendenti: 1) Lettere dell’alfabeto a passo +2: A, C (+2), E (+2), G (+2), I (+2). 2) Numeri che raddoppiano a ogni passaggio (potenze di 2): 2, 4, 8, 16, 32. Combinando le due parti si ottiene I32.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 804,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la seguente griglia numerica $3 \\times 3$ in cui gli elementi di ogni riga obbediscono alla stessa relazione logico-matematica:\n$$\\begin{matrix} 4 & 7 & 28 \\\\ 5 & 9 & 45 \\\\ 6 & 8 & ? \\end{matrix}$$\nQuale valore deve sostituire il punto interrogativo?",
    rispostaCorretta: "48",
    risposteErrate: [
          "42",
          "14",
          "54",
          "46"
    ],
    spiegazione: "In ogni riga, il terzo elemento è il prodotto dei primi due: prima riga $4 \\times 7 = 28$; seconda riga $5 \\times 9 = 45$. Applicando la medesima regola alla terza riga si ottiene $6 \\times 8 = 48$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 805,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale numero completa logicamente la successione seguente?\n$$1, \\; 4, \\; 9, \\; 16, \\; 25, \\; 36, \\; ?$$",
    rispostaCorretta: "49",
    risposteErrate: [
          "45",
          "48",
          "50",
          "64"
    ],
    spiegazione: "La sequenza è formata dai quadrati perfetti dei numeri naturali consecutivi: $1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36$. Il termine successivo è $7^2 = 49$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 806,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Una stringa binaria viene trasformata mediante la seguente regola di riscrittura a passi discreti:\n- A ogni passo, ogni cifra «0» viene sostituita da «01»;\n- A ogni passo, ogni cifra «1» viene sostituita da «10».\nPartendo al Passo 0 dalla stringa «0»:\n- Passo 0: «0»\n- Passo 1: «01»\n- Passo 2: «0110»\nQuante cifre «1» sono presenti nella stringa ottenuta al Passo 4?",
    rispostaCorretta: "8",
    risposteErrate: [
          "4",
          "6",
          "12",
          "16"
    ],
    spiegazione: "Analizziamo i passaggi: Passo 0: «0» (lunghezza 1, zeri: 1, uni: 0). Passo 1: «01» (lunghezza 2, zeri: 1, uni: 1). Passo 2: «0110» (lunghezza 4, zeri: 2, uni: 2). Passo 3: «01101001» (lunghezza 8, zeri: 4, uni: 4). Passo 4: lunghezza 16, con esattamente 8 zeri e 8 uni. Il numero di cifre «1» al Passo 4 è 8.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 807,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quale frazione completa coerentemente la seguente successione?\n$$\\frac{1}{2}, \\; \\frac{3}{4}, \\; \\frac{5}{8}, \\; \\frac{7}{16}, \\; ?$$",
    rispostaCorretta: "$\\frac{9}{32}$",
    risposteErrate: [
          "$\\frac{9}{24}$",
          "$\\frac{8}{32}$",
          "$\\frac{11}{32}$",
          "$\\frac{9}{64}$"
    ],
    spiegazione: "La successione è formata da due progressioni: il numeratore è una progressione aritmetica di numeri dispari consecutivi ($+2$ a ogni passo: $1, 3, 5, 7 \\to 9$); il denominatore è una progressione geometrica di ragione 2 ($2, 4, 8, 16 \\to 32$). La frazione risultante è $\\frac{9}{32}$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 808,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si consideri la serie di terne numeriche in cui ogni terna ha la stessa somma invariante $S$:\n$$(3, 8, 4), \\; (6, 2, 7), \\; (5, 9, ?)$$\nQuale numero completa la terza terna?",
    rispostaCorretta: "1",
    risposteErrate: [
          "2",
          "3",
          "0",
          "4"
    ],
    spiegazione: "Calcoliamo la somma della prima terna: $3 + 8 + 4 = 15$. La seconda terna ha somma $6 + 2 + 7 = 15$. Affinché anche la terza terna abbia somma 15, deve valere $5 + 9 + ? = 15 \\implies 14 + ? = 15 \\implies ? = 1$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 809,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Nell’insieme dei numeri reali si definisce un nuovo operatore binario $\\odot$ tramite la regola: $x \\odot y = 2x + 3y - xy$. Quanto vale l’espressione $4 \\odot 5$?",
    rispostaCorretta: "3",
    risposteErrate: [
          "23",
          "-3",
          "13",
          "0"
    ],
    spiegazione: "Sostituiamo $x = 4$ e $y = 5$ nella definizione formale dell’operatore: $4 \\odot 5 = 2(4) + 3(5) - (4)(5) = 8 + 15 - 20 = 23 - 20 = 3$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 810,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sia definito l’operatore binario $\\star$ su $\\mathbb{R}$ come $a \\star b = a + b + 2ab$. Quale delle seguenti proprietà è verificata dall’operatore $\\star$?",
    rispostaCorretta: "L’operatore è commutativo ($a \\star b = b \\star a$ per ogni $a, b$)",
    risposteErrate: [
          "L’operatore non è mai commutativo",
          "$a \\star b = 0$ per ogni coppia di reali",
          "L’elemento neutro è 2",
          "$a \\star a = 0$ per ogni $a$"
    ],
    spiegazione: "Poiché l’addizione e la moltiplicazione tra numeri reali sono entrambe commutatitive, si ha: $a \\star b = a + b + 2ab = b + a + 2ba = b \\star a$. L’operatore è quindi sempre commutativo.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 811,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un cifrario a scorrimento (cifrario di Cesare con scostamento di $+3$ posizioni in avanti nell’alfabeto inglese A-Z), la parola «LOGICA» viene cifrata come «ORJLFD». Con la stessa regola di cifratura, come viene cifrata la parola «TEST»?",
    rispostaCorretta: "WHVW",
    risposteErrate: [
          "VDUV",
          "WGVW",
          "XHWX",
          "WHVV"
    ],
    spiegazione: "Applichiamo lo spostamento di $+3$ lettere a ciascun carattere di «TEST»: T (+3) $\\to$ W; E (+3) $\\to$ H; S (+3) $\\to$ V; T (+3) $\\to$ W. La parola cifrata risultante è WHVW.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 812,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sull’insieme dei numeri interi $\\mathbb{Z}$ si definisce la relazione $R$ ponendo $x R y$ se e solo se $x - y$ è un multiplo intero di 5 ($x \\equiv y \\pmod 5$). Quante sono le classi di equivalenza distinte generate da tale relazione?",
    rispostaCorretta: "5",
    risposteErrate: [
          "Infinite",
          "1",
          "10",
          "4"
    ],
    spiegazione: "Ogni numero intero $x$, diviso per 5, lascia un unico resto $r \\in \\{0, 1, 2, 3, 4\\}$. Due numeri sono in relazione $R$ se e solo se hanno lo stesso resto nella divisione per 5. Le classi di equivalenza distinte corrispondono ai 5 possibili resti, dunque sono esattamente 5.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 813,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Si consideri l’insieme di numeri interi $S = \\{2, 3, 4, 6, 12, 18, 36\\}$ parzialmente ordinato dalla relazione di divisibilità ($a \\le b \\iff a \\text{ divide } b$). Quali sono gli elementi minimali e l’elemento massimo assoluto di questo insieme parzialmente ordinato (poset)?",
    rispostaCorretta: "Elementi minimali: $\\{2, 3\\}$; Massimo assoluto: $36$",
    risposteErrate: [
          "Elemento minimale: $\\{2\\}$; Massimo assoluto: non esiste",
          "Elementi minimali: $\\{2, 3\\}$; Elementi massimali: $\\{12, 18, 36\\}$ senza massimo assoluto",
          "Elemento minimale: $\\{3\\}$; Massimo assoluto: $36$",
          "Non esistono elementi minimali"
    ],
    spiegazione: "Un elemento è minimale se nessun altro elemento di $S$ lo divide strettamente. In $S$, né 2 né 3 sono divisibili da altri elementi di $S$, quindi i minimali sono $\\{2, 3\\}$. Un elemento è massimo assoluto se è divisibile da TUTTI gli elementi di $S$. Il numero 36 è divisibile da 2, 3, 4, 6, 12, 18 e 36. Pertanto 36 è il massimo assoluto univoco.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 814,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Una relazione $R$ su un insieme di persone è definita da: «$x R y$ se e solo se $x$ e $y$ hanno la stessa altezza in centimetri». Quali proprietà logiche caratterizzano questa relazione?",
    rispostaCorretta: "È una relazione di equivalenza (riflessiva, simmetrica e transitiva)",
    risposteErrate: [
          "È solo simmetrica ma non transitiva",
          "È una relazione d’ordine stretto",
          "È antiriflessiva e asimmetrica",
          "È transitiva ma non riflessiva"
    ],
    spiegazione: "La relazione soddisfa: 1) Riflessività: ogni persona ha la stessa altezza di se stessa ($x R x$); 2) Simmetria: se $x$ ha la stessa altezza di $y$, allora $y$ ha la stessa altezza di $x$ ($x R y \\implies y R x$); 3) Transitività: se $x$ ha la stessa altezza di $y$ e $y$ ha la stessa altezza di $z$, allora $x$ ha la stessa altezza di $z$. Avendo tutte e tre le proprietà, è una relazione di equivalenza.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 815,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un sistema di codifica simbolico additivo valgono le seguenti corrispondenze di valore:\n- $\\Delta = 10$\n- $\\square = 5$\n- $\\circ = 1$\nIl valore di una sequenza è dato dalla somma dei valori dei singoli simboli. Quanto vale la stringa $\\Delta \\Delta \\square \\circ \\circ \\circ$?",
    rispostaCorretta: "28",
    risposteErrate: [
          "25",
          "27",
          "30",
          "18"
    ],
    spiegazione: "La stringa è composta da due triangoli ($2 \\times 10 = 20$), un quadrato ($1 \\times 5 = 5$) e tre cerchi ($3 \\times 1 = 3$). Sommando i valori: $20 + 5 + 3 = 28$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 816,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Analizzando le relazioni familiari in una genealogia si stabilisce che: «Marco è il figlio dell’unico figlio del padre di Giovanni». Sapendo che Giovanni non ha fratelli, che relazione di parentela intercorre tra Marco e Giovanni?",
    rispostaCorretta: "Marco è il figlio di Giovanni",
    risposteErrate: [
          "Marco è il fratello di Giovanni",
          "Marco è il nipote (figlio della sorella) di Giovanni",
          "Marco è il padre di Giovanni",
          "Marco e Giovanni sono cugini di primo grado"
    ],
    spiegazione: "Decostruiamo l’enunciato a ritroso: «il padre di Giovanni» ha come «unico figlio» Giovanni stesso (poiché Giovanni è figlio unico). Quindi «il figlio dell’unico figlio del padre di Giovanni» equivale a «il figlio di Giovanni». Dunque Marco è il figlio di Giovanni.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 817,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In una lingua artificiale sono note le seguenti traduzioni di frasi di due parole:\n1. «kalo moro» significa «casa grande»;\n2. «kalo lupu» significa «casa bianca»;\n3. «somi moro» significa «albero grande».\nQuale parola in questa lingua corrisponde con certezza all’aggettivo «bianca»?",
    rispostaCorretta: "lupu",
    risposteErrate: [
          "kalo",
          "moro",
          "somi",
          "Non è possibile stabilirlo"
    ],
    spiegazione: "Confrontando la frase 1 («kalo moro» = «casa grande») e la frase 2 («kalo lupu» = «casa bianca»), l’elemento comune è «kalo» che corrisponde a «casa». Di conseguenza, nella frase 2 la parola «lupu» corrisponde univocamente all’aggettivo «bianca» (confermata dal fatto che «moro» corrisponde a «grande» tramite la frase 3).",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 818,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sia data la funzione $f: \\mathbb{N} \\to \\mathbb{N}$ definita per casi come segue:\n- $f(n) = \\frac{n}{2}$ se $n$ è pari;\n- $f(n) = 3n + 1$ se $n$ è dispari.\nPartendo da $n = 13$, qual è il valore ottenuto applicando la funzione tre volte consecutive, ossia $f(f(f(13)))$?",
    rispostaCorretta: "10",
    risposteErrate: [
          "20",
          "40",
          "5",
          "16"
    ],
    spiegazione: "Eseguiamo i 3 passaggi di calcolo: 1) $n = 13$ è dispari $\\implies f(13) = 3(13) + 1 = 39 + 1 = 40$. 2) $n = 40$ è pari $\\implies f(40) = 40 / 2 = 20$. 3) $n = 20$ è pari $\\implies f(20) = 20 / 2 = 10$. Dunque $f(f(f(13))) = 10$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 819,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Quanti anagrammi distinti (anche privi di senso compiuto) si possono formare con tutte le lettere della parola «STATO»?",
    rispostaCorretta: "60",
    risposteErrate: [
          "120",
          "24",
          "30",
          "72"
    ],
    spiegazione: "La parola «STATO» è composta da 5 lettere in cui la lettera T si ripete 2 volte (S, T, A, T, O). Il numero di permutazioni con ripetizione è dato da $\\frac{5!}{2!} = \\frac{120}{2} = 60$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 820,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Un codice di sicurezza è formato da una lettera scelta tra $\\{A, B, C\\}$ seguita da due cifre numeriche distinte scelte tra $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$. Quanti codici di sicurezza diversi è possibile generare?",
    rispostaCorretta: "270",
    risposteErrate: [
          "300",
          "240",
          "180",
          "90"
    ],
    spiegazione: "Per il principio moltiplicativo fondamentale del conteggio: ci sono 3 scelte possibili per la lettera; 10 scelte per la prima cifra numerica; 9 scelte per la seconda cifra numerica (poiché le due cifre devono essere distinte). Il numero totale di codici è $3 \\times 10 \\times 9 = 270$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 821,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un cassetto buio vi sono 10 calzini blu e 10 calzini neri, identici per forma e tessuto. Qual è il numero minimo di calzini che occorre estrarre alla cieca per avere la certezza assoluta di aver ottenuto almeno un paio di calzini dello stesso colore?",
    rispostaCorretta: "3",
    risposteErrate: [
          "2",
          "11",
          "12",
          "4"
    ],
    spiegazione: "Per il principio dei cassetti (pigeonhole principle), i possibili «colori» (cassetti) sono 2 (blu e nero). Nel caso peggiore, le prime 2 estrazioni potrebbero fornire due calzini di colori diversi (uno blu e uno nero). Con una terza estrazione ($2 + 1 = 3$), il calzino estratto dovrà necessariamente condividere il colore con uno dei due già estratti, garantendo una coppia dello stesso colore.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 822,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Qual è il numero minimo di persone che devono essere presenti in una stanza affinché si abbia la certezza matematica che almeno 3 di esse siano nate nello stesso mese dell’anno?",
    rispostaCorretta: "25",
    risposteErrate: [
          "24",
          "36",
          "37",
          "13"
    ],
    spiegazione: "L’anno ha 12 mesi. Nel caso più sfavorevole, possiamo avere al massimo 2 persone nate in ciascuno dei 12 mesi, per un totale di $2 \\times 12 = 24$ persone senza che vi sia alcun mese con 3 nati. Aggiungendo una persona in più ($24 + 1 = 25$), per il principio dei cassetti generalizzato essa dovrà necessariamente nascere in un mese in cui vi sono già 2 persone, portando quel mese ad almeno 3 nati.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 823,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Da un gruppo composto da 5 studenti maschi e 4 studentesse femmine si deve formare una commissione di 3 membri composta da esattamente 2 maschi e 1 femmina. Quante diverse commissioni è possibile costituire?",
    rispostaCorretta: "40",
    risposteErrate: [
          "20",
          "84",
          "30",
          "60"
    ],
    spiegazione: "Il numero di modi per scegliere 2 maschi tra 5 è dato dalle combinazioni $\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$. Il numero di modi per scegliere 1 femmina tra 4 è $\\binom{4}{1} = 4$. Per il principio del prodotto, le commissioni possibili sono $10 \\times 4 = 40$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 824,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In una competizione podistica a cui partecipano 8 atleti vengono assegnate le medaglie d’Oro, d’Argento e di Bronzo ai primi tre classificati. Escludendo ex aequo, in quanti modi distinti può essere formato il podio?",
    rispostaCorretta: "336",
    risposteErrate: [
          "56",
          "512",
          "120",
          "384"
    ],
    spiegazione: "L’ordine dei primi tre classificati è rilevante (Oro, Argento, Bronzo), quindi si tratta di disposizioni semplici di 8 elementi presi a gruppi di 3: $D_{8,3} = 8 \\times 7 \\times 6 = 336$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 825,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si lanciano contemporaneamente due dadi a sei facce regolari e non truccati. Qual è la probabilità che la somma dei due punteggi ottenuti sia esattamente uguale a 7?",
    rispostaCorretta: "$\\frac{1}{6}$",
    risposteErrate: [
          "$\\frac{1}{12}$",
          "$\\frac{7}{36}$",
          "$\\frac{5}{36}$",
          "$\\frac{1}{7}$"
    ],
    spiegazione: "I casi totali possibili sono $6 \\times 6 = 36$. Le coppie ordinate che danno somma 7 sono 6: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. La probabilità è data dal rapporto tra casi favorevoli e casi possibili: $\\frac{6}{36} = \\frac{1}{6}$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 826,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Un’urna contiene 4 palline rosse e 2 palline blu. Si estraggono contemporaneamente due palline a caso senza reimbussolamento. Sapendo che almeno una delle due palline estratte è rossa, qual è la probabilità che entrambe le palline siano rosse?",
    rispostaCorretta: "$\\frac{3}{7}$",
    risposteErrate: [
          "$\\frac{1}{2}$",
          "$\\frac{2}{5}$",
          "$\\frac{3}{5}$",
          "$\\frac{4}{7}$"
    ],
    spiegazione: "Il numero totale di modi per estrarre 2 palline su 6 è $\\binom{6}{2} = 15$. L’unico esito in cui non compare alcuna pallina rossa è l’estrazione delle 2 palline blu, che si verifica in $\\binom{2}{2} = 1$ modo. I casi in cui «almeno una pallina è rossa» sono quindi $15 - 1 = 14$ (spazio campionario condizionato). I casi favorevoli in cui entrambe le palline sono rosse sono $\\binom{4}{2} = 6$. La probabilità condizionata richiesta è $P(\\text{2 rosse} \\mid \\text{almeno 1 rossa}) = \\frac{6}{14} = \\frac{3}{7}$. Il distrattore $\\frac{4}{7}$ corrisponde invece al calcolo errato della probabilità complementare di estrarre esattamente 1 rossa e 1 blu ($8/14 = 4/7$).",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 827,
    materia: "Logica",
    difficolta: "medio-facile",
    domanda: "Da un mazzo di 40 carte da gioco tradizionali viene estratta una carta a caso. Qual è la probabilità che la carta estratta sia un Asso oppure un Re?",
    rispostaCorretta: "$20\\%$",
    risposteErrate: [
          "$10\\%$",
          "$25\\%$",
          "$15\\%$",
          "$8\\%$"
    ],
    spiegazione: "In un mazzo da 40 carte vi sono 4 Assi e 4 Re. Poiché i due eventi sono incompatibili (una carta non può essere contemporaneamente un Asso e un Re), i casi favorevoli totali sono $4 + 4 = 8$. La probabilità è $\\frac{8}{40} = \\frac{1}{5} = 0{,}20 = 20\\%$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 828,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Una moneta equilibrata viene lanciata 4 volte di seguito. Qual è la probabilità di ottenere la faccia «Testa» almeno una volta?",
    rispostaCorretta: "$\\frac{15}{16}$",
    risposteErrate: [
          "$\\frac{1}{16}$",
          "$\\frac{7}{8}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$"
    ],
    spiegazione: "Calcoliamo la probabilità dell’evento complementare «nessuna Testa» (ovvero ottenere 4 volte consecutive «Croce»). Poiché ogni lancio è indipendente con probabilità $1/2$, si ha $P(\\text{4 Croci}) = (1/2)^4 = 1/16$. La probabilità di ottenere almeno una Testa è $1 - P(\\text{4 Croci}) = 1 - 1/16 = 15/16$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 829,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In una griglia di strade perpendicolari, un robot parte dal punto $(0,0)$ e deve raggiungere il punto $(2,2)$ muovendosi esclusivamente di un’unità alla volta verso destra ($D$) o verso l’alto ($A$). Quanti percorsi minimi distinti può compiere il robot?",
    rispostaCorretta: "6",
    risposteErrate: [
          "4",
          "8",
          "12",
          "24"
    ],
    spiegazione: "Ogni percorso minimo da $(0,0)$ a $(2,2)$ deve essere composto da esattamente 4 passi complessivi: 2 passi verso destra ($D$) e 2 passi verso l’alto ($A$). Il numero di percorsi coincide con il numero di modi di scegliere quali dei 4 passi sono verso destra, ossia $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$. I 6 percorsi sono: $DDAA, DADA, DAAD, ADDA, ADAD, AADD$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 830,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Sulla lavagna sono scritti i numeri interi da 1 a 10. A ogni mossa, uno studente sceglie due numeri qualsiasi $a$ e $b$, li cancella e scrive al loro posto il numero $(a + b - 1)$. Dopo 9 mosse consecutive sulla lavagna rimane un solo numero. Quale affermazione sulla parità del numero finale è NECESSARIAMENTE vera?",
    rispostaCorretta: "Il numero finale è sicuramente pari",
    risposteErrate: [
          "Il numero finale è sicuramente dispari",
          "La parità dipende dall’ordine delle scelte effettuate",
          "Il numero finale è sempre uguale a 55",
          "Non è possibile determinare la parità a priori"
    ],
    spiegazione: "La somma iniziale di tutti i numeri è $S = 1 + 2 + \\dots + 10 = \\frac{10 \\times 11}{2} = 55$. A ogni mossa la somma totale dei numeri presenti sulla lavagna diminuisce esattamente di 1, poiché sostituiamo $(a + b)$ con $(a + b - 1)$. Dopo 9 mosse la somma è diminuita di 9. Il valore dell’unico numero rimasto è quindi $55 - 9 = 46$, che è un numero pari, indipendentemente dalle coppie scelte.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 831,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si dispone di una botte con 8 litri di succo e di due caraffe vuote graduate solo per capacità massima da 5 litri e 3 litri. Qual è il numero minimo di travasi necessari per ottenere esattamente 4 litri di succo nella botte iniziale o in una caraffa?",
    rispostaCorretta: "6",
    risposteErrate: [
          "4",
          "5",
          "7",
          "8"
    ],
    spiegazione: "Rappresentiamo lo stato come terna (Botte 8L, Caraffa 5L, Caraffa 3L):\n- Stato iniziale: $(8, 0, 0)$\n- 1° travaso (da 8 a 5): $(3, 5, 0)$\n- 2° travaso (da 5 a 3): $(3, 2, 3)$\n- 3° travaso (da 3 a 8): $(6, 2, 0)$\n- 4° travaso (da 5 a 3): $(6, 0, 2)$\n- 5° travaso (da 8 a 5): $(1, 5, 2)$\n- 6° travaso (da 5 a 3 fino a riempirlo): $(1, 4, 3)$.\nAl 6° travaso si ottengono esattamente 4 litri nella caraffa da 5 litri. Il numero minimo di travasi è 6.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 832,
    materia: "Logica",
    difficolta: "medio",
    domanda: "La somma delle età attuali di Marco e Luca è pari a 40 anni. Quando Marco aveva l’età che Luca ha adesso, l’età di Marco era esattamente il triplo dell’età che aveva Luca a quel tempo. Quanti anni ha Marco adesso?",
    rispostaCorretta: "25",
    risposteErrate: [
          "24",
          "30",
          "28",
          "20"
    ],
    spiegazione: "Siano $M$ e $L$ le età attuali di Marco e Luca, con $M + L = 40$. La differenza di età è costante: $d = M - L$. Il momento passato considerato risale a $d$ anni fa, quando Marco aveva età $M - d = L$ e Luca aveva età $L - d = L - (M - L) = 2L - M$. La condizione stabilisce che l’età di Marco a quel tempo era il triplo di quella di Luca: $L = 3(2L - M) \\implies L = 6L - 3M \\implies 3M = 5L \\implies M = \\frac{5}{3}L$. Sostituendo in $M + L = 40$: $\\frac{5}{3}L + L = 40 \\implies \\frac{8}{3}L = 40 \\implies L = 15$. Quindi $M = 40 - 15 = 25$ anni.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 833,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Due candele di uguale lunghezza iniziale bruciano a velocità costante: la candela A si consuma completamente in 4 ore, mentre la candela B si consuma completamente in 3 ore. Se vengono accese nello stesso istante, dopo quanto tempo la lunghezza residua della candela A sarà esattamente il doppio della lunghezza residua della candela B?",
    rispostaCorretta: "2 ore e 24 minuti",
    risposteErrate: [
          "2 ore e 30 minuti",
          "2 ore e 15 minuti",
          "1 ora e 45 minuti",
          "2 ore"
    ],
    spiegazione: "Sia $L = 1$ la lunghezza iniziale. Dopo $t$ ore, la candela A ha lunghezza $1 - \\frac{t}{4}$ e la candela B ha lunghezza $1 - \\frac{t}{3}$. Poniamo la condizione: $1 - \\frac{t}{4} = 2\\left(1 - \\frac{t}{3}\\right) \\implies 1 - \\frac{t}{4} = 2 - \\frac{2t}{3} \\implies \\frac{2t}{3} - \\frac{t}{4} = 1 \\implies \\frac{8t - 3t}{12} = 1 \\implies \\frac{5t}{12} = 1 \\implies t = \\frac{12}{5} = 2{,}4\\text{ ore}$. Poiché $0{,}4\\text{ ore} = 0{,}4 \\times 60 = 24\\text{ minuti}$, il tempo cercato è 2 ore e 24 minuti.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 834,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si hanno 9 monete all’apparenza identiche. Si sa che 8 di esse hanno lo stesso peso, mentre una è contraffatta ed è più leggera delle altre. Disponendo di una bilancia a due piatti senza pesi, qual è il numero MINIMO di pesate sufficiente a individuare con certezza assoluta la moneta falsa?",
    rispostaCorretta: "2",
    risposteErrate: [
          "1",
          "3",
          "4",
          "5"
    ],
    spiegazione: "Dividiamo le 9 monete in tre gruppi da 3: $G_1, G_2, G_3$. 1ª pesata: confrontiamo $G_1$ e $G_2$. Se la bilancia è in equilibrio, la moneta falsa è in $G_3$; se un piatto sale, la moneta falsa è in quel gruppo. Abbiamo così ridotto la ricerca a 3 monete. 2ª pesata: prendiamo 2 monete delle 3 sospette e le confrontiamo sui piatti. Se uno sale, quella è la moneta falsa; se sono in equilibrio, la moneta falsa è la terza non pesata. Sono quindi sufficienti esattamente 2 pesate.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 835,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si vuole determinare se un numero intero positivo $N$ è pari. Si dispone delle seguenti due informazioni:\n(1) Il numero $3N + 1$ è dispari;\n(2) Il numero $N^2 + N$ è pari.\nQuale delle seguenti opzioni esprime la corretta valutazione di sufficienza delle informazioni?",
    rispostaCorretta: "L’informazione (1) da sola è sufficiente, mentre la (2) da sola non è sufficiente",
    risposteErrate: [
          "L’informazione (2) da sola è sufficiente, mentre la (1) da sola non è sufficiente",
          "Entrambe le informazioni insieme sono necessarie per rispondere",
          "Ciascuna informazione presa singolarmente è sufficiente",
          "Nessuna delle due informazioni, nemmeno prese insieme, è sufficiente"
    ],
    spiegazione: "Analizziamo (1): $3N + 1$ è dispari $\\implies 3N$ è pari $\\implies N$ è pari (perché il prodotto di 3 per $N$ è pari solo se $N$ è pari). Dunque (1) da sola è sufficiente. Analizziamo (2): $N^2 + N = N(N+1)$ è il prodotto di due interi consecutivi, che è SEMPRE pari per qualsiasi intero positivo $N$ (sia pari sia dispari). Di conseguenza (2) non fornisce alcuna informazione sulla parità di $N$. Dunque l’informazione (1) da sola è sufficiente, mentre la (2) no.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 836,
    materia: "Logica",
    difficolta: "medio",
    domanda: "Si desidera calcolare l’area di un rettangolo avente lati di lunghezza $b$ e $h$. Sono fornite le seguenti due informazioni:\n(1) Il perimetro del rettangolo è pari a $24\\text{ cm}$ ($2b + 2h = 24$);\n(2) La diagonale del rettangolo misura $\\sqrt{74}\\text{ cm}$ ($b^2 + h^2 = 74$).\nQuale affermazione sulla sufficienza dei dati è corretta?",
    rispostaCorretta: "Entrambe le informazioni prese insieme sono sufficienti, ma nessuna delle due da sola è sufficiente",
    risposteErrate: [
          "L’informazione (1) da sola è sufficiente",
          "L’informazione (2) da sola è sufficiente",
          "Ciascuna informazione da sola è sufficiente",
          "Le informazioni non sono sufficienti neppure se combinate"
    ],
    spiegazione: "Da sola, la (1) fornisce solo $b + h = 12$, compatibile con infinite coppie $(b, h)$ aventi aree diverse. Da sola, la (2) fornisce solo $b^2 + h^2 = 74$, anch’essa compatibile con infinite aree. Combinando (1) e (2): elevando al quadrato $b + h = 12$ otteniamo $(b + h)^2 = b^2 + h^2 + 2bh = 144$. Sostituendo $b^2 + h^2 = 74$, abbiamo $74 + 2bh = 144 \\implies 2bh = 70 \\implies \\text{Area} = bh = 35\\text{ cm}^2$. L’area è univocamente determinata solo utilizzando entrambe le informazioni congiuntamente.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 837,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un gruppo di 5 persone l’età media è esattamente pari a 24 anni. Sapendo che nessuna persona del gruppo ha un’età inferiore a 20 anni compiuti, qual è l’età MASSIMA possibile che può avere la persona più anziana del gruppo?",
    rispostaCorretta: "40 anni",
    risposteErrate: [
          "36 anni",
          "44 anni",
          "48 anni",
          "32 anni"
    ],
    spiegazione: "La somma totale delle età delle 5 persone è data da $5 \\times 24 = 120$ anni. Per massimizzare l’età della persona più anziana, dobbiamo minimizzare l’età delle restanti 4 persone. Poiché il vincolo inferiore stabilisce che nessuno ha meno di 20 anni, assegniamo 20 anni a ciascuna delle altre 4 persone: somma minima dei 4 = $4 \\times 20 = 80$ anni. L’età massima per la quinta persona è quindi $120 - 80 = 40$ anni.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 838,
    materia: "Logica",
    difficolta: "medio",
    domanda: "In un test a risposta multipla composto da 20 quesiti totali, il punteggio viene attribuito secondo le seguenti regole:\n- $+1{,}0$ punto per ogni risposta corretta;\n- $0$ punti per ogni risposta non data (omessa);\n- $-0{,}25$ punti per ogni risposta errata.\nUno studente sostiene di aver totalizzato un punteggio finale di $18{,}5$ punti. Quale deduzione logica è corretta riguardo a questa affermazione?",
    rispostaCorretta: "L’affermazione è logicamente impossibile: non esiste alcuna combinazione di risposte che dia $18{,}5$ punti su 20 quesiti",
    risposteErrate: [
          "Lo studente ha fornito 19 risposte corrette e 2 errate",
          "Lo studente ha fornito 18 risposte corrette e 0 errate",
          "Lo studente ha fornito 19 risposte corrette e 1 errata",
          "L’affermazione è coerente con 18 risposte corrette e 2 omesse"
    ],
    spiegazione: "Siano $C, E, O$ il numero di risposte corrette, errate e omesse, con $C + E + O = 20$ e $C, E, O \\ge 0$. Il punteggio è $P = C - 0{,}25E = C - \\frac{E}{4} = 18{,}5$. Moltiplicando per 4: $4C - E = 74 \\implies E = 4C - 74$. Poiché $C \\le 20$: se $C = 20$, $E = 80 - 74 = 6$, ma allora $C + E = 20 + 6 = 26 > 20$, impossibile; se $C = 19$, $E = 76 - 74 = 2$, ma allora $C + E = 19 + 2 = 21 > 20$, impossibile; se $C \\le 18$, $E \\le 72 - 74 = -2$, impossibile. Non esiste alcuna soluzione con $C + E \\le 20$. Il punteggio dichiarato è impossibile.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  },
  {
    id: 839,
    materia: "Logica",
    difficolta: "medio-difficile",
    domanda: "Tre numeri interi positivi $x, y, z$ soddisfano contemporaneamente le seguenti condizioni:\n1. Sono strettamente crescenti: $x < y < z$;\n2. La loro somma è 30: $x + y + z = 30$;\n3. La differenza tra il massimo e il minimo è pari a 2 ($z - x = 2$).\nQual è il valore del prodotto $x \\times y \\times z$?",
    rispostaCorretta: "990",
    risposteErrate: [
          "1000",
          "960",
          "720",
          "840"
    ],
    spiegazione: "Dato che $x, y, z$ sono interi con $x < y < z$ e $z - x = 2$, l’unico intero compreso strettamente tra $x$ e $x+2$ è $y = x + 1$. I tre numeri sono quindi tre interi consecutivi: $x, x+1, x+2$. La loro somma è $x + (x+1) + (x+2) = 3x + 3 = 30 \\implies 3x = 27 \\implies x = 9$. Ne segue che i tre numeri sono univocamente $x = 9, y = 10, z = 11$. Il loro prodotto è $9 \\times 10 \\times 11 = 990$.",
    fonte: 'Lotto L4 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  }
,
  {
    id: 840,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, in quale modo gli astronomi riescono a isolare l’impronta spettrale dell’atmosfera planetaria?",
    rispostaCorretta: "Confrontando la luce registrata durante il transito con quella acquisita quando il pianeta non è davanti alla stella",
    risposteErrate: [
          "Bloccando interamente l’emissione di radiazione prodotta dalla stella madre tramite un coronografo ottico",
          "Misurando esclusivamente l’emissione termica diretta generata dalla superficie solida del pianeta",
          "Rilevando le variazioni gravitazionali indotte dal pianeta sul moto orbitale della stella ospite",
          "Campionando particelle di gas atmosferico che giungono intatte sulla Terra"
    ],
    spiegazione: "Il testo afferma esplicitamente: «Confrontando lo spettro stellare registrato durante il transito con quello acquisito quando il pianeta si trova fuori dal disco stellare, gli astronomi possono isolare l’impronta atmosferica del pianeta». Le altre opzioni introducono metodi fisicamente o logicamente incompatibili con la tecnica descritta nel brano.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La spettroscopia di trasmissione rappresenta una delle tecniche più efficaci per sondare la composizione chimica delle atmosfere dei pianeti extrasolari. Quando un esopianeta transita davanti alla propria stella ospite, una minuscola frazione della radiazione stellare attraversa il sottile strato gassoso che lo circonda prima di raggiungere i telescopi terrestri o spaziali. Poiché ciascuna specie chimica presente nell’atmosfera assorbe la radiazione elettromagnetica a lunghezze d’onda caratteristiche e ben definite, la luce filtrata reca impresse delle righe di assorbimento aggiuntive rispetto allo spettro proprio della stella. Confrontando lo spettro stellare registrato durante il transito con quello acquisito quando il pianeta si trova fuori dal disco stellare, gli astronomi possono isolare l’impronta atmosferica del pianeta, identificando molecole come vapore acqueo, metano, anidride carbonica o composti del sodio.",
    titoloBrano: "La spettroscopia di trasmissione e le atmosfere esoplanetarie",
  },
  {
    id: 841,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale principio fisico fondamentale rende possibile l’identificazione delle diverse molecole atmosferiche?",
    rispostaCorretta: "Il fatto che ogni specie chimica assorba la radiazione elettromagnetica a specifiche lunghezze d’onda",
    risposteErrate: [
          "La capacità dei gas di riflettere in modo uniforme tutte le frequenze della luce visibile",
          "La totale scomparsa della radiazione stellare durante l’intero arco del transito",
          "L’aumento della velocità di propagazione della luce quando attraversa uno strato gassoso denso",
          "La conversione spontanea dei fotoni stellari in particelle di materia"
    ],
    spiegazione: "Il brano chiarisce che il riconoscimento molecolare è possibile «Poiché ciascuna specie chimica presente nell’atmosfera assorbe la radiazione elettromagnetica a lunghezze d’onda caratteristiche e ben definite». I distrattori descrivono fenomeni errati o assenti nel testo.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La spettroscopia di trasmissione rappresenta una delle tecniche più efficaci per sondare la composizione chimica delle atmosfere dei pianeti extrasolari. Quando un esopianeta transita davanti alla propria stella ospite, una minuscola frazione della radiazione stellare attraversa il sottile strato gassoso che lo circonda prima di raggiungere i telescopi terrestri o spaziali. Poiché ciascuna specie chimica presente nell’atmosfera assorbe la radiazione elettromagnetica a lunghezze d’onda caratteristiche e ben definite, la luce filtrata reca impresse delle righe di assorbimento aggiuntive rispetto allo spettro proprio della stella. Confrontando lo spettro stellare registrato durante il transito con quello acquisito quando il pianeta si trova fuori dal disco stellare, gli astronomi possono isolare l’impronta atmosferica del pianeta, identificando molecole come vapore acqueo, metano, anidride carbonica o composti del sodio.",
    titoloBrano: "La spettroscopia di trasmissione e le atmosfere esoplanetarie",
  },
  {
    id: 842,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Secondo il testo, qual è la funzione biologica originaria del locus CRISPR nei batteri?",
    rispostaCorretta: "Conservare un archivio di frammenti di DNA estraneo per riconoscere e neutralizzare future infezioni virali",
    risposteErrate: [
          "Accelerare la duplicazione del DNA batterico durante le fasi di carenza nutrizionale",
          "Consentire la sintesi di nuove pareti cellulari per resistere agli sbalzi osmotici",
          "Modificare artificialmente il patrimonio genetico delle cellule eucariotiche",
          "Favorire l’ingresso controllato di batteriofagi all’interno del citoplasma batterico"
    ],
    spiegazione: "Il testo specifica che i batteri integrano frammenti del DNA invasore «all’interno del locus CRISPR dell’ospite, dove fungono da archivio molecolare delle infezioni passate» per guidare la successiva neutralizzazione del patogeno.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Sebbene sia oggi celebre come strumento rivoluzionario di ingegneria genetica, il sistema CRISPR-Cas è in origine un raffinato meccanismo di difesa immunitaria adattativa sviluppato da batteri e archei per proteggersi dalle infezioni virali causate dai batteriofagi. Quando un virus inietta il proprio materiale genetico nella cellula batterica, specifici complessi proteici possono catturare piccoli frammenti del DNA invasore e integrarli all’interno del locus CRISPR dell’ospite, dove fungono da archivio molecolare delle infezioni passate. In caso di un successivo attacco da parte dello stesso patogeno, queste sequenze vengono trascritte in piccole molecole di RNA guida che si associano a una nucleasi (come Cas9). L’enzima, guidato dalla complementarietà di basi dell’RNA, riconosce con estrema precisione il genoma virale e opera un taglio a doppio filamento, neutralizzando l’infezione prima che il virus possa replicarsi.",
    titoloBrano: "Origine biologica del sistema CRISPR-Cas",
  },
  {
    id: 843,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale delle seguenti affermazioni sulla relazione tra RNA guida e proteina Cas9 è rigorosamente deducibile dal brano?",
    rispostaCorretta: "La proteina Cas9 esegue il taglio enzimatico, ma è la sequenza dell’RNA guida a determinare il punto esatto di riconoscimento",
    risposteErrate: [
          "La proteina Cas9 individua autonomamente il DNA virale senza necessitare dell’appaiamento dell’RNA",
          "L’RNA guida effettua direttamente il taglio del doppio filamento mentre Cas9 funge solo da recettore di membrana",
          "La proteina Cas9 trascrive il DNA virale in sequenze proteiche per disattivare l’RNA guida",
          "L’RNA guida si associa a Cas9 solo dopo che il genoma virale ha completato la propria replicazione"
    ],
    spiegazione: "Dal testo emerge chiaramente che l’enzima Cas9 è una nucleasi (compie il taglio a doppio filamento), mentre la precisione di riconoscimento bersaglio è dettata dall’RNA guida tramite complementarietà di basi: «L’enzima, guidato dalla complementarietà di basi dell’RNA, riconosce con estrema precisione il genoma virale e opera un taglio a doppio filamento».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Sebbene sia oggi celebre come strumento rivoluzionario di ingegneria genetica, il sistema CRISPR-Cas è in origine un raffinato meccanismo di difesa immunitaria adattativa sviluppato da batteri e archei per proteggersi dalle infezioni virali causate dai batteriofagi. Quando un virus inietta il proprio materiale genetico nella cellula batterica, specifici complessi proteici possono catturare piccoli frammenti del DNA invasore e integrarli all’interno del locus CRISPR dell’ospite, dove fungono da archivio molecolare delle infezioni passate. In caso di un successivo attacco da parte dello stesso patogeno, queste sequenze vengono trascritte in piccole molecole di RNA guida che si associano a una nucleasi (come Cas9). L’enzima, guidato dalla complementarietà di basi dell’RNA, riconosce con estrema precisione il genoma virale e opera un taglio a doppio filamento, neutralizzando l’infezione prima che il virus possa replicarsi.",
    titoloBrano: "Origine biologica del sistema CRISPR-Cas",
  },
  {
    id: 844,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è la tesi principale sostenuta nel brano riguardo all’apprendimento e alla memoria?",
    rispostaCorretta: "L’apprendimento e la memoria si basano sulla capacità delle sinapsi di modificare stabilmente l’efficienza della comunicazione tra neuroni",
    risposteErrate: [
          "La memoria dipende dalla continua e irreversibile moltiplicazione del numero totale di neuroni nell’ippocampo",
          "L’efficienza sinaptica rimane invariabile e indipendente dall’attività elettrica pregressa dei circuiti",
          "L’ingresso di ioni calcio nella cellula presinaptica provoca la distruzione programmata delle connessioni neurali",
          "La trasmissione dei segnali cerebrali avviene esclusivamente per via meccanica senza l’impiego di neurotrasmettitori"
    ],
    spiegazione: "Il testo definisce la plasticità sinaptica come base dell’apprendimento e spiega come il potenziamento duraturo delle connessioni tra neuroni modifichi stabilmente l’efficacia della trasmissione.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La capacità del cervello di apprendere e conservare informazioni risiede primariamente nella plasticità sinaptica, ovvero nella facoltà delle connessioni tra neuroni (le sinapsi) di modulare la propria forza ed efficienza in risposta all’attività neurale pregressa. Il modello più studiato di questo fenomeno è il potenziamento a lungo termine (LTP, Long-Term Potentiation), osservato tipicamente nei circuiti dell’ippocampo. Quando un neurone presinaptico stimola ripetutamente e ad alta frequenza un neurone postsinaptico, la trasmissione chimica tra i due subisce un incremento duraturo nel tempo. A livello molecolare, ciò comporta un massiccio ingresso di ioni calcio nel compartimento postsinaptico e il conseguente inserimento stabile di un maggior numero di recettori per il neurotrasmettitore sulla membrana. Di conseguenza, a parità di stimolo futuro, la risposta elettrica del neurone ricevente risulterà sensibilmente amplificata.",
    titoloBrano: "Basi cellulari della memoria e plasticità sinaptica",
  },
  {
    id: 845,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Nel contesto del brano, che cosa si intende con il termine «plasticità»?",
    rispostaCorretta: "L’attitudine delle connessioni sinaptiche a variare la propria funzionalità in base all’esperienza e all’attività svolta",
    risposteErrate: [
          "La composizione materiale a base di polimeri sintetici che riveste le fibre nervose",
          "La rigida immutabilità strutturale delle membrane cellulari contro gli urti fisici",
          "L’incapacità dei neuroni di ristabilire il potenziale elettrico di riposo",
          "La progressiva perdita di recettori molecolari causata dall’invecchiamento biologico"
    ],
    spiegazione: "Il testo definisce esplicitamente la plasticità sinaptica come «la facoltà delle connessioni tra neuroni (le sinapsi) di modulare la propria forza ed efficienza in risposta all’attività neurale pregressa».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La capacità del cervello di apprendere e conservare informazioni risiede primariamente nella plasticità sinaptica, ovvero nella facoltà delle connessioni tra neuroni (le sinapsi) di modulare la propria forza ed efficienza in risposta all’attività neurale pregressa. Il modello più studiato di questo fenomeno è il potenziamento a lungo termine (LTP, Long-Term Potentiation), osservato tipicamente nei circuiti dell’ippocampo. Quando un neurone presinaptico stimola ripetutamente e ad alta frequenza un neurone postsinaptico, la trasmissione chimica tra i due subisce un incremento duraturo nel tempo. A livello molecolare, ciò comporta un massiccio ingresso di ioni calcio nel compartimento postsinaptico e il conseguente inserimento stabile di un maggior numero di recettori per il neurotrasmettitore sulla membrana. Di conseguenza, a parità di stimolo futuro, la risposta elettrica del neurone ricevente risulterà sensibilmente amplificata.",
    titoloBrano: "Basi cellulari della memoria e plasticità sinaptica",
  },
  {
    id: 846,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al brano, quale relazione descrive correttamente il meccanismo di retroazione climatica illustrato?",
    rispostaCorretta: "L’aumento delle temperature favorisce la decomposizione microbica nel permafrost, liberando gas serra che incrementano ulteriormente il riscaldamento",
    risposteErrate: [
          "Il disgelo del suolo assorbe calore dall’atmosfera in modo permanente, bloccando l’effetto serra",
          "L’accumulo millenario di resti organici riduce progressivamente la concentrazione di metano nelle zone umide",
          "La presenza di ghiaccio stimola la proliferazione di microrganismi che consumano anidride carbonica",
          "Il rilascio di gas serra raffredda l’aria artica, stabilizzando lo spessore del permafrost"
    ],
    spiegazione: "Il testo descrive un feedback positivo: l’aumento termico scongela il terreno, i microbi decompongono la materia rilasciando CO2 e metano, e «L’immissione di questi gas intensifica l’effetto serra globale, determinando un ulteriore aumento delle temperature che accelera a sua volta il disgelo del terreno».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il permafrost, ovvero il terreno perennemente ghiacciato che copre vaste regioni dell’emisfero settentrionale, racchiude una quantità stimata di carbonio organico pari a quasi il doppio di quella attualmente presente nell’atmosfera terrestre. Questo immenso serbatoio è costituito da resti vegetali e animali accumulati e congelati nel corso di millenni. Con il progressivo riscaldamento del clima artico, il terreno comincia a scongelarsi, permettendo ai microrganismi del suolo di riattivarsi e decomporre la sostanza organica un tempo inerte. Tale processo biologico rilascia in atmosfera ingenti volumi di anidride carbonica e, in condizioni anaerobiche tipiche delle zone acquitrinose, di metano, un gas serra dotato di un potenziale climalterante a breve termine notevolmente superiore alla CO2. L’immissione di questi gas intensifica l’effetto serra globale, determinando un ulteriore aumento delle temperature che accelera a sua volta il disgelo del terreno.",
    titoloBrano: "Il disgelo del permafrost e i circuiti di retroazione",
  },
  {
    id: 847,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale delle seguenti affermazioni NON è coerente con le informazioni fornite nel testo?",
    rispostaCorretta: "La produzione di metano nel permafrost richiede la costante presenza di elevate concentrazioni di ossigeno nel terreno",
    risposteErrate: [
          "Il carbonio imprigionato nel permafrost supera in quantità quello complessivamente disperso nell’atmosfera",
          "Il metano possiede un potere climalterante a breve termine maggiore rispetto all’anidride carbonica",
          "La materia organica nel permafrost si è accumulata nell’arco di periodi temporali millenari",
          "I microrganismi del suolo rimangono inattivi finché il terreno permane nello stato di congelamento"
    ],
    spiegazione: "Il testo specifica espressamente che il metano si forma «in condizioni anaerobiche tipiche delle zone acquitrinose» (ossia in assenza/carenza di ossigeno), rendendo falsa l’affermazione secondo cui richiederebbe la presenza di elevate concentrazioni di ossigeno.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il permafrost, ovvero il terreno perennemente ghiacciato che copre vaste regioni dell’emisfero settentrionale, racchiude una quantità stimata di carbonio organico pari a quasi il doppio di quella attualmente presente nell’atmosfera terrestre. Questo immenso serbatoio è costituito da resti vegetali e animali accumulati e congelati nel corso di millenni. Con il progressivo riscaldamento del clima artico, il terreno comincia a scongelarsi, permettendo ai microrganismi del suolo di riattivarsi e decomporre la sostanza organica un tempo inerte. Tale processo biologico rilascia in atmosfera ingenti volumi di anidride carbonica e, in condizioni anaerobiche tipiche delle zone acquitrinose, di metano, un gas serra dotato di un potenziale climalterante a breve termine notevolmente superiore alla CO2. L’immissione di questi gas intensifica l’effetto serra globale, determinando un ulteriore aumento delle temperature che accelera a sua volta il disgelo del terreno.",
    titoloBrano: "Il disgelo del permafrost e i circuiti di retroazione",
  },
  {
    id: 848,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Cosa si osserva sullo schermo quando gli elettroni vengono inviati singolarmente e a intervalli distanziati nel tempo?",
    rispostaCorretta: "Ogni elettrone lascia un singolo punto localizzato, ma la somma di molti impatti riproduce una figura di interferenza",
    risposteErrate: [
          "Ogni singolo elettrone si frantuma all’impatto coprendo l’intero schermo con un bagliore uniforme",
          "Sullo schermo non compare alcuna traccia perché un singolo elettrone non possiede energia sufficiente",
          "Gli elettroni si dispongono esclusivamente lungo due linee nette corrispondenti alle due fessure",
          "L’interferenza scompare del tutto confermando che gli elettroni agiscono unicamente come sfere rigide macroscopiche"
    ],
    spiegazione: "Il testo descrive chiaramente: «Ciascun elettrone colpisce lo schermo come un punto localizzato ben definito; tuttavia, accumulando migliaia di singoli impatti nel tempo, riappare con chiarezza la medesima figura di interferenza».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Uno degli esperimenti più emblematici della meccanica quantistica consiste nell’inviare un fascio di particelle, come gli elettroni, verso una barriera provvista di due fenditure parallele, oltre la quale è posto uno schermo rivelatore. Quando l’apparato emette un flusso continuo di elettroni, sullo schermo si forma una tipica figura di interferenza, caratterizzata da frange alternate di massimo e minimo impatto, analoga a quella prodotta dalle onde luminose. L’aspetto davvero sorprendente emerge quando la sorgente viene attenuata al punto da sparare un singolo elettrone alla volta, garantendo che ciascuna particella attraversi l’apparato in totale isolamento temporale rispetto alle altre. Ciascun elettrone colpisce lo schermo come un punto localizzato ben definito; tuttavia, accumulando migliaia di singoli impatti nel tempo, riappare con chiarezza la medesima figura di interferenza. Questo dimostra che l’interferenza non scaturisce dalla collisione tra elettroni diversi, bensì dalla natura ondulatoria intrinseca della funzione d’onda di ogni singola particella.",
    titoloBrano: "L’esperimento della doppia fenditura con singoli elettroni",
  },
  {
    id: 849,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale conclusione concettuale si deduce in modo esplicito dall’esperimento descritto?",
    rispostaCorretta: "L’interferenza è una proprietà associata al comportamento probabilistico della singola particella e non a urti tra particelle distinte",
    risposteErrate: [
          "L’interferenza è generata da forze gravitazionali attrattive tra gli elettroni durante il volo",
          "La barriera a due fenditure assorbe l’intera carica elettrica delle particelle incidenti",
          "Gli elettroni si comportano come onde solo quando interagiscono simultaneamente in grandi gruppi",
          "Lo schermo rivelatore emette radiazioni che modificano a posteriori le traiettorie rettilinee"
    ],
    spiegazione: "L’ultima frase del brano afferma testualmente: «Questo dimostra che l’interferenza non scaturisce dalla collisione tra elettroni diversi, bensì dalla natura ondulatoria intrinseca della funzione d’onda di ogni singola particella».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Uno degli esperimenti più emblematici della meccanica quantistica consiste nell’inviare un fascio di particelle, come gli elettroni, verso una barriera provvista di due fenditure parallele, oltre la quale è posto uno schermo rivelatore. Quando l’apparato emette un flusso continuo di elettroni, sullo schermo si forma una tipica figura di interferenza, caratterizzata da frange alternate di massimo e minimo impatto, analoga a quella prodotta dalle onde luminose. L’aspetto davvero sorprendente emerge quando la sorgente viene attenuata al punto da sparare un singolo elettrone alla volta, garantendo che ciascuna particella attraversi l’apparato in totale isolamento temporale rispetto alle altre. Ciascun elettrone colpisce lo schermo come un punto localizzato ben definito; tuttavia, accumulando migliaia di singoli impatti nel tempo, riappare con chiarezza la medesima figura di interferenza. Questo dimostra che l’interferenza non scaturisce dalla collisione tra elettroni diversi, bensì dalla natura ondulatoria intrinseca della funzione d’onda di ogni singola particella.",
    titoloBrano: "L’esperimento della doppia fenditura con singoli elettroni",
  },
  {
    id: 850,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale caratteristica fisica distingue la propagazione delle onde S rispetto alle onde P?",
    rispostaCorretta: "Le onde S si propagano unicamente nei solidi, mentre le onde P possono viaggiare sia nei solidi sia nei fluidi",
    risposteErrate: [
          "Le onde S si propagano più velocemente delle onde P in qualsiasi materiale geologico",
          "Le onde S attraversano agevolmente i liquidi ma vengono totalmente bloccate dalle rocce solide",
          "Le onde P non subiscono mai alcuna rifrazione quando attraversano strati a densità differente",
          "Le onde S comprimono la roccia lungo la traiettoria mentre le onde P oscillano solo in superficie"
    ],
    spiegazione: "Il testo dichiara che le onde P «possono viaggiare sia nei solidi sia nei fluidi, e le onde S... possono propagarsi esclusivamente nei mezzi solidi, poiché i liquidi non oppongono resistenza alle forze di taglio».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La nostra conoscenza della struttura profonda della Terra deriva principalmente dallo studio della propagazione delle onde sismiche generate dai terremoti. Esistono due tipi fondamentali di onde di volume che attraversano l’interno del pianeta: le onde P (primarie o longitudinali), che comprimono e dilatano la roccia nella direzione di propagazione e possono viaggiare sia nei solidi sia nei fluidi, e le onde S (secondarie o trasversali), che oscillano perpendicolarmente alla direzione di avanzamento e possono propagarsi esclusivamente nei mezzi solidi, poiché i liquidi non oppongono resistenza alle forze di taglio. Quando un forte sisma si verifica, i sismografi situati a distanze angolari comprese tra circa 104° e 140° dall’epicentro non registrano l’arrivo diretto delle onde P a causa della rifrazione al confine tra mantello e nucleo, mentre le onde S risultano completamente assenti oltre i 104°. Questa netta zona d’ombra per le onde S ha consentito ai geofisici di dedurre che il nucleo esterno della Terra si trova allo stato fuso.",
    titoloBrano: "La struttura interna della Terra e le onde sismiche",
  },
  {
    id: 851,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale concatenazione logica ha consentito di determinare lo stato liquido del nucleo esterno terrestre?",
    rispostaCorretta: "L’incapacità delle onde S di viaggiare nei fluidi unita alla loro totale assenza oltre la distanza angolare di 104°",
    risposteErrate: [
          "La misurazione diretta della temperatura del nucleo tramite sonde perforanti profonde",
          "L’accelerazione improvvisa delle onde longitudinali al passaggio attraverso il mantello",
          "La presenza di una zona d’ombra uniforme per le onde P su tutti i continenti",
          "L’assorbimento chimico dei minerali ferrosi operato dai sismografi di superficie"
    ],
    spiegazione: "Dalla combinazione della proprietà fisica delle onde S (si propagano solo nei solidi) e del dato osservativo (assenza totale oltre i 104°) deriva direttamente la deduzione dello stato fuso del nucleo esterno.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La nostra conoscenza della struttura profonda della Terra deriva principalmente dallo studio della propagazione delle onde sismiche generate dai terremoti. Esistono due tipi fondamentali di onde di volume che attraversano l’interno del pianeta: le onde P (primarie o longitudinali), che comprimono e dilatano la roccia nella direzione di propagazione e possono viaggiare sia nei solidi sia nei fluidi, e le onde S (secondarie o trasversali), che oscillano perpendicolarmente alla direzione di avanzamento e possono propagarsi esclusivamente nei mezzi solidi, poiché i liquidi non oppongono resistenza alle forze di taglio. Quando un forte sisma si verifica, i sismografi situati a distanze angolari comprese tra circa 104° e 140° dall’epicentro non registrano l’arrivo diretto delle onde P a causa della rifrazione al confine tra mantello e nucleo, mentre le onde S risultano completamente assenti oltre i 104°. Questa netta zona d’ombra per le onde S ha consentito ai geofisici di dedurre che il nucleo esterno della Terra si trova allo stato fuso.",
    titoloBrano: "La struttura interna della Terra e le onde sismiche",
  },
  {
    id: 852,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il principale vantaggio pratico della catalisi eterogenea evidenziato nel testo?",
    rispostaCorretta: "La facilità di separazione del catalizzatore dalla miscela di reazione e il suo conseguente riutilizzo",
    risposteErrate: [
          "La capacità di modificare l’equilibrio termodinamico favorendo rese superiori al 100%",
          "L’eliminazione totale della necessità di mettere a contatto i reagenti chimici",
          "Il consumo irreversibile del catalizzatore che si trasforma nel prodotto desiderato",
          "La possibilità di operare senza alcuna superficie di adsorbimento"
    ],
    spiegazione: "L’ultima frase del brano recita: «il principale vantaggio pratico della catalisi eterogenea risiede nella straordinaria facilità con cui il catalizzatore solido può essere separato dalla miscela di reazione e riutilizzato».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nei processi chimici industriali, la catalisi gioca un ruolo decisivo per incrementare la sostenibilità e l’efficienza delle reazioni. Un catalizzatore è una sostanza che accelera la velocità di una trasformazione chimica fornendo un percorso di reazione alternativo caratterizzato da una minore energia di attivazione, senza tuttavia comparire tra i prodotti finali né alterare l’equilibrio termodinamico del sistema. Nella catalisi eterogenea, il catalizzatore si trova in una fase fisica differente rispetto ai reagenti, solitamente come solido a contatto con gas o liquidi. I reagenti vengono inizialmente adsorbiti sulla superficie del catalizzatore, dove i loro legami molecolari si indeboliscono facilitando la formazione dei prodotti, i quali successivamente si desorbono lasciando liberi i siti attivi. Rispetto alla catalisi omogenea, in cui catalizzatore e reagenti condividono la medesima fase, il principale vantaggio pratico della catalisi eterogenea risiede nella straordinaria facilità con cui il catalizzatore solido può essere separato dalla miscela di reazione e riutilizzato.",
    titoloBrano: "La catalisi eterogenea nella chimica industriale",
  },
  {
    id: 853,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al brano, quale delle seguenti azioni NON compete a un catalizzatore?",
    rispostaCorretta: "Modificare la posizione dell’equilibrio termodinamico della reazione",
    risposteErrate: [
          "Abbassare l’energia di attivazione necessaria per la trasformazione chimica",
          "Accelerare la velocità con cui i reagenti si convertono nei prodotti",
          "Fornire un percorso di reazione alternativo",
          "Rendersi nuovamente disponibile al termine del ciclo di reazione"
    ],
    spiegazione: "Il testo afferma esplicitamente che il catalizzatore agisce «senza tuttavia comparire tra i prodotti finali né alterare l’equilibrio termodinamico del sistema».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nei processi chimici industriali, la catalisi gioca un ruolo decisivo per incrementare la sostenibilità e l’efficienza delle reazioni. Un catalizzatore è una sostanza che accelera la velocità di una trasformazione chimica fornendo un percorso di reazione alternativo caratterizzato da una minore energia di attivazione, senza tuttavia comparire tra i prodotti finali né alterare l’equilibrio termodinamico del sistema. Nella catalisi eterogenea, il catalizzatore si trova in una fase fisica differente rispetto ai reagenti, solitamente come solido a contatto con gas o liquidi. I reagenti vengono inizialmente adsorbiti sulla superficie del catalizzatore, dove i loro legami molecolari si indeboliscono facilitando la formazione dei prodotti, i quali successivamente si desorbono lasciando liberi i siti attivi. Rispetto alla catalisi omogenea, in cui catalizzatore e reagenti condividono la medesima fase, il principale vantaggio pratico della catalisi eterogenea risiede nella straordinaria facilità con cui il catalizzatore solido può essere separato dalla miscela di reazione e riutilizzato.",
    titoloBrano: "La catalisi eterogenea nella chimica industriale",
  },
  {
    id: 854,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Cosa differenzia principalmente gli anticorpi monoclonali da quelli policlonali secondo il brano?",
    rispostaCorretta: "Gli anticorpi monoclonali riconoscono un unico epitopo specifico e derivano da un solo clone cellulare",
    risposteErrate: [
          "Gli anticorpi monoclonali vengono prodotti spontaneamente da tutti i tipi di cellule umane",
          "Gli anticorpi policlonali sono costituiti da molecole perfettamente identiche tra loro",
          "Gli anticorpi monoclonali danneggiano in modo indiscriminato sia i tessuti sani sia quelli malati",
          "Gli anticorpi policlonali sono incapaci di riconoscere qualsiasi patogeno naturale"
    ],
    spiegazione: "Il testo chiarisce che gli anticorpi policlonali derivano da molteplici linee e riconoscono epitopi distinti, mentre i monoclonali «derivano dalla proliferazione di un singolo clone linfocitario e sono costituiti da molecole identiche tra loro, capaci di legarsi a un unico ed esclusivo epitopo con straordinaria affinità».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La risposta immunitaria naturale contro un agente patogeno è tipicamente policlonale: l’organismo attiva molteplici linee di linfociti B, ciascuna delle quali produce immunoglobuline che riconoscono porzioni strutturali distinte (dette epitopi) del medesimo antigene. Sebbene questa eterogeneità garantisca una difesa biologica robusta ed efficace, essa risulta spesso poco adatta per applicazioni terapeutiche o diagnostiche ad altissima precisione. Gli anticorpi monoclonali, al contrario, derivano dalla proliferazione di un singolo clone linfocitario e sono costituiti da molecole identiche tra loro, capaci di legarsi a un unico ed esclusivo epitopo con straordinaria affinità. Questa proprietà consente alla medicina moderna di progettare farmaci biologici capaci di colpire in modo selettivo recettori specifici espressi sulle cellule tumorali o di neutralizzare singole citochine infiammatorie, riducendo drasticamente il danno collaterale ai tessuti sani circostanti.",
    titoloBrano: "Specificità molecolare degli anticorpi monoclonali",
  },
  {
    id: 855,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Qual è il presupposto che rende vantaggioso l’impiego terapeutico degli anticorpi monoclonali in oncologia?",
    rispostaCorretta: "La presenza di recettori specifici sulle cellule tumorali che possono fungere da bersaglio selettivo per un singolo tipo di anticorpo",
    risposteErrate: [
          "La capacità delle cellule tumorali di produrre autonomamente anticorpi monoclonali protettivi",
          "La totale assenza di risposta immunitaria naturale nell’organismo umano sano",
          "L’impossibilità per i farmaci chimici tradizionali di interagire con le proteine",
          "La necessità di distruggere uniformemente tutte le linee linfocitarie del paziente"
    ],
    spiegazione: "Il testo spiega che la straordinaria affinità per un unico epitopo «consente alla medicina moderna di progettare farmaci biologici capaci di colpire in modo selettivo recettori specifici espressi sulle cellule tumorali... riducendo drasticamente il danno collaterale ai tessuti sani».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La risposta immunitaria naturale contro un agente patogeno è tipicamente policlonale: l’organismo attiva molteplici linee di linfociti B, ciascuna delle quali produce immunoglobuline che riconoscono porzioni strutturali distinte (dette epitopi) del medesimo antigene. Sebbene questa eterogeneità garantisca una difesa biologica robusta ed efficace, essa risulta spesso poco adatta per applicazioni terapeutiche o diagnostiche ad altissima precisione. Gli anticorpi monoclonali, al contrario, derivano dalla proliferazione di un singolo clone linfocitario e sono costituiti da molecole identiche tra loro, capaci di legarsi a un unico ed esclusivo epitopo con straordinaria affinità. Questa proprietà consente alla medicina moderna di progettare farmaci biologici capaci di colpire in modo selettivo recettori specifici espressi sulle cellule tumorali o di neutralizzare singole citochine infiammatorie, riducendo drasticamente il danno collaterale ai tessuti sani circostanti.",
    titoloBrano: "Specificità molecolare degli anticorpi monoclonali",
  },
  {
    id: 856,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Su quale principio si basa l’eliminazione selettiva delle informazioni negli algoritmi di compressione lossy?",
    rispostaCorretta: "Sui limiti percettivi dei sensi umani, scartando dettagli visivi o acustici difficilmente distinguibili",
    risposteErrate: [
          "Sulla cancellazione casuale e periodica di un bit ogni quattro bit ricevuti",
          "Sulla sostituzione permanente dei dati multimediali con stringhe di testo puro",
          "Sulla trasformazione automatica di tutti i file compressi in formati eseguibili",
          "Sull’amplificazione artificiale delle frequenze sonore non udibili"
    ],
    spiegazione: "Il testo chiarisce che l’eliminazione «si fonda su sofisticati modelli psico-percettivi che sfruttano i limiti intrinseci dell’apparato sensoriale umano: vengono scartate quelle sfumature cromatiche o frequenze sonore che l’occhio o l’orecchio medio non sono in grado di percepire nitidamente».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La compressione dei dati digitali si suddivide in due grandi paradigmi: la compressione senza perdita (lossless) e la compressione con perdita (lossy). Negli algoritmi lossless, come quelli utilizzati per comprimere file eseguibili, testi o archivi di dati scientifici, l’informazione originaria viene codificata eliminando le ridondanze statistiche; la sequenza di bit decompressa risulta rigorosamente identica a quella di partenza, bit per bit. Al contrario, gli algoritmi lossy, ampiamente impiegati nei formati multimediali come JPEG per le immagini o MP3 per l’audio, sacrificano volutamente una parte dei dati originali per ottenere fattori di riduzione delle dimensioni molto più elevati. Tale eliminazione non è casuale, ma si fonda su sofisticati modelli psico-percettivi che sfruttano i limiti intrinseci dell’apparato sensoriale umano: vengono scartate quelle sfumature cromatiche o frequenze sonore che l’occhio o l’orecchio medio non sono in grado di percepire nitidamente.",
    titoloBrano: "Compressione dati: algoritmi senza perdita e con perdita",
  },
  {
    id: 857,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In quale dei seguenti ambiti l’impiego della compressione lossy risulterebbe inaccettabile secondo il brano?",
    rispostaCorretta: "Negli archivi di dati scientifici e nei file eseguibili di programmi informatici",
    risposteErrate: [
          "Nello streaming di brani musicali commerciali per l’ascolto quotidiano",
          "Nella pubblicazione di fotografie su siti web divulgativi",
          "Nella trasmissione di contenuti video ad alta definizione",
          "Nella memorizzazione di registrazioni vocali a scopo di intrattenimento"
    ],
    spiegazione: "Il testo specifica che per i file eseguibili, i testi e gli archivi di dati scientifici è indispensabile la compressione lossless, in quanto la sequenza ricostruita deve rimanere «rigorosamente identica a quella di partenza, bit per bit».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La compressione dei dati digitali si suddivide in due grandi paradigmi: la compressione senza perdita (lossless) e la compressione con perdita (lossy). Negli algoritmi lossless, come quelli utilizzati per comprimere file eseguibili, testi o archivi di dati scientifici, l’informazione originaria viene codificata eliminando le ridondanze statistiche; la sequenza di bit decompressa risulta rigorosamente identica a quella di partenza, bit per bit. Al contrario, gli algoritmi lossy, ampiamente impiegati nei formati multimediali come JPEG per le immagini o MP3 per l’audio, sacrificano volutamente una parte dei dati originali per ottenere fattori di riduzione delle dimensioni molto più elevati. Tale eliminazione non è casuale, ma si fonda su sofisticati modelli psico-percettivi che sfruttano i limiti intrinseci dell’apparato sensoriale umano: vengono scartate quelle sfumature cromatiche o frequenze sonore che l’occhio o l’orecchio medio non sono in grado di percepire nitidamente.",
    titoloBrano: "Compressione dati: algoritmi senza perdita e con perdita",
  },
  {
    id: 858,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Secondo il testo, qual è la condizione necessaria affinché un’ipotesi sia ritenuta scientifica?",
    rispostaCorretta: "Deve formulare previsioni suscettibili di essere smentite da evidenze empiriche contrarie",
    risposteErrate: [
          "Deve essere confermata all’unanimità prima ancora di essere sottoposta a prova sperimentale",
          "Deve spiegare qualsiasi fenomeno possibile senza mai rischiare di essere contraddetta",
          "Deve basarsi unicamente su assiomi metafisici immutabili e non verificabili",
          "Deve garantire che nessun ricercatore indipendente possa ripetere le misurazioni"
    ],
    spiegazione: "Il testo definisce la falsificabilità chiarendo che un’ipotesi è scientifica «quando compie previsioni precise e rischiose che possono, in linea di principio, essere smentite da un’osservazione o da un esperimento contrario».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nell’epistemologia popperiana, il criterio di demarcazione che distingue una teoria autenticamente scientifica da un costrutto metafisico o pseudoscientifico risiede nella falsificabilità. Un’ipotesi può essere considerata scientifica non quando è formulata in modo tale da trovare continue conferme empiriche rassicuranti, bensì quando compie previsioni precise e rischiose che possono, in linea di principio, essere smentite da un’osservazione o da un esperimento contrario. Se una teoria è strutturata in modo talmente elastico da poter spiegare a posteriori qualsiasi esito osservativo, essa cessa di essere informativa sul funzionamento del mondo reale. Nella prassi della ricerca contemporanea, questo principio si traduce nell’obbligo metodologico di pre-registrare i protocolli sperimentali e di garantire la trasparenza dei dati grezzi, affinché la comunità dei ricercatori possa sottoporre a test indipendenti le affermazioni teoriche senza incorrere in manipolazioni retroattive dei risultati.",
    titoloBrano: "Il criterio di falsificabilità e la prassi scientifica",
  },
  {
    id: 859,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale rischio metodologico si intende evitare attraverso la pre-registrazione dei protocolli e la condivisione dei dati grezzi?",
    rispostaCorretta: "L’adattamento arbitrario e retroattivo delle teorie per giustificare a posteriori i risultati ottenuti",
    risposteErrate: [
          "La pubblicazione di articoli scientifici sottoposti a revisione tra pari",
          "L’esecuzione di verifiche indipendenti da parte di laboratori concorrenti",
          "La formulazione di modelli matematici precisi nel campo delle scienze fisiche",
          "L’impiego di strumenti di misura tarati secondo standard internazionali"
    ],
    spiegazione: "Il testo spiega che la pre-registrazione e la trasparenza servono a «sottoporre a test indipendenti le affermazioni teoriche senza incorrere in manipolazioni retroattive dei risultati», evitando che una teoria venga adattata elasticamente per spiegare a posteriori qualunque esito.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nell’epistemologia popperiana, il criterio di demarcazione che distingue una teoria autenticamente scientifica da un costrutto metafisico o pseudoscientifico risiede nella falsificabilità. Un’ipotesi può essere considerata scientifica non quando è formulata in modo tale da trovare continue conferme empiriche rassicuranti, bensì quando compie previsioni precise e rischiose che possono, in linea di principio, essere smentite da un’osservazione o da un esperimento contrario. Se una teoria è strutturata in modo talmente elastico da poter spiegare a posteriori qualsiasi esito osservativo, essa cessa di essere informativa sul funzionamento del mondo reale. Nella prassi della ricerca contemporanea, questo principio si traduce nell’obbligo metodologico di pre-registrare i protocolli sperimentali e di garantire la trasparenza dei dati grezzi, affinché la comunità dei ricercatori possa sottoporre a test indipendenti le affermazioni teoriche senza incorrere in manipolazioni retroattive dei risultati.",
    titoloBrano: "Il criterio di falsificabilità e la prassi scientifica",
  },
  {
    id: 860,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale conseguenza chimica diretta danneggia gli organismi marini provvisti di guscio calcareo?",
    rispostaCorretta: "La sottrazione di ioni carbonato liberi, che vengono convertiti in ioni bicarbonato legandosi agli ioni idrogeno in eccesso",
    risposteErrate: [
          "L’improvviso aumento della salinità marina dovuto alla dissoluzione dei minerali costieri",
          "La totale scomparsa dell’ossigeno disciolto nelle correnti oceaniche superficiali",
          "L’accumulo di strati solidi di carbonato di calcio che impediscono ai coralli di respirare",
          "La trasformazione dell’acqua marina in una miscela priva di idrogeno"
    ],
    spiegazione: "Il testo descrive come gli ioni H+ in eccesso si leghino al carbonato formando bicarbonato, con la conseguenza che «la disponibilità di ioni carbonato nell’ambiente marino si riduce drasticamente, ostacolando la capacità degli organismi marini calcificatori... di sintetizzare e conservare le proprie strutture protettive».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Gli oceani svolgono una fondamentale funzione di regolazione del clima terrestre assorbendo circa un quarto dell’anidride carbonica antropica immessa nell’atmosfera. Tuttavia, questo servizio ecologico comporta un grave costo chimico noto come acidificazione degli oceani. Quando la CO2 atmosferica si discioglie nell’acqua di mare, reagisce con essa formando acido carbonico, il quale si dissocia rapidamente liberando ioni idrogeno (H+). L’incremento della concentrazione di ioni H+ non solo abbassa il pH delle acque superficiali, ma innesca anche una reazione secondaria: gli ioni idrogeno si legano agli ioni carbonato (CO3^2-) liberi, trasformandoli in ioni bicarbonato (HCO3^-). Di conseguenza, la disponibilità di ioni carbonato nell’ambiente marino si riduce drasticamente, ostacolando la capacità degli organismi marini calcificatori — come coralli, molluschi e piccoli plancton gasteropodi — di sintetizzare e conservare le proprie strutture protettive in carbonato di calcio.",
    titoloBrano: "Assorbimento oceanico di CO2 e acidificazione marina",
  },
  {
    id: 861,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale delle seguenti affermazioni NON è sostenuta dal testo?",
    rispostaCorretta: "L’assorbimento di anidride carbonica da parte degli oceani provoca un aumento complessivo del valore del pH marino",
    risposteErrate: [
          "Gli oceani trattengono circa il 25% della CO2 prodotta dalle attività umane",
          "La reazione iniziale tra anidride carbonica e acqua porta alla sintesi di acido carbonico",
          "I coralli e i molluschi necessitano di carbonato di calcio per costruire le proprie strutture protettive",
          "La dissociazione dell’acido carbonico genera un incremento degli ioni idrogeno"
    ],
    spiegazione: "Il testo afferma che la liberazione di ioni H+ «abbassa il pH delle acque superficiali» (acidificazione), rendendo falsa e non sostenuta l’affermazione secondo cui provocherebbe un aumento del pH.",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Gli oceani svolgono una fondamentale funzione di regolazione del clima terrestre assorbendo circa un quarto dell’anidride carbonica antropica immessa nell’atmosfera. Tuttavia, questo servizio ecologico comporta un grave costo chimico noto come acidificazione degli oceani. Quando la CO2 atmosferica si discioglie nell’acqua di mare, reagisce con essa formando acido carbonico, il quale si dissocia rapidamente liberando ioni idrogeno (H+). L’incremento della concentrazione di ioni H+ non solo abbassa il pH delle acque superficiali, ma innesca anche una reazione secondaria: gli ioni idrogeno si legano agli ioni carbonato (CO3^2-) liberi, trasformandoli in ioni bicarbonato (HCO3^-). Di conseguenza, la disponibilità di ioni carbonato nell’ambiente marino si riduce drasticamente, ostacolando la capacità degli organismi marini calcificatori — come coralli, molluschi e piccoli plancton gasteropodi — di sintetizzare e conservare le proprie strutture protettive in carbonato di calcio.",
    titoloBrano: "Assorbimento oceanico di CO2 e acidificazione marina",
  },
  {
    id: 862,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Secondo il brano, quale condizione fisica è indispensabile per vincere la repulsione tra i nuclei di deuterio e trizio?",
    rispostaCorretta: "Portare il combustibile a temperature elevatissime nello stato di plasma ionizzato",
    risposteErrate: [
          "Raffreddare il combustibile a temperature prossime allo zero assoluto",
          "Neutralizzare completamente la massa atomica dei neutroni prima della fusione",
          "Impedire qualunque contatto tra il plasma e i campi magnetici toroidali",
          "Eliminare la carica positiva dei protoni mediante reazioni di fissione spontanea"
    ],
    spiegazione: "Il testo dichiara esplicitamente che per superare la repulsione coulombiana è necessario «riscaldare il combustibile a temperature superiori a cento milioni di gradi Celsius, trasformandolo in uno stato di plasma ionizzato».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La riproduzione controllata della fusione nucleare sulla Terra rappresenta una delle sfide tecnologiche più ambiziose per la produzione di energia pulita e virtualmente inesauribile. Nella reazione più promettente, deuterio e trizio (isotopi dell’idrogeno) fondono per formare un nucleo di elio e un neutrone ad alta energia. Perché la reazione si inneschi, i nuclei devono superare la reciproca repulsione elettrostatica coulombiana, il che richiede di riscaldare il combustibile a temperature superiori a cento milioni di gradi Celsius, trasformandolo in uno stato di plasma ionizzato. Nei reattori a configurazione Tokamak, questo plasma incandescente viene mantenuto confinato all’interno di una camera a vuoto toroidale per mezzo di potentissimi campi magnetici combinati. Tuttavia, il principale ostacolo operativo consiste nel dominare le turbolenze e le instabilità magneto-idrodinamiche del plasma, le quali rischiano di degradare il confinamento termico e causare violente perdite di particelle verso le pareti della camera, spegnendo la reazione.",
    titoloBrano: "La fusione a confinamento magnetico nei reattori Tokamak",
  },
  {
    id: 863,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale conseguenza negativa provocano le instabilità del plasma nei reattori Tokamak in base al testo?",
    rispostaCorretta: "Danneggiano il confinamento termico favorendo la fuga di particelle verso le pareti e lo spegnimento della reazione",
    risposteErrate: [
          "Innescano una reazione a catena incontrollata che porta all’esplosione nucleare dell’impianto",
          "Convertono istantaneamente tutti i nuclei di elio in isotopi pesanti di uranio",
          "Annullano completamente l’emissione di neutroni ad alta energia senza intaccare il plasma",
          "Aumentano la temperatura del combustibile oltre ogni limite teorico calcolabile"
    ],
    spiegazione: "Il brano chiarisce che le instabilità «rischiano di degradare il confinamento termico e causare violente perdite di particelle verso le pareti della camera, spegnendo la reazione».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La riproduzione controllata della fusione nucleare sulla Terra rappresenta una delle sfide tecnologiche più ambiziose per la produzione di energia pulita e virtualmente inesauribile. Nella reazione più promettente, deuterio e trizio (isotopi dell’idrogeno) fondono per formare un nucleo di elio e un neutrone ad alta energia. Perché la reazione si inneschi, i nuclei devono superare la reciproca repulsione elettrostatica coulombiana, il che richiede di riscaldare il combustibile a temperature superiori a cento milioni di gradi Celsius, trasformandolo in uno stato di plasma ionizzato. Nei reattori a configurazione Tokamak, questo plasma incandescente viene mantenuto confinato all’interno di una camera a vuoto toroidale per mezzo di potentissimi campi magnetici combinati. Tuttavia, il principale ostacolo operativo consiste nel dominare le turbolenze e le instabilità magneto-idrodinamiche del plasma, le quali rischiano di degradare il confinamento termico e causare violente perdite di particelle verso le pareti della camera, spegnendo la reazione.",
    titoloBrano: "La fusione a confinamento magnetico nei reattori Tokamak",
  },
  {
    id: 864,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale delle seguenti prove a supporto dell’origine batterica degli organelli è citata nel testo?",
    rispostaCorretta: "La presenza di un proprio DNA circolare privo di istoni",
    risposteErrate: [
          "L’assenza totale di membrane fosfolipidiche attorno a mitocondri e cloroplasti",
          "La perfetta coincidenza genetica tra il DNA mitocondriale e il DNA del nucleo cellulare",
          "La resistenza assoluta dei ribosomi organellari a qualsiasi tipo di antibiotico",
          "La sintesi di pareti cellulari di peptidoglicano all’interno del citoplasma animale"
    ],
    spiegazione: "Il testo elenca esplicitamente tra le evidenze: «mitocondri e plastidi contengono un proprio DNA circolare chiuso, privo di proteine istoniche, che si replica con un ciclo separato rispetto al genoma nucleare».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La teoria endosimbiontica, formulata in chiave moderna da Lynn Margulis negli anni Sessanta, propone che mitocondri e cloroplasti delle cellule eucariotiche non si siano originati per evoluzione graduale interna, ma derivino da antichi batteri procarioti fagocitati da una cellula ospite ancestrale e stabilitisi in una simbiosi mutualistica permanente. Numerose e convergenti evidenze molecolari e ultrastrutturali corroborano questa ipotesi. In primo luogo, entrambi gli organelli possiedono una doppia membrana, in cui lo strato interno mostra una composizione lipidica affine a quella batterica, mentre quello esterno riflette la vescicola di endocitosi dell’ospite. In secondo luogo, mitocondri e plastidi contengono un proprio DNA circolare chiuso, privo di proteine istoniche, che si replica con un ciclo separato rispetto al genoma nucleare. Infine, i loro ribosomi interni presentano coefficienti di sedimentazione e sensibilità ad antibiotici specifici identici a quelli dei batteri a vita libera.",
    titoloBrano: "L’origine endosimbiontica degli organelli eucariotici",
  },
  {
    id: 865,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Nel contesto argomentativo del brano, che cosa rappresenta la doppia membrana di mitocondri e cloroplasti?",
    rispostaCorretta: "La traccia strutturale del processo di fagocitosi originario compiuto dalla cellula ospite ancestrale",
    risposteErrate: [
          "Una barriera artificiale introdotta mediante recenti tecniche di bioingegneria",
          "Un meccanismo difensivo temporaneo sviluppato per resistere alle infezioni virali",
          "La prova che la cellula ospite non ha mai interagito con organismi procarioti",
          "L’esito di una mutazione genetica spontanea avvenuta nel nucleo cellulare"
    ],
    spiegazione: "Il testo correla la doppia membrana all’evento simbiotico: «lo strato interno mostra una composizione lipidica affine a quella batterica, mentre quello esterno riflette la vescicola di endocitosi dell’ospite».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La teoria endosimbiontica, formulata in chiave moderna da Lynn Margulis negli anni Sessanta, propone che mitocondri e cloroplasti delle cellule eucariotiche non si siano originati per evoluzione graduale interna, ma derivino da antichi batteri procarioti fagocitati da una cellula ospite ancestrale e stabilitisi in una simbiosi mutualistica permanente. Numerose e convergenti evidenze molecolari e ultrastrutturali corroborano questa ipotesi. In primo luogo, entrambi gli organelli possiedono una doppia membrana, in cui lo strato interno mostra una composizione lipidica affine a quella batterica, mentre quello esterno riflette la vescicola di endocitosi dell’ospite. In secondo luogo, mitocondri e plastidi contengono un proprio DNA circolare chiuso, privo di proteine istoniche, che si replica con un ciclo separato rispetto al genoma nucleare. Infine, i loro ribosomi interni presentano coefficienti di sedimentazione e sensibilità ad antibiotici specifici identici a quelli dei batteri a vita libera.",
    titoloBrano: "L’origine endosimbiontica degli organelli eucariotici",
  },
  {
    id: 866,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il principio operativo attraverso cui gli interferometri come LIGO e Virgo rilevano le onde gravitazionali?",
    rispostaCorretta: "Misurano lo sfasamento ottico di raggi laser causato dalla contrazione e dilatazione asimmetrica dello spazio lungo bracci perpendicolari",
    risposteErrate: [
          "Rilevano l’aumento di temperatura dell’aria all’interno dei tubi a vuoto durante il passaggio dell’onda",
          "Catturano direttamente fotoni ad alta energia emessi dall’orizzonte degli eventi dei buchi neri",
          "Registrano le onde sonore prodotte dall’impatto meccanico delle masse stellari sull’atmosfera terrestre",
          "Calcolano la variazione della costante cosmologica globale mediante telescopi a riflessione convenzionali"
    ],
    spiegazione: "Il testo spiega che l’onda gravitazionale «comprime lo spazio lungo una direzione e lo dilata in quella ortogonale, alterando la differenza di cammino ottico tra i due fasci e producendo uno sfasamento misurabile nella figura di interferenza al fotorivelatore».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Le onde gravitazionali, teorizzate da Albert Einstein nel 1916 come conseguenza della Relatività Generale, sono perturbazioni dinamiche della curvatura dello spaziotempo generate dall’accelerazione di masse asimmetriche nell’universo. A causa della straordinaria rigidità dello spaziotempo, la loro ampiezza quando raggiungono la Terra è infinitesima, manifestandosi come una variazione relativa di lunghezza dell’ordine di una parte su dieci alla ventunesima. Per misurare distorsioni così impercettibili, gli osservatori interferometrici come LIGO e Virgo impiegano bracci perpendicolari lunghi diversi chilometri in cui viaggiano fasci laser in condizioni di vuoto spinto. Quando un’onda gravitazionale attraversa l’interferometro, essa comprime lo spazio lungo una direzione e lo dilata in quella ortogonale, alterando la differenza di cammino ottico tra i due fasci e producendo uno sfasamento misurabile nella figura di interferenza al fotorivelatore. Questa tecnologia ha permesso di osservare direttamente cataclismi cosmici come la fusione di buchi neri e stelle di neutroni.",
    titoloBrano: "La rivelazione delle onde gravitazionali mediante interferometria",
  },
  {
    id: 867,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale delle seguenti condizioni è necessaria affinché un sistema astrofisico generi onde gravitazionali secondo il brano?",
    rispostaCorretta: "La presenza di masse in rapida accelerazione disposte in modo asimmetrico",
    risposteErrate: [
          "L’assoluta staticità e quiete gravitazionale dei corpi celesti coinvolti",
          "La perfetta simmetria sferica e l’assenza di qualsiasi rotazione cosmica",
          "La vicinanza a un pianeta provvisto di atmosfera gassosa densa",
          "La presenza esclusiva di onde elettromagnetiche nella banda della luce visibile"
    ],
    spiegazione: "La prima frase del testo definisce chiaramente le onde gravitazionali come «perturbazioni dinamiche della curvatura dello spaziotempo generate dall’accelerazione di masse asimmetriche nell’universo».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Le onde gravitazionali, teorizzate da Albert Einstein nel 1916 come conseguenza della Relatività Generale, sono perturbazioni dinamiche della curvatura dello spaziotempo generate dall’accelerazione di masse asimmetriche nell’universo. A causa della straordinaria rigidità dello spaziotempo, la loro ampiezza quando raggiungono la Terra è infinitesima, manifestandosi come una variazione relativa di lunghezza dell’ordine di una parte su dieci alla ventunesima. Per misurare distorsioni così impercettibili, gli osservatori interferometrici come LIGO e Virgo impiegano bracci perpendicolari lunghi diversi chilometri in cui viaggiano fasci laser in condizioni di vuoto spinto. Quando un’onda gravitazionale attraversa l’interferometro, essa comprime lo spazio lungo una direzione e lo dilata in quella ortogonale, alterando la differenza di cammino ottico tra i due fasci e producendo uno sfasamento misurabile nella figura di interferenza al fotorivelatore. Questa tecnologia ha permesso di osservare direttamente cataclismi cosmici come la fusione di buchi neri e stelle di neutroni.",
    titoloBrano: "La rivelazione delle onde gravitazionali mediante interferometria",
  },
  {
    id: 868,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Per quale motivo i farmaci biologici non possono essere somministrati sotto forma di compresse per via orale?",
    rispostaCorretta: "Perché la loro struttura macromolecolare verrebbe degradata dagli enzimi e dai succhi gastrici dell’apparato digerente",
    risposteErrate: [
          "Perché possiedono un peso molecolare talmente basso da evaporare a temperatura ambiente",
          "Perché le piccole molecole di sintesi chimica ne annullerebbero l’effetto terapeutico",
          "Perché non possono sciogliersi nei liquidi organici a base acquosa",
          "Perché verrebbero respinti immediatamente dalle membrane cellulari esterne"
    ],
    spiegazione: "Il testo precisa che «A causa della loro elevata complessità conformazionale e della vulnerabilità alla degradazione enzimatica operata dai succhi gastrici, i farmaci biologici non possono essere assunti per via orale e richiedono la somministrazione parenterale».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il panorama terapeutico contemporaneo è caratterizzato dalla coesistenza di due grandi categorie di principi attivi: i farmaci tradizionali a base di piccole molecole di sintesi chimica e i farmaci biologici complessi. Le piccole molecole (come l’aspirina o gli antibiotici beta-lattamici) possiedono strutture chimiche semplici e ben definite, un basso peso molecolare e una notevole stabilità termica; queste caratteristiche consentono loro di essere formulate agevolmente in compresse orali e di attraversare con facilità le membrane cellulari per raggiungere bersagli intracellulari. I farmaci biologici (quali anticorpi monoclonali, citochine e proteine ricombinanti), al contrario, sono macromolecole ad alto peso molecolare prodotte mediante cellule viventi geneticamente modificate. A causa della loro elevata complessità conformazionale e della vulnerabilità alla degradazione enzimatica operata dai succhi gastrici, i farmaci biologici non possono essere assunti per via orale e richiedono la somministrazione parenterale (endovenosa o sottocutanea).",
    titoloBrano: "Molecole di sintesi chimica e farmaci biologici",
  },
  {
    id: 869,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale proprietà favorisce la capacità delle piccole molecole di raggiungere bersagli interni alla cellula?",
    rispostaCorretta: "Il basso peso molecolare unito alla capacità di attraversare agevolmente le membrane biologiche",
    risposteErrate: [
          "La loro produzione esclusiva all’interno di colture cellulari modificate",
          "L’instabilità conformazionale che le porta a frammentarsi nel sangue",
          "L’obbligo di essere somministrate per via endovenosa continua",
          "La presenza di residui proteici ad altissimo peso molecolare"
    ],
    spiegazione: "Il testo specifica che le piccole molecole «hanno un basso peso molecolare e una notevole stabilità termica; queste caratteristiche consentono loro... di attraversare con facilità le membrane cellulari per raggiungere bersagli intracellulari».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il panorama terapeutico contemporaneo è caratterizzato dalla coesistenza di due grandi categorie di principi attivi: i farmaci tradizionali a base di piccole molecole di sintesi chimica e i farmaci biologici complessi. Le piccole molecole (come l’aspirina o gli antibiotici beta-lattamici) possiedono strutture chimiche semplici e ben definite, un basso peso molecolare e una notevole stabilità termica; queste caratteristiche consentono loro di essere formulate agevolmente in compresse orali e di attraversare con facilità le membrane cellulari per raggiungere bersagli intracellulari. I farmaci biologici (quali anticorpi monoclonali, citochine e proteine ricombinanti), al contrario, sono macromolecole ad alto peso molecolare prodotte mediante cellule viventi geneticamente modificate. A causa della loro elevata complessità conformazionale e della vulnerabilità alla degradazione enzimatica operata dai succhi gastrici, i farmaci biologici non possono essere assunti per via orale e richiedono la somministrazione parenterale (endovenosa o sottocutanea).",
    titoloBrano: "Molecole di sintesi chimica e farmaci biologici",
  },
  {
    id: 870,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale particolarità contraddistingue il moto degli elettroni nel grafene secondo il testo?",
    rispostaCorretta: "Si comportano come particelle prive di massa efficace, muovendosi a velocità elevatissime con lunghi cammini liberi medi",
    risposteErrate: [
          "Restano completamente bloccati nei nodi del reticolo senza potersi spostare",
          "Si muovono a velocità superiori alla velocità della luce nel vuoto",
          "Richiedono temperature prossime allo zero assoluto per poter circolare",
          "Vengono espulsi spontaneamente dal reticolo di carbonio trasformandosi in fotoni"
    ],
    spiegazione: "Il testo dichiara che «gli elettroni di conduzione si comportano come particelle relativistiche prive di massa a riposo efficace... muovendosi a velocità prossime a un trecentesimo della velocità della luce con un cammino libero medio eccezionalmente lungo».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il grafene, un singolo strato bidimensionale di atomi di carbonio ibridati sp² disposti in un reticolo a nido d’ape, possiede un insieme straordinario di proprietà meccaniche, termiche ed elettroniche. Dal punto di vista del trasporto di carica, la sua struttura a bande peculiare fa sì che gli elettroni di conduzione si comportino come particelle relativistiche prive di massa a riposo efficace (fermioni di Dirac), muovendosi a velocità prossime a un trecentesimo della velocità della luce con un cammino libero medio eccezionalmente lungo. Questa proprietà conferisce al materiale una mobilità elettronica senza precedenti anche a temperatura ambiente. Tuttavia, dal punto di vista dell’elettronica digitale, il grafene presenta un limite cruciale: nella sua forma pura è un semimetallo privo di intervallo di banda proibita (bandgap zero). L’assenza di un bandgap naturale impedisce di spegnere completamente il passaggio di corrente elettrica nei transistor a grafene, limitandone l’efficienza nei circuiti logici tradizionali rispetto al silicio.",
    titoloBrano: "Proprietà elettroniche e limiti applicativi del grafene",
  },
  {
    id: 871,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il limite principale del grafene puro nell’ambito dei circuiti logici digitali?",
    rispostaCorretta: "L’assenza di una banda proibita, che impedisce di interrompere totalmente il flusso di corrente nei transistor",
    risposteErrate: [
          "L’eccessiva fragilità che lo porta a sgretolarsi al minimo passaggio di corrente",
          "L’elevatissimo costo di estrazione rispetto a qualsiasi altro metallo prezioso",
          "La totale incapacità di condurre il calore a temperatura ambiente",
          "L’impossibilità di disporre gli atomi di carbonio in configurazioni bidimensionali"
    ],
    spiegazione: "Il testo sottolinea che «L’assenza di un bandgap naturale impedisce di spegnere completamente il passaggio di corrente elettrica nei transistor a grafene, limitandone l’efficienza nei circuiti logici tradizionali rispetto al silicio».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il grafene, un singolo strato bidimensionale di atomi di carbonio ibridati sp² disposti in un reticolo a nido d’ape, possiede un insieme straordinario di proprietà meccaniche, termiche ed elettroniche. Dal punto di vista del trasporto di carica, la sua struttura a bande peculiare fa sì che gli elettroni di conduzione si comportino come particelle relativistiche prive di massa a riposo efficace (fermioni di Dirac), muovendosi a velocità prossime a un trecentesimo della velocità della luce con un cammino libero medio eccezionalmente lungo. Questa proprietà conferisce al materiale una mobilità elettronica senza precedenti anche a temperatura ambiente. Tuttavia, dal punto di vista dell’elettronica digitale, il grafene presenta un limite cruciale: nella sua forma pura è un semimetallo privo di intervallo di banda proibita (bandgap zero). L’assenza di un bandgap naturale impedisce di spegnere completamente il passaggio di corrente elettrica nei transistor a grafene, limitandone l’efficienza nei circuiti logici tradizionali rispetto al silicio.",
    titoloBrano: "Proprietà elettroniche e limiti applicativi del grafene",
  },
  {
    id: 872,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, in quale modo il rapporto tra isotopi dell’ossigeno riflette le temperature del passato?",
    rispostaCorretta: "Nei periodi più freddi la neve polare risulta maggiormente impoverita dell’isotopo pesante ossigeno-18",
    risposteErrate: [
          "Nei periodi caldi l’ossigeno-16 scompare del tutto dalle precipitazioni nevose",
          "La temperatura non influenza il tasso di evaporazione delle molecole d’acqua",
          "L’ossigeno-18 evapora più rapidamente dell’ossigeno-16 a basse temperature",
          "Il ghiaccio polare conserva isotopi radioattivi che emettono calore proporzionale all’età"
    ],
    spiegazione: "Il testo chiarisce: «minore è la temperatura atmosferica globale, più impoverito in ossigeno-18 risulterà il vapore che raggiunge le calotte per trasformarsi in neve, rendendo il rapporto isotopico un accurato paleotermometro naturale».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Le calotte glaciali dell’Antartide e della Groenlandia custodiscono un archivio climatico continuo che si estende per centinaia di migliaia di anni. Analizzando i campioni estratti mediante carotaggi profondi, i paleoclimatologi possono ricostruire sia la composizione dell’atmosfera del passato, sia le variazioni storiche di temperatura. La misurazione della temperatura si basa sul frazionamento isotopico dell’ossigeno e dell’idrogeno nelle molecole d’acqua che compongono il ghiaccio. Le molecole d’acqua formate dall’isotopo leggero ossigeno-16 evaporano dagli oceani tropicali con maggiore facilità rispetto a quelle contenenti il più pesante ossigeno-18. Durante il tragitto delle masse d’aria verso le regioni polari, il progressivo raffreddamento provoca successive precipitazioni che condensano e rimuovono preferenzialmente l’ossigeno-18. Di conseguenza, minore è la temperatura atmosferica globale, più impoverito in ossigeno-18 risulterà il vapore che raggiunge le calotte per trasformarsi in neve, rendendo il rapporto isotopico un accurato paleotermometro naturale.",
    titoloBrano: "I carotaggi glaciali e il termometro isotopico",
  },
  {
    id: 873,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale principio fisico-chimico spiega la progressiva riduzione di ossigeno-18 nelle masse d’aria polari?",
    rispostaCorretta: "La tendenza delle molecole contenenti l’isotopo più pesante a condensare e precipitare per prime durante il raffreddamento",
    risposteErrate: [
          "La distruzione selettiva dei nuclei di ossigeno-18 operata dalla radiazione solare ultravioletta",
          "La conversione dell’ossigeno-18 in azoto atmosferico durante il moto di convezione",
          "L’impossibilità per l’ossigeno-16 di formare gocce d’acqua all’interno delle nuvole",
          "Il congelamento istantaneo degli oceani tropicali che blocca l’evaporazione del vapore"
    ],
    spiegazione: "Il testo spiega chiaramente che «Durante il tragitto delle masse d’aria verso le regioni polari, il progressivo raffreddamento provoca successive precipitazioni che condensano e rimuovono preferenzialmente l’ossigeno-18».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Le calotte glaciali dell’Antartide e della Groenlandia custodiscono un archivio climatico continuo che si estende per centinaia di migliaia di anni. Analizzando i campioni estratti mediante carotaggi profondi, i paleoclimatologi possono ricostruire sia la composizione dell’atmosfera del passato, sia le variazioni storiche di temperatura. La misurazione della temperatura si basa sul frazionamento isotopico dell’ossigeno e dell’idrogeno nelle molecole d’acqua che compongono il ghiaccio. Le molecole d’acqua formate dall’isotopo leggero ossigeno-16 evaporano dagli oceani tropicali con maggiore facilità rispetto a quelle contenenti il più pesante ossigeno-18. Durante il tragitto delle masse d’aria verso le regioni polari, il progressivo raffreddamento provoca successive precipitazioni che condensano e rimuovono preferenzialmente l’ossigeno-18. Di conseguenza, minore è la temperatura atmosferica globale, più impoverito in ossigeno-18 risulterà il vapore che raggiunge le calotte per trasformarsi in neve, rendendo il rapporto isotopico un accurato paleotermometro naturale.",
    titoloBrano: "I carotaggi glaciali e il termometro isotopico",
  },
  {
    id: 874,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il nucleo problematico sollevato nel brano riguardo ai modelli di deep learning?",
    rispostaCorretta: "Il contrasto tra l’elevata accuratezza predittiva dei modelli e la difficoltà di comprendere i passaggi che portano alle loro decisioni",
    risposteErrate: [
          "L’assoluta inefficacia delle reti neurali nel riconoscere pattern complessi nei dati",
          "L’impossibilità tecnica di utilizzare computer digitali per la diagnostica sanitaria",
          "La preferenza della comunità scientifica per modelli puramente casuali e privi di parametri",
          "L’obbligo normativo di eliminare completamente l’informatica dalla guida autonoma"
    ],
    spiegazione: "Il testo evidenzia il dilemma: le reti ottengono «prestazioni predittive eccezionali» ma operano come «sistemi a scatola nera» in cui «risulta estremamente arduo per un essere umano comprendere l’esatta catena logica... che hanno determinato una particolare decisione».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’impiego crescente delle reti neurali profonde (deep learning) in settori critici come la diagnostica medica, la finanza e la guida autonoma ha sollevato un dibattito fondamentale attorno al problema dell’interpretabilità dei modelli. Se da un lato queste architetture complesse ottengono prestazioni predittive eccezionali estraendo correlazioni non lineari da immensi volumi di dati, dall’altro operano come sistemi a «scatola nera» (black box). Con milioni o miliardi di parametri numerici interconnessi, risulta estremamente arduo per un essere umano comprendere l’esatta catena logica o le caratteristiche specifiche che hanno determinato una particolare decisione o diagnosi algoritmica. Questa opacità contrasta con le esigenze etiche e giuridiche di trasparenza, rendendo indispensabile lo sviluppo di metodologie di intelligenza artificiale spiegabile (Explainable AI), capaci di fornire motivazioni comprensibili e verificabili senza degradare sensibilmente l’accuratezza del modello.",
    titoloBrano: "Opacità decisionale e spiegabilità nei modelli di apprendimento profondo",
  },
  {
    id: 875,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Nel contesto del brano, che cosa si intende con l’espressione «scatola nera»?",
    rispostaCorretta: "Un dispositivo computazionale il cui funzionamento interno e i cui passaggi decisionali non sono direttamente trasparenti o interpretabili",
    risposteErrate: [
          "Un contenitore protettivo metallico utilizzato per preservare i server da danni fisici",
          "Un componente hardware difettoso che produce calcoli errati in modo continuativo",
          "Un database crittografato a cui nessun utente autorizzato può accedere",
          "Un programma che rifiuta qualsiasi forma di connessione a reti esterne"
    ],
    spiegazione: "Nel testo l’espressione definisce i sistemi in cui, a causa della complessità dei parametri, «risulta estremamente arduo per un essere umano comprendere l’esatta catena logica o le caratteristiche specifiche che hanno determinato una particolare decisione».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’impiego crescente delle reti neurali profonde (deep learning) in settori critici come la diagnostica medica, la finanza e la guida autonoma ha sollevato un dibattito fondamentale attorno al problema dell’interpretabilità dei modelli. Se da un lato queste architetture complesse ottengono prestazioni predittive eccezionali estraendo correlazioni non lineari da immensi volumi di dati, dall’altro operano come sistemi a «scatola nera» (black box). Con milioni o miliardi di parametri numerici interconnessi, risulta estremamente arduo per un essere umano comprendere l’esatta catena logica o le caratteristiche specifiche che hanno determinato una particolare decisione o diagnosi algoritmica. Questa opacità contrasta con le esigenze etiche e giuridiche di trasparenza, rendendo indispensabile lo sviluppo di metodologie di intelligenza artificiale spiegabile (Explainable AI), capaci di fornire motivazioni comprensibili e verificabili senza degradare sensibilmente l’accuratezza del modello.",
    titoloBrano: "Opacità decisionale e spiegabilità nei modelli di apprendimento profondo",
  },
  {
    id: 876,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In quale modo il feedback negativo impedisce lo spreco di risorse nella cellula secondo il brano?",
    rispostaCorretta: "Il prodotto finale in eccesso blocca il primo enzima della sequenza legandosi al suo sito allosterico",
    risposteErrate: [
          "Il prodotto finale distrugge irreversibilmente tutti gli organelli deputati alla respirazione cellulare",
          "La cellula espelle istantaneamente i substrati nel mezzo extracellulare tramite pori di membrana",
          "L’enzima a monte converte il prodotto finale in energia termica incontrollata",
          "Tutti gli enzimi della via metabolica vengono degradati simultaneamente e non più sintetizzati"
    ],
    spiegazione: "Il testo descrive chiaramente: «il prodotto finale di una via metabolica agisce come inibitore allosterico del primo enzima... l’interazione con il sito allosterico induce una transizione conformazionale nella proteina enzimatica, riducendone drasticamente l’affinità per il substrato».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nel metabolismo cellulare, le sequenze di reazioni chimiche per la biosintesi di molecole complesse sono finemente regolate per evitare inutili sprechi di energia e accumuli tossici di intermedi. Uno dei meccanismi omeostatici più diffusi ed efficienti è l’inibizione a retroazione negativa (o feedback negativo). In questo schema, il prodotto finale di una via metabolica agisce come inibitore allosterico del primo enzima che catalizza la reazione a monte della catena. Il legame del prodotto finale non avviene nel sito attivo (dove si legano i substrati iniziali), bensì in un sito regolatorio distinto, denominato sito allosterico. Quando la concentrazione del prodotto finale supera la soglia necessaria alla cellula, l’interazione con il sito allosterico induce una transizione conformazionale nella proteina enzimatica, riducendone drasticamente l’affinità per il substrato. Al calare della concentrazione del prodotto, l’enzima si libera e riprende la propria attività catalitica.",
    titoloBrano: "Regolazione allosterica e inibizione a feedback nelle vie metaboliche",
  },
  {
    id: 877,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale caratteristica distingue il sito allosterico dal sito attivo dell’enzima?",
    rispostaCorretta: "Il sito allosterico è una regione regolatoria distinta che accoglie l’inibitore, mentre il sito attivo accoglie i substrati della reazione",
    risposteErrate: [
          "Il sito allosterico coincide perfettamente con il sito attivo ma agisce solo a temperature estreme",
          "Il sito allosterico si trova all’esterno della membrana cellulare anziché sulla proteina enzimatica",
          "Il sito attivo viene distrutto definitivamente dopo il primo ciclo di legame con l’inibitore",
          "Il sito allosterico catalizza la trasformazione chimica mentre il sito attivo regola la temperatura"
    ],
    spiegazione: "Il testo specifica: «Il legame del prodotto finale non avviene nel sito attivo (dove si legano i substrati iniziali), bensì in un sito regolatorio distinto, denominato sito allosterico».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nel metabolismo cellulare, le sequenze di reazioni chimiche per la biosintesi di molecole complesse sono finemente regolate per evitare inutili sprechi di energia e accumuli tossici di intermedi. Uno dei meccanismi omeostatici più diffusi ed efficienti è l’inibizione a retroazione negativa (o feedback negativo). In questo schema, il prodotto finale di una via metabolica agisce come inibitore allosterico del primo enzima che catalizza la reazione a monte della catena. Il legame del prodotto finale non avviene nel sito attivo (dove si legano i substrati iniziali), bensì in un sito regolatorio distinto, denominato sito allosterico. Quando la concentrazione del prodotto finale supera la soglia necessaria alla cellula, l’interazione con il sito allosterico induce una transizione conformazionale nella proteina enzimatica, riducendone drasticamente l’affinità per il substrato. Al calare della concentrazione del prodotto, l’enzima si libera e riprende la propria attività catalitica.",
    titoloBrano: "Regolazione allosterica e inibizione a feedback nelle vie metaboliche",
  },
  {
    id: 878,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il ruolo del modello teorico nell’esperimento scientifico secondo la prospettiva galileiana delineata nel testo?",
    rispostaCorretta: "Guida la progettazione dell’esperimento isolando i fattori rilevanti dalle interferenze accidentali",
    risposteErrate: [
          "Sostituisce completamente la necessità di eseguire qualsiasi prova empirica nel mondo reale",
          "Registra passivamente tutti i dettagli della natura senza applicare alcun filtro matematico",
          "Impedisce l’impiego della geometria e del calcolo numerico nello studio della fisica",
          "Garantisce che ogni ipotesi filosofica sia considerata vera a priori senza bisogno di verifiche"
    ],
    spiegazione: "Il testo afferma chiaramente che «L’esperimento scientifico non è dunque una semplice registrazione acritica... ma una costruzione concettuale attiva: un dispositivo sperimentale progettato per testare una specifica deduzione matematica... l’ipotesi teorica guida l’esperimento».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La fondazione della scienza moderna operata da Galileo Galilei non consistette in una mera celebrazione dell’osservazione empirica passiva, bensì nell’introduzione di una sintesi metodologica rigorosa tra «sensate esperienze» e «necessarie dimostrazioni». Per Galileo, l’esperienza sensibile da sola non costituisce ancora conoscenza scientifica: la natura è un libro scritto in caratteri matematici — figure geometriche, numeri e proporzioni — e per interrogarla efficacemente occorre isolare i fenomeni dalle perturbazioni accidentali della materia attraverso la formulazione di modelli astratti. L’esperimento scientifico non è dunque una semplice registrazione acritica di ciò che accade spontaneamente, ma una costruzione concettuale attiva: un dispositivo sperimentale progettato per testare una specifica deduzione matematica, controllando rigorosamente le variabili rilevanti. In questo modo, l’ipotesi teorica guida l’esperimento e l’evidenza quantitativa convalida o confuta il modello matematico proposto.",
    titoloBrano: "Il metodo galileiano tra esperienza e deduzione geometrica",
  },
  {
    id: 879,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale distinzione concettuale fondamentale emerge dal testo tra «osservazione passiva» e «metodo sperimentale»?",
    rispostaCorretta: "L’osservazione passiva registra i fatti spontanei con le loro impurità, mentre il metodo sperimentale interroga attivamente la natura sulla base di un’ipotesi matematica",
    risposteErrate: [
          "L’osservazione passiva impiega strumenti di calcolo avanzati, mentre il metodo sperimentale si affida solo ai cinque sensi",
          "Il metodo sperimentale rifiuta categoricamente l’uso della matematica e delle dimostrazioni logiche",
          "L’osservazione passiva consente di formulare leggi universali certe, mentre l’esperimento produce solo congetture prive di valore",
          "Non esiste alcuna differenza reale, trattandosi di sinonimi intercambiabili nel linguaggio scientifico"
    ],
    spiegazione: "Il brano contrappone espressamente la «mera celebrazione dell’osservazione empirica passiva» all’esperimento come «costruzione concettuale attiva... progettato per testare una specifica deduzione matematica, controllando rigorosamente le variabili rilevanti».",
    fonte: 'Lotto C1 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La fondazione della scienza moderna operata da Galileo Galilei non consistette in una mera celebrazione dell’osservazione empirica passiva, bensì nell’introduzione di una sintesi metodologica rigorosa tra «sensate esperienze» e «necessarie dimostrazioni». Per Galileo, l’esperienza sensibile da sola non costituisce ancora conoscenza scientifica: la natura è un libro scritto in caratteri matematici — figure geometriche, numeri e proporzioni — e per interrogarla efficacemente occorre isolare i fenomeni dalle perturbazioni accidentali della materia attraverso la formulazione di modelli astratti. L’esperimento scientifico non è dunque una semplice registrazione acritica di ciò che accade spontaneamente, ma una costruzione concettuale attiva: un dispositivo sperimentale progettato per testare una specifica deduzione matematica, controllando rigorosamente le variabili rilevanti. In questo modo, l’ipotesi teorica guida l’esperimento e l’evidenza quantitativa convalida o confuta il modello matematico proposto.",
    titoloBrano: "Il metodo galileiano tra esperienza e deduzione geometrica",
  },
  {
    id: 880,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Per quale ragione, secondo il testo, l’esperienza passata non può giustificare logicamente il metodo induttivo?",
    rispostaCorretta: "Perché ricorrere ai successi passati per convalidare l’induzione presuppone già la validità del principio che si intende dimostrare",
    risposteErrate: [
      "Perché le osservazioni sperimentali del passato contengono sempre errori di misurazione tecnica",
      "Perché le leggi deduttive smentiscono sistematicamente ogni singola rilevazione empirica",
      "Perché il corso della natura ha già mostrato di mutare radicalmente e regolarmente ogni giorno",
      "Perché la deduzione logica è incapace di formulare ipotesi astratte sul mondo fisico"
    ],
    spiegazione: "Il testo definisce esplicitamente il tentativo di fondare l’induzione sui successi passati come «una palese petizione di principio, poiché applica la regola induttiva per dimostrare la validità della regola stessa».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il ragionamento induttivo muove dall’osservazione di una serie di casi particolari per approdare a una legge generale, presumendo che ciò che si è verificato regolarmente nel passato continuerà a ripetersi nel futuro. Tuttavia, come evidenziato dall’analisi critica dell’empirismo, non è possibile giustificare tale inferenza mediante una dimostrazione puramente logica né attraverso l’esperienza stessa. Sul piano deduttivo, infatti, non vi è alcuna contraddizione logica nell’ipotizzare che il corso della natura possa mutare improvvisamente domani. D’altra parte, tentare di fondare l’induzione sui suoi passati successi empirici costituisce una palese petizione di principio, poiché applica la regola induttiva per dimostrare la validità della regola stessa. Ne consegue che ogni generalizzazione empirica poggia sull’assunzione non dimostrata dell’uniformità del cosmo, un principio che adottiamo per necessità pragmatica e consuetudine psicologica piuttosto che per rigore razionale.",
    titoloBrano: "Il problema dell’induzione e l’uniformità della natura",
  },
  {
    id: 881,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale fondamento ultimo sostiene le generalizzazioni empiriche in base alle conclusioni del brano?",
    rispostaCorretta: "Un presupposto non dimostrato di regolarità naturale, accolto per abitudine e utilità pratica",
    risposteErrate: [
      "Una rigorosa dimostrazione matematica di necessità ontologica a priori",
      "L’assoluta certezza formale garantita dalla deduzione sillogistica",
      "La verifica esaustiva e simultanea di tutti gli eventi futuri possibili",
      "La totale assenza di regolarità riscontrata negli eventi dell’universo"
    ],
    spiegazione: "La chiusa del testo afferma che ogni generalizzazione «poggia sull’assunzione non dimostrata dell’uniformità del cosmo, un principio che adottiamo per necessità pragmatica e consuetudine psicologica piuttosto che per rigore razionale».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il ragionamento induttivo muove dall’osservazione di una serie di casi particolari per approdare a una legge generale, presumendo che ciò che si è verificato regolarmente nel passato continuerà a ripetersi nel futuro. Tuttavia, come evidenziato dall’analisi critica dell’empirismo, non è possibile giustificare tale inferenza mediante una dimostrazione puramente logica né attraverso l’esperienza stessa. Sul piano deduttivo, infatti, non vi è alcuna contraddizione logica nell’ipotizzare che il corso della natura possa mutare improvvisamente domani. D’altra parte, tentare di fondare l’induzione sui suoi passati successi empirici costitovere una palese petizione di principio, poiché applica la regola induttiva per dimostrare la validità della regola stessa. Ne consegue che ogni generalizzazione empirica poggia sull’assunzione non dimostrata dell’uniformità del cosmo, un principio che adottiamo per necessità pragmatica e consuetudine psicologica piuttosto che per rigore razionale.",
    titoloBrano: "Il problema dell’induzione e l’uniformità della natura",
  },
  {
    id: 882,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è la tesi fondamentale del realismo scientifico secondo il brano?",
    rispostaCorretta: "Le teorie scientifiche di successo descrivono con buona approssimazione la struttura reale del mondo, incluse le entità non direttamente osservabili",
    risposteErrate: [
      "Le entità inosservabili sono pure finzioni linguistiche prive di qualsiasi correlato fisico",
      "Il progresso della scienza avviene esclusivamente attraverso interventi miracolosi e imprevedibili",
      "Tutte le teorie passate si sono rivelate perfette ed esenti da successive correzioni",
      "La scienza ha come unico fine la catalogazione estetica dei fenomeni superficiali"
    ],
    spiegazione: "Il testo esplicita che il realismo considera le migliori teorie «descrizioni approssimativamente vere delle strutture profonde del mondo, comprese le entità inosservabili».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il realismo scientifico sostiene che le migliori teorie della scienza matura non siano meri strumenti di calcolo per ordinare le apparenze, ma descrizioni approssimativamente vere delle strutture profonde del mondo, comprese le entità inosservabili come elettroni, geni o campi gravitazionali. L’argomento cardine a favore di questa posizione, noto come argomento «niente miracoli», afferma che il realismo è l’unica concezione filosofica che non rende il prodigioso successo predittivo e applicativo della scienza un evento miracoloso o inspiegabile. Se le teorie non cogliessero almeno in parte la reale architettura della realtà, le loro previsioni inedite e precise risulterebbero coincidenze fortuite ai limiti dell’inverosimile. Gli antirealisti obiettano ricordando la storia della scienza, costellata di teorie empiricamente vincenti nel loro tempo ma successivamente confutate e abbandonate; alcuni realisti replicano tuttavia, in chiave strutturalista, che gli elementi strutturali e le relazioni matematiche fondamentali tendono a conservarsi lungo le transizioni teoriche.",
    titoloBrano: "Il realismo scientifico e l’argomento «niente miracoli»",
  },
  {
    id: 883,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Su quale presupposto logico si fonda la replica strutturalista all’obiezione storica sollevata dagli antirealisti?",
    rispostaCorretta: "Sull’idea che le componenti strutturali e matematiche decisive permangano stabili anche quando una teoria viene superata",
    risposteErrate: [
      "Sull’affermazione che nessuna teoria scientifica è mai stata abbandonata nella storia",
      "Sul rifiuto di considerare l’adeguatezza predittiva come parametro di valutazione scientifica",
      "Sull’adozione di un modello che equipara il successo empirico a un miracolo casuale",
      "Sull’esclusione delle grandezze inosservabili da qualsiasi formalizzazione matematica"
    ],
    spiegazione: "Il brano specifica che la risposta in chiave strutturalista affronta l’obiezione storica notando che «gli elementi strutturali e le relazioni matematiche fondamentali tendono a conservarsi lungo le transizioni teoriche», garantendo continuità alla descrizione del reale.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il realismo scientifico sostiene che le migliori teorie della scienza matura non siano meri strumenti di calcolo per ordinare le apparenze, ma descrizioni approssimativamente vere delle strutture profonde del mondo, comprese le entità inosservabili come elettroni, geni o campi gravitazionali. L’argomento cardine a favore di questa posizione, noto come argomento «niente miracoli», afferma che il realismo è l’unica concezione filosofica che non rende il prodigioso successo predittivo e applicativo della scienza un evento miracoloso o inspiegabile. Se le teorie non cogliessero almeno in parte la reale architettura della realtà, le loro previsioni inedite e precise risulterebbero coincidenze fortuite ai limiti dell’inverosimile. Gli antirealisti obiettano ricordando la storia della scienza, costellata di teorie empiricamente vincenti nel loro tempo ma successivamente confutate e abbandonate; alcuni realisti replicano tuttavia, in chiave strutturalista, che gli elementi strutturali e le relazioni matematiche fondamentali tendono a conservarsi lungo le transizioni teoriche.",
    titoloBrano: "Il realismo scientifico e l’argomento «niente miracoli»",
  },
  {
    id: 884,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale combinazione di caratteri contraddistingue i giudizi analitici?",
    rispostaCorretta: "Sono necessari e universali, ma hanno un valore puramente esplicativo senza accrescere la conoscenza",
    risposteErrate: [
      "Sono informativi ed estensivi, ma privi di qualsiasi validità necessaria",
      "Derivano direttamente dall’osservazione sensibile particolare e contingente",
      "Scaturiscono unicamente dall’attività empirica e sono sempre soggetti a revisione",
      "Ampliano continuamente il sapere scientifico attraverso scoperte sperimentali inedite"
    ],
    spiegazione: "Il testo spiega che nei giudizi analitici il predicato è già contenuto nel soggetto: «possiedono il carattere dell’universalità e della necessità, ma sono meramente esplicativi e non ampliano il nostro sapere».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La gnoseologia critica supera la rigida alternativa tra razionalismo ed empirismo introducendo la nozione di giudizio sintetico a priori. I giudizi analitici, in cui il predicato è già implicitamente contenuto nel concetto del soggetto (come nell’asserzione «tutti i corpi sono estesi»), possiedono il carattere dell’universalità e della necessità, ma sono meramente esplicativi e non ampliano il nostro sapere. I giudizi sintetici a posteriori, ricavati dall’osservazione sensibile («questo corpo è pesante»), estendono le nostre conoscenze empiriche, ma rimangono privi di necessità universale e sono sempre rivedibili. Il sapere scientifico e la conoscenza oggettiva presuppongono invece proposizioni capaci di essere al contempo sintetiche, cioè realmente informative ed estensive, e a priori, ossia fornite di validità universale e necessaria prima di ogni singola esperienza particolare. Tali principi non derivano passivamente dai dati dei sensi, ma scaturiscono dall’attività con cui l’intelletto ordina e struttura il materiale sensibile.",
    titoloBrano: "I giudizi sintetici a priori e la conoscenza dell’esperienza",
  },
  {
    id: 885,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è la fonte dei principi sintetici a priori secondo la prospettiva delineata nel brano?",
    rispostaCorretta: "L’attività strutturante dell’intelletto umano che organizza il materiale ricevuto dai sensi",
    risposteErrate: [
      "L’accumulo passivo e acritico di una moltitudine di percezioni sensoriali",
      "La semplice analisi lessicale e tautologica delle definizioni grammaticali",
      "La confutazione costante di ogni modello teorico da parte dei dati grezzi",
      "La pura casualità empirica derivante dalle oscillazioni dell’ambiente circostante"
    ],
    spiegazione: "Il brano si conclude affermando che tali principi sintetici a priori «non derivano passivamente dai dati dei sensi, ma scaturiscono dall’attività con cui l’intelletto ordina e struttura il materiale sensibile».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La gnoseologia critica supera la rigida alternativa tra razionalismo ed empirismo introducendo la nozione di giudizio sintetico a priori. I giudizi analitici, in cui il predicato è già implicitamente contenuto nel concetto del soggetto (come nell’asserzione «tutti i corpi sono estesi»), possiedono il carattere dell’universalità e della necessità, ma sono meramente esplicativi e non ampliano il nostro sapere. I giudizi sintetici a posteriori, ricavati dall’osservazione sensibile («questo corpo è pesante»), estendono le nostre conoscenze empiriche, ma rimangono privi di necessità universale e sono sempre rivedibili. Il sapere scientifico e la conoscenza oggettiva presuppongono invece proposizioni capaci di essere al contempo sintetiche, cioè realmente informative ed estensive, e a priori, ossia fornite di validità universale e necessaria prima di ogni singola esperienza particolare. Tali principi non derivano passivamente dai dati dei sensi, ma scaturiscono dall’attività con cui l’intelletto ordina e struttura il materiale sensibile.",
    titoloBrano: "I giudizi sintetici a priori e la conoscenza dell’esperienza",
  },
  {
    id: 886,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale paradosso logico mette in luce l’esempio del predicato «verblu» secondo il testo?",
    rispostaCorretta: "Le medesime evidenze empiriche passate confermano formalmente due ipotesi tra loro incompatibili riguardo al futuro",
    risposteErrate: [
      "Nessun minerale possiede proprietà cromatiche osservabili prima della data stabilita",
      "La sintassi formale è sufficiente a scartare qualsiasi predicato introdotto di recente",
      "Gli smeraldi cambiano spontaneamente colore ogni volta che vengono esaminati da un osservatore",
      "I predicati linguistici sono totalmente indipendenti dalla storia e dalle consuetudini della comunità"
    ],
    spiegazione: "Il testo spiega che tutte le osservazioni attuali confermano sia che gli smeraldi sono verdi sia che sono \"verblu\", due ipotesi che faranno previsioni opposte dopo la data $t$, mostrando l’insufficienza della pura forma sintattica.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il cosiddetto «nuovo enigma dell’induzione» formulato da Nelson Goodman dimostra che la conferma empirica non dipende esclusivamente dalla forma sintattica degli enunciati. Si consideri il predicato artificiale «verblu», definito per applicarsi a tutti gli oggetti esaminati prima di una certa data futura $t$ se essi sono verdi, e a tutti gli altri oggetti non ancora esaminati se essi sono blu. Tutte le osservazioni compiute fino ad oggi su innumerevoli smeraldi verdi confermano in egual misura sia l’ipotesi standard «tutti gli smeraldi sono verdi», sia l’ipotesi alternativa «tutti gli smeraldi sono verblu». Dal punto di vista della pura logica formale, le evidenze disponibili supportano entrambe le proposizioni con la medesima forza sintattica. Tuttavia, nessuno considera ragionevole attendersi che uno smeraldo estratto dopo la data $t$ risulti blu. Ciò dimostra che solo alcuni predicati, definiti «proiettabili», sono legittimamente utilizzabili per formulare leggi induttive, e che la distinzione tra predicati proiettabili e non proiettabili non risiede nella sintassi formale, bensì nel nostro radicamento linguistico e nella storia d’uso dei concetti.",
    titoloBrano: "Il nuovo enigma dell’induzione e i predicati proiettabili",
  },
  {
    id: 887,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale conseguenza teorica fondamentale si ricava dall’argomentazione di Goodman in merito ai criteri di conferma scientifica?",
    rispostaCorretta: "Un criterio di validazione induttiva basato unicamente sulla struttura logica formale è intrinsecamente incompleto",
    risposteErrate: [
      "Tutti i predicati temporali devono essere banditi da qualsiasi forma di comunicazione umana",
      "L’esperienza passata non ha alcun valore pratico né predittivo per la vita quotidiana",
      "Le ipotesi scientifiche possono fare a meno del supporto del linguaggio ordinario",
      "I concetti non proiettabili risultano sempre più efficaci di quelli radicati nella prassi"
    ],
    spiegazione: "L’argomento dimostra che la pura sintassi logica non basta a discriminare tra buone e cattive induzioni («la conferma empirica non dipende esclusivamente dalla forma sintattica degli enunciati»), richiedendo riferimenti semantici e pragmatici.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il cosiddetto «nuovo enigma dell’induzione» formulato da Nelson Goodman dimostra che la conferma empirica non dipende esclusivamente dalla forma sintattica degli enunciati. Si consideri il predicato artificiale «verblu», definito per applicarsi a tutti gli oggetti esaminati prima di una certa data futura $t$ se essi sono verdi, e a tutti gli altri oggetti non ancora esaminati se essi sono blu. Tutte le osservazioni compiute fino ad oggi su innumerevoli smeraldi verdi confermano in egual misura sia l’ipotesi standard «tutti gli smeraldi sono verdi», sia l’ipotesi alternativa «tutti gli smeraldi sono verblu». Dal punto di vista della pura logica formale, le evidenze disponibili supportano entrambe le proposizioni con la medesima forza sintattica. Tuttavia, nessuno considera ragionevole attendersi che uno smeraldo estratto dopo la data $t$ risulti blu. Ciò dimostra che solo alcuni predicati, definiti «proiettabili», sono legittimamente utilizzabili per formulare leggi induttive, e che la distinzione tra predicati proiettabili e non proiettabili non risiede nella sintassi formale, bensì nel nostro radicamento linguistico e nella storia d’uso dei concetti.",
    titoloBrano: "Il nuovo enigma dell’induzione e i predicati proiettabili",
  },
  {
    id: 888,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il punto centrale che l’esperimento della stanza cinese intende dimostrare?",
    rispostaCorretta: "L’esecuzione corretta di regole sintattiche su simboli non equivale alla reale comprensione del loro significato",
    risposteErrate: [
      "Gli esseri umani non sono in grado di apprendere lingue straniere senza manuali formali",
      "I computer attuali commettono errori grammaticali costanti nella traduzione automatica",
      "La mente umana opera esclusivamente attraverso la manipolazione meccanica di caratteri grafici",
      "Nessun sistema esterno può distinguere un parlante nativo da un traduttore automatico"
    ],
    spiegazione: "Il testo argomenta che l’individuo manipola i simboli in modo perfetto senza capirne il senso: «la manipolazione di simboli non è né identica né sufficiente a generare la semantica, ossia l’attribuzione di significato».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’argomento della stanza cinese, ideato da John Searle, intende confutare la tesi dell’intelligenza artificiale «forte», secondo cui un calcolatore adeguatamente programmato possiede una mente genuina ed è capace di autentica comprensione. Si immagini una persona che non conosce la lingua cinese chiusa dentro una stanza; costei riceve fogli con ideogrammi cinesi dall’esterno e, consultando un dettagliato manuale di istruzioni in italiano, manipola tali simboli in base alla loro forma grafica, producendo in uscita risposte perfette in cinese. Dall’esterno, l’individuo appare indistinguibile da un parlante nativo fluente. Tuttavia, egli non comprende affatto il significato dei simboli che manipola: la sua attività è puramente formale e sintattica. Searle ne deduce che la manipolazione di simboli non è né identica né sufficiente a generare la semantica, ossia l’attribuzione di significato e l’intenzionalità cosciente; di conseguenza, nessun programma computazionale, per quanto sofisticato, può di per sé costituire una mente pensante.",
    titoloBrano: "La stanza cinese e i limiti della computazione sintattica",
  },
  {
    id: 889,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In base al testo, quale proprietà mentale NON può essere prodotta dalla sola esecuzione di un programma di calcolo?",
    rispostaCorretta: "L’intenzionalità cosciente e la comprensione semantica",
    risposteErrate: [
      "La rispondenza formale alle regole di un manuale procedurale",
      "La manipolazione di simboli grafici secondo la loro sagoma visiva",
      "L’emissione di risposte strutturate verso l’ambiente esterno",
      "L’imitazione superficiale di un comportamento linguistico corretto"
    ],
    spiegazione: "Il brano stabilisce che la manipolazione di simboli non è sufficiente a generare «la semantica, ossia l’attribuzione di significato e l’intenzionalità cosciente».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’argomento della stanza cinese, ideato da John Searle, intende confutare la tesi dell’intelligenza artificiale «forte», secondo cui un calcolatore adeguatamente programmato possiede una mente genuina ed è capace di autentica comprensione. Si immagini una persona che non conosce la lingua cinese chiusa dentro una stanza; costei riceve fogli con ideogrammi cinesi dall’esterno e, consultando un dettagliato manuale di istruzioni in italiano, manipola tali simboli in base alla loro forma grafica, producendo in uscita risposte perfette in cinese. Dall’esterno, l’individuo appare indistinguibile da un parlante nativo fluente. Tuttavia, egli non comprende affatto il significato dei simboli che manipola: la sua attività è puramente formale e sintattica. Searle ne deduce che la manipolazione di simboli non è né identica né sufficiente a generare la semantica, ossia l’attribuzione di significato e l’intenzionalità cosciente; di conseguenza, nessun programma computazionale, per quanto sofisticato, può di per sé costituire una mente pensante.",
    titoloBrano: "La stanza cinese e i limiti della computazione sintattica",
  },
  {
    id: 890,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il conflitto teorico principale evidenziato dal paradosso secondo il brano?",
    rispostaCorretta: "Il contrasto tra il criterio della continuità funzionale e quello della persistenza della materia originaria",
    risposteErrate: [
      "La difficoltà tecnica di riparare manufatti navali in assenza di legno di qualità",
      "La superiorità indiscussa del criterio materiale su qualunque altra valutazione logica",
      "L’impossibilità fisica di ricostruire oggetti smontati a causa dell’usura del tempo",
      "La certezza che gli oggetti cambiano identità numerica a ogni minima variazione atomica"
    ],
    spiegazione: "La chiusa del testo riassume esattamente la tensione tra «continuità spaziotemporale e funzionale, che privilegia la nave restaurata per gradi» e «composizione materiale originaria, che favorisce la nave riassemblata».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il celebre paradosso della nave di Teseo affronta il problema della persistenza dell’identità attraverso il mutamento materiale nel tempo. Si narra che la nave di Teseo sia stata conservata sostituendo progressivamente ogni asse di legno deteriorata con una nuova, finché nessuna parte della materia originaria è rimasta nell’imbarcazione. Ci si chiede se la nave risultante sia ancora la medesima nave o un manufatto numericamente distinto. La questione si complica qualora un secondo artigiano, avendo raccolto e custodito tutte le assi dismesse, le riassembli fedelmente ricostruendo la nave originaria: quale delle due navi vanta ora il legittimo titolo di essere l’autentica nave di Teseo? Il paradosso evidenzia la tensione tra due criteri intuitivi di identità: quello della continuità spaziotemporale e funzionale, che privilegia la nave restaurata per gradi, e quello della composizione materiale originaria, che favorisce la nave riassemblata con i vecchi componenti.",
    titoloBrano: "Il paradosso della nave di Teseo e la persistenza dell’identità",
  },
  {
    id: 891,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale conseguenza concettuale deriverebbe se si assumesse la conservazione integrale della materia come unico e assoluto criterio di identità?",
    rispostaCorretta: "La nave restaurata asse dopo asse non potrebbe essere considerata la medesima nave di Teseo",
    risposteErrate: [
      "Entrambe le navi risulterebbero perfettamente identiche tra loro nello stesso istante",
      "La nave ricostruita con le vecchie assi perderebbe qualsiasi legame con il passato",
      "La continuità funzionale diverrebbe il fattore dominante per identificare gli organismi",
      "Nessun oggetto potrebbe mai essere riparato o pulito senza andare distrutto"
    ],
    spiegazione: "Se il criterio unico fosse l’identità materiale originaria, la nave restaurata (in cui non è rimasta alcuna parte della materia originaria) perderebbe il titolo di essere la nave di Teseo, che andrebbe invece alla nave riassemblata con le vecchie assi.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il celebre paradosso della nave di Teseo affronta il problema della persistenza dell’identità attraverso il mutamento materiale nel tempo. Si narra che la nave di Teseo sia stata conservata sostituendo progressivamente ogni asse di legno deteriorata con una nuova, finché nessuna parte della materia originaria è rimasta nell’imbarcazione. Ci si chiede se la nave risultante sia ancora la medesima nave o un manufatto numericamente distinto. La questione si complica qualora un secondo artigiano, avendo raccolto e custodito tutte le assi dismesse, le riassembli fedelmente ricostruendo la nave originaria: quale delle due navi vanta ora il legittimo titolo di essere l’autentica nave di Teseo? Il paradosso evidenzia la tensione tra due criteri intuitivi di identità: quello della continuità spaziotemporale e funzionale, che privilegia la nave restaurata per gradi, e quello della composizione materiale originaria, che favorisce la nave riassemblata con i vecchi componenti.",
    titoloBrano: "Il paradosso della nave di Teseo e la persistenza dell’identità",
  },
  {
    id: 892,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il punto centrale sostenuto dalla tesi di Duhem-Quine nel testo?",
    rispostaCorretta: "Le ipotesi scientifiche non affrontano mai il tribunale dell’esperienza da sole, ma sempre come parte di un sistema teorico interconnesso",
    risposteErrate: [
      "Gli esperimenti scientifici sono totalmente incapaci di rilevare errori nei modelli di calcolo",
      "La logica formale è in grado di indicare esattamente quale assunzione ausiliaria sia falsa",
      "Ogni anomalia osservativa impone l’abbandono immediato e indiscutibile dell’ipotesi centrale",
      "Gli strumenti di misura non necessitano di alcuna teoria fisica per essere calibrati"
    ],
    spiegazione: "Il testo afferma fin dall’inizio che «un’ipotesi scientifica isolata non possa mai essere sottoposta a controllo empirico in modo del tutto indipendente dal resto delle nostre conoscenze» poiché coinvolge una rete di assunzioni ausiliarie.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La tesi di Duhem-Quine sostiene che un’ipotesi scientifica isolata non possa mai essere sottoposta a controllo empirico in modo del tutto indipendente dal resto delle nostre conoscenze. Quando un esperimento produce un risultato in disaccordo con le previsioni teoriche, la logica formale ci informa che vi è un errore nel sistema, ma non indica con precisione quale specifica proposizione sia responsabile del fallimento. La previsione controllata, infatti, non discende dalla sola ipotesi principale, ma richiede un fitto reticolo di assunzioni ausiliarie, che comprendono le teorie sul funzionamento degli strumenti di misura, le condizioni al contorno e le ipotesi sull’assenza di interferenze esterne. Di fronte a un’anomalia sperimentale, lo scienziato ha sempre a disposizione una molteplicità di scelte razionali: può decidere di abbandonare l’ipotesi centrale, ma può altrettanto legittimamente modificare una o più ipotesi ausiliarie, preservando il nucleo della teoria principale.",
    titoloBrano: "La tesi di Duhem-Quine e l’olismo della verifica scientifica",
  },
  {
    id: 893,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In quale modo uno scienziato può preservare la teoria principale di fronte a un esito empirico negativo secondo il brano?",
    rispostaCorretta: "Rivedendo o correggendo una delle ipotesi ausiliarie o le condizioni al contorno del sistema",
    risposteErrate: [
      "Ignorando deliberatamente i risultati dell’esperimento senza modificare nulla nel sistema",
      "Sostituendo la logica formale con principi metafisici dogmatici e arbitrari",
      "Dichiarando privo di significato qualsiasi dato proveniente dagli strumenti di misura",
      "Eliminando definitivamente ogni riferimento alle condizioni al contorno"
    ],
    spiegazione: "Il brano afferma esplicitamente che lo scienziato «può altrettanto legittimamente modificare una o più ipotesi ausiliarie, preservando il nucleo della teoria principale».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La tesi di Duhem-Quine sostiene che un’ipotesi scientifica isolata non possa mai essere sottoposta a controllo empirico in modo del tutto indipendente dal resto delle nostre conoscenze. Quando un esperimento produce un risultato in disaccordo con le previsioni teoriche, la logica formale ci informa che vi è un errore nel sistema, ma non indica con precisione quale specifica proposizione sia responsabile del fallimento. La previsione controllata, infatti, non discende dalla sola ipotesi principale, ma richiede un fitto reticolo di assunzioni ausiliarie, che comprendono le teorie sul funzionamento degli strumenti di misura, le condizioni al contorno e le ipotesi sull’assenza di interferenze esterne. Di fronte a un’anomalia sperimentale, lo scienziato ha sempre a disposizione una molteplicità di scelte razionali: può decidere di abbandonare l’ipotesi centrale, ma può altrettanto legittimamente modificare una o più ipotesi ausiliarie, preservando il nucleo della teoria principale.",
    titoloBrano: "La tesi di Duhem-Quine e l’olismo della verifica scientifica",
  },
  {
    id: 894,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è lo scopo metodologico del «velo di ignoranza» secondo quanto esposto nel brano?",
    rispostaCorretta: "Garantire l’imparzialità dei contraenti impedendo loro di favorire la propria condizione personale",
    risposteErrate: [
      "Eliminare completamente la memoria storica degli individui per renderli passivi",
      "Imporre una dottrina etica universale basata su credenze religiose condivise",
      "Favorire gli interessi specifici della classe sociale dotata delle maggiori doti naturali",
      "Abolire qualsiasi forma di confronto razionale nella stipulazione del contratto sociale"
    ],
    spiegazione: "Il testo spiega che il velo di ignoranza, privando i soggetti della conoscenza della propria futura posizione, impedisce di modellare le regole a vantaggio personale, costringendo a «criteri imparziali e cooperativi».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nella teoria contrattualistica della giustizia formulata da John Rawls, l’individuazione di principi equi per la convivenza sociale richiede un artificio concettuale noto come «posizione originaria». In questo scenario ipotetico, i contraenti sono posti dietro un «velo di ignoranza» che impedisce loro di conoscere la propria collocazione futura nella società: ciascuno ignora la propria classe sociale, il livello di reddito, le doti naturali come intelligenza o forza fisica, e persino la propria concezione del bene. Privati della possibilità di modellare le regole a proprio esclusivo vantaggio, gli individui sono razionalmente spinti a scegliere criteri imparziali e cooperativi. Poiché chiunque potrebbe trovarsi, una volta sollevato il velo, nella condizione più svantaggiata o vulnerabile, la scelta razionale impone di massimizzare il benessere e le tutele del gruppo sociale più debole, subordinando le disuguaglianze economiche al miglioramento della sorte dei meno favoriti.",
    titoloBrano: "Il velo di ignoranza e i principi di giustizia distributiva",
  },
  {
    id: 895,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale principio distributivo scaturisce logicamente dalla consapevolezza che chiunque potrebbe trovarsi nella posizione peggiore?",
    rispostaCorretta: "Le disuguaglianze economiche sono ammissibili solo se comportano il massimo beneficio possibile per i più svantaggiati",
    risposteErrate: [
      "Tutti i cittadini devono percepire identiche retribuzioni a prescindere da ogni tipo di impegno",
      "I beni primari devono essere assegnati in proporzione diretta al talento naturale originario",
      "La società deve ignorare le condizioni di debolezza per stimolare la competizione pura",
      "I membri più abbienti hanno il diritto di determinare le regole del patto contrattuale"
    ],
    spiegazione: "Il testo conclude indicando che la scelta razionale dietro il velo impone di «massimizzare il benessere e le tutele del gruppo sociale più debole, subordinando le disuguaglianze economiche al miglioramento della sorte dei meno favoriti».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nella teoria contrattualistica della giustizia formulata da John Rawls, l’individuazione di principi equi per la convivenza sociale richiede un artificio concettuale noto come «posizione originaria». In questo scenario ipotetico, i contraenti sono posti dietro un «velo di ignoranza» che impedisce loro di conoscere la propria collocazione futura nella società: ciascuno ignora la propria classe sociale, il livello di reddito, le doti naturali come intelligenza o forza fisica, e persino la propria concezione del bene. Privati della possibilità di modellare le regole a proprio esclusivo vantaggio, gli individui sono razionalmente spinti a scegliere criteri imparziali e cooperativi. Poiché chiunque potrebbe trovarsi, una volta sollevato il velo, nella condizione più svantaggiata o vulnerabile, la scelta razionale impone di massimizzare il benessere e le tutele del gruppo sociale più debole, subordinando le disuguaglianze economiche al miglioramento della sorte dei meno favoriti.",
    titoloBrano: "Il velo di ignoranza e i principi di giustizia distributiva",
  },
  {
    id: 896,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In che modo la prospettiva compatibilista ridefinisce il concetto di libertà dell’agente?",
    rispostaCorretta: "Come capacità di agire secondo i propri desideri e convinzioni in assenza di costrizioni o coercizioni esterne",
    risposteErrate: [
      "Come facoltà di compiere scelte assolutamente prive di qualsiasi causa antecedente",
      "Come subordinazione totale della volontà a forze caotiche e imperscrutabili",
      "Come immunità dell’agente da ogni tipo di giudizio o conseguenza giuridica",
      "Come illusione psicologica priva di valore per l’attribuzione di responsabilità"
    ],
    spiegazione: "Il brano chiarisce che la libertà compatibilista non è assenza di cause, ma consiste nel «poter determinare le proprie azioni sulla base dei propri desideri, credenze e intenzioni senza costrizioni esterne».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La dottrina compatibilista sostiene che la verità del determinismo fisico non esclude la realtà della libertà umana e della responsabilità morale. Se per determinismo si intende che ogni evento, incluse le volizioni umane, è interamente causato da una catena ininterrotta di eventi precedenti secondo leggi di natura, ciò non implica che le nostre decisioni siano prive di significato. Secondo i compatibilisti, infatti, essere liberi non significa agire al di fuori di ogni causalità fisica — un’ipotesi che equivarrebbe alla pura casualità incontrollata —, ma poter determinare le proprie azioni sulla base dei propri desideri, credenze e intenzioni senza costrizioni esterne. Un individuo agisce liberamente quando è l’autore cosciente della propria condotta, anche se i suoi desideri interni sono a loro volta l’esito di processi causali deterministici. La responsabilità morale e la giustizia delle sanzioni trovano dunque fondamento nella capacità dell’agente di comprendere le ragioni e orientare la propria volontà.",
    titoloBrano: "Determinismo causale, compatibilismo e responsabilità morale",
  },
  {
    id: 897,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale rischio teorico comporterebbe definire la libertà come totale assenza di causalità secondo il testo?",
    rispostaCorretta: "Equiparare la libertà dell’azione a una casualità incontrollata e imprevedibile",
    risposteErrate: [
      "Rafforzare in modo definitivo l’impianto del determinismo materialistico",
      "Impedire l’applicazione di qualsiasi legge matematica al mondo inorganico",
      "Dimostrare che la mente umana è identica a un dispositivo di calcolo binario",
      "Rendere tutte le decisioni umane universalmente prevedibili a priori"
    ],
    spiegazione: "Il testo dichiara esplicitamente che agire al di fuori di ogni causalità fisica è «un’ipotesi che equivarrebbe alla pura casualità incontrollata».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La dottrina compatibilista sostiene che la verità del determinismo fisico non esclude la realtà della libertà umana e della responsabilità morale. Se per determinismo si intende che ogni evento, incluse le volizioni umane, è interamente causato da una catena ininterrotta di eventi precedenti secondo leggi di natura, ciò non implica che le nostre decisioni siano prive di significato. Secondo i compatibilisti, infatti, essere liberi non significa agire al di fuori di ogni causalità fisica — un’ipotesi che equivarrebbe alla pura casualità incontrollata —, ma poter determinare le proprie azioni sulla base dei propri desideri, credenze e intenzioni senza costrizioni esterne. Un individuo agisce liberamente quando è l’autore cosciente della propria condotta, anche se i suoi desideri interni sono a loro volta l’esito di processi causali deterministici. La responsabilità morale e la giustizia delle sanzioni trovano dunque fondamento nella capacità dell’agente di comprendere le ragioni e orientare la propria volontà.",
    titoloBrano: "Determinismo causale, compatibilismo e responsabilità morale",
  },
  {
    id: 898,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In che cosa consiste l’errore logico evidenziato dalla legge di Hume secondo il testo?",
    rispostaCorretta: "Nel dedurre indebitamente un obbligo morale o prescrittivo da premesse puramente descrittive di fatto",
    risposteErrate: [
      "Nel confondere i metodi della geometria euclidea con quelli della fisica sperimentale",
      "Nell’affermare che le regole etiche non possono essere discusse razionalmente tra le persone",
      "Nel rifiutare qualsiasi indagine empirica sulle caratteristiche della natura umana",
      "Nel ritenere che tutte le proposizioni fattuali siano intrinsecamente false o illusorie"
    ],
    spiegazione: "Il brano spiega che il salto inferenziale invalido consiste nell’introdurre «conclusioni normative espresse mediante formule di obbligo» a partire da «premesse che contengono esclusivamente costatazioni fattuali».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La cosiddetta «legge di Hume» sancisce una rigorosa separazione logica tra il piano descrittivo e il piano prescrittivo, ossia tra le proposizioni che descrivono ciò che è e quelle che stabiliscono ciò che deve essere. Nelle argomentazioni morali si compie sovente un indebito salto inferenziale: l’autore esordisce illustrando relazioni di fatto concernenti la natura umana, la storia o la società e poi, impercettibilmente, introduce conclusioni normative espresse mediante formule di obbligo come «si deve» o «non si deve». Questo passaggio è formalmente invalido, poiché una conclusione contenente nozioni di dovere non può essere dedotta validamente da premesse che contengono esclusivamente costatazioni fattuali. I fatti, in quanto tali, sono neutri: nessuna constatazione di come il mondo sia conformato può prescrivere, di per sé sola, come gli esseri umani dovrebbero agire, a meno che non si introduca fin dall’inizio una premessa etica esplicita.",
    titoloBrano: "La legge di Hume e la distinzione tra fatti e valori",
  },
  {
    id: 899,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale condizione è indispensabile affinché un argomento che approda a una conclusione normativa sia deduttivamente valido?",
    rispostaCorretta: "La presenza di almeno una premessa di carattere normativo o etico assunta esplicitamente fin dal principio",
    risposteErrate: [
      "L’eliminazione totale di qualsiasi termine di obbligo all’interno della conclusione finale",
      "La dimostrazione scientifica e sperimentale dell’assoluta infallibilità delle leggi storiche",
      "La riduzione di tutti i valori etici a grandezze numeriche calcolabili probabilisticamente",
      "L’accordo unanime di tutti i membri della comunità su ciascuna osservazione descrittiva"
    ],
    spiegazione: "La chiusa del testo chiarisce che nessuna constatazione fattuale può prescrivere il dovere «a meno che non si introduca fin dall’inizio una premessa etica esplicita».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La cosiddetta «legge di Hume» sancisce una rigorosa separazione logica tra il piano descrittivo e il piano prescrittivo, ossia tra le proposizioni che descrivono ciò che è e quelle che stabiliscono ciò che deve essere. Nelle argomentazioni morali si compie sovente un indebito salto inferenziale: l’autore esordisce illustrando relazioni di fatto concernenti la natura umana, la storia o la società e poi, impercettibilmente, introduce conclusioni normative espresse mediante formule di obbligo come «si deve» o «non si deve». Questo passaggio è formalmente invalido, poiché una conclusione contenente nozioni di dovere non può essere dedotta validamente da premesse che contengono esclusivamente costatazioni fattuali. I fatti, in quanto tali, sono neutri: nessuna constatazione di come il mondo sia conformato può prescrivere, di per sé sola, come gli esseri umani dovrebbero agire, a meno che non si introduca fin dall’inizio una premessa etica esplicita.",
    titoloBrano: "La legge di Hume e la distinzione tra fatti e valori",
  },
  {
    id: 900,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale problema rende insoddisfacente l’opzione del «regresso all’infinito» secondo il brano?",
    rispostaCorretta: "Il fatto che la catena dimostrativa non trova mai un compimento, lasciando la prova incompiuta",
    risposteErrate: [
      "L’utilizzo di un’asserzione iniziale che coincide esattamente con la conclusione",
      "La presenza di una contraddizione formale insanabile all’interno della prima premessa",
      "La scelta dogmatica di fermare il ragionamento su un principio arbitrario",
      "L’incapacità della logica di formulare più di tre argomentazioni distinte"
    ],
    spiegazione: "Il testo definisce il regresso all’infinito come la situazione «in cui la catena delle giustificazioni non si arresta mai, rendendo la prova eternamente incompiuta».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il trilemma di Agrippa costituisce una delle sfide classiche più radicali alla pretesa di fondare la conoscenza su basi certe e inconfutabili. Quando si tenta di giustificare un’asserzione $P$, occorre addurre una ragione $Q$; per giustificare $Q$, serve una ragione $R$, e così via. Di fronte alla richiesta di una fondazione ultima, il pensiero si trova imprigionato in tre soli esiti possibili, ciascuno dei quali appare insoddisfacente. Il primo è il regresso all’infinito, in cui la catena delle giustificazioni non si arresta mai, rendendo la prova eternamente incompiuta. Il secondo è il circolo logico, in cui una proposizione viene giustificata ricorrendo, direttamente o indirettamente, alla proposizione stessa che si doveva dimostrare. Il terzo è l’interruzione dogmatica, in cui la catena si arresta arbitrariamente su un’asserzione assunta come autoevidente senza ulteriore prova. Per lo scetticismo, l’impossibilità di sfuggire a questi tre corni dimostra che nessuna credenza può dirsi pienamente e ultimamente giustificata.",
    titoloBrano: "Il trilemma di Agrippa e la giustificazione della conoscenza",
  },
  {
    id: 901,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In che cosa consiste l’esito definito «interruzione dogmatica» in base al testo?",
    rispostaCorretta: "Nell’arrestare la sequenza delle giustificazioni ponendo un principio assunto senza dimostrazione",
    risposteErrate: [
      "Nel dimostrare matematicamente l’incoerenza di tutte le scienze della natura",
      "Nel collegare due affermazioni in modo che l’una sia la conseguenza logica dell’altra",
      "Nell’ammettere che ogni enunciato necessita di un numero infinito di passaggi razionali",
      "Nel confondere i concetti di credenza psicologica e di certezza fenomenica"
    ],
    spiegazione: "Il testo spiega che l’interruzione dogmatica si ha quando «la catena si arresta arbitrariamente su un’asserzione assunta come autoevidente senza ulteriore prova».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il trilemma di Agrippa costituisce una delle sfide classiche più radicali alla pretesa di fondare la conoscenza su basi certe e inconfutabili. Quando si tenta di giustificare un’asserzione $P$, occorre addurre una ragione $Q$; per giustificare $Q$, serve una ragione $R$, e così via. Di fronte alla richiesta di una fondazione ultima, il pensiero si trova imprigionato in tre soli esiti possibili, ciascuno dei quali appare insoddisfacente. Il primo è il regresso all’infinito, in cui la catena delle giustificazioni non si arresta mai, rendendo la prova eternamente incompiuta. Il secondo è il circolo logico, in cui una proposizione viene giustificata ricorrendo, direttamente o indirettamente, alla proposizione stessa che si doveva dimostrare. Il terzo è l’interruzione dogmatica, in cui la catena si arresta arbitrariamente su un’asserzione assunta come autoevidente senza ulteriore prova. Per lo scetticismo, l’impossibilità di sfuggire a questi tre corni dimostra che nessuna credenza può dirsi pienamente e ultimamente giustificata.",
    titoloBrano: "Il trilemma di Agrippa e la giustificazione della conoscenza",
  },
  {
    id: 902,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è la definizione del significato di una parola secondo la concezione presentata nel testo?",
    rispostaCorretta: "L’uso effettivo della parola all’interno di pratiche e contesti regolati",
    risposteErrate: [
      "Il perfetto rispecchiamento speculare tra il termine linguistico e l’oggetto fisico ideale",
      "L’insieme dei moti emotivi e delle sensazioni private provate dal singolo parlante",
      "Un’essenza metafisica immutabile codificata a priori nei dizionari formali",
      "La capacità esclusiva della parola di descrivere grandezze numeriche verificabili"
    ],
    spiegazione: "Il brano stabilisce con chiarezza che il significato di una parola «non risiede in un’entità astratta... ma nel suo uso concreto all’interno di pratiche e contesti regolati».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nella riflessione matura di Ludwig Wittgenstein, il linguaggio non è concepito come una nomenclatura fissa che denota oggetti del mondo mediante un rapporto univoco di rispecchiamento, bensì come un insieme articolato di «giochi linguistici» intrecciati con molteplici forme di vita. Il significato di una parola non risiede in un’entità astratta o in un referente oggettivo immutabile, ma nel suo uso concreto all’interno di pratiche e contesti regolati. Dare ordini, raccontare barzellette, formulare ipotesi scientifiche o recitare preghiere costituiscono attività diverse, ciascuna disciplinata da criteri propri che ne determinano la sensatezza. Da questa riflessione nasce la critica all’idea di un linguaggio necessariamente privato, i cui segni rimandino a esperienze accessibili soltanto al singolo soggetto. Se l’unico criterio per stabilire se un segno è stato impiegato correttamente fosse il ricordo o l’impressione privata dello stesso soggetto, verrebbe meno la distinzione tra seguire una regola e credere semplicemente di seguirla; mancherebbe cioè un criterio indipendente di correttezza.",
    titoloBrano: "I giochi linguistici e il significato come uso",
  },
  {
    id: 903,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Per quale motivo teorico un linguaggio necessariamente privato non può possedere regole autentiche secondo il brano?",
    rispostaCorretta: "Perché in assenza di un criterio indipendente di correttezza non è possibile distinguere tra il seguire una regola e la semplice impressione soggettiva di farlo",
    risposteErrate: [
      "Perché i parlanti non possiedono una memoria sufficientemente duratura per archiviare vocaboli introspettivi",
      "Perché le sensazioni interiori svaniscono troppo rapidamente per poter essere trascritte su carta",
      "Perché la grammatica delle lingue naturali vieta espressamente l’uso di pronomi di prima persona",
      "Perché i giochi linguistici riguardano esclusivamente la descrizione quantitativa di fenomeni fisici"
    ],
    spiegazione: "Il testo chiarisce che in un linguaggio privato verrebbe meno la distinzione tra seguire una regola e credere di seguirla, poiché mancherebbe un criterio indipendente di controllo per verificare la correttezza dell’uso.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nella riflessione matura di Ludwig Wittgenstein, il linguaggio non è concepito come una nomenclatura fissa che denota oggetti del mondo mediante un rapporto univoco di rispecchiamento, bensì come un insieme articolato di «giochi linguistici» intrecciati con molteplici forme di vita. Il significato di una parola non risiede in un’entità astratta o in un referente oggettivo immutabile, ma nel suo uso concreto all’interno di pratiche e contesti regolati. Dare ordini, raccontare barzellette, formulare ipotesi scientifiche o recitare preghiere costituiscono attività diverse, ciascuna disciplinata da criteri propri che ne determinano la sensatezza. Da questa riflessione nasce la critica all’idea di un linguaggio necessariamente privato, i cui segni rimandino a esperienze accessibili soltanto al singolo soggetto. Se l’unico criterio per stabilire se un segno è stato impiegato correttamente fosse il ricordo o l’impressione privata dello stesso soggetto, verrebbe meno la distinzione tra seguire una regola e credere semplicemente di seguirla; mancherebbe cioè un criterio indipendente di correttezza.",
    titoloBrano: "I giochi linguistici e il significato come uso",
  },
  {
    id: 904,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Che cosa si intende con l’espressione «teorie empiricamente equivalenti» nel contesto del brano?",
    rispostaCorretta: "Teorie concettualmente incompatibili che tuttavia generano le medesime previsioni e spiegano gli stessi dati osservabili",
    risposteErrate: [
      "Teorie che condividono identici principi metafisici ma usano formule algebriche differenti",
      "Modelli scientifici formulati dallo stesso autore in epoche storiche contigue",
      "Ipotesi prive di qualsiasi valore esplicativo che vengono abbandonate dopo un solo esperimento",
      "Descrizioni verbali che rifiutano l’utilizzo di strumenti di calcolo quantitativo"
    ],
    spiegazione: "Il brano definisce le teorie empiricamente equivalenti come teorie «mutuamente incompatibili che risultano nondimeno empiricamente equivalenti, ossia capaci di spiegare e prevedere esattamente i medesimi fenomeni osservati».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La tesi della sottodeterminazione delle teorie scientifiche afferma che l’insieme finito di tutte le evidenze empiriche disponibili, presenti e future, non è mai sufficiente a imporre in modo univoco una singola teoria scientifica. Per qualsiasi insieme di dati osservativi, per quanto vasto e accurato, è sempre logicamente possibile formulare molteplici teorie alternative e mutuamente incompatibili che risultano nondimeno empiricamente equivalenti, ossia capaci di spiegare e prevedere esattamente i medesimi fenomeni osservati. Ne deriva che la scelta tra teorie rivali non può essere interamente risolta dall’appello all’esperienza pura. Gli scienziati si avvalgono pertanto di criteri di scelta extra-empirici, noti come virtù pragmatiche ed epistemiche, quali la semplicità esplicativa, l’eleganza formale, l’ampiezza di portata, la coerenza con altre teorie consolidate e la fecondità euristica nel generare nuove linee di ricerca.",
    titoloBrano: "La sottodeterminazione delle teorie scientifiche rispetto ai dati",
  },
  {
    id: 905,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale ruolo svolgono le «virtù extra-empiriche» come la semplicità o la fecondità secondo il testo?",
    rispostaCorretta: "Forniscono criteri razionali per orientare la scelta tra modelli rivali quando i dati osservativi non sono dirimenti",
    risposteErrate: [
      "Rendono del tutto superflua l’esecuzione di esperimenti e controlli nei laboratori",
      "Garantiscono la verità assoluta e immutabile di una teoria su basi logiche a priori",
      "Impediscono la nascita di nuove linee di ricerca scientifica in settori innovativi",
      "Costituiscono prove empiriche dirette della composizione atomica delle particelle"
    ],
    spiegazione: "Il testo spiega che, poiché i dati non bastano a selezionare una sola teoria, «la scelta tra teorie rivali non può essere interamente risolta dall’appello all’esperienza pura. Gli scienziati si avvalgono pertanto di criteri di scelta extra-empirici».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La tesi della sottodeterminazione delle teorie scientifiche afferma che l’insieme finito di tutte le evidenze empiriche disponibili, presenti e future, non è mai sufficiente a imporre in modo univoco una singola teoria scientifica. Per qualsiasi insieme di dati osservativi, per quanto vasto e accurato, è sempre logicamente possibile formulare molteplici teorie alternative e mutuamente incompatibili che risultano nondimeno empiricamente equivalenti, ossia capaci di spiegare e prevedere esattamente i medesimi fenomeni osservati. Ne deriva che la scelta tra teorie rivali non può essere interamente risolta dall’appello all’esperienza pura. Gli scienziati si avvalgono pertanto di criteri di scelta extra-empirici, noti come virtù pragmatiche ed epistemiche, quali la semplicità esplicativa, l’eleganza formale, l’ampiezza di portata, la coerenza con altre teorie consolidate e la fecondità euristica nel generare nuove linee di ricerca.",
    titoloBrano: "La sottodeterminazione delle teorie scientifiche rispetto ai dati",
  },
  {
    id: 906,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale nuova conoscenza acquisisce Mary uscendo dalla stanza monocromatica secondo il brano?",
    rispostaCorretta: "L’esperienza qualitativa diretta e soggettiva di come appare il colore rosso",
    risposteErrate: [
      "Le formule matematiche che regolano la rifrazione della luce nei prismi ottici",
      "La mappa neurobiologica dettagliata dei circuiti della corteccia visiva primaria",
      "La composizione biochimica degli strati cellulari della retina umana",
      "La dimostrazione scientifica che i pomodori riflettono onde elettromagnetiche"
    ],
    spiegazione: "Il testo afferma chiaramente che uscendo Mary impara «che effetto fa esperire soggettivamente il colore rosso, un contenuto fenomenico noto come «quale»».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’argomento della conoscenza di Frank Jackson intende confutare il fisicalismo, ossia la tesi secondo cui il mondo è interamente costituito da entità e processi fisici. Si immagini Mary, una neuroscienziata brillante che ha trascorso tutta la vita in una stanza in bianco e nero, studiando la visione dei colori attraverso monitor monocromatici. Mary possiede tutte le informazioni fisiche possibili sulla percezione cromatica: conosce la fisica della luce, le lunghezze d’onda, la fisiologia dei coni retinici e le scariche sinaptiche nella corteccia cerebrale. Quando Mary esce dalla stanza e vede per la prima volta un pomodoro rosso maturo, impara qualcosa di nuovo sul mondo? Jackson sostiene di sì: Mary scopre che effetto fa esperire soggettivamente il colore rosso, un contenuto fenomenico noto come «quale». Se prima dell’uscita Mary sapeva tutto sul piano fisico ma ignorava l’esperienza qualitativa vissuta, ne consegue che la descrizione fisica della realtà è incompleta e che il fisicalismo è falso.",
    titoloBrano: "L’argomento della conoscenza e la natura dei qualia",
  },
  {
    id: 907,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Qual è l’articolazione logica con cui l’argomento approda alla confutazione del fisicalismo?",
    rispostaCorretta: "Se una conoscenza fisica totale non include tutti gli aspetti della realtà (come i qualia), allora il mondo non si esaurisce nelle sole proprietà fisiche",
    risposteErrate: [
      "Poiché gli strumenti scientifici sono fallaci, la conoscenza della fisica teorica è totalmente illusoria",
      "Dato che i colori non esistono nella realtà esterna, la mente umana non può percepire nulla di oggettivo",
      "Se un individuo ignora la fisica ottica, non sarà in grado di distinguere gli oggetti colorati",
      "Poiché il cervello è un organo biologico, le sensazioni qualitative sono meri riflessi automatici"
    ],
    spiegazione: "Il nucleo logico dell’argomento di Jackson è riassunto nel testo: Mary conosceva tutte le informazioni fisiche, ma ignorava l’esperienza cosciente del rosso; dunque vi sono aspetti della realtà non riducibili a fatti fisici, rendendo incompleto il fisicalismo.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "L’argomento della conoscenza di Frank Jackson intende confutare il fisicalismo, ossia la tesi secondo cui il mondo è interamente costituito da entità e processi fisici. Si immagini Mary, una neuroscienziata brillante che ha trascorso tutta la vita in una stanza in bianco e nero, studiando la visione dei colori attraverso monitor monocromatici. Mary possiede tutte le informazioni fisiche possibili sulla percezione cromatica: conosce la fisica della luce, le lunghezze d’onda, la fisiologia dei coni retinici e le scariche sinaptiche nella corteccia cerebrale. Quando Mary esce dalla stanza e vede per la prima volta un pomodoro rosso maturo, impara qualcosa di nuovo sul mondo? Jackson sostiene di sì: Mary scopre che effetto fa esperire soggettivamente il colore rosso, un contenuto fenomenico noto come «quale». Se prima dell’uscita Mary sapeva tutto sul piano fisico ma ignorava l’esperienza qualitativa vissuta, ne consegue che la descrizione fisica della realtà è incompleta e che il fisicalismo è falso.",
    titoloBrano: "L’argomento della conoscenza e la natura dei qualia",
  },
  {
    id: 908,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale contraddizione interna affligge la tesi relativista qualora pretenda di essere universalmente valida?",
    rispostaCorretta: "Affermando come verità oggettiva che non esistono verità oggettive, essa smentisce la propria stessa premessa",
    risposteErrate: [
      "Rifiuta l’uso della lingua naturale privilegiando modelli formali incomprensibili",
      "Sostiene contemporaneamente l’empirismo radicale e il razionalismo dogmatico",
      "Identifica erroneamente la verità oggettiva con il consenso unanime di tutti i governi",
      "Impedisce l’esistenza di differenti tradizioni culturali e comunità linguistiche"
    ],
    spiegazione: "Il testo individua l’aporia: se l’affermazione che non vi sono verità assolute viene posta come assoluta, «essa contraddice direttamente il proprio contenuto, costituendo un controesempio a se stesso».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il relativismo epistemico radicale sostiene che non esistano criteri oggettivi e universali di verità, poiché ogni asserzione è valida esclusivamente all’interno di una specifica cornice culturale, storica o concettuale. Questa posizione si scontra tuttavia con una classica aporia di natura logico-autoreferenziale. Se l’enunciato «tutte le verità sono relative e nessuna proposizione è oggettivamente vera» viene inteso come una verità assoluta e universalmente vincolante, allora esso contraddice direttamente il proprio contenuto, costituendo un controesempio a se stesso. Se, al contrario, l’enunciato viene considerato valido solo relativamente alla prospettiva di chi lo formula, esso perde ogni pretesa di cogenza argomentativa nei confronti di chi sostiene una tesi alternativa, riducendosi a una preferenza personale priva di portata critica. La sfida filosofica consiste quindi nel salvaguardare il pluralismo delle interpretazioni senza approdare a una dissoluzione scettica della nozione stessa di verità.",
    titoloBrano: "Il relativismo epistemico e l’aporia dell’autoconfutazione",
  },
  {
    id: 909,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale obiettivo teorico propone la conclusione del brano per evitare gli esiti dello scetticismo?",
    rispostaCorretta: "Mantenere il riconoscimento della pluralità interpretativa senza distruggere il concetto di verità oggettiva",
    risposteErrate: [
      "Imporre un dogma unico e immutabile da accettare acriticamente in ogni cultura",
      "Sostituire la ricerca epistemologica con il calcolo statistico delle opinioni di massa",
      "Dichiarare irrilevante ogni differenza culturale o storica nella comprensione del mondo",
      "Abbandonare qualsiasi indagine critica per rifugiarsi in un relativismo assoluto"
    ],
    spiegazione: "L’ultima frase del testo recita: «La sfida filosofica consiste quindi nel salvaguardare il pluralismo delle interpretazioni senza approdare a una dissoluzione scettica della nozione stessa di verità».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il relativismo epistemico radicale sostiene che non esistano criteri oggettivi e universali di verità, poiché ogni asserzione è valida esclusivamente all’interno di una specifica cornice culturale, storica o concettuale. Questa posizione si scontra tuttavia con una classica aporia di natura logico-autoreferenziale. Se l’enunciato «tutte le verità sono relative e nessuna proposizione è oggettivamente vera» viene inteso come una verità assoluta e universalmente vincolante, allora esso contraddice direttamente il proprio contenuto, costituendo un controesempio a se stesso. Se, al contrario, l’enunciato viene considerato valido solo relativamente alla prospettiva di chi lo formula, esso perde ogni pretesa di cogenza argomentativa nei confronti di chi sostiene una tesi alternativa, riducendosi a una preferenza personale priva di portata critica. La sfida filosofica consiste quindi nel salvaguardare il pluralismo delle interpretazioni senza approdare a una dissoluzione scettica della nozione stessa di verità.",
    titoloBrano: "Il relativismo epistemico e l’aporia dell’autoconfutazione",
  },
  {
    id: 910,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quali elementi compongono obbligatoriamente l’explanans nel modello di Hempel?",
    rispostaCorretta: "Almeno una legge scientifica di carattere universale e un insieme di condizioni iniziali antecedenti",
    risposteErrate: [
      "Una semplice enumerazione cronologica di testimonianze storiche particolari",
      "La sola descrizione dettagliata dell’evento empirico che deve essere spiegato",
      "Un corpus di ipotesi puramente probabilistiche prive di leggi generali",
      "Un insieme di asserzioni tautologiche prive di qualsiasi riferimento alla realtà empirica"
    ],
    spiegazione: "Il testo afferma che «l’explanans deve contenere almeno una legge di copertura universale (nomologica) e l’explanandum deve derivare deduttivamente dall’explanans» assieme alle condizioni iniziali.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nel modello nomologico-deduttivo formulato da Carl Hempel, spiegare scientificamente un evento significa mostrare che la sua occorrenza era logicamente attesa e necessaria date certe leggi generali di natura e specifiche condizioni iniziali. La struttura della spiegazione si articola in due componenti: l’explanandum, ossia l’enunciato che descrive il fenomeno da spiegare, e l’explanans, costituito dall’insieme degli enunciati addotti per rendere conto dell’evento. Affinché la spiegazione sia valida, l’explanans deve contenere almeno una legge di copertura universale (nomologica) e l’explanandum deve derivare deduttivamente dall’explanans con necessità logica. Da questo impianto discende la cosiddetta tesi della simmetria tra spiegazione e previsione: la medesima struttura formale che consente di spiegare un evento già accaduto nel passato avrebbe permesso di prevederlo con certezza prima del suo verificarsi, qualora le leggi e le condizioni antecedenti fossero state note in anticipo.",
    titoloBrano: "Il modello nomologico-deduttivo della spiegazione scientifica",
  },
  {
    id: 911,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "In che cosa consiste la «tesi della simmetria» descritta nel brano?",
    rispostaCorretta: "Nell’identità di struttura logica tra la spiegazione a posteriori di un evento e la sua previsione prima che accada",
    risposteErrate: [
      "Nella perfetta coincidenza geometrica tra gli assi cartesiani di un grafico sperimentale",
      "Nel dovere morale di attribuire lo stesso peso a ipotesi scientifiche opposte",
      "Nell’equivalenza tra la percezione soggettiva e la misurazione oggettiva dei dati",
      "Nella subordinazione delle leggi universali alle anomalie particolari del passato"
    ],
    spiegazione: "Il testo definisce la tesi della simmetria: «la medesima struttura formale che consente di spiegare un evento già accaduto nel passato avrebbe permesso di prevederlo con certezza prima del suo verificarsi».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Nel modello nomologico-deduttivo formulato da Carl Hempel, spiegare scientificamente un evento significa mostrare che la sua occorrenza era logicamente attesa e necessaria date certe leggi generali di natura e specifiche condizioni iniziali. La struttura della spiegazione si articola in due componenti: l’explanandum, ossia l’enunciato che descrive il fenomeno da spiegare, e l’explanans, costituito dall’insieme degli enunciati addotti per rendere conto dell’evento. Affinché la spiegazione sia valida, l’explanans deve contenere almeno una legge di copertura universale (nomologica) e l’explanandum deve derivare deduttivamente dall’explanans con necessità logica. Da questo impianto discende la cosiddetta tesi della simmetria tra spiegazione e previsione: la medesima struttura formale che consente di spiegare un evento già accaduto nel passato avrebbe permesso di prevederlo con certezza prima del suo verificarsi, qualora le leggi e le condizioni antecedenti fossero state note in anticipo.",
    titoloBrano: "Il modello nomologico-deduttivo della spiegazione scientifica",
  },
  {
    id: 912,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il criterio fondamentale con cui l’utilitarismo valuta la correttezza dell’azione morale nel dilemma?",
    rispostaCorretta: "Il calcolo del bilancio complessivo delle conseguenze, privilegiando la massimizzazione delle vite umane salvate",
    risposteErrate: [
      "Il rispetto rigoroso di divieti astratti indipendentemente dagli esiti pratici",
      "L’intenzione puramente interiore dell’agente senza alcun riguardo per gli effetti",
      "L’astensione totale da qualsiasi intervento per evitare la responsabilità giuridica",
      "La subordinazione della morale al volere espresso a maggioranza dai soggetti coinvolti"
    ],
    spiegazione: "Il brano afferma esplicitamente che per l’utilitarismo «l’azione moralmente corretta è quella che massimizza il saldo netto di vite salvate, rendendo doveroso azionare la leva».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il dilemma etico del carrello ferroviario mette a confronto due delle principali tradizioni della filosofia morale: il consequenzialismo utilitarista e l’etica deontologica dei doveri categorici. Nella versione classica, un carrello fuori controllo sta per travolgere cinque operai sui binari; l’agente può azionare una leva di scambio per deviare il carrello su un binario secondario, dove ucciderà un solo individuo. Per l’utilitarismo, l’azione moralmente corretta è quella che massimizza il saldo netto di vite salvate, rendendo doveroso azionare la leva per salvare cinque persone al prezzo di una. Al contrario, l’etica deontologica sostiene che vi siano divieti morali assoluti che proibiscono di trattare un essere umano innocente come mero mezzo strumentale per fini altrui. Questa tensione si approfondisce considerando la dottrina del «doppio effetto», secondo cui è moralmente lecito compiere un’azione buona da cui scaturisce un effetto collaterale dannoso previsto ma non inteso, mentre è vietato causare direttamente un danno grave come mezzo per raggiungere un fine buono.",
    titoloBrano: "Il dilemma morale del carrello tra deontologia e consequenzialismo",
  },
  {
    id: 913,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "In base al «principio del doppio effetto», quale distinzione è determinante per giudicare la liceità morale di un’azione che comporta esiti tragici?",
    rispostaCorretta: "La differenza tra un effetto dannoso previsto ma collaterale e un danno causato intenzionalmente come mezzo necessario",
    risposteErrate: [
      "La distinzione quantitativa tra danni economici e danni fisici irreversibili",
      "La differenza temporale tra un’azione compiuta nel presente e una deliberata in passato",
      "La separazione categorica tra le leggi dello Stato civile e le usanze religiose",
      "Il contrasto tra il volere spontaneo dell’agente e la casualità delle leggi fisiche"
    ],
    spiegazione: "Il testo spiega il doppio effetto evidenziando che è lecito compiere un’azione buona da cui scaturisce «un effetto collaterale dannoso previsto ma non inteso, mentre è vietato causare direttamente un danno grave come mezzo per raggiungere un fine buono».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "Il dilemma etico del carrello ferroviario mette a confronto due delle principali tradizioni della filosofia morale: il consequenzialismo utilitarista e l’etica deontologica dei doveri categorici. Nella versione classica, un carrello fuori controllo sta per travolgere cinque operai sui binari; l’agente può azionare una leva di scambio per deviare il carrello su un binario secondario, dove ucciderà un solo individuo. Per l’utilitarismo, l’azione moralmente corretta è quella che massimizza il saldo netto di vite salvate, rendendo doveroso azionare la leva per salvare cinque persone al prezzo di una. Al contrario, l’etica deontologica sostiene che vi siano divieti morali assoluti che proibiscono di trattare un essere umano innocente come mero mezzo strumentale per fini altrui. Questa tensione si approfondisce considerando la dottrina del «doppio effetto», secondo cui è moralmente lecito compiere un’azione buona da cui scaturisce un effetto collaterale dannoso previsto ma non inteso, mentre è vietato causare direttamente un danno grave come mezzo per raggiungere un fine buono.",
    titoloBrano: "Il dilemma morale del carrello tra deontologia e consequenzialismo",
  },
  {
    id: 914,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è l’assunto fondamentale della teoria della mente estesa secondo il testo?",
    rispostaCorretta: "I processi mentali e cognitivi non sono limitati ai confini biologici del cervello, ma integrano supporti e strumenti esterni",
    risposteErrate: [
      "Il cervello umano è totalmente incapace di compiere operazioni di memorizzazione biologica",
      "Gli strumenti digitali sostituiscono integralmente la coscienza privando l’individuo della libertà",
      "La memoria biologica è perfetta e non necessita di alcun supporto scritto o ausilio pratico",
      "Tutti i sistemi cognitivi operano esclusivamente attraverso la manipolazione di simboli grafici"
    ],
    spiegazione: "Il testo esplicita che la teoria sfida l’idea che la mente sia confinata «all’interno del cranio o della pelle», affermando che la cognizione è «un sistema ibrido e distribuito che accorpa cervello, corpo e artefatti tecnologici esterni».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La teoria della «mente estesa», proposta dai filosofi della mente Andy Clark e David Chalmers, sfida il dogma cartesiano e neurocentrico secondo cui la mente e i processi cognitivi sono rigidamente confinati all’interno del cranio o della pelle dell’organismo biologico. Gli autori introducono il «principio di parità»: se un supporto esterno svolge una funzione che, qualora fosse compiuta all’interno della testa, verrebbe indiscutibilmente riconosciuta come parte del processo cognitivo, allora quel supporto costituisce a pieno titolo un elemento del sistema mentale. Si consideri l’esempio di un soggetto affetto da lievi deficit mnemonici che si affida stabilmente a un taccuino per archiviare e recuperare informazioni vitali: la consultazione immediata e trasparente del taccuino svolge lo stesso identico ruolo funzionale della memoria biologica. La cognizione umana non è un’attività isolata nel cervello, ma un sistema ibrido e distribuito che accorpa cervello, corpo e artefatti tecnologici esterni.",
    titoloBrano: "La teoria della mente estesa e gli strumenti cognitivi",
  },
  {
    id: 915,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Come viene formulato il «principio di parità» all’interno del brano?",
    rispostaCorretta: "Un elemento esterno è parte della mente se svolge una funzione che, se eseguita nel cervello, sarebbe considerata cognitiva",
    risposteErrate: [
      "Tutti i cittadini devono avere pari accesso agli strumenti informatici avanzati",
      "Il peso della memoria biologica deve corrispondere esattamente alla massa del supporto cartaceo",
      "Le funzioni cerebrali interne sono sempre superiori a qualsiasi strumento tecnologico esterno",
      "Nessun artefatto artificiale può essere equiparato a una struttura anatomica vivente"
    ],
    spiegazione: "Il testo definisce il principio di parità: «se un supporto esterno svolge una funzione che, qualora fosse compiuta all’interno della testa, verrebbe indiscutibilmente riconosciuta come parte del processo cognitivo, allora quel supporto costituisce a pieno titolo un elemento del sistema mentale».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La teoria della «mente estesa», proposta dai filosofi della mente Andy Clark e David Chalmers, sfida il dogma cartesiano e neurocentrico secondo cui la mente e i processi cognitivi sono rigidamente confinati all’interno del cranio o della pelle dell’organismo biologico. Gli autori introducono il «principio di parità»: se un supporto esterno svolge una funzione che, qualora fosse compiuta all’interno della testa, verrebbe indiscutibilmente riconosciuta come parte del processo cognitivo, allora quel supporto costituisce a pieno titolo un elemento del sistema mentale. Si consideri l’esempio di un soggetto affetto da lievi deficit mnemonici che si affida stabilmente a un taccuino per archiviare e recuperare informazioni vitali: la consultazione immediata e trasparente del taccuino svolge lo stesso identico ruolo funzionale della memoria biologica. La cognizione umana non è un’attività isolata nel cervello, ma un sistema ibrido e distribuito che accorpa cervello, corpo e artefatti tecnologici esterni.",
    titoloBrano: "La teoria della mente estesa e gli strumenti cognitivi",
  },
  {
    id: 916,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Come vengono interpretate le anomalie sperimentali durante la fase di «scienza normale»?",
    rispostaCorretta: "Come rompicapo da risolvere all’interno del paradigma, e non come immediate confutazioni della teoria fondamentale",
    risposteErrate: [
      "Come prove definitive che impongono la chiusura immediata delle università",
      "Come miracoli empirici che confermano inequivocabilmente il realismo scientifico",
      "Come errori formali derivanti esclusivamente da formule matematiche mal scritte",
      "Come dimostrazioni dell’inutilità di qualsiasi futuro esperimento di laboratorio"
    ],
    spiegazione: "Il testo specifica che durante la scienza normale «le discrepanze tra teoria ed esperienza non sono viste come confutazioni del paradigma, ma come fallimenti temporanei del ricercatore» nell’attività di risoluzione di rompicapo.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La visione dello sviluppo scientifico delineata da Thomas Kuhn descrive la storia della scienza non come un’accumulazione lineare e ininterrotta di verità oggettive, ma come un’alternanza tra lunghi periodi di «scienza normale» e momenti di rottura rivoluzionaria. Durante la scienza normale, la comunità scientifica lavora all’interno di un «paradigma», ossia una costellazione condivisa di teorie, modelli, strumenti e valori epistemici. L’attività ordinaria dello scienziato consiste nella risoluzione di «rompicapo»: le discrepanze tra teoria ed esperienza non sono viste come confutazioni del paradigma, ma come fallimenti temporanei del ricercatore. Solo quando le anomalie accumulate resistono a lungo e minano i cardini del paradigma subentra una fase di crisi, che sfocia in una rivoluzione scientifica con l’adozione di un paradigma incommensurabile con il precedente. Il passaggio tra paradigmi rivali non è una deduzione puramente logica, ma un mutamento radicale di visione del mondo.",
    titoloBrano: "I paradigmi scientifici, la scienza normale e le rivoluzioni",
  },
  {
    id: 917,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Quale caratteristica contraddistingue la transizione rivoluzionaria tra due paradigmi rivali secondo il brano?",
    rispostaCorretta: "Comporta un cambiamento globale e incommensurabile della visione del mondo, non riducibile a una semplice derivazione logica",
    risposteErrate: [
      "Rappresenta una pura addizione cumulativa di nuovi dati al vecchio catalogo di conoscenze",
      "Viene decisa unicamente tramite un algoritmo matematico neutro e automatico",
      "Riconferma sempre e senza eccezioni la validità di tutte le assunzioni precedenti",
      "Elimina definitivamente ogni possibilità di futura ricerca e discussione teorica"
    ],
    spiegazione: "Il brano chiarisce che la transizione conduce a un paradigma incommensurabile e che «il passaggio tra paradigmi rivali non è una deduzione puramente logica, ma un mutamento radicale di visione del mondo».",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La visione dello sviluppo scientifico delineata da Thomas Kuhn descrive la storia della scienza non come un’accumulazione lineare e ininterrotta di verità oggettive, ma come un’alternanza tra lunghi periodi di «scienza normale» e momenti di rottura rivoluzionaria. Durante la scienza normale, la comunità scientifica lavora all’interno di un «paradigma», ossia una costellazione condivisa di teorie, modelli, strumenti e valori epistemici. L’attività ordinaria dello scienziato consiste nella risoluzione di «rompicapo»: le discrepanze tra teoria ed esperienza non sono viste come confutazioni del paradigma, ma come fallimenti temporanei del ricercatore. Solo quando le anomalie accumulate resistono a lungo e minano i cardini del paradigma subentra una fase di crisi, che sfocia in una rivoluzione scientifica con l’adozione di un paradigma incommensurabile con il precedente. Il passaggio tra paradigmi rivali non è una deduzione puramente logica, ma un mutamento radicale di visione del mondo.",
    titoloBrano: "I paradigmi scientifici, la scienza normale e le rivoluzioni",
  },
  {
    id: 918,
    materia: "Comprensione verbale",
    difficolta: "medio",
    domanda: "Qual è il nucleo dell’argomentazione della prova ontologica classica descritta nel testo?",
    rispostaCorretta: "L’esistenza reale è concepita come una perfezione necessaria implicita nella definizione stessa dell’essere sommo",
    risposteErrate: [
      "L’esistenza di Dio viene dimostrata a posteriori raccogliendo prove sperimentali sui pianeti",
      "La prova presuppone che nessun concetto possa essere pensato dalla mente umana",
      "L’esistenza reale è considerata un difetto logico che riduce la grandezza di un’idea astratta",
      "L’argomento sostiene che soltanto gli oggetti visibili e tangibili possiedono perfezione"
    ],
    spiegazione: "Il testo spiega che la prova ontologica deduce l’esistenza dall’analisi del concetto: un essere perfetto privo di esistenza sarebbe inferiore a uno esistente, per cui l’esistenza deve essere inclusa nella sua definizione.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La celebre prova ontologica a priori, concepita da Anselmo d’Aosta e ripresa dal razionalismo cartesiano, intende dedurre l’esistenza necessaria di Dio a partire dalla sola analisi del suo concetto. Dio viene definito come «l’essere di cui non si può pensare il maggiore». Se tale ente esistesse unicamente nel pensiero come concetto ideale, si potrebbe allora concepire un essere dotato di tutte le sue qualità ma esistente anche nella realtà oggettiva: quest’ultimo sarebbe necessariamente maggiore del primo. Dunque, per non cadere in contraddizione con la propria stessa definizione, l’ente perfettissimo deve necessariamente esistere nella realtà. La replica critica più incisiva, formulata successivamente da Kant, contesta la premessa fondamentale dell’argomento: l’esistenza non è un predicato reale o una proprietà concettuale che possa essere aggiunta all’essenza di una cosa per aumentarne la perfezione, ma l’atto con cui si pone l’oggetto corrispondente come realmente esistente.",
    titoloBrano: "La prova ontologica e l’esistenza come predicato logico",
  },
  {
    id: 919,
    materia: "Comprensione verbale",
    difficolta: "medio-difficile",
    domanda: "Quale principio epistemologico sta alla base dell’obiezione kantiana alla prova ontologica?",
    rispostaCorretta: "L’esistenza non arricchisce né accresce il contenuto concettuale di una cosa, ma ne pone l’oggetto come esistente",
    risposteErrate: [
      "Qualsiasi cosa esista nel pensiero deve necessariamente esistere anche nel mondo fisico",
      "I concetti astratti possiedono una massa materiale superiore a quella degli oggetti concreti",
      "Le dimostrazioni a priori sono sempre superiori a qualunque forma di indagine scientifica",
      "L’esistenza reale è una qualità misurabile che aumenta il grado di perfezione intrinseca"
    ],
    spiegazione: "L’obiezione di Kant spiegata nel brano stabilisce che l’esistenza non è un predicato reale che amplia il concetto, ma pone l’oggetto corrispondente come esistente, invalidando la pretesa di dedurre l’esistenza dalla pura definizione logica.",
    fonte: 'Lotto C2 del progetto',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0,
    brano: "La celebre prova ontologica a priori, concepita da Anselmo d’Aosta e ripresa dal razionalismo cartesiano, intende dedurre l’esistenza necessaria di Dio a partire dalla sola analisi del suo concetto. Dio viene definito come «l’essere di cui non si può pensare il maggiore». Se tale ente esistesse unicamente nel pensiero come concetto ideale, si potrebbe allora concepire un essere dotato di tutte le sue qualità ma esistente anche nella realtà oggettiva: quest’ultimo sarebbe necessariamente maggiore del primo. Dunque, per non cadere in contraddizione con la propria stessa definizione, l’ente perfettissimo deve necessariamente esistere nella realtà. La replica critica più incisiva, formulata successivamente da Kant, contesta la premessa fondamentale dell’argomento: l’esistenza non è un predicato reale o una proprietà concettuale che possa essere aggiunta all’essenza di una cosa per aumentarne la perfezione, ma l’atto con cui si pone l’oggetto corrispondente come realmente esistente.",
    titoloBrano: "La prova ontologica e l’esistenza come predicato logico",
  }
];

export default questionBank;