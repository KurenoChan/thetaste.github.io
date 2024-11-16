// Global variable to store clicked item information
var selectedItem = [];

// Check if cart empty before navigating to other page
function checkCart() {
    if (selectedItem.length > 0) {
        if (confirm('Discard item(s) in item cart?') == 1) {
            return true;
        } else {
            return false;
        }
    }
}

function checkTakeAway(takeAway) {
    if (takeAway.checked) {
        newItem.itemAway = parseFloat(document.getElementById('takeAwayPrice').dataset.takeaway);
        newItem.itemPrice = (parseFloat(newItem.itemPrice) + parseFloat(newItem.itemAway)).toFixed(2);
    } else {
        newItem.itemAway = 0;
    }
}

function checkSingleItemOrder() {
    for (var i = 0; i < selectedItem.length; i++) {
        if (selectedItem[i].itemName === 'D.A.R.E Burger' && newItem.itemName === 'D.A.R.E Burger') {
            alert('Only one D.A.R.E Burger to be challenged');
            return false;
        }
    }
}

// Update Order to Cart
function addToCart() {
    newItem.itemQty = document.getElementById('qty').innerHTML;
    var existItem = false;

    // Update selectedItem with properties from newItem
    for (var i = 0; i < selectedItem.length; i++) {
        if (newItem.itemName === 'D.A.R.E Burger' && selectedItem[i].itemName === 'D.A.R.E Burger') {
            existItem = true;
            continue;
        }

        if (selectedItem[i].itemName === newItem.itemName && selectedItem[i].itemAway == newItem.itemAway) {
            var currentItemQty = parseInt(selectedItem[i].itemQty);
            var newItemQty = parseInt(newItem.itemQty);
            if ((currentItemQty + newItemQty) > 20) {
                alert('Can only order for 20 items per order');
                currentItemQty = 20;
            } else {
                currentItemQty += newItemQty;
            }

            selectedItem[i].itemQty = currentItemQty;
            existItem = true;
            break;
        }
    }

    if (!existItem) {
        selectedItem.push(newItem);
    }

    var cartCounter = selectedItem.length;
    document.querySelector('.cartCounter').innerText = cartCounter;

}

function createCartItem(cartIndex, itemImage, itemName, itemPrice, itemQuantity, itemTakeAway) {
    // Create cart item container
    var cartItem = document.createElement('div');
    cartItem.classList.add('cartDetails');
    cartItem.id = 'cartDetails_' + cartIndex;

    // Create index paragraph
    var indexPara = document.createElement('p');
    indexPara.classList.add('cartItmIndex');
    indexPara.id = 'cartItmIndex_' + cartIndex;
    indexPara.textContent = parseInt(cartIndex) + 1;
    cartItem.appendChild(indexPara);

    // Create image element
    var itmImg = document.createElement('img');
    itmImg.classList.add('cartItmImg');
    itmImg.id = 'cartItmImg_' + cartIndex;
    itmImg.src = itemImage;
    itmImg.alt = itemName;
    cartItem.appendChild(itmImg);

    // Create name paragraph
    var namePara = document.createElement('p');
    namePara.classList.add('cartItmName');
    namePara.id = 'cartItmName_' + cartIndex;
    namePara.textContent = itemName;

    if (itemTakeAway) {
        namePara.appendChild(document.createElement('br')); // Append the line break before the [TAKEAWAY] label
        var takeawaySpan = document.createElement('span');
        takeawaySpan.textContent = '[TAKEAWAY]';
        takeawaySpan.classList.add('takeaway-label');
        namePara.appendChild(takeawaySpan);
    }

    cartItem.appendChild(namePara);

    // Create price paragraph
    var amountPara = document.createElement('p');
    amountPara.classList.add('cartItmPrice');
    amountPara.id = 'cartItmPrice_' + cartIndex;
    amountPara.textContent = 'RM ' + (parseFloat(itemPrice) * parseInt(itemQuantity)).toFixed(2);
    cartItem.appendChild(amountPara);

    // Create quantity container
    var quantityContainer = document.createElement('div');
    quantityContainer.classList.add('cartQty');
    cartItem.appendChild(quantityContainer);

    if (itemName != 'D.A.R.E Burger') {
        // Create decrease button
        var decreaseBtn = document.createElement('button');
        decreaseBtn.classList.add('cartQtyDecrease');
        decreaseBtn.id = 'cartQtyDecrease_' + cartIndex;
        decreaseBtn.setAttribute('data-sign', '-');
        decreaseBtn.onclick = function () {
            cartQtyAdjust(cartIndex, itemQuantity, itemPrice);
        };
        quantityContainer.appendChild(decreaseBtn);
    }


    // Create quantity paragraph
    var qtyPara = document.createElement('p');
    qtyPara.classList.add('cartItmQty');
    qtyPara.id = 'cartItmQty_' + cartIndex;
    qtyPara.textContent = itemQuantity;
    quantityContainer.appendChild(qtyPara);

    if (itemName == 'D.A.R.E Burger') {
        qtyPara.style.marginLeft = 'auto';
        qtyPara.style.marginRight = 'auto';
    }


    if (itemName != 'D.A.R.E Burger') {
        // Create increase button
        var increaseBtn = document.createElement('button');
        increaseBtn.classList.add('cartQtyIncrease');
        increaseBtn.id = 'cartQtyIncrease_' + cartIndex;
        increaseBtn.setAttribute('data-sign', '+');
        increaseBtn.onclick = function () {
            cartQtyAdjust(cartIndex, itemQuantity, itemPrice);
        };
        quantityContainer.appendChild(increaseBtn);
    }

    // Append cart item to the cart container
    document.querySelector('.cartContainer').appendChild(cartItem);

}


