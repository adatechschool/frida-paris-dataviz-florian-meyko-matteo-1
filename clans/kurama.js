async function kurama() {

     document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center";

    hideButtonsClans();

    const kuramaTitle = document.createElement("h1");
    kuramaTitle.classList.add("title");
    kuramaTitle.innerHTML = "Kurama";
    imgButton.appendChild(kuramaTitle);

    const kuramaDescription = document.createElement("p");
    kuramaDescription.classList.add("description");
    kuramaDescription.innerHTML = `Le Clan Kurama (Kurama Ichizoku), seulement apparu dans l'anime, est un clan excellant dans les techniques 
    de genjutsu. Ce talent inné dans le genjutsu est dû à un kekkei genkai que le clan possède. Cependant, une fois toutes les quelques générations, 
    un membre du clan né avec un tel potentiel en genjutsu que ses illusions peuvent réellement produire des effets qui surviennent dans la réalité. 
    Le genjutsu est tellement puissant qu'il oblige le cerveau à faire dans la réalité tout ce qui arrive à la victime dans l'illusion, permettant 
    aux membres du clan de potentiellement tuer leurs opposants avec le genjutsu.`;
    imgButton.appendChild(kuramaDescription);

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

            if (element.personal?.clan === "Kurama" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Kurama"))) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgKurama = document.createElement("img");
                card.appendChild(addImgKurama);

                if (element.images[0]) {
                    addImgKurama.src = element.images[0];
                    addImgKurama.width = 200;

                } else {
                    addImgKurama.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgKurama.width = 150;
                };

                const addNameKurama = document.createElement("button");
                card.appendChild(addNameKurama);
                addNameKurama.className = "decoButton"
                imageContainer.appendChild(card)
                addNameKurama.innerHTML = element.name;

                changeStyleButton()

                addNameKurama.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

