//make 16 x 16 box

// method to create 1 row of 16 boxes 
// return the element contain 1 row of 16 boxes
function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add(`square-${i}`, "square");
        row.appendChild(square);
    }
    return row;
}

// method to call  and insert into the html
function buildGrind() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        console.log(`enter ${i}`);
        container.appendChild(createRow());
    }
}

function changeColor(event) {
    this.style.cssText = "background-color: aqua"
    console.log("hello");
}

function start() {
    buildGrind();
    //hovereffect to change color of square
    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>{
        square.addEventListener('mouseover', changeColor);
    })
}

start();