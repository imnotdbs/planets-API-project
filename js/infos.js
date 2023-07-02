// Aneis de saturno index //
var ring = document.getElementById('ring-saturn');
var quantidadeCamadas = 5;
for(i = 0; i < quantidadeCamadas; i++){
    var novaCamada = document.createElement("section");
    novaCamada.className = "ast-planet";
    novaCamada.id = "ast-planet" + i;
    ring.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("ast-planet" + i);
    camadaSelecionada.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
}
// Aneis de Saturno Info //
var ringRep = document.getElementById('ring-saturn-rep');
var quantidadeCamadasRep = 17;
for(i = 0; i < quantidadeCamadasRep; i++){
    var novaCamadaRep = document.createElement("section");
    novaCamadaRep.className = "ast-rep";
    novaCamadaRep.id = "ast-rep" + i;
    ringRep.appendChild(novaCamadaRep);

    camadaSelecionadaRep = document.getElementById("ast-rep" + i);
    camadaSelecionadaRep.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadasRep * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadasRep * i) + ")";
}

// Sol //
function appearSun() {
   var appearSun = document.getElementById("sun");
   
   appearSun.classList.toggle("hide");
}function hideSun(){
   var hideMercury = document.getElementById("planets");

   hideMercury.classList.toggle("hide");
}
var buttonSun = document.getElementById("sun-index");
buttonSun.addEventListener("click", function() {
   showLoading();
   hideMercury();
   setTimeout(() => appearSun(), 200);
})



// Mercurio //
function appearMercury() {
   var appearMercury = document.getElementById("mercury");
   
   appearMercury.classList.toggle("hide");
}
function hideMercury(){
   var hideMercury = document.getElementById("planets");

   hideMercury.classList.toggle("hide");
}

var buttonMercury = document.getElementById("mercury-planet");

buttonMercury.addEventListener("click", function() {
   showLoading();
   hideMercury();
   setTimeout(() => appearMercury(), 200);
})

// Venus //
var buttonVenus = document.getElementById("venus-planet");

buttonVenus.addEventListener("click", function() {
   var appearVenus = document.getElementById("venus");
   var hideVenus = document.getElementById("planets");
   
   appearVenus.classList.toggle("hide");
   hideVenus.classList.toggle("hide");
})

// Terra //
var buttonEarth = document.getElementById("earth-planet");

buttonEarth.addEventListener("click", function() {
   var appearEarth = document.getElementById("earth");
   var hideEarth = document.getElementById("planets");
   
   appearEarth.classList.toggle("hide");
   hideEarth.classList.toggle("hide");
})

// Terra //
var buttonMars = document.getElementById("mars-planet");

buttonMars.addEventListener("click", function() {
   var appearMars = document.getElementById("mars");
   var hideMars = document.getElementById("planets");
   
   appearMars.classList.toggle("hide");
   hideMars.classList.toggle("hide");
})

// Jupiter //
var buttonJupiter = document.getElementById("jupiter-planet");

buttonJupiter.addEventListener("click", function() {
   var appearJupiter = document.getElementById("jupiter");
   var hideJupiter = document.getElementById("planets");
   
   appearJupiter.classList.toggle("hide");
   hideJupiter.classList.toggle("hide");
})

// Saturno //
var buttonSaturn = document.getElementById("saturn-planet");

buttonSaturn.addEventListener("click", function() {
   var appearSaturn = document.getElementById("saturn");
   var hideSaturn = document.getElementById("planets");
   
   appearSaturn.classList.toggle("hide");
   hideSaturn.classList.toggle("hide");
})

// Urano //
var buttonUrans = document.getElementById("urans-planet");

buttonUrans.addEventListener("click", function() {
   var appearUrans = document.getElementById("urans");
   var hideUrans = document.getElementById("planets");
   
   appearUrans.classList.toggle("hide");
   hideUrans.classList.toggle("hide");
})

// Netuno //
var buttonNeptune = document.getElementById("neptune-planet");

buttonNeptune.addEventListener("click", function() {
   var appearNeptune = document.getElementById("neptune");
   var hideNeptune = document.getElementById("planets");
   
   appearNeptune.classList.toggle("hide");
   hideNeptune.classList.toggle("hide");
})