var xyz = 4;
undefined

window.xyz;
4

function test() {
    var abc = 6;
}
undefined

test();
undefined

window.abc;
undefined

function test() {
    var abc = 6;
}
undefined

test();
undefined

window.abc;
undefined

function Circle(r) {
    this.radius = r;
    this.area = function() { return Math.PI * this.radius * this.radius }
}
undefined

var c = new Circle(2);
undefined

var x = Circle(2);
undefined

window.radius;
2

window.area;
ƒ () { return Math.PI * this.radius * this.radius }