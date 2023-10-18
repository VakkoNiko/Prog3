let LivingCreature = require('./LivingCreature')
let random = require("./random");
module.exports = class Grass extends LivingCreature {


    mul() {
        let newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            grassArr.push(new Grass(newX, newY));
            this.multiply = 0;
        }
        this.multiply += 1;
    }

}






