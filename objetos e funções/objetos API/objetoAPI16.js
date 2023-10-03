const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year; // não funciona por causa do seal.
console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));

//seal permite alterar propriedades
// apenas não permite ADICIONAR ou DELETAR propriedades.
