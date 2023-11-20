const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
console.log(charsets.size)
//clear: remove todos os elementos 
charsets.clear();
console.log(charsets);
console.log(charsets.size)