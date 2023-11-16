//get: retorna o valor da chave passada por parâmetro

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits.get("second")); //1
console.log(timeUnits.get("minute")); //60
console.log(timeUnits.get("hour")); //3600
console.log(timeUnits.get("day")); //undefined