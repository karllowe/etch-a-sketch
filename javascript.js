// create grid of 16 square divs
const cont = document.querySelector(".container");

for (let i=0; i<16; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridSquare");
    cont.appendChild(gridDiv)
}


