async function uzumaki() {

        document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center center";
        
        

    hideButtonsClans();

   
    const uzumakiTitle = document.createElement("h1");
    uzumakiTitle.classList.add("title")
    uzumakiTitle.innerHTML = "Uzumaki";
    imgButton.appendChild(uzumakiTitle);

    
    const uzumakiDescription = document.createElement("p");
     uzumakiDescription.classList.add("description");
     uzumakiDescription.innerHTML = `Le Clan Uzumaki (Uzumaki Ichizoku) était le clan prédominant du village caché d'Uzushio. Ce clan 
    avait un lointain lien de parenté avec le clan Senju avec lequel ils ont toujours entretenu de bonnes relations. Ils furent décimés lors des 
    Grandes Guerres Ninjas en même temps que le Pays des Tourbillons. Les rares survivants s'exilèrent à travers le monde. Depuis, les ninjas du 
    village de Konoha arborent le symbole Uzumaki sur leurs uniformes, en mémoire de leurs amis défunts.`
    imgButton.appendChild(uzumakiDescription);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imgButton.appendChild(imageContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    imgButton.appendChild(buttonContainer);

    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement  

        data.characters.forEach(element => {

            if (element.personal?.clan === "Uzumaki" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Uzumaki"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgUzumaki = document.createElement("img");
                card.appendChild(addImgUzumaki);
                

                if (element.images[0]) {
                    addImgUzumaki.src = element.images[0];
                    addImgUzumaki.width = 200;

                } else {
                    addImgUzumaki.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgUzumaki.width = 150;
                };
                
                if (element.name === "Himawari Uzumaki") {
                    addImgUzumaki.src = "images/himawari.png";
                    addImgUzumaki.width = 150;
                };

                const addNameUzumaki = document.createElement("button");
                card.appendChild(addNameUzumaki);
                addNameUzumaki.className = "decoButton"
                 imageContainer.appendChild(card)
                addNameUzumaki.innerHTML = element.name;

                changeStyleButton()

                addNameUzumaki.addEventListener("click", () => {

                createDescription(element)
                
                    

                });

                card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

