const date = new Date();
console.log(date instanceof Date); // true -> objeto date foi criado pela função construtura Date
console.log(date instanceof Object); // true -> date tem protótito em Object (date decende de Date que decende de Object)
console.log(date instanceof Array); //false -> na cadeia de protótipo não existe array.

//O instanceof pode ser utilizado para fazer esse tipo de verificação.