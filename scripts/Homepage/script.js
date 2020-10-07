/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var hamburgerMenu = document.querySelector("nav img:first-of-type");

var hamburgerMenulijst = document.querySelector("header ul");

var inlogMenu = document.querySelector("header ul:nth-of-type(2)")

var inlogMenuIcon = document.querySelector("nav img:nth-of-type(2)");

var keuzeTalen = document.querySelector("header ul:nth-of-type(3)")

var keuzeTalenIcon = document.querySelector("nav img:nth-of-type(5")


var fotoNummer = 0;
var tempo = 8000;


var fotolijst = [
    {
        "source": "https://www.psv.nl/upload_mm/f/3/6/cid76920_Kop%20Gakpo-Hersteld-Hersteld-Hersteld_980x480.jpg",
        "altText": "PSV reclame 1"
  },
    {
        "source": "https://www.psv.nl/upload_mm/8/0/4/cid76897_ANNOUNCEMENTS_NIEUWS_PSV%20NL_Marco%20van%20Ginkel_980x480.jpg",
        "altText": "PSV reclame 2"
  },
    {
        "source": "https://www.psv.nl/upload_mm/8/0/e/cid76910_201006PZ42972_980x480.jpg",
        "altText": "PSV reclame 3"
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

        deFoto.src = fotolijst[fotoNummer].source;

        deFoto.alt = fotolijst[fotoNummer].altText;

        // de functie startTimer opnieuw aanroepen
        // zodat de loop oneindig doorgaat
        startTimer();
    }, tempo);
}
startTimer();

function klapOpen() {
    hamburgerMenulijst.classList.toggle("active");
}

hamburgerMenu.addEventListener("click", klapOpen);


function inlogOpen() {
    inlogMenu.classList.toggle("active");
}

inlogMenuIcon.addEventListener("click", inlogOpen);


function talenOpen() {
    keuzeTalen.classList.toggle("active");
}

keuzeTalenIcon.addEventListener("click", talenOpen);
