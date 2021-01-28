for (var i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}
output =>
    1
2
3
4
5

for (var i = 1; i <= 10; i++) {
    if (i == 8) {
        continue;
    }
    console.log(i);
}

output =>
    1
2
3
4
5
6
7
9
10
undefined