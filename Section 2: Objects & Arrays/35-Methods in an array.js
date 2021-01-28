Concat:

    var a = [1, 3, 5];
undefined

var b = [2, 4, 6];
undefined

a.concat(b);
(6) [1, 3, 5, 2, 4, 6]

var c = [10, 11, 12];
undefined

a.concat(b, c);
(9) [1, 3, 5, 2, 4, 6, 10, 11, 12]

JOIN:
    a;
(3) [1, 3, 5]

a.join();
"1,3,5"

a.join("|");
"1|3|5"

PUSH:

    a;
(3) [1, 3, 5]

a.push(7);
4

a;
(4) [1, 3, 5, 7]

Unshift Methods(add an element at the start of the array)

a.unshift(9);
5

a;
(5) [9, 1, 3, 5, 7]

POP to get the last item of array:

    a.pop();
7

a;
(4) [9, 1, 3, 5

    a.shift(); 9

    a;
    (3) [1, 3, 5]

    Slice and Splice Methods: