const xInput = document.getElementById("axisX");
const yInput = document.getElementById("axisY");
const choose = document.getElementById("colorChoose");
const button1 = document.getElementById("button1");
const group = document.getElementById("group");

button1.addEventListener("click", startpattern);

function startpattern() {

    let div;
    let div2;
    document.getElementById("group").innerHTML = "";


    for (let i = 0; i < xInput.value; i++){
        div = document.createElement('div');
    
        
   
        

        for (let i = 0; i < yInput.value; i++){
            div2 = document.createElement('div');
        
            div2.style.backgroundColor = choose.value;
            div2.style.width = "30px";
            div2.style.height = "30px";
            div2.style.border = "10px solid white";
    
    
    
            div2.id = "column";
            div.appendChild(div2);
        } 

        div.id = "row";
        group.appendChild(div);
        
    } 
    
    
    
}
