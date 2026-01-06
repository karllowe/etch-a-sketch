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
                //gridDiv.classList.add("mouseOverStyle")
                gridDiv.style.backgroundColor = randomColour();
            });
            gridRow.appendChild(gridDiv)
        }
        cont.appendChild(gridRow)
    }
}

function randomColour() {
    let red = (Math.random() * 255).toPrecision(1);
    let green = (Math.random() * 255).toPrecision(1);
    let blue = (Math.random() * 255).toPrecision(1);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
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
    let maxSize = 100;
    let userSelectedSize = prompt("How many boxes (max: " + maxSize + ")?");
    let newSize = Math.min(maxSize, userSelectedSize);

    removeGrid();
    createGrid(newSize);
})
