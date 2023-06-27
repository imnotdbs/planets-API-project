var esfera = document.getElementById('esfera');
var quantidadeCamadas = 20;

for(i = 0; i < quantidadeCamadas; i++){
    var novaCamada = document.createElement("div");
    novaCamada.className = "camada";
    novaCamada.id = "camada" + i;
    esfera.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("camada" + i);
    camadaSelecionada.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
    
    var novaCamada = document.createElement("div");
    novaCamada.className = "camada";
    novaCamada.id = "camada2" + i;
    esfera.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("camada2" + i);
    camadaSelecionada.style.transform = "translateZ(-" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
}
