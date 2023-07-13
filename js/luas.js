////////////////////////
// LUAS DOS PLANETAS //
//////////////////////

// Função para gerar a representação da lua com o painel de informações da mesma. Ela so aparecerá dentro da representação da terra.//
function createMoonEarth() {
    // Gerando a representação da lua //
    let infoMoons = document.getElementById('earth-rep')
    let createMoonEarth = document.createElement("div");
    createMoonEarth.id = "moon-earth";
    createMoonEarth.className = "moon-earth";
    infoMoons.appendChild(createMoonEarth);

    // Gerando o painel de informações //
    let selectMoon = document.getElementById("moon-earth");
    let screenMoon = document.createElement("div");
    screenMoon.id = "info-moon"
    screenMoon.className = "hide";
    selectMoon.appendChild(screenMoon);

    // Função de click para abrir e fechar o painel de informações //
    let buttonMoon = document.querySelector("#moon-earth");
    buttonMoon.addEventListener("click", function() {
        let infoLua = document.getElementById('info-moon');
 
        infoLua.classList.toggle('hide');  

        require("Moon");
    })
}
