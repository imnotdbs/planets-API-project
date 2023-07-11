async function require(planeta){
    var infoPlanet = document.querySelector(".info-" + planeta[0].toLowerCase()+planeta.substring(1));
    const objPlanetas = {
        "Mars":0,
        "Earth":1,
        "Jupiter":2,
        "Mercury":3,
        "Moon":4,
        "Neptune":5,
        "Saturn":6,
        "Sun":7,
        "Uranus":8,
        "Venus":9
    }

    const urlDoca = "https://sistemasolar.docapi.dev/planetas/obter";
    const responseDoca = await fetch(urlDoca, {
    method: 'POST',
    redirect: "follow",
    contentType: 'application/json'});
    const allPlanets = await responseDoca.json();
    var meuPlaneta = allPlanets.resposta[objPlanetas[planeta]];
    const pName = meuPlaneta.nome;
    const pDesc = meuPlaneta.descrição;
    const pAge = meuPlaneta.idade;

    console.log(typeof(pAge))
    console.log(allPlanets)
    var pgName = document.createElement("p");
    pgName.className = "name-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgName.appendChild(document.createTextNode(pName));
    infoPlanet.appendChild(pgName)

    var pgDesc = document.createElement("p");
    pgDesc.className = "desc-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgDesc.appendChild(document.createTextNode(pDesc));
    infoPlanet.appendChild(pgDesc)

    var pgAge = document.createElement("p");
    pgAge.className = "age-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgAge.appendChild(document.createTextNode(`Idade: ${pAge} bi`));
    console.log(pgAge)
    infoPlanet.appendChild(pgAge)
    
    await OpenDataAPI(planeta)

    }


async function OpenDataAPI(planeta) {
    var infoPlanet = document.querySelector(".info-" + planeta[0].toLowerCase()+ planeta.substring(1));
    const urlOD = 'https://api.le-systeme-solaire.net/rest/bodies/' +  planeta;
    
    const response = await fetch(urlOD, {
    
    method: 'GET',
    contentType: 'application/json'});
    const responseOD = await response.json();
    console.log(responseOD)
    const pDensity = responseOD.density;
    const pRadius = responseOD.equaRadius;
    const pAphelion = responseOD.aphelion;
    const pPerihelion = responseOD.perihelion;
    

    var pgDensity = document.createElement("p");
    pgDensity.className = "density-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgDensity.appendChild(document.createTextNode(`Densidade: ${pDensity} g/cm³`));
    infoPlanet.appendChild(pgDensity)

    var pgRadius = document.createElement("p");
    pgRadius.className = "radius-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgRadius.appendChild(document.createTextNode(`Raio: ${pRadius} Km`));
    infoPlanet.appendChild(pgRadius)
    
    var pgAphelion = document.createElement("p");
    pgAphelion.className = "aphelion-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgAphelion.appendChild(document.createTextNode(`Afélio: ${pAphelion} Km`));
    infoPlanet.appendChild(pgAphelion);

    var pgPerihelion = document.createElement("p");
    pgPerihelion.className = "paraphelion-" + planeta[0].toLowerCase() + planeta.substring(1);
    pgPerihelion.appendChild(document.createTextNode(`Periélio: ${pPerihelion} Km`));
    infoPlanet.appendChild(pgPerihelion)
    

    
    

console.log(typeof(responseOD.moons))

if (responseOD.isPlanet == true && (responseOD.moons != null)) {

responseOD.moons.map(async function(elemento){
    let urlMoon = elemento.rel
    let responseMoon = await fetch(urlMoon,{
        method: 'GET',
        contentType: 'application/json'});
    let infoLua = await responseMoon.json();
    console.log(infoLua)})
}
hideLoading();}