let LivingCreature = require('./LivingCreature')
let random = require("./random");

module.exports = class MegaMonster extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 100;

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

    mull() {
        let newCell = random(this.chooseCell(4));
        if (newCell && this.multiply >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            megaMonsterArr.push(new MegaMonster(newX, newY));
            this.multiply = 0;
        }
        this.multiply += 40;
    }

    eat() {
        let found = this.chooseCell(0);
        let newCell = random(found);

        if (newCell) {
            this.energy -= 7
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
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




            let found1 = this.chooseCell(1);
            let newCell1 = random(found1);


            if (this.energy <= 40){
                if (newCell1) {
           
            this.energy += 2
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
            for (let i = 0; i < grassArr.length; i++) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            }


            if (this.energy >= 200) {
                this.energy -= 5
            }
        } else {
            this.move();
        }
    }
    }
    move() {
        let found = this.chooseCell(0,1);
        let newCell = random(found);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;
        }
        this.energy--;

        if (this.energy >= 300) {
            this.die();

        } else if (this.energy > 20) {
            this.mull();
        }
    }
    die() {
        for (let i in megaMonsterArr) {
            if (this.x == megaMonsterArr[i].x && this.y == megaMonsterArr[i].y) {
                megaMonsterArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
