const input = [1,1,2,2,2,5,5,5,5, 6];
let countedElements = [];
let output = [];


for (element of input) {
    if (!countedElements.includes(element)) {
        getOccurrences(input, element);
        countedElements.push(element);
    }
}

function getOccurrences (array, value) {
    array.reduce((acc, element) => value === element ? output.push(acc + 1) : acc , 0)
    return output
}

console.log(output);