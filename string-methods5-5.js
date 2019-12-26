'use strict';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';

console.log(lorem);
console.log('slice all from 2: ', lorem.slice(2));
console.log('slice from 2 to 4: ', lorem.slice(2, 4));

console.log('concat with .com', lorem.concat('.com'));
console.log('toLowerCase', lorem.toLowerCase());
console.log('toUpperCase', lorem.toUpperCase());

console.log('match', lorem.match('ipsum'));
