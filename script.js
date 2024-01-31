const xInput = document.getElementById("axisX");
const yInput = document.getElementById("axisY");
const choose = document.getElementById("colorChoose");
const button1 = document.getElementById("button1");
const group = document.getElementById("group");
const test = document.getElementById("test");
button1.addEventListener("click", startpattern);

function startpattern() {

    let div;
    let div2;
    document.getElementById("group").innerHTML = "";


    for (let i = 0; i < xInput.value; i++){
        div = document.createElement('div');
    
        
        
        

        for (let j = 0; j < yInput.value; j++){
            div2 = document.createElement('div');
        
            div2.style.backgroundColor = choose.value;
            div2.style.width = "30px";
            div2.style.height = "30px";
            div2.style.border = "10px solid white";
    
    
            div2.id = ("id: "+ String(j + 1));
            div2.classList.add("point");
            
            div.appendChild(div2);
            div2.addEventListener('click', function() {
                this.style.backgroundColor = choose.value;
            });
            
        } 
        div.id = ("id: "+ String(i + 1));
        div.classList.add("row");
        group.appendChild(div);
        
    } 
}