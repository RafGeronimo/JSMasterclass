const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);

//O protocolo de iteracao tb existe no Map
let iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//O Map tem outros iterators:

//entries(): similar ao Symbol.iterator, obtendo a CHAVE e VALOR de cada elemento
iterator = languages.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//keys(): Obtem no value as KEYS de cada elemento do Map.
iterator = languages.keys();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//values(): Obtem no value os VALORES de cada elemento do Map
iterator = languages.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());