const nombreInput = prompt("Ingresa el nombre del alumnno");
const inglesInput = Number(prompt("Ingresa la calificación de Inglés"));
const programacionInput = Number(prompt("Ingresa la calificación de Programación"));
const htmlInput = Number(prompt("Ingresa la calificación de HTML"));

notas = {
    ingles: inglesInput,
    programacion: programacionInput,
    html: htmlInput

}

const promedio = (notas.ingles + notas.programacion + notas.html) / 3
console.log("El promedio de", nombreInput, "es:", promedio)