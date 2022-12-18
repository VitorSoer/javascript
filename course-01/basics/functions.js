// Function declaration
function printYear() {
  const date = new Date();

  console.log(`Year: ${date.getFullYear()}`);
}

printYear();

// Function expression
let printHello = function () {
  console.log('Helloooooo!!!');
};

printHello();

// With an argument
function printData(name, age) {
  console.log(`Name ${name} | Age: ${age}`);
}

printData('Eddie', 29);

// Returning something
function multiply(valueOne, valueTwo) {
  return valueOne * valueTwo;
}

console.log(multiply(5, 2));
