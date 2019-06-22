'use strict';

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = [...'aeiou'];
  const chars = [...s];
  chars.filter(c => vowels.includes(c))
    .forEach(c => console.log(c));
  chars.filter(c => vowels.includes(c) === false)
    .forEach(c => console.log(c));
}

exports.vowelsAndConsonants = vowelsAndConsonants;
