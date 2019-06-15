'use strict';

/*
 * Create the function factorial here
 *
 * Constraints
 *  - 1 <= n <= 10
 */

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; ++i) {
    result *= i;
  }

  return result;
}

exports.factorial = factorial;
