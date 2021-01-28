function Shape() {
    this.area = function() { return "You need to implement this!" }
}
undefined

function Square(length) {
    this.length = length;
    this.area = function() { return this.length * this.length; }
}
undefined

function Ractangle(height, width) {
    this.height = height;
    this.width = width;
}
undefined

Square.prototype = new Shape();
Shape  { area: ƒ }

Ractangle.prototype = new Shape();
Shape  { area: ƒ }

new Square(2).area();
4

new Ractangle(4, 6).area();
"You need to implement this!"

function Ractangle(height, width) {
    this.height = height;
    this.width = width;
    this.area = function() { return this.height * this.width; }
}
undefined

new Ractangle(4, 6).area();
24