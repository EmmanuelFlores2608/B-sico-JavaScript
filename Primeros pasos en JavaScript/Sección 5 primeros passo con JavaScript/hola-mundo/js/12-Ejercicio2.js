//Utilizando un bucle, mostrar la suma y la media de los números introducidos.
//Deba de pedir numeros y muestra el resultado cuando se inserta un número negativo 

var suma = 0;
var contador = 0;
var meida;

do{
    var numero = parseFloat(prompt('Introduce números hasta que metas uno negativo.'));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero >= 0){
        suma = suma + numero;
        contador ++
    }
}while(numero >= 0);
media = suma/contador;

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + media);