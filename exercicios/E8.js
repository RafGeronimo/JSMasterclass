  const DatabaseError = function (statement, message) {
    this.statement = statement;
    this.message = message;
  };
  
  const Parser = function () {
    const commands = new Map([
        ["create table", /create table ([a-zA-Z]+) \((.+)\)/], 
        ["insert", /insert into ([a-zA-Z]+) \((.+)\) values \((.+)\)/], 
        ["select", /select (.+) from ([a-z]+)(?: where (.+))?/], 
        ["delete", /delete from ([a-z]+)(?: where (.+))?/]
    ]);
  }

  const database = {
    tables: {},
    parser: new Parser(),
    createTable(statement) {
      const regExp = /create table ([a-zA-Z]+) \((.+)\)/;
      const parsedStatement = statement.match(regExp);
      let [, tableName, columns] = parsedStatement;
      this.tables[tableName] = {
        columns: {},
        data: [],
      };
      columns = columns.split(", ");
      for (let column of columns) {
        column = column.split(" ");
        const [name, type] = column;
        this.tables[tableName].columns[name] = type;
      }
    },
    execute(statement) {

        this.parse(statement)

      if (statement.startsWith("create table")) {
        return this.createTable(statement);
      } else if (statement.startsWith("insert into")) {
        return this.insert(statement);
      } else if (statement.startsWith("select")) {
        return this.select(statement);
      } else if (statement.startsWith("delete")){
        return this.delete(statement);
      }
      const message = `Syntax error: "${statement}"`;
      throw new DatabaseError(statement, message);
    },
    insert(statement) {
      const regExp = /insert into ([a-zA-Z]+) \((.+)\) values \((.+)\)/;
      const parsedStatement = statement.match(regExp);
      let [, tableName, columns, values] = parsedStatement;
      columns = columns.split(", ");
      values = values.split(", ");
  
      let row = {};
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const value = values[i];
        row[column] = value;
      }
      this.tables[tableName].data.push(row);
    },
    select(statement) {
      const regExp = /select (.+) from ([a-z]+)(?: where (.+))?/;
      const parsedStatement = statement.match(regExp);
      let [, columns, tableName, whereClause] = parsedStatement;
      columns = columns.split(", ");
      let rows = this.tables[tableName].data;
      if (whereClause) {
        const [columnWhere, valueWhere] = whereClause.split(" = ");
        rows = rows.filter(function (row) {
          return row[columnWhere] === valueWhere;
        });
      }
      rows = rows.map(function (row) {
        let selectedRow = {};
        columns.forEach(function (column) {
          selectedRow[column] = row[column];
        });
        return selectedRow;
      });
      return rows;
    },
    delete(statement) {
        const regExp = /delete from ([a-z]+)(?: where (.+))?/;
        const parsedStatement = statement.match(regExp);
        let [, tableName, whereClause] = parsedStatement;
        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(" = ");
            this.tables[tableName].data = this.tables[tableName].data.filter((row) => valueWhere !== row[columnWhere])
        }else{
            this.tables[tableName].data = [];
        };
    },
    parse(statement) {
        commands.forEach((command) => statement.match(regExp) ? {command: command, parsedStatement: statement.match(regExp) } : null);
    }
  };
  
  try {
    database.execute(
      "create table author (id number, name string, age number, city string, state string, country string)"
    );
    database.execute(
      "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
    );
    database.execute(
      "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
    );
    database.execute(
      "insert into author (id, name, age) values (3, Martin Fowler, 54)"
    );
    database.execute("delete from author where id = 2");
    console.log(JSON.stringify(database.execute("select name, age from author"), undefined, "    "))
  } catch (e) {
    console.log(e.message);
  }