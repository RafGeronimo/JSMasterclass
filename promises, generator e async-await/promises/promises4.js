//o resolve só é invocado em caso de sucesso da promise
//em caso de fracasso a função reject é executada, sendo tratada por meio do catch.
function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("Invalid Input");
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

//nesse caso tivemos que acrescentar um catch para cada invocação da função
sum(2, 2)
  .then(function (a) {
    sum(4, 4)
      .then(function (b) {
        sum(a, b)
          .then(function (result) {
            console.log(result); // result = 12 apos 3 segundos
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });

// porém é possível centralizar o tratamento da promise, encadeando seus retornos com o RETURN:

sum(2, 2)
  .then(function (a) {
    return sum(4, 4).then(function (b) {
      return sum(a, b).then(function (result) {
        console.log(result); // result = 12 apos 3 segundos
      });
    });
  })
  .catch((e) => {
    console.log(e);
  });
