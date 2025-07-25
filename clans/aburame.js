async function aburame() {
    
    hideButtonsClans();

    const aburamebiTitle = document.createElement("h1");
    divContainer.appendChild(aburamebiTitle);
    aburamebiTitle.innerHTML = "Aburame";

    const aburameDescription = document.createElement("p");
    divContainer.appendChild(aburameDescription);
    
    aburameDescription.innerHTML = `Le Clan Aburame (油女一族, Aburame Ichizoku) est un clan caractérisé par leur utilisation des insectes comme armes.
    Les insectes vivent en symbiose dans le corps du shinobi. À la naissance, les membres de ce clan sont offerts à une race particulière d'insectes
    appelés Kikaichû, le corps leur servant de nid. Les insectes peuvent entrer et sortir au moyen de diverses pores, apparemment en mangeant leur
    chemin à travers la peau. Ils se nourrissent de chakra comme une source de nourriture, les rendant tout à fait mortel. La relation entre le shinobi
    et les insectes est mutuellement bénéfique. Les insectes permettent de faire des techniques.`;
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();


        data.characters.forEach(element => {

            if (element.personal?.clan === "Aburame" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Aburame"))) {

                const addImgAburame = document.createElement("img");
                divContainer.appendChild(addImgAburame);

                if (element.images[0]) {
                    addImgAburame.src = element.images[0];
                    addImgAburame.width = 200;

                } else {
                    addImgAburame.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAburame.width = 150;
                }

                const addNameAburame = document.createElement("button");
                divContainer.appendChild(addNameAburame);
                addNameAburame.innerHTML = element.name;

            }

        })
    }
}
