let socket = io();
let sideX = 15 
let sideY= 15
let side = 50


let winter = document.getElementById("winter");

let spring = document.getElementById("spring");

let summer = document.getElementById("summer");

let fall = document.getElementById("fall");

let actionButton = document.getElementById("button_for_die");

let button_for_live = document.getElementById("button_for_live");

let MinusX2 = document.getElementById("MinusX2");

let X2 = document.getElementById("X2");


var winterState = false
var springState = false
var fallState = false;
var summerState = false;
var actionState = false
var nullX2 = false



function intoWinter(evt){
     winterState = true;
     springState = false;
     fallState = false;
     summerState = false;
}

winter.addEventListener("click", intoWinter);



function intoSpring(evt){
    springState = true;
    winterState = false;
    fallState = false;
    summerState = false;
}

spring.addEventListener("click", intoSpring);



function intoFall(evt){
    console.log("Fall")
    fallState = true;
    winterState = false;
    springState = false;
    summerState = false;
}

fall.addEventListener("click", intoFall);


function intoSummer(evt){

    fallState = false;
    winterState = false;
    springState = false;
    summerState = true;
}

summer.addEventListener("click", intoSummer);





function actionFucntion(evt){
    actionState = true
    socket.emit("emd game", actionState)
}

actionButton.addEventListener("click", actionFucntion);



function actionFucntionPlay(evt){
    actionState = false
    socket.emit("emd game", actionState)
}


button_for_live.addEventListener("click", actionFucntionPlay);


function X2fucntion(evt){
    nullX2 = true
    socket.emit("nulling", nullX2)
}


X2.addEventListener("click", X2fucntion);


function MinusX2fucntion(evt){
    nullX2 = false
    socket.emit("nulling", nullX2)
}


MinusX2.addEventListener("click", MinusX2fucntion);

function setup() {
    frameRate(5);
    createCanvas(sideX * side, sideY * side);
    background('grey');

}




function drawGame(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            
            if (matrix[y][x] == 1 && winterState == false && springState == false && fallState == false && summerState == false) {
                fill("green")

            }  else if (matrix[y][x] == 1 && winterState == true && springState == false && fallState == false&& summerState == false) {
                fill("#00ffff")
            }

            else if (matrix[y][x] == 1 && springState == true && fallState == false && winterState == false && summerState == false) {
                fill("#00cc00")
            }

            else if (matrix[y][x] == 1 && fallState == true && springState == false && winterState == false && summerState == false) {
                fill("#ffff00")
            }
            
            else if (matrix[y][x] == 1 && summerState == true && fallState == false && springState == false && winterState == false) {
                fill("green")
            }


            else if (matrix[y][x] == 2) {
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

