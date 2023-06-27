"use strict";

let randomValue = Math.floor(Math.random() * 1000);

function rotate() {
    document.querySelector(".box").style.transform = `rotate(${randomValue}deg)`;
}

document.addEventListener("keydown", (el) => {
    if(el.keyCode == 13){
        rotate()
    }
})