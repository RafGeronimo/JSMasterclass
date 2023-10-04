const statement = "create table author (id number, name string, age number, city string, state string, country string)";

const database = {
    tables: {
        author: {
            columns: {
                id: "number",
                name: "string",
                age: "number",
                city: "string",
                state: "string",
                country: "string"
            }
        },
        data: []
    },
};

console.log(JSON.stringify(database, null, "    "));