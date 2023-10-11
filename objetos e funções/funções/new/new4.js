// Para evitar a duplicação de métodos, pode-se utilizar o conceito de herança baseada em protótipos:
// Refatorando o código do new3.js da seguinte maneira:
// Desta maneira o método getAge: [Function: getAge] vai para o protótipo, não aparecendo diretamente no objeto criado

const personPrototype = {
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};

const createPerson = function (name, year, city) {
     const person = {
        name,
        year,
        city,
    };
    Object.setPrototypeOf(person, personPrototype)
    return person;
};


const person1 = createPerson ("Linus Torvald", 1969, "Helsinki");
const person2 = createPerson ("Bill Gates", 1955, "Seattle");

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
console.log(person2.__proto__);
console.log(person1.__proto__ === person2.__proto__);