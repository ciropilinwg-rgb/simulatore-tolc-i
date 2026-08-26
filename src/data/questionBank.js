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
  }
];

export default questionBank;
