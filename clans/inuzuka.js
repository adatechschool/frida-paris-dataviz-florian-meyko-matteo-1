async function inuzuka() {
    
    hideButtonsClans();

    const inuzukabiTitle = document.createElement("h1");
    divContainer.appendChild(inuzukabiTitle);
    inuzukabiTitle.innerHTML = "Inuzuka";

    const inuzukaDescription = document.createElement("p");
    divContainer.appendChild(inuzukaDescription);

    inuzukaDescription.innerHTML = `Le Clan Inuzuka (犬塚一族, Inuzuka Ichizoku) est connu pour son affinité avec les chiens ninjas, avec qui 
    les membres du clan combattent. Un membre du clan Inuzuka se voit attribuer un (ou des) partenaire(s) canin(s) lorsqu'il atteint un certain âge. 
    Étant donné leur affinité naturelle avec les chiens, un Inuzuka et son partenaire animal s'attachent très vite jusqu'à devenir inséparables. 
    Les membres du clan possèdent des marques rouges en forme de crocs sur les joues, ainsi que des yeux et des canines pointues faisant ressortir 
    leur animalité. Les liens très forts entre un Inuzuka et son partenaire canin sont si forts qu'ils permettent de combiner et partager leur chakra, 
    permettant à l'humain de prendre une apparence plus sauvage et à l'animal de prendre une apparence plus humaine. Cette combinaison leur permet 
    d'exécuter des techniques en collaboration telles que les Crocs Lacérants.`
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {

            if (element.personal?.clan === "Inuzuka" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Inuzuka"))) {

                const addImgInuzuka = document.createElement("img");
                divContainer.appendChild(addImgInuzuka);

                if (element.images[0]) {
                    addImgInuzuka.src = element.images[0];
                    addImgInuzuka.width = 200;

                } else {
                    addImgInuzuka.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgInuzuka.width = 150;
                }

                const addNameInuzuka = document.createElement("button");
                divContainer.appendChild(addNameInuzuka);
                addNameInuzuka.innerHTML = element.name;

            }

        })
    }
}

