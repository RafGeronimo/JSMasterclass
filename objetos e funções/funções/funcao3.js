// a function declaration é previamente carregada, podendo chamá-la antes da declaração

console.log(sum);
console.log(sum(2,3));
function sum(a, b) {
    return a + b;
}
