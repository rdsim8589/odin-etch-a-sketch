function createRow(size) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add(`square-${i}`, "square");
        row.appendChild(square);
    }
    return row;
}

// method to call  and insert into the html
function buildGrid(size) {
    if (size < 0) return;

    const container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        container.appendChild(createRow(size));
    }
    //hovereffect to change color of square
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener('mouseover', changeColor);
    })
}

function changeColor(event) {
    this.style.cssText = "background-color: aqua"
}

function userInput() {
    const button = document.querySelector("[type='button']");
    const input = document.querySelector("[type='number']");
    button.addEventListener("click", () => {
        // check user input
        const gridSize = input.value;
        console.log(gridSize);
        //delete grid
        const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            row.remove();
        })
        //rebuild grid
        buildGrid(gridSize);
    })
}

function start() {
    buildGrid(16);
    userInput();
}

start();