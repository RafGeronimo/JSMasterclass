const DatabaseError = function (statement, message) {
    this.statement = statement;
    this.message = message;
};

const database = {
    tables: {},
    createTable(statement) {
        const regExp = /create table ([a-zA-Z]+) \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        const tableName = parsedStatement[1];
        this.tables[tableName] = {
            columns: {},
            data: [],
        };
        let columns = parsedStatement[2];
        columns = columns.split(", ");
        for (let column of columns) {
            column = column.split(" ");
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
        }
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }  
        
        else if(statement.startsWith("insert into")) {
            return this.insert(statement);
        }
        
        const message = `Syntax error: "${statement}"`
        throw new DatabaseError(statement, message);
    },
    insert(statement) {
        const regExp = /insert into ([a-zA-Z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        console.log(parsedStatement);
        // const tableName = parsedStatement[1];
        // this.tables[tableName] = {
        //     columns: {},
        //     data: [],
        // };
        let columns = parsedStatement[2];
        columns = columns.split(", ");
        let values = parsedStatement[3];
        values = values.split(", ");

        console.log(columns);

        // for (let i = 1; i < columns.length; i++){
        //     const row = {id, name, age}

        // }
    }

};

try{
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)")
    //database.execute("select id, name from author")
    console.log(JSON.stringify(database, null,"   "));
}catch(e){
    console.log(e.message);
};