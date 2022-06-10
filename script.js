/*  SETS UP THE BEGINNING BUTTONS */

const buttons = document.querySelector(".buttons");
// creates number buttons
for(let i = 0; i <= 9; i++){
    let temp = document.createElement("button");
    temp.textContent = i;
    temp.classList.add("button");
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