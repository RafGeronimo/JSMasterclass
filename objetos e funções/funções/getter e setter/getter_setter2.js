const rectangle = {
    set x(x) {
        this.x = x;
    } ,
    set y(y){
        this.y = y;
    },
    get area(){
        return this.x*this.y;
    }
}

//Essa construção trará um loop infinito, pois quando a propriedade x ou y é acessada
// ele acessará a propriedade this.x = x. Porém o this.x chama o set, gerando o loop infinito

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area);