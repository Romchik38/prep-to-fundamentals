'use strict';

const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed \
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id \
  est laborum.';

const split = str.split(' ');
console.log('str: ', str, '\n');
console.log('split: ', split, '\n');
console.log('join: ,', split.join(' '), '\n');
console.log('repeat: 5 a', 'a'.repeat(5), '\n');
console.log('replace a -a-', str.replace(new RegExp('a', 'g'), '-a-'), '\n');
