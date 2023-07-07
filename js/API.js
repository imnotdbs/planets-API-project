async function ninjaAPI(planeta){

    const urlNinja = 'https://api.api-ninjas.com/v1/planets?name=' + planeta;
    const response = await fetch(urlNinja, {
    method: 'GET',
    headers: { 'X-Api-Key': '+WS4qOLQFhAX1fGoTrdZDA==bn6tmDwvRZPbj6bf'},
    contentType: 'application/json'});
    
    const data = await response.json();
    data.map((post)=>{
        var pPeriodo = post.period;
        var pMassa = post.mass;
        var pTemperatura = post.temperature;
        var pRaio = post.radius;
        console.log(pRaio)
        paragrafoNinja(planeta)
        var periodp= document.querySelector(".period-" + planeta[0].toLowerCase()+planeta.substring(1))
        periodp.appendChild(document.createTextNode("Periodo: "+ pPeriodo));

        var massp = document.querySelector(".mass-" + planeta[0].toLowerCase()+planeta.substring(1))
        massp.appendChild(document.createTextNode("Massa: "+ pMassa));
        
        var tempp = document.querySelector(".temp-" + planeta[0].toLowerCase()+planeta.substring(1))
        tempp.appendChild(document.createTextNode("Temperatura: "+ pTemperatura));

        var radiusp = document.querySelector(".radius-" + planeta[0].toLowerCase()+planeta.substring(1))
        radiusp.appendChild(document.createTextNode("Raio: "+ pRaio));
        
        
        
        return pMassa,pTemperatura,pRaio, pPeriodo;
    })
}


function paragrafoNinja (planeta){
    var infoPlanet = document.querySelector(".info-" + planeta[0].toLowerCase()+planeta.substring(1));

    var tempp = document.createElement("p");
    tempp.className = "temp-" + planeta[0].toLowerCase() + planeta.substring(1);
   

    var radiusp = document.createElement("p");
    radiusp.className = "radius-" + planeta[0].toLowerCase() + planeta.substring(1);
   

    var periodp = document.createElement("p");
    periodp.className = "period-" + planeta[0].toLowerCase() + planeta.substring(1);
    

    var massp = document.createElement("p");
    massp.className = "mass-" + planeta[0].toLowerCase() + planeta.substring(1);


    infoPlanet.appendChild(tempp)
    infoPlanet.appendChild(radiusp)
    infoPlanet.appendChild(periodp)
    infoPlanet.appendChild(massp)   
}


function criarp (planetName){
    var infoPlanet = document.querySelector(".info-" + planetName[0].toLowerCase()+planetName.substring(1));

    var nomep = document.createElement("p");
    nomep.className = "name-" + planetName[0].toLowerCase() + planetName.substring(1);

    var descp = document.createElement("p");
    descp.className = "desc-" + planetName[0].toLowerCase() + planetName.substring(1);
    
    var agep = document.createElement("p");
    agep.className = "age-" + planetName[0].toLowerCase() + planetName.substring(1);
    
    infoPlanet.appendChild(nomep)
    infoPlanet.appendChild(agep)
    infoPlanet.appendChild(descp)
    

}
async function docaAPI(planeta){
    const planetas = {
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
    var meuPlaneta = allPlanets.resposta[planetas[planeta]];
    var pNome = meuPlaneta.nome;
    var pDesc = meuPlaneta.descrição;
    var pIdade = meuPlaneta.idade;
   

    criarp(planeta)
    var nomep = document.querySelector(".name-" + planeta[0].toLowerCase()+planeta.substring(1))
    nomep.appendChild(document.createTextNode("Nome: "+ pNome));

    var descp = document.querySelector(".desc-" + planeta[0].toLowerCase()+planeta.substring(1))
    descp.appendChild(document.createTextNode(pDesc));

    var descp = document.querySelector(".age-" + planeta[0].toLowerCase()+planeta.substring(1))
    descp.appendChild(document.createTextNode("Idade: "+ pIdade));

    
    return pNome, pDesc, pIdade;

}
function require(nomeDoPlaneta) {
    var np = nomeDoPlaneta;
    
    return docaAPI(np), ninjaAPI(np)

}