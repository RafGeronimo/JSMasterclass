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


//mantém a ordem dos elementos
languages.sort(function (a,b){
    return 0;
} );

console.log(languages);

//mantém a ordem dos elementos
languages.sort(function (a,b){
    return 1;
} );

console.log(languages);

//inverte a ordem dos elementos
languages.sort(function (a, b) {
    return -1;
});
console.log(languages);
