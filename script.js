// create function that decides div width/height with 640px/grid size.

const grid = document.querySelector('.grid');


function gridGenerator(gridWidth) {
    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        grid.appendChild(squares);
    }
    testColor();
}

gridGenerator(16);

function testColor() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach(squares => {
        squares.addEventListener('mouseenter', () => {      
            squares.style.backgroundColor = 'pink';
        });
    });
}

