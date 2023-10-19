// se existe mais de um parâmetro na arrow function devemos colocá-los entre parensetis ()
// No entanto, se há apenas um, pode-se omitir o parentesis como no caso da const calculator:

const sum = (a,b) => a + b;
const subtract = (a,b) => a - b;
const calculator = fn => (a,b) => fn(a,b);

console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))