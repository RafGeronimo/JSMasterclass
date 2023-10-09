//Uma forma simplificada de construir um método é abrir e fechar parensetis após ele
//não necessitando escrever a palavra "function"

const rectangle = {
    base: 10, //propriedade
    height: 2, //propriedade
    calculateArea() { //método
        return this.base*this.height
    }
}

console.log(rectangle.calculateArea());