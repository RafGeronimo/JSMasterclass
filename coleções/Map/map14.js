const obj = Object.create(null);
console.log("toString" in obj); //falso pq setamos prototipos nulo
console.log("valueOf" in obj); //false pq setamos prototipo nulo