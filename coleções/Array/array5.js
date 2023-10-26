const languages = [];
languages[0] = "Python";
languages[1] = "C";
languages[2] = "Java"

console.log(languages); // ["Python", "C", "Java"]
console.log(languages.length); // 3
delete languages[1];
console.log(languages); //[ "Python", <empty item>, "Java"]"
console.log(languages.length); //3


console.log(typeof(languages)); // object
console.log(languages instanceof Array); // true