//A variável implícita "this" permite que os métodos do objeto acessem as suas propriedades

const rectangle = {
    base: 10, //propriedade
    height: 2, //propriedade
    calculateArea: function () { //método
        return this.base*this.height
    }
}

console.log(rectangle.calculateArea());