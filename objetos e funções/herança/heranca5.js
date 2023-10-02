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

//hasOwnProperty -> retorna true se a propriedade percente ao objeto.

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}
