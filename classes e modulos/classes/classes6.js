class Square {
  constructor(side) {
    this.side = side;
  }

  toString() {
    return `side: ${this.side}`;
  }

  calculeteArea() {
    return `area: ${Math.pow(this.side, 2)}`;
  }
}

const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculeteArea());
