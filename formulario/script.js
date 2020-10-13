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
  let name = document.querySelector("#nombre").value
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let nameError = document.querySelector(".errorNombre")
  if (patter.test(name)) {
    nameError.style.display = "none"
    return true
  }
  else {
    document.querySelector(".errorNombre").innerHTML = "malo nombre"
}
}

function  validSubject() {
  let subject = document.querySelector("#asunto").value
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let subjectError = document.querySelector(".errorAsunto")
  if (patter.test(subject)) {
    subjectError.style.display = "none"
    return true
  }
  else {
    subjectError.innerText = "malo asunto"
}
}

function  validMessage() {
  let message = document.querySelector("#mensaje").value
  let patter = /^[A-Za-z\s\u00C0-\u00FF]+/g
  let messageError = document.querySelector(".errorMensaje")
  if (patter.test(message)) {
    messageError.style.display = "none"
    return true
  }
  else {
    messageError.innerText = "malo mensaje"
}
}

