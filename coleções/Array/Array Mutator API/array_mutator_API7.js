const languages = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];

//A função localeCompare() retorna -1 ou 1 de forma análoga a um ternário.
//O localeCompare() é muito útil quando temos caracteres acentuados ou maiúsculos

//Ordena os elementos pelo name em ordem ALFABÉTICA CRESCENTE
languages.sort(function (a,b) {
    return a.name.localeCompare(b.name);
});
console.log(languages);

//Ordena os elementos pelo name em ordem ALFABÉTICA DECRESCENTE
languages.sort(function (a,b) {
    return b.name.localeCompare(a.name);
});
console.log(languages);