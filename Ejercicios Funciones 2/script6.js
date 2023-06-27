function booleanoArray(a, b) {
    nuevoArray = [...a, ...b]
    const largo = nuevoArray.length
    if (largo >= 10) {
        console.log(true)
    }
    else {
        console.log(false)
    }

}

const lista1 = [2, 7, 4, 20]
const lista2 = [0, 5, 8, 144, 8666, 767777, 1, "hola mundo"]

booleanoArray(lista1, lista2)
