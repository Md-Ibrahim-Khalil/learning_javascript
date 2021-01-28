var book_as_str = '';
undefined

var book_as_str = '{"title": "A tale of two cities","author": "Charles Dickens", "price": 29}';
undefined

var book = JSON.parse(book_as_str);
undefined

book; { title: "A tale of two cities", author: "Charles Dickens", price: 29 }

book.title;
"A tale of two cities"