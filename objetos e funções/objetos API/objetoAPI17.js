const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript"; // nao funciona por causa do freeze
javascript.author = "Brendan Eich"; // nao funciona por causa do freeze
delete javascript.year; // não funciona por causa do freeze.
console.log(javascript);
console.log(Object.isExtensible(javascript)); //false
console.log(Object.isSealed(javascript)); //true
console.log(Object.isFrozen(javascript)); //true

//freeze permite apenas ler as propriedades do objeto
// apenas não permite ADICIONAR, DELETAR ou ALTERAR propriedades.
