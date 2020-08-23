function validate() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var flag = 0;
    var lgn = []


    $.ajax({

        url: 'http://www.json-generator.com/api/json/get/cdXWUOxUgO?indent=2',
        type: 'get',
        datatype: 'json',

        success: function(response) {

            /* console.log(typeof(response.authentication[0].username)) */
            /* if (response.authentication[1] == username1) {
                if (response.authentication[1] == password1) {
                    flag = 1
                    alert('login successfulll')
                    window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
                }
            } */
            for (var i = 0; i < response.authentication.length; i++) {
                if (response.authentication[i].username == username) {
                    if (response.authentication[i].password == password) {
                        flag = 1
                        sessionStorage.setItem("lgnu", JSON.stringify(username));
                        sessionStorage.setItem("lgnp", JSON.stringify(password));

                        alert('login successfulll')
                        window.location.href = 'homesample.html'

                    }

                }
            }
            if (flag == 0) {
                alert('login failed')
            }
        },
        error: function(error) {
            console.table(error);
        },

        always: function() {}


    })


    /* if (username == 'leo' && password == 'sunny') {
        alert('login successfulll')
        window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
    } else {
        alert('login failed')
    }

    if (username == 'gautham' && password == '123') {
        alert('login successfulll')
        window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
    } else {
        alert('login failed')
    }

    if (username == 'jithin' && password == '456') {
        alert('login successfulll')
        window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
    } else {
        alert('login failed')
    } */
    /* var ch = 3;
    switch (username) {
        case 'leo':
            if (username == 'leo' && password == 'sunny') {
                alert('login successfulll')
                window.location.href = 'http://www.hyperlinkcode.com/button-links.php'

            } else {
                alert('login failed');

            }
            break;
        case 'gautham':
            if (username == 'gautham' && password == '123') {
                alert('login successfulll')
                window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
            } else {
                alert('login failed');

            }
            break;

        case 'jithin':
            if (username == 'jithin' && password == '456') {
                alert('login successfulll')
                window.location.href = 'http://www.hyperlinkcode.com/button-links.php'
            } else {
                alert('login failed');
            }
            break;

        default:
            alert('login failed') */
    /* }

    } */



    /* $.ajax({

        url: 'http://www.json-generator.com/api/json/get/cgxfXXevOq?indent=2',
        type: 'get',
        datatype: 'json',

        success: function(response) {
            console.log(response.length);
            for (var i = 0; i < response.length; i++) {
                var newmeal = "<div class = 'col-md-4 text-center' ><p>" + response.meals[i].strMeal + "</p><img src=" + response.meals[i].strMealThumb + "></div>";

                $("#meals").append(newmeal)
            } 
        },
        error: function(error) {
            console.table(error);
        },

        always: function() {}


    }) */
}

function check() {
    var x = document.getElementById("password")

    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}