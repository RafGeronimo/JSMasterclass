//No caso de termos duas arrays para juntar, podemos utilizar as formas:

const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];
let languages = classicLanguages.concat(modernLanguages);
console.log(languages);

//com objetos do tipo iterables  (o que é o caso das arrays)
//pode-se utilizaro o SPREAD operator:
languages = [...classicLanguages, ...modernLanguages];
console.log(languages);