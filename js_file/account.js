function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}


// login
const form = document.getElementById('loginForm');
const txt_login = document.getElementById('User_login');
const PW_login = document.getElementById('PWlogin');
const btn_login = document.getElementById('btn_login');
const out1 = document.getElementById('Username');
//register
const txt_user = document.getElementById('User');
const PW_register = document.getElementById('PW_register');
const email_register = document.getElementById('UserEmail');
const btn_register = document.getElementById('btn_register');
const users = JSON.parse(localStorage.getItem('users')) || [];
localStorage.setItem('users', JSON.stringify(users));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userNamevalue = txt_login.value;
    const userPassvalue = PW_login.value;
    const userEmailvalue = email_register.value;

    localStorage.setItem('Username', userNamevalue);
    localStorage.setItem('UserEmail', userEmailvalue);
    localStorage.setItem('Password', userPassvalue);

    window.location.href = "index.html";
})
function fun1(value) {

    out1.innerText = txt_login.value;

    const username = txt_login.value;

    localStorage.setItem('Username', username);

}

function getUsersArray() {
    return JSON.parse(localStorage.getItem('users')) || [];
}
btn_login.addEventListener('click', () => { fun1(txt_login.value) })

function registerUser() {
    const username = txt_user.value;
    const password = PW_register.value;
    const userEmail = email_register.value;
    const confirmPassword = document.getElementById("CONFRMPW_register").value;

    // Get existing users array
    const users = getUsersArray();

    // Check if any of the fields are empty
    if (!username || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }
    if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        return;
    }

    // Check if userEmail is empty or not valid
    if (!validateEmail(document.getElementById("UserEmail").value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        return;
    }
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter matching passwords.");
        return;
    }

    // Add new user to users array
    users.push({ username, password, userEmail });

    localStorage.setItem('users', JSON.stringify(users));

    txt_user.value = "";
    PW_register.value = "";
    email_register.value = "";
    document.getElementById("CONFRMPW_register").value = "";

    alert("Registration successful! Proceeding to Login...");
    login();
}
btn_register.addEventListener('click', registerUser);
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

btn_register.addEventListener('click', registerUser);

function loginUser() {
    const username = txt_login.value;
    const password = PW_login.value;

    const users = getUsersArray();

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password. Please try again.");
        localStorage.removeItem('Username');
        localStorage.removeItem('Password');
        PW_login.value = "";
        txt_login.value = "";
    }
}
btn_login.addEventListener('click', loginUser);

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
    x.style.left = "500px";
    y.style.right = "-500px";
    a.className += " white-btn";
    b.className = "account_button";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
function register() {
    x.style.left = "-500px";
    y.style.right = "500px";
    a.className = "account_button";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}