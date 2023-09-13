//Operações podem gerar erros de arredondamento devido ao padrão de 
//representação numérica (IEEE754) utilizado no JavaScript
console.log(0.1 + 0.2);
console.log(666.7 - 666.6);
console.log(33.3 * 3);
console.log(12.2 / 0.1);

//ver IEEE 754 calculator (site)

//Pode-se corrigir esses problemas utilizando toPrecision / toFixed 
//e convertendo a srtring para numero:
console.log((0.1 + 0.2).toPrecision(3));
console.log((33.3 * 3).toFixed(2));