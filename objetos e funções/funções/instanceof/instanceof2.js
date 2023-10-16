// Qual a diferença entre o istanceof e o typeof?
// O typeof revela o tipo de dado de uma determinada variável:

const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(typeof date); // tipo de dado: object.