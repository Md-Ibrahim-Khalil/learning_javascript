num_printer(10, function(n) { return n % 2 != 0; })
0
1
2
3
4
5
6
7
8
9
10

    [1, 2].forEach(function(i) { console.log(i); })
1
2
undefined

function print_element(elem) { console.log(elem); }
undefined

    [1, 2].forEach(print_element)
1
2
undefined

    [1, 2].forEach(function(elem) { console.log(elem); })
1
2
undefined