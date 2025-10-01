'use strict';
const guessBtn = document.getElementById("guess");
const resetBtn = document.getElementById("reset");
let secretNumber = document.querySelector(".hidden-number");
let timer = document.getElementsByClassName("timer");
let attemptNumber = document.querySelector(".attempt-number");
var message = document.querySelector(".input-text p");

function guessNumber()
{
    let randomNumber = Math.trunc((Math.random()*100) + 1);
    let attempts = 5;
    attemptNumber.textContent = attempts;
    guessBtn.addEventListener("click", ()=> {
        let inputNumber = Number(document.querySelector("input").value);
        if(inputNumber != randomNumber)
        {
            message.style.color = "#DD0303";
            attemptNumber.textContent = attempts--;
            if(inputNumber > randomNumber){
                message.textContent = "Too high";
            } else {
                message.textContent = "Too low";
            }

            if(attemptNumber.textContent < 1){
                message.textContent = "You lost 😢";
                secretNumber.textContent = randomNumber;
            }
        } else if(inputNumber === randomNumber){
            message.textContent = "You won 🥳";
            message.style.color = "green";
            attemptNumber.textContent = attempts;
            secretNumber.textContent = randomNumber;
        }
        
    });
}
guessNumber();

function resetNumber()
{
    let attempts = 5;
    resetBtn.addEventListener("click", ()=>{
        let inputNumber = (document.querySelector("input"));
        secretNumber.textContent = "?"
        inputNumber.value = "";
        message.style.color = "#FDEBD0";
        message.style.display = "none";
        attemptNumber.textContent = attempts;
    });
}
resetNumber();