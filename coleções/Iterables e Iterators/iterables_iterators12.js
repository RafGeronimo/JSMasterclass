const languages = ["Fortran", "Lisp", "COBOL"];
//todo iterable tem uma propriedade "Symbol.iterator"
//Aqui estamos pegando essa propriedade do languages e invocando-a pelo ()
//Tambem estamos atribuindo essa "funcao a uma variavel"
const iterator = languages[Symbol.iterator]();
//a funcao .next() que é invocada pelo for of, spread operator, etc...
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());