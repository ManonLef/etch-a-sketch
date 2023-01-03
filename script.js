const gridContainer = document.querySelector('.gridContainer');
const gridPrompt = document.querySelector('.gridPrompt');
// slider
const slider = document.getElementById("myRange");
const output = document.getElementById("gridSize");
const eraser = document.querySelector("button");

output.innerHTML = "Grid Size = " + slider.value;

eraser.disabled = true;

slider.oninput = function() {
    output.innerHTML = "Grid Size = " + this.value;
    gridGenerator(this.value);
}

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

