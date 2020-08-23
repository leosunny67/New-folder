lgnu = JSON.parse(sessionStorage.getItem("lgnu"));
lgnp = JSON.parse(sessionStorage.getItem("lgnp"));

console.log(lgnu)
console.log(lgnp)


if (lgnu) {




    var x = document.referrer;

    if (x == "edit.html") {
        console.log(x);
    }

    jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
    /* console.log(jsarray) */



    /*  document.getElementById("num3").value = jsarray[0]; */






    var hst = document.getElementById("highscores");
    var a


    var retrievedScores = []
    for (var i = 0; i < localStorage.length; i++) {
        a = JSON.parse(localStorage.getItem(localStorage.key(i)))
        retrievedScores.push(a)



    }


    /* console.log(retrievedScores) */
    var gmailss = []
    var id

    for (var i = 0; i < localStorage.length; i++) {
        hst.innerHTML += ("<tr><td>" + "" + retrievedScores[i][0] + "</td><td>" + retrievedScores[i][1] + "</td><td>" + retrievedScores[i][2] + "</td><td>" + retrievedScores[i][3] + "</td><td>" + '<input type="radio" name="languages"  onclick="select()" >' + '<button type="button" style="background-color:#FF5733; margin left:10px" onclick="select()">Select</button>' + "</td></tr>");

        gmailss.push(retrievedScores[i][1])


    }




    /* var l = document.getElementById("ide")
    var text = '' */
    /* l.innerHTML = localStorage.getItem("leoo") */

    /* for (var i = 0; i < localStorage.length; i++) {
        text += "<div class = 'col-md-12 text-center' ><p>" + localStorage.getItem(localStorage.key(i)) + ' ' + '<button type="button" style="background-color:#FF5733" onclick="edit()">Edit</button>' + "</div>"

    }

    l.innerHTML = text */


    let array = []

    function Edit() {
        var names = document.getElementById("num2").value
        var email = document.getElementById("num3").value

        var texttt = localStorage.getItem(email)
        var obj = JSON.parse(texttt)

        /* console.log(obj) */
        if (texttt) {


            if (names.length != email.length) {

                obj[0] = names
                console.log(localStorage.setItem(email, JSON.stringify(obj)))
                alert("Saved")
                window.location.href = 'edit.html'
            } else {
                alert("Fill the Details")
            }

        } else {
            alert("Invalid Email")
        }
        /* var l = document.getElementById("ide")
        var text = '' */
        /* l.innerHTML = localStorage.getItem("leoo") */

        /* for (var i = 0; i < localStorage.length; i++) {
            text += "<div class = 'col-md-12 text-center' ><p>" + localStorage.getItem(localStorage.key(i)) + ' ' + '<button type="button" style="background-color:#FF5733" onclick="edit()">Edit</button>' + "</div>"

        }

        l.innerHTML = text */

    }

    function select() {
        var language = document.getElementsByName("languages")
        console.log(language)
        for (var i = 0; i < language.length; i++) {
            if (language[i].checked) {
                console.log("dadsdas")
                document.getElementById("num3").value = gmailss[i]
            }
        }

    }


    function home() {
        window.location.href = 'homesample.html'
    }

} else {
    window.location.href = 'login.html'
}