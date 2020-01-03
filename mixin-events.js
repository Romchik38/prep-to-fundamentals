'use strict';

const addEvents = (obj, events = {}) => Object.assign(obj, {
  on(event, fn) {
    events[event] = events[event] || [];
    events[event].push(fn);
  },
  emit(event, ...args) {
    const ev = events[event];
    if (ev) ev.forEach(fn => fn(...args));
  },
});


class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.login = 0;
  }
  toString() {
    return `User: ${this.name}, age: ${this.age}`;
  }
}

const u1 = addEvents(new User('ser', 'super'));

const entered = obj => {
  obj.on('enter', () => {
    obj.login = 1;
    obj.emit('entered', obj.login);
  });
};

entered(u1);
u1.on('entered', status => {
  console.log('Login status: ', status);
});

u1.emit('enter');
