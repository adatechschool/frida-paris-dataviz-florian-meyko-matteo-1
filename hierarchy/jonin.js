async function jonin() {

    document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center center";
    hideButtonsHierarchy();

    const joninTitle = document.createElement("h1");
    joninTitle.classList.add("title");
    divContainer.appendChild(joninTitle);
    // joninTitle.style.fontFamily= "Ace2";
    joninTitle.innerHTML = "Jōnin";

    const joninDescription = document.createElement("p");
    joninDescription.classList.add("description");
    divContainer.appendChild(joninDescription);

    joninDescription.innerHTML = `Les Jônin sont généralement des shinobi très expérimentés et très compétents qui servent de capitaines 
    militaires, dont les capacités sont considérées comme surhumaines. Les jônin sont généralement capables d'utiliser au moins deux types de 
    chakra élémentaires.Il n'est pas rare que les jônin partent seuls en mission. Ils sont souvent envoyés sur des missions de rang A, et s'ils 
    sont suffisamment expérimentés, des missions de rang S également (qui sont considérées comme les plus difficiles).`;


    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {
       
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (

                (

                    element.rank?.ninjaRank?.["Part I"] === "Jōnin" ||
                    element.rank?.ninjaRank?.Gaiden === "Jōnin" ||
                    element.rank?.ninjaRank?.["Part II"] === "Jōnin" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Jōnin" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Jōnin"
                
                ) 
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )
            
            ) {

                const addImgJonin = document.createElement("img");
                divContainer.appendChild(addImgJonin);


                if (element.images[0]) {
                    addImgJonin.src = element.images[0];
                    addImgJonin.width = 200;

                } else {

                    addImgJonin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgJonin.width = 150;
                };

                if (element.name === "Jiraiya") {
                    addImgJonin.src = "images/Jiraiya.PNG";
                    addImgJonin.width = 150;
                };
                
                const addNameJonin = document.createElement("button");
                divContainer.appendChild(addNameJonin);
                addNameJonin.className = "decoButton"
                addNameJonin.innerHTML = element.name;

                changeStyleButton()

                addNameJonin.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

