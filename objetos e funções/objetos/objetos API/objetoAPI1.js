let javascript = Object.create({});

Object.assign(javascript,{name: "JavaScript",
year: 1995,
paradigm: "OO and Functional"});
console.log(javascript);

// ou

javascript = Object.create({});
const javascriptPar = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
Object.assign(javascript, javascriptPar);
console.log(javascript);
