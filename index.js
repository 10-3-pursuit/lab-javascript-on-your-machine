/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    let acc = 0
    const operation = process.argv[2]
    const nums = process.argv.slice(3)

    if(typeof(operation) === 'undefined' || parseInt(operation).toString() !== 'NaN'){
        return 'No operation provided...'
    }else if(typeof(nums) === 'undefined' || parseInt(nums[0]).toString() === 'NaN'){
        return 'No numbers provided...'
    }else if(operation !== 'plus' && operation !== 'minus'){
        return `Invalid operation: ${operation}`
    }else{
        if(operation === 'plus'){
            for(let num of nums){
                acc+= parseInt(num)
            }
        }else if(operation === 'minus'){
            acc = nums[0]
            for(let num of nums.slice(1)){
                acc-= parseInt(num)
            }
        }
    } 
    return acc
}

// Don't change anything below this line.
module.exports = calculator;
