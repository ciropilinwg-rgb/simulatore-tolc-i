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
  }
];

export default questionBank;
