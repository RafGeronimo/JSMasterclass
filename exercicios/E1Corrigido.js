const command =
  "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-zA-Z]+) \((.+)\)/;
const result = regExp.exec(command);
console.log(result)
const tableName = result[1];
console.log("tableName = ", tableName);

const columns = result[2].split(", ");
console.log("columns = ", columns);

//voce tem que chegar o no mesmo resultado, mas não com a mesma implementação.
//Dúvidas: 
// 1. Porque minha regExp original (antes da correcao) duplicava o 'id number, name string...' ?
// 2. Qual a diferença entre utilizar o "match" e o "exec" nesse caso? ambos funcionaram (tanto na correção do Branas quanto no meu exercicio corrigido)