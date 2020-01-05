'use strict';

const factorify = Category => (...args) => new Category(...args);

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  toString() {
    return `User: ${this.name}, role: ${this.role}`;
  }
}

class Warrior {
  constructor(strange, health) {
    this.strange = strange;
    this.health = health;
  }
  toString() {
    return `The warrior has ${this.health} health and ${this.strange} strange`;
  }
}

const user1 = factorify(User);
const warrior1 = factorify(Warrior);

const u1 = user1('ser', 'admin');
const w1 = warrior1(25, 100);

console.log({ u1, w1 });
console.log(u1.toString());
console.log(w1.toString());
