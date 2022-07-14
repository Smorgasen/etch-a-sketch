const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Etch A Sketch';
document.body.appendChild(heading);
heading.style.backgroundColor = '#ccc';


const controlPan = document.createElement('div');
controlPan.classList.add('control-panel');
controlPan.textContent = 'Control Panel';
document.body.appendChild(controlPan);
controlPan.style.backgroundColor = '#ccc';


const paintGrid = document.createElement('div');
paintGrid.classList.add('paint-grid-block');
document.body.appendChild(paintGrid);
paintGrid.style.backgroundColor = '#ccc';

