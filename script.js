const gridContainer = document.querySelector('.gridContainer');
const gridPrompt = document.querySelector('.gridPrompt');
// slider
const slider = document.getElementById("myRange");
const output = document.getElementById("gridSize");
const eraser = document.querySelector("#eraser");

let eraserOn = false;

eraser.addEventListener("click", toggle);

function toggle() {
    if (!eraserOn) {
        eraserOn = true;
        eraser.style.backgroundColor = 'lightblue';
    } else {
        eraserOn = false;
        eraser.style.backgroundColor = 'rgb(212, 126, 168)';
    }
}

slider.oninput = () => {
    output.innerHTML = "Grid Size = " + slider.value;
    gridGenerator(slider.value);
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
    output.innerHTML = "Grid Size = " + slider.value;
}


function fillColor() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach(squares => {
        squares.addEventListener('mouseenter', () => {  
            if (!eraserOn) {    
                squares.style.backgroundColor = 'pink';
            } else {
                squares.style.backgroundColor = '';
            }
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

