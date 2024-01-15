class Shape {
  toString() {
    return `area: ${this.calculeteArea()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  toString() {
    return `side: ${this.side} area: ${super.toString()}`;
  }

  calculeteArea() {
    return Math.pow(this.side, 2);
  }
}

const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculeteArea());

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculeteArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  toString() {
    return `radius: ${this.radius} area: ${super.toString()}`;
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
}

const circle = Circle.fromArea(314.1592653589793);
console.log(circle);
console.log(circle.toString());
console.log(circle.calculeteArea());
