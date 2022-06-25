

let pixelAmount = prompt("How many squares wide would you like the grid to be?");
let sides = 640/pixelAmount + "px";

const grid = document.querySelector('.grid');


function gridGenerator(gridWidth) {
    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');     
         //css to change width and height
         squares.style.width = sides;
         squares.style.height = sides;
         //
        grid.appendChild(squares);
        
    }
    testColor();
}


function testColor() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach(squares => {
        squares.addEventListener('mouseenter', () => {      
            squares.style.backgroundColor = 'pink';
        });
    });
}

gridGenerator(pixelAmount);


