//Arrow functions não possuem suas próprias variáveis this e arguments
//Por isso o this não é injetado no método.
    //Sendo assim o this.year é undefined
    //A chamada de person.getAge() retorna NaN.

const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => {
        return (new Date()).getFullYear() - this.year;
    }
}

console.log(person);
console.log(person.getAge());