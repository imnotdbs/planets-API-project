//////////////////////////////////
// TELA DE CARREGAMENTO DA API //
////////////////////////////////

// FUNÇÃO PARA APARECER A TELA DE CARREGAMENTO //
function showLoading(){

    // Gerando as estrelas em movimento //
    const star = document.querySelector(".animation-stars");

    setInterval(() => {
    
        let x = Math.floor(Math.random() * window.innerWidth);
        let heigth = Math.floor(Math.random() * 50);
        let width = 2 + "px";
        let duration = Math.floor(Math.random() * 2);
    
        const stor = document.createElement('div');
        stor.style.position = "absolute";
        stor.style.left = x + "px";
        stor.style.height = 100 + heigth + "px";
        stor.style.width = width;
        stor.style.animation = "starfall linear infinite"
        stor.style.animationDuration = duration + "s";
        stor.style.background = "rgba(255, 255, 255, 0.5)";
        stor.classList.add("star");
    
        star.appendChild(stor);
    }, 13);

    // Revelando a tela de carregamento //
    const rocket = document.querySelector(".loadingScreen");
    rocket.classList.toggle("hide")

    const fundo = document.querySelector(".fundo");
    fundo.classList.toggle("hide") 

    const info = document.querySelector("#info-planets");
    info.classList.toggle("hide");

    const text = document.querySelector(".text-loading");
    text.classList.toggle("hide");
}
// FUNÇÃO PARA SUMIR COM A TELA DE CARREGAMENTO APÓS O TEMPO ESPECIFICADO (Tempo de geração da API) //
function hideLoading(){
    var loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }
    var fundos = document.getElementsByClassName("fundo");
    if(fundos.length){
        fundos[0].remove();
    }
    const info = document.querySelector("#info-planets")
    info.classList.toggle("hide")
}