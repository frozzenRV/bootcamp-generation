

function sumaArreglo(lista) {
    longitud = lista.length
    contador = 0
    for (var i = 0; i < lista.length; i++) {
        contador = contador + lista[i]
    }
    console.log(contador + longitud)

}

sumaArreglo([10, 25, 3, 10])
