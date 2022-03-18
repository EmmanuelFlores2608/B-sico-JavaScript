'use strict'

window.addEventListener('load', function(){

    function intervalo(){
        var tiempo = setInterval(function(){//Se ejecuta cada cierto intervalo de tiempo
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize = "20px"
            }else{
                encabezado.style.fontSize = "50px"
            }
        }, 3000);
        return tiempo;
    }
    //Timers
    

    /*var tiempo = this.setTimeout(function(){//Se ejecuta solo una vez después de un tiempo indicado
        console.log("Timeout ejecutado");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize=="50px"){
            encabezado.style.fontSize = "20px"
        }else{
            encabezado.style.fontSize = "50px"
        }
    }, 3000);*/

    var tiempo = intervalo();
    var stop = document.querySelector('#stop');
    
    
    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener("click", function(){
        intervalo();
    });
});