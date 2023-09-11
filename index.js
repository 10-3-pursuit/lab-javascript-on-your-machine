/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Usage: node script.js [plus|minus] number1 number2 ...");
    process.exit(1);
  }

  const operation = args[0];
  const numbers = args.slice(1).map(Number); 

  if (operation === "plus") {
    const result = numbers.reduce((acc, num) => acc + num, 0);
    return result;
  } else if (operation === "minus") {
    if (numbers.length < 2) {
      console.error("For subtraction, at least two numbers are required.");
      process.exit(1);
    }
    const result = numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
    return result;
  } else {
    console.error('Invalid operation. Please use "plus" or "minus".');
    process.exit(1);
  }
}

const result = calculator();
console.log("Result:", result);
// Don't change anything below this line.
module.exports = calculator;
