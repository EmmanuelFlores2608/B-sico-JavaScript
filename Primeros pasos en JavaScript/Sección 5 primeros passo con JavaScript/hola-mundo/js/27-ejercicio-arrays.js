'use strict'
/*
1. Pida 6 números por pantalla y lo meta en un array
2. Mostrar el array en la consola y en el cuerpo de la página
3. Ordenarlo y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene un array
6. Búsqueda de un valor introducido por el usuario, que nos difa si lo encuentra y su indice
*/

var numeros = new Array(6)
//Pedir seis números
for(var i = 0; i<=5; i++){
    numeros[i]= parseInt(prompt("Introduce un número", 0));
}

function mostrar(num){
for (let n in num){
    document.write("<li>" + num[n] + "</li>");
}
document.write("<br>");
}
//Mostrar números en la consola
console.log(numeros);

//Mostrar números en el cuerpo
mostrar(numeros);

//Ordenar el array
numeros.sort(function(a,b){return a- b});
mostrar(numeros);

//Invertir el array
numeros.reverse();
mostrar(numeros);

//Mostrar la cantidad de elementos del array
var cantidad = numeros.length;
document.write(cantidad);

var buscado = parseInt(prompt("¿De que número desea conocer si se encuentra y su posición", 0));

//Si encuentra el número
var busqueda = numeros.find(n => n == buscado);

//Indice del número
var busqueda = numeros.findIndex(n => n == buscado);

if (busqueda !=-1) {
    document.write("<br>Encontrado<br>");
    document.write(busqueda)
}
else{
    document.write("<br>Número no encontrado")
}

