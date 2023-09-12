/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const arr = process.argv.slice(2)
    if(arr.length===0)
        return "No operation provided..."
    if(arr.length===1)
        return "No numbers provided..."
    let total = Number(arr[1])
    for(let i = 2; i<arr.length; i++){
        if(arr[0]==="plus")
            total += Number(arr[i])
        else if(arr[0]==="minus")
            total -= Number(arr[i])
        else 
            return `Invalid operation: ${arr[0]}`
    }
    return total;
}

// Don't change anything below this line.
module.exports = calculator;
