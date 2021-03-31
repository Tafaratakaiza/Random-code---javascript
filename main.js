let logIn = document.getElementById("Login");
let reGister = document.getElementById("Register");
let btn = document.getElementById("btn");

function Register() {
    logIn.style.right = "450px";
    logIn.style.transition = ".7s";
    reGister.style.left = "0px";
    reGister.style.transition = ".7s";
    btn.style.left = "63px"
    btn.style.transition = ".7s";

}

function Login() {
    logIn.style.right = "0px";
    reGister.style.left = "450px";
    btn.style.left = "-8px";
    btn.style.transition = ".7s";

}