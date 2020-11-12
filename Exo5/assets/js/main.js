let firstNumber = prompt('Entrez un premier chiffre entre 0 et 10');
let secondNumber = prompt('Entrez un deuxieme chiffre entre 0 et 10')

while (secondNumber < 250){
    document.write('<div>' + firstNumber * secondNumber + '</div>');
    secondNumber = firstNumber * secondNumber;
}