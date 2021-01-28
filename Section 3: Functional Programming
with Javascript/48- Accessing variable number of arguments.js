console.log("String 1");
String 1
undefined

console.log("String 1", "String 2");
String 1 String 2
undefined


function sum() {
    console.log(arguments);
}
undefined

sum(1, 5, 3);
Arguments(3) [1, 5, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
undefined

function sum() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
undefined
sum(3, 5, 6);
3
5
6
undefined
///////////////////////////////////////////////////////////////////////////////////////
function sum() {
    return arguments.reduce(function(prev, curr) {
        return prev + curr;
    });
}
undefined
sum(3, 5, 6);
VM3203: 2 Uncaught TypeError: arguments.reduce is not a

function
///////////////////////////////////////////////////////////////////////////////////////////

function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        return prev + curr;
    });
}
undefined

sum(3, 5, 6);
14

sum(4, 6);
10

sum();
Uncaught TypeError: Reduce of empty array with no initial value
    /////////////////////////////////////////////////////////////////////////////////////

function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}
undefined

sum();
0

///////////////////////////////////////////////////////////////////////////////////////////

function sum() {
    return arguments.reduce(function(prev, curr) {
        return prev + curr;

    }, 0);
}
undefined


sum(2, 4, 6);

Uncaught TypeError: arguments.reduce is not a
function