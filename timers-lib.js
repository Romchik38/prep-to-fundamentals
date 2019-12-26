'use strict';

const timers = require('timers');

const timeout = timers.setTimeout;
const interval = timers.setInterval;

timeout(() => {
  console.log('hello from timeout');
}, 1000);

const int1 = interval(() => {
  console.log('hello from interval');
}, 500);

timeout(() => {
  clearInterval(int1);
}, 3000);
