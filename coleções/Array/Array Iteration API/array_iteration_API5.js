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

//every: retorna true TODOS os elementos retornarem true na função passada por parâmetro

const result = frameworks.every(function(framework) {
    return framework.name.includes("js");
});

console.log(result);