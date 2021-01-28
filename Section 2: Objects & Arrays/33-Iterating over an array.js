var myarray = [1, 2, 3];
undefined

myarray[10] = 11;
11

for (var i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
}

1
2
3
undefined
11
undefined

for (var i in myarray) {
    console.log(i);
}
0
1
2
10
undefined

for (var i in myarray) {
    if (myarray.hasOwnProperty(i)) {
        console.log(i);
    }
}
0
1
2
10
undefined

for (var i in myarray) {
    if (myarray.hasOwnProperty(i)) {
        console.log(myarray[i]);
    }
}
1
2
3
11
undefined