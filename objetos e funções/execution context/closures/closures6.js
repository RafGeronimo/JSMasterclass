// O escopo das funções métodos é compartilhado, por isso ao invocar em sequencia
// o primeiro método leva 10 para 11 e o segundo o 11 para 10;

function fn1 () {
    let v1 = 10;
    return {
        m1() {
            console.log(++v1);
        },
        m2() {
            console.log(--v1);
        }
    };
};

const obj1 = fn1();

obj1.m1();
obj1.m2();