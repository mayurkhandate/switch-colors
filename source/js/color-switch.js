let blueBtn = document.getElementById("blueBtn");
let greenBtn = document.getElementById("greenBtn");
let redBtn = document.getElementById("redBtn");
let yellowBtn = document.getElementById("yellowBtn");
let cyanBtn = document.getElementById("cyanBtn");
let purpleBtn = document.getElementById("purpleBtn");
let board = document.getElementById("board");

blueBtn.addEventListener("click", blueFunction);
function blueFunction() {
    board.style.backgroundColor = "blue";
}


greenBtn.addEventListener("click", greenFunction);
 function greenFunction() {
    board.style.backgroundColor = "green";
}


redBtn.addEventListener("click", redFunction);
 function redFunction() {
    board.style.backgroundColor = "grey";
}



yellowBtn.addEventListener("click", yellowFunction);
 function yellowFunction() {
    board.style.backgroundColor = "yellow";
}

cyanBtn.addEventListener("click", cyanFunction);
 function cyanFunction() {
    board.style.backgroundColor = "cyan";
}


purpleBtn.addEventListener("click", purpleFunction);
 function purpleFunction() {
    board.style.backgroundColor = "purple";
}


let textBox = document.getElementById("text");

textBox.addEventListener("change", changeText);

function changeText() {
   
    let boardtext = document.getElementById("boardText");
    boardtext.textContent = textBox.value;
}