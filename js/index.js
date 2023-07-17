// Gerar os planetas do sistema solar //

// Selecionar o elemento em que vai gerar os planetas //
let selectDivMain = document.querySelector("#planets");

// Gerar "sol" //
let generateSun = document.createElement("div");
generateSun.id = "sun-index";
generateSun.className = "sun-index";

// Colocar o elemento "sol" dentro do elemento dos planetas //
selectDivMain.appendChild(generateSun);

// Array que lista todos os planetas disponiveis //
let listPlanets = [
    'mercury', // 0
    'venus', // 1
    'earth', // 2
    'mars', // 3
    'jupiter', // 4
    'saturn', // 5
    'uranus', // 6
    'neptune', // 7
];
// Gerar elementos ultilizando o array //
for (let i=0; i < listPlanets.length; i++){
    // Gerar orbita dos planetas //
    let generateOrbitPlanet = document.createElement('div');
    generateOrbitPlanet.id = listPlanets[i] + "-outline-1";
    generateOrbitPlanet.className = listPlanets[i] + "-outline-1";   

    // Gerar os planetas //
    let generatePlanet = document.createElement('div');
    generatePlanet.id = listPlanets[i] + "-planet";
    generatePlanet.className = listPlanets[i] + "-planet";

    // Colocar elemento filho //
    selectDivMain.appendChild(generateOrbitPlanet);   
    generateOrbitPlanet.appendChild(generatePlanet); 
}