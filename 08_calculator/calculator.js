const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  console.log(arr.length);
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length > 2) {
      return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
  } else { return arr.length === 0 ? 0 : arr[0] + arr[1];
  }
};

const multiply = function(arr) {
  if (arr.length > 2) {
    return arr.reduce((multiple, currentNum) => {
      return multiple * currentNum;
    });
  }
  return arr[0] * arr[1];
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else if (a === 1) {
      return 1;
  } else {
      let cumSum = a;
      for (let i = a - 1; i > 0; i--) {
        cumSum *= i;
      }
      return cumSum;
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
