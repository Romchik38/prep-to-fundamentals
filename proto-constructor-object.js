'use strict';

const User = function(name, role) {
  this.name = name;
  this.role = role;
};

User.prototype.toString = function() {
  return `${this.name} ${this.role}`;
};

const u1 = new User('ser', 'admin');

console.log(u1.toString());

console.log(u1.__proto__ === User.prototype); //true
console.log(u1.__proto__.constructor === User); //true
console.log(u1.__proto__.__proto__ === Object.prototype); //true
console.log(User.__proto__ === Function.prototype); //true
console.log(User.__proto__.constructor === Function); //true
console.log(User.prototype.__proto__ === Object.prototype); //true
console.log(User.prototype.constructor === User); //true
