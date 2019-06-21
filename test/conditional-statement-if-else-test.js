'use strict';

const assert = require('assert');
const sut = require('../source/Day-2/conditional-statement-if-else.js');

describe('Day 2: Contional Statement: If-Else', () => {
  describe('getGrade()', () => {
    context('score is valid', () => {
      it('should return the letter corresponding to the score', () => {
        assert.strictEqual(sut.getGrade(30), 'A');
        assert.strictEqual(sut.getGrade(26), 'A');
        assert.strictEqual(sut.getGrade(25), 'B');
        assert.strictEqual(sut.getGrade(21), 'B');
        assert.strictEqual(sut.getGrade(20), 'C');
        assert.strictEqual(sut.getGrade(16), 'C');
        assert.strictEqual(sut.getGrade(15), 'D');
        assert.strictEqual(sut.getGrade(11), 'D');
        assert.strictEqual(sut.getGrade(10), 'E');
        assert.strictEqual(sut.getGrade(6), 'E');
        assert.strictEqual(sut.getGrade(5), 'F');
        assert.strictEqual(sut.getGrade(0), 'F');
      });
    });
    context('score is invalid', () => {
      it('should throw an error', () => {
        assert.throws(() => sut.getGrade(31), Error);
        assert.throws(() => sut.getGrade(-1), Error);
      });
    });
  });
});
