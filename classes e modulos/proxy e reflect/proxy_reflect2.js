//Nesse exemplo utilizamos o proxy para "interceptar" cada delete de propriedades do objeto languages
// e redefinir a length de acordo com a quantidade de linguagens restantes.

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
      },
      deleteProperty(target, key) {
        if (key in target) {
          target.length--;
          delete target[key];
        }
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

delete languages[1]; //delete Ruby
delete languages[2]; //delete JavaScript
delete languages[3]; //nao delete ngm

console.log(languages);
console.log(languages.length);
