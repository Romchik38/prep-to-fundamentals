'use strict';

const concat = (a, b) => `${a} ${b}`;

const before  = (...args) => args.map(s => s.toLowerCase());

const after = s => {
  const first = s[0].toUpperCase();
  const newString = `${first}${s.slice(1)}`;
  return newString;
};

const wrap = fn => (...args) => after(fn(...before(...args)));

const wrapedConcat = wrap(concat);
const wc1 = wrapedConcat('Hello', 'World!');

console.log({ wc1 });
