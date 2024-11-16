window.onload = function () {
    document.forms[0].reset(); // Reset the first form on the page
};
window.onload = checkPaymentForm;

function checkPaymentForm() {
    document.forms[0].onsubmit = function () {
        if (this.checkValidity()) {
            window.location.href = 'payment_success.html';
            return false;
        }            
    }
}

// Retrieve selected items from localStorage
var pendingItems = JSON.parse(localStorage.getItem('selectedItems'));
var subtotal = 0;
const serveTaxRate = 0.06;
const processFeeRate = 0.025;
const mbrDiscRate = 0.3;

const membFreeItem = {
    imgSrc: '../images/menu/desserts/chocolate_brownie_cake.jpg',
    itemName: 'Chocolate Brownie Cake',
    itemQty: '1',
    itemPrice: 'FREE'
}

for (var i = 0; i < pendingItems.length; i++) {
    // Loop through pendingItems to access each item's properties
    // Create pending item container
    var pendingItem = document.createElement('div');
    pendingItem.classList.add('orderDetails');
    pendingItem.id = 'orderDetails_' + i;

    // Create index paragraph
    var pendIndexPara = document.createElement('p');
    pendIndexPara.classList.add('orderItmIndex');
    pendIndexPara.id = 'orderItmIndex_' + i;
    pendIndexPara.textContent = parseInt(i) + 1;
    pendingItem.appendChild(pendIndexPara);

    // Create image element
    var pendItmImg = document.createElement('img');
    pendItmImg.classList.add('orderItmImg');
    pendItmImg.id = 'orderItmImg_' + i;
    pendItmImg.src = pendingItems[i].imgSrc;
    pendItmImg.alt = pendingItems[i].itemName;
    pendingItem.appendChild(pendItmImg);

    // Create name paragraph
    var pendNamePara = document.createElement('p');
    pendNamePara.classList.add('orderItmName');
    pendNamePara.id = 'orderItmName_' + i;
    pendNamePara.textContent = pendingItems[i].itemName;
    if (pendingItems[i].itemAway) {
        pendNamePara.appendChild(document.createElement('br')); // Append the line break before the [TAKEAWAY] label
        var pendTakeawaySpan = document.createElement('span');
        pendTakeawaySpan.textContent = '[TAKEAWAY]';
        pendTakeawaySpan.classList.add('takeaway-label');
        pendNamePara.appendChild(pendTakeawaySpan);
    }
    pendingItem.appendChild(pendNamePara);

    // Create quantity paragraph
    var pendQtyPara = document.createElement('p');
    pendQtyPara.classList.add('orderItmQty');
    pendQtyPara.id = 'orderItmQty_' + i;
    pendQtyPara.textContent = pendingItems[i].itemQty;
    pendingItem.appendChild(pendQtyPara);

    // Create price paragraph
    var pendPricePara = document.createElement('p');
    pendPricePara.classList.add('orderItmPrice');
    pendPricePara.id = 'orderItmPrice_' + i;
    pendPricePara.textContent = 'RM ' + pendingItems[i].itemPrice;
    pendingItem.appendChild(pendPricePara);

    // Create amount paragraph
    var pendAmountPara = document.createElement('p');
    pendAmountPara.classList.add('orderItmAmount');
    pendAmountPara.id = 'orderItmAmount_' + i;
    pendAmountPara.textContent = 'RM ' + (parseFloat(pendingItems[i].itemPrice) * parseInt(pendingItems[i].itemQty)).toFixed(2);
    pendingItem.appendChild(pendAmountPara);

    // Append pending item to the order summary container
    document.getElementById('orderSummaryList').appendChild(pendingItem);

    subtotal += parseFloat(pendingItems[i].itemPrice) * parseInt(pendingItems[i].itemQty);
}

document.getElementById('subtotal').textContent = 'RM ' + subtotal.toFixed(2);
document.getElementById('servicetax').textContent = 'RM ' + (subtotal * serveTaxRate).toFixed(2);

if (storedUsername) {
    // Offer Free CHOCOLATE BROWNIE CAKE
    // Create pending item container
    var freeItem = document.createElement('div');
    freeItem.classList.add('orderDetails');
    freeItem.id = 'orderDetails_' + i;

    // Create index paragraph
    var freeIndexPara = document.createElement('p');
    freeIndexPara.classList.add('orderItmIndex');
    freeIndexPara.id = 'orderItmIndex_' + i;
    freeIndexPara.textContent = parseInt(i) + 1;
    freeItem.appendChild(freeIndexPara);

    // Create image element
    var freeItmImg = document.createElement('img');
    freeItmImg.classList.add('orderItmImg');
    freeItmImg.id = 'orderItmImg_' + i;
    freeItmImg.src = membFreeItem.imgSrc;
    freeItmImg.alt = membFreeItem.itemName;
    freeItem.appendChild(freeItmImg);

    // Create name paragraph
    var freeNamePara = document.createElement('p');
    freeNamePara.classList.add('orderItmName');
    freeNamePara.id = 'orderItmName_' + i;
    freeNamePara.textContent = membFreeItem.itemName;
    freeItem.appendChild(freeNamePara);

    // Create quantity paragraph
    var freeQtyPara = document.createElement('p');
    freeQtyPara.classList.add('orderItmQty');
    freeQtyPara.id = 'orderItmQty_' + i;
    freeQtyPara.textContent = membFreeItem.itemQty;
    freeItem.appendChild(freeQtyPara);

    // Create price paragraph
    var freePricePara = document.createElement('p');
    freePricePara.classList.add('orderItmPrice');
    freePricePara.id = 'orderItmPrice_' + i;
    freePricePara.textContent = membFreeItem.itemPrice;
    freeItem.appendChild(freePricePara);

    // Create amount paragraph
    var freeAmountPara = document.createElement('p');
    freeAmountPara.classList.add('orderItmAmount');
    freeAmountPara.id = 'orderItmAmount_' + i;
    freeAmountPara.textContent = '-';
    freeItem.appendChild(freeAmountPara);

    document.getElementById('orderSummaryList').appendChild(freeItem);


    document.getElementById('processfee').textContent = '-';
    document.getElementById('memberdisc').textContent = 'RM ' + (subtotal * mbrDiscRate).toFixed(2);
    document.getElementById('grandtotal').textContent = 'RM ' +
        (subtotal + (subtotal * serveTaxRate) - (subtotal * mbrDiscRate)).toFixed(2);
} else {
    document.getElementById('processfee').textContent = 'RM ' + (subtotal * processFeeRate).toFixed(2);
    document.getElementById('memberdisc').textContent = '-';
    document.getElementById('grandtotal').textContent = 'RM ' +
        (subtotal + (subtotal * serveTaxRate) + (subtotal * processFeeRate)).toFixed(2);
}


