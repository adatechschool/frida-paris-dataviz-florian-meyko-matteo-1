async function sarutobi()
{
  hideButtonsClans()


    const sarutobiTitle = document.createElement("h1")
    divContainer.appendChild(sarutobiTitle)
    sarutobiTitle.innerHTML = "Sarutobi"

    const sarutobiDescription = document.createElement("p")
    divContainer.appendChild(sarutobiDescription)
    sarutobiDescription.innerHTML = "Il est à l'origine de plusieurs membres notables ayant accédé à des postes de hauts rangs, tel que Hokage, ou membre des Douze Ninjas Gardiens. Tous les membres connus semblent tous dévoués à la Volonté du Feu. Il fut l'un des premiers clans à rejoindre Konoha lors de sa création par les Senju et les Uchiwa."
   const totalPages = 72;

   for (let page = 1; page <= totalPages; page++) {
      let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
      let data = await response.json()

 
      data.characters.forEach(element => {

         if (element.personal?.clan === "Sarutobi" ||(Array.isArray(element.personal?.clan) && element.personal?.clan.includes("Sarutobi"))) {

            const addImgSarutobi = document.createElement("img")
            divContainer.appendChild(addImgSarutobi)
            if (element.images[0]) {
               addImgSarutobi.src = element.images[0]
               addImgSarutobi.width = 200;
                
              } else {
           
            addImgSarutobi.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png"
            addImgSarutobi.width = 150;
         }


            const addNameSarutobi = document.createElement("button")
            divContainer.appendChild(addNameSarutobi)
            addNameSarutobi.innerHTML = element.name

         }

      })

   }

}

