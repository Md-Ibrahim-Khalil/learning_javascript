function step_iterator(start, step) {
    return function() {
        var res = start;
        start = start + step;
        return res;
    }
}
undefined

var numberwith2steps = step_iterator(0, 2);
undefined

numberwith2steps;
ƒ() {
    var res = start;
    start = start + step;
    return res;
}

numberwith2steps();
0

numberwith2steps();
2

numberwith2steps();
4


//////////////

var another = step_iterator(0, 2);
undefined

another;
ƒ() {
    var res = start;
    start = start + step;
    return res;
}

another();
0

another();
2

another();
4