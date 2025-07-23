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

const uzumakiButton = document.getElementById('uzumaki')
const hyugaButton = document.getElementById('hyuga')
const uchiwaButton = document.getElementById('uchiwa')
const senjuButton = document.getElementById('senju')
const sarutobiButton = document.getElementById('sarutobi')
const aburameButton = document.getElementById('aburame')
const inuzukaButton = document.getElementById('inuzuka')
const yamanakaButton = document.getElementById('yamanaka')
const naraButton = document.getElementById('nara')
const akimichiButton = document.getElementById('akimichi')
const kuramaButton = document.getElementById('kurama')

async function searchCharacters(firstName){
   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`)
      let data = await response.json()

 
      data.characters.forEach(element => {

        if(element.name === firstName )
        {
         console.log(element.id)
        }

      })

   }
}
async function ViewClans(clansName){
   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`)
      let data = await response.json()

 
      data.characters.forEach(element => {

        if(element.personal?.clan === clansName )
        {
         console.log(`${element.name} ${element.id}`)
        }

      })

   }
}



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
    anbuDescription.innerHTML = "Anbu (暗部, Français : Forces Spéciales, signifiant littéralement : Côté Obscur) est un mot-valise composé des mots japonais « Ansatsu Senjutsu Tokushu Butai » (暗殺戦術特殊部隊, signifiant littéralement : Escouade Spéciale de Tactique et d'Assassinat). Il s'agit d'une unité spéciale créée pour servir de garde personnelle aux Kage. Le mot Anbu sert à la fois à désigner l'unité et ses membres. Il n'existe apparemment pas de rang au sein de cette unité où l'évolution hiérarchique semble se baser sur le mérite et l'expérience. Les personnes ayant le commandement d'une équipe portent le titre de « chefs d'escouade » (分隊長, Buntaichô), un poste tenu en haute estime."


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



async function jonin() {
   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"

   const joninTitle = document.createElement("h1")
    divContainer.appendChild(joninTitle)
    joninTitle.innerHTML = "Jōnin"

    const joninDescription = document.createElement("p")
    divContainer.appendChild(joninDescription)
    joninDescription.innerHTML = "Les Jônin (上忍) sont généralement des shinobi très expérimentés et très compétents qui servent de capitaines militaires, dont les capacités sont considérées comme surhumaines. [1] Les jônin sont généralement capables d'utiliser au moins deux types de chakra élémentaires.[2] Il n'est pas rare que les jônin partent seuls en mission. Ils sont souvent envoyés sur des missions de rang A, et s'ils sont suffisamment expérimentés, des missions de rang S également (qui sont considérées comme les plus difficiles)."


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Jōnin" || element.rank?.ninjaRank?.Gaiden === "Jōnin" || element.rank?.ninjaRank?.["Part II"] === "Jōnin" || element.rank?.ninjaRank?.["Boruto Manga"] === "Jōnin" || element.rank?.ninjaRank?.["Blank Period"] === "Jōnin") && element.personal.affiliation[0] === "Konohagakure") {

            const addImgJonin = document.createElement("img")
            divContainer.appendChild(addImgJonin)
             if (element.images[0]) {
          addImgJonin.src = element.images[0]
                
               }  else  {
           
             addImgJonin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
          }
          if(element.name === "Jiraiya") {
                  addImgJonin.src = "Jiraiya.PNG"

               }


            const addNameJonin = document.createElement("button")
            divContainer.appendChild(addNameJonin)
            addNameJonin.innerHTML = `${element.name}  ${element.id}`

         }
      })
   }
}

