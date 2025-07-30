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
        document.body.style.backgroundImage = "url('images/fondlast.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "no-repeat";        
        document.body.style.backgroundPosition = "center center";
    hideButtonsHierarchy();
    
    
    const titleKage = document.createElement("h1");
    divContainer.appendChild(titleKage);
    titleKage.innerHTML = "Hokage";

    const kageDescription = document.createElement("p");
    divContainer.appendChild(kageDescription);

    kageDescription.innerHTML = `Kage (影, signifiant littéralement : Ombre) est un titre réservé au chef de l'un des villages cachés des Cinq 
    Grands Pays Ninjas. Ils sont collectivement connus sous le nom de Cinq Kage (五影, Gokage, signifiant littéralement : Cinq Ombres). Un Kage 
    supervise les activités de son village, qu'il s'agisse d'envoyer des ninjas en mission ou de prendre des décisions difficiles concernant la 
    sécurité de sa population. Le Kage d'un village est généralement reconnu comme son ninja le plus puissant. Les Kage sont réputés pour être les 
    meilleurs shinobi du continent.`;


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

                const addImgKage = document.createElement("img");
                divContainer.appendChild(addImgKage);
                addImgKage.src = element.images[0];
                addImgKage.width = 200;


                if (element.name === "Naruto Uzumaki") {
                    addImgKage.src = "images/Naruto.webp";
                    addImgKage.width = 150;
                };


                const addNameKage = document.createElement("button");
                divContainer.appendChild(addNameKage);
                addNameKage.className = "decoButton"
                addNameKage.innerHTML = element.name;
                
                changeStyleButton()


                addNameKage.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
}
catch(error){
    console.log(error.message)
}
};
