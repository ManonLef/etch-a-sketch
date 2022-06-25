const gridContainer = document.querySelector('.gridContainer');
const gridPrompt = document.querySelector('.gridPrompt');

// button to change gridsize and start grid generation
const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', () => {
    let gridSize = prompt("How many squares wide would you like the grid to be?\nPlease enter a number between 2 and 100");
    // limit grid size to 100 (consider adding while to keep doing this)
    if (gridSize > 100 || gridSize < 2) {
        gridSize = prompt("Please pick a number between 2 and 100");
    } else  if (typeof gridSize === "string") {
        gridSize = prompt("Only numerical values are supported\nPlease pick a number between 2 and 100");
    } else {   
        gridGenerator(gridSize); 
    }
    //
    gridGenerator(gridSize);
});

function gridGenerator(gridWidth) {
    // empty if squares are already present
    removeSquares(gridContainer)
    // generate squares
    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        let sides = 640/gridWidth + "px";
        const squares = document.createElement('div');
        squares.classList.add('squares');     
         //css to change width and height
         squares.style.width = sides;
         squares.style.height = sides;
         // appends the generated divs/squares
        gridContainer.appendChild(squares);
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

//function to empty existing squares before setting a new grid size
function removeSquares(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



