const command =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /create\stable\s([a-zA-Z]+)\s\((([a-zA-Z\s$,]+))\)/;

const result = regExp.exec(command);
const tableName = result[1];
console.log("tableName = ", tableName);

const columns = result[2].split(",");
console.log("columns = ", columns);

const idColumn = columns.slice(0,1).toString();
const nameColumn = columns.slice(1,2).toString().trimStart();
const ageColumn = columns.slice(2,3).toString().trimStart();
const cityColumn = columns.slice(3,4).toString().trimStart();
const stateColumn = columns.slice(4,5).toString().trimStart();
const countryColumn = columns.slice(5,6).toString().trimStart();

console.log(idColumn);
console.log(nameColumn);
console.log(ageColumn);
console.log(cityColumn);
console.log(stateColumn);
console.log(countryColumn);

console.log(result);
