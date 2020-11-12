// Récupére l'id de la div
let divYear = document.getElementById('year');

// création de la boucle 
for (let year = 2020; year <= 2030; year++){
     
    // contenu de la div
    let content = divYear.innerHTML;

    // test

    if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)){

        // si l'année est bissectile = rouge
        divYear.innerHTML = content + '<div style="color: red">' + year + '</div>';
    }else {
         // si l'année est pas bissectile = noir 
         divYear.innerHTML = content + '<div style="color : black">' + year + '</div>';
    };   
}