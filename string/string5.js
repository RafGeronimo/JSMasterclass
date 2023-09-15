let counter = 0;
console.time("performance"); //grava o tempo inicial
while(counter < 100000) {
    new String ("JavaScript");
    counter++;
}
console.timeEnd("performance"); // tempo que levou para executar o while