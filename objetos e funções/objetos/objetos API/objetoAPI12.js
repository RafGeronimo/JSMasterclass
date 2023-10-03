const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    writable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
// Altera o nome da propriedade pois o atributo "writable" foi definido como true.
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
