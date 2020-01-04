'use strict';

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  toString() {
    return 'Hello from class User';
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
  }
}

const a1 = new Admin('ser');

console.log({ a1 });
console.log(a1.toString(), `\nbut instanceof Admin: ${a1 instanceof Admin}`);

console.log(a1.__proto__ === Admin.prototype);
console.log(a1.__proto__.constructor === Admin);
console.log(a1.__proto__.__proto__ === User.prototype);
console.log(Admin.__proto__ === Function.prototype); //false
console.log(Admin.__proto__ === User);
console.log(Admin.__proto__.constructor === Function);
console.log(Admin.prototype.__proto__ === User.prototype);
console.log(Admin.prototype.constructor === Admin);
console.log(User.__proto__ === Function.prototype);
