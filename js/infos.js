// GERAÇÃO DOS ANEIS DE SATURNO //
// Em seguida irei gerar camadas de bordas para representar os aneis de saturno na representação 3d //
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

// MENU TELA PRINCIPAL //
// Codigos para fazer aparecer e sumir o menu da tela do sistema solar //
function hideMenuButton(){
   var hideMenuButton = document.getElementById("button");
   var hideMenuScreen = document.getElementById("menu");

   hideMenuScreen.remove();
   hideMenuButton.remove();
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

////////////////////////
// PLANETAS E ASTROS //
///////////////////////

// SOL //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearSun() {
   var appearSun = document.getElementById("sun");
   
   appearSun.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideSun(){
   var hideSun = document.getElementById("planets");

   hideSun.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonSun = document.getElementById("sun-index");
buttonSun.addEventListener("click", async function() {
   hideSun();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Sun");
   appearSun();
})

// Mercurio //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearMercury() {
   var appearMercury = document.getElementById("mercury");
   
   appearMercury.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideMercury(){
   var hideMercury = document.getElementById("planets");

   hideMercury.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonMercury = document.getElementById("mercury-planet");
buttonMercury.addEventListener("click", async function() {
   hideMercury();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Mercury");
   appearMercury();
})

// Venus //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearVenus() {
   var appearVenus = document.getElementById("venus");
   
   appearVenus.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideVenus(){
   var hideVenus = document.getElementById("planets");

   hideVenus.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonVenus = document.getElementById("venus-planet");
buttonVenus.addEventListener("click", async function() {
   hideVenus();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Venus");
   appearVenus();
})

// Terra //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearEarth() {
   var appearEarth = document.getElementById("earth");
   
   appearEarth.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideEarth(){
   var hideEarth = document.getElementById("planets");

   hideEarth.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonEarth = document.getElementById("earth-planet");
buttonEarth.addEventListener("click", async function() {
   hideEarth();
   hideMenuButton();
   appearBack();
   back();
   createMoonEarth()
   showLoading();
   await require("Earth");
   appearEarth();
})

// Marte //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearMars() {
   var appearMars = document.getElementById("mars");
   
   appearMars.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideMars(){
   var hideMars = document.getElementById("planets");

   hideMars.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonMars = document.getElementById("mars-planet");
buttonMars.addEventListener("click", async function() {
   hideMars();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Mars");
   appearMars();
})


// Jupiter //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearJupiter() {
   var appearJupiter = document.getElementById("jupiter");
   
   appearJupiter.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideJupiter(){
   var hideJupiter = document.getElementById("planets");

   hideJupiter.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonJupiter = document.getElementById("jupiter-planet");
buttonJupiter.addEventListener("click", async function() {
   hideJupiter();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Jupiter");
   appearJupiter();
})


// Saturno //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearSaturn() {
   var appearSaturn = document.getElementById("saturn");
   
   appearSaturn.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideSaturn(){
   var hideSaturn = document.getElementById("planets");

   hideSaturn.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonSaturn = document.getElementById("saturn-planet");
buttonSaturn.addEventListener("click", async function() {
   hideSaturn();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Saturn");
   appearSaturn();
})

// Urano //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearUranus() {
   var appearUranus = document.getElementById("uranus");
   
   appearUranus.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideUranus(){
   var hideUranus = document.getElementById("planets");

   hideUranus.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonUranus = document.getElementById("uranus-planet");
buttonUranus.addEventListener("click", async function() {
   hideUranus();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Uranus");
   appearUranus();
})

// Netuno //
// Função para aprecer a tela aonde se encontra a API do Sol //
function appearNeptune() {
   var appearNeptune = document.getElementById("neptune");
   
   appearNeptune.classList.toggle("hide");
}
// Função para sumir o sistema solar //
function hideNeptune(){
   var hideNeptune = document.getElementById("planets");

   hideNeptune.classList.toggle("hide");
}
// Evento para fazer a troca de tela (Sistema solar x Informação do Planeta/Astro). O evento execulta as funções de retirar o sistema solar e colocar as informações do que foi esolhido, com uma tela de carregamento durante o carregamento da API//
var buttonNeptune = document.getElementById("neptune-planet");
buttonNeptune.addEventListener("click", async function() {
   hideNeptune();
   hideMenuButton();
   appearBack();
   back();
   showLoading();
   await require("Neptune");
   appearNeptune();
})