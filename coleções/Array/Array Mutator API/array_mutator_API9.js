let languages = ["Python", "C", "Java"];
console.log("Original = ", languages);
//Preenche o array com o elemento "JavaScript"
languages.fill("JavaScript");
console.log(languages);

languages = ["Python", "C", "Java"];
console.log("Original = ", languages);
//Preenche o array com o elemento "JavaScript" da posição 1 até o fim
languages.fill("JavaScript", 1);
console.log(languages);

languages = ["Python", "C", "Java"];
console.log("Original = ", languages);
//Preenche o array com o elemento "JavaScript" da posição 0 até a posição 2-1;
languages.fill("JavaScript", 0, 2);
console.log(languages);