const obj1 = {
    p1: 10,
    getP1() {
        const fn1 = () => {
            return this.p1;
        };
        return fn1();
    }
};
console.log(obj1.getP1());