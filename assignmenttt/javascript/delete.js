lgnu = JSON.parse(sessionStorage.getItem("lgnu"));
lgnp = JSON.parse(sessionStorage.getItem("lgnp"));

console.log(lgnu)
console.log(lgnp)


if (lgnu) {



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




    let array = []

    function Submit() {

        var txt;
        var r = confirm("Are you sure you want to delete this!!!");
        if (r == true) {
            txt = "Yes";
            var email = document.getElementById("num3").value
            var a = localStorage.length
            localStorage.removeItem(email)
            var b = localStorage.length
            if (a != b) {
                alert("Deleted")
                window.location.href = 'delete.html'

            } else {
                alert("Invalid Email")
            }
        } else {
            txt = "No";
        }



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