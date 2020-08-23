lgnu = JSON.parse(sessionStorage.getItem("lgnu"));
lgnp = JSON.parse(sessionStorage.getItem("lgnp"));

console.log(lgnu)
console.log(lgnp)


if (lgnu) {


    let array = []

    function Submit() {
        var names = document.getElementById("num1").value
        var email = document.getElementById("num2").value
        var admin = document.getElementById("role").value
        var genderarray = document.getElementsByName("genderr")
        var gender = ''
        for (var i = 0; i < genderarray.length; i++) {
            if (genderarray[i].checked) {
                gender = genderarray[i].value
            }
        }

        if (names.length != 0 && email.length != 0) {


            array.length = 0
            array.push(names)
            array.push(email)
            array.push(admin)
            array.push(gender)
            localStorage.setItem(email, JSON.stringify(array))
            alert("Submitted")

        } else {
            alert("Fill the Details")
        }
    }

    function home() {
        window.location.href = 'homesample.html'
    }

} else {
    window.location.href = 'login.html'
}