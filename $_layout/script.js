var ring = document.getElementById('ring-saturn');
var quantidadeCamadas = 17;

for(i = 0; i < quantidadeCamadas; i++){
    var novaCamada = document.createElement("section");
    novaCamada.className = "ast";
    novaCamada.id = "ast" + i;
    ring.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("ast" + i);
    camadaSelecionada.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
}




var zoomElement = document.querySelector("#mercury");
let $zoom1 = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${($zoom1 -= 0.06)})`
    } else {
        zoomElement.style.transform = `scale(${($zoom1 += 0.06)})`
    }
})










//Mercurio
var button1 = document.getElementById("mercury-botton");

button1.addEventListener("click", function() {
   var info = document.getElementById("mercury");
   info.classList.toggle("hide");
})

//Venus
var button8 = document.getElementById("venus-botton");

button8.addEventListener("click", function() {
   var info = document.getElementById("venus");
   info.classList.toggle("hide");
})

//Terra
var button2 = document.getElementById("earth-botton");

button2.addEventListener("click", function() {
   var info = document.getElementById("earth");
   info.classList.toggle("hide");
})

//Marte
var button3 = document.getElementById("mars-botton");

button3.addEventListener("click", function() {
   var info = document.getElementById("mars");
   info.classList.toggle("hide");
})

//Jupiter
var button4 = document.getElementById("jupiter-botton");

button4.addEventListener("click", function() {
   var info = document.getElementById("jupiter");
   info.classList.toggle("hide");
})

//Saturno
var button5 = document.getElementById("saturn-botton");

button5.addEventListener("click", function() {
   var info = document.getElementById("saturn");
   info.classList.toggle("hide");
})

//Urano
var button6 = document.getElementById("urans-botton");

button6.addEventListener("click", function() {
   var info = document.getElementById("urans");
   info.classList.toggle("hide");
})

//Netuno
var button7 = document.getElementById("neptune-botton");

button7.addEventListener("click", function() {
   var info = document.getElementById("neptune");
   info.classList.toggle("hide");
})


