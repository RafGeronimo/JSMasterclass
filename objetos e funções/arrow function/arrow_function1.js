// Relembrando a construção de funções de primeira classe que podem ser: 
// 1. Atribuidas a variáveis
// 2. Retornadas de uma função
// 3. Passadas como parâmetro

const sum = function (a,b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const calculator = function (fn) {
    return function (a,b){
        return fn(a,b);
    }
};

console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))