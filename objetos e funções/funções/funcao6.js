let sum = function(a, b) {
    return a + b;
};

console.log(sum(2,2));
console.log(sum(2)); //NaN pois ele considera o parâmetro faltante como undefined
console.log(sum(1,2,3)) //3 (ignora o parâmetro extra);
