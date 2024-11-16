var newItem = {
    imgSrc: '',
    itemName: '',
    itemPrice: '',
    itemQty: '',
    itemAway: ''
}

function crazyFeastTime(crazyItem) {
    var menuTime = new Date();
    // Check for Crazy Feast Order Availability (3 PM to 6 PM)
    if (menuTime.getHours() >= 15 && menuTime.getHours() <= 17) {
        document.querySelector('#' + crazyItem.id + ' .btn p').textContent = 'ORDER';
        document.querySelector('#' + crazyItem.id + ' .toPage').style.border = '0.3vw double #FC9E20';
        document.querySelector('#' + crazyItem.id + ' .toPage').style.backgroundColor = 'rgba(95, 81, 46, 0.495)';
        document.querySelector('#' + crazyItem.id + ' .btn').setAttribute('title', 'Order Now');
    } else {
        document.querySelector('#' + crazyItem.id + ' .btn p').textContent = 'Currently Unavailable';
        document.querySelector('#' + crazyItem.id + ' .toPage').style.border = 'none';
        document.querySelector('#' + crazyItem.id + ' .toPage').style.backgroundColor = 'rgba(186, 45, 10, 0.8)';
        document.querySelector('#' + crazyItem.id + ' .btn').setAttribute('title', 'Currently Unavailable');
    }
}

function defaultMenuTime(defaultItem) {
    var menuTime = new Date();

    // Check for Crazy Feast Order Availability (10 PM to 11 PM)
    if (menuTime.getHours() >= 10 && menuTime.getHours() <= 22) {
        document.querySelector('#' + defaultItem.id + ' .toPage').style.border = '0.3vw double rgb(211, 179, 99)';
        document.querySelector('#' + defaultItem.id + ' .toPage').style.backgroundColor = 'rgba(95, 81, 46, 0.495)';

        if (defaultItem.id === 'DARE_BURGER'){
            document.querySelector('#' + defaultItem.id + ' .btn p').innerText = 'CHALLENGE';
            document.querySelector('#' + defaultItem.id + ' .btn').setAttribute('title', 'Challenge Now');
        } else {
            document.querySelector('#' + defaultItem.id + ' .btn p').innerText = 'ORDER';
            document.querySelector('#' + defaultItem.id + ' .btn').setAttribute('title', 'Order Now');
        }
    } else {
        document.querySelector('#' + defaultItem.id + ' .btn p').innerText = 'Currently Unavailable';
        document.querySelector('#' + defaultItem.id + ' .toPage').style.border = 'none';
        document.querySelector('#' + defaultItem.id + ' .toPage').style.backgroundColor = 'rgba(186, 45, 10, 0.8)';
        document.querySelector('#' + defaultItem.id + ' .btn').setAttribute('title', 'Currently Unavailable');
    }
}

