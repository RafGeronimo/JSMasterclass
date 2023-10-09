// Utilizando a função set para definir as propriedades deve-se utilizar 
// diferentes chaves para a função setter e a propriedade do objeto
//por isso que essa construção funciona e a do ex getter_setter2.js não

const rectangle = {
    set x(x) {
        this.base = x;
    } ,
    set y(y){
        this.height = y;
    },
    get area(){
        return this.base*this.height;
    }
}

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);