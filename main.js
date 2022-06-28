const counter = document.getElementById("counter");
const incr = document.querySelector(".incr");
const decr = document.querySelector(".decr");

let count = 0;
incr.addEventListener("click", ()=>{
    count++;
    counter.innerHTML = count;
});

decr.addEventListener("click", ()=>{
    count--;
    counter.innerHTML = count;
});


const card = document.querySelector('.container');
const color = document.querySelectorAll('.color');
const input = document.querySelector('input');

color.forEach(e => {
    e.addEventListener('click', e =>{
        card.style.background = window.getComputedStyle(e.target).getPropertyValue("background");
        input.checked = false;
    });
});