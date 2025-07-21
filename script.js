async function naruto() {
    const totalPages = 72; // ou choisis une autre valeur
    for (let page = 1; page <= totalPages; page++) {
        let response = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}`);
        let data = await response.json();

        data.characters.forEach(element => {
        if(element.name === "Black Shadow")
        {
            // console.log(`[Page ${page}] ${element.name} ${element.images} `);
            console.log(element)
        }
        });
    }
}

naruto();