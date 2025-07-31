async function yamanaka() {

cancelLoading = false; // ✅ Relance autorisée

       historyStack.push(yamanaka);  // ← Historique ajouté
  clearAllContent()

    hideButtonsClans();

    hasEnteredSubPage = true;
    const backButton = document.getElementById("backButton");
    backButton.classList.remove("hidden");
    setTimeout(() => backButton.classList.add("show"), 10);

    const yamanakabiTitle = document.createElement("h1");
    yamanakabiTitle.classList.add("title");
    divContainer.appendChild(yamanakabiTitle);
    yamanakabiTitle.innerHTML = "Yamanaka";

    const yamanakaDescription = document.createElement("p");
    yamanakaDescription.classList.add("description");
    divContainer.appendChild(yamanakaDescription);

    yamanakaDescription.innerHTML = `Le Clan Yamanaka (Yamanaka Ichizoku) est une famille de ninjas de Konoha. Ils possèdent et dirigent
    un fleuriste dans le village de Konoha.`
    
    
    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (cancelLoading) return;
        //if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (element.personal?.clan === "Yamanaka" || (Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Yamanaka"))) {

                const addImgYamanaka = document.createElement("img");
                divContainer.appendChild(addImgYamanaka);

                if (element.images[0]) {
                    addImgYamanaka.src = element.images[0];
                    addImgYamanaka.width = 200;

                } else {
                    addImgYamanaka.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgYamanaka.width = 150;
                };

                const addNameYamanaka = document.createElement("button");
                divContainer.appendChild(addNameYamanaka);
                addNameYamanaka.className = "decoButton"
                addNameYamanaka.innerHTML = element.name;

                changeStyleButton()

                addNameYamanaka.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

