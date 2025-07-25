async function kage() {

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
        let data = await response.json();


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
                addNameKage.innerHTML = element.name;


                addNameKage.addEventListener("click", () => {

                    divContainer.innerHTML = "";
                    const test = document.createElement("h1");
                    divContainer.appendChild(test);
                    test.innerHTML = element.name;

                });

            };

        });
    };
};
