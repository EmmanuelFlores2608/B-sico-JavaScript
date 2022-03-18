'use strict'

//Calculadora

var numero1 = parseFloat(prompt('Introduce el primer numero', 0))
var numero2 = parseFloat(prompt('Introduce el segundo numero', 0))

while(numero1 <=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = prompt('Introduce el primer numero', 0)
    numero2 = prompt('Introduce el segundo numero', 0)
}

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

document.write("El resultado de sumar " + numero1 + " + " + numero2 + " es: " + suma + "<br>");
console.log("El resultado de sumar " + numero1 + " + " + numero2 + " es: " + suma );
alert("El resultado de sumar " + numero1 + " + " + numero2 + " es: " + suma)

document.write("El resultado de restar " + numero1 + " - " + numero2 + " es: " + resta + "<br>");
console.log("El resultado de restar " + numero1 + " - " + numero2 + " es: " + resta);
alert("El resultado de restar " + numero1 + " - " + numero2 + " es: " + resta)

document.write("El resultado de multiplicar " + numero1 + " x " + numero2 + " es: " + multiplicacion + "<br>");
console.log("El resultado de multiplicar " + numero1 + " x " + numero2 + " es: " + multiplicacion);
alert("El resultado de multiplicar " + numero1 + " x " + numero2 + " es: " + multiplicacion);

document.write("El resultado de dividir " + numero1 + " / " + numero2 + " es: " + division + "<br>");
console.log("El resultado de dividir " + numero1 + " / " + numero2 + " es: " + division);
alert("El resultado de dividir " + numero1 + " / " + numero2 + " es: " + division)