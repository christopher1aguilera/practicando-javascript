

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





let fondo = 0

function myFunctionred() {
    fondo = document.getElementById("btn-1").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "red"
  }
  function myFunctionorange() {
    fondo = document.getElementById("btn-2").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "orange"
  }
  function myFunctionyellow() {
    fondo = document.getElementById("btn-3").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "yellow"
  }
  function myFunctiongreen() {
    fondo = document.getElementById("btn-4").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "green"
  }
  function myFunctionblue() {
    fondo = document.getElementById("btn-5").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "blue"
  }
  function myFunctionpurple() {
    fondo = document.getElementById("btn-6").getAttribute("onclick");
    document.getElementById("caja").style.backgroundColor = "purple"
  }