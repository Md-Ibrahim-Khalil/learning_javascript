/** Javascript has exception based error handling mechanism **/

function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}
undefined

sum(1, 2, "s");
"3s"

/** 
 *isNaN()
 *isNaN(is not a number) function determines whether a value is an illegal number 
 * This function returns true if the value is not a number and returns false if the 
 * given value is a number.
 * 
 * isNaN(4) => false
 * isNaN("s") => true
 * isNaN("4") => false
 * 
 **/


function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        if (!isNaN(curr)) {
            return prev + curr;
        } else {
            throw Error("non-numeric argument: " + curr);
        }
        return prev + curr;
    }, 0);
}
undefined

sum(2, 4, 6);
12

sum(2, 4, "s");
Uncaught Error: non - numeric

function test() {
    try {
        sum(2, 4, "s");
    } catch (error) {
        console.log("Doing something else");
    }

}

test();
Doing something
else
    undefined