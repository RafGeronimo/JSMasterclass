//Exemplo de função fábrica para construção de objetos com estrutura identida (props e métodos):
//Foi utilizado o shortHandNotation (name, ao invés de name:name, etc.)
const createPerson = function (name, year, city) {
    return {
        name,
        year,
        city,
        getAge() {
            return ((new Date()).getFullYear() - this.year);
        }
    };
};


const person1 = createPerson ("Linus Torvald", 1969, "Helsinki");
const person2 = createPerson ("Bill Gates", 1955, "Seattle");

console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());