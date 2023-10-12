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
document.addEventListener("DOMContentLoaded", function(){
    const calculator = document.querySelector('.calc')
    const keys = calculator.querySelector('.calc_keys')
});


keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    }
})

const key = e.target
const action = key.dataset.action


if(!action) {
    console.log('number key!')
}

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

if (action === 'decimal') {
    console.log('decimal key!')   
}

if (action === 'clear') {
    console.log('clear key!')
}

if (action === 'calculate') {
    console.log('equal key!')
}