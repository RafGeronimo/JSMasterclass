//Nesse exemplo utilizamos o proxy para "interceptar" cada consulta de propriedades do objeto languages por meio do get
// verificamos se a key é do tipo string e se ela da match com um número;
// também verificamos se ela existe no objeto e jogamos um erro caso nao exista

function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value;
      },
      get(target, key) {
        if (typeof key === "string" && key.match(/^\d+$/)) {
          if (!(key in target)) {
            throw `Property ${key} not found`;
          }
        }
        return target[key];
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
console.log(languages[0]);
console.log(languages[1]);
