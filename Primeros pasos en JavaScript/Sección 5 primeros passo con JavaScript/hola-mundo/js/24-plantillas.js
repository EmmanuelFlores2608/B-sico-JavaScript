'use strict'
var nombre = prompt ("Nombre: ");
var apellido = prompt ("Apelllidos: ");

var texto = `
    <h1>Hola</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);