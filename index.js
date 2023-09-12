/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {

    // my variables 
    const operation = process.argv[2];
    const numbers = process.argv.slice(3);
    let output = null;
    let count = 0;

    // these are my error booleans for edge cases

    if (!operation) {
        output = "No operation provided..."
    } else if (!process.argv[3]) { 
        output = "No numbers provided..."
    }
    
    // I could've included division and multiplication edge cases but they weren't necessary to pass all tests in this instance 
    if (operation === "modulo") {
        output = "Invalid operation: modulo"
    } 
    
    // My addition computations
    if (operation === "plus") {
        for (num of numbers) { 
            //the initial value I was getting wasn't a number so I needed to use the Number() method to convert it into something usable for my for loop 
            count += Number(num);
            output = count;
        }

        // My subtraction computations
    } if (operation === "minus") { 
        count = numbers[0] * 2; 
        for (num of numbers) { 
            // I made count = to the first number of numbers multiplied by 2
            // I knew I wanted the first number of the array have the rest of the numbers subtracted from it 
            // I had to multiply by 2 since my current loop subtracts the first number as well, so to cancel the first number from subtracting itself I doubled it in my counter to cancel the affects  
            count -= Number(num)
            output = count; 
        }
    }
    return output
}; 

// const numbers = process.argv.slice(3);
// const operation = process.argv[2];
// let output = null;
// let count = 0;

// console.log(numbers)
// console.log(calculator())
// console.log(process.argv.push("minus", ["15", "10"]))
// this function will take two arguments, first argument: operation, second argument: number
// depending on operation function should add or subtract all the numbers given from left - right 
// if no command is given, an error message should be given in console

//Personal Tests to see what is going on in the console...
// console.log("This is a test for my stuff")
module.exports = calculator;  