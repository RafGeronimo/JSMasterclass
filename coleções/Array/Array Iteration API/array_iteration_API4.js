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

//some: retorna true se um ou mais elementos retornarem true na função passada por parâmetro

const result = frameworks.some(function(framework) {
    return framework.name.includes("js");
});

console.log(result);