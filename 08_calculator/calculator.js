const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sub = a - b
  return sub;
};

const sum = function(sumArray) {
  let equals = 0;
  for (let number in sumArray) {
    if (isNaN(number)) {
      return equals;
    } else {
      equals += number
    }
  }
};

const multiply = function(a, b) {

};

const power = function(a, b) {
	
};

const factorial = function(a, b) {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
