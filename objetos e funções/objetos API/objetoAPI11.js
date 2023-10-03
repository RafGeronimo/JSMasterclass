const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
// não altera o nome da propriedade pois o atributo "writable" é predefinido como falso
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
