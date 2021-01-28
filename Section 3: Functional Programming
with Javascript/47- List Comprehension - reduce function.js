[3, 4, 6, 7, 9].reduce(function(prev, curr, index, array) {
    return prev + curr;
}, 0);
29


    [3, 4, 6, 7, 9].reduce(function(prev, curr) {
    return prev + curr;
});
29

function sum_natural_nos(n) {
    return 0;
}
undefined


function range(start, end, step) {
    var res = [];
    var item = start;
    while (item <= end) {
        res.push(item);
        item = item + step;
    }
    return res;

}
undefined

function sum_natural_nos(n) {
    return range(1, n, 1).reduce(function(prev, curr) {
        return prev + curr;
    });
}