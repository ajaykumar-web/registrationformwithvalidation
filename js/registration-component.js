let validateform = () => {
    let user = document.getElementById("username").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (user === '') {
        document.getElementById("usererror").innerHTML = "** Please insert username.";
        return false;
    }
    else if (user.length <= 3 || user.length >= 8) {
        document.getElementById("usererror").innerHTML = "** Username should be between 3 and 8 characters.";
        return false;
    }
    else if (!isNaN(user)) {
        document.getElementById("usererror").innerHTML = "** Please insert characters only.";
        return false;
    }
    if (mail == '') {
        document.getElementById("emailerror").innerHTML = "** Please insert email.";
        return false;
    }
    if (phone === '') {
        document.getElementById("phoneerror").innerHTML = "** Please insert phone number.";
        return false;
    }
    else if (phone.length != 10) {
        document.getElementById("phoneerror").innerHTML = "** Please insert valid phone number.";
        return false;
    }
    else if (isNaN(phone)) {
        document.getElementById("usererror").innerHTML = "** Please insert numbers only.";
        return false;
    }
    if (password === '') {
        document.getElementById("passworderror").innerHTML = "** Please insert your password.";
        return false;
    }
    else if (password.length <= 8 || password.length >= 18) {
        document.getElementById("passworderror").innerHTML = "** Password should be between 8 and 18 characters";
        return false;
    }
    if (confirmpassword === '') {
        document.getElementById("confirmpassworderror").innerHTML = "** Please confirm your password.";
        return false;
    }

}