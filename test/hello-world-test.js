'use strict';

const assert = require('assert');
const testConsole = require('test-console');
const helloWorld = require('../source/Day-0/hello-world.js');

describe('greeting()', () => {
  it('should log "Hello, World!" and parameterValue', () => {
    const parameterValue = 'Welcome to 10 Days of JavaScript!';
    const actual = testConsole.stdout.inspectSync(() => {
      helloWorld.greeting(parameterValue);
    });
    assert.deepStrictEqual(actual, ['Hello, World!\n', parameterValue + '\n']);
  });
});
