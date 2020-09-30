/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// het nummer in de fotolijst dat nu getoond wordt
var fotoNummer = 0;

// het tempo van de wisseling in milliseconde
var tempo = 8000;

// de lijst met foto's
// het is een array met object
// elk object heeft een url en een alt-text
// je kunt de lijst uitbreiden met meer foto's
var fotolijst = [
    {
        "source": "https://www.psv.nl/upload_mm/e/e/6/cid76784_200919PZ18332_980x480.jpg",
        "altText": "PSV reclame 1"
  },
    {
        "source": "https://www.psv.nl/upload_mm/e/0/2/cid76787_Kop%20Gakpo-Hersteld-Hersteld-Hersteld_980x480.jpg",
        "altText": "PSV reclame 2"
  },
    {
        "source": "https://www.psv.nl/upload_mm/f/8/7/cid76785_Boscagli980x480_980x480.jpg",
        "altText": "PSV reclame 3"
  },
    {
        "source": "https://www.psv.nl/upload_mm/2/1/1/cid76779_0890_NIEUWS_PSV%20NL_Website%20vh%20Jaar%202020_980x480.jpg",
        "altText": "PSV reclame 4"
  },
    {
        "source": "https://www.psv.nl/upload_mm/2/1/2/cid76781_18073_980x480.jpg",
        "altText": "PSV reclame 5"
  }
];


function startTimer() {
    // in de functie wordt een timer gestart
    // de timer gaat af na tempo milliseconde
    setTimeout(function () {
        // als de timer afgaat wordt deze code uitgevoerd
        // de foto opzoeken in de HTML en opslaan in aan variabele
        let deFoto = document.querySelector("#reclameFoto1");
        // het fotonummer dat getoond moet gaan worden
        // een bij het huidige fotonummer optellen
        fotoNummer++;
        // als het nummer hoger is dan het aantal foto's in de fotolijst
        // dan weer bij de eerste foto beginnen
        if (fotoNummer >= fotolijst.length) {
            fotoNummer = 0;
        }
        // de source van de foto veranderen
        deFoto.src = fotolijst[fotoNummer].source;
        // de alt tekst van de foto veranderen
        deFoto.alt = fotolijst[fotoNummer].altText;

        // de functie startTimer opnieuw aanroepen
        // zodat de loop oneindig doorgaat
        startTimer();
    }, tempo);
}


// de functie startTimer aanroepen
startTimer();
