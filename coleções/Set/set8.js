const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
//delete: deleta o elemento do Set
//Retorna true caso consiga deletar e false caso nao consiga.
console.log(charsets.delete("ISO-8859-1"));
console.log(charsets.delete("CP-1252"));
console.log(charsets);