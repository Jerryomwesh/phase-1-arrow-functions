// Function expression for division
const divide = function() {
  return 2000 / 100;
};

// Function expression for addition
const add = function(a, b) {
  return a + b;
};

// Arrow function for addition (shortened syntax)
const addArrow = (a, b) => a + b;

// Arrow function with a single parameter (parentheses optional)
const square = x => x ** 2;

// Arrow function with multiple lines (explicit return required)
const sum = (a, b) => {
  console.log(`Adding ${a}`);
  console.log(`Adding ${b}`);
  return a + b;
};

// Example usage of .map() with an arrow function
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2); // Returns [1, 4, 9]

// Export functions for testing
module.exports = { divide, add, addArrow, square, sum };
