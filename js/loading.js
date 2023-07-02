function showLoading(){
    var div = document.createElement("div");
    div.classList.add("loading");

    document.body.appendChild(div);

    setTimeout(() => hideLoading(), 200)
}

function hideLoading(){
    var loadings = document.getElementsByClassName("loading");
    if(loadings.length){
        loadings[0].remove();
    }
}

