export function cenDiv(selector){
    var x = document.querySelectorAll(selector)
    for(let i = 0; i < x.length; i++){
        x[i].style.position = "absolute";
        x[i].style.top = 50 + "%";
        x[i].style.left = 50 + "%";
        x[i].style.transform = "translate(-50%, -50%)";
    }
}
cenDiv(".container")