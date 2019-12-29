'use strict';

const obj = {
  name: 'ser',
  age: 10,
};

const { revoke, proxy } = Proxy.revocable(obj, {
  get(obj, name) {
    return 'name: ' + obj[name];
  },
  has(obj, key) {
    if (key === 'key') {
      return true;
    }
    return key in obj;
  }
});

console.log(proxy.name);
console.log('key' in proxy);
console.log('name' in proxy);
console.log('fname' in proxy);
revoke();
console.log(proxy.name);
