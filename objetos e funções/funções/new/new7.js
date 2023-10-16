 // Estamos criando uma função construtora para agir como o operador new
 // Por isso o primeiro parâmetro passado para esse operador "_new" é a função construtura "Person"
 // Na aula de Call, apply e bind vimos que call e apply invocam uma função passando o seu this. isso é útil nesse momento.
const _new = function(fn, ...params) {
    console.log(params); //params é o rest parametros array com parametos passados
    obj = {};
    //ligamos o prototype da função passada por parâmetro (Person) ao nosso "operador new"
    Object.setPrototypeOf(obj, fn.prototype);
    //no call precisamos saber de antemão os parâmetros passados, como temos parâmetros dinâmicos, é melhor utilizar o apply e passar para a chamada.
    //assim ja temos o objeto sendo criado: os parâmetros recebidos pelo rest parameter são montados dentro do apply
    // o apply  invocou a função Person passando o seu "this" que é o "obj" e populou o obj com os params (name, city e year)
    fn.apply(obj, params);
    return obj;
}

const Person = function (name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year
};

Person.prototype.getAge = function () {
    return ((new Date()).getFullYear() - this.year);
}

const person1 = _new(Person, "Linus Torvald", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
console.log(person2.__proto__);
console.log(person1.__proto__ === person2.__proto__);

//OBS: NUNCA esqueça de utilizar o operador new quando for utilizar uma função construtora.