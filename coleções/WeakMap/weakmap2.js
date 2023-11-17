//chaves do weakmap devem ser object:
//set: adiciona um conjunto de chave e valor ao weakmap
//has: retorna true se a chave existir
const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "value1");
wm1.set(obj2, "value2");
console.log(wm1.has(obj1));
console.log(wm1.has(obj2));
console.log(wm1); //nao mostra, mas as chaves e valores estao la (confia)