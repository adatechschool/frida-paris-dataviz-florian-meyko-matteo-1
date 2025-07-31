async function inuzuka() {
    cancelLoading = false;

       historyStack.push(inuzuka);  // ← Historique ajouté
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

    const inuzukabiTitle = document.createElement("h1");
    inuzukabiTitle.classList.add("title");
    inuzukabiTitle.innerHTML = "Inuzuka";
    imgButton.appendChild(inuzukabiTitle);

    const inuzukaDescription = document.createElement("p");
    inuzukaDescription.classList.add("description");
    divContainer.appendChild(inuzukaDescription);
    inuzukaDescription.innerHTML = `Le Clan Inuzuka (Inuzuka Ichizoku) est connu pour son affinité avec les chiens ninjas, avec qui 
    les membres du clan combattent. Un membre du clan Inuzuka se voit attribuer un (ou des) partenaire(s) canin(s) lorsqu'il atteint un certain âge. 
    Étant donné leur affinité naturelle avec les chiens, un Inuzuka et son partenaire animal s'attachent très vite jusqu'à devenir inséparables. 
    Les membres du clan possèdent des marques rouges en forme de crocs sur les joues, ainsi que des yeux et des canines pointues faisant ressortir 
    leur animalité. Les liens très forts entre un Inuzuka et son partenaire canin sont si forts qu'ils permettent de combiner et partager leur chakra, 
    permettant à l'humain de prendre une apparence plus sauvage et à l'animal de prendre une apparence plus humaine. Cette combinaison leur permet 
    d'exécuter des techniques en collaboration telles que les Crocs Lacérants.`
    imgButton.appendChild(inuzukaDescription);

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

            if (element.personal?.clan === "Inuzuka" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Inuzuka"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgInuzuka = document.createElement("img");
                card.appendChild(addImgInuzuka);

                if (element.images[0]) {
                    addImgInuzuka.src = element.images[0];
                    addImgInuzuka.width = 200;

                } else {
                    addImgInuzuka.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgInuzuka.width = 150;
                };

                const addNameInuzuka = document.createElement("button");
                card.appendChild(addNameInuzuka);
                addNameInuzuka.className = "decoButton"
                imageContainer.appendChild(card)
                addNameInuzuka.innerHTML = element.name;

                changeStyleButton()

                addNameInuzuka.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

