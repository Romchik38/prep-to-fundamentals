'use strict';

const str = 'http://site.com/mobiles/samsungA620';
const str2 = 'https://site.com/mobiles/samsungA620';

console.clear();

const anyOneSymbol = /samsung..../;
const resAnyOne = str.match(anyOneSymbol);
console.log({ resAnyOne });

const oneOrMoreSymbols = /\/+/;
const resOneOrMore = str.match(oneOrMoreSymbols);
console.log({ resOneOrMore });

const zeroOrMore = /site.com\/\w*\//;
const resZeroOrMore = str.match(zeroOrMore);
console.log({ '*': resZeroOrMore });

const begin = /^https*/;
console.log('^', str.match(begin));
console.log('^', str2.match(begin));

const ends = /.com$/;
console.log('$', 'site.com'.match(ends));

const someSymbols = /sit[a-z]/;
console.log(someSymbols, 'site.com'.match(someSymbols));

const hexSpace = /\w+\x20/;
console.log(hexSpace, 'some string'.match(hexSpace));

const or = /(com|ua)$/;
console.log(or, 'site.com'.match(or));
console.log(or, 'comsite.fr'.match(or));
console.log(or, 'site.ua'.match(or));

const count = /s{3}/;
console.log('some ssstring'.match(count));
