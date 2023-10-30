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

// muito util quando temos um conjunto de objetos que tem um valor, como por exemplo um preço, e queremos fazer alguma operação matemática com esse número.

const result = frameworks.reduce ((total, framework) => {
    return total + framework.contributors;
}, 0)

console.log(result);