// Display / Hide Popup Card
function showPopup(clickedMenu, menuType) {
    var menuTime = new Date();
    var canOrder;
    if (menuType === 'crazy') {
        // Check for Crazy Feast Order Availability (3 PM to 6 PM)
        if (menuTime.getHours() >= 15 && menuTime.getHours() <= 17) {
            canOrder = true;
        } else {
            canOrder = false;
        }
    } else {
        // Check for Default Order Availability (10 AM to 11 PM)
        if (menuTime.getHours() >= 10 && menuTime.getHours() <= 22) {
            canOrder = true;
        } else {
            canOrder = false;
        }
    }

    if (canOrder) {
        if (menuType == 'default') {
            document.getElementById('popupMenu').style.backgroundColor = '#101010';
            document.querySelector('.popupRight h3#foodName').style.fontFamily = 'Explora, Garamond, "Times New Roman", Times, serif';
            document.querySelector('.popupRight h3#foodName').style.color = '#ffffff';
        } else if (menuType == 'crazy') {
            document.getElementById('popupMenu').style.backgroundColor = '#101010';
            document.querySelector('.popupRight h3#foodName').style.fontFamily = '"Boucherie Block Bold", Garamond, "Times New Roman", Times, serif';
            document.querySelector('.popupRight h3#foodName').style.color = '#F9BF65';
        } else if (menuType == 'challenge') {
            document.getElementById('popupMenu').style.backgroundColor = 'rgb(74, 18, 4)';
            document.querySelector('.popupRight h3#foodName').style.fontFamily = 'Chiller, Garamond, "Times New Roman", Times, serif';
            document.querySelector('.popupRight h3#foodName').style.color = '#F55D33';
        }


        document.getElementById('foodName').style.fontSize = '4vw';

        document.getElementById('qty').innerHTML = 1;
        let popup_Menu = document.getElementById('popupMenu');
        popup_Menu.style.display = 'flex';
        popup_Menu.style.zIndex = '10000';
        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            section.style.opacity = '0.5';
        })

        // Get Food & Beverage -> Image, Name & Price

        document.getElementById('popupImg').src = clickedMenu.querySelector('.itemImg').src;
        document.getElementById('foodName').innerHTML = clickedMenu.querySelector('.itemName').innerText;
        document.getElementById('price').innerHTML = clickedMenu.querySelector('.itemPrice').innerText;
        document.getElementById('price').innerHTML += "/pax";

        document.getElementById('popupMenu').style.marginTop = '0vh';
        document.querySelector('.popupLeft').style.paddingTop = '0vh';
        document.getElementById('popup-takeaway').style.display = "block";
        document.querySelector('.popupOrder').style.display = "flex";

        document.getElementById('popupOrderNow').innerHTML = "Order Now";
        document.getElementById('popupOrderNow').setAttribute('title', "Order Now");

        if (clickedMenu.querySelector('.itemName').innerText == 'D.A.R.E Burger') {
            document.getElementById('popupMenu').style.marginTop = '5vh';
            document.querySelector('.popupLeft').style.paddingTop = '3vh';
            document.getElementById('popup-takeaway').style.display = "none";
            document.querySelector('.popupOrder').style.display = "none";

            document.getElementById('popupOrderNow').innerHTML = "Challenge Now";
            document.getElementById('popupOrderNow').setAttribute('title', "Challenge Now");
        }

        // Add a click event listener to the document
        window.addEventListener('mouseup', function (event) {
            if (!popup_Menu.contains(event.target)) {
                // Clicked outside of the popup menu
                hidePopup();
            }
        });

        let count = 1;
        document.getElementById('qty').innerHTML = count;
        document.getElementById("decreaseBtn").onclick = function () {
            if (count > 1) {
                count--;
                document.getElementById('qty').innerHTML = count;
            }
        }
        document.getElementById("increaseBtn").onclick = function () {
            if (count < 20) {
                count++;
                document.getElementById('qty').innerHTML = count;
            }
        }

        newItem = {
            imgSrc: clickedMenu.querySelector('.itemImg').src,
            itemName: clickedMenu.querySelector('.itemName').innerText,
            itemPrice: clickedMenu.querySelector('.itemPrice').dataset.price,
        };

        newItem.itemAway = 0;

    } else {
        alert('Sorry. ' + clickedMenu.querySelector('.itemName').innerText + ' currently unavailable.');
    }
}

function hidePopup() {
    let popup_Menu = document.getElementById('popupMenu');
    // Close the popup menu when clicking on the close button
    popup_Menu.style.display = 'none';
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.opacity = '1';
    })

    // Uncheck the "Take Away" checkbox and reset itemAway to 0
    var takeAwayCheckbox = document.getElementById('takeAway');
    takeAwayCheckbox.checked = false;

    document.getElementById('popup-takeaway').style.display = "none";
    document.getElementById('popupMenu').style.backgroundColor = "rgb(21,21,21)";
}


//*Menu Details*//
// CRAZY FEAST
// 1. Crazy Boston
function crazyBoston() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chilled Lobster Meat, Garlic Butter Blend, Crushed Oregano, Lemon Wedge, Fresh Mangoes." + "<br><br>" + "Category: Special" + "<br>" + "Texture&nbsp;&nbsp;: Buttery, Crisp, Fresh";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Combining the best of Classic Boston with the refreshing taste of Mango Smoothie, this dish promises to tantalize your taste buds and transport you to seaside bliss. Get ready for a culinary journey like no other, where each bite is a symphony of flavors that will leave you craving for more.';
}
// 2. Crazy Eggplosion
function crazyEggplosion() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef Patty, Scrambled Eggs, Crispy Fries, Melted Mozzarella Cheese, Fresh Mangoes." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Crunchy, Fresh";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Featuring our signature Eggplosion burger paired with the refreshing taste of Mango Smoothie, this combination is a match made in food heaven. Indulge in the savory delight of scrambled eggs mixed with crispy fries and melted mozzarella cheese, perfectly nestled between a juicy beef patty. With each bite, experience the creamy richness, satisfying crunch, and gooey goodness that define Eggplosion, all complemented by the vibrant sweetness of Mango Smoothie.';
}

