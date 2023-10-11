const person1 = {
    name: "Linus Torvald",
    year: 1969,
    city: "Helsinki",
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};

const person2 = {
    name: "Bill Gates",
    year: 1955,
    city: "Seattle",
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};


console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());