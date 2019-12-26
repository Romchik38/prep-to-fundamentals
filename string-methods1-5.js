'use strict';

const lorem = '  Lorem ipsum dolor sit amet, consectetur adipisicing elit   ';

console.log('\'' + lorem + '\'');
console.log('\'' + lorem.trim() + '\'');
console.log('\'' + lorem.trimStart() + '\'');
console.log('\'' + lorem.trimEnd() + '\'');

const l = lorem.length;

console.log(lorem.padStart(l + 7, 'http://'));
console.log(lorem.padEnd(l + 4, '.com'));
