//Aspectos das funções de primeira classe:
// 1 - podem ser atribuidas a uma variável;
// 2 - podem ser retornadas por outra função;
// 3 - pode-se passar uma função por parâmetro;

const sum = function (a,b) {
    return a + b;
};
const subtract = function (a,b) {
    return a - b;
};


//calculator é uma função que recebe outra função por parâmetro e a retorna
//deve-se também retornar a função recebida por parametro (linha 17);
const calculator = function(fn) {
    return function (a, b) {
        return fn(a, b);
    };
};

console.log(calculator(sum)(5,2));
console.log(calculator(subtract)(4,2));