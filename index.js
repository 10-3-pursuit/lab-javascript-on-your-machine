/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const args = process.argv.slice(2);

    const operation = args[0];
    const numbers = args.slice(1).map(Number);

    //Edge Cases

    if(!operation){
        return 'No operation provided...';
    }
    if(!args[1]){
        return 'No numbers provided...';
    }
    if(operation !== 'plus' && operation !== 'minus'){
        return 'Invalid operation: modulo';
    }


    // Adding numbers together
    if(operation === 'plus'){
        const result = numbers.reduce((acc, num) => acc + num, 0);
        return result;
    }
    // Subtracting numbers together
    else if(operation === 'minus'){
        const result = numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
        return result;
    }
}

// Don't change anything below this line.
module.exports = calculator;
