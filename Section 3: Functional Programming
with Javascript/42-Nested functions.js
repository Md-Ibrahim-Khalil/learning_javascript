function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}
undefined

hypotenuse(3, 4);
5

function hypotenuse(a, b) {
    var y = 46;

    function square(x) {
        console.log(y);
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}
undefined

hypotenuse(3, 4);
46
46
5