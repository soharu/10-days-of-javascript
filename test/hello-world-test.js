'use strict';

const helloWorld = require('../source/Day-0/hello-world.js');

describe('greeting()', () => {
  it('should log "Hello, World!" and parameterValue', () => {
    const parameterValue = 'Hi';
    helloWorld.greeting(parameterValue);
    // TODO: check logs
  });
});
