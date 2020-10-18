/*hamburgermenu*/
var hamburgerMenu = document.querySelector("nav img:first-of-type");

var hamburgerMenulijst = document.querySelector("header ul");


/*inlogmenu*/
var inlogMenu = document.querySelector("header ul:nth-of-type(2)")

var inlogMenuIcon = document.querySelector("nav img:nth-of-type(2)");


/*talenmenu*/
var keuzeTalen = document.querySelector("header ul:nth-of-type(3)")

var keuzeTalenIcon = document.querySelector("nav img:nth-of-type(5")


/*reclame vervangen*/
var fotoNummer = 0;
var tempo = 8000;


var fotolijst = [
    {
        "source": "https://www.psv.nl/upload_mm/f/3/6/cid76920_Kop%20Gakpo-Hersteld-Hersteld-Hersteld_980x480.jpg",
        "altText": "PSV stunt met Mario Götze"
  },
    {
        "source": "https://www.psv.nl/upload_mm/8/0/4/cid76897_ANNOUNCEMENTS_NIEUWS_PSV%20NL_Marco%20van%20Ginkel_980x480.jpg",
        "altText": "Marco van Ginkel keert terug bij PSV"
  },
    {
        "source": "https://www.psv.nl/upload_mm/8/0/e/cid76910_201006PZ42972_980x480.jpg",
        "altText": "Fein komt over van Beyern München"
  }
];

function startTimer() {
    setTimeout(function () {

        let deFoto = document.querySelector("#reclameFoto1");

        let deTekst = document.querySelector("#reclameTekst");

        fotoNummer++;

        if (fotoNummer >= fotolijst.length) {
            fotoNummer = 0;
        }

        deFoto.src = fotolijst[fotoNummer].source;

        deFoto.alt = fotolijst[fotoNummer].altText;

        deTekst.textContent = fotolijst[fotoNummer].altText;

        startTimer();
    }, tempo);
}
startTimer();


/*hamburgermenu*/
function klapOpen() {
    hamburgerMenulijst.classList.toggle("active");
    inlogMenu.classList.remove("active");
    keuzeTalen.classList.remove("active");
}

hamburgerMenu.addEventListener("click", klapOpen);


/*inlogmenu*/
function inlogOpen() {
    inlogMenu.classList.toggle("active");
    hamburgerMenulijst.classList.remove("active");
    keuzeTalen.classList.remove("active");
}

inlogMenuIcon.addEventListener("click", inlogOpen);


/*talenmenu*/
function talenOpen() {
    keuzeTalen.classList.toggle("active");
    hamburgerMenulijst.classList.remove("active");
    inlogMenu.classList.remove("active");
}

keuzeTalenIcon.addEventListener("click", talenOpen);
