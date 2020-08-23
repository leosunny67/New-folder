lgnu = JSON.parse(sessionStorage.getItem("lgnu"));
lgnp = JSON.parse(sessionStorage.getItem("lgnp"));

console.log(lgnu)
console.log(lgnp)


if (lgnu) {



    var hello = []
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
        hst.innerHTML += ("<tr><td>" + "" + retrievedScores[i][0] + "</td><td>" + retrievedScores[i][1] + "</td><td>" + retrievedScores[i][2] + "</td><td>" + retrievedScores[i][3] + "</td></tr>");

        gmailss.push(retrievedScores[i][1])


    }



    console.log(gmailss)


    sessionStorage.setItem("jsArray", JSON.stringify(gmailss));





    /* var l = document.getElementById("ide")
    var text = ''
        /* l.innerHTML = localStorage.getItem("leoo") */

    /* for (var i = 0; i < localStorage.length; i++) {
        text += "<div class = 'col-md-12 text-center' ><p>" + localStorage.getItem(localStorage.key(i)) + ' ' + '<button type="button" style="background-color:#FF5733" onclick="edit()">Edit</button>' + "</div>"

    } */

    /* l.innerHTML = text */


    /* var results = [];
    var searchField = "username";
    var searchVal = "leo@sa.com";
    for (var i = 0; i < obj.list.length; i++) {
        if (obj.list[i][searchField] == searchVal) {
            results.push(obj.list[i]);
        }
    } */

    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("highscores");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }






    function signout() {
        window.location.href = 'login.html'
    }


    function addmember() {
        window.location.href = 'adduser.html'
    }

    function edit() {


        /* onsole.log(h)
                sessionStorage.setItem("hello", h); */
        window.location.href = 'edit.html'
    }


    function del() {
        window.location.href = 'delete.html'
    }


    function editall() {
        window.location.href = 'edit.html'
    }

} else {
    window.location.href = 'login.html'
}