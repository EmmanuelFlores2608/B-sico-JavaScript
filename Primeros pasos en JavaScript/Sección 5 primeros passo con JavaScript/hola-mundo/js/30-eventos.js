'use strict'

function cambiarColor(){
    var bg = boton.style.background;
    if( bg == "red"){
        boton.style.background = "green";

    }else{
        boton.style.background = "red";
    }
}

window.addEventListener('load', function(){
    var boton = document.querySelector("#boton")
    boton.addEventListener('click', function(){//Al dar click
        cambiarColor();
    });

    boton.addEventListener('mouseover', function(){//Al terner el mouse sobre algo
        boton.style.background = "#ccc";
    });
    boton.addEventListener('mouseout', function(){//Cuando el mouse sale de algo
        boton.style.background = "white";
    });
    //Focus
    var input = document.querySelector("#campoNombre");//Entras dentro de un elemento
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    });

    //Blur
    input.addEventListener('blur', function(){//Cuando sales de ese elemento
        console.log("Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', function(){//Presionando tecla
        console.log("Pulsando esta tecla: ", String.fromCharCode(event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress', function(){//Tecla pulsada
        console.log("Tecla pulsada: ", String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keypress', function(){//Tecla soltada
        console.log("Tecla soltada: ", String.fromCharCode(event.keyCode));
    });
});

