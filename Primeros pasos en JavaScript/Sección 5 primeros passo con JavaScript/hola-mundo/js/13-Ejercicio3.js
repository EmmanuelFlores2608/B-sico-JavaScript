'use strict'
//Hacer un programa que nos muestre todos los números que hay entre dos números

var numero1 = parseFloat(prompt('Introduce el primer número(Inferior)'));
var numero2 = parseFloat(prompt('Introduce el segundo número(Superior)'));

document.write("<h1> De "+numero1+ " a "+numero2+ " estan estos números:</h1>")


for(var i = numero1; i<=numero2; i++){
    document.write(i+"<br>")
}