//delete: remove um par de chaves e valores do weakmap:
const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "value1");
wm1.set(obj2, "value2");
console.log(wm1);
wm1.delete(obj1);
wm1.delete(obj2);
console.log(wm1.get(obj1));
console.log(wm1.get(obj2));