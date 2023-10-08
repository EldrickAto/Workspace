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
