const colors = ["blue", "yellow", "white"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btnSimple = document.querySelector('#btn-simple');
const btnHex = document.querySelector('#btn-hex');


function changeColor(currentColor) {
    document.querySelector('body').style.backgroundColor = currentColor;
    color.style.color = currentColor;
    color.innerHTML = currentColor;
}

function generateSimpleColor() {
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    changeColor(currentColor)
}

function generateHexColor() {
    currentColor = '#';
    for(let i=0; i<6; i++) {
        currentColor += hex[Math.floor(Math.random() * hex.length)];
    }
    changeColor(currentColor)
}

if(btnSimple !== null) {
    btnSimple.addEventListener('click', generateSimpleColor);
}

if(btnHex !== null) {
    btnHex.addEventListener('click', generateHexColor);
}