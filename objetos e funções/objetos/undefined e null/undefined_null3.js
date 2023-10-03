const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
book.available = undefined; // nao apaga a propriedade, apenas muda seu valor
console.log(book);
console.log("available" in book); //true