const gridButton = document.querySelector('.gridButton');
gridButton.addEventListener('click', () => {
    let pixelAmount = prompt("How many squares wide would you like the grid to be?");
    gridGenerator(pixelAmount);
});



const grid = document.querySelector('.grid');
const gridPrompt = document.querySelector('.gridPrompt');

function gridGenerator(gridWidth) {
    for (let i = 0; i < (gridWidth * gridWidth); i++) {
        let sides = 640/gridWidth + "px";
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




