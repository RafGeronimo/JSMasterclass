const ws1 = new WeakSet();
//add: Adiciona elemento ao WeakSet:
const obj1 = {};
const obj2 = {}; 
ws1.add(obj1);
ws1.add(obj2);
//has: retorna true se o elemento existir no weakset
console.log(ws1.has(obj1));
console.log(ws1);