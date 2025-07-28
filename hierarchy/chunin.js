async function chunin() {
     document.body.style.backgroundImage = "url('images/fondkonohaneutre.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center center";

    hideButtonsHierarchy();

    const chuninTitle = document.createElement("h1");
    divContainer.appendChild(chuninTitle);
    chuninTitle.innerHTML = "Chūnin";

    const chuninDescription = document.createElement("p");
    divContainer.appendChild(chuninDescription);

    chuninDescription.innerHTML = `Les Chûnin (中忍, signifiant littéralement : Ninja Moyen, signification (Kana) : Ninja de moyenne classe) sont 
    des ninjas qui ont atteint un niveau de maturité et de capacité qui consiste principalement en des compétences de meneur d'hommes et des prouesses 
    tactiques. Les chûnin sont généralement envoyés en mission de rang C ou de rang B. Certains chûnin, comme Iruka Umino et Shino Aburame, deviennent 
    des professeurs de l'Académie.`;


    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (

                (

                    element.rank?.ninjaRank?.["Part I"] === "Chūnin" ||
                    element.rank?.ninjaRank?.Gaiden === "Chūnin" ||
                    element.rank?.ninjaRank?.["Part II"] === "Chūnin" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Chūnin" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Chūnin"
                
                ) 
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )
            
            ) {

                const addImgChunin = document.createElement("img");
                divContainer.appendChild(addImgChunin);


                if (element.images[0]) {
                    addImgChunin.src = element.images[0];
                    addImgChunin.width = 200;

                } else {
                    addImgChunin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgChunin.width = 150;
                };

                const addNameChunin = document.createElement("button");
                divContainer.appendChild(addNameChunin);
                addNameChunin.className = "decoButton"
                addNameChunin.innerHTML = element.name;

                changeStyleButton()

                addNameChunin.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

