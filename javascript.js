// create grid of 16 square divs
function createGrid(size) {
    const cont = document.querySelector(".container");
    for (let j=0; j<size; j++) { 
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (let i=0; i<size; i++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridSquare");
            gridDiv.addEventListener("mouseover", () => {
                gridDiv.classList.add("mouseOverStyle")
            });
            gridRow.appendChild(gridDiv)
        }
        cont.appendChild(gridRow)
    }
}

function removeGrid() {
    const cont = document.querySelector(".container");
    let child = cont.lastElementChild;
    while (child) {
        cont.removeChild(child);
        child = cont.lastElementChild;
    }
}

createGrid(16);
// reset grid button
const resetButton = document.querySelector("button");
resetButton.addEventListener("click",() => {
    let newSize = prompt("How many boxes?");
    removeGrid();
    createGrid(newSize);
})
