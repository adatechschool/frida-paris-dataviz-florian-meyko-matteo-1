async function senju() {

    hideButtonsClans();

    const senjuTitle = document.createElement("h1");
    divContainer.appendChild(senjuTitle);
    senjuTitle.innerHTML = "Senju";

    const senjuDescription = document.createElement("p");
    divContainer.appendChild(senjuDescription);

    senjuDescription.innerHTML = `Le clan Senju (千手一族, Senju Ichizoku) était l'un des clans les plus puissants de l'époque, qui avait pour chef, 
    le redoutable et unique utilisateur naturel du Mokuton, Hashirama Senju, qui devint plus tard, le premier Hokage. Ils avaient pour rivaux, 
    le clan Uchiwa dont leur chef, Madara Uchiwa, fut le plus grand et unique rival d'Hashirama Senju. Ils furent à l'origine de la création du village 
    caché des feuilles avec le clan Uchiwa. Il fut également révélé qu'ils auraient des liens de parenté éloignés avec le clan Uzumaki.`;
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {

            if (element.personal?.clan === "Senju" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Senju"))) {

                const addImgSenju = document.createElement("img");
                divContainer.appendChild(addImgSenju);

                if (element.images[0]) {
                    addImgSenju.src = element.images[0];
                    addImgSenju.width = 200;

                } else {
                    addImgSenju.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgSenju.width = 150;
                };

                const addNameSenju = document.createElement("button");
                divContainer.appendChild(addNameSenju);
                addNameSenju.innerHTML = element.name;

            };

        });
    };
};

