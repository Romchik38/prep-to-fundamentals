'use strict';

const concat = (a, b) => `${a} ${b}`;

const before = (...args) => args.map(s => s.toLowerCase());

const after = s => {
  const first = s[0].toUpperCase();
  const rest = s.slice(1);
  return first.concat(rest);
};

const wrapFn = (before, after, fn) => {
  const chars = [];
  for (let i = 1; i <= fn.length; i++) {
    chars.push(`a${i}`);
  }
  global.fn = fn;
  global.before = before;
  global.after = after;
  const createFn = new Function(...chars, `
    return after(fn(...before(${chars.join(', ')})));
  `);
  return createFn;
};
const wrapFnConcat = wrapFn(before, after, concat);
const concat1 = wrapFnConcat('hello', 'World');
console.log(wrapFnConcat.length);
console.log({ concat1 });
