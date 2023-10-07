var matrix = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 3, 0, 0, 3, 0, 0, 2, 1, 0, 2, 3, 0, 5, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 2, 3, 0, 2, 1, 0, 2, 0, 4, 0, 1],
    [2, 0, 1, 0, 4, 0, 0, 4, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 3, 0, 0, 2, 1, 0, 2, 3, 0, 0, 1],
    [0, 0, 1, 3, 0, 0, 5, 0, 5, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 3, 0, 2, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [2, 0, 1, 4, 0, 0, 0, 0, 0, 2, 1, 0, 2, 3, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 3, 0, 0, 2, 1, 0, 2, 0, 4, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 4, 1, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 3, 3, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 5, 2, 1, 0, 2, 0, 0, 0, 1]



];


var side = 30
const grassArr = [];
const grassEaterArr = []
const newEaterArr = []
const newRedArr = []
const monsterArr = []
function setup() {
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    // var gr = new Grass(1,2);
    // var emptyCells = gr.chooseCell(0);
    // console.log(emptyCells);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            } else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            } else if (matrix[y][x] == 3) {
                newEaterArr.push(new NewGrassEater(x, y))
            } else if (matrix[y][x] == 4) {
                newRedArr.push(new NewRed(x, y))
            } else if (matrix[y][x] == 5) {
                monsterArr.push(new Monster(x, y))
            }


        }

    }

}


function draw() {

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
    for (let i in grassArr) {
        grassArr[i].mul();

    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in newEaterArr) {
        newEaterArr[i].eat();
    }
    for (let i in newRedArr) {
        newRedArr[i].eat();
    }
    for (let i in monsterArr) {
        monsterArr[i].eat();
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