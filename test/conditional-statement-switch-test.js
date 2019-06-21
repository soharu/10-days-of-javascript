'use strict';

const assert = require('assert');
const sut = require('../source/Day-2/conditional-statement-switch.js');

describe('Day 2: Contional Statement: If-Else', () => {
  describe('getLetter()', () => {
    it('should return return A, B, C, or D depending on the criteria', () => {
      assert.strictEqual(sut.getLetter('a'), 'A');
      assert.strictEqual(sut.getLetter('b'), 'B');
      assert.strictEqual(sut.getLetter('c'), 'B');
      assert.strictEqual(sut.getLetter('d'), 'B');
      assert.strictEqual(sut.getLetter('e'), 'A');
      assert.strictEqual(sut.getLetter('f'), 'B');
      assert.strictEqual(sut.getLetter('g'), 'B');
      assert.strictEqual(sut.getLetter('h'), 'C');
      assert.strictEqual(sut.getLetter('i'), 'A');
      assert.strictEqual(sut.getLetter('j'), 'C');

      assert.strictEqual(sut.getLetter('k'), 'C');
      assert.strictEqual(sut.getLetter('l'), 'C');
      assert.strictEqual(sut.getLetter('m'), 'C');
      assert.strictEqual(sut.getLetter('n'), 'D');
      assert.strictEqual(sut.getLetter('o'), 'A');
      assert.strictEqual(sut.getLetter('p'), 'D');
      assert.strictEqual(sut.getLetter('q'), 'D');
      assert.strictEqual(sut.getLetter('r'), 'D');
      assert.strictEqual(sut.getLetter('s'), 'D');
      assert.strictEqual(sut.getLetter('t'), 'D');

      assert.strictEqual(sut.getLetter('u'), 'A');
      assert.strictEqual(sut.getLetter('v'), 'D');
      assert.strictEqual(sut.getLetter('w'), 'D');
      assert.strictEqual(sut.getLetter('x'), 'D');
      assert.strictEqual(sut.getLetter('y'), 'D');
      assert.strictEqual(sut.getLetter('z'), 'D');
    });
  });
});
