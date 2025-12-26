async function uchiha() {

    cancelLoading = false;

       historyStack.push(uchiha);  // ← Historique ajouté
  clearAllContent()

    cancelLoading = false;

       historyStack.push(uchiha);  // ← Historique ajouté
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

    const uchihaTitle = document.createElement("h1");
    uchihaTitle.classList.add("title");
    uchihaTitle.innerHTML = "Uchiha";
    imgButton.appendChild(uchihaTitle);

    const uchihaDescription = document.createElement("p");
    uchihaDescription.classList.add("description");
    uchihaDescription.innerHTML = `Le clan Uchiwa (Uchiha Ichizoku) était autrefois considéré comme le plus puissant clan de Konoha et un 
    des plus puissants du monde ninja (avec pour seul et unique rival le clan Senju avec lequel il fonda Konoha), mais il a maintenant presque disparu 
    après les événements du massacre du clan.`;
     imgButton.appendChild(uchihaDescription);
    
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

            if (element.personal?.clan === "Uchiha" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Uchiha"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");


                const addImgUchiha = document.createElement("img");
                card.appendChild(addImgUchiha);

                if (element.images[0]) {
                    addImgUchiha.src = element.images[0];
                    addImgUchiha.width = 200;

                } else {
                    addImgUchiha.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgUchiha.width = 150;
                };

                const addNameUchiha = document.createElement("button");
                card.appendChild(addNameUchiha);
                addNameUchiha.className = "decoButton"
                imageContainer.appendChild(card)
                addNameUchiha.innerHTML = element.name;

                changeStyleButton()

                addNameUchiha.addEventListener("click", () => {

                createDescription(element)
                    

                });
                 card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

