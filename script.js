const container = document.querySelector('.container');

function createGrid(gridNumber) {
    let gridArea = (gridNumber * gridNumber);
    for (let i = 1; i <= gridArea; i++) {
        gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(gridItem);
    }
    container.addEventListener('mouseover', event => {
        let item = event.target;
        if (item != container) {
            item.classList.add('permahover');
        }
    })
}

let slider = document.getElementById('range');
let outputLeft = document.getElementById('grid-size-left');
let outputRight = document.getElementById('grid-size-right');
outputLeft.innerHTML = slider.value;
outputRight.innerHTML = slider.value;

slider.oninput = function() {
    outputLeft.innerHTML = slider.value;
    outputRight.innerHTML = slider.value;
}

function gridSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}

function randomNumber(number) {
    return Math.floor(Math.random() * number)
}
function randomColor() {
    return 'rgb('+randomNumber(255)+','+randomNumber(255)+','+randomNumber(255)+')'
}

slider.addEventListener('mouseup', gridSize)
createGrid(slider.value)
console.log (randomColor())





