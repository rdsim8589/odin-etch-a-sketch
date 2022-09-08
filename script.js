//make 16 x 16 box

// method to create 1 row of 16 boxes 
// return the element contain 1 row of 16 boxes
function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add(`square-${i}`, "square");
        square.innerHTML = `square-${i}`;
        row.appendChild(square);
    }
    return row;
}

// method to call  and insert into the html
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    console.log(`enter ${i}`);
    container.appendChild(createRow());
}
