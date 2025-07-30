async function akimichi() {

    document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center";
    
    hideButtonsClans();

    const akimichiTitle = document.createElement("h1");
    akimichiTitle.classList.add("title");
    akimichiTitle.innerHTML = "Akimichi";
    imgButton.appendChild(akimichiTitle);
    

    const akimichiDescription = document.createElement("p");
    akimichiDescription.classList.add("description");
    akimichiDescription.innerHTML = `Le Clan Akimichi (Akimichi Ichizoku) est un des grands clans de Konoha.[1] Ses membres sont capables
    de convertir rapidement les calories en chakra, qu'ils utilisent ensuite pour leurs techniques secrètes, telles le Décuplement et les autres
    variantes de jutsu d'agrandissement du corps. Ils ont eu quinze chefs, Chôza Akimichi en est le chef actuel. Chôji Akimichi est désigné pour 
    devenir le seizième chef.`;
    imgButton.appendChild(akimichiDescription);
    
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

            if (element.personal?.clan === "Akimichi" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Akimichi"))) {

                 const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgAkimichi = document.createElement("img");
                card.appendChild(addImgAkimichi);

                if (element.images[0]) {
                    addImgAkimichi.src = element.images[0];
                    addImgAkimichi.width = 200;

                } else {
                    addImgAkimichi.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAkimichi.width = 150;
                };

                const addNameAkimichi = document.createElement("button");
                card.appendChild(addNameAkimichi);
                addNameAkimichi.className = "decoButton"
                 imageContainer.appendChild(card)
                addNameAkimichi.innerHTML = element.name;

                changeStyleButton()

                addNameAkimichi.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

