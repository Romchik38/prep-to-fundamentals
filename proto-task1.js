'use strict';

const pointMethods = {
  move(x, y) {
    this.x += x;
    this.y += y;
  },

  toString() {
    return `[${this.x}, ${this.y}]`;
  },
};

const point = {
  x: 10,
  y: 20,
};

// point.__proto__ = pointMethods;
Object.setPrototypeOf(point, pointMethods);

point.move(2, 3);
console.log(point.toString());

console.log({ point });
console.log({ pointMethods });

console.log(point.__proto__ === pointMethods); //true
console.log(point.__proto__.__proto__ === Object.prototype); //true
console.log(point.__proto__.__proto__.__proto__ === null); //true
console.log(pointMethods.__proto__ === Object.prototype);  //true
