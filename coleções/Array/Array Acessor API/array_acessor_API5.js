const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];

//join: Converte um array em uma STRING, juntando os elementos com base em um separador.
// É o inverso da operação split da string API.

console.log(languages.join(";")); //"Smalltalk;C++;Simula;Haskell;Scheme"
console.log(languages.join(",")); //"Smalltalk,C++,Simula,Haskell,Scheme"
console.log(languages.join(" ")); //"Smalltalk C++ Simula Haskell Scheme"
