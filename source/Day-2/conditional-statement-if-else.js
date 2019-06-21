'use strict';

// constraints: 0 <= score <= 30
function getGrade(score) {
  if (score < 0 || score > 30) {
    throw new RangeError('Invalid input');
  }

  if (score <= 5) {
    return 'F';
  }

  if (score <= 10) {
    return 'E';
  }

  if (score <= 15) {
    return 'D';
  }

  if (score <= 20) {
    return 'C';
  }

  if (score <= 25) {
    return 'B';
  }

  if (score <= 30) {
    return 'A';
  }
}

exports.getGrade = getGrade;
