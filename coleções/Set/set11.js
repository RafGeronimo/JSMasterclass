//Retirando elementos duplicados de array com o Set:
let array = [10, 10, 10];
console.log(array);
console.log(array.length);
const set = new Set(array);
console.log(set);
console.log(set.size);
array = Array.from(set);
console.log(array);
console.log(array.length);