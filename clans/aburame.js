async function aburame() {
    cancelLoading = false;

        historyStack.push(aburame);  
       
  clearAllContent()
  
 
     document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center";

    hideButtonsClans();
    
    // hasEnteredSubPage = true;

    const backButton = document.getElementById("backButton");
    backButton.classList.remove("hidden");
    setTimeout(() => backButton.classList.add("show"), 10);

    const aburamebiTitle = document.createElement("h1");
    aburamebiTitle.classList.add("title");
    aburamebiTitle.innerHTML = "Aburame";
    imgButton.appendChild(aburamebiTitle);

    const aburameDescription = document.createElement("p");
    aburameDescription.classList.add("description");
    aburameDescription.innerHTML = `Le Clan Aburame (Aburame Ichizoku) est un clan caractérisé par leur utilisation des insectes comme armes.
    Les insectes vivent en symbiose dans le corps du shinobi. À la naissance, les membres de ce clan sont offerts à une race particulière d'insectes
    appelés Kikaichû, le corps leur servant de nid. Les insectes peuvent entrer et sortir au moyen de diverses pores, apparemment en mangeant leur
    chemin à travers la peau. Ils se nourrissent de chakra comme une source de nourriture, les rendant tout à fait mortel. La relation entre le shinobi
    et les insectes est mutuellement bénéfique. Les insectes permettent de faire des techniques.`;
    imgButton.appendChild(aburameDescription);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imgButton.appendChild(imageContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    imgButton.appendChild(buttonContainer);
 
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages && !cancelLoading; page++) {
        
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
         if (cancelLoading) return;
        //if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (element.personal?.clan === "Aburame" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Aburame"))) {
                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgAburame = document.createElement("img");
                card.appendChild(addImgAburame);

                if (element.images[0]) {
                    addImgAburame.src = element.images[0];
                    addImgAburame.width = 200;

                } else {
                    addImgAburame.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAburame.width = 150;
                };

                const addNameAburame = document.createElement("button");
                card.appendChild(addNameAburame);
                addNameAburame.className = "decoButton"
                imageContainer.appendChild(card)
                addNameAburame.innerHTML = element.name;
                
                changeStyleButton()
                
                addNameAburame.addEventListener("click", () => {

                createDescription(element)
                    

                }); 
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

