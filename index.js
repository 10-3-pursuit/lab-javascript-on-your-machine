/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // My Variables
    const args = process.argv.slice(2); // Get command line arguments, excluding the first two (node and script name)
    const operation = args[0];
    const numbers = args.slice(1).map(Number);
    let result = 0; 
    
    
    if (!operation) {
       return "No operation provided...";
    } else if (numbers.length === 0) {
       return "No numbers provided...";
    } else if (operation === "modulo") {
       return "Invalid operation: modulo";
    } else if (operation !== 'plus' && operation !== 'minus') {
       return "Invalid operation. Please use 'plus' or 'minus'.";
    }
  
    if (operation === 'plus') {
        for (let i = 0; i < numbers.length; i++) {
          result += numbers[i]; 
        }
      } else if (operation === 'minus') {
        if (numbers.length > 1) {
          result = numbers[0];
          for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i]; 
          }
        } else {
          result = numbers[0];
        }
      }
    
      return result;
    }


// Don't change anything below this line.
module.exports = calculator;
