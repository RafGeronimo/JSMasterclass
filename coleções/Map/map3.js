//Pode-se converter o mapa para um array de arrays contendo as entradas
// Para isso utiliza-se a operação de Array.from:
const timeUnits = new Map([["second", 1], ["minute", 60], ["hour" , 3600]]);
console.log(timeUnits);
console.log(Array.from(timeUnits));