function sumaLista(lista) {
    contador = 0
    for (var i = 0; i < lista.length; i++)
        contador = contador + lista[i]
    console.log(contador)
}


// aquí ingresar la lista que se quiera
lista2 = [2, 4, 5, 1, 2]
sumaLista(lista2)
