/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //(+ or -) first arg.
    const operation = process.argv[2];

    //valid operation (guard clauses)
   if(!operation){
    return "No operation provided...";
   };
   
    if(operation !== "plus" && operation !== "minus"){
        return "Invalid operation: modulo";
    };

    if (process.argv.length < 4) {
        return "No numbers provided..."

    };

    //result
    let answer = 0;

    //loop
    for ( let args of process.argv.slice(3)){
        //we slice at [3]
        let num = parseInt(args);

    //valid number
    if(num !== num){
        return "No number provided...";
    }

    if(operation === "plus"){
        answer += num;
    }else if(operation === "minus"){
        //CHAT GPT Helped here. Still fuzzy and not 100% understanding. Nesting is confusing.
        //so with subtraction we must ask if the answer is at 0 to see if it's the first number. 
        if(answer === 0){
            answer = num
        }else if( num < 0){
            //CAN'T figure the negative number part. 
            answer += -num
            // if it is not 0 then that means that we currently have a number there and must subtract from that number. (right?)
        }else{
            answer -= num;
        }
    }   
}
    return answer;
    // console.log(result);
};
console.log(calculator());



// Don't change anything below this line.
module.exports = calculator;
