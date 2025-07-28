async function hyuga() {

    hideButtonsClans();

    const hyugaTitle = document.createElement("h1");
    divContainer.appendChild(hyugaTitle);
    hyugaTitle.innerHTML = "Hyūga";

    const hyugaDescription = document.createElement("p");
    divContainer.appendChild(hyugaDescription);
    
    hyugaDescription.innerHTML = `Le Clan Hyûga est l'un des plus anciens et puissants clans de Konoha. Tous ses membres possèdent le Byakugan, 
    un dôjutsu leur offrant une vision à 360°, la perception du système de chakra et la capacité de voir à travers les objets sur de longues distances.
    <br><br>Le clan est divisé en deux branches :<br><br>•	La Sôke (branche principale), qui dirige.<br>•	La Bunke (branche secondaire), 
    chargée de protéger la Sôke.<br><br>Les membres de la Bunke portent un sceau maudit permettant à la Sôke de les contrôler et de protéger les secrets 
    du Byakugan, même après leur mort.<br><br>Les Hyûga pratiquent le Jûken (Poing Souple), un art martial utilisant le Byakugan pour bloquer la 
    circulation du chakra chez l'adversaire.<br>Les techniques les plus puissantes sont normalement réservées à la Sôke, mais Neji Hyûga, membre 
    de la Bunke, les a apprises seul, devenant un prodigieux ninja.`;


    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {
        
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (element.personal?.clan === "Hyūga" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Hyūga"))) {

                const addImgHyuga = document.createElement("img");
                divContainer.appendChild(addImgHyuga);

                if (element.images[0]) {
                    addImgHyuga.src = element.images[0];
                    addImgHyuga.width = 200;

                } else {
                    addImgHyuga.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgHyuga.width = 150;
                };

                const addNameHyuga = document.createElement("button");
                divContainer.appendChild(addNameHyuga);
                addNameHyuga.className = "decoButton"
                addNameHyuga.innerHTML = element.name;

                changeStyleButton()

                addNameHyuga.addEventListener("click", () => {

                createDescription(element)
                    

                });
            };

        });
    };
};

