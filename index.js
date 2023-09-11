/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

let myArray =process.argv.slice(2);
if(myArray.length<1){
    return "No operation provided...";
}

const[operation,...numbers]= myArray;
if(numbers.length ===0){
    return "No numbers provided...";
}

if(!["plus" , "minus"].includes(operation)){
    return `Invalid operation: ${operation}`;

}
let total = parseInt(numbers[0]);
for(let number of numbers.slice(1)){
    if(operation === "plus"){
        total+= parseInt(number)
    }else if(operation === "minus"){
        total-= parseInt(number);
    }
}
return total;
}

console.log(calculator());

// Don't change anything below this line.
module.exports = calculator;
