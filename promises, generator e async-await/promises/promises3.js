//Basicamente, utiliza-se promises quando necessitamos AGUARDAR o retorno de alguma função
//ou dado da database

//Para criar uma promise, basta instância-la executando a função resolve em caso de sucesso
//sendo tratado por meio do THEN

//o resolve só é invocado em caso de sucesso da promise
function sum(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

// Assim fazemos o tratamento do fluxo de sucesso da promise
sum(2, 2).then(function (a) {
  sum(4, 4).then(function (b) {
    sum(a, b).then(function (result) {
      console.log(result); // result = 12 apos 3 segundos
    });
  });
});
