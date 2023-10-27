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

//ordena os elementos por ordem crescente da propriedade ano.
languages.sort(function (a,b){
    return a.year - b.year;
} );

console.log(languages);


//ordena os elementos por ordem decrescente do atributo ano.
languages.sort(function (a,b){
    return b.year - a.year;
} );

console.log(languages);