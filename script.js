const xInput = document.getElementById("axisX");
const yInput = document.getElementById("axisY");
const choose = document.getElementById("colorChoose");
const button1 = document.getElementById("button1");
const group = document.getElementById("group");
const test = document.getElementById("test");
const button2 = document.getElementById("buttones");
button1.addEventListener("click", startpattern);
let confetterInterval;

button2.addEventListener("mousedown", function() {
    confetterInterval = setInterval(confetter, 1); // Run confetter every 100ms
});

button2.addEventListener("mouseup", function() {
    clearInterval(confetterInterval); // Stop running confetter
});

var log = 0;
 // let log = new Text('?');
var idgen = 1;
function logButtons(e) {
  log = `${e.buttons}`; // log.nodeValue= `${e.buttons} (${e.type})`;
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
// document.addEventListener('mousemove', logButtons);



function confetter() {
    let min = 1; // minimum value
    
    let bar = Math.floor(Math.random() * ((yInput.value*xInput.value)));
    console.log(bar);
    const rowelement = document.getElementById("id" + bar);
    console.log(rowelement);
    rowelement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
function startpattern() {

    let div;
    let div2;
    document.getElementById("group").innerHTML = "";


    for (let i = 0; i < xInput.value; i++){
        div = document.createElement('div');
    
        
        
        

        for (let j = 0; j < yInput.value; j++){
            div2 = document.createElement('div');
        
            div2.style.backgroundColor = choose.value;
            div2.style.width = "5px";
            div2.style.height = "5px";
            div2.style.border = "0px solid dimgrey";
    
    
            div2.id = ("id" + String(idgen));
            idgen++;
            div2.classList.add("point");
            
            div.appendChild(div2);
            
            div2.addEventListener('mouseenter', function() {
                    if (log == "1") {
                        this.style.backgroundColor = choose.value;
                    }
                    
                
            });
            
        } 
        
        div.classList.add("row");
        group.appendChild(div);
        
    } 
}