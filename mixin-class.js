'use strict';

class User {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  toString() {
    return `User: ${this.name}, age: ${this.age}, role: ${this.role}`;
  }
}

const superUser = Category => class extends Category {
  constructor(name, age) {
    super(name, age, 'superUser');
  }
};

const SuperUser1 = superUser(User);
const su1 = new SuperUser1('ser', 10);

const str = su1.toString();
console.log({ str });
