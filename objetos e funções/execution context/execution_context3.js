const v1 = 10;
const fn1 = function () {
    const v1 = 100;
    const fn2 = function () {
        console.log(v1);
    };
    fn2();
};
fn1();