'use strict';

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  createAdmin(name) {
    return new User(name, 'admin');
  }
}

const u1 = new User('ser', 'user');
const u2 = u1.createAdmin('rom');

console.log({ u1, u2 });
