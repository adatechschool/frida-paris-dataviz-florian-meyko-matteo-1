async function nara() {
    cancelLoading = false;

       historyStack.push(nara);  // ← Historique ajouté
  clearAllContent()

    document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center";

    hideButtonsClans();

    hasEnteredSubPage = true;
    const backButton = document.getElementById("backButton");
    backButton.classList.remove("hidden");
    setTimeout(() => backButton.classList.add("show"), 10);

    const naraTitle = document.createElement("h1");
    naraTitle.classList.add("title");
    naraTitle.innerHTML = "Nara";
    imgButton.appendChild(naraTitle);

    const naraDescription = document.createElement("p");
    naraDescription.classList.add("description");
    naraDescription.innerHTML = `Le Clan Nara (Nara Ichizoku) est connu pour la maîtrise de ses membres de la Manipulation des Ombres 
    et l'affection particulière qu'il porte aux cerfs, lesquels vivent dans une zone étendue, la forêt du clan Nara. Depuis des générations, 
    ce clan garde un livre sur des préparations médicinales ce qui laisse entendre que le clan ait un rapport avec la médecine. Parmi les secrets 
    contenus dans ce livre, on trouve les pilules utilisées par le clan Akimichi.`;
    imgButton.appendChild(naraDescription);

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
         if (cancelLoading) return;
        //if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement
       
        data.characters.forEach(element => {

            if (element.personal?.clan === "Nara" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Nara"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgNara = document.createElement("img");
                card.appendChild(addImgNara);

                if (element.images[0]) {
                    addImgNara.src = element.images[0];
                    addImgNara.width = 200;

                } else {
                    addImgNara.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgNara.width = 150;
                };

                const addNameNara = document.createElement("button");
                card.appendChild(addNameNara);
                addNameNara.className = "decoButton"
                imageContainer.appendChild(card)
                addNameNara.innerHTML = element.name;

                changeStyleButton()

                addNameNara.addEventListener("click", () => {

                createDescription(element)
                    

                });
                 card.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

