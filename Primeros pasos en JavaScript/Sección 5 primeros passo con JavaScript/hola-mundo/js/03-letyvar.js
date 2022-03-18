'use strict'

//Pruebas con Let y Var

//Prueba con Var
var numero = 40;
console.log(numero);
if(true){
    numero = 50
    console.log(numero);
}
console.log(numero);

//Prueba con let
var n = 40;
console.log(n);
if(true){
    let n = 50;
    console.log(n);
}
console.log(n);