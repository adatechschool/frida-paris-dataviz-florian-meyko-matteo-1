const konohaButton = document.getElementById("konoha");
const hierarchyButton = document.getElementById("hierarchy");
const clansButton = document.getElementById("clans");
const kageButton = document.getElementById("kage");
const anbuButton = document.getElementById("anbu");
const joninButton = document.getElementById("jonin");
const chuninButton = document.getElementById("chunin");
const geninButton = document.getElementById("genin");
const academyStudentButton = document.getElementById("academyStudent");
const divContainer = document.getElementById("divContainer");

const uzumakiButton = document.getElementById("uzumaki");
const hyugaButton = document.getElementById("hyuga");
const uchihaButton = document.getElementById("uchiha");
const senjuButton = document.getElementById("senju");
const sarutobiButton = document.getElementById("sarutobi");
const aburameButton = document.getElementById("aburame");
const inuzukaButton = document.getElementById("inuzuka");
const yamanakaButton = document.getElementById("yamanaka");
const naraButton = document.getElementById("nara");
const akimichiButton = document.getElementById("akimichi");
const kuramaButton = document.getElementById("kurama");


function hideButtonsClans() {

    uzumakiButton.style.display = "none";
    hyugaButton.style.display = "none";
    uchihaButton.style.display = "none";
    senjuButton.style.display = "none";
    sarutobiButton.style.display = "none";
    aburameButton.style.display = "none";
    inuzukaButton.style.display = "none";
    yamanakaButton.style.display = "none";
    naraButton.style.display = "none";
    akimichiButton.style.display = "none";
    kuramaButton.style.display = "none";

}

function hideButtonsHierarchy() {

    hierarchyButton.style.display = "none";
    clansButton.style.display = "none";
    kageButton.style.display = "none";
    anbuButton.style.display = "none";
    joninButton.style.display = "none";
    chuninButton.style.display = "none";
    geninButton.style.display = "none";
    academyStudentButton.style.display = "none";

}


async function searchCharacters(firstName) {

    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {
            if (element.name === firstName) {
                console.log(element.id);
            }
        })

    }
}


async function ViewClans(clansName) {
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {
            if (element.personal?.clan === clansName) {
                console.log(`${element.name} ${element.id}`);
            }
        })

    }
}


function showKonoha() {

    konohaButton.style.display = "none";
    hierarchyButton.style.display = "inline-block";
    clansButton.style.display = "inline-block";

}

function hierarchy() {

    hierarchyButton.style.display = "none";
    clansButton.style.display = "none";
    kageButton.style.display = "inline-block";
    anbuButton.style.display = "inline-block";
    joninButton.style.display = "inline-block";
    chuninButton.style.display = "inline-block";
    geninButton.style.display = "inline-block";
    academyStudentButton.style.display = "inline-block";

}

function clans() {

    hierarchyButton.style.display = "none";
    clansButton.style.display = "none";
    uzumakiButton.style.display = "inline-block";
    hyugaButton.style.display = "inline-block";
    uchihaButton.style.display = "inline-block";
    senjuButton.style.display = "inline-block";
    sarutobiButton.style.display = "inline-block";
    aburameButton.style.display = "inline-block";
    inuzukaButton.style.display = "inline-block";
    yamanakaButton.style.display = "inline-block";
    naraButton.style.display = "inline-block";
    akimichiButton.style.display = "inline-block";
    kuramaButton.style.display = "inline-block";

}
