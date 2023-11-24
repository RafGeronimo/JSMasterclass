//Esse protocolo de iteração tb serve para o Set:
const languages = new Set(["Fortran", "Lisp", "COBOL"]);
let iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Outros iterators do Set:
//entries(): Fornece chave e valor, porém no Set a chave é igual ao valor.
iterator = languages.entries()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//keys(): fornece as chaves (que são iguais aos valores no Set) de cada elemento da array:
iterator = languages.keys();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//values(): fornece o valor de cada elemento da array
iterator = languages.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());