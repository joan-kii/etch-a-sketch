const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const refreshButton = document.querySelector('#refresh');
let gridSize = 16;
let drawStyle = 'black';
let grid = 0;
createGrid();

function createGrid() {
    console.log(container.childElementCount);
    if (container.childElementCount != 0) {
        let divs= Array.from(container.children);
        console.log(divs);
        divs.forEach(div => div.remove());
            };
    for (let i = 0; i < (gridSize**2); i++) {
            grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.height = (650 / gridSize) + 'px';
            grid.style.width = (650 / gridSize) + 'px';  
            container.appendChild(grid);
            cellSelection();
    };
};

function draw(e) {
    if (drawStyle == 'black') {
        e.target.style.opacity = 'initial';
        e.target.style.backgroundColor = 'black';

    } else if (drawStyle == 'rainbow') {
        e.target.style.opacity = 'initial';
        e.target.style.backgroundColor = 
        `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)})`;

    } else if (drawStyle == 'gradient') {
        e.target.style.backgroundColor = 'black';
        let blackOpacity = Number(e.target.style.opacity); 
        e.target.style.opacity = blackOpacity + 0.1;

    } else if (drawStyle == 'erase') {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = 'initial';
    } else {
        none;
    };
};

function cellSelection() {
    let cells = Array.from(container.children);
    cells.forEach(cell => 
        cell.addEventListener("mouseover", draw));
};

refreshButton.addEventListener('click', refresh);

function refresh() {
    gridSize = prompt('How many cells per side you want? (Max. 64)');
    while ((0 + gridSize != Number(gridSize)) || 
    (gridSize > 64)) {
        while (0 + gridSize != Number(gridSize)) {
            gridSize = prompt('Enter a number, please. (Max. 64)');
        };
        while (gridSize > 64) {
            gridSize = prompt('Choose another number. Max. 64.');
        };
    };
    if (gridSize < 1) {
        gridSize = 16;
    }
    drawStyle = 'black';
    createGrid();
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
    drawStyle = e.target.id;
    });
});
