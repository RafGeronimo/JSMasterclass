const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "JavaScript"
});
javascript.name = "ECMAScript";
delete javascript.name; //operador delete: serve para deletar uma propriedade
//Não apaga a propriedade name pois o atributo configurable esta predefinido como false
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
