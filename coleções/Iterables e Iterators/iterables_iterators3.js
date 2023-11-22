//forEach também permite a iteração no objeto array do tipo iterable:
const languages = ["Fortran", "Lisp", "COBOL"]
languages.forEach(function(language) {
    console.log(language);
})
languages.forEach((language) => {
    console.log(language);
})