//============================
// DEFAULT MENU
// Specials
// 1. D.A.R.E Burger
function dareBurger() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Juicy beef patty, Crispy deep-fried chicken, Soft buns, Bacon, Cheese, Fries." + "<br><br>" + "Category: Special" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Crispy, Crunchy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'D.A.R.E Challenge. Juicy beef patty and crispy deep fried chicken. To accomplish the feat, you also need to eat our bacon cheesy fries. You have 10 minutes to down the meal. The rules are easy, no sharing and no bathroom breaks and no VOMIT. The burger must be eaten clean.';
}
// 2. Basmathi Chicken Rice
function basmathiChickenRice() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Basmati rice, Boneless Chicken, Masala, Tomatoes, Cumin, Turmeric." + "<br><br>" + "Category: Special" + "<br>" + "Texture&nbsp;&nbsp;: Tender, Aromatic";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Tender pieces of chicken are cooked to perfection with fragrant Basmati rice, creating a mouthwatering blend of textures and tastes. Infused with a rich blend of spices and aromatics, including onions, garlic, ginger, and tomatoes, this dish offers a delightful symphony of flavors that will tantalize your taste buds. Whether enjoyed on its own or paired with your favorite side dishes, Basmati Chicken Rice is sure to satisfy your cravings for comfort food with a touch of exotic flair.';
}

//----------------------------
// Lobster Rolls
// 1. Classic Boston
function classicBoston() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chilled Lobster meat, tossed with garlic butter, crush oregano & lemon wedge." + "<br><br>" + "Category: Lobster Roll" + "<br>" + "Texture&nbsp;&nbsp;: Buttery, Crisp, Fresh";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Dive into chilled lobster meat, lovingly tossed in our garlic butter blend, for a taste sensation that&rsquo;ll transport you straight to the coast. Each bite is a harmonious blend of succulence and freshness, with crushed oregano infusing every mouthful with aromatic delight. Squeeze the accompanying lemon wedge for a burst of citrusy zing that elevates this dish to a whole new level.';
}
// 2. Serrano Peppers
function serranoPeppers() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chilled Lobster meat, spicy mayo with chopped celery & mix of fresh herbs, lemon wedge." + "<br><br>" + "Category: Lobster Roll" + "<br>" + "Texture&nbsp;&nbsp;: Crisp, Firm, Juicy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Featuring chilled lobster meat tossed in a fiery blend of spicy mayo, chopped celery, and a medley of fresh herbs, this dish is a spicy sensation for the taste buds. Each mouthful offers a perfect balance of heat from the Serrano peppers and the coolness of the lobster, complemented by the refreshing burst of citrus from the accompanying lemon wedge.';
}
// 3. Whipped Herbs
function whippedHerbs() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chilled Lobster meat, with lemon zest sweet buttery dressing, serves with fresh dill & lemon wedge." + "<br><br>" + "Category: Lobster Roll" + "<br>" + "Texture&nbsp;&nbsp;: Velvety, Creamy, Luscious";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Tender chilled lobster meat is delicately whipped with a lemon zest-infused sweet buttery dressing, creating a luscious texture that melts in your mouth with every bite. Served with a garnish of fragrant fresh dill and a wedge of lemon, each roll bursts with vibrant flavors that dance on your palate.';
}

