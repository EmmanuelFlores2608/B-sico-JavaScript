'use strict'

//Switch

var edad = 18;
var imprime = "";

console.log(edad);

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres ya un aciano";
    break;    
    default:
        imprime = "Tu edad es neutra";
    break;    
}

console.log(imprime);