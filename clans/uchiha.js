async function uchiha() {

    hideButtonsClans();

    const uchihaTitle = document.createElement("h1");
    divContainer.appendChild(uchihaTitle);
    uchihaTitle.innerHTML = "Uchiha";

    const uchihaDescription = document.createElement("p");
    divContainer.appendChild(uchihaDescription);

    uchihaDescription.innerHTML = `Le clan Uchiwa (うちは一族, Uchiha Ichizoku) était autrefois considéré comme le plus puissant clan de Konoha et un 
    des plus puissants du monde ninja (avec pour seul et unique rival le clan Senju avec lequel il fonda Konoha), mais il a maintenant presque disparu 
    après les événements du massacre du clan.`;
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement
       
        data.characters.forEach(element => {

            if (element.personal?.clan === "Uchiha" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Uchiha"))) {

                const addImgUchiha = document.createElement("img");
                divContainer.appendChild(addImgUchiha);

                if (element.images[0]) {
                    addImgUchiha.src = element.images[0];
                    addImgUchiha.width = 200;

                } else {
                    addImgUchiha.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgUchiha.width = 150;
                };

                const addNameUchiha = document.createElement("button");
                divContainer.appendChild(addNameUchiha);
                addNameUchiha.className = "decoButton"
                addNameUchiha.innerHTML = element.name;

                changeStyleButton()

                addNameUchiha.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

