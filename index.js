/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let array = process.argv.slice(2)
    let myResult = Number(array[1])
    let operation = array[0]
//if no operation provided, return "No operation provided..."
    if(!operation){
        return "No operation provided..."
    }

    //if no numbers are provided, return "No numbers provided..."
    if(array.length <= 1) { 
        return "No numbers provided..."
    }
    //if the operation does not match 'plus' or 'minus'" return "Invalid operation: modulo"
    if(operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`
    }
    for(let i=2; i < array.length; i++) {
        if(operation === "plus"){ 
            myResult += Number(array[i]) 
        } else if(operation === "minus") {
            myResult -= Number(array[i])
        }     
    }
    return myResult
    //['plus', 23, 45, 64, 234]
    //if no operation provided, return "No operation provided..."
    //if no numbers are provided, return "No numbers provided..."
    //if the operation does not match 'plus' or 'minus'" return "Invalid operation: modulo"
}

// Don't change anything below this line.
module.exports = calculator;
