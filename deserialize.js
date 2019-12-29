'use strict';

const vm = require('vm');

const deserialize = str => {
  const script = vm.createScript('(' + str + ')');
  const data = script.runInThisContext();
  return data;
};

module.exports = deserialize;
