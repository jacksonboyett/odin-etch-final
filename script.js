
// Ask user for input for grid size
function askUser() {
    // let gridSize = prompt('What grid size do you want?');
    let gridSize = 80;
    return gridSize
    };
    let rows = askUser();
    let cols = rows*(8/5); 
    let color = 'blue';
    
    // Track state of mouse (up or down
    
    // Create a grid of variable size
    let grid = document.querySelector('.grid')
    for (let i = 0; i < rows; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < cols; j++) { 
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', changeSquare);
            row.appendChild(square);
        }
    }; 
    
    let orange = document.querySelector('.orange');
    orange.addEventListener('mousedown', toOrange)
    
    function toOrange() {
        color = 'orange';
        console.log(color)
        return color 
    };
    
    let blue = document.querySelector('.blue');
    blue.addEventListener('mousedown', toBlue)
    
    function toBlue() {
        color = 'blue';
        console.log(color)
        return color 
    };
    
    let lightMode = document.querySelector('.lightMode');
    lightMode.addEventListener('mousedown', toLightMode)
    
    function toLightMode() {
        color = "#9fe9ff";
        console.log(color)
        return color 
    };
    
    function changeSquare(e) {
        e.target.style.backgroundColor = color;
    };
    
    let reset = document.querySelector('.reset');
    reset.addEventListener('mousedown', function() {
        location.reload();
    });
    
    
    
    