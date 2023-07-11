////////////////////////
// ZOOM DOS PLANETAS //
//////////////////////

// FUNÇÃO NA RODA DO MOUSE PARA DAR ZOOM E RETIRAR O ZOOM (Ela se repete para cada planeta) //
let zoomElementSun = document.querySelector("#sun-rep");
let $zoomSun = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementSun.style.transform = `scale(${($zoomSun -= 0.06)})`
    } else {
        zoomElementSun.style.transform = `scale(${($zoomSun += 0.06)})`
    }
})

let zoomElementMercury = document.querySelector("#mercury-rep");
let $zoomMercury = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementMercury.style.transform = `scale(${($zoomMercury -= 0.06)})`
    } else {
        zoomElementMercury.style.transform = `scale(${($zoomMercury += 0.06)})`
    }
})

let zoomElementVenus = document.querySelector("#venus-rep");
let $zoomVenus = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementVenus.style.transform = `scale(${($zoomVenus -= 0.06)})`
    } else {
        zoomElementVenus.style.transform = `scale(${($zoomVenus += 0.06)})`
    }
})

let zoomElementEarth = document.querySelector("#earth-rep");
let $zoomEarth = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementEarth.style.transform = `scale(${($zoomEarth -= 0.06)})`
    } else {
        zoomElementEarth.style.transform = `scale(${($zoomEarth += 0.06)})`
    }
})

let zoomElementMars = document.querySelector("#mars-rep");
let $zoomMars = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementMars.style.transform = `scale(${($zoomMars -= 0.06)})`
    } else {
        zoomElementMars.style.transform = `scale(${($zoomMars += 0.06)})`
    }
})

let zoomElementJupiter = document.querySelector("#jupiter-rep");
let $zoomJupiter = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementJupiter.style.transform = `scale(${($zoomJupiter -= 0.06)})`
    } else {
        zoomElementJupiter.style.transform = `scale(${($zoomJupiter += 0.06)})`
    }
})

let zoomElementSaturn = document.querySelector("#saturn-rep");
let $zoomSaturn = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementSaturn.style.transform = `scale(${($zoomSaturn -= 0.06)})`
    } else {
        zoomElementSaturn.style.transform = `scale(${($zoomSaturn += 0.06)})`
    }
})

let zoomElementUranus = document.querySelector("#uranus-rep");
let $zoomUranus = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementUranus.style.transform = `scale(${($zoomUranus -= 0.06)})`
    } else {
        zoomElementUranus.style.transform = `scale(${($zoomUranus += 0.06)})`
    }
})

let zoomElementNeptune = document.querySelector("#neptune-rep");
let $zoomNeptune = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementNeptune.style.transform = `scale(${($zoomNeptune -= 0.06)})`
    } else {
        zoomElementNeptune.style.transform = `scale(${($zoomNeptune+= 0.06)})`
    }
})