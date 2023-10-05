//rest parameter agrupa todos os parâmetros passados para a função em um array
// rest parameter deve ser sempre o último da lista
const sum = function (a, b, c, ...numbers) {
    let total = a + b + c;
    console.log(numbers)
    for (let number of numbers) { //for of pq estamos iterando em um ARRAY, nao em um objeto
        total += number
    }
    return total
}

console.log(sum(1,2,3,4,5,6,7,8,9));