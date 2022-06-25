const gridContainer = document.querySelector('.gridContainer');
const gridPrompt = document.querySelector('.gridPrompt');

// button to change gridsize and start grid generation
const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', () => {
    let gridSize = prompt("How many squares wide would you like the grid to be?");
    gridGenerator(gridSize);
});

function gridGenerator(gridWidth) {
    // first empty any divs in there

    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        let sides = 640/gridWidth + "px";
        const squares = document.createElement('div');
        squares.classList.add('squares');     
         //css to change width and height
         squares.style.width = sides;
         squares.style.height = sides;
         //
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




