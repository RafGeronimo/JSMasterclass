// A function expression não é previamente carregada, podendo ser chamada apenas depois da inicializaç~çao

console.log(sum(2, 2));
const sum = function(a, b) {
    return a + b;
}
