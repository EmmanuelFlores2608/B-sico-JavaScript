'use strict'

//Transformación de textos

var numero = 444;
var texto1 = "Bienvenido, papito";
var texto2 = "Testeando transformaciones"

/*
var dato = numero.toString();
    dato = texto1.toLocaleLowerCase();
    dato = texto2.toLocaleUpperCase();

console.log(dato);

//Calcular la longitud de un texto

var nombre = "Emmanuel Flores";
    nombre = ["Hola", "Mundo"];
console.log(nombre.length)

//Concatenar

//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+texto2)

console.log(textoTotal)

var busqueda = texto1.includes("papito")
console.log(busqueda)
*/

//indexOf busca en que posición de la cadena se encuentra una palabra
//lastIndexOf busca en que posición de la cadena se encuentra una palabra por última vez
//search busca una palabra en la cadena
//substr saca lo que hay después de una posición indicada y con una cantidad de caracteres indicada

//var busqueda = texto1.replace("papito", "papucho")//Remplaza una parte de texto por otra
//var busqueda = texto1.slice(12)//Separar el string desde cierto caracter
//var busqueda = texto1.split(" ");//Separa las palabras y las mete en un arreglo7
//charAt saca un caracter de una posición en escífico
//starsWith busca si la cadena empieza con una cadena insertada
//endsWith busca si la cadena termina con una cadena insertada
//includes busca si la cadena contiene lo que hay en una cadena insertada
//replace busca una palabra en la cadena y la reemplaza por otra
//slice corta la cadena apartir de una posición indicada
//split separa las palabras y las guarda en un array (se puede indicar que reconoce como método de separación)

var busqueda = texto1.trim(); //trim elimina los espacios en blanco en ambos extremos del string
console.log(busqueda)