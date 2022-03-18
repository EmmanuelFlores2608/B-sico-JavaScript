'use strict'

//Tabla de multiplicar de un número introducido en pantalla

var numero = parseFloat(prompt('Introduce el número', 0));
while(isNaN(numero)){
    var numero = parseFloat(prompt('Introduce el número', 0));
}

for(var i=1; i<=10; i++){
    document.write(i+ " x " +numero+ " = " + i * numero + "<br>");
}

for(var j=1;j<=10;j++){
    document.write("<br>")
    for(var i=1; i<=10; i++){
        document.write(i+ " x " +j+ " = " + i * j + "<br>");
    }
    
}