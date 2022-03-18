'use strict'

//Programa que pida dos números y que nos diga cual es mayor, menor o si son iguales

var numero1 = prompt('Introduce el primer numero', 0)
var numero2 = prompt('Introduce el segundo numero', 0)

while(numero1 <=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = prompt('Introduce el primer numero', 0)
    numero2 = prompt('Introduce el segundo numero', 0)
}

if(parseFloat(numero1)>parseFloat(numero2)){
    console.log("El numero mayor es " + numero1)
}
if(parseFloat(numero1)<parseFloat(numero2)){
    console.log("El numero mayor es " + numero2)
}
if(parseFloat(numero1)==parseFloat(numero2)){
    console.log("Ambos números son iguales")
}    