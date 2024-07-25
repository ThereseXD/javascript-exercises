const add = function(...args) {
	return args.reduce((total,num)=>total+=num, 0)
};

const subtract = function(...args) {
	return Math.max(...args) - Math.min(...args);

};

const sum = function(array) {
	return array.reduce((total,num)=>total+ num, 0)
};

const multiply = function(array) {
  return array.reduce((total,num)=>total*=num, 1)
};

const power = function(num1,num2) {
   return num1 ** num2;
	
};

const factorial = function(num) {
  let output = 1;
  for (let i=num; i > 0; i--){
    output *= i;
  }
  return output;
	
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
