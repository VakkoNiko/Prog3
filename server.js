var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3000, function () {
    console.log("App is running on port 3000");
});




let Grass = require('./class.js')
let GrassEater = require('./FirstGrassEater.js')
let NewGrassEater = require('./GreatEater.js')
let NewRed = require('./redE.js')
let Monster = require('./monster.js')
let random = require("./random");


let sideX = 40 
let sideY= 40
matrix = [];
grassArr = [];
grassEaterArr = []
newEaterArr = []
newRedArr = []
monsterArr = []


for (let i = 0; i < sideY; i++) {
    matrix.push([]);
    for (let j = 0; j < sideX; j++) {
        matrix[i].push(0);
    }
}

function character(quantity, char) {
    let initialNumber = 0;
    while (initialNumber < quantity) {
        let x = Math.floor(random(sideX));
        let y = Math.floor(random(sideY));
        if (matrix[y][x] == 0) {
            matrix[y][x] = char;
        }
        initialNumber++;
    }
}



function createCanvas() {

    character(1, 10)
    character(2, 3)
    character(3, 5)
    character(4, 10)
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

function drawGame() {
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
    io.emit('matrix', matrix)

}

let intervalID;
createCanvas()

function startGame() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        drawGame()
    }, 1000);
}



io.on('connection', function (socket) {
    socket.emit('matrix', matrix)
    startGame()
})