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
  for (let number of sumArray) {
    if (isNaN(+number)) {
      return equals;
    } else {
      equals += (+number);
    }
  }
  return equals;
};

const multiply = function(mulArray) {
  let equals = 1;
  for (let number of mulArray) {
    if (isNaN(+number)) {
      return equals;
    } else {
      equals *= (+number);
    }
  }
  return equals;
};

const power = function(a, b) {
	let power = a ** b
  return power;
};

const factorial = function(number) {
  let equals = 1;
  if (number === 0) {
    return equals;
  } else {
    for (let i = number; i >= 1; i--) {
      equals *= i
    }
    return equals;
  }
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
