const formulario = document.querySelector("#form1")
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")


function getFormvalue() {
    event.preventDefault()
    console.log(nombre.value)
    console.log(apellido.value)

}