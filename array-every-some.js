'use strict';

const arr = [1, 2, 'ser'];

const arrCheckEvery = arr.every(e => typeof e === 'number');
const arrCheckSome = arr.some(e => typeof e === 'number');

console.log({ arrCheckEvery, arrCheckSome });
