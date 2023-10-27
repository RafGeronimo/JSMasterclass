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

//Ordena os elementos pela propriedade name em ordem ALFABÉTICA CRESCENTE
languages.sort(function (a,b){
    return (a.name <= b.name) ? -1 : 1;
} );

console.log(languages);

//Ordena os elementos pela propriedade name em ordem ALFABÉTICA DECRESCENTE
languages.sort(function (a,b){
    return (a.name > b.name) ? -1 : 1;
} );

console.log(languages);