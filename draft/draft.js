// let gridSize = 16;

// const heading = document.createElement('h1');
// heading.classList.add('heading');
// heading.textContent = 'Etch A Sketch';
// document.body.appendChild(heading);
// heading.style.backgroundColor = '#ccc';


// const controlPan = document.createElement('div');
// controlPan.classList.add('control-panel');
// controlPan.textContent = 'Control Panel';
// document.body.appendChild(controlPan);
// controlPan.style.backgroundColor = '#ccc';


// const container = document.createElement('div');
// container.classList.add('paint-grid-block');
// container.setAttribute('id', 'grid-block')
// document.body.appendChild(container);
// container.style.backgroundColor = '#ccc';


// const footer = document.createElement('div');
// footer.classList.add('footer');
// document.body.appendChild(footer);
// footer.style.backgroundColor = '#ccc';
// footer.innerHTML = `Copyright © ${new Date().getFullYear()} Smorgasen`;


// function createGrid() {
//     for (let i = 0; i < gridSize; i++) {
//         let row = document.createElement('div');
//         document.getElementById('grid-block').appendChild(row);
//         row.classList.add ('row');
//         for (let k = 0; k < gridSize; k++) {
//             let column = document.createElement('div');
//             column.style.backgroundColor = 'transparent';
//             column.classList.add('column')
//             column.innerHTML = 16
//             row.appendChild(column)
//         }
//     }
// }

// createGrid()
const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.color-choice');
const userColorPicker = document.querySelector('#input-color');
const clearButton = document.querySelector('.clear');
var slider = document.querySelector('#sizeRange');
var color = 'black';
function createGrid(gridNumber) { 
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

createGrid(6)
