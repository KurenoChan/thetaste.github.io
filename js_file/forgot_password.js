const Email_for = document.getElementById('Foremail');
const user_for = document.getElementById('Forusername');
const resetForm = document.getElementById('reset_pass_part');
const resetPassForm = document.getElementById('resetpassForm');
const resetMessage_reset = document.getElementById('resetMessage');
const resetMessage_Email = document.getElementById('resetMessageEmail');
const resetPass = document.getElementById('newPassword');
const ComfirmPass = document.getElementById('confirmPassword');
const CountMesssage = document.getElementById('Message_count');


const users_for = JSON.parse(localStorage.getItem('users')) || [];

function checkemail() {
    const user_name = user_for.value;
    const user_email = Email_for.value;
    event.preventDefault();
    if (!user_name || !user_email) {
        resetMessage_Email.textContent = 'Please fill in all fields.';
        resetMessage_Email.style.color = 'red';
        return;
    }
    const matchedUser = users_for.find(user => user.username === user_name && user.userEmail === user_email);

    if (matchedUser) {
        // Match found, display the password reset form
        resetForm.style.display = 'block';
        resetPassForm.style.display = 'none';
        resetMessage_Email.style.display = 'none';
        resetMessage_reset.textContent = 'Your email matches.';
        resetMessage_reset.style.color = 'green';

    }else{
        resetMessage_Email.textContent = 'Not match';
        resetMessage_Email.style.color = 'red';
        user_for.value = '';
        Email_for.value = '';
        return;
    }
}
var count = 3; // Initial countdown value

function countdown() {
    document.getElementById("countdown").innerText = count;
    count--;

    if (count <= 0) {
        window.location.href = 'account.html'; // Redirect to account.html when countdown ends
    }
}

function startCountdown() {
    setInterval(countdown, 1000); 
}

function resetpassword() {
    event.preventDefault();
    const reset_Pass = resetPass.value;
    const Comfirm_Pass = ComfirmPass.value;
    const user_name = user_for.value;
    const user_email = Email_for.value;

    if (!reset_Pass || !Comfirm_Pass) {
        resetMessage_reset.textContent = 'Please fill in all fields.';
        resetMessage_reset.style.color = 'red';
        resetPass.value = '';
        ComfirmPass.value = '';
        return;
    }
    if (reset_Pass !== Comfirm_Pass) {
        resetMessage_reset.textContent = 'Password not matches.';
        resetMessage_reset.style.color = 'red';
        resetPass.value = '';
        ComfirmPass.value = '';
        return;
    }
    const matchedUserIndex = users_for.findIndex(user => user.username === user_name && user.userEmail === user_email);

    users_for[matchedUserIndex].password = reset_Pass;

    localStorage.setItem('users', JSON.stringify(users_for));

    resetMessage_reset.textContent = 'Password reset successfully.';
    resetMessage_reset.style.color = 'green';
    CountMesssage.style.display = 'block';
    resetPass.value = '';
    ComfirmPass.value = '';

    resetPass.disabled = true;
    ComfirmPass.disabled = true;
    startCountdown();
}

