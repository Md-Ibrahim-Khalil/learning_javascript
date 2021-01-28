function num_printer(upto) {
    for (var i = 0; i <= upto; i++)
        console.log(i);
}
undefined

num_printer(10);
1
0
2
3
4
5
6
7
8
9
10

function odd_num_printer(upto) {
    for (var i = 0; i <= upto; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
undefined

odd_num_printer(10);
1
3
5
7
9

function odd_num_printer(upto, filter) {
    for (var i = 0; i <= upto; i++) {
        if (filter(i)) {
            console.log(i);
        }
    }
}
undefined

function is_odd(n) {
    return n % 2 != 0;
}
undefined

num_printer(10, is_odd);
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