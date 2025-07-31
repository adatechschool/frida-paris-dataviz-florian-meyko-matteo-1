async function senju() {
    cancelLoading = false;

       historyStack.push(senju);  // ← Historique ajouté
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

    const senjuTitle = document.createElement("h1");
    senjuTitle.classList.add("title");
    senjuTitle.innerHTML = "Senju";
    imgButton.appendChild(senjuTitle);

    const senjuDescription = document.createElement("p");
    senjuDescription.classList.add("description");
    senjuDescription.innerHTML = `Le clan Senju (Senju Ichizoku) était l'un des clans les plus puissants de l'époque, qui avait pour chef, 
    le redoutable et unique utilisateur naturel du Mokuton, Hashirama Senju, qui devint plus tard, le premier Hokage. Ils avaient pour rivaux, 
    le clan Uchiwa dont leur chef, Madara Uchiwa, fut le plus grand et unique rival d'Hashirama Senju. Ils furent à l'origine de la création du village 
    caché des feuilles avec le clan Uchiwa. Il fut également révélé qu'ils auraient des liens de parenté éloignés avec le clan Uzumaki.`;
    imgButton.appendChild(senjuDescription);

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

            if (element.personal?.clan === "Senju" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Senju"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgSenju = document.createElement("img");
                card.appendChild(addImgSenju);

                if (element.images[0]) {
                    addImgSenju.src = element.images[0];
                    addImgSenju.width = 200;

                } else {
                    addImgSenju.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgSenju.width = 150;
                };

                const addNameSenju = document.createElement("button");
                card.appendChild(addNameSenju);
                addNameSenju.className = "decoButton"
                imageContainer.appendChild(card)
                addNameSenju.innerHTML = element.name;
                
                changeStyleButton()

                addNameSenju.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

