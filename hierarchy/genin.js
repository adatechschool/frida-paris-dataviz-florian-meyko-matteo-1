async function genin() {

    hideButtonsHierarchy();

    const geninTitle = document.createElement("h1");
    divContainer.appendChild(geninTitle);
    geninTitle.innerHTML = "Genin";

    const geninDescription = document.createElement("p");
    divContainer.appendChild(geninDescription);

    geninDescription.innerHTML = `Genin (下忍, signifiant littéralement : Bas Ninja) est le grade le plus bas des ninjas, mais aussi de ceux qui 
    affichent la plus grande différence de puissance. Lorsqu'ils deviennent genin, les ninjas commencent à contribuer à l'économie de leur village 
    en étant envoyés sur des missions pour lesquelles le village est payé. Ils sont généralement envoyés sur des missions de rang D, qui sont des 
    travaux manuels presque sans risque, ou, rarement, sur des missions de rang C, qui sont un cran au-dessus et commencent à frôler le vrai travail 
    de « ninja » avec une très faible possibilité de risque pour le ninja impliqué. Lorsque Konoha manquait de ninjas de haut niveau à cause de 
    l'invasion, le village dut occasionnellement envoyer des genin sur des missions de rang supérieur.<br><br>Les genins sont placés dans des unités 
    de quatre personnes, ou escouades, composées de trois genin et d'un jônin instructeur, afin d'apprendre le travail d'équipe et d'expérimenter la 
    
    vraie vie de ninja sous la supervision et la protection d'un shinobi d'élite. La composition de ces équipes est basée sur les compétences 
    individuelles des genin, de sorte qu'il y ait un équilibre entre les équipes. Par exemple, Naruto Uzumaki, qui obtint les notes les plus basses, 
    fut placé dans une équipe avec Sasuke Uchiwa et Sakura Haruno, qui obtinrent respectivement les notes les plus élevées et les meilleurs résultats 
    à l'examen écrit. En raison du fait que les genin sont les ninja de plus bas niveau, ils sont normalement assignés à des missions de rang D ou C 
    afin d'acquérir de l'expérience avant d'entreprendre des missions plus difficiles ou d'être promus au grade de chûnin, en réussissant les Examens 
    Chûnin, une série de tâches difficiles destinées à tester les compétences des genin afin de déterminer s'ils sont aptes à devenir chûnin ou non.`;


    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();


        data.characters.forEach(element => {

            if (

                (

                    element.rank?.ninjaRank?.["Part I"] === "Genin" ||
                    element.rank?.ninjaRank?.Gaiden === "Genin" ||
                    element.rank?.ninjaRank?.["Part II"] === "Genin" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Genin" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Genin"
                
                ) 
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )
            
            ) {

                const addImgGenin = document.createElement("img");
                divContainer.appendChild(addImgGenin);


                if (element.images[0]) {
                    addImgGenin.src = element.images[0];
                    addImgGenin.width = 200;

                } else {
                    addImgGenin.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgGenin.width = 150;
                };

                const addNameGenin = document.createElement("button");
                divContainer.appendChild(addNameGenin);
                addNameGenin.innerHTML = element.name;

                addNameGenin.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