function cancelOrder() {
    if (confirm('Are you sure to cancel order?') == 1) {
        window.location.href = 'index.html';
        return true;
    } else {
        return false;
    }
}


function cardPayment() {
    document.getElementById("paymentForm").reset();

    document.getElementById('payCardDetails').style.display = 'block';
    document.getElementById('payPaypalDetails').style.display = 'none';
    document.getElementById('paymentSubmit').style.display = 'flex';

    document.getElementById('cardNo').focus();
    document.getElementById('cardNo').setAttribute('required', '');
    document.getElementById('cardValidThru').setAttribute('required', '');
    document.getElementById('cardCVV').setAttribute('required', '');

    document.getElementById('paypalUsername').removeAttribute('required');
    document.getElementById('paypalPassword').removeAttribute('required');

    document.getElementById('payTypeCard').style.backgroundColor = '#f9be659d';
    document.getElementById('payTypeCard').style.color = '#000000';
    document.getElementById('payTypePaypal').style.backgroundColor = '#1f1f1f';
    document.getElementById('payTypePaypal').style.color = '#F9BF65';

    document.getElementById('creditCardChecked').innerHTML = '&nbsp;&nbsp;&#9745;';
    document.getElementById('paypalChecked').innerHTML = '&nbsp;&nbsp;&#9744;';
}

function paypalPayment() {
    document.getElementById("paymentForm").reset();

    document.getElementById('payCardDetails').style.display = 'none';
    document.getElementById('payPaypalDetails').style.display = 'block';
    document.getElementById('paymentSubmit').style.display = 'flex';

    document.getElementById('paypalUsername').focus();
    document.getElementById('cardNo').removeAttribute('required');
    document.getElementById('cardValidThru').removeAttribute('required');
    document.getElementById('cardCVV').removeAttribute('required');

    document.getElementById('paypalUsername').setAttribute('required', '');
    document.getElementById('paypalPassword').setAttribute('required', '');

    document.getElementById('payTypeCard').style.backgroundColor = '#1f1f1f';
    document.getElementById('payTypeCard').style.color = '#F9BF65';
    document.getElementById('payTypePaypal').style.backgroundColor = '#f9be659d';
    document.getElementById('payTypePaypal').style.color = '#000000';

    document.getElementById('creditCardChecked').innerHTML = '&nbsp;&nbsp;&#9744;';
    document.getElementById('paypalChecked').innerHTML = '&nbsp;&nbsp;&#9745;';
}


// PAYMENT DETAILS VALIDATION
function validateCardNo(cardNoInput) {
    var cardNo = cardNoInput.value.trim();
    if (cardNo.length !== 16 || !/\d{16}/.test(cardNo)) {
        cardNoInput.setCustomValidity('Please enter 16 digits of Card No.');
    } else {
        cardNoInput.setCustomValidity('');
    }
}

function validateValidThru(validThruInput) {
    var validThru = validThruInput.value.trim();
    if (validThru.length !== 4 || !/^(0[1-9]|1[0-2])[2][5-9]$/.test(validThru)) {
        validThruInput.setCustomValidity('Please enter Valid Thru in the format MMYY.');
    } else {
        validThruInput.setCustomValidity('');
    }
}

function validateCVV(cvvInput) {
    var cvv = cvvInput.value.trim();
    // test() : to test a string against a regular expression pattern (return true/false)
    if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
        cvvInput.setCustomValidity('Please enter a 3-digit CVV.');
    } else {
        cvvInput.setCustomValidity('');
    }
}

function validatePaypalUsername(paypalUsernameInput) {
    var paypalUsername = paypalUsernameInput.value;
    if ((storedUsername && (paypalUsername.length !== storedUsername.length || paypalUsername !== storedUsername))
        || (!storedUsername && paypalUsername !== 'guest')) {
        paypalUsernameInput.setCustomValidity('Invalid Username.');
    } else {
        paypalUsernameInput.setCustomValidity('');
    }
}

function validatePaypalPassword(paypalPasswordInput) {
    var paypalPassword = paypalPasswordInput.value;
    if ((storedPassword && (paypalPassword.length !== storedPassword.length || paypalPassword !== storedPassword))
        || (!storedPassword && paypalPassword !== '1111')) {
        paypalPasswordInput.setCustomValidity('Invalid Password.');
    } else {
        paypalPasswordInput.setCustomValidity('');
    }
}