//Protocolo de iteracao para string:
//temos apenas o Symbol.iterator
//a operacao next(): devolve um objeto com o cada elemento (caractere) da string
//e o status da iteracao.
const language = "COBOL"
const iterator = language[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());