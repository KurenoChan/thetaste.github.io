// Play Hover Sound / Click Sound Effects
const hoverSound = new Audio(); // Hover Sound Effect
const clickSound = new Audio(); // Click Sound Effect

hoverSound.src = "../audios/soundEffects/hover.mp3"; 
clickSound.src = "../audios/soundEffects/click.mp3";

// Background Music
var musicPlayer = document.getElementById('musicPlayer');
const sources = document.getElementsByTagName('source');
let currentSourceIndex = 0;

musicPlayer.addEventListener('ended', function () {
    currentSourceIndex = (currentSourceIndex + 1) % sources.length;
    musicPlayer.src = sources[currentSourceIndex].src;
    musicPlayer.play();
});

const storedUsername = localStorage.getItem('Username');
const storedPassword = localStorage.getItem('Password');

document.getElementById('Username').textContent = storedUsername;

if (document.getElementById('iconLink').style.display == 'none') {
    document.getElementById('txtLink').style.width = '80%';

} else if (document.getElementById('cart').style.display == 'none') {
    document.getElementById('txtLink').style.width = '65%';
}

function updateUsername() {
    const usernameElement = document.getElementById('Username');
    const loginLogoutLink = document.getElementById('loginLogoutLink');
    if (storedUsername) {
        // If the user is logged in, display "User: <username>"
        usernameElement.textContent = storedUsername;
        // Display "Logout" and set href to logout page
        loginLogoutLink.textContent = 'Log Out';
        loginLogoutLink.href = 'account.html'; // Set to the actual logout URL
    } else {
        // If the user is not logged in, display "User: guest"
        usernameElement.style.display = 'none';
        // Display "Login" and set href to login page
        loginLogoutLink.textContent = 'Login';
        loginLogoutLink.style.borderRadius = '5px 5px 0 0';
        loginLogoutLink.href = 'account.html'; // Set to the actual login URL
    }
} updateUsername();

// Function to handle logout
function logout() {
    // Clear the username from localStorage
    localStorage.removeItem('Username');
    localStorage.removeItem('Password');
    // Clear the username display
    updateUsername();
}

// Show the section content on scroll
window.addEventListener('scroll', reveal);
function reveal() {
    // Get all elements with the class 'reveal'
    var reveals = document.querySelectorAll('.reveal');

    // Loop through each element with the class 'reveal'
    for (var i = 0; i < reveals.length; i++) {
        // Get the height of the viewport
        var windowHeight = window.innerHeight;

        // Get the distance from the top of the element to the top of the viewport
        var revealTop = reveals[i].getBoundingClientRect().top;

        // Set a reveal point (150 pixels in this case) from the bottom of the viewport
        var revealPoint = 100;

        // Check if the element is within the reveal point from the bottom of the viewport
        if (revealTop < windowHeight - revealPoint) {
            // If the element is within the reveal point, add the 'active' class
            reveals[i].classList.add('revealActive');
        }
        else {
            // If the element is outside the reveal point, remove the 'active' class
            reveals[i].classList.remove('revealActive');
        }
    }
}

window.addEventListener('scroll', typeText);
function typeText() {
    var typeTexts = document.querySelectorAll('.typeText');

    // Loop through each element with the class 'typeText'
    for (var j = 0; j < typeTexts.length; j++) {
        // Get the height of the viewport
        var windowHeight = window.innerHeight;

        // Get the distance from the top of the element to the top of the viewport
        var typeTop = typeTexts[j].getBoundingClientRect().top;

        // Set a typeText point (150 pixels in this case) from the bottom of the viewport
        var typePoint = 100;

        // Check if the element is within the typeText point from the bottom of the viewport
        if (typeTop < windowHeight - typePoint) {
            // If the element is within the typeText point, add the 'active' class
            typeTexts[j].classList.add('typeActive');
        }
        else {
            // If the element is outside the typeText point, remove the 'active' class
            typeTexts[j].classList.remove('typeActive');
        }
    }
}