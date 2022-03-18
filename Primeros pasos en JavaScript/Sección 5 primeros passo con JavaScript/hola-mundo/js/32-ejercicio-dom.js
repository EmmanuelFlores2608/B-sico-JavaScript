'use strict'
window.addEventListener('load', function(){

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit")

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;

        if (nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            return false;
        }

        if (apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es válido");
            return false;
        }

        if (edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida");
            return false;
        }

        box_dashed.style.display = "block";
        var datos_usuario = [nombre, apellido, edad];
        var indice;
        for (indice  in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }
        
    });

});  