//1
const contenedor1 = document.getElementById("container")
console.log(contenedor1)

//2
const contenedor2 = document.querySelector("#container")
console.log(contenedor2)

//3
const claseSecond = document.getElementsByClassName("second")
console.log(claseSecond)

//4
const elementoOl = document.getElementsByTagName("ol")[0]
const claseThird = elementoOl.getElementsByClassName("third")[0]
console.log(claseThird)

//5
const contenedor3 = document.getElementById("container")
const texto = document.createTextNode("¡Hola!")
contenedor3.appendChild(texto)

//6
const divFooter = document.querySelector("div.footer")
divFooter.classList.add("principal")

//7
divFooter.classList.remove("principal")

//8
const elementoLi = document.createElement("li")

//9
elementoLi.textContent = "cuatro"

//10
const listaUl = document.querySelector("ul")
listaUl.appendChild(elementoLi)