//----------------------------
// Burgers
// 1. Lazy Signature
function lazySignature() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef patty, streaky beef strip, shoe string onion, caramelised onion, cheddar, sweet relish, signature sauce, lettuce, tomato, sriracha mayo" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Crisp, Tender, Succulent";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Sink your teeth into the Lazy Signature burger, a masterpiece of flavor and texture. Featuring a juicy beef patty topped with crispy streaky beef strip, shoestring onions, and caramelized onions, this burger offers a delightful contrast of textures with each bite. Add to that the creamy melted cheddar, tangy sweet relish, and our special signature sauce, all nestled between layers of fresh lettuce and tomato.';
}
// 2. Smoked Beef Brisket
function smokedBeefBrisket() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Smoked Brisket, Beef patty, streaky beef strip, shoe string onion, onion ring, cheddar, sweet relish, sweet pickles, signature sauce, smoked BBQ sauce, hot sauce, lettuce, tomato, sriracha mayo." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Tender, Juicy, Smoky";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Complemented by a hearty beef patty, crispy streaky beef strip, and crunchy shoe string onions, this burger offers a symphony of textures that will tantalize your taste buds. Topped with onion rings, melted cheddar, and a medley of sweet relish and pickles, it&rsquo;s a harmonious blend of savory and tangy flavors. Drizzled with our signature sauce, smoked BBQ sauce, and a touch of hot sauce for a spicy kick, all crowned with fresh lettuce, tomato, and zesty sriracha mayo.';
}
// 3. Eggplosion
function eggplosion() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef Patty, scrambled egg mixed with crispy fries and Mozzarella" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Savory, Creamy, Crunchy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A generous serving of scrambled eggs mixed with crispy fries and melted mozzarella. With each bite, you&rsquo;ll experience the creamy richness of the scrambled eggs, the satisfying crunch of the crispy fries, and the gooey goodness of melted mozzarella cheese.';
}
// 4. Northender
function northender() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef patty, shoe string onion, onion ring, cheddar, hot sauce, signature sauce, lettuce, tomato, sriracha mayo." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Crisp, Tangy, Savory";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Crafted with a juicy beef patty, crispy shoe string onions, and golden onion rings, this burger offers a satisfying crunch with every bite. Melted cheddar cheese adds a creamy richness, while a perfect blend of hot sauce and signature sauce delivers a tantalizing kick of heat and flavor. Topped with fresh lettuce and tomato for a refreshing contrast, and finished with a zesty sriracha mayo, it&rsquo;s a burger that&rsquo;s bold, tangy, and utterly delicious.';
}
// 5. Hot Mexican
function hotMexican() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef patty, Smoked chipotle sauce, fried jalapeños" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Spicy, Smoky, Crispy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'It&rsquo;s a taste of Mexico in every bite, guaranteed to spice up your burger experience. Featuring a juicy beef patty infused with bold flavors, this burger is a spicy sensation that will set your taste buds ablaze. Smothered in smoked chipotle sauce, every bite delivers a smoky kick that ignites the senses. But the heat doesn&rsquo;t stop there &mdash; we&rsquo;ve added crispy fried jalapeños for an extra burst of fiery flavor and a satisfying crunch.';

    let price = document.getElementById('price');
    price.innerHTML = 'RM 34.90/pax';
}
// 6. Wincosin
function wincosin() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Deep fried chicken chop, lettuce, tomato tooped with cheddar cheese, coselaw served with butter milk sauce." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Tender, Creamy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Indulge in a succulent deep-fried chicken chop, perfectly breaded and cooked to golden perfection, offering a satisfying crunch on the outside and tender juiciness on the inside. Topped with fresh lettuce and tomato for a refreshing contrast, and generously smothered with melted cheddar cheese to add a creamy richness to every bite. Accompanied by a side of tangy coleslaw for a burst of flavor and texture, and served with our irresistible buttermilk sauce for a creamy finish that ties it all together.';
}
// 7. Salted Egg
function saltedEgg() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Beef patty, creamy scrambled egg tossed with salted egg sauce, signature sauce, sweet relish, lettuce, tomato, sriracha mayo." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Savory, Tangy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Sink your teeth into a juicy beef patty, topped with a luxurious creamy scrambled egg infused with rich salted egg sauce. Each bite is a symphony of flavors, with the savory richness of the salted egg sauce perfectly complemented by our signature sauce and tangy sweet relish. Fresh lettuce and tomato add a refreshing crunch, while a drizzle of zesty sriracha mayo provides the perfect finishing touch, balancing the flavors with a hint of heat.';
}
// 8. BBQ Chicken
function bbqChicken() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Crispy deep fried chicken, streaky beef strip, sunny side up egg, pickles, bbq sauce , signature sauce, lettuce, tomato, sriracha mayo." + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Juicy, Savory";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Featuring crispy deep-fried chicken that&rsquo;s golden and crunchy on the outside, yet juicy and tender on the inside, this burger offers a satisfying texture with every bite. Topped with crispy streaky beef strip for an extra layer of savory goodness, and crowned with a sunny side up egg for a creamy richness that melds perfectly with the smoky sweetness of the BBQ sauce. Pickles add a tangy crunch, while our signature sauce and fresh lettuce and tomato enhance the flavor profile. Finished with a drizzle of zesty sriracha mayo for a hint of heat, it&rsquo;s a symphony of textures and flavors that will tantalize your taste buds.';
}

