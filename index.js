/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operation = process.argv[2];
    const numbers = process.argv.slice(3)

    if (!operation) {
        return "No operation provided..."
    }

    if (numbers.length === 0) {
        return "No numbers provided..."
    }

    if (operation !== 'plus' && operation !== 'minus') {
        return "Invalid operation: modulo"
    }

    let total = parseInt(numbers[0])

    for (let i = 1; i < numbers.length; i++) {
        const num = parseInt(numbers[i])

        if (num === NaN) {
            return "Invalid number provided"
        }

        if (operation === 'plus') {
            total += num
        } else if (operation === 'minus') {
            total -= num
        }
    }

    return total;
}










// Don't change anything below this line.
module.exports = calculator;
