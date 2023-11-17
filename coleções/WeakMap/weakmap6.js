//pode ser que o calculo que seja operado seja muito pesado, sendo assim, caso
//seja recebido um objeto com os mesmos valores, o weakMap permite o armazenamento 
//do resultado em cache, nao precisando calcular novamente

const areas = new WeakMap();
const rectangle1 = {
    x: 10,
    y:2,
}
const rectangle2 = {
    x:5,
    y:3
}

function calculateArea(rectangle) {
    if (areas.has(rectangle)){
        console.log("Using cache")
        return areas.get(rectangle); //esse trecho de if faz o "reuso" do objeto em cache
    }
    const area = rectangle.x*rectangle.y;
    areas.set(rectangle, area) //seta ao weakMap o objeto com valor da area
    return area;
};

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle2));