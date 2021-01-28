var myarray = [67, 34, 2, 5, 6, 8];
undefined

myarray.sort();
(6) [2, 34, 5, 6, 67, 8]

function num_comparator(a, b) {
    return (a - b);
}
undefined

myarray.sort(num_comparator);

(6) [2, 5, 6, 8, 34, 67]



function num_comparator(a, b) {
    return (b - a);
}
undefined

myarray.sort(num_comparator);
(6) [67, 34, 8, 6, 5, 2]