// function triggerDiveEffect(callback) {
//   const overlay = document.getElementById('overlay');
//   overlay.classList.add('active');

//     setTimeout(() => {
//     callback(); // Exécute ta fonction principale (ex: showKonoha)
//     overlay.classList.remove('active');
//   }, 1200); // Durée identique à celle du CSS
// }

async function kage() {
    
try{
    document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
    document.body.style.backgroundSize = "cover";         
    document.body.style.backgroundRepeat = "no-repeat";        
    document.body.style.backgroundPosition = "center center";
    hideButtonsHierarchy();
    
    
    const titleKage = document.createElement("h1");
    titleKage.classList.add("title");
    titleKage.innerHTML = "Hokage";
    imgButton.appendChild(titleKage);

    const kageDescription = document.createElement("p");
    kageDescription.classList.add("description");
    kageDescription.innerHTML = `Kage (signifiant littéralement : Ombre) est un titre réservé au chef de l'un des villages cachés des Cinq 
    Grands Pays Ninjas. Ils sont collectivement connus sous le nom de Cinq Kage (Gokage, signifiant littéralement : Cinq Ombres). Un Kage 
    supervise les activités de son village, qu'il s'agisse d'envoyer des ninjas en mission ou de prendre des décisions difficiles concernant la 
    sécurité de sa population. Le Kage d'un village est généralement reconnu comme son ninja le plus puissant. Les Kage sont réputés pour être les 
    meilleurs shinobi du continent.`;
    imgButton.appendChild(kageDescription);

     const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imgButton.appendChild(imageContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    imgButton.appendChild(buttonContainer);

    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
         if(!response.ok)
         {
            throw new Error(`Erreur HTTP : ${response.status}`);
         }
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (

                (
                
                    element.rank?.ninjaRank?.["Part I"] === "Kage" ||
                    element.rank?.ninjaRank?.Gaiden === "Kage" ||
                    element.rank?.ninjaRank?.["Part II"] === "Kage" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Kage" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Kage"
                
                ) 
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )
            
            ) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgKage = document.createElement("img");
                card.appendChild(addImgKage);
                addImgKage.src = element.images[0];
                addImgKage.width = 200;


                if (element.name === "Naruto Uzumaki") {
                    addImgKage.src = "images/Naruto.webp";
                    addImgKage.width = 150;
                }


                const addNameKage = document.createElement("button");
                 card.appendChild(addNameKage);
                addNameKage.className = "decoButton"
                imageContainer.appendChild(card)
                addNameKage.innerHTML = element.name;
                
                changeStyleButton()


                addNameKage.addEventListener("click", () => {

                createDescription(element)
                    

                });
                 card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            }

        })
    }
}
catch(error){
    console.log(error.message)
}
}
