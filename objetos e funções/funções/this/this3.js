//Construção do método fora do objeto

const calculateArea = function () {
    return this.base*this.height;
}

//Construção do objeto com propriedades e um método
const rectangle = {
    base:20,
    height: 5,
    calculateArea
};

console.log(calculateArea()); //NaN pois ele não reconhece o this em escopo global
//Invocação do método "calculateArea" existente no objeto rectangle.
console.log(rectangle.calculateArea());