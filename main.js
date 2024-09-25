let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function login() {
    if (emailInput.value === "" && passwordInput.value === "") {
        window.alert("Please enter an email address and password");
    }
    else {
        window.location = "cart/index.html";
    }
}