async function chunin() {

   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"

   const chuninTitle = document.createElement("h1")
    divContainer.appendChild(chuninTitle)
    chuninTitle.innerHTML = "Chūnin"

    const chuninDescription = document.createElement("p")
    divContainer.appendChild(chuninDescription)
    chuninDescription.innerHTML = "Les Chûnin (中忍, signifiant littéralement : Ninja Moyen, signification (Kana) : Ninja de moyenne classe) sont des ninjas qui ont atteint un niveau de maturité et de capacité qui consiste principalement en des compétences de meneur d'hommes et des prouesses tactiques. Les chûnin sont généralement envoyés en mission de rang C ou de rang B. Certains chûnin, comme Iruka Umino et Shino Aburame, deviennent des professeurs de l'Académie."


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()


      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Chūnin" || element.rank?.ninjaRank?.Gaiden === "Chūnin" || element.rank?.ninjaRank?.["Part II"] === "Chūnin" || element.rank?.ninjaRank?.["Boruto Manga"] === "Chūnin" || element.rank?.ninjaRank?.["Blank Period"] === "Chūnin") && element.personal.affiliation[0] === "Konohagakure") {

            const addImgChunin = document.createElement("img")
            divContainer.appendChild(addImgChunin)
            if (element.images[0]) {
               addImgChunin.src = element.images[0]
                
              } else {
           
            addImgChunin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
         }


            const addNameChunin = document.createElement("button")
            divContainer.appendChild(addNameChunin)
            addNameChunin.innerHTML = element.name

         }
      })
   }
}

async function genin() {

   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"


   const geninTitle = document.createElement("h1")
    divContainer.appendChild(geninTitle)
    geninTitle.innerHTML = "Genin"

    const geninDescription = document.createElement("p")
    divContainer.appendChild(geninDescription)
    geninDescription.innerHTML = "Genin (下忍, signifiant littéralement : Bas Ninja) est le grade le plus bas des ninjas, mais aussi de ceux qui affichent la plus grande différence de puissance. Lorsqu'ils deviennent genin, les ninjas commencent à contribuer à l'économie de leur village en étant envoyés sur des missions pour lesquelles le village est payé. Ils sont généralement envoyés sur des missions de rang D, qui sont des travaux manuels presque sans risque, ou, rarement, sur des missions de rang C, qui sont un cran au-dessus et commencent à frôler le vrai travail de « ninja » avec une très faible possibilité de risque pour le ninja impliqué. Lorsque Konoha manquait de ninjas de haut niveau à cause de l'invasion, le village dut occasionnellement envoyer des genin sur des missions de rang supérieur.<br><br>Les genins sont placés dans des unités de quatre personnes, ou escouades, composées de trois genin et d'un jônin instructeur, afin d'apprendre le travail d'équipe et d'expérimenter la vraie vie de ninja sous la supervision et la protection d'un shinobi d'élite. La composition de ces équipes est basée sur les compétences individuelles des genin, de sorte qu'il y ait un équilibre entre les équipes. Par exemple, Naruto Uzumaki, qui obtint les notes les plus basses, fut placé dans une équipe avec Sasuke Uchiwa et Sakura Haruno, qui obtinrent respectivement les notes les plus élevées et les meilleurs résultats à l'examen écrit. En raison du fait que les genin sont les ninja de plus bas niveau, ils sont normalement assignés à des missions de rang D ou C afin d'acquérir de l'expérience avant d'entreprendre des missions plus difficiles ou d'être promus au grade de chûnin, en réussissant les Examens Chûnin, une série de tâches difficiles destinées à tester les compétences des genin afin de déterminer s'ils sont aptes à devenir chûnin ou non.";

   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Genin" || element.rank?.ninjaRank?.Gaiden === "Genin" || element.rank?.ninjaRank?.["Part II"] === "Genin" || element.rank?.ninjaRank?.["Boruto Manga"] === "Genin" || element.rank?.ninjaRank?.["Blank Period"] === "Genin") && element.personal.affiliation[0] === "Konohagakure") {

            const addImgGenin = document.createElement("img")
            divContainer.appendChild(addImgGenin)
            if (element.images[0]) {
               addImgGenin.src = element.images[0]
                
              } else {
           
            addImgGenin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
         }


            const addNameGenin = document.createElement("button")
            divContainer.appendChild(addNameGenin)
            addNameGenin.innerHTML = element.id

         }
      })
   }
}

