//classes não sao pre-inicializadas no programa, portanto não podem ser instanciadas antes da declaração

const square = new Square();
const Square = class {};
console.log(square);

const square2 = new Square2();
class Square2 {}
console.log(square);
