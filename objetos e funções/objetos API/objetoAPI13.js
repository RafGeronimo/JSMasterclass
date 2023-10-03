const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    writable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
delete javascript.name;
//Não apaga a propriedade name pois o atributo configurable esta predefinido como false
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
