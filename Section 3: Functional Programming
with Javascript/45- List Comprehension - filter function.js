function iseven(elem) {
    return elem % 2 === 0;
}
undefined


    [2, 3, 4, 6, 7, 12, 15].filter(iseven);
(4) [2, 4, 6, 12]


[2, 3, 4, 6, 7, 12, 15].filter(function(elem) {
    return elem % 2 === 0;
});

(4) [2, 4, 6, 12]

///Call Back Function///

function iseven(current, index, array) {
    console.log(current + " :: " + index + " :: " + array);
    return current % 2 === 0;
}

[2, 3, 4, 6, 7, 12, 15].filter(iseven);