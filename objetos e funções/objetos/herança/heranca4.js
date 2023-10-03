const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};

// Sempre que uma propriedade é consultada em um objeto, e ela não existe
// automaticamente procura-se no PROTOTIPO do objeto, se não existir, vai para o
// prototipo do prototipo e assim sucessivamente.

console.log(functionalLanguage);
console.log(scheme.paradigm);
console.log(javascript.paradigm);