'use strict'
//Se usan corchetes y se separan los elementos por una ,

var nombres = ["Emmanuel", "Giselle"];

var conjunto = new Array ("Emmanuel", "Giselle", "Jesús");

console.log(nombres[1]);
    //length muestra la longitud del array
console.log(conjunto);

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?"));
if (elemento >= nombres.length){
    alert("Introduce el número menor que " + nombres.length);
    parseInt(prompt("¿Qué elemento del array quieres?"));
}
document.write(nombres[elemento]);
*/
/*
document.write("<h1>Nombres</h1>")
for (var i=0; i<conjunto.length; i++){
    document.write("<li>"+conjunto[i]+"</li>")
}
*/
//forEach contiene elemento / index /conjunto de datos
conjunto.forEach((conjunto)=>{
    document.write("<li>" + conjunto + "</li>");
});