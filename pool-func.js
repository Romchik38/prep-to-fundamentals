'use strict';

const tags = {
  'p': item => `<p>${item}</p>`,
  'h1': item => `<h1>${item}</h1>`,
  'h2': item => `<h1>${item}</h2>`,
};

const fnFactory = (tag = 'p') => tags[tag];

const p = fnFactory();
const h1 = fnFactory('h1');
const h2 = fnFactory('h2');

const body = `
  <body>
    ${h1('Main Page')}
    ${h2('Good1')}
    ${p('Description of Good1')}
  </body>
`;
console.log(body);
