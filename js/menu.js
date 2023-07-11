// FUNCÇÃO PARA ABRIR O MENU //
function abrirMenu() {
    let menuAberto = document.getElementById('menu');

    menuAberto.classList.toggle('hide');
}
// FUNÇÃO PARA MOVER O SISTEMA SOLAR PARA A DIREITA
function locomoverSs() {
    let locomover = document.getElementById('planets');

    locomover.classList.toggle('left')
}
// EVENTO PARA REALIZAR AS FUNÇÕES ASSIM QUE CLICAR NO BOTÃO //
let buttonMenu = document.getElementById('button');
buttonMenu.addEventListener("click", function() {
    abrirMenu();
    locomoverSs();
})

// FUNÇÃO DA ANIMAÇÃO DO BOTÃO // 
let animationButton = document.getElementById('button');
animationButton.addEventListener('click', function(){
    animationButton.classList.toggle('active');
})