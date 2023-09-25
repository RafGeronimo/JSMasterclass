const command = "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /(create table) + ([a-z])/;

const result = regExp.exec("create table author");
console.log(result);