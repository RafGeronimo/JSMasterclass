//podemos medir a performance pelo console.log("performance")
// E para melhorar, pode-se executar varias promises em paralelo, retornando após TODAS terem sucesso
// par isso utilizamos o Promise.all

function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("Invalid Input");
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

console.time("performance");
Promise.all([sum(2, 2), sum(4, 4)])
  .then(function (values) {
    const [a, b] = values;
    return sum(a, b).then((result) => {
      console.log(result); // result = 12 apos 3 segundos
      console.timeEnd("performance");
    });
  })
  .catch((e) => {
    console.log(e);
  });
