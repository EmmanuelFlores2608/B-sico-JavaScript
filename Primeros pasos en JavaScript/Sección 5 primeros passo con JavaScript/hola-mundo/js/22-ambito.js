'use strict'

var texto = "Hola, mundo. Soy una variable global"
var numero = 12

function holaMundo(texto){
    var hola_mundo = "Hola, mundo. Soy una variable local"
    console.log(texto);
    console.log(numero.toString())
    console.log(hola_mundo);
}

holaMundo(texto)
//console.log(hola_mundo);