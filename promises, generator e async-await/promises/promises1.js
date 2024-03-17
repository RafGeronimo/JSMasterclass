//Aqui o callback faz com que a funcao soma leve um segundo para retornar o result
//Antes disso o resultado é undefined
function sum(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
}

sum(2, 2, function (result) {
  console.log(result);
});

//funcao de soma normal:
// function sum(a, b) {
//     return a + b;
// }
// const result = sum(2, 2);
// console.log(result);

//funcao de soma que leva um segundo - porém sem o callback, o retorno é undefined:
// function delayedSum(a, b) {
//     setTimeout(function() {
//         return a + b;
//     }, 1000);
// }
// const result = delayedSum(2, 2);
// console.log(result);
