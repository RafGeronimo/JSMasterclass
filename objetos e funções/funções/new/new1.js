const person1 ={
    name: "Linus Torvald",
    year: 1969,
    city: "Helsinki",
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
    //new Date() -> retorna a data atual
    //.getFullYear -> retorna o ANO da data atual.
};

console.log(person1);
console.log(person1.getAge());