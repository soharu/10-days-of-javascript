'use strict';

const assert = require('assert');
const testConsole = require('test-console');

const sut = require('../source/Day-2/loops.js');

describe('Day 2: Loops', () => {
  describe('vowelsAndConsonants()', () => {
    it('should print each characters in expected order', () => {
      const s = 'javascriptloops';
      const outputs = testConsole.stdout.inspectSync(() => {
        sut.vowelsAndConsonants(s);
        [...'aaioojvscrptlps'].forEach(c => console.log(c));
      });

      const actual = outputs.slice(0, s.length);
      const expected = outputs.slice(s.length, s.length * 2);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
