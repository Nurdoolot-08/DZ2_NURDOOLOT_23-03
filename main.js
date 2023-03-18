const smallBox = document.querySelector('.box');
const radius = 210;
const centerX = 237;
const centerY = 237;
let angle = 0;

function move() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    smallBox.style.top = y + 'px';
    smallBox.style.left = x + 'px';

    angle += Math.PI / 180;

    setTimeout(move, 10)
}

move()

const counterElement = document.querySelector("#counter");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let counter = 0;
let timerId = null;

function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
}

startButton.addEventListener("click", () => {
    timerId = setInterval(incrementCounter, 1000);
});

stopButton.addEventListener("click", () => {
    clearInterval(timerId);
});





