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
        "source": "https://psv.blueconic.com/rest/dialogues/files/43d763b8-7b84-4772-b3fd-350caa619758/SPLASH_PSV+NL_PSV+Mondkapjes.jpg",
        "altText": "PSV reclame 1"
  },
    {
        "source": "https://psv.blueconic.com/rest/dialogues/files/b4aed350-399f-4076-bb95-daed5cc84a3c/SPLASH_Promotie+PSV+App_V2.jpg",
        "altText": "PSV reclame 2"
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