//----------------------------
// Pastas
// 1. Bolognese
function bolognese() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Crispy deep fried chicken, sunny side up egg, pickles, bbq sauce , signature sauce, lettuce, tomato, sriracha mayo." + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Juicy, Savory";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Tender strands of al dente spaghetti enveloped in our homemade Bolognese sauce, each bite offers a velvety smoothness that melts in your mouth. Perfectly cooked and intertwined succulent chicken with the pasta, providing a succulent burst of flavor with every forkful. Creamy melted mozzarella cheese blankets the dish, adding a luxurious richness that complements the robust flavors of the sauce. Crispy bacon strips provide a delightful contrast, offering a satisfying crunch with each savory bite. Sauteed mushrooms add an earthy depth, while caramelized onions impart a subtle sweetness.';
}
// 2. Pescatora
function pescatora() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Linguine pasta, Fresh shrimp, Clams, Mussels, Marinara sauce, Garlic, Olive oil, Fresh herbs." + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Tender, Succulent, Juicy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A medley of the freshest seafood awaits, tantalizing your taste buds with its tender, succulent texture and juicy bursts of flavor in every bite. Delicate strands of al dente pasta are lovingly entwined with a symphony of oceanic treasures, creating a harmonious blend that captures the essence of the sea. Allow the briny sweetness of shrimp, clams, and mussels to dance on your palate, enhanced by the vibrant flavors of our signature marinara sauce. Fragrant herbs and aromatic garlic infuse each mouthful, transporting you to sun-drenched shores with every savory sensation.';
}
// 3. Pescatora
function chilliSaltedEgg() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Spaghetti,  Salted eggs, Red chilies, Garlic, Fresh herbs." + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Spicy, Savory";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'The creamy strands of pasta enveloped in a luscious salted egg sauce, creating a velvety smooth texture that tantalizes the palate. Each bite offers a delightful balance of creaminess and spiciness, as the fiery chili adds a kick to the savory richness of the sauce. It&rsquo;s a culinary masterpiece that combines the comforting creaminess of pasta with the bold flavors of salted egg and chili, resulting in a dish that&rsquo;s both satisfying and exhilarating.';
}
// 4. Smoked Beef Carbonara
function smokedBeefCarbonara() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Spaghetti,  Salted eggs, Red chilies, Garlic, Fresh herbs." + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Spicy, Savory";

    foodName.style.fontSize = '3.7vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'The creamy strands of pasta enveloped in a luscious salted egg sauce, creating a velvety smooth texture that tantalizes the palate. Each bite offers a delightful balance of creaminess and spiciness, as the fiery chili adds a kick to the savory richness of the sauce. It&rsquo;s a culinary masterpiece that combines the comforting creaminess of pasta with the bold flavors of salted egg and chili, resulting in a dish that&rsquo;s both satisfying and exhilarating.';
}

//----------------------------
// Slides
// 1. Korean Chicken Spicy
function koreanChickenSpicy() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chicken Wings, Gochujang, Sesame seeds, Sliced green onions, Sliced red chili peppers" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Tender, Spicy";

    foodName.style.fontSize = '3.8vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Crispy on the outside and tender on the inside, each succulent piece of chicken is coated in a bold and spicy Korean sauce that will leave your palate tingling with delight. Infused with the vibrant flavors of gochujang and other Korean spices, this dish offers a tantalizing balance of heat and sweetness that is simply irresistible.';
}
// 2. WingZilla
function wingzilla() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chicken wings, Sweet barbeque sauce, Sesame seeds, Chopped green onions, chopped cilantro" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Tender, Spicy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Each succulent chicken wing is coated in a crispy, golden batter that&rsquo;s fried to perfection, creating a satisfying crunch with every bite. But the real magic happens when you sink your teeth into the sticky glaze that coats these wings, bursting with tangy goodness that will have your taste buds dancing with delight.';
}
// 3. Royal Wing
function royalWing() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Chicken wings, Sweet & Sour sauce, Brown sugar, Sliced bell peppers, Sliced onions, Sesame seeds" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Tender, Sticky";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Bathed in our home-made sweet & sour sauce, our wings boast a majestic blend of sweet and sour flavors. Pineapple juice and white vinegar provide a tangy punch, while brown sugar adds a regal sweetness. The addition of soy sauce, ketchup, garlic, and ginger creates a harmonious symphony of flavors fit for a king or queen.';
}
// 4. Chicken Nachos
function chickenNachos() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Tortilla chips, Cooked shredded chicken, Shredded cheddar cheese, Sliced jalapeños" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crunchy, Tender, Creamy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Crispy tortilla chips form the base of this delectable dish, topped generously with tender cooked shredded chicken, hearty black beans, juicy diced tomatoes, and zesty red onions. Sliced jalapeños add a fiery kick, while shredded cheddar cheese melts to perfection, creating a gooey blanket of deliciousness.';
}
// 5. Beef Nachos
function beefNachos() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Tortilla chips, Seasoned ground beef, Shredded cheddar cheese, Sliced jalapeños, Diced red onions" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crunchy, Savoury, Creamy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Crispy tortilla chips provide the perfect base for this flavor-packed dish, generously topped with seasoned ground beef, hearty black beans, and zesty diced tomatoes. Diced red onions and sliced jalapeños add a spicy kick, while melted shredded cheddar cheese blankets the ensemble with creamy richness.';
}
// 6. Bacon Cheese Fries
function baconCheeseFries() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: French fries, Shredded cheddar cheese, Sour cream, Chopped green onions, Bacon strips" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crunchy, Gooey";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Crispy golden French fries serve as the perfect canvas for a decadent masterpiece. Crisp bacon strips are generously layered on top, adding a savory crunch that will tantalize your taste buds. Creamy shredded cheddar cheese blankets the ensemble, melting into a gooey, irresistible goodness that promises pure satisfaction with every bite.';
}
// 7. Onion Ring
function onionRing() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Large onions, Paprika, Garlic powder, Onion powder, Sweet & Sour sauce" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crunchy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Thick slices of large onions are coated in a crispy, golden batter, creating a delightful contrast of textures and flavors. Each bite boasts a satisfying crunch on the outside, giving way to tender, sweet onion on the inside.';
}
// 8. Onion Ring
function curlyFries() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Potatoes, Black pepper, Paprika, Garlic powder" + "<br><br>" + "Category: Side" + "<br>" + "Texture&nbsp;&nbsp;: Crunchy, Whimsical";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Made from fresh potatoes cut into intricate curls, our Curly Fries are coated in a seasoned batter that crisps up to perfection when fried.';
}

