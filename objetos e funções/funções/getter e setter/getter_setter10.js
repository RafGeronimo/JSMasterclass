const rectangle = {};
Object.defineProperty(rectangle, "x", {
    set(x) {
        if (x > 0){
            this.base = x;
        }else{
            console.log("Invalid value for x");
        }
    }
});
Object.defineProperty(rectangle, "y", {
    
    set (y){
        if (y > 0) {
            this.height = y;
        }else{
            console.log("Invalid value for y");
        }
    }
});
Object.defineProperty(rectangle, "area", {
    get (){
        return this.base*this.height;
    }
});

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);