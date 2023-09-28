// É possível consultar cada uma das chaves por meio da computação de chaves
// O Objetivo do "for in" é percorrer as chaves do objeto.

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

for (let key in book) {
    console.log(key);
}