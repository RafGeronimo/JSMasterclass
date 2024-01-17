//Encadiando varias funções "assincronas" perde-se a qualidade do código
//Essa situação que as promises visam melhorar

function sum(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
}

sum(2, 2, function (a) {
  sum(4, 4, function (b) {
    sum(a, b, function (result) {
      console.log(result);
    });
  });
});
