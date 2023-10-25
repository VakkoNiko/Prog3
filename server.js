var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3001, function () {
    console.log("App is running on port 3000");
});




 Grass = require('./class.js')
 GrassEater = require('./FirstGrassEater.js')
 NewGrassEater = require('./GreatEater.js')
 NewRed = require('./redE.js')
 Monster = require('./monster.js')
 random = require("./random");
 MegaMonster = require("./MegaMonster.js");

let sideX = 15 
let sideY= 15
matrix = [];
grassArr = [];
grassEaterArr = []
newEaterArr = []
newRedArr = []
monsterArr = []
megaMonsterArr = []


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
    character(2, 6)
    character(3, 5)
    character(4, 3)
    character(5, 8)
    character(6, 20)

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
            } else if (matrix[y][x] == 6) {
                megaMonsterArr.push(new MegaMonster(x, y))
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
    for (let i in megaMonsterArr) {
        megaMonsterArr[i].eat();
    }
    io.emit('matrix', matrix)

}

let intervalID;
createCanvas()

function startGame() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        drawGame()
    }, 30);
}



io.on('connection', function (socket) {
    socket.emit('matrix', matrix)
    startGame()
})