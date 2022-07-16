const container = document.querySelector('.container');

let color = 'black'

const colorButtons = document.querySelectorAll('.color-button');
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));

const userColor = document.querySelector('#user-color');
userColor.addEventListener('input', pickColor, false);
userColor.addEventListener('change', pickColor, false);

let slider = document.getElementById('range');
let outputLeft = document.getElementById('grid-size-left');
let outputRight = document.getElementById('grid-size-right');
slider.addEventListener('mouseup', gridSize)


function randomNumber(number) {
    return Math.floor(Math.random() * number)
}

function createGrid(gridNumber) {
    let gridArea = (gridNumber * gridNumber);
    for (let i = 1; i <= gridArea; i++) {
        gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(gridItem);
    }
    let gridPixels = container.querySelectorAll('div')
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid))
}

function gridSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}

outputLeft.innerHTML = slider.value;
outputRight.innerHTML = slider.value;

slider.oninput = function() {
    outputLeft.innerHTML = slider.value;
    outputRight.innerHTML = slider.value;
}

function pickColor(event) {
    color = event.target.value;
}

function colorGrid() {
    if (color === 'black') {
        this.style.backgroundColor = 'rgb(64, 63, 63)';
    }
    else if (color === 'rainbow') {
        this.style.backgroundColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    }
    else if (color === 'erase') {
        this.style.backgroundColor = '#ffff'
    }
    else {
        this.style.backgroundColor = color
    }
}
function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'erase':
            color = 'erase';
            break;
        default:
            color = 'black';
            break;
    }
}




createGrid(slider.value)
