const xInput = document.getElementById("axisX");
const yInput = document.getElementById("axisY");
const choose = document.getElementById("colorChoose");
const button1 = document.getElementById("button1");
const group = document.getElementById("group");

button1.addEventListener("click", startpattern);

function startpattern() {

    let div;
    document.getElementById("group").innerHTML = "";


    for (let i = 0; i < xInput.value; i++){
        div = document.createElement('div');
    
        div.style.backgroundColor = "yellow";
        div.style.width = "30px";
        div.style.height = "30px";
        div.style.border = "10px solid white";



        div.id = "row";
        group.appendChild(div);
    } 
    
}
