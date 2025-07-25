async function akimichi() {
    
    hideButtonsClans();

    const akimichiTitle = document.createElement("h1");
    divContainer.appendChild(akimichiTitle);
    akimichiTitle.innerHTML = "Akimichi";

    const akimichiDescription = document.createElement("p");
    divContainer.appendChild(akimichiDescription);

    akimichiDescription.innerHTML = `Le Clan Akimichi (秋道一族, Akimichi Ichizoku) est un des grands clans de Konoha.[1] Ses membres sont capables
    de convertir rapidement les calories en chakra, qu'ils utilisent ensuite pour leurs techniques secrètes, telles le Décuplement et les autres
    variantes de jutsu d'agrandissement du corps. Ils ont eu quinze chefs, Chôza Akimichi en est le chef actuel. Chôji Akimichi est désigné pour 
    devenir le seizième chef.`;
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {

            if (element.personal?.clan === "Akimichi" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Akimichi"))) {

                const addImgAkimichi = document.createElement("img");
                divContainer.appendChild(addImgAkimichi);

                if (element.images[0]) {
                    addImgAkimichi.src = element.images[0];
                    addImgAkimichi.width = 200;

                } else {
                    addImgAkimichi.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAkimichi.width = 150;
                };

                const addNameAkimichi = document.createElement("button");
                divContainer.appendChild(addNameAkimichi);
                addNameAkimichi.innerHTML = element.name;

                addNameAkimichi.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

