var scope = "global scope";
undefined

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f();
}
undefined

scope
    "global scope"

checkscope();
"local scope"

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f;
}
undefined

checkscope();
ƒ f() {
    return scope;
}

checkscope()();
"local scope"

Quiz 12: Quiz - 2

1.

function first(x) {
    return function() {
        return x++;
    }
}
undefined

first(1)();
1


2.

function add(to) {
    return function(x) {
        return x + to;
    }
}
undefined
add(2)("xyz");
"xyz2"