// create grid of 16 square divs
const cont = document.querySelector(".container");

for (let j=0; j<16; j++) { 
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let i=0; i<16; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridSquare");
        gridDiv.addEventListener("mouseover", (e) => {
            gridDiv.classList.add("mouseOverStyle")
        });
        gridRow.appendChild(gridDiv)
    }
    cont.appendChild(gridRow)
}

// event listeners
