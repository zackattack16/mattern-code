const xInput = document.getElementById("axisX");
const yInput = document.getElementById("axisY");
const choose = document.getElementById("colorChoose");
const button1 = document.getElementById("button1");
const clearboard = document.getElementById("clearboard");
const group = document.getElementById("group");
const test = document.getElementById("test");
const button2 = document.getElementById("confetti");
const size = document.getElementById("size");
const shapes = document.getElementById("shapes")
const brushselector = document.getElementById("brushselector");
const speedselector = document.getElementById("speed");

button1.addEventListener("click", startpattern);
let confetterInterval;
let clearBoardInterval;


button2.addEventListener("mousedown", function() {
    confetterInterval = setInterval(confetter, 1); 
});

document.addEventListener("mouseup", function() {
    clearInterval(confetterInterval); 
});



clearboard.addEventListener("click", clearBoardFunc);
    

var log = 0;

var idgen = 1;
function logButtons(e) {
  log = `${e.buttons}`;
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);



function clearBoardFunc() {
    start = 0;
    let min = 1; 
    const xInput = document.getElementById("axisX");
    const yInput = document.getElementById("axisY");

    for (let i = 0; i < xInput.value * yInput.value; i++) {
        ((i) => {
            setTimeout(() => {
                let bar = Math.floor(Math.random() * (yInput.value * xInput.value));
                console.log("Bar: " + bar);
                const rowelement = document.getElementById("id" + i);
                console.log(rowelement);
    
                if (rowelement) {
                    rowelement.remove();
                }
            }, i * 2); // 200ms delay
        })(i);
    }
}
function confetter() {
    let min = 1; 
    const xInput = document.getElementById("axisX");
    const yInput = document.getElementById("axisY");

    let bar = Math.floor(Math.random() * ((yInput.value*xInput.value)));
    console.log("Bar: " + bar);
    const rowelement = document.getElementById("id" + bar);
    console.log(rowelement);

    rowelement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
function startpattern() {
    idgen = 0;
    let div;
    let div2;
    document.getElementById("group").innerHTML = "";


    for (let i = 0; i < xInput.value; i++){
        div = document.createElement('div');
        
        
        
        

        for (let j = 0; j < yInput.value; j++){
            div2 = document.createElement('div');
            const shapes = document.getElementById("shapes");
            div2.style.backgroundColor = choose.value;
            div2.style.width = "5px";
            div2.style.height = "5px";
            div2.style.border = "0px solid dimgrey";
            if (speedselector.value == "slow") {
                            
                div2.style.transition = "5s";
            }
            else if (speedselector.value == "instant") {
                            
                div2.style.transition = "0.05s";
            }
    
            div2.id = ("id" + String(idgen));
            idgen++;
            div2.classList.add("point");
            div2.style.width = (size.value+ "px");
            div2.style.height = (size.value+ "px");
            if (shapes.value == "circles") {
                div2.style.borderRadius = "20px";
            }
            div.appendChild(div2);
            
            div2.addEventListener('mouseenter', function() {
                    if (log == "1") {
                        
                        if (brushselector.value == "point") {
                            
                            this.style.backgroundColor = choose.value;
                            startid = this.id.slice(2);
                            console.log("startid:" +startid);
                        }
                        else if (brushselector.value == "flat") {
                            
                            startid = (this.id.slice(2)-2);

                            console.log("startid:" +startid);
                            
                            this.style.backgroundColor = choose.value;
                            document.getElementById("id"+startid).style.backgroundColor = choose.value;
                            document.getElementById("id"+(startid+1)).style.backgroundColor = choose.value;
                            document.getElementById("id"+(startid+3)).style.backgroundColor = choose.value;
                            document.getElementById("id"+(startid+4)).style.backgroundColor = choose.value;
                        }
                        
                    }
                    
                
            });
            
        } 
        
        div.classList.add("row");
        group.appendChild(div);
        
    } 
}