//----------------------------
// BEVERAGES
// 1.  Peach Passion Tea
function peachPassionTea() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh peaches, Peach tea, Honey, Mint leaves" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Smooth, Light";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A blend of fruity flavors that will transport you to a tropical paradise with every sip. We start by brewing fragrant peach tea, infusing it with the essence of ripe peaches for a burst of sweetness and flavor.';
}
// 2.  Peach Belini
function peachBelini() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Ripe peaches, Sparkling wine, Syrup, Peach slices" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Effervescent, Velvety, Light";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Begins with ripe peaches, their juicy sweetness lending a burst of flavor to every sip. We blend the peaches with a splash of peach schnapps or peach liqueur, infusing the cocktail with a rich depth of fruity essence. To add effervescence and sparkle, we top it off with chilled sparkling wine or champagne, creating a refreshing and celebratory libation that dances on your palate.';
}
// 3.  Lychee Punch
function lycheePunch() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh Lychee, Pineapple juice, Lemon-lime soda" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Effervescent, Fruity, Refreshing";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Made with the succulent sweetness of lychee fruit, this punch is a delightful blend of fruity goodness. We start by infusing the punch with the delicate essence of lychee fruit, whether freshly peeled or from a can.';
}
// 4.  Japanese Matcha Latte
function japaneseMatchaLatte() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Matcha powder, Fresh Milk, Sweetener" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy";

    foodName.style.fontSize = '3.8vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Starting with premium matcha powder, we whisk it with cold water or milk until it forms a smooth and vibrant green matcha concentrate. Next, we pour the matcha concentrate over ice cubes, creating a chilled base for our latte. For added sweetness, we mix in your preferred sweetener to taste.';
}
// 5.  Yuzu Matcha
function yuzuMatcha() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Matcha powder, Yuzu juice, Fresh Milk, Sweetener" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Smooth, Velvety, Citrusy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'This exquisite beverage begins with premium matcha powder, carefully whisked with hot water or milk to create a smooth and vibrant green matcha concentrate. To infuse it with the refreshing essence of yuzu, we add a splash of yuzu juice or yuzu syrup, imparting a burst of citrusy brightness that complements the earthy notes of matcha.';
}
// 6.  Strawberry Lemonade
function strawberryLemonade() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh strawberries, Lemon juice, Granulated sugar, Sliced strawberries" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Smooth, Tangy, Refreshing";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Start by blending ripe strawberries until smooth, extracting their sweet and juicy essence. Next, we combine the strawberry puree with freshly squeezed lemon juice, infusing the drink with a bright and zesty citrus flavor. To balance the tartness, we add a touch of sweetness with granulated sugar or simple syrup, stirring until dissolved.';
}
// 7.  Strawberry Paradise
function strawberryParadise() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh strawberries, Lemon juice, Granulated sugar, Sliced strawberries" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Smooth, Tangy, Refreshing";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Start by blending ripe strawberries until smooth, extracting their sweet and juicy essence. Next, we combine the strawberry puree with freshly squeezed lemon juice, infusing the drink with a bright and zesty citrus flavor. To balance the tartness, we add a touch of sweetness with granulated sugar or simple syrup, stirring until dissolved.';
}
// 8.  Oreo Slush
function oreoSlush() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Oreo cookies, Milk, Sweetened condensed milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Indulgent";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A perfect mixture of Oreo cookies with milk until smooth, creating a rich and luscious Oreo-infused base. For added sweetness, we mix in sweetened condensed milk or sugar to taste, stirring until fully incorporated. The result is a velvety smooth slush with the irresistible flavor of Oreo cookies, guaranteed to delight your taste buds with every sip.';
}
// 9.  Strawberry Lychee
function strawberryLychee() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh strawberries and lychees, Honey, Syrup" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Smooth, Creamy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A refreshing blend that combines the sweetness of ripe strawberries with the delicate essence of lychee fruit. We start by pureeing fresh strawberries until smooth, extracting their vibrant flavor and natural sweetness. Next, we add lychee fruit, either fresh or canned, along with a splash of water to enhance the fruity infusion. For added sweetness, sugar or honey can be added to taste, stirring until dissolved.';
}
// 10. Double Mango
function doubleMango() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Ripe mangoes, Honey, Lime juice" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Smooth, Velvety, Refreshing";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A luscious blend that celebrates the vibrant flavors of ripe mangoes. We begin by pureeing ripe mangoes until smooth, capturing their juicy essence and vibrant color. Next, we combine the mango puree with mango juice or mango nectar, intensifying the tropical infusion. For those with a sweet tooth, sugar or honey can be added to enhance the natural sweetness of the mangoes, while a splash of lime juice can be added for a refreshing citrusy twist.';
}
// 11. Kiwi Fury
function kiwiFury() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Ripe kiwifruit, Lime juice, Honey" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Zesty, Refreshing";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A combination of the kiwifruit slices with a splash of lime juice, creating a zesty and refreshing base for our drink. For those craving extra sweetness, sugar or honey can be added to taste, enhancing the natural flavors of the fruits.';
}
// 12. Japanese Matcha Milkshake
function japaneseMatchaMilkshake() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Matcha powder, Fresh milk, Vanilla ice cream, Whipped cream" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Indulgent";

    foodName.style.fontSize = '3.2vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'We begin by blending matcha powder with milk until smooth, infusing the milk with the earthy and slightly bitter notes of green tea. Next, we add a generous scoop of vanilla ice cream, imparting a luscious creaminess to the milkshake.';
}
// 13. Cocoa Nut
function cocoaNut() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Almond milk, Cocoa powder, Maple syrup, Shredded coconut, Chocolate shavings" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Smooth, Frothy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'We start by combining almond milk or coconut milk with cocoa powder, creating a velvety base that&rsquo;s both rich and satisfying. To add a nutty twist, we mix in your favorite nut butter, such as almond or cashew butter, infusing the drink with a delightful nuttiness. For sweetness, we drizzle in maple syrup or honey, adjusting to taste.';
}
// 14. Classic Mojito
function classicMojito() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh mint leaves, White rum, Lime, Simple syrup, Club soda" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Citrusy, Herbaceous";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Begin by gently muddling fresh mint leaves with lime wedges and simple syrup (or sugar) in a glass, releasing their aromatic oils and flavors. Next, add a generous pour of white rum and fill the glass with ice cubes, allowing the mixture to chill. Top off with club soda for a bubbly finish, stirring gently to combine all the ingredients.';
}
// 15. Apple Haze
function appleHaze() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh mint leaves, White rum, Lime, Green apple syrup, Club soda" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Sparkling, Crisp";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Begin by gently muddling fresh mint leaves with lime wedges and simple syrup (or sugar) in a glass, releasing their aromatic oils and flavors. Next, add a generous pour of white rum and a splash of green apple syrup or liqueur, infusing the drink with a delightful apple essence. Fill the glass with ice cubes and top off with sparkling water or club soda for a refreshing effervescence, stirring gently to combine.';
}
// 16. Watermelon Rush
function watermelonRush() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh watermelon chunks, White rum, Lime, Simple syrup, Club soda" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Sparkling, Crisp";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Begin by muddling fresh watermelon chunks with mint leaves and lime wedges in a glass, extracting their vibrant juices and fragrant aromas. Next, add a generous pour of white rum and a splash of simple syrup (or sugar), infusing the drink with a touch of sweetness. Fill the glass with ice cubes and top off with sparkling water or club soda for a refreshing effervescence, stirring gently to combine all the ingredients.';
}
// 17. Americano
function americano() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Brewed coffee, Steamed milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Rich, Smooth, Aromatic";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Begin by pulling two shots of espresso into a pre-warmed cup. Then, add an equal amount of hot water to the espresso, creating a smooth and balanced brew. The result is a rich and aromatic coffee experience with a satisfying depth of flavor.';
}
// 18. Caffe Latte
function caffeLatte() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Brewed coffee, Steamed milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Smooth, Velvety";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A classic espresso-based drink that perfectly balances the boldness of espresso with the velvety texture of steamed milk. Begin by pulling two shots of espresso into a pre-warmed cup. Next, steam milk until it&rsquo;s velvety and frothy, creating a creamy texture. Pour the steamed milk over the espresso shots, allowing the two to blend together seamlessly.';
}
// 19. Mocha
function mocha() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Brewed coffee, Milk, Cocoa powder" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Decadent, Velvety";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Start by pulling two shots of espresso into a pre-warmed cup. In a separate pitcher, steam milk until it&rsquo;s velvety and frothy. Add a generous amount of chocolate syrup or cocoa powder to the espresso shots, stirring to combine and creating a luscious mocha base. Then, pour the steamed milk over the espresso-chocolate mixture, allowing the flavors to meld together harmoniously.';
}
// 20. Aussie Cappucino
function aussieCappucino() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Espresso shots (1-2), Milk, Cocoa powder" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Frothy, Smooth";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A perfect balance of robust espresso and creamy milk topped with a touch of chocolate. Begin by pulling one or two shots of espresso into a pre-warmed cup. In a separate pitcher, steam milk until it reaches a velvety and frothy consistency. Pour the steamed milk over the espresso, filling the cup about two-thirds full. Next, sprinkle a generous amount of chocolate powder or cocoa powder on top of the milk foam, adding a delightful sweetness to each sip.';
}
// 21. Lazy Caramel Machiato
function lazyCaramelMachiato() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Espresso shots (2), Milk, Caramel syrup" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Indulgent, Smooth";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A delightful combination of bold espresso, creamy milk, and luscious caramel syrup. Begin by pulling two shots of espresso into a pre-warmed cup. In a separate pitcher, steam milk until it&rsquo;s smooth and velvety. Pour the steamed milk over the espresso, leaving a thin layer of foam on top. Then, drizzle caramel syrup generously over the foam, allowing it to slowly sink into the coffee below.';
}
// 22. Classic Chocolate
function classicChocolate() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Cocoa powder, Milk, Sugar, Vanilla" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Rich, Smooth";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A rich and velvety indulgence that warms you from the inside out. Made with care and attention to detail, each sip brings forth a symphony of deep, chocolatey flavors enveloped in the creamy embrace of steamed milk. Our secret blend of premium cocoa powder and just the right amount of sweetness creates a perfect balance that delights the senses.';
}

