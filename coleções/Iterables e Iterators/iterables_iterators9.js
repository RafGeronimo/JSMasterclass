const languages = new Set(["Fortran", "Lisp", "COBOL"])
//Para extrair a array input do Set pode-se utilizar o SPREAD operator:
console.log([...languages]);
//Ou a operação Array.from:
console.log(Array.from(languages));