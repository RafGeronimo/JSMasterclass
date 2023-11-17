//O weakMap NAO permite outro tipo de chave que nao seja objeto.
//Lançando um erro caso isso ocorra:
const wm1 = new WeakMap();
const obj1 = "key1";
const obj2 = "key2";
wm1.set(obj1, "value1");
wm1.set(obj2, "value2");
console.log(wm1);