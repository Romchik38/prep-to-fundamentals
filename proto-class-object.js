'use strict';

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  toString() {
    return `${this.name} ${this.role}`;
  }
}

const u1 = new User('ser', 'admin');

console.log(u1.toString());
