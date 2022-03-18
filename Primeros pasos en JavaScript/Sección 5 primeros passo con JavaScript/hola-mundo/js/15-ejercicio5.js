'use strict'

//Todos los números divisores de un numero introducido.

var numero = parseFloat(prompt('Introduce el número'));

for(var i=1; i<=numero; i++){
    if(numero%i == 0){
        document.write("El numero " + i + " es divisor de " + numero + "<br>")
    }
}

