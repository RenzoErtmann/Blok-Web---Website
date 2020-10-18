var fotoNummer = 0;

var tempo = 8000;

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
    setTimeout(function () {

        let deFoto = document.querySelector("#reclameFoto1");

        fotoNummer++;

        if (fotoNummer >= fotolijst.length) {
            fotoNummer = 0;
        }

        deFoto.src = fotolijst[fotoNummer].source;

        deFoto.alt = fotolijst[fotoNummer].altText;

        startTimer();
    }, tempo);
}
startTimer();
