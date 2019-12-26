'use strict';

class EE {
  constructor() {
    this.events = {};
  }
  on(name, callback) {
    const event = this.events[name] || [];
    event.push(callback);
    this.events[name] = event;
  }
  emit(name, ...args) {
    const events = this.events[name];
    if (events) {
      for (const event of events) {
        event(...args);
      }
    }
  }
  clear(name) {
    if (name) {
      delete this.events[name];
    } else {
      this.events = {};
    }
  }
  count(name) {
    if (name) {
      const events = this.events[name];
      if (events) return events.length;
    } else {
      const c = {};
      const keys = Object.keys(this.events);
      for (const key of keys) {
        c[key] = this.events[key].length;
      }
      return c;
    }
  }
  listeners(name) {
    const events = this.events[name];
    if (events) return events.slice();
  }
  remove(name, fn) {
    const events = this.events[name];
    if (events) {
      const i = events.indexOf(fn);
      if (i > -1) events.splice(i, 1);
    }
  }
}

const ee = new EE();

ee.on('hello', name => {
  console.log('hello ' + name);
});
ee.on('hello', name => {
  console.log('your name consist with ' + name.length + ' characters');
});
ee.emit('hello', 'ser');
ee.clear();
ee.emit('hello', 'ser');

console.log('-----testing clear name');
ee.on('hello', name => {
  console.log('hello ' + name);
});
ee.on('goodby', name => {
  console.log('goodby ' + name);
});
ee.emit('hello', 'ser');
ee.clear('hello', 'ser');
ee.emit('hello', 'ser');
ee.emit('goodby', 'ser');

console.log('-----testing listeners');
const l1 = ee.listeners('hello');
const l2 = ee.listeners('goodby');
console.log({ l1, l2 });

console.log('-----testing counts');
const c1 = ee.count('hello');
const c2 = ee.count('goodby');
const c3 = ee.count();
console.log({ c1, c2, c3 });

console.log('-----testing remove');
const greatingName = name => console.log('hello ' + name);
const countNameChars = name => {
  console.log('your name consist with ' + name.length + ' characters');
};
ee.on('hello', greatingName);
ee.on('hello', countNameChars);
console.log('Callbacks on event hello are ', ee.count('hello'));
ee.emit('hello', 'ser');
ee.remove('hello', greatingName);
console.log('After remove callbacks on event hello are ', ee.count('hello'));
