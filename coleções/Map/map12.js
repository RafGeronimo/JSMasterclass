//O mapa pode ter qualquer tipo de dado como chave
// por isso nesse caso o 10 nao é sobrescrito pelo "10" nem o true pelo "true"
//construimos um mapa com 4 chaves e valores.

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");
console.log(map.get(10));
console.log(map.get('10'));
console.log(map.get(true));
console.log(map.get("true"));
console.log(map)