'use strict';

const User = function(name, role) {
  this.name = name;
  this.role = role;
};

User.prototype.toString = function() {
  return `${this.name} ${this.role}`;
};

const Admin = function(name) {
  User.call(this, name, 'admin');
};

Object.setPrototypeOf(Admin.prototype, User.prototype);

const u1 = new User('ser', 'admin');
console.log({ u1 });

const a1 = new Admin('ser');
console.log({ a1 });
console.log(a1.toString());

console.log(a1.__proto__ === Admin.prototype);
console.log(a1.__proto__.constructor === Admin);
console.log(a1.__proto__.__proto__ === User.prototype);
console.log(Admin.__proto__ === Function.prototype);
console.log(Admin.__proto__.constructor === Function);
console.log(Admin.prototype.__proto__ === User.prototype);
console.log(Admin.prototype.constructor === Admin);
