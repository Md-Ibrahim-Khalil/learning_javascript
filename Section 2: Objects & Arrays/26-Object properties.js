var circle = {};
undefined

circle.radius = 4;
4

console.log(circle.radius);
4
undefined

var book = {};
undefined

book["title"] = "A tale of two cities";
"A tale of two cities"

console.log(book["title"]);
A tale of two cities
undefined

delete book.title;
true

book; {}

how to itreat over the property of an Object:

    var book = { title: "A tale of two cities", author: "Charles Dickens" };
undefined

for (var p in book) {
    console.log(p);
}
title
author
undefined


for (var p in book) {
    console.log(p + ":" + book[p]);
}
title: A tale of two cities
author: Charles Dickens
undefined

book.valueOf(); { title: "A tale of two cities", author: "Charles Dickens" }