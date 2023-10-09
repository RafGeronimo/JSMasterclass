const rectangle = {
    set x(x) {
         
        if (x > 0){
            this.base = x;
        }else{
            console.log("Invalid value for x")
        }
    } ,
    set y(y){
        if (y > 0) {
            this.height = y;
        }else{
            console.log("Invalid value for y")
        }
    },
    get area(){
        return this.base*this.height;
    }
}

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);