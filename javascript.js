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


const square = document.createElement('div');
square.classList.add('paint-grid-block');
document.body.appendChild(square);
square.style.backgroundColor = '#ccc';

const footer = document.createElement('div');
footer.classList.add('footer');
document.body.appendChild(footer);
footer.style.backgroundColor = '#ccc';
footer.innerHTML = `Copyright © ${new Date().getFullYear()} Smorgasen`
