const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];

//filter: retorna UM NOVO ARRAY contendo SOMENTE os elementos que retornarem TRUE na função passada como parâmetro

let result = frameworks.filter(function (framework) {
    return true;
});

console.log(result);

result = frameworks.filter( (framework) => {
    return framework.contributors < 1000;
});

console.log(result);