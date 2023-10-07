class Grass extends LivingCreature{


     mul(){
        let newCell = random(this.chooseCell(0));
        if(newCell && this.multiply >= 1){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            grassArr.push(new Grass(newX,newY));
            this.multiply = 0;
        }
        this.multiply+=1;
    }
     
}




class GrassEater extends LivingCreature{
    constructor(x,y){
        super(x, y);
        this.energy = 3;

    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character){
        this.getNewCoordinates();
        return super.chooseCell(character);
    
}

mul(){
    var found = this.chooseCell(0)
    var newCell = random(found);
    if(newCell && this.energy >= 180 ){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 2;
        grassEaterArr.push(new GrassEater(newX,newY));
        this.energy = 0;
    }
}


eat(){
    let found = this.chooseCell(1);
    let newCell = random(found);

    if(newCell){
        this.energy+=4
        let newX = newCell[0];
        let newY = newCell[1];
        matrix[newY][newX] = 2;
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

        if(this.energy>=80){
            this.mul();
        }else if(this.energy>=200){
            this.die()
        }
    }else{
        this.move();
    }
}

move(){
    let found = this.chooseCell(0);
    let newCell = random(found);

    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 2;        
        matrix[this.y][this.x] = 0;
    

        this.x = newX;
        this.y = newY;
    }
    this.energy-=4;

    if(this.energy <= 0){
        this.die();

    }

}

die(){
    for(let i in grassEaterArr){
        if(this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y){
            grassEaterArr.splice(i,1);
        }
    }
    matrix[this.y][this.x] = 0;
  }
}


