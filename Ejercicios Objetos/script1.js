const nombreInput = prompt("Cual es tu nombre");
const apellidoInput = prompt("Cual es tu apellido");
const emailInput = prompt("Cual es tu email");
const direccionInput = prompt("Cual es tu direccion");

datos = {
    nombre: nombreInput,
    apellido: apellidoInput,
    email: emailInput,
    direccion: direccionInput
}

console.log(Object.values(datos))

