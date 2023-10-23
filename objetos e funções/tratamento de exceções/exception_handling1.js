const Rectangle = function (base, height) {
    this.base = base;
    this.height = height;
    this.calculateArea = function () {
        if (this.base > 0 && this.height > 0) {
            return this.base*this.height;
        }else{
            throw "Invalid value for base or height"
        }
    }
};

const rectangle = new Rectangle (10 , 2);
console.log(rectangle.calculateArea());