console.log(process.argv);
/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const num = process.argv.slice(2)
    let accumulator = num[1] 
    // num[0] is the operation. Dont include it! 
    // If num[0] is minus, take away all the numbers from each other
    if (num[0] === `minus`) {
    // num[1] is the starting value of our accumulator so we used num.slice[2].
    for (let int of num.slice[2]) {
    accumulator -= parseInt(int)
        }
    } else if (num[0] === `plus`) {
        for (let int of num.slice[2]) {
            accumulator += parseInt(int)  
        }
    } else if (typeof (process.argv[2]) === "undefined") {
            return "No numbers provided...";
    } else if (typeof num[0] === "undefined") {
            return "No operator provided..." 
    } else if (num[0] !== "plus" && num[0]!== "minus") {
            return `Invalid operations ${num[0]}`
    }
    
    return accumulator; 
} 


// Don't change anything below this line.
module.exports = calculator;
