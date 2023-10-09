const rectangle = {};
Object.defineProperty(rectangle, "x", {
    set(x) {
        this.base = x;
    }
});
Object.defineProperty(rectangle, "y", {
    set (y){
        this.height = y;
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