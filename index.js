/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operation = process.argv[2];
    const args = process.argv.slice(3)

    if(!operation){
       return "No operation provided..."
    }

    if(args.length < 2){
       return "No numbers provided..."
    }

    const numbers = [];
    for(const arg of args){
        const num = Number(arg);
        if (isNaN(num)){
            return "not a valid argument"
        }
        numbers.push(num);
    }

    let result = 0;

    if(operation === "plus"){
        result = 0;
        for (const num of numbers){
            result += num;
        }
    } else if (operation === "minus"){
        if(numbers.length === 2){
            result = numbers[0] - numbers[1];
        } else {
            result = numbers[0]
            for (let i = 1; i < numbers.length; i++) {
                result -= numbers[i];
            }
        }
    } else {
        return `Invalid operation: ${operation}`
    }
    return result;
}

const result = calculator();
console.log(result);

// Don't change anything below this line.
module.exports = calculator;
