const languages = ["Python", "C", "Java"];
console.log(languages); //["Python", "C", "Java"]
console.log(languages.unshift("Ruby")); //4
console.log(languages.unshift("Go")); //5
console.log(languages); // ["Go", "Ruby", "Python", "C", "Java"]
console.log(languages.shift()); // Go
console.log(languages.shift()); // Ruby
console.log(languages); ["Python", "C", "Java"];

//Note que o unshift retorna o length do array
//O shift retorna o elemento removido