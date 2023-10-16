/* Taschenrechner v1
"use strict";

document.addEventListener("DOMContentLoaded", function(){

    var form = document.getElementById("calc"),
        out = document.querySelector("#calc output"),
        overwrite = true;

    form.addEventListener("submit", function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        return false;

    })

    document.querySelectorAll("#calc button").forEach(function(b){
        var c = b.textContent;

        switch (c){

            case ".":
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4":
            case "3":
            case "2":
            case "1":
            case "0":
                b.addEventListener("click", function(){
                    input (c);
                });
            break;

            case "+":
            case "-":
            case "*":
            case "/":
                b.addEventListener("click", function(){
                    operator (c);
                });
            break;
            
            case "=":
                b.addEventListener("click", result);
            break;
            case "C":
                b.addEventListener("click", clear);
            break;
        }

    });

    function result(noDisplay){
        var input = out.textContent;
        r = 0;

        input = input.replace(/x/g,"*")
});
*/

//Selectors

const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
// Selects a h1 element that holds the input and result
const displayValElement = document.getElementById("display__numbers");
// Selectsthe buttons with the 10 digits (0-9)
const btnNumbers = document.getElementsByClassName("btn--number");
//Selects the buttons for operators (add/subtracts/divide/multiply) and equals operator
const btnOperators = document.getElementById("btn--operator");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener("click", updateDisplayVal); //function
}
for (let i = 0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener("click", performOperation); //function
}

//Updating the display field
updateDisplayVal = (e) => {
  var btnText = e.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }
  //Append the content of the button we clicked to our displayVal variable and display it
  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

performOperation = (e) => {
  var operator = e.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "×":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "÷":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
      displayVal = evaluation + "";
      displayValElement.innerText = displayVal;
      evalStringArray = []; //clear the array
      break;
    default:
      break;
  }
};
// On clicking the clear button, all values and the display are being reset
clear.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};

// Not allowing two decimal points in input
decimal.onclick = () => {
  if (!displayVal.includes(".")) {
    displayVal += ".";
  }
  displayValElement.innerText = displayVal;
};
