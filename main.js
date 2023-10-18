let socket = io();
let sideX = 40 
let sideY= 40
let side= 20


function setup() {
    createCanvas(sideX * side, sideY * side);
    background('grey');

    // var gr = new Grass(1,2);
    // var emptyCells = gr.chooseCell(0);
    // console.log(emptyCells);

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