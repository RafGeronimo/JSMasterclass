//variables_11: declaração e utilização do const
// const pi = 3.141592;
// console.log(pi);
//----------------------------------

//variables_12: variaveis const não podem ser acessadas antes da inicialização
// console.log(pi);
// const pi = 3.141592;
//----------------------------------

//variables_13: const não pode ser reatribuido (quebra o codigo)
// const pi = 3.141592;
// console.log(pi);
// pi = 3;
// console.log(pi);

//----------------------------------
// variables_14: const não permite redeclaração (quebra o codigo)
// const pi = 3.141592;
// console.log(pi);
// const pi = 3;
// console.log(pi);

//----------------------------------
// variables_15: const respeita o bloco onde foi declarado
if (true) {
    const pi = 3.141592;
}
console.log(pi);