//rest parameter agrupa todos os parâmetros passados para a função em um array

const sum = function (...numbers) {
    let total = 0
    for (let number of numbers) { //for of pq estamos iterando em um ARRAY, nao em um objeto
        total += number
    }
    return total
}

console.log(sum(1,2,3,4,5,6,7,8,9));