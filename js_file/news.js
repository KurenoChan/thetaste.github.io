let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("event3-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Remove active class from all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active"); // Add active class to current slide
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
function scrollToEvent2() {
    scrollIntoEvents(document.getElementById("event2"));
}
function scrollToEvent3() {
    scrollIntoEvents(document.getElementById("event3"));
}
function scrollToEvent4() {
    scrollIntoEvents(document.getElementById("event4"));
}
function scrollToEvent5() {
    scrollIntoEvents(document.getElementById("event5"));
}
function scrollIntoEvents(event) {
    event.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
var newYear = new Date("1/1/2025");
var Today = new Date();
var thisYear = Today.getFullYear();
var thisMonth = Today.getMonth();
var thisday = Today.getDate();
var monthText = new Array("January", "February", "March", "April", "May", "June", "July", "Ausgust", "September", "October", "November", "December")

var countdown = (newYear - Today)/(1000*60*60*24);
var dayremain = Math.floor(countdown);

var countdownHour = (countdown - dayremain)*24;
var Houremain= Math.floor(countdownHour);

var countdownMin = (countdownHour - Houremain)*60;
var Minremain = Math.floor(countdownMin);

var countdownsec = (countdownMin - Minremain)*60;
var secremain = Math.floor(countdownsec);

var countdownMinisec = (countdownsec - secremain)*1000;
var Minisecremain = Math.floor(countdownMinisec);

function Calculation() {
    var newYear = new Date("7/1/2024");
    var Today = new Date();

    var countdown = (newYear - Today) / (1000 * 60 * 60 * 24);
    var dayremain = Math.floor(countdown);

    var countdownHour = (countdown - dayremain) * 24;
    var Houremain = Math.floor(countdownHour);

    var countdownMin = (countdownHour - Houremain) * 60;
    var Minremain = Math.floor(countdownMin);

    var countdownsec = (countdownMin - Minremain) * 60;
    var secremain = Math.floor(countdownsec);

    var countdownMinisec = (countdownsec - secremain) * 1000;
    var Minisecremain = Math.floor(countdownMinisec);

    document.getElementById("cdDay").innerText = dayremain;
    document.getElementById("cdHour").innerText = Houremain;
    document.getElementById("cdMin").innerText = Minremain;
    document.getElementById("cdSec").innerText = secremain;
}


function showYear() {
    document.write(newYear.getFullYear());
}
function showThismonth() {
    document.write(monthText[thisMonth] + " " + thisday + ", " + thisYear);
}
function showCDday() {
    document.write(dayremain);
}
function showCDHour() {
    document.write(Houremain);
}
function showCDmin() {
    document.write(Minremain);
}
function showCDsec() {
    document.write(secremain);
}
function showCDminisec() {
    document.write(Minisecremain);
}
function submitForm() {
    var nameInput = document.getElementById("big_eatername");
    var emailInput = document.getElementById("big_eateremail");
    var phoneInput = document.getElementById("big_eaterphone");

    if (nameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid) {
        document.getElementById("successMessage").style.display = "block";
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        setTimeout(function () { document.getElementById("successMessage").style.display = "none"; }, 3000);
    } else {
        alert("Please fill out all fields correctly.");
    }
}
function updateEventAvailability() {
    const currentDate = new Date();

    const currentDayOfWeek = currentDate.getDay();

    const eventAvailable = document.querySelector('.EventAvaible');

    if (currentDayOfWeek === 1 || currentDayOfWeek === 3 || currentDayOfWeek === 6) {
        eventAvailable.innerHTML = '<h1>Now available</h1>';
    } else {
        eventAvailable.innerHTML = '<h1>Not available now</h1>';
    }
}
window.onload = function() {
    updateEventAvailability();
};

function validateEaterTel(bigeater_TelInput) {
    var phoneInput = bigeater_TelInput.value.trim();
    if (!/^\+\d{1,3}\d{9,}$/.test(phoneInput)) {
        bigeater_TelInput.setCustomValidity('Please enter a valid phone number.');
    } else {
        bigeater_TelInput.setCustomValidity('');
        localStorage.setItem('eatertel', bigeater_TelInput.value);
    }
}


function validateEaterName(eaterNameInput) {
    var eaterName = eaterNameInput.value.trim();
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(eaterName)) {
        eaterNameInput.setCustomValidity('Please enter only alphabets with at most one space between characters.');
    } else {
        eaterNameInput.setCustomValidity('');
        localStorage.setItem('eatername', eaterNameInput.value);
    }
}