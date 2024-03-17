// podemos executar varias promises ao mesmo tempo e retornar a primeira que tiver sucesso
// para isso utilizamos o Promise.race

function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("Invalid Input");
    setTimeout(function () {
      resolve(a + b);
    }, Math.random() * 1000);
  });
}

console.time("performance");
Promise.race([sum(2, 2), sum(4, 4)])
  .then(function (value) {
    console.log(value);
    return sum(value, value).then((result) => {
      console.log(result);
      console.timeEnd("performance");
    });
  })
  .catch((e) => {
    console.log(e);
  });
