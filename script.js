
function createDivs(size) {

let container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let divsNum = size * size;

for (let i = 0; i < divsNum; i++) {
    let div = document.createElement("div");
    div.onmouseover = function() {
    div.style.backgroundColor = "red";
    }
    container.appendChild(div);
}

}

//createDivs(16);


function selectSize() {
    let userInput = prompt("Please provide a number between 1 and 100 to select the size of the board", 16);
    if(userInput < 1) {
    alert("Oops! The number must be greater 0.");
}
    else if(userInput > 100) {
    alert("Oops! The number cannot be greather than 100.");
}
    else if(userInput == !isNaN) {
    alert("Oops! Please provide a valid number.");
}
    
    return userInput;
}


const selectButton = document.querySelector("#size");
selectButton.addEventListener("click", function() {

let boardSize = selectSize();
createDivs(boardSize);

})


//selectSize();



