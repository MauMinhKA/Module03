function demo(num) {
    return num + 4;
}
console.log(demo(5));
// Higher-order function
function add(a) {
    return function (b) {
        return a + b;
    };
}
const addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(15));
