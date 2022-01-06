const sumAll = function(num1, num2) {
  if (typeof(num1) != "number" || typeof(num2) != "number") {
    return 'ERROR';
  }
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  let sum = 0;
  let diff = Math.abs(num1 - num2);
  let count = 1;
  let smaller = (num1 < num2) ? num1 : num2;
  
  sum += num1;
  sum += num2;
  while (count < diff) {
    sum += smaller + count++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
