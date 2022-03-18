'use strict'

var num1 = [1,2,3];
var num2 = [4,5,6];

var conjunto = [num1, num2];

//console.log(conjunto);

//console.log(conjunto[0][0]);
//console.log(conjunto[1][0]);

//Añadir un elemento al array
//num2.push(7)
//console.log(num2);

//.pop elimina el último elemento del array

//Eliminiar un elemento determinado de un array

var numero = num2.indexOf(6);
if (numero > -1){
    num2.splice(numero, 1);
}
//console.log(num2);

var num_string = num1.join();
//console.log(num_string)

//.split(indentificador que usará para encontrar donde separar la cadena en array)

//Ordenar un array
    //.sort ordena por orden alfabético
    //.reverse ordena de manera inversa el array

for (let n in num1){
    document.write("<li>" + num1[n] + "</li>");
}

//Busquedas dentro de un array
var busqueda = num1.find(n => n == 1);
console.log(busqueda);

var busqueda = num1.findIndex(n => n == 1);
console.log(busqueda);

var precios = [10, 50, 90, 30];

//some busca en base a una condición concreta
var busqueda = precios.some(n => n >= 100);
console.log(busqueda);

