//criando uma função para fazer o papel do operador instanceof:
//O operador recebe um objeto e sua função constutora
//Devemos recursivamente passar pela cadeia de protótipos até acabar: 
//para isso damos um return para e própria função _instanceof passando os parâmetros necessários
//porém como queremos subir na cadeia de protótipos, passamos o obj.__proto__ como parâmetro de objeto
//Se o objeto tiver a mesma referencia da função parametro fn.prototype retorna true: isso quer dizer que o objeto foi criado por essa função construtora.
// Para evitar um loop infinito utilizamos condições:
    // se obj === null -> false: percorremos tudo e não encontramos mais protótipos
const _instanceof = function (obj, fn) {
    if (obj === fn.prototype) return true;
    if (obj === null) return false;
    return _instanceof(obj.__proto__, fn);
}
const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));
