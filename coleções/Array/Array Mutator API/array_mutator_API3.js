const languages = ["Python", "C", "Java"];
console.log(languages);
// splice(posição de remoção, qtd de elementos a serem removidos, elementos a serem adicionados)
console.log(languages.splice(1,1)) // [C] - (retorna um array com o elemento removido)
console.log(languages); // ["Python", "Java"]
console.log(languages.splice(1, 0, "C++", "C#")); // []
console.log(languages); // ["Python", "C++", "C#", "Java"]
console.log(languages.splice(1, 2, "C")); //["C++", "C#"]
console.log(languages); // ["Python", "C", "Java"]