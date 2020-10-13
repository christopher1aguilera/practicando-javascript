let red = document.getElementById("btn-1");
let orange = document.getElementById("btn-2");
let yellow = document.getElementById("btn-3");
let green = document.getElementById("btn-4");
let blue = document.getElementById("btn-5");
let purple = document.getElementById("btn-6");
red.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#e53e3e"
})
orange.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#dd6b20"
})
yellow.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#faf089"
})
green.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#48bb78"
})
blue.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#81e6d9"
})
purple.addEventListener("click", function() {
    document.getElementById("caja").style.backgroundColor = "#d53f8c"
})