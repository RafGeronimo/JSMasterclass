const ooLanguages = ["Smalltakl", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];

//concat: retorna UM NOVO ARRAY resultante da concatenação de outros dois arrays.
//OBS: não modifica os arrays concatenados.
const languages = ooLanguages.concat(functionalLanguages);

console.log(languages); // ["Smalltakl", "C++", "Simula", "Haskell", "Scheme"]
console.log(ooLanguages); //["Smalltakl", "C++", "Simula"]
console.log(functionalLanguages); // ["Haskell", "Scheme"]