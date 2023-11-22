const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
// Para extrair um array de arrays do Mapa, podemos utilizar o spread operator:
console.log([...languages]);
//Mas também poderia utilizar o "Array.from":
console.log(Array.from(languages));