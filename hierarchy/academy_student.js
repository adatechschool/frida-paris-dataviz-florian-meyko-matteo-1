async function academyStudent() {

    cancelLoading = false;
    stopJonin = false;

    historyStack.push(jonin)

     document.body.style.backgroundImage = "url('images/fond_bleu_naruto2.png')";
        document.body.style.backgroundSize = "cover";         
        document.body.style.backgroundRepeat = "repeat";        
        document.body.style.backgroundPosition = "center center";

    hideButtonsHierarchy();

    const academyStudentTitle = document.createElement("h1");
    academyStudentTitle.classList.add("title");
    academyStudentTitle.innerHTML = "Academy Student";
    imgButton.appendChild(academyStudentTitle);

    const academyStudentDescription = document.createElement("p");
    academyStudentDescription.classList.add("description");
    academyStudentDescription.innerHTML = `Les Étudiants de l'Académie sont formés aux bases du métier de shinobi (ninjutsu, taijutsu, genjutsu, 
    contrôle du chakra, tactiques…). Ils suivent aussi des cours classiques comme l'histoire ou les maths, et apprennent à travailler seuls et en 
    équipe. Bien qu'encore en formation, ils peuvent être mobilisés en cas d'urgence.<br><br>Pour devenir genin, ils doivent passer un examen final, 
    suivi d'un test d'évaluation par un jônin instructeur. Les critères de réussite varient selon les villages. Après la 4e Grande Guerre Shinobi, 
    le programme a été réformé pour inclure un cursus général plus rigoureux et des techniques plus avancées.`;
    imgButton.appendChild(academyStudentDescription);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imgButton.appendChild(imageContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    imgButton.appendChild(buttonContainer);

    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();
        if (stopJonin) break; // ⛔️ Stoppe immédiatement le chargement

        data.characters.forEach(element => {

            if (

                (
                    
                    element.rank?.ninjaRank?.["Part I"] === "Academy Student" ||
                    element.rank?.ninjaRank?.Gaiden === "Academy Student" ||
                    element.rank?.ninjaRank?.["Part II"] === "Academy Student" ||
                    element.rank?.ninjaRank?.["Boruto Manga"] === "Academy Student" ||
                    element.rank?.ninjaRank?.["Blank Period"] === "Academy Student"
                
                )
                
                &&
                
                (
                    element.personal?.affiliation === "Konohagakure" ||
                    (Array.isArray(element.personal?.affiliation) && element.personal?.affiliation.includes("Konohagakure"))
                )
            
            ) {

                const card = document.createElement("div"); // ← créer une nouvelle carte à chaque fois !
                card.classList.add("card");

                const addImgAcademyStudent = document.createElement("img");
                card.appendChild(addImgAcademyStudent);


                if (element.images[0]) {
                    addImgAcademyStudent.src = element.images[0];
                    addImgAcademyStudent.width = 200;

                } else {
                    addImgAcademyStudent.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAcademyStudent.width = 150;
                };

                const addNameAcademyStudent = document.createElement("button");
                 card.appendChild(addNameAcademyStudent);
                addNameAcademyStudent.className = "decoButton"
                imageContainer.appendChild(card)
                addNameAcademyStudent.innerHTML = element.name;

                changeStyleButton()

                addNameAcademyStudent.addEventListener("click", () => {

                createDescription(element)
                    

                });
                card.addEventListener("click", () => {

                createDescription(element)
                    

                });

            };

        });
    };
};

