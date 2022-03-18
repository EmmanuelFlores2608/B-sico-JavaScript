'use strict'
//Document Object Model - DOM

        //Conseguir elementos con un ID en concreto
//Obtener el elemento mi caja completo
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
//console.log(caja);
//Obtener el código HTML dentro 
/*var caja = document.getElementById("micaja").innerHTML;
console.log(caja);*/
//Cambiar el valor dentro
caja.innerHTML = "Texto desde JS";

console.log(caja);
caja.style.background = "red";
caja.style.padding = "20px"
caja.style.color = "white"
        
        //Conseguir elementos por su etiqueta
var todosLosDivs =  document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
console.log(todosLosDivs);
console.log(contenidoEnTexto);

var secction = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p")
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);//append pone lo indicado después de la etiqueta y prepend lo pone antes de la etiqueta
        secction.appendChild(parrafo);
    }
}
secction.append(hr);

        //Conseguir elementos por su clase
var divRojos = document.getElementsByClassName('rojo');
console.log(divRojos);

var div;
for(div in divRojos){
    if(divRojos[div].className == 'rojo'){
        divRojos[div].style.background = "red";
    }
    
}