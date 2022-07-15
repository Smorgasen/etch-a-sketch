const container = document.querySelector('.container');

function createGrid(gridNumber) {
    // let gridArea = (gridNumber * gridNumber);
    for (let i = 1; i <= (gridNumber * gridNumber); i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(gridItem)
    }
}

createGrid(4)