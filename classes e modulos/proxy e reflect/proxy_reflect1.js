//Nesse exemplo utilizamos o proxy para "interceptar" cada definição de propriedades do objeto languages
// e definir um "length" de acordo com a quantidade de linguagens definidas.

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

console.log(languages);
console.log(languages.length);
