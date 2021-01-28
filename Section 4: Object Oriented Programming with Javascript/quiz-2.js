Question 1:
    Consider the following code:

    function Circle(r) {
        this.area = function() { return Math.PI * r * r }
    }
undefined

var x = Circle(2);
undefined

x.area();
output => method execution results in an console.error

Question 2:
    Consider the following code:

    function Circle(r) {
        this.area = function() { return Math.PI * r * r }
    }

What happens when the following statements are executed ?
    var x = Circle(2);
area();


Output => returns an area of about 12.57



Question 3:
    If we want to have a reverse method on the string object,
    e.g.
"xyz".reverse() returns the reversed string "zyx", then we can write the reverse

function as String.prototype.reverse = function() { //logic to reverse}

        => True

        Question 4:
            Similar to previous question.

        If we want to have a reverse method on the string object, e.g.
        "xyz".reverse() returns the reversed string "zyx", then we can write the reverse

        function as String.prototype.reverse = function() { //logic to reverse}

                How can we access the string to be reversed from inside the

                function ?

                => using the this keyword