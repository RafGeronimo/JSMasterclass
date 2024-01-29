// Exercício 8

// Objetivo
// Implemente a função construtora "Parser", que será responsável por receber o comando, identificá-lo e extraí-lo após a execução da expressão regular.
// Além disso, o nome do comando também deve ser retornado para que ele seja selecionado dinamicamente no método "execute".

// Instruções
// Crie uma função construtora chamada "Parser".
// Dentro de "Parser", crie um Map chamando "commands" onde a chave é o nome do comando e o valor é a expressão regular.
// Crie um método chamado "parse" que recebe "statement".
// Dentro do método "parse" itere em "commands" fazendo um match em cada uma das expressões regulares com o "statement" até identificar a expressão responsável pelo comando.
// Após encontrar a expressão regular, retorne um objeto contendo o nome do comando na propriedade "command" e o resultado da execução do método "match" na propriedade "parsedStatement".
// No objeto "database", crie uma propriedade chamada "parser" e instancie a função construtora "Parser".
// No método "execute", execute o método "parse" e faça o chaveamento do comando dinamicamente.
// Refatore os métodos "createTable", "insert", "select" e "delete" para receberem o "parsedStatement" e não mais o "statement".

// Cenário
// database.execute("create table author (id number, name string, age number, city string, state string, country string)");
// database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
// database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
// database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
// database.execute("delete from author where id = 2");
// database.execute("select name, age from author");

// Resultado
// [{
//     "name": "Douglas Crockford",
//     "age": "62"
// }, {
//     "name": "Martin Fowler",
//     "age": "54"
// }]
// Dicas
// Dentro do método "parse", você pode iterar sobre o Map de "commands" com for/of e utilizar destructuring para extrair o "command" e o "parsedStatement".

const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = message;
};

const Parser = function () {
  const commands = new Map([
    ["createTable", /create table ([a-zA-Z]+) \((.+)\)/],
    ["insert", /insert into ([a-zA-Z]+) \((.+)\) values \((.+)\)/],
    ["select", /select (.+) from ([a-z]+)(?: where (.+))?/],
    ["delete", /delete from ([a-z]+)(?: where (.+))?/],
  ]);
  this.parse = function (statement) {
    for (let [command, regExp] of commands) {
      const parsedStatement = statement.match(regExp);
      if (parsedStatement) {
        return {
          command,
          parsedStatement,
        };
      }
    }
  };
};

const database = {
  tables: {},
  parser: new Parser(),
  createTable(parsedStatement) {
    let [, tableName, columns] = parsedStatement;
    this.tables[tableName] = {
      columns: {},
      data: [],
    };
    columns = columns.split(", ");
    for (let column of columns) {
      column = column.trim().split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  },
  insert(parsedStatement) {
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
  select(parsedStatement) {
    let [, columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;
    if (whereClause) {
      const [columnWhere, valueWhere] = whereClause.split(" = ");
      rows = rows.filter((row) => {
        return row[columnWhere] === valueWhere;
      });
    }
    rows = rows.map((row) => {
      let selectedRow = {};
      columns.forEach((column) => {
        selectedRow[column] = row[column];
      });
      return selectedRow;
    });
    return rows;
  },
  delete(parsedStatement) {
    let [, tableName, whereClause] = parsedStatement;
    if (whereClause) {
      const [columnWhere, valueWhere] = whereClause.split(" = ");
      this.tables[tableName].data = this.tables[tableName].data.filter(
        (row) => {
          return valueWhere !== row[columnWhere];
        }
      );
    } else {
      this.tables[tableName].data = [];
    }
  },
  execute(statement) {
    const result = this.parser.parse(statement);
    if (result) {
      return this[result.command](result.parsedStatement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  },
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
  console.log(
    JSON.stringify(
      database.execute("select name, age from author"),
      undefined,
      "    "
    )
  );
} catch (e) {
  console.log(e.message);
}
