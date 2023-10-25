const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972,
    company: {
        name: "Bell Labs"
    }
};
const {name: n, author: a, year: y, company: {name: c}} = language;
console.log(n);
console.log(a);
console.log(y);
console.log(c);