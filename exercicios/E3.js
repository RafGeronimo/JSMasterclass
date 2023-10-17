const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const database = {};

database.createTable = function (statement) {
    const regExp = /create table ([a-zA-Z]+) \((.+)\)/;
    const parsedStatement = statement.match(regExp);
    const tableName = parsedStatement[1];
    let columns = parsedStatement[2];
    columns = columns.split(", ");
    for (let column of columns) {
        column = column.split(" ");
        const name = column[0];
        const type = column[1];
        database.tables[tableName].columns[name] = type;
    };
    database.tables = {
        [tableName]: {
            columns: {},
            data: [],
        }
    };
}

database.createTable(statement);

// database.execute = function (statement) {
//     database.createTable(statement);
// }


// database.execute(statement);

console.log(JSON.stringify(database, null,"   "));