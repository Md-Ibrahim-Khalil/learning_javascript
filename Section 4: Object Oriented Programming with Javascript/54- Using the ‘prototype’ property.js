function Circle(r) {
    this.radius = r;
    this.area = function() { return Math.PI * this.radius * this.radius };

}
undefined

var c = new Circle(2);
undefined

Circle.prototype.perimeter = function() { return Math.PI * this.radius * this.radius };
ƒ() { return Math.PI * this.radius * this.radius }
var c1 = new Circle(3);
undefined

c1.perimeter();
28.274333882308138

c.perimeter();
12.566370614359172