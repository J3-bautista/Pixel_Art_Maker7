// Select color input
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');


let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

//event listener is setting the mouse state
sizePicker.addEventListener('click', (e) => {

    e.preventDefault();

    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();

    makeGrid(height, width);
});
//// Select size input
//When size is submitted, makeGrid() is called

function makeGrid(height, width) {
    //addEventListener on top of each squares
    //change color on background of squares
    for (let i = 0; i <= height; i++) {
        let row = table.insertRow(i);
        for (let s = 0; s <= width; s++) {
            let cell = row.insertCell(s);
            cell.addEventListener('click', (e) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }

}
