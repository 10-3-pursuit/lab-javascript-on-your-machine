/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let total = parseInt(process.argv[3])
    let numArr = process.argv.slice(4)
    if (typeof process.argv[2] !== "string"){
        return "No operation provided..."
    }
    if (process.argv[3] === undefined){
        return "No numbers provided..."
    }
    if (process.argv[2] !== "plus" && process.argv[2] !== "minus") {
        return `Invalid operation: ${process.argv[2]}`
    }
    if (process.argv[2] === "plus") {
      for (const num of numArr) {
        total += parseInt(num)
      }
    } else if (process.argv[2] === "minus") {
      for (const num of numArr) {
        //total = parseInt(process.argv.slice(3, 4))
        total -= parseInt(num)
      }
    }
    return total
  }

// Don't change anything below this line.
module.exports = calculator;
