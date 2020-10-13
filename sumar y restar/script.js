let suma = 0
let resta = 0
let sumar = document.getElementById("btn-sumar")
let restar = document.getElementById("btn-restar")
    sumar.addEventListener("click", function () {
        let num1 = document.querySelector("#valor1").value
        let num2 = document.querySelector("#valor2").value
        suma = parseInt(num1) + parseInt(num2)
        document.querySelector(".resultado").innerHTML = suma
    })
    restar.addEventListener("click", function () {
        let num1 = document.querySelector("#valor1").value
        let num2 = document.querySelector("#valor2").value
        resta = parseInt(num1) - parseInt(num2)
        if (resta < 0) {
            document.querySelector(".resultado").innerHTML = "0"
        }
        else {
            resta = parseInt(num1) - parseInt(num2)
            document.querySelector(".resultado").innerHTML = resta
        }
    })