//delete: deleta um conjunto de chave e valor com base na CHAVE passada por parâmetro
const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
timeUnits.delete("hour"); // deleta o conjunto com chave "hour"
console.log(timeUnits.delete("day")) // false pq a chave nao existe
console.log(timeUnits.get("second")); // 1
console.log(timeUnits.get("minute")); // 60
console.log(timeUnits.get("hour")); // undefined
