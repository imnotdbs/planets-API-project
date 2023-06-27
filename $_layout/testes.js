var ring = document.getElementById('anel');
var quantidadeCamadas = 17;

for(i = 0; i < quantidadeCamadas; i++){
    var novaCamada = document.createElement("section");
    novaCamada.className = "ast";
    novaCamada.id = "ast" + i;
    ring.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("ast" + i);
    camadaSelecionada.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
}

//Mercurio
var button1 = document.getElementById("mercury");

button1.addEventListener("click", function() {
   var info = document.getElementById("info-mercury");
   info.classList.toggle("hide");
})

//Venus
var button8 = document.getElementById("venus");

button8.addEventListener("click", function() {
   var info = document.getElementById("info-venus");
   info.classList.toggle("hide");
})

//Terra
var button2 = document.getElementById("earth");

button2.addEventListener("click", function() {
   var info = document.getElementById("info-earth");
   info.classList.toggle("hide");
})

//Marte
var button3 = document.getElementById("mars");

button3.addEventListener("click", function() {
   var info = document.getElementById("info-mars");
   info.classList.toggle("hide");
})

//Jupiter
var button4 = document.getElementById("jupiter");

button4.addEventListener("click", function() {
   var info = document.getElementById("info-jupiter");
   info.classList.toggle("hide");
})

//Saturno
var button5 = document.getElementById("saturno");

button5.addEventListener("click", function() {
   var info = document.getElementById("info-saturno");
   info.classList.toggle("hide");
})

//Urano
var button6 = document.getElementById("urans");

button6.addEventListener("click", function() {
   var info = document.getElementById("info-urans");
   info.classList.toggle("hide");
})

//Netuno
var button7 = document.getElementById("neptune");

button7.addEventListener("click", function() {
   var info = document.getElementById("info-neptune");
   info.classList.toggle("hide");
})


