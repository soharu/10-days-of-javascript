'use strict';

const assert = require('assert');
const arithmeticOperators = require('../source/Day-1/arithmetic-operators.js');

describe('Day 1: Arithmetic Operators', () => {
  describe('getArea()', () => {
    it('should calculate the area of a rectangle', () => {
      assert.strictEqual(arithmeticOperators.getArea(3, 4.5), 13.5);
    });
  });
  describe('getPerimeter()', () => {
    it('should calculate the perimeter of a rectangle.', () => {
      assert.strictEqual(arithmeticOperators.getPerimeter(3, 4.5), 15);
    });
  });
});
