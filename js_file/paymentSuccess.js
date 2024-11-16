// Retrieve Order Date & Time
var orderDate = new Date();

var orderDay = (orderDate.getDate()).toString().padStart(2, '0');
var orderMonth = (orderDate.getMonth() + 1).toString().padStart(2, '0');
var orderYear = (orderDate.getFullYear()).toString().padStart(2, '0');

var orderHours = (orderDate.getHours() % 12).toString().padStart(2, '0');
var orderMinutes = orderDate.getMinutes().toString().padStart(2, '0');
var orderSeconds = orderDate.getSeconds().toString().padStart(2, '0');

if (orderDate.getHours() < 12) {
    var orderAMPM = 'AM';
} else {
    var orderAMPM = 'PM';
}

// Generate Receipt No (0000 - 9999)
// Convert the number to a string and pad it with leading zeros
var receiptSerialNo = Math.floor(Math.random() * 10000).toString().padStart(4, '0');


document.getElementById('paySuccessReceiptNo').innerHTML = 
    'LM-' + (orderYear % 100) + orderMonth + orderDay + 
    (orderDate.getHours()).toString().padStart(2, '0') + orderMinutes + orderSeconds + '-' + receiptSerialNo;

    // Display Order DateTime
document.getElementById('paySuccessDateTime').innerHTML =
    orderDay + '/' + orderMonth + '/' + orderYear + '&nbsp;&nbsp;' +
    orderHours + ':' + orderMinutes + ':' + orderSeconds + '&nbsp;' + orderAMPM;


// Retrieve selected items from localStorage
var purchasedItems = JSON.parse(localStorage.getItem('selectedItems'));
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

for (var i = 0; i < purchasedItems.length; i++) {
    // Loop through purchasedItems to access each item's properties
    // Create purchase item container
    var purchaseItem = document.createElement('div');
    purchaseItem.classList.add('purchaseDetails');
    purchaseItem.id = 'purchaseDetails_' + i;

    // Create index paragraph
    var purchaseIndexPara = document.createElement('p');
    purchaseIndexPara.classList.add('purchaseItmIndex');
    purchaseIndexPara.id = 'purchaseItmIndex_' + i;
    purchaseIndexPara.textContent = parseInt(i) + 1;
    purchaseItem.appendChild(purchaseIndexPara);

    // Create image element
    var purchaseItmImg = document.createElement('img');
    purchaseItmImg.classList.add('purchaseItmImg');
    purchaseItmImg.id = 'purchaseItmImg_' + i;
    purchaseItmImg.src = purchasedItems[i].imgSrc;
    purchaseItmImg.alt = purchasedItems[i].itemName;
    purchaseItem.appendChild(purchaseItmImg);

    // Create name paragraph
    var purchaseNamePara = document.createElement('p');
    purchaseNamePara.classList.add('purchaseItmName');
    purchaseNamePara.id = 'purchaseItmName_' + i;
    purchaseNamePara.textContent = purchasedItems[i].itemName;
    if (purchasedItems[i].itemAway) {
        purchaseNamePara.appendChild(document.createElement('br')); // Append the line break before the [TAKEAWAY] label
        var purchaseTakeawaySpan = document.createElement('span');
        purchaseTakeawaySpan.textContent = '[TAKEAWAY]';
        purchaseTakeawaySpan.style.color = '#ffffff';
        purchaseTakeawaySpan.classList.add('takeaway-label');
        purchaseNamePara.appendChild(purchaseTakeawaySpan);
    }
    purchaseItem.appendChild(purchaseNamePara);

    // Create quantity paragraph
    var purchaseQtyPara = document.createElement('p');
    purchaseQtyPara.classList.add('purchaseItmQty');
    purchaseQtyPara.id = 'purchaseItmQty_' + i;
    purchaseQtyPara.textContent = purchasedItems[i].itemQty;
    purchaseItem.appendChild(purchaseQtyPara);

    // Create price paragraph
    var purchasePricePara = document.createElement('p');
    purchasePricePara.classList.add('purchaseItmPrice');
    purchasePricePara.id = 'purchaseItmPrice_' + i;
    purchasePricePara.textContent = 'RM ' + purchasedItems[i].itemPrice;
    purchaseItem.appendChild(purchasePricePara);

    // Create amount paragraph
    var purchaseAmountPara = document.createElement('p');
    purchaseAmountPara.classList.add('purchaseItmAmount');
    purchaseAmountPara.id = 'purchaseItmAmount_' + i;
    purchaseAmountPara.textContent = 'RM ' + (parseFloat(purchasedItems[i].itemPrice) * parseInt(purchasedItems[i].itemQty)).toFixed(2);
    purchaseItem.appendChild(purchaseAmountPara);

    // Append purchase item to the order summary container
    document.getElementById('purchaseSummaryList').appendChild(purchaseItem);

    subtotal += parseFloat(purchasedItems[i].itemPrice) * parseInt(purchasedItems[i].itemQty);
}

document.getElementById('subtotal').textContent = 'RM ' + subtotal.toFixed(2);
document.getElementById('servicetax').textContent = 'RM ' + (subtotal * serveTaxRate).toFixed(2);

if (storedUsername) {
    // Offer Free CHOCOLATE BROWNIE CAKE
    // Create pending item container
    var freeItem = document.createElement('div');
    freeItem.classList.add('purchaseDetails');
    freeItem.id = 'purchaseDetails_' + i;

    // Create index paragraph
    var freeIndexPara = document.createElement('p');
    freeIndexPara.classList.add('purchaseItmIndex');
    freeIndexPara.id = 'purchaseItmIndex_' + i;
    freeIndexPara.textContent = parseInt(i) + 1;
    freeItem.appendChild(freeIndexPara);

    // Create image element
    var freeItmImg = document.createElement('img');
    freeItmImg.classList.add('purchaseItmImg');
    freeItmImg.id = 'purchaseItmImg_' + i;
    freeItmImg.src = membFreeItem.imgSrc;
    freeItmImg.alt = membFreeItem.itemName;
    freeItem.appendChild(freeItmImg);

    // Create name paragraph
    var freeNamePara = document.createElement('p');
    freeNamePara.classList.add('purchaseItmName');
    freeNamePara.id = 'purchaseItmName_' + i;
    freeNamePara.textContent = membFreeItem.itemName;
    freeItem.appendChild(freeNamePara);

    // Create quantity paragraph
    var freeQtyPara = document.createElement('p');
    freeQtyPara.classList.add('purchaseItmQty');
    freeQtyPara.id = 'purchaseItmQty_' + i;
    freeQtyPara.textContent = membFreeItem.itemQty;
    freeItem.appendChild(freeQtyPara);

    // Create price paragraph
    var freePricePara = document.createElement('p');
    freePricePara.classList.add('purchaseItmPrice');
    freePricePara.id = 'purchaseItmPrice_' + i;
    freePricePara.textContent = membFreeItem.itemPrice;
    freeItem.appendChild(freePricePara);

    // Create amount paragraph
    var freeAmountPara = document.createElement('p');
    freeAmountPara.classList.add('purchaseItmAmount');
    freeAmountPara.id = 'purchaseItmAmount_' + i;
    freeAmountPara.textContent = '-';
    freeItem.appendChild(freeAmountPara);

    document.getElementById('purchaseSummaryList').appendChild(freeItem);

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