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

//map: retorna UM NOVO ARRAY com base no retorno da função passada por parâmetro;
//Nesse exemplo, queremos um array contendo apenas o NOME dos frameworks;
//ou seja, a propriedade name de cada objeto que é elemento do array.

const result = frameworks.map(function (framework) {
    return framework.name;
});

console.log(result);

//poderia também utilizar arrow function:

const result2 = frameworks.map((framework) => framework.name)
console.log(result2);