let LivingCreature = require('./LivingCreature')
let random = require("./random");
module.exports = class Monster extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);

    }

    mul() {
        var found = this.chooseCell(0)
        var newCell = random(found);
        if (newCell && this.energy >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            monsterArr.push(new (newX, newY));
            this.energy = 0;
        }
    }


    eat() {
        let found = this.chooseCell(1);
        let newCell = random(found);

        if (newCell) {
            this.energy += 15
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            for (let i = 0; i < grassArr.length; i++) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            // this.energy++;

            if (this.energy < 10) {
                this.mul();
            }
        } else {
            this.move();
        }
    }

    move() {
        let found = this.chooseCell(0);
        let newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 1;


            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        if (this.energy <= 0) {
            this.die();

        }

    }

    die() {
        for (let i in monsterArr) {
            if (this.x == monsterArr[i].x && this.y == monsterArr[i].y) {
                monsterArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}









