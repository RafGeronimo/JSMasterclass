//As classes funcionam de forma similar às funções construtoras
function Square(side) {
  this.side = side;
}

Square.prototype.calculeteArea = function () {
  return Math.pow(this.side, 2);
};

Square.prototype.toString = function () {
  return `side: ${this.side} area: ${this.calculeteArea()}`;
};

Square.fromArea = function (area) {
  return new Square(Math.sqrt(area));
};

const square = Square.fromArea(16);
console.log(square.toString());
console.log(square.calculeteArea());
