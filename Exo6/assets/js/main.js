let firstNumber = prompt('Entrez un premier chiffre entre 0 et 10');
let secondNumber = prompt('Entrez un deuxieme chiffre entre 0 et 10')

while (firstNumber > 1){
    document.write('<div>' + firstNumber / secondNumber + '</div>');
    firstNumber = firstNumber / secondNumber;
    
}