/*  SETS UP THE BEGINNING BUTTONS */

const buttons = document.querySelector(".buttons");
const displayDiv = document.querySelector(".display");
// creates number buttons
for(let i = 0; i <= 9; i++){
    let temp = document.createElement("button");
    temp.textContent = i;
    temp.classList.add("button");
    temp.classList.add("num");
    buttons.appendChild(temp);
}

let clear = document.createElement("button");
clear.classList.add("button");
clear.classList.add("clear");
clear.textContent = "clear";

let equal = document.createElement("button");
equal.classList.add("button");
equal.classList.add("equal");
equal.textContent = "=";

buttons.appendChild(clear);
buttons.appendChild(equal);

// Adds the logic to the buttons
function clicked(button){
    // Updates display of calculator
    let event =  button.target.textContent;
    if(!isNaN(event)){
        display += event;
    }else if(event != "clear" && event != "="){
        display += " " + event + " ";
    }

    

    if(event === "clear"){
        display = "";
    }
    else if(event === "="){
        display = computeResult(elements);
    }

    displayDiv.textContent = display;
    elements = display.split(" ");
}

function computeResult(elements){
    let numOne;
    let numTwo;
    let ops = elements[1];

    while(elements.length != 1){
        console.log("Elements: " +elements);
        console.log("display length: " + display.length);
        ops = elements[1];
        if(!isNaN(elements[0]) && !isNaN(elements[2])){
            numOne = parseInt(elements[0]);
            numTwo = parseInt(elements[2]);
            console.log("numTwo: " + numTwo);
        }else{
            // end computation time
            alert("Incorrect calculation");
            return "";
        }
        if(display.length === 4){
            alert("Incorrect calculation");
            return "";
        }
        // Performs calculation
        if(isNaN(elements[1])){
            if(ops === "+"){
                elements[2] = numOne + numTwo;
            }
            else if(ops === "-"){

                elements[2] = numOne - numTwo;
            }
            else if(ops === "*"){
                elements[2] = numOne * numTwo;
            }
            else if(ops === "/"){
                if(numTwo === 0){
                    alert("Incorrect calculation");
                    return "";
                }
                elements[2] = numOne / numTwo;
            }
            else{
                // end computation
                alert("Incorrect calculation");
                return "";
            }
        }
        else{
            // end computation
            alert("Incorrect calculation");
            return "";
        }
        // Gets rid of used elements
        elements.shift();
        elements.shift();
    }
    return elements[0].toString();
}




let display = "";
let elements = [];
const eachButton = document.querySelectorAll(".button");

eachButton.forEach(button =>{
    button.addEventListener("click",clicked);
});
