const command =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /create\stable\s([a-zA-Z]+)\s\((([a-zA-Z\s$,]{1,}))\)/;

const result = regExp.exec(command);
const tableName = result[1];
console.log("tableName = ", tableName);

const columns = result[2].split(",");
console.log("columns = ", columns);
