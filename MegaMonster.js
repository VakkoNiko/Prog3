let LivingCreature = require('./LivingCreature')
let random = require("./random");

module.exports = class MegaMonster extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 30;

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
        if (newCell && this.energy >= 100) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            newRedArr.push(new NewRed(newX, newY));
            this.energy = 0;
        }
    }
    mull() {
        let newCell = random(this.chooseCell(4));
        if (newCell && this.multiply >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            grassArr.push(new Grass(newX, newY));
            this.multiply = 0;
        }
        this.multiply += 400;
    }

    eat() {
        let found = this.chooseCell(0);
        let newCell = random(found);

        if (newCell) {
            this.energy += 4
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

            if (this.energy >= 200) {
                this.energy -= 5
            }
        } else {
            this.move();
        }
    }

    move() {
        let found = this.chooseCell(1, 3);
        let newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        if (this.energy <= 0) {
            this.die();

        } else if (this.energy > 20) {
            this.mull();
        }
    }
    die() {
        for (let i in newRedArr) {
            if (this.x == newRedArr[i].x && this.y == newRedArr[i].y) {
                newRedArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
