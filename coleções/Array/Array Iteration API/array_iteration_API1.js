const frameworks = ["Angular.js", "Ember.js",  "Vue.js"];
//Para cada elemento da array frameworks o forEach executa a função passada na arrow function;
//Note que o nome do argumento passado é arbitrário, só serve para a chamada da função;
frameworks.forEach((framework) => console.log(framework));
frameworks.forEach((element) => console.log(element));
frameworks.forEach((f) => console.log(f));