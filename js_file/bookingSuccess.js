function generateBookingNo() {
    // Generate a random uppercase letter
    var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // ASCII for 'A' to 'Z'

    // Generate a random sequence of five digits
    var randomDigits = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

    // Concatenate the random letter and random digits
    var bookingNo = randomLetter + randomDigits;

    return bookingNo;
}

// Example usage:
var bookingNo = generateBookingNo();

document.getElementById('bookingID').innerText = bookingNo;
document.getElementById('bookingThank').innerText = 'Thank You ' + localStorage.getItem('bookname');
document.getElementById('guestNoData').innerText = localStorage.getItem('bookGuestCount');
document.getElementById('bookDateData').innerText = localStorage.getItem('bookDate');
document.getElementById('bookTimeData').innerText = localStorage.getItem('bookTime');
document.getElementById('requestData').innerText = localStorage.getItem('bookRequest');

function cancelBooking(){
    if(confirm('Are you sure to cancel your booking?') == 1){
        localStorage.removeItem('bookname');
        localStorage.removeItem('booktel');
        localStorage.removeItem('bookGuestCount');
        localStorage.removeItem('bookDate');
        localStorage.removeItem('bookTime');
        localStorage.removeItem('bookRequest');

        alert('Your booking has been cancelled.');
        window.location.href = 'index.html';
        return true;
    } else {
        return false;
    }
}

function checkBookingConfirm(){
    if(confirm('Are you sure to cancel your booking?') == 1){
        localStorage.removeItem('bookname');
        localStorage.removeItem('booktel');
        localStorage.removeItem('bookGuestCount');
        localStorage.removeItem('bookDate');
        localStorage.removeItem('bookTime');
        localStorage.removeItem('bookRequest');

        alert('Your booking has been cancelled.');
        return true;
    } else {
        return false;
    }
}