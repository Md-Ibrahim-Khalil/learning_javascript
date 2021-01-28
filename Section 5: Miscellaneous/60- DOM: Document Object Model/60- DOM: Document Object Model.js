/**  
 * DOM
 * Document Object Model
 * There are about 12 different types of nodes in a dom 
 *  
 * 
 * 
 * **/



document
document.documentElement
document.head
document.body


document.getElementsById("id");

<img id="myImg" src="logo.gif" ></img>
document.getElementById("myImg").src = 'new_logo.gif';

<img id="myImg" src="logo.gif" cust-attr="some value"></img>

document.getElementById("myImg").getAttribute("cust-attr");

childNodes

<span id="headerImgs">
    <img src="home.gif">
    <img src="about.gif">
    <img src="contact.gif">
</span>

document.getElementsById("headerImgs").
childNodes[1].src = "about_new.gif";

document.getElementsById("headerImgs").firstChild
document.getElementsById("headerImgs").lastChild

<span id="headerImgs">
    <img src="home.gif">
    <img id="abt" src="about.gif">
    <img src="contact.gif">
</span>

document.getElementsById("abt").previousSibling
document.getElementsById("abt").nextSibling


document.getElementsByTagName
document.getElementsByTagName("img");


<html>
    <head>
        <title>My Title</title>
    </head>
    <body>
        <span id="headerImgs">
            <img src="home.gif">
            <img src="about.gif">
            <img src="contact.gif">
        </span>
        <img src="logo.gif">
    </body>
</html>

document.getElementsByName
document.getElementsByName("email");

<html>
    <head>
        <title>My Title</title>
    </head>
    <body>
        <span name="email"></span>
        <form>
            First Name:<input type="text" name="first_name"><br>
            Last Name:<input type="text" name="last_name"><br>
            Email:<input type="email" name="email"><br>
            <input type="submit" value="submit">
        </form>
    </body>
</html>

Quiz:

Question 1:
Given the following html snippet -

<body>
<img id="img1" src="http://gambarmesin.com/wp-content/uploads/2014/04/apple-laptop-png.png">
<img src="http://inwallspeakers1.com/wp-content/uploads/2014/03/apple-laptop-png.png">
<img src="http://apfeltech.net/wp-content/uploads/2012/09/imac_transparent.png">
</body>

If we want to change the second image, which of the following is the right way to do it

document.getElementsByTagName("img")[1].src = "xyz.png"