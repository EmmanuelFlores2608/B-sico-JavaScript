'use strict'

//Funciones anonimas, son funciones que no tienen nonbre

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    var multiplicar = numero1 + numero2;

    sumaYmuestra(sumar)
    sumaPorDos(sumar)

    return sumar;
}

sumame(5, 7, (dato) => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", dato *2);
});

//Funciones flecha se usan con una => y se elimina la palabra funcion y los parentesis si es que solo lleva un parametro