// Ao comparar com o exemplo arrow_function1.js vemos que a arrow function
// permite uma escrita mais enxuta do código (mas nao necessariamente mais legível)
// por isso temos que ter bom senso em onde aplicar as arrow functions
const sum = (a,b) => {
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
};

const calculator = (fn) => {
    return (a,b) => {
        return fn(a,b);
    }
};

console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))