async function academyStudent() {

   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   kageButton.style.display = "none"
   anbuButton.style.display = "none"
   joninButton.style.display = "none"
   chuninButton.style.display = "none"
   geninButton.style.display = "none"
   academyStudentButton.style.display = "none"


   const academyStudentTitle = document.createElement("h1")
    divContainer.appendChild(academyStudentTitle)
    academyStudentTitle.innerHTML = "Academy Student"

    const academyStudentDescription = document.createElement("p")
    divContainer.appendChild(academyStudentDescription)
    academyStudentDescription.innerHTML = "Les Étudiants de l’Académie sont formés aux bases du métier de shinobi (ninjutsu, taijutsu, genjutsu, contrôle du chakra, tactiques…). Ils suivent aussi des cours classiques comme l’histoire ou les maths, et apprennent à travailler seuls et en équipe. Bien qu’encore en formation, ils peuvent être mobilisés en cas d’urgence.<br><br>Pour devenir genin, ils doivent passer un examen final, suivi d’un test d’évaluation par un jônin instructeur. Les critères de réussite varient selon les villages. Après la 4e Grande Guerre Shinobi, le programme a été réformé pour inclure un cursus général plus rigoureux et des techniques plus avancées."


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if ((element.rank?.ninjaRank?.["Part I"] === "Academy Student" || element.rank?.ninjaRank?.Gaiden === "Academy Student" || element.rank?.ninjaRank?.["Part II"] === "Academy Student" || element.rank?.ninjaRank?.["Boruto Manga"] === "Academy Student" || element.rank?.ninjaRank?.["Blank Period"] === "Academy Student") && element.personal.affiliation[0] === "Konohagakure") {

            const addImgAcademyStudent = document.createElement("img")
            divContainer.appendChild(addImgAcademyStudent)
            if (element.images[0]) {
               addImgAcademyStudent.src = element.images[0]
                
              } else {
           
            addImgAcademyStudent.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
         }


            const addNameAcademyStudent = document.createElement("button")
            divContainer.appendChild(addNameAcademyStudent)
            addNameAcademyStudent.innerHTML = element.name

         }
      })
   }
}

function clans() {

   hierarchyButton.style.display = "none"
   clansButton.style.display = "none"
   uzumakiButton.style.display = "inline-block"
   hyugaButton.style.display = "inline-block"
   uchiwaButton.style.display = "inline-block"
   senjuButton.style.display = "inline-block"
   sarutobiButton.style.display = "inline-block"
   aburameButton.style.display = "inline-block"
   inuzukaButton.style.display = "inline-block"
   yamanakaButton.style.display = "inline-block"
   naraButton.style.display = "inline-block"
   akimichiButton.style.display = "inline-block"
   kuramaButton.style.display = "inline-block"

}

async function uzumaki()
{
   uzumakiButton.style.display = "none"
   hyugaButton.style.display = "none"
   uchiwaButton.style.display = "none"
   senjuButton.style.display = "none"
   sarutobiButton.style.display = "none"
   aburameButton.style.display = "none"
   inuzukaButton.style.display = "none"
   yamanakaButton.style.display = "none"
   naraButton.style.display = "none"
   akimichiButton.style.display = "none"
   kuramaButton.style.display = "none"


    const uzumakiTitle = document.createElement("h1")
    divContainer.appendChild(uzumakiTitle)
    uzumakiTitle.innerHTML = "Uzumaki"

    const uzumakiDescription = document.createElement("p")
    divContainer.appendChild(uzumakiDescription)
    uzumakiDescription.innerHTML = "Le Clan Uzumaki (うずまき一族, Uzumaki Ichizoku) était le clan prédominant du village caché d'Uzushio. Ce clan avait un lointain lien de parenté avec le clan Senju avec lequel ils ont toujours entretenu de bonnes relations. Ils furent décimés lors des Grandes Guerres Ninjas en même temps que le Pays des Tourbillons. Les rares survivants s'exilèrent à travers le monde. Depuis, les ninjas du village de Konoha arborent le symbole Uzumaki sur leurs uniformes, en mémoire de leurs amis défunts."


   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if (element.personal.clan === "Uzumaki") {

            const addImgUzumaki = document.createElement("img")
            divContainer.appendChild(addImgUzumaki)
            if (element.images[0]) {
               addImgUzumaki.src = element.images[0]
                
              } else {
           
            addImgUzumaki.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
         }


            const addNameUzumaki = document.createElement("button")
            divContainer.appendChild(addNameUzumaki)
            addNameUzumaki.innerHTML = element.name

         }

      })

   }

}

