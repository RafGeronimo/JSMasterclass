const languages = ["Python", "C", "Java"];
console.log(languages); //["Python", "C", "Java"]
console.log(languages.push("Ruby")); // 4
console.log(languages.push("Go")); // 5
console.log(languages); // ["Python", "C", "Java", "Ruby", "Go"]
console.log(languages.pop()); //Go
console.log(languages.pop()); //Ruby
console.log(languages);

//note que o console.log do push retorna o novo length do array;
//O console.log do pop retorna o elemento que está sendo removido do array