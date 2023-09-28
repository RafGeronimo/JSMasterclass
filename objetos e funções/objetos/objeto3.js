// passando variáveis como propriedades de objetos em "short hand notation"
//OBS: short hand notation a key deve ser igual ao nome da variável.

const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English";
const avaliable = true;
const book = {
    title,
    author,
    pages,
    language,
    avaliable,
};
console.log(book);
