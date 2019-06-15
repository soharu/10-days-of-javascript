'use strict';

const assert = require('assert');
const functions = require('../source/Day-1/functions.js');

describe('Day 1: Functions', () => {
  describe('factorial()', () => {
    it('should return the value of n!', () => {
      assert.strictEqual(functions.factorial(1), 1);
      assert.strictEqual(functions.factorial(4), 24);
      assert.strictEqual(functions.factorial(10), 3628800);
    });
  });
});
