//As chaves do objeto podem ser apenas string ou symbol.
//se vc passar outra chave, ela é convertida para string
// por isso esse caso o objeto ficou com apenas dois pares de chave e valor

const obj = {};
obj[10] = "Number";
obj["10"] = "String"; //sobrescreveu a linha de cima
obj[true] = "Boolean";
obj["true"] = "String"; //sobrescreveu a linha de cima
console.log(obj[10]); //string
console.log(obj["10"]); //string
console.log(obj[true]); //string
console.log(obj["true"]); //string
console.log(obj) // { '10': 'String', true: 'String' }
