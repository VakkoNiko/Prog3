let socket = io();
let sideX = 15 
let sideY= 15
let side = 50


let winter = document.getElementById("winter");

let spring = document.getElementById("spring");

let summer = document.getElementById("summer");

let fall = document.getElementById("fall");



function intoWinter(evt){
    
}

winter.addEventListener("click", intoWinter);


function setup() {
    frameRate(5);
    createCanvas(sideX * side, sideY * side);
    background('grey');

}


function drawGame(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            } else if (matrix[y][x] == 5) {
                fill("black")
            }
            else if (matrix[y][x] == 6) {
                fill("#741b47")
            }
            else {
                fill("white")
            }
            rect(x * side, y * side, side, side)

        }

    }
   
}

//  for (let i = 0; i< grassArr.length;i++){
//     grassArr[i].mul();
// }
//  for (let i = 0; i< grassEaterArr.length;i++){
//      //grassEaterArr[i].eat();
//      console.log(eat)

// }
// }

socket.on('matrix', drawGame)