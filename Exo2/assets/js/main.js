// Récupére l'id de la div
let divMultiple = document.getElementById('multiple');

// création de la boucle de 0 à 100
for (let multiple = 0; multiple <= 100; multiple++){
     
    // contenu de la div
    let content = divMultiple.innerHTML;

    // Récupére les multiples de 15 avec le modulo de i par 15
    let multi = i % 15;

    // module égale à 0 on affiche ' ... '
    if (multi == 0 && i != 0) {
        divMultiple.innerHTML = content + '<div>' + '...' + '</div>';
    }else {
         // sinon on affiche le nombre
         divMultiple.innerHTML = content + '<div>' + '...' + '</div>';
    };   
}