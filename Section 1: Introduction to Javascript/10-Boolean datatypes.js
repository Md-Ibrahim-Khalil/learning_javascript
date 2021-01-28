var x = false;
undefined

typeof x;
"boolean"

var y;
undefined

x == y;
false

function checkFalsy(z) {
    if (z) {
        console.log('Truthy value passed');
    } else {
        console.log('Falsy value passed');
    }
}
undefined

var val;
undefined

checkFalsy(val);
Falsy value passed
undefined