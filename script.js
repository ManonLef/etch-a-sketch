// create function that decides div width/height with 640px/grid size.

const grid = document.querySelector('.grid');


function gridGenerator(gridWidth) {
    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        grid.appendChild(squares);
    }
}

gridGenerator(16);