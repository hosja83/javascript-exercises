const fibonacci = function(pos) {
  if (pos < 1) return 'OOPS';
  if (pos < 3) return 1;
  
  let prev, beforePrev, current;
  prev = 1;
  beforePrev = 1;
  
  for (let i = 2; i < pos; i++) {
    current = prev + beforePrev;
    beforePrev = prev;
    prev = current;
  }
  return current;
};
/*
if (pos < 1) return 'OOPS';
  if (pos < 3) return 1;
  
  // https://r-knott.surrey.ac.uk/Fibonacci/fibFormula.html

  return Math.round((exponential(1.6189339, pos) - exponential(-.6180339, pos)) / 2.23606798);

function exponential(base, pow) {
  if (Number(base) === 0 )
    return 0;
  let total = 1.0;
  for (let i = 0; i < pow; i++) {
    total *= base;
  }
  return total;
}*/

// Do not edit below this line
module.exports = fibonacci;
