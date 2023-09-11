/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
// If statements to make the error messages which are all strings
    // Get third element from array of command line arguments (argv[2]) and assign it to variable "operation"
    let operation = process.argv[2];
    // Get the array of command line arguments starting from the fourth element (argv[3]) and assign it to a variable named "args"
    let args = process.argv.slice(3);
    // Initialize an empty array named "numbers"
    let numbers = [];
    // If "operation" variable is falsy aka undefined or empty, return a string error message
    if (!operation) {
      return "No operation provided...";
    }
    // If "operation" variable is not equal to "plus" and also not equal to "minus" (strictly bc using !== operator), return a string error message
    if (operation !== 'plus' && operation !== 'minus') {
      return `Invalid operation: ${operation}`;
    }
    // To check the arguments that represent numbers gotta loop for each element in the "args" array (which represents the command line arguments starting from argv[3])
    for (let i = 0; i < args.length; i++) {
        // Convert the current element of "args" array to a number using Number (can also use +num or .parseInt();) and assign it to a variable named "num"
      let num = Number(args[i]);
      // If the conversion to number results in NaN (Not a Number), return a string error message
      if (num !== num) {
        return `Error: Invalid number input '${args[i]}'.`;
      }
      // Add the converted number to the "numbers" array using .push(); array method
      numbers.push(num);
    }
    // If "numbers" array is empty, return error message
    if (numbers.length === 0) {
      return "No numbers provided...";
    }
// The code if no error  
    // Initialize a variable named "result" with a value of 0 because if no error output is either the sum or the result of multiple subtractions
    let result = 0; 
    // If "operation" variable is equal to the string "plus"...
    if (operation === 'plus') {
        //... Loop through each element in the "numbers" array
      for (let i = 0; i < numbers.length; i++) {
        // Add the current element of "numbers" array to the "result" variable
        result += numbers[i];
      }
    }
    // Else if "operation" variable is equal to the string "minus"
    else if (operation === 'minus') {
      // initializing with result = numbers[0] to start subtracting the other numbers from it
      result = numbers[0];
      // Looping through each element in the "numbers" array starting from the second element so that's why gotta initialize it at 1 (first element always at index 0). Loop continues as long as i is less than length of numbers array
      for (let i = 1; i < numbers.length; i++) {        
        // Subtract the current element of "numbers" array from the "result" variable
        result -= numbers[i];
      }
    }
    // Return the value of "result" variable
    return result;
};

// Don't change anything below this line.
module.exports = calculator;
