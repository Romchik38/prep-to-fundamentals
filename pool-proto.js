'use strict';

const logable = data => {
  const Logable = function(item) {
    this.values = item;
  };
  for (const key in data) {
    Object.defineProperty(Logable.prototype, key, {
      get() {
        return this.values[key];
      },
      set(v) {
        const def = data[key];
        if (
          def.type  === typeof v &&
          def.option(v)
        ) this.values[key] = v;
        else console.log('неверный тип данных');
      }
    });
  }
  return Logable;
};

const Factory1 = logable({
  name: { type: 'string', option: s => s.length > 0 },
  age: { type: 'number', option: n => n > 1 },
});

const f1 = new Factory1({ name: 'ser', age: 10 });
console.clear();
console.log({ f1 });

f1.name = 'Ser';
f1.age = 11;
console.log({ f1 });

f1.name = '';
console.log({ f1 });

f1.age = 0;
console.log({ f1 });

console.log(f1.name);
