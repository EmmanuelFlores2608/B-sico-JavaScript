'use strict'
//Condicional if

var numero1 = 8;
var numero2 = 7;

/*
if (numero1<numero2){ //Si numero 1 es menor que número 2
    console.log(numero1) //Se imprime número 1
}
else{ //De lo contrario
    console.log(numero2) //Se imprime número 2
}
*/

var edad  = 21;
var nombre = "Emmanuel Flores"

if(edad>=18){
    console.log(nombre + " tiene "+ edad +" años, es mayor de edad")
}
else{
    console.log(nombre + " tiene "+ edad + " años, es menor de edad");
}
//Operadores lógicos
// AND &&
//OR ||
//Negación !

var año = 2018
if(año != 2016){
    console.log("El año no es 2016")
}
//AND
if (año >= 2000 && año <= 2021){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}
//OR
if(año == 2008 || año == 2018){
    console.log("El año acaba en 8");
}
else{
    console.log("El año no acaba en 8")
}
