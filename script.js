

// async function naruto() {
//     const totalPages = 72;

//     for (let page = 1; page <= totalPages; page++) {
//         let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
//         let data = await response.json();

//         data.characters.forEach(element => {
//             // Vérifie si rank et ninjaRegistration existent
//             if (element.rank && element.rank.ninjaRank) {
//                 console.log(element.rank.ninjaRank);
//             } else {
//                 console.error(`Pas de ninjaRegistration pour : ${element.name || "personnage inconnu"}`);
//             }
//         });
//     }
// }
// naruto()

 const konohaButton = document.getElementById('konoha')
 const hierarchyButton = document.getElementById('hierarchy')
 const clansButton = document.getElementById('clans')
 const kageButton = document.getElementById('kage')
 const anbuButton = document.getElementById('anbu')
 const joninButton = document.getElementById('jonin')
 const chuninButton = document.getElementById('chunin')
 const geninButton = document.getElementById('genin')
 const academyStudentButton = document.getElementById('academyStudent')
 
function showKonoha(){
   konohaButton.style.display = "none"
   hierarchyButton.style.display = "inline-block"
   clansButton.style.display = "inline-block"


}

function hierarchy()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "inline-block"
   anbuButton.style.display = "inline-block"
   joninButton.style.display = "inline-block"
   chuninButton.style.display = "inline-block"
   geninButton.style.display = "inline-block"
   academyStudentButton.style.display = "inline-block"
}

async function kage()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"

const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
  
        data.characters.forEach(element => {
          
             if ((element.rank?.ninjaRank?.["Part I"] === "Kage" || element.rank?.ninjaRank?.Gaiden === "Kage"|| element.rank?.ninjaRank?.["Part II"] === "Kage" || element.rank?.ninjaRank?.["Boruto Manga"] === "Kage"  || element.rank?.ninjaRank?.["Blank Period"] === "Kage") && element.personal.affiliation[0]==="Konohagakure") {
                 console.log(element.name);
            } 
            
            
    })

}
}
function anbu()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

function jonin()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

function chunin()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}
function genin()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

function academyStudent()
{
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"
}

