
function multiplicarArreglo(arreglo) {
    let min = arreglo[0]
    let max = arreglo[0]

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < min) {
            min = arreglo[i]
        }
        else if (arreglo[i] > max) {
            max = arreglo[i]
        }
    }
    console.log(min * max)
}


const lista = [4, 22, 7, 6.5]
multiplicarArreglo(lista)