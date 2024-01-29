const array = [
  {
    key: 105,
    value: "descrição 1",
  },
  {
    key: 105,
    value: "descrição 1",
  },
  {
    key: 110,
    value: "descrição 2",
  },
  {
    key: 110,
    value: "descrição 2",
  },
  {
    key: 105,
    value: "descrição 1",
  },
];
console.log(array);

let result = [];
// const auxMap = new Map();
// array.forEach((obj) => {
//   auxMap.set(Object.keys(obj), Object.values(obj));
// });

let keys = array.map((obj) => obj.key);

console.log(keys);

console.log("result = ", result);
