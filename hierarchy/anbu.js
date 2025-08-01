async function anbu() {

     cancelLoading = false;
    stopJonin = false;

    historyStack.push(jonin)
        document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center center";

    hideButtonsHierarchy();
      clearAllContent();
    imgButton.innerHTML = "";

    const titleAnbu = document.createElement("h1");
    titleAnbu.classList.add("title");
    titleAnbu.innerHTML = "Anbu";
    imgButton.appendChild(titleAnbu);

    const anbuDescription = document.createElement("p");
    anbuDescription.classList.add("description");
    anbuDescription.innerHTML = `Anbu (Français : Forces Spéciales, signifiant littéralement : Côté Obscur) est un mot-valise composé des mots 
    japonais « Ansatsu Senjutsu Tokushu Butai » (signifiant littéralement : Escouade Spéciale de Tactique et d'Assassinat). Il s'agit 
    d'une unité spéciale créée pour servir de garde personnelle aux Kage. Le mot Anbu sert à la fois à désigner l'unité et ses membres. Il n'existe 
    apparemment pas de rang au sein de cette unité où l'évolution hiérarchique semble se baser sur le mérite et l'expérience. Les personnes ayant 
    le commandement d'une équipe portent le titre de « chefs d'escouade » (Buntaichô), un poste tenu en haute estime.`;
     imgButton.appendChild(anbuDescription);

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

            if (

                (

                    element.rank?.ninjaRank?.["Part I"] === "Anbu" ||
                    element.rank?.ninjaRank?.Gaiden === "Anbu" ||
                    element.rank?.ninjaRank?.["Part II"] === "Anbu" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Anbu" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Anbu"

                ) 
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )

            ) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgAnbu = document.createElement("img");
                card.appendChild(addImgAnbu);


                if (element.images[0]) {
                    addImgAnbu.src = element.images[0];
                    addImgAnbu.width = 200;

                } else {
                    addImgAnbu.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAnbu.width = 150;
                };

                const addNameAnbu = document.createElement("button");
                card.appendChild(addNameAnbu);
                addNameAnbu.className = "decoButton"
                 imageContainer.appendChild(card)
                addNameAnbu.innerHTML = element.name;

                changeStyleButton()

                addNameAnbu.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

