import DatabaseError from "./databaseError.mjs";
import Parser from "./parser.mjs";

export default class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }
  createTable(parsedStatement) {
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
  }
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
  }
  select(parsedStatement) {
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
  }
  delete(parsedStatement) {
    let [, tableName, whereClause] = parsedStatement;
    let rows = this.tables[tableName].data;
    whereClause = whereClause.split(" = ");
    const [columnWhere, valueWhere] = whereClause;
    rows = rows.filter((row) => valueWhere !== row[columnWhere]);
    this.tables[tableName].data = rows;
  }
  execute(statement) {
    const result = this.parser.parse(statement);
    if (result) {
      return this[result.command](result.parsedStatement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  }
}
