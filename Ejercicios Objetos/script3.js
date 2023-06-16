const precioInput = Number(prompt("Ingresa el precio original"));
const descuentoInput = Number(prompt("Ingresa la cantidad de descuento"));

neto = {
    precio: precioInput,
    descuento: descuentoInput
}

const total = (neto.precio - (neto.precio) * (neto.descuento / 100))

console.log("El precio final es:", total)