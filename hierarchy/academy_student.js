async function academyStudent() {

    hideButtonsHierarchy();

    const academyStudentTitle = document.createElement("h1");
    divContainer.appendChild(academyStudentTitle);
    academyStudentTitle.innerHTML = "Academy Student";

    const academyStudentDescription = document.createElement("p");
    divContainer.appendChild(academyStudentDescription);

    academyStudentDescription.innerHTML = `Les Étudiants de l'Académie sont formés aux bases du métier de shinobi (ninjutsu, taijutsu, genjutsu, 
    contrôle du chakra, tactiques…). Ils suivent aussi des cours classiques comme l'histoire ou les maths, et apprennent à travailler seuls et en 
    équipe. Bien qu'encore en formation, ils peuvent être mobilisés en cas d'urgence.<br><br>Pour devenir genin, ils doivent passer un examen final, 
    suivi d'un test d'évaluation par un jônin instructeur. Les critères de réussite varient selon les villages. Après la 4e Grande Guerre Shinobi, 
    le programme a été réformé pour inclure un cursus général plus rigoureux et des techniques plus avancées.`;


    const totalPages = 72;

    for (let page = 1; page <= totalPages; page++) {

        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();


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

                const addImgAcademyStudent = document.createElement("img");
                divContainer.appendChild(addImgAcademyStudent);


                if (element.images[0]) {
                    addImgAcademyStudent.src = element.images[0];
                    addImgAcademyStudent.width = 200;

                } else {
                    addImgAcademyStudent.src = "https://userscontent2.emaze.com/images/75a4793f-4676-455c-967d-ae7543a8c301/723ba67d-d3cb-42e0-a9a6-400d44758491image2.png";
                    addImgAcademyStudent.width = 150;
                };

                const addNameAcademyStudent = document.createElement("button");
                divContainer.appendChild(addNameAcademyStudent);
                addNameAcademyStudent.innerHTML = element.id;

            };

        });
    };
};

