'use strict'

//Mostrar todos los núneros impares entre dos números introducidos por el teclado.

var numero1 = parseFloat(prompt('Introduce el primer número(Inferior)'));
var numero2 = parseFloat(prompt('Introduce el segundo número(Superior)'));

document.write("<h1> De "+numero1+ " a "+numero2+ " estan estos números impares:</h1>")

while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0){
        var aux = numero1;
        document.write("El numero " + numero1 +" es impar<br>")        
        aux = aux+2;
    }
}