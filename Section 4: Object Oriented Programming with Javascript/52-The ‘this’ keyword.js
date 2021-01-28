/**
 * 'this' Keyword
 * 
 * Global context
 * Function context
 *          -Simple function
 *          -Method of an Object
 *          -Constructor function
 * 
 * 
 **/

console.log(this);
Window  { window: Window, self: Window, document: document, name: "", location: Location,  … }
undefined

function test() {
    console.log(this);
}
undefined

test();
Window  { window: Window, self: Window, document: document, name: "", location: Location,  … }
undefined

function test() {
    "use strict";
    console.log(this);
}
undefined

test();
undefined
undefined

/////////////////////////////////////////////////////////////////////////////////////////////////

var aCircle = { radius: 3, area: function() { return Math.PI * this.radius * this.radius; } }
undefined

var aCircle = { area: function() { return Math.PI * this.radius * this.radius; } }
undefined

aCircle.area();
NaN

aCircle.radius = 3;
3

aCircle.area();
28.274333882308138

var aCircle = { radius: 3, area: function() { return Math.PI * this.radius * this.radius; }, f: test }
undefined

aCircle.f();
VM2018: 3 { radius: 3, area: ƒ, f: ƒ }
undefined