//----------------------------
// DESSERTS
// 1.  Cheese Cake
function cheeseCake() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Cream cheese, Eggs, Vanilla extract, Graham crackers, Butter" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Velvety, Smooth";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Our cheesecake is crafted with a blend of creamy cream cheese, farm-fresh eggs, and just the right amount of sugar to create a velvety smooth texture that melts in your mouth with each bite. Enhanced with the subtle nuances of vanilla extract and a hint of lemon zest, every slice offers a harmonious balance of flavors that is both indulgent and satisfying.';
}
// 2.  Chocolate Brownie Cake
function chocolateBrownieCake() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Dark chocolate, Cocoa powder, Chopped nuts, Chocolate chips" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Fudgy, Moist, Tender";

    foodName.style.fontSize = '3.6vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A decadent fusion of rich, fudgy brownie and moist cake layers. Crafted with the finest ingredients, each bite is a symphony of deep chocolate flavor and indulgent sweetness. Our cake begins with a base of melted dark chocolate and butter, blended to perfection with granulated sugar, eggs, and aromatic vanilla extract. This velvety batter is then folded with a mixture of all-purpose flour, cocoa powder, salt, and baking powder, ensuring a moist and tender crumb in every slice.';
}
// 3.  Honeydew Sago
function honeydewSago() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh honeydew melon, Sago pearls, Coconut milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Fudgy, Moist, Tender";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'A delightful dessert that combines the natural sweetness of honeydew melon with the creamy richness of coconut milk and the chewy texture of sago pearls.';
}
// 4.  Hwachae Watermelon Punch
function hwachaeWatermelonPunch() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Fresh watermelon, Lemon, Sparkling water, Chopped green grapes" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Crisp, Bubbly";

    foodName.style.fontSize = '3.3vw';

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'This vibrant concoction combines the succulent sweetness of ripe watermelon with zesty hints of lemon or lime, creating a symphony of flavors that dance on your palate. For an extra pop of texture and taste, we&rsquo;ve added crisp, chopped green grapes, lending a tantalizing crunch and a burst of juicy freshness to every sip.';
}
// 5.  Mango Sago
function mangoSago() {
    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Ingredients: Ripe mangoes, Sago pearls, Coconut milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Smooth, Chewy";

    let foodDescription = document.getElementById('foodDescription');
    foodDescription.innerHTML = 'Dive into a creamy oasis of coconut milk-infused sago pearls, gently caressed by the unmistakable flavor of succulent mangoes. Crafted with care and passion, our Mango Sago is a symphony of flavors and textures, offering a delightful escape from the everyday hustle.';
}