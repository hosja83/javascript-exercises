const add = function(a, b) {
  return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, arrValue) => {
    return total + arrValue;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, arrValue) => {
    return product * arrValue;
  }, 1)
};

const power = function(base, pow) {
  if (Number(base) === 0 )
    return 0;
  let total = 1;
  for (let i = 0; i < pow; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
  if (num === 0) return 1;
	let total = num;
  for (let i = num; i > 1; i--) {
    total *= i - 1;
  }
  return total;
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
