// variables_1: Utilização do var
//var pi = 3.141592;
//console.log('pi = ', pi);

//----------------------------------

// variables_2: undefined pois var declara a variável antes de evaluar
//console.log('pi2 = ', pi2);
//var pi2 = 3.141592;

//----------------------------------

//variables_3: reatribuição do var
// var pi = 3.14152;
// console.log(pi);
// pi = 3;
// console.log(pi);

//----------------------------------

//variables_4: redeclaração do var
// var pi = 3.14152;
// console.log(pi);
// var pi = 3;
// console.log(pi);

//----------------------------------

//variables_5: var "não respeita o bloco if"
if (true) {
    var pi = 3.141592
}
console.log(pi);