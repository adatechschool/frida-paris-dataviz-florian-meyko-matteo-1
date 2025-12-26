async function sarutobi() {
    cancelLoading = false;

       historyStack.push(sarutobi);  // ← Historique ajouté
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

    const sarutobiTitle = document.createElement("h1");
    sarutobiTitle.classList.add("title");
    sarutobiTitle.innerHTML = "Sarutobi";
    imgButton.appendChild(sarutobiTitle);

    const sarutobiDescription = document.createElement("p");
    sarutobiDescription.classList.add("description");
    sarutobiDescription.innerHTML = `Il est à l'origine de plusieurs membres notables ayant accédé à des postes de hauts rangs, tel que Hokage,
    ou membre des Douze Ninjas Gardiens. Tous les membres connus semblent tous dévoués à la Volonté du Feu. Il fut l'un des premiers clans à rejoindre
    Konoha lors de sa création par les Senju et les Uchiwa.`;
    imgButton.appendChild(sarutobiDescription);

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

            if (element.personal?.clan === "Sarutobi" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Sarutobi"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgSarutobi = document.createElement("img");
                card.appendChild(addImgSarutobi);

                if (element.images[0]) {
                    addImgSarutobi.src = element.images[0];
                    addImgSarutobi.width = 200;

                } else {
                    addImgSarutobi.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgSarutobi.width = 150;
                };

                const addNameSarutobi = document.createElement("button");
                card.appendChild(addNameSarutobi);
                addNameSarutobi.className = "decoButton"
                imageContainer.appendChild(card)
                addNameSarutobi.innerHTML = element.name;

                changeStyleButton()

                addNameSarutobi.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};
