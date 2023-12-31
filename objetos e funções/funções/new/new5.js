//A função construtora é declarada com letra maiúscula para que o programador lembre de invocá-la com o new
// A função construtora cria um novo objeto e associa suas props ao this

const Person = function (name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year,
    this.getAge = function () {
        return ((new Date()).getFullYear() - this.year);
    }
};

const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);

console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
console.log(person2.__proto__);
console.log(person1.__proto__ === person2.__proto__);