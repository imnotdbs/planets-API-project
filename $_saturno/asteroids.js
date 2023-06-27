var ring = document.getElementById('anel');
var quantidadeCamadas = 17;

for(i = 0; i < quantidadeCamadas; i++){
    var novaCamada = document.createElement("div");
    novaCamada.className = "ast";
    novaCamada.id = "ast" + i;
    ring.appendChild(novaCamada);

    camadaSelecionada = document.getElementById("ast" + i);
    camadaSelecionada.style.transform = "translateZ(" + Math.sin(Math.PI/quantidadeCamadas * i) * 200 + "px) scale(" + Math.cos(Math.PI/quantidadeCamadas * i) + ")";
    
}
