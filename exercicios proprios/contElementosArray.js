const input = [1,1,2,2,2,5];
let countedElements = [];
let output = [];

for (const element of input) {
    if (!countedElements.includes(element)){
        countRep(input, element);
        countedElements.push(element);
    }
}

function countRep (array, element) {
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === element){
            count++;
            output.push(count);
        }
    }
}

console.log(output);