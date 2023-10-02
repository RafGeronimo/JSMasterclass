const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464
};

let equal = true;

for (let key in book1) {
    book1[key] === book2[key] ? equal = equal : equal = false;
}

console.log(equal);
equal = true;

for (let key in book2) {
    book1[key] === book2[key] ? equal = equal : equal = false;
}

console.log(equal);