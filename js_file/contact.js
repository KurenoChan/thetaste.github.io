function submitForm() {
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var custTelInput = document.getElementById("custTel");
    var custNameInput = document.getElementById("custName");

    if (custNameInput.validity.valid && emailInput.validity.valid && custTelInput.validity.valid && messageInput.validity.valid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset();

        setTimeout(function () { document.getElementById("successMessage").style.display = "none"; }, 3000);
    } else {
        alert("Please fill out all fields correctly.");
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