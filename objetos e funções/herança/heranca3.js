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

// mesmo herdando a propriedade do seu prototipo, o console log mostra apenas as propriedades contidas no objeto "consolado"
//para acessar a propriedade paradigm (herdada do prototipo) deve-se fazer "scheme.paradigm" ou "javascript.paradigm"
console.log(functionalLanguage);
console.log(scheme);
console.log(javascript);
