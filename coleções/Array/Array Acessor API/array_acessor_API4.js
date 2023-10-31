const languages = ["Smalltakl", "C++", "Simula", "Haskell", "Scheme"];

//slice: Retorna partes de um determinado array de acordo com a posição de início e fim
//OBS: retorna os elementos até a posição n-1
//OBS: não modifica o array original.

console.log(languages.slice(0,2)); // ["Smalltalk", "C++"]
console.log(languages.slice(2,4)); // ["Simula", "Haskell"]
console.log(languages.slice(1)); // ["C++", "Simula", "Haskell", "Scheme"]
