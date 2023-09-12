// operadores binários - bit a bit:
console.log(4|3); // or: convertendo bit a bit o resultado em binário da 0b111=7
console.log(3&1); // end: converte bit a bit e resulta 0b1 = 1;
console.log(5^2); // shore (ou esclusivo): somento 1 com 0 da com -> 0b111 = 7;
console.log(~2); // not: inverte todos os bits do numero = -3
console.log(4<<2); //shift esquerda: desloca bit pra esquerda - como se multiplicasse o 4 por 2 (duas vezes)
console.log(128>>1); // shift direita: desloca o bit pra direita - como se dividisse 128 por 1 (uma vez)
console.log(-2>>>1); //shift direita trocando sinal: rotação que leva o sinal junto.

console.log((5).toString(2).padStart(32,0)); // escrevendo 5 bit a bit

// -2 >>> 1
// 2147483647
// > (-2 >>> 0).toString(2).padStart(32,0)
// '11111111111111111111111111111110'
// >
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// >
// PS C:\Users\e-rafaelg\JSMasterclass> node
// Welcome to Node.js v16.16.0.      
// Type ".help" for more information.
// > (2147483647).toString(2).padStart(32,0)
// '01111111111111111111111111111111'