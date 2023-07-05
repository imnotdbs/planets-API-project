function abrirMenu() {
    let menuAberto = document.getElementById('menu');

    menuAberto.classList.toggle('hide');
}function locomoverSs() {
    let locomover = document.getElementById('planets');

    locomover.classList.toggle('left')
}
let buttonMenu = document.getElementById('button');
buttonMenu.addEventListener("click", function() {
    abrirMenu();
    locomoverSs();
})

// animação botão // 

let animationButton = document.getElementById('button');
animationButton.addEventListener('click', function(){
    animationButton.classList.toggle('active');
})