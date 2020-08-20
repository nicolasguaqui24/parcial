/* Formulario*/

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("asuntoo")
const mensaje = document.getElementById("mensajee")
const form = document.getElementById("form")
const parrafo = document.getElementById("errores")

form.addEventListener("submit", e => {
    e.preventDefault()
    let errores = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let nombreVal = /^[A-Z]+$/i
    parrafo.innerHTML = ""

    if (!nombreVal.test(nombre.value)) {
        errores += 'Ingreso no valido, se aceptan solo caracteres alfabeticos <br>'
        entrar = true;
    }
    if (nombre.value.length < 4) {
        errores += 'Ingreso no valido, su nombre es corto <br>'
        entrar = true;
    }
    if (nombre.value.length >= 30) {
        errores += 'Ingreso no valido, su nombre es largo <br>'
        entrar = true;
    }

    if (!regexEmail.test(email.value)) {
        errores += 'Ingreso no valido, El email no es valido <br>'
        entrar = true;
    }
    if (asunto.value.length > 20) {
        errores += 'Ingreso no valido, su asunto no debe ser mayor a 20 caracterez <br>'
        entrar = true;
    }
    if (mensaje.value.length < 10) {
        errores += 'Ingreso no valido, su mensaje es cort <br>'
        entrar = true;
    }
    if (mensaje.value.length > 20) {
        errores += 'Ingreso no valido, su mensaje es largo <br>'
        entrar = true;
    }


    if (entrar) {
        parrafo.innerHTML = errores
    } else {
        parrafo.innerHTML = "Formulario Enviado"
    }

})