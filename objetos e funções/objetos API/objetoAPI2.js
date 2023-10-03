// pode-se passar mais de um objeto parâmetro no Object.assign para copiar suas propriedades:

let javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
});
console.log(javascript);

// ou 

javascript = {};

console.log(javascript)

javascriptCharacteristics = {    
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"}

javascriptAuthor = {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
}

Object.assign(javascript, javascriptAuthor, javascriptCharacteristics);
console.log(javascript);
