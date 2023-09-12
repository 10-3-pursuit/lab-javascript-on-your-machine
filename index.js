/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    //Make new array to stor sliced version of process.argv and make accumulator
    //noOperatorArr is to stop the loop from adding the operator to the numbers and breaking the code
    let noOperatorArr = process.argv.slice(3)
    let newArr = process.argv.slice(2)
    let solution = 0
    //Make loops to iterate through newArr and evaluate
    //Make conditionals for addition, subtraction , missing numbers , and missing operators
    for (let arrs of newArr){
        for (let arr of arrs){
            if ((newArr[0]).toLowerCase() === "plus"){
                solution += Number([...noOperatorArr])
            } else if ((newArr[0]).toLowerCase() === "minus"){
                solution -= Number([...noOperatorArr])
            } else if ((newArr[0]).toLowerCase() !== "plus" && (newArr[0]).toLowerCase() !== "minus") {
                return "Please type 'plus' or 'minus' to begin a calculation"
            } else if (noOperatorArr[0] === undefined){
                return "Please type in a number to begin a calculation"
            }
        }
    }
   return solution 
}
console.log(calculator())
// Don't change anything below this line.
module.exports = calculator;
