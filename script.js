const xImput = document.getElementById("axisX");
const yImput = document.getElementById("axisY");
const chose = document.getElementById("colorChose");
const butten1 = document.getElementById("butten1");
const group = document.getElementById("group");
butten1.addEventListener("click", startpatter);

function startpatter() {
    const div = document.createElement('div');
    div.style.backgroundColor = "red";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.left = "50px";
    div.style.top = "50px";
    //for (let i = 0; i < xImput; i++){
        
    //} 
    group.appendChild(div).repeat(xImput);
}
