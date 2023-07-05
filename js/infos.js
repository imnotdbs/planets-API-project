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

// Esconder o botão da tela principal //
function hideMenuButton(){
   var hideMenuButton = document.getElementById("button");

   hideMenuButton.remove()
}

function appearBack(){
   let appearBack = document.getElementById ("info-planets");
   let createBack = document.createElement("div");
   createBack.id = "back";
   createBack.className = "back";
   appearBack.appendChild(createBack);
}
function back() {
   let back = document.getElementById("back")
   back.addEventListener("click", function(){
      window.location.reload();
   })
}
// Sol //
function appearSun() {
   var appearSun = document.getElementById("sun");
   
   appearSun.classList.toggle("hide");
}function hideSun(){
   var hideSun = document.getElementById("planets");

   hideSun.classList.toggle("hide");
}
var buttonSun = document.getElementById("sun-index");
buttonSun.addEventListener("click", function() {
   hideSun();
   hideMenuButton();
   appearBack();
   back();
   require("Sun");
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
   hideMercury();
   hideMenuButton();
   appearBack();
   back();
   require("Mercury");
   setTimeout(() => appearMercury(), 200);
})

// Venus //
function appearVenus() {
   var appearVenus = document.getElementById("venus");
   
   appearVenus.classList.toggle("hide");
}
function hideVenus(){
   var hideVenus = document.getElementById("planets");

   hideVenus.classList.toggle("hide");
}
var buttonVenus = document.getElementById("venus-planet");
buttonVenus.addEventListener("click", function() {
   hideVenus();
   hideMenuButton();
   appearBack();
   back();
   require("Venus");
   setTimeout(() => appearVenus(), 200);
})

// Terra //
function appearEarth() {
   var appearEarth = document.getElementById("earth");
   
   appearEarth.classList.toggle("hide");
}
function hideEarth(){
   var hideEarth = document.getElementById("planets");

   hideEarth.classList.toggle("hide");
}
var buttonEarth = document.getElementById("earth-planet");
buttonEarth.addEventListener("click", function() {
   hideEarth();
   hideMenuButton();
   appearBack();
   back();
   require("Earth");
   setTimeout(() => appearEarth(), 200);
})

// Marte //
function appearMars() {
   var appearMars = document.getElementById("mars");
   
   appearMars.classList.toggle("hide");
}
function hideMars(){
   var hideMars = document.getElementById("planets");

   hideMars.classList.toggle("hide");
}
var buttonMars = document.getElementById("mars-planet");
buttonMars.addEventListener("click", function() {
   hideMars();
   hideMenuButton();
   appearBack();
   back();
   require("Mars");
   setTimeout(() => appearMars(), 200);
})


// Jupiter //
function appearJupiter() {
   var appearJupiter = document.getElementById("jupiter");
   
   appearJupiter.classList.toggle("hide");
}
function hideJupiter(){
   var hideJupiter = document.getElementById("planets");

   hideJupiter.classList.toggle("hide");
}
var buttonJupiter = document.getElementById("jupiter-planet");
buttonJupiter.addEventListener("click", function() {
   hideJupiter();
   hideMenuButton();
   appearBack();
   back();
   require("Jupiter");
   setTimeout(() => appearJupiter(), 200);
})


// Saturno //
function appearSaturn() {
   var appearSaturn = document.getElementById("saturn");
   
   appearSaturn.classList.toggle("hide");
}
function hideSaturn(){
   var hideSaturn = document.getElementById("planets");

   hideSaturn.classList.toggle("hide");
}
var buttonSaturn = document.getElementById("saturn-planet");
buttonSaturn.addEventListener("click", function() {
   hideSaturn();
   hideMenuButton();
   appearBack();
   back();
   require("Saturn");
   setTimeout(() => appearSaturn(), 200);
})

// Urano //
function appearUrans() {
   var appearUrans = document.getElementById("urans");
   
   appearUrans.classList.toggle("hide");
}
function hideUrans(){
   var hideUrans = document.getElementById("planets");

   hideUrans.classList.toggle("hide");
}
var buttonUrans = document.getElementById("urans-planet");
buttonUrans.addEventListener("click", function() {
   hideUrans();
   hideMenuButton();
   appearBack();
   back();
   require("Uranus");
   setTimeout(() => appearUrans(), 200);
})

// Netuno //
function appearNeptune() {
   var appearNeptune = document.getElementById("neptune");
   
   appearNeptune.classList.toggle("hide");
}
function hideNeptune(){
   var hideNeptune = document.getElementById("planets");

   hideNeptune.classList.toggle("hide");
}
var buttonNeptune = document.getElementById("neptune-planet");
buttonNeptune.addEventListener("click", function() {
   hideNeptune();
   hideMenuButton();
   appearBack();
   back();
   require("Neptune");
   setTimeout(() => appearNeptune(), 200);
})