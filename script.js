//Setup the canvas
const canvas = document.getElementById('canvas');
var i;
for (i=0; i<81; i++) {
    const div = document.createElement('div');
    div.classList = 'cell';
    canvas.appendChild(div);
}

//Draw logic
let isDrawing = false;

const cells = document.querySelectorAll('.cell');
cells.forEach((div) => {
    div.addEventListener('mousedown', () => {
        colour(div);
        isDrawing = true;
    });
    div.addEventListener('mouseenter', () => {
        if (isDrawing == true) {
            colour(div);
        };
    });
    div.addEventListener('mouseup', () => {
        isDrawing = false;
    });
});

//colour the cell
function colour(cell) {
    let colour = document.querySelector('input:checked').value;
    cell.style.backgroundColor = colour;
}