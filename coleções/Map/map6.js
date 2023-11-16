// A operação forEach itera sobre o mapa.
// Note que ele recebe primeiro VALUE e depois KEY como parâmetro.
const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
timeUnits.forEach((value, key) => console.log(key, value));