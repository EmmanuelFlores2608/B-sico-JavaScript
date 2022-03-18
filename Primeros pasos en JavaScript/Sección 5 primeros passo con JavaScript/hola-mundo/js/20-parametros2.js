'use strict'

//Parametros REST y SPREAD
// ... para usar REST
// crear arreglo y a la hora de llamarlo usar ...

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas)
}

var frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas, "Sandia", "¨Pera", "Uva");