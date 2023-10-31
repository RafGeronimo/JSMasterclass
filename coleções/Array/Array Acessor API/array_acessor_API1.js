const languages = ["Python", "C", "Java"];


//indexOf: retorna a posição do primeiro elemento encontrado:
console.log(languages.indexOf("Python")); //0

//lastIndexOf: retorna a posição do último elemento encontrado:
console.log(languages.lastIndexOf("C"));

//Caso o elemento não exista é retornado -1:
console.log(languages.indexOf("JavaScript"));
console.log(languages.lastIndexOf("JavaScript"));