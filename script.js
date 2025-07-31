const historyStack = []

const konohaButton = document.getElementById("konoha");
const hierarchyButton = document.getElementById("hierarchy");
const clansButton = document.getElementById("clans");
const kageButton = document.getElementById("kage");
const anbuButton = document.getElementById("anbu");
const joninButton = document.getElementById("jonin");
const chuninButton = document.getElementById("chunin");
const geninButton = document.getElementById("genin");
const academyStudentButton = document.getElementById("academyStudent");

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

const imgButton = document.querySelector(".imgButton")
const divContainer = document.getElementById("divContainer");
const famillyContainer = document.getElementById("famillyContainer")
const infoContainer = document.getElementById("infoContainer")

 document.querySelectorAll(".decoButton").forEach(button => {
    const text = button.textContent.trim();
    button.textContent = "";
    for (let letter of text) {
      const span = document.createElement("span");
      span.textContent = letter;
      button.appendChild(span);
    }
  });

let stopJonin = false;

let hasEnteredSubPage = false




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

};


function hideButtonsHierarchy() {

    hierarchyButton.style.display = "none";
    clansButton.style.display = "none";
    kageButton.style.display = "none";
    anbuButton.style.display = "none";
    joninButton.style.display = "none";
    chuninButton.style.display = "none";
    geninButton.style.display = "none";
    academyStudentButton.style.display = "none";

};


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
            };

        });

    };

};

function triggerDiveEffect(callback) {
  historyStack.push(callback)
  const overlay = document.getElementById('overlay');
  overlay.classList.add('active');

//document.getElementById("backButton").classList.remove("hidden")

    setTimeout(() => {
    callback(); // Exécute ta fonction principale (ex: showKonoha)
    overlay.classList.remove('active');
  }, 400); // Durée identique à celle du CSS
}

function goBack() {
  // Supprime l'action actuelle
  historyStack.pop();
  
  const backButton = document.getElementById("backButton");
backButton.classList.remove("show");

setTimeout(() => {
  // Masque seulement si on revient à l'accueil
  if (!hasEnteredSubPage) {
    backButton.classList.add("hidden");
  }
}, 0);

// On revient à l'accueil, donc on réinitialise
hasEnteredSubPage = false;



  // Nettoyage AVANT d'afficher la page précédente
  clearAllContent();
  
  // Si la pile est vide, retourne à l'accueil
  if (historyStack.length === 0) {
    resetToHome(
        document.getElementById("backButton").classList.add("hidden") );
    return;
  }

  // Récupère la fonction précédente
  const previousAction = historyStack[historyStack.length - 1];
    // Appelle la fonction précédente
  previousAction();
}



function clearAllContent() {
  divContainer.innerHTML = "";
  famillyContainer.innerHTML = "";
  infoContainer.innerHTML = "";

  document.querySelectorAll("button").forEach(btn => {
    if (btn.id !== "backButton" && btn.id !== "konoha" && btn.id !== "toggleMusic") {
      btn.style.display = "none";
    }
  });
}




function showKonoha() {
     clearAllContent()
      
      document.body.style.backgroundImage ="url('images/fond2.jpg')"
     konohaButton.style.display = "none";
    hierarchyButton.style.display = "inline-block";
    clansButton.style.display = "inline-block";     
      document.body.style.backgroundSize = "cover";
       
}


function hierarchy() {
     clearAllContent()
            

    hierarchyButton.style.display = "none";
    clansButton.style.display = "none";
    kageButton.style.display = "inline-block";
    anbuButton.style.display = "inline-block";
    joninButton.style.display = "inline-block";
    chuninButton.style.display = "inline-block";
    geninButton.style.display = "inline-block";
    academyStudentButton.style.display = "inline-block";

 document.getElementById("backButton").classList.remove("hidden");

 hasEnteredSubPage = true;
const backButton = document.getElementById("backButton");
backButton.classList.remove("hidden");
setTimeout(() => backButton.classList.add("show"), 10);

   

};


function clans() {
     clearAllContent()

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

document.getElementById("backButton").classList.remove("hidden");


};

function createDescription(element) {

   imgButton.innerHTML = "";
   divContainer.innerHTML = "";
   famillyContainer.innerHTML = "";
   infoContainer.innerHTML = "";
   stopJonin = true;

    clearAllContent()

      const cardChara = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
      cardChara.classList.add("cardChara");
      divContainer.appendChild(cardChara)


                    const charaDes = document.createElement("h1");
                    cardChara.appendChild(charaDes);
                    charaDes.innerHTML = element.name;
                    charaDes.classList.add("title")

                    const charaImg = document.createElement("img");
                    cardChara.appendChild(charaImg);
                    if (element.name === "Jiraiya") {
                    charaImg.src = "images/Jiraiya.PNG";
                    charaImg.width = 150;
                } else  if(element.name === "Himawari Uzumaki") {
                    charaImg.src = "images/himawari.png";
                    charaImg.width = 150;
                }
                    else{ 
                      charaImg.src = element.images[0];
                    charaImg.width = 200;
                  }
                    

                    
                    for (let i in element.family){
                            const family = document.createElement("li");
                            cardChara.appendChild(family);
                            family.classList.add("description")
                            family.innerHTML = ` ${i} : ${element.family[i]}`;
                    }
                    
                    const bloodType = document.createElement("li");
                    cardChara.appendChild(bloodType);
                    bloodType.innerHTML = ` Blood Type : ${element.personal.bloodType}`;
                    bloodType.classList.add("description")

                    const ninjaId = document.createElement("li");
                    cardChara.appendChild(ninjaId);
                    ninjaId.innerHTML = ` Ninja Registration : ${element.rank.ninjaRegistration}`;
                    ninjaId.classList.add("description")

                     const firstTime = document.createElement("li");
                    cardChara.appendChild(firstTime);
                    firstTime.innerHTML = `First appearance on paper  : ${element.debut.manga}`;
                    firstTime.classList.add("description")

                    const firstTimeTv = document.createElement("li");
                    cardChara.appendChild(firstTimeTv);
                    firstTimeTv.innerHTML = `First appearance on screen : ${element.debut.anime}`;
                    firstTimeTv.classList.add("description")


                    

}

function changeStyleButton(){
    
    document.querySelectorAll('.decoButton').forEach(button => {
                    const text = button.textContent.trim();
                    button.textContent = '';
                    for (let letter of text) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    button.appendChild(span);
                    }
                });
}


function toggleMusic() {
  const audio = document.getElementById("musique");
  const button = document.getElementById("toggleMusic");

  if (audio.paused) {
    audio.play();
    button.textContent = "🔊"; // Son activé
  } else {
    audio.pause();
    button.textContent = "🔇"; // Son coupé
  }
}