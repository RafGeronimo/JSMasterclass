const circles = new WeakSet();
function Circle (radius) {
    circles.add(this);  //Registra no WeakSet todos os elementos criados pela funcao construtora
    this.radius = radius;
};

Circle.prototype.calculateArea = function () {
    //Queremos "proteger a função" permitindo calcular a area apenas de objetos que foram criados pela função construtora Circle: 
    if (!circles.has(this)) throw "Invalid object"; 
    return Math.PI * Math.pow(this.radius, 2)
}

//objeto criado pela função construtora circle:
const circle1 = new Circle(10);
//Objeto criado diretamente (sem funcao construtora):
const circle2 = {
    radius: 5
}
console.log(circle1.calculateArea());
// Tentando executar a função do protótipo dos objetos criados em Circle o objeto circle2 (dúvidas: rever aula de call, apply e bind)
console.log(circle1.calculateArea.call(circle2)); 
