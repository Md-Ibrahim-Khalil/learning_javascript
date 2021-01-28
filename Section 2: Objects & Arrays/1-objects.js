var car = { color: "red" };
undefined

var car = { "color": "red" };
undefined

var car = { color: "red", model: "gallardo" };
undefined

var car = {};
undefined

car; {}

var car = new Object();
undefined

car; {}
__proto__: Object

car.color = "red";
"red"

car.model = "gallardo";
"gallardo"

car;

{ color: "red", model: "gallardo" }


var x = Object.create(null);