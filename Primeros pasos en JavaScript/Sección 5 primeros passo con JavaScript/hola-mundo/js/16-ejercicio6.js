'use strict'
//Numero que nos diga si es par o impar

var numero = parseFloat(prompt('Introduce el número', 0));
while(numero <=0 || isNaN(numero)){
    numero = prompt('Introduce el número', 0);
}
if(numero%2 == 0){
    document.write("El numero " + numero + " es par.")
}
else{
    document.write("El numero " + numero + " es impar.")
}