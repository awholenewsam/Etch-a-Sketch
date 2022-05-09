const grid = document.getElementById('boxes');

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    grid.style.width = "640px";
    grid.style.height = "640px"
    grid.style.overflow = "hidden";
    for (i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item"; 
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
    };
};

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
}); 

function randomColor()
{
     color ='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     return color;
}

const rainbow = document.querySelector('#randomColor');
rainbow.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
    }
});


const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
     window.location.reload();
});


makeGrid(16,16);
