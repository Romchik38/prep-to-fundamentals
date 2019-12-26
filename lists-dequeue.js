'use strict';

const Node = function(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
};

const List = function() {
  this.first = null;
  this.last = null;
};

List.prototype.push = function(data) {
  const node = new Node(this, data);
  node.prev = this.last;
  this.last = node;
  if (this.first === null) this.first = node;
  else node.prev.next = node;
};

List.prototype.pop = function() {
  if (this.first === null) return;
  const node = this.last;
  if (this.first === this.last) {
    this.first = null;
    this.last = null;
  } else {
    this.last = node.prev;
    this.last.next = null;
  }
  node.next = null;
  node.prev = null;
  node.list = null;
  return node.data;
};

List.prototype.unshift = function(data) {
  const node = new Node(this, data);
  node.next = this.first;
  this.first = node;
  if (this.last === null) this.last = node;
  else node.next.prev = node;
};

List.prototype.shift = function() {
  if (this.last === null) return;
  const node = this.first;
  if (this.first === this.last) {
    this.first = null;
    this.last = null;
  } else {
    this.first = node.next;
    this.first.prev = null;
  }
  node.next = null;
  node.prev = null;
  node.list = null;
  return node.data;
};

List.prototype[Symbol.iterator] = function() {
  let first = this.first;
  return {
    next() {
      if (first) {
        const data = first.data;
        first = first.next;
        return {
          value: data,
          done: false
        };
      } else {
        return { value: true, done: true };
      }
    }
  };
};

const list = new List();

const str = 'Интернационализация';
for (const val of str) list.push(val);
list.shift();
list.unshift('и');
list.pop();
list.pop();
list.pop();
list.pop();
list.push('м');

let last = list.first;
let word = '';
while (last) {
  word += last.data;
  last = last.next;
}
console.log(word);

for (const v of list) {
  console.log(v);
}
