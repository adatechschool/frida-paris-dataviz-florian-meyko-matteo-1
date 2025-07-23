const konohaButton = document.getElementById('konoha')
const hierarchyButton = document.getElementById('hierarchy')
const clansButton = document.getElementById('clans')
const kageButton = document.getElementById('kage')
const anbuButton = document.getElementById('anbu')
const joninButton = document.getElementById('jonin')
const chuninButton = document.getElementById('chunin')
const geninButton = document.getElementById('genin')
const academyStudentButton = document.getElementById('academyStudent')
const divContainer = document.getElementById('divContainer')

function showKonoha() {
   konohaButton.style.display = "none"
   hierarchyButton.style.display = "inline-block"
   clansButton.style.display = "inline-block"
}

function hierarchy() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "inline-block"
   anbuButton.style.display = "inline-block"
   joninButton.style.display = "inline-block"
   chuninButton.style.display = "inline-block"
   geninButton.style.display = "inline-block"
   academyStudentButton.style.display = "inline-block"
}

async function kage() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"

    const titleKage = document.createElement("h1")
    divContainer.appendChild(titleKage)
    titleKage.innerHTML = "Hokage"

    const kageDescription = document.createElement("p")
    divContainer.appendChild(kageDescription)
    kageDescription.innerHTML = "Kage (影, signifiant littéralement : Ombre) est un titre réservé au chef de l'un des villages cachés des Cinq Grands Pays Ninjas. Ils sont collectivement connus sous le nom de Cinq Kage (五影, Gokage, signifiant littéralement : Cinq Ombres). Un Kage supervise les activités de son village, qu'il s'agisse d'envoyer des ninjas en mission ou de prendre des décisions difficiles concernant la sécurité de sa population. Le Kage d'un village est généralement reconnu comme son ninja le plus puissant. Les Kage sont réputés pour être les meilleurs shinobi du continent."


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Kage" || element.rank?.ninjaRank?.Gaiden === "Kage" || element.rank?.ninjaRank?.["Part II"] === "Kage" || element.rank?.ninjaRank?.["Boruto Manga"] === "Kage" || element.rank?.ninjaRank?.["Blank Period"] === "Kage") && element.personal.affiliation[0] === "Konohagakure") {

          
            const addImgKage = document.createElement("img")
            divContainer.appendChild(addImgKage)
            addImgKage.src = element.images[0]

            const addNameKage = document.createElement("button")
            divContainer.appendChild(addNameKage)
            addNameKage.innerHTML = element.name

         }


      })

   }
}
async function anbu() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
   const titleAnbu = document.createElement("h1")
    divContainer.appendChild(titleAnbu)
    titleAnbu.innerHTML = "Anbu"

    const anbuDescription = document.createElement("p")
    divContainer.appendChild(anbuDescription)
    anbuDescription.innerHTML = ""


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Anbu" || element.rank?.ninjaRank?.Gaiden === "Anbu" || element.rank?.ninjaRank?.["Part II"] === "Anbu" || element.rank?.ninjaRank?.["Boruto Manga"] === "Anbu" || element.rank?.ninjaRank?.["Blank Period"] === "Anbu") && element.personal.affiliation[0] === "Konohagakure") {

            const addImgAnbu = document.createElement("img")
            divContainer.appendChild(addImgAnbu)
            if (element.images[0]) {
               addImgAnbu.src = element.images[0]
                
              } else {
           
            addImgAnbu.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
         }


            const addNameAnbu = document.createElement("button")
            divContainer.appendChild(addNameAnbu)
            addNameAnbu.innerHTML = element.name

         }


      })

   }

}



function jonin() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

function chunin() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}
function genin() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

function academyStudent() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

