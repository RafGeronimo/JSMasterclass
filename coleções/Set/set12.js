//Tecnica para tirar duplicação de elementos de array (sem utilizar o Set):
let array = [10, 10, 10];
const obj = {};
array.forEach((el) => obj[el] = undefined);
array = Object.keys(obj);
console.log(array); // resolve em partes, mas como objetos tem chaves do tipo string ou symbol, ele converteu o valor para string.