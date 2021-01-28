var pictures = ["http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Megachile_incerta_male_1.jpg/1024px-megachile_incerta_male_1.jpg"]
            function load(){
                alert("just like that");
            //    document.getElementById("image_canvas").getElementsByTagName("img")[0].src = pictures[0]
                  changePic(1);
            }

            function changePic(n) {
                document.getElementById("image_canvas").getElementsByTagName("img")[0].src = pictures[n % pictures.length];
                setTimeout( function() { changePic(n+1);}, 5000);
            }
            changePic(1);
            console.log(document.body);