// interface  Iuser{
//     name: string;
//     age: number;
// }
// let Customer: Iuser={name:'mau', age:22}
// console.log(Customer);
//
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(x: ${this.x}, y: ${this.y})`;
    }
}
class Rect extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const rect = new Rect(5, 5, 10, 20);
console.log(rect.toString());
console.log(rect.area());
