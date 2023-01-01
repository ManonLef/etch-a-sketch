const gridContainer = document.querySelector('.gridContainer');
const gridPrompt = document.querySelector('.gridPrompt');

// button to change gridsize and start grid generation 
const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', () => {
    let gridSize = prompt("How many squares wide would you like the grid to be?");
    // error prompt conditionals
    while (gridSize > 100 || gridSize < 2 || isNaN(gridSize)) {
        if (isNaN(gridSize)) {
            gridSize = prompt("Only numbers are supported\nplease pick a number between 2 and 100");
        } else if (gridSize === null) { //cancel button
            break;
        } else {
            gridSize = prompt("Please pick a number between 2 and 100");
        }
    }

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
    fillColor();
}


function fillColor() {
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

gridGenerator(16);

// slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo")
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
