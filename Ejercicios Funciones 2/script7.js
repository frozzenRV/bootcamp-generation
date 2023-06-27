function funcionArray(a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i] = 2 * a[i]
    }

    for (let i = 0; i < b.length; i++) {
        b[i] = 2 * b[i]
    }

    const nuevoArray = [...a, ...b]
    console.log(nuevoArray)

}

lista1 = [2, 5, 2]
lista2 = [1, 5, 3]
funcionArray(lista1, lista2)