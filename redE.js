class NewRed{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = [];
        this.multiply = 0;
    }

    getNewCoordinates(){
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
    chooseCell(character){
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}

mul(){
    var found = this.chooseCell(0)
    var newCell = random(found);
    if(newCell && this.energy >= 80 ){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 4;
        newRedArr.push(new NewRed (newX,newY));
        this.energy = 0;
    }
}
mull(){
    let newCell = random(this.chooseCell(4));
    if(newCell && this.multiply >= 12){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 5;
        grassArr.push(new Grass(newX,newY));
        this.multiply = 0;
    }
    this.multiply+=100;
}

eat(){
    let found = this.chooseCell(0);
    let newCell = random(found);

    if(newCell){
        this.energy+=40
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[newY][newX] = 5;
       for(let i=0; i<grassArr.length;i++){
        if(newX == grassArr[i].x && newY == grassArr[i].y){
            grassArr.splice(i,1);
            break;
        }
       }
        matrix[this.y][this.x] = 0;

        this.x =newX;
        this.y = newY;
        // this.energy++;

        if(this.energy>=200){
            this.energy-=5
        }
    }else{
        this.move();
    }
}

move(){
    let found = this.chooseCell(1,3);
    let newCell = random(found);

    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 5;        
        matrix[this.y][this.x] = 0;
    

        this.x = newX;
        this.y = newY;
    }
    this.energy--;

    if(this.energy <= 0){
        this.die();

    }else if(this.energy > 20){
        this.mull();
}
}
die(){
    for(let i in newRedArr){
        if(this.x == newRedArr[i].x && this.y == newRedArr[i].y){
            newRedArr.splice(i,1);
        }
    }
    matrix[this.y][this.x] = 0;
  }
}


