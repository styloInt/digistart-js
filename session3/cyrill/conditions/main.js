/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------
// 1. Créer une variable color1 qui contient la valeur "rouge"


var color1 = "red";

// 2. Créer une variable color2 qui contient la valeur "green"

var color2 = "green";

// 3. Comparez les deux variables en utilisant une condition (if) et des comparateurs (===, !==) :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "green", affichez "pomme" dans la console

function printColor(color) {

    if (color === color1) {
        console.log("fraise");
    }

else if (color === 'green'){
    console.log('pomme');
}
 }




// ------ TODO 2 ------
// Complétez l'exercice avancé 1 situé dans le dossier "exercice-avance-1"printColor("rouge");


printColor("red")
printColor("green");
printColor("bleu");