function cartQtyAdjust(itmIndex, itmQuantity, itmUnitPrice) {
    var cartQty = parseInt(itmQuantity);

    document.getElementById('cartQtyDecrease_' + itmIndex).onclick = function () {
        if (cartQty > 1) {
            cartQty--;
            document.getElementById('cartItmQty_' + itmIndex).innerHTML = cartQty;
            document.getElementById('cartItmPrice_' + itmIndex).innerHTML = 'RM ' + (parseFloat(itmUnitPrice) * parseInt(cartQty)).toFixed(2);
            selectedItem[itmIndex].itemQty = cartQty;
        }
        else {
            let cartContainer = document.querySelector('.cartContainer');
            cartContainer.removeChild(document.getElementById('cartDetails_' + itmIndex));
            // Remove the item details from the selectedItem array
            selectedItem.splice(itmIndex, 1);
            document.querySelector('.cartCounter').innerText = selectedItem.length;

            // Rearrange the indices in the DOM
            var cartItems = document.querySelectorAll('.cartDetails');
            cartItems.forEach(function (item, index) {
                item.id = 'cartDetails_' + index;
                item.querySelector('.cartItmIndex').textContent = index + 1;
                item.querySelector('.cartItmImg').id = 'cartItmImg_' + index;
                item.querySelector('.cartItmIndex').id = 'cartItmIndex_' + index;
                item.querySelector('.cartItmName').id = 'cartItmName_' + index;
                item.querySelector('.cartItmPrice').id = 'cartItmPrice_' + index;
                item.querySelector('.cartQtyDecrease').id = 'cartQtyDecrease_' + index;
                item.querySelector('.cartItmQty').id = 'cartItmQty_' + index;
                item.querySelector('.cartQtyIncrease').id = 'cartQtyIncrease_' + index;
            });

            while (cartContainer.firstChild) {
                cartContainer.removeChild(cartContainer.firstChild);
            }
            for (var i = 0; i < selectedItem.length; i++) {
                createCartItem(i, selectedItem[i].imgSrc, selectedItem[i].itemName, selectedItem[i].itemPrice, selectedItem[i].itemQty, selectedItem[i].itemAway);
            }
        }

        if (selectedItem.length == 0) {
            document.querySelector('.cartContainer').textContent = 'Your Cart is Empty';
            document.querySelector('.cartContainer').style.fontSize = '1.5vw';
            document.querySelector('.cartContainer').style.textAlign = 'center';
            document.querySelector('.cartContainer').style.alignContent = 'center';
        } else {
            document.querySelector('.cartContainer').style.fontSize = '1vw';
            document.querySelector('.cartContainer').style.alignContent = 'normal';
        }
    }

    document.getElementById('cartQtyIncrease_' + itmIndex).onclick = function () {
        if (cartQty < 20) {
            cartQty++;
            document.getElementById('cartItmQty_' + itmIndex).innerHTML = cartQty;
            document.getElementById('cartItmPrice_' + itmIndex).innerHTML = 'RM ' + (parseFloat(itmUnitPrice) * parseInt(cartQty)).toFixed(2);
            selectedItem[itmIndex].itemQty = cartQty;
        }
    }
}


// Validate Check Out Requirement (Must have at least 1 item)
function checkOut() {
    if (selectedItem.length > 0) {
        // Save selectedItem to localStorage
        localStorage.setItem('selectedItems', JSON.stringify(selectedItem));
        window.location.href = "payment.html";
        return false;
    } else {
        alert('Select at least 1 item to proceed to checkout.');
        return false;
    }
}


// ANIMATION DESIGN
// Define the onAnimationEnd function outside of hideCart
function onCartAnimationEnd() {
    // After animation ends, set display to none
    document.getElementById('cartBox').style.display = 'none';

    // Remove the animationend event listener
    document.getElementById('cartBox').removeEventListener('animationend', onCartAnimationEnd);

    // Remove the outsideClickHandler event listener
    window.removeEventListener('mouseup', outsideClickHandler);
}

function showCart() {
    // Remove any existing animationend event listener
    document.getElementById('cartBox').removeEventListener('animationend', onCartAnimationEnd);

    // Add animation to show the cart
    document.getElementById('cartBox').style.animation = 'showOpacity 0.25s ease-in-out';
    document.getElementById('cartBox').style.display = 'block';

    if (selectedItem.length == 0) {
        document.querySelector('.cartContainer').textContent = 'Your Cart is Empty';
        document.querySelector('.cartContainer').style.fontSize = '1.5vw';
        document.querySelector('.cartContainer').style.textAlign = 'center';
        document.querySelector('.cartContainer').style.alignContent = 'center';
    } else {
        document.querySelector('.cartContainer').style.fontSize = '1vw';
        document.querySelector('.cartContainer').style.alignContent = 'normal';
    }

    window.addEventListener('mouseup', outsideClickHandler);

    for (var i = 0; i < selectedItem.length; i++) {
        createCartItem(i, selectedItem[i].imgSrc, selectedItem[i].itemName, selectedItem[i].itemPrice, selectedItem[i].itemQty, selectedItem[i].itemAway);
    }
}

function hideCart() {
    // Add animation to hide the cart
    document.getElementById('cartBox').style.animation = 'hideOpacity 0.5s ease-in-out';

    // Add animationend event listener to handle animation completion
    document.getElementById('cartBox').addEventListener('animationend', onCartAnimationEnd);

    var cartContainer = document.querySelector('.cartContainer');
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
}

// Add event listener to hide the cart when clicking outside
function outsideClickHandler(event) {
    if (!document.getElementById('cartBox').contains(event.target)) {
        // Clicked outside of the cart box
        hideCart();
    }
}