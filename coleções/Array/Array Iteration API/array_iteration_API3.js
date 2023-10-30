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

//Retorna o PRIMEIRO ELEMENTO que retornou true na função passada como parâmetro

const result = frameworks.find(function (framework) {
    return framework.name === "Angular.js"
}); 

console.log(result);