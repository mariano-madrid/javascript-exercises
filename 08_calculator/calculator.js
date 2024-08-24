const add = function(...args) {
    let sum = 0;
    args.forEach((arg) =>{
      sum += arg;
    })
    return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

const power = function(num1, num2) {
	let total = 1;
  for(let i = 0; i < num2; i++){
    total *= num1;
  }
  return total;
};

const factorial = function(num) {
	let sumatorio = 1;
  let total = 0;

  for(let i = 0; i < num + 1; i++){
    sumatorio *= (num + 1) - i
  }

  total = (sumatorio/ (num + 1));
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
