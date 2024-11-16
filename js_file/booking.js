window.onload = document.getElementById('custName').focus();
window.onload = checkBookForm;

function checkBookForm() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) {
            window.location.href = 'booking_success.html';
            return false;
        }            
    }
}


// Validate Booking Name
function validateBookName(bookNameInput) {
    var bookName = bookNameInput.value.trim();
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(bookName)) {
        bookNameInput.setCustomValidity('Please enter only alphabets with at most one space between characters.');
    } else {
        bookNameInput.setCustomValidity('');
        localStorage.setItem('bookname', bookNameInput.value);
    }
}


// Validate Booking Tele no.
function validateBookTel(bookTelInput) {
    var bookTel = bookTelInput.value.trim();
    if (!/^\+\d{1,3}\d{9,}$/.test(bookTel)) {
        bookTelInput.setCustomValidity('Please enter a valid phone number.');
    } else {
        bookTelInput.setCustomValidity('');
        localStorage.setItem('booktel', bookTelInput.value);
    }
}

function readGuestCount(guestCountInput){
    localStorage.setItem('bookGuestCount', guestCountInput.value);
}

// Validate Booking Date (Today or Future)
function validateBookDate(bookDateInput) {
    // Get the selected date
    var selectedDate = new Date(bookDateInput.value);

    // Get today's date
    var Today = new Date();

    if (selectedDate.getFullYear() < Today.getFullYear() || selectedDate.getMonth() < Today.getMonth() || selectedDate.getDate() < Today.getDate()) {
        bookDateInput.setCustomValidity('Please select a date that is today or in the future.');
    } else {
        bookDateInput.setCustomValidity('');
        localStorage.setItem('bookDate', bookDateInput.value);
    }
}

// Validate Booking Date (Today or Future)
function validateBookTime(bookDateInput, bookTimeInput) {
    // Get the selected date
    var dateInput = new Date(bookDateInput.value);

    // Get today's date
    var TodayDate = new Date();

    // Validate if the selected date is valid
    if (dateInput.getFullYear() < TodayDate.getFullYear() || dateInput.getMonth() < TodayDate.getMonth() || dateInput.getDate() < TodayDate.getDate()) {
        return false;
    } else {
        // Get the selected option
        var selectedTime = bookTimeInput.options[bookTimeInput.selectedIndex];

        // Get the hour and minute from the selected option's data attributes
        var selectedHour = parseInt(selectedTime.dataset.hour);
        var selectedMinute = parseInt(selectedTime.dataset.min);

        // Check if selected Today, if yes, check on current time
        if (dateInput.getFullYear() === TodayDate.getFullYear() && dateInput.getMonth() === TodayDate.getMonth() && dateInput.getDate() === TodayDate.getDate()) {
            var currentTime = new Date();

            if (selectedHour < currentTime.getHours()) {
                bookTimeInput.setCustomValidity('Please select a time that is in the future.');

                return false;
            } else if (selectedHour === currentTime.getHours() && selectedMinute < currentTime.getMinutes()) {
                bookTimeInput.setCustomValidity('Please select a time that is in the future.');
            } else {
                bookTimeInput.setCustomValidity('');
                localStorage.setItem('bookTime', bookTimeInput.value);
            }
        } else {
            bookTimeInput.setCustomValidity('');
            localStorage.setItem('bookTime', bookTimeInput.value);
        }

    }
}

function readRequest(request){
    localStorage.setItem('bookRequest', request.value);
}
