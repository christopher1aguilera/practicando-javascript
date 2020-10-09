let form = document.getElementById("formulario")
form.addEventListener("submit", function(event) {
  event.preventDefault()
  if (validName() && validSubject() && validMessage()){
    alert("exito")
  }
  else {
    return false
  }
})
function  validName() {
  let name = document.getElementById("nombre").value
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let nameError = document.getElementsByClassName("errorNombre")[0]
  if (pattern.test(name)) {
    nameError = ""
    return true
  }
  else {
    nameError.innerText = "malo nombre"
}
}

function  validSubject() {
  let asunto = document.getElementById("asunto")
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let subjectError = document.getElementsByClassName("errorAsunto")
  if (pattern.test(subject)) {
    subjectError = ""
    return true
  }
  else {
    subjectError.innerText = "malo asunto"
}
}

function  validMessage() {
  let message = document.getElementById("mensaje")
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let messageError = document.getElementsByClassName("errorMensaje")
  if (pattern.test(message)) {
    messageError = ""
    return true
  }
  else {
    messageError.innerText = "malo mensaje"
}
}

