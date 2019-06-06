'use strict';

const assert = require('assert');
const testConsole = require('test-console');
const dataTypes = require('../source/Day-0/data-types.js');

describe('Day 0: Data types', () => {
  describe('performOperation()', () => {
    it('should log the sum of parameters and internal values', () => {
      const secondInteger = '12';
      const secondDecimal = '4.32';
      const secondString = 'is the best place to learn and practice coding!';

      const outputs = testConsole.stdout.inspectSync(() => {
        dataTypes.performOperation(secondInteger, secondDecimal, secondString);
        console.log(4 + 12);
        console.log(4 + 4.32);
        console.log('HackerRank ' + secondString);
      });
      const actual = outputs.slice(0, 3);
      const expected = outputs.slice(3, 6);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
