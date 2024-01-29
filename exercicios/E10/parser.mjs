export default class Parser {
  constructor() {
    this.commands = new Map();
    this.commands.set("createTable", /create table ([a-zA-Z]+) \((.+)\)/);
    this.commands.set("insert", /insert into ([a-zA-Z]+) \((.+)\) values \((.+)\)/);
    this.commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    this.commands.set("delete", /delete from ([a-z]+) (?:where (.+))/);
  }

  parse(statement) {
    for (let [command, regExp] of this.commands) {
      const parsedStatement = statement.match(regExp);
      if (parsedStatement) {
        return {
          command,
          parsedStatement,
        };
      }
    }
  }
}
