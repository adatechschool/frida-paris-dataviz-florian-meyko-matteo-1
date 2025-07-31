async function kurama() {
    cancelLoading = false;

       historyStack.push(kurama);  // ← Historique ajouté
  clearAllContent()

    hideButtonsClans();

    hasEnteredSubPage = true;
    const backButton = document.getElementById("backButton");
    backButton.classList.remove("hidden");
    setTimeout(() => backButton.classList.add("show"), 10);

    const kuramaTitle = document.createElement("h1");
    kuramaTitle.classList.add("title");
    divContainer.appendChild(kuramaTitle);
    kuramaTitle.innerHTML = "Kurama";

    const kuramaDescription = document.createElement("p");
    kuramaDescription.classList.add("description");
    divContainer.appendChild(kuramaDescription);

    kuramaDescription.innerHTML = `Le Clan Kurama (Kurama Ichizoku), seulement apparu dans l'anime, est un clan excellant dans les techniques 
    de genjutsu. Ce talent inné dans le genjutsu est dû à un kekkei genkai que le clan possède. Cependant, une fois toutes les quelques générations, 
    un membre du clan né avec un tel potentiel en genjutsu que ses illusions peuvent réellement produire des effets qui surviennent dans la réalité. 
    Le genjutsu est tellement puissant qu'il oblige le cerveau à faire dans la réalité tout ce qui arrive à la victime dans l'illusion, permettant 
    aux membres du clan de potentiellement tuer leurs opposants avec le genjutsu.`;
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
         if (cancelLoading) return;
        //if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement
        
        data.characters.forEach(element => {

            if (element.personal?.clan === "Kurama" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Kurama"))) {

                const addImgKurama = document.createElement("img");
                divContainer.appendChild(addImgKurama);

                if (element.images[0]) {
                    addImgKurama.src = element.images[0];
                    addImgKurama.width = 200;

                } else {
                    addImgKurama.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgKurama.width = 150;
                };

                const addNameKurama = document.createElement("button");
                divContainer.appendChild(addNameKurama);
                addNameKurama.className = "decoButton"
                addNameKurama.innerHTML = element.name;

                changeStyleButton()

                addNameKurama.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

