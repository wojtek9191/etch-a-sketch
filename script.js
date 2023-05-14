console.log('hi');


function createDivs(size) {

let container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let divsNum = size * size;

for (let i = 0; i < divsNum; i++) {
    let div = document.createElement("div");
    div.onmouseover = function() {
        div.style.backgroundColor = "red"
    }
    container.appendChild(div);
}



}

createDivs(100);







