/** 
 * 
 *  1.
    We have used the setTimeout function recursively to run our slideshow. 
    Javascript provides a setInterval(function() {console.log("Hi");}, 3000), 
    which executes the callback function every n seconds. In the example shown, n is 3 seconds. 
    Can you change the slideshow example (as we did in the lectures) to make use of the 
    setInterval function instead of setTimeout?
 * 
 * 
 * 
 * 
 **/


/*2.
The DOM API offers many methods to create new DOM elements. 
In the browser console, type in document.body.innerHTML = "<input type="text">"; 
and see a textbox appear on the page. The API offers some other interesting methods like appendChild, 
insertBefore etc. Nowadays, we use a JS library(like JQuery etc.) to do the DOM manipulation because 
of incompatibility of the DOM API among the major browsers. 
Still, you may want to play around with some of the methods to get a feel.
*/

/* 3.
In the slideshow example that we did during the lectures, 
make changes to be able to add the fadeIn transition effect. 
That is, instead of the pictures changing suddenly, 
let them slowly faded on over a period of 1 second or so.
*/


/* 5.
This exercise uses the canvas tag provided in HTML5. Let me explain how a canvas is used. 
You can read more about it here (http://www.w3schools.com/html/html5_canvas.asp).
An HTML canvas is a rectangular area on a page, which is just a container for graphics. 
E.g <canvas id="myCanvas" width="900" height="506">. To be able to draw or color on the canvas, 
we need what is called as a context object, 
like this: document.getElementById("myCanvas").getContext("2d");, 
which is a 2D context object and this is what you will use for this exercise. 
This context object provides us with all the methods for drawing on the canvas
ctx.fillStyle = "#FF0000"; can be used to choose the color for filling up the shapes in the canvas, 
or ctx.fillRect(0,0,200,100); can be used to fill a rectangular area within the canvas. 
Here the first 0 and 0 are the x and y coordinates where the top left corner of the rectangle starts drawing, 
while the next two arguments (200 and 100) represent the width and height of the rectangle. 
You may first want to try out the example on w3schools [link provided above] to become comfortable working 
with canvas.
Using the pxpainter_start.html file, you need to write javascript code so that when you click
on a the canvas a square is drawn. You should be able to change the size of this square as well as 
the color from the right side of the menu. Using these squares of different shapes and colors, 
you can draw a picture on the canvas. Feel free to extend the functionality to be able to draw more objects.

NOTE: We have made use of an external library javascript file for choosing the color. 
You need to write appropriate event handlers so that the set buttons set the size/color 
of the square appropriately.Good luck with this fun project.

*/






