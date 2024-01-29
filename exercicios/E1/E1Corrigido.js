const command =
  "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-zA-Z]+) \((.+)\)/;
const result = regExp.exec(command);
console.log(result)
const tableName = result[1];
console.log("tableName = ", tableName);

const columns = result[2].split(", ");
console.log("columns = ", columns);
