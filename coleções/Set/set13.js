//outra forma de retirar duplicação de array:
let array = [10, 10, 10];
let set = [];
array.forEach((el) => !set.includes(el) ?  set.push(el) : null);
console.log(set);

//Forma que o branas fez:
const array2 = [10, 10, 10];
const set2 = [];
array2.forEach(function (element) {
    if (!set2.includes(element)) {
        set2.push(element);
    }
});
console.log(set2);
