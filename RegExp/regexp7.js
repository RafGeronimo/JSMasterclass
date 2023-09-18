// caractere de escape: a barra desliga o comportamento de metacaractere do ponto

let regExp = /john@gmail\.com/;
let result = regExp.exec("E-Mail: john@gmailxcom");
console.log(result);
