var zoomElementMercury = document.querySelector("#mercury-rep");
let $zoomMercury = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementMercury.style.transform = `scale(${($zoomMercury -= 0.06)})`
    } else {
        zoomElementMercury.style.transform = `scale(${($zoomMercury += 0.06)})`
    }
})

var zoomElementVenus = document.querySelector("#venus-rep");
let $zoomVenus = 1;
document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElementVenus.style.transform = `scale(${($zoomVenus -= 0.06)})`
    } else {
        zoomElementVenus.style.transform = `scale(${($zoomVenus += 0.06)})`
    }
})
