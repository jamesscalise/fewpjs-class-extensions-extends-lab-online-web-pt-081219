// Your code here
class Polygon{
    constructor(array){
        this.sides = array;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce(function(pv, cv) { return pv + cv; }, 0);

    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.sides[1] + this.sides[2] < this.sides[0]){
            return false;
        }else{
            return true;
        }
    }
}

class Square extends Polygon{
    get area(){
        return (this.sides[0] **2);
    }

    get isValid(){
        if (this.sides[0] === this.sides[1]){
            return true;
        }else{
            return false;
        }
    }
}