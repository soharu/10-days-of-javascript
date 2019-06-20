'use strict';

function printAreaAndPerimeter(r) {
  const PI = Math.PI;
  // Print the area of the circle:
  console.log((r * r) * PI);

  // Print the perimeter of the circle:
  console.log((2 * r) * PI);
}

exports.printAreaAndPerimeter = printAreaAndPerimeter;
