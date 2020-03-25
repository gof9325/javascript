const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  division: function(a, b){
    return a / b;
  },
  power: function(a, b){
    return a ** b;
  }
}

const plus = calculator.plus(5, 5);
console.log(plus);

const minus = calculator.minus(10, 5);
console.log(minus);

const multiply = calculator.multiply(5, 5);
console.log(multiply);

const division = calculator.division(5, 5);
console.log(division);

const power = calculator.power(5, 5);
console.log(power);
