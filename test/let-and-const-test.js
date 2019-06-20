'use strict';

const assert = require('assert');
const testConsole = require('test-console');

const sut = require('../source/Day-1/let-and-const.js');

describe('Day 0: Let and Const', () => {
  describe('printAreaAndPerimeter()', () => {
    it('should log area and perimeter of circle', () => {
      const outputs = testConsole.stdout.inspectSync(() => {
        sut.printAreaAndPerimeter(5);

        console.log(25 * Math.PI);
        console.log(10 * Math.PI);
      });

      const actual = outputs.slice(0, 2);
      const expected = outputs.slice(2, 4);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
