//Na array de objetos existem elementos com a mesma key e fieldKey.
//Filtre a array de modo que a COMBINAÇÃO key e fieldKey de cada objeto seja UNICA.

const array = [
  {
    key: 105,
    value: "descrição 1",
    fieldKey: 1,
  },
  {
    key: 105,
    value: "descrição 1",
    fieldKey: 1,
  },
  {
    key: 105,
    value: "descrição 1",
    fieldKey: 1,
  },
  {
    key: 8,
    value: "descrição 2",
    fieldKey: 13,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 6,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 6,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 6,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 6,
  },
  {
    key: 84,
    value: "descrição 4",
    fieldKey: 7,
  },
  {
    key: 8,
    value: "descrição 2",
    fieldKey: 14,
  },
  {
    key: 209,
    value: "descrição 5",
    fieldKey: 8,
  },
  {
    key: 33,
    value: "descrição 6",
    fieldKey: 8,
  },
  {
    key: 9,
    value: "descrição 7",
    fieldKey: 3,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 3,
  },
  {
    key: 8,
    value: "descrição 2",
    fieldKey: 5,
  },
  {
    key: 8,
    value: "descrição 2",
    fieldKey: 4,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 15,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 15,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 15,
  },
  {
    key: 5,
    value: "descrição 3",
    fieldKey: 15,
  },
  {
    key: 30,
    value: "descrição 8",
    fieldKey: 10,
  },
  {
    key: 200,
    value: "descrição 9",
    fieldKey: 10,
  },
  {
    key: 20,
    value: "descrição 10",
    fieldKey: 10,
  },
];

console.log(array.map((obj) => [`${obj.key}_${obj.fieldKey}`, obj]));

let auxUnicosMap = new Map(
  array.map((obj) => [`${obj.key}_${obj.fieldKey}`, obj])
);

auxUnicosMap = auxUnicosMap.values();
console.log("valores unicos do mapa = ", auxUnicosMap);

const filteredArray = Array.from(auxUnicosMap);
console.log(
  "objetos filtrados com relação key e fielKey unica = ",
  filteredArray
);
