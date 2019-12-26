'use strict';

const List = function() {
  this.prev = null;
};

List.prototype.next = function(elem) {
  const next = {
    prev: this.prev,
    data: elem,
  };
  this.prev = next;
};

List.prototype.last = function() {
  return this.prev;
};

const list = new List();
list.next('samsung');
list.next('motorola');
list.next('nokia');

console.log(list);
let last = list.last();
console.log(last.data);

while (last.prev) {
  last = last.prev;
  console.log(last.data);
}
