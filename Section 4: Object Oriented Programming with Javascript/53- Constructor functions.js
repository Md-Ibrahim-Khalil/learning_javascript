function Circle(r) {}
undefined

var c = new Circle(2);
undefined

c
Circle  {}

function Circle(r) {
    this.radius = r;
}
undefined

var c = new Circle(2);
undefined

function Circle(r) {
    this.radius = r;
    this.area = function() { return Math.PI * this.radius * this.radius };

}
undefined

var c = new Circle(2);
undefined

c.area();
12.566370614359172

c["area"]();
12.566370614359172