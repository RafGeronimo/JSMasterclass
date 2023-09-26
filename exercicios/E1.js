const command =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /create\stable\s([a-zA-Z]+)\s\(([a-zA-Z]+\s?[a-zA-Z]+){1,},\s?\)/;

const result = regExp.exec("create table rafael (id number, )");
const author = result;
console.log("tableAuthor = ", author);
