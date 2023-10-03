const book = {};
book.title = "Clean Code";
book.author = "Robert C. Martin";
book.pages = 464;
book.language = "English"
book.available = true;

for (let key in book) {
    console.log("Chaves do book antes do delete: ", key);
}

console.log ("book = ", book)
delete book.available;

for (let key in book) {
    console.log("Chaves do book antes do delete: ", key);
}

console.log("book = ", book)
console.log("available" in book) //false