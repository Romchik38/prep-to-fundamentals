'use strict';

class Node {
  constructor(list, data) {
    this.list = list;
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(data) {
    const node = new Node(this, data);
    node.prev = this.last;
    this.last = node;
    if (this.length === 0) this.first = node;
    else {
      node.prev.next = node;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return;
    const node = this.last;
    this.last = node.prev;
    node.list = null;
    node.prev = null;
    node.next = null;
    this.length--;
    return node.data;
  }
  last() {
    return this.last;
  }
}

const obj1 = { name: 'ser' };
const obj2 = { name: 'rom' };
const obj3 = { name: 'mas' };
const obj4 = { name: 'len' };

const list = new List();
list.push(obj1);
list.push(obj2);
list.push(obj3);
console.clear();
console.log('START ------------------');
const pop1 = list.pop();
const pop2 = list.pop();
const pop3 = list.pop();
const pop4 = list.pop();
const pop5 = list.pop();
console.dir({ afterpop: list.last }, { depth: 3 });
console.log({ pop1 });
console.log({ pop2 });
console.log({ pop3 });
console.log({ pop4 });
console.log({ pop5 });
list.push(obj4);
list.push(obj2);
list.push(obj3);
console.dir({ pushAgain: list.last }, { depth: 10 });
let last = list.last;
console.log('WORKING WITH A UNIT ');

while (last) {
  console.log(last.data);
  last = last.prev;
}
