const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
// Em um mapa podemos aplicar o for of para imprimir as chaves e valores:
for (let language of languages) {
    console.log(language);
};
// Poderíamos ainda utilizar o destructuring para extrair a linguagem e o ano:
for (let [language, year] of languages) {
    console.log(language, year);
};