    // Menu Page //
    function showhide_order(){
        document.getElementById('qty').innerHTML = 1;
        let popup_Menu = document.getElementById('popupMenu');
        popup_Menu.style.display = 'block';
        popup_Menu.style.zIndex = '100';

        var sections = document.querySelectorAll('section');
        sections.forEach(function(section){
            section.style.opacity = '0.5';
        })
        document.getElementById('menuNav').style.opacity = '0.5';

        document.getElementById('close_popup').onclick = function(){
            document.getElementById('popupMenu').style.display = 'none';
            var sections = document.querySelectorAll('section');
            sections.forEach(function(section){
                section.style.opacity = '1';
            })
            document.getElementById('menuNav').style.opacity = '1';
            document.getElementById('popupMenu').style.backgroundColor = "rgb(21,21,21)";
            document.getElementById('popup-option').style.transform = "translateY(0)";
            document.getElementById('offerTitle').style.display = "none";
            document.getElementById('popup-option').style.display = "none";
            document.getElementById('popup-sub_option').style.display = "none";
        }

        let count = 1;
        document.getElementById("decreaseBtn").onclick = function(){
            if (count > 1){
                count -= 1;
                document.getElementById('qty').innerHTML = count;
            }

        }
        document.getElementById("increaseBtn").onclick = function(){
            if (count < 9){
                count += 1;
                document.getElementById('qty').innerHTML = count;
            }
        }
    }
    //*Special Offer*//
    //1. Big Mama Offer//
    function big_mamaOffer(){
        document.getElementById('popupMenu').style.backgroundColor = "#602521";
        document.getElementById('offerTitle').style.display = "block";

        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/offer/big_mama-offer-home.png";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Grilled Beef patty, Bacon, Fried Eggs, Cheese, Tomatoes, Toasted Bun" + "<br><br>";

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
        
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Big Mama Special';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Sink your teeth into the juicy all-beef patty, perfectly grilled to mouthwatering perfection. Each bite is a symphony of savory flavors, with the smoky bacon adding a delightful crunch and the rich, melted cheese enveloping every delicious morsel.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 19.99/pax';
        price.style.letterSpacing = "5px";
    }
    //2. Seafood Aglio Olio Special//
    function aglio_olioOffer(){
        document.getElementById('popupMenu').style.backgroundColor = "#602521";
        document.getElementById('offerTitle').style.display = "block";

        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/offer/aglio_olio_seafood-offer-home.png";
        popupImage.style.marginLeft = "30px";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Linguini, Aglio Olio Seasoning, Cooking Cream, Shrimp, Scallop, Squid Rings, Blue Mussels, Garlic, Lemon, Black Pepper";

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
        
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Seafood Aglio Olio Special';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Each al dente strand of pasta is carefully coated with the essence of the sea, complemented by a hint of chili flakes for a subtle kick. Crafted with the freshest, sustainably sourced seafood, every bite transports you to coastal shores. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 27.90/pax';
        price.style.letterSpacing = "5px";
    }
    //3. Spicy BBQ Burger Special//
    function spicy_bbq_burgerOffer(){
        document.getElementById('popupMenu').style.backgroundColor = "#602521";
        document.getElementById('offerTitle').style.display = "block";

        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/offer/spicy_bbq_burger-offer-home.png";
        popupImage.style.marginLeft = "40px";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Spicy Grilled Chicken Patty, Smoky Barbecue Seasoning, Brioche Buns, Cheddar Cheese, Sliced Pickles & Tomatoes";

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
        
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Spicy BBQ Burger Special';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'A delectable combination of tender, spicy chicken, smoky barbecue sauce, and a toasted bun. With its juicy and flavorful chicken patty, tangy BBQ sauce, and a touch of heat, it offers a mouthwatering experience. Topped with fresh lettuce, ripe tomato slices, and creamy condiments, this burger delivers a satisfying blend of textures. Indulge in this irresistible creation that brings together the perfect balance of spice, smokiness, and juiciness in every bite.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 17.80/pax';
        price.style.letterSpacing = "5px";
    }
    //4. Lamb Shank Special//
    function lamb_shankOffer(){
        document.getElementById('popupMenu').style.backgroundColor = "#602521";
        document.getElementById('offerTitle').style.display = "block";

        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/offer/lamb_shank-offer-home.png";
        popupImage.style.marginLeft = "0";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Ingredients: Irish Lamb Shank, Mashed Potatoes, Fresh Herbs";

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
        
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Lamb Shank Special';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Sourced from the finest, ethically raised lambs, each shank is meticulously prepared and slow-cooked to perfection. Our secret blend of aromatic herbs, rich red wine, and flavorful spices creates a symphony of flavors that will transport your taste buds to culinary bliss. Whether you prefer a classic herb-infused lamb shank or a balsamic-infused masterpiece, our premium offering guarantees an unforgettable dining experience. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 29.90/pax';
        price.style.letterSpacing = "5px";
    }

    //*Default Menu*//
    //**Burgers**//
    //1. Big Mama//
    function big_mama(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/burger/big_mama.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Grilled Beef patty, Bacon, Fried Eggs, Cheese, Tomatoes, Toasted Bun" + "<br><br>" + "Category: Burger" +"<br>" + "Texture&nbsp;&nbsp;: Juicy, Crispy, Cheesy";

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
        
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Big Mama';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Sink your teeth into the juicy all-beef patty, perfectly grilled to mouthwatering perfection. Each bite is a symphony of savory flavors, with the smoky bacon adding a delightful crunch and the rich, melted cheese enveloping every delicious morsel.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 17.99/pax';
        price.style.letterSpacing = "5px";
    }
    //2. Beef Burger//
    function beef_burger(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/burger/beef_burger.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: High-Quality Beef, Brioche Buns, Gourmet Cheese, Specialty Sauces, Fresh Lettuce & Tomatoes" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Tender, Melt-in-your-mouth"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Beef Burger';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Savor the epitome of culinary excellence with our premium beef burger. Meticulously crafted using the finest cuts of prime beef, each tender and succulent bite delivers a burst of flavors that dance on your palate. Nestled between a delicate, artisanal bun, adorned with melted aged cheddar and crisp, fresh toppings, this burger is a symphony of luxury that will leave you craving more. Indulge in a culinary masterpiece that redefines the art of burger perfection.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 20.90/pax';
        price.style.letterSpacing = "5px";
    }
    //3. Spicy BBQ Burger//
    function spicy_bbq_burger(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/burger/spicy_bbq_burger.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Spicy Grilled Chicken Patty, Smoky Barbecue Seasoning, Brioche Buns, Cheddar Cheese, Sliced Pickles & Tomatoes" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Tender"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Spicy BBQ Burger';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'A delectable combination of tender, spicy chicken, smoky barbecue sauce, and a toasted bun. With its juicy and flavorful chicken patty, tangy BBQ sauce, and a touch of heat, it offers a mouthwatering experience. Topped with fresh lettuce, ripe tomato slices, and creamy condiments, this burger delivers a satisfying blend of textures. Indulge in this irresistible creation that brings together the perfect balance of spice, smokiness, and juiciness in every bite.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 13.99/pax';
        price.style.letterSpacing = "5px";
    }
    //4. Cheezzy Burger//
    function cheezzy_burger(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/burger/cheezzy_burger.jpg";
        popupImage.style.marginLeft = "20px";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Double BBQ Chicken Patty, Fontina Cheese, Fried Onion Rings, Fried Mushrooms, Fried Squids, Crispy Fries & Garlic Breads" + "<br><br>" + "Category: Burger" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Tender, Cheesy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Cheezzy Burger';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'The combination of savory meat, gooey cheese, and fragrant garlic bread creates a symphony of tastes and textures that will leave your taste buds craving for more. Indulge in this irresistible creation that brings together the best of cheesy goodness and garlicky bliss in every bite.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 14.90/pax';
        price.style.letterSpacing = "5px";
    }

    //**Chop-Steak**//
    //1. Chicken Chop//
    // function chicken_chop(){
    //     let popupImage = document.getElementById('popupImg');
    //     popupImage.src = "pictures/menu/food-drinks/chop-steak/chicken_chop.jpg";
        
    //     let popupDetails = document.getElementById('popup_details');
    //     popupDetails.innerHTML = "Ingredients: Fried/Grilled Tender Chicken Breast, Black Pepper/Mushroom Sauce, Fresh-Made Coleslaw, Fried Eggs, Fries, Sliced Cucumber & Tomatoes" + "<br><br>" + "Category: Chop-Steak" + "<br>" + "Texture&nbsp;&nbsp;: Meaty, Flavorful, Tender"

    //     // AI-Generated
    //     document.getElementById('popup-option').style.display = "block";
    //     var popupMainOption = document.getElementById('main_option');
    //     var mainOptionValues = ['Select Cooking Type', 'Fried', 'Grilled'];
        
    //     for (let i = 0; i < mainOptionValues.length; i++) {
    //       let mainOption = document.createElement('option');
    //       mainOption.text = mainOptionValues[i];
    //       if (i === 0) {
    //         mainOption.disabled = true;
    //         mainOption.selected = true;
    //       }
        
    //       mainOption.value = mainOptionValues[i];
    //       popupMainOption.add(mainOption);
    //     }
        
    //     var popupSubOption = document.getElementById('sub_option');
    //     var subOptionValues = ['Select Sauce', 'Mushroom Sauce', 'Black Pepper Sauce'];
    //     for (let i = 0; i < subOptionValues.length; i++) {
    //       let subOption = document.createElement('option');
    //       subOption.text = subOptionValues[i];
    //       if (i === 0) {
    //         subOption.disabled = true;
    //         subOption.selected = true;
    //       }
        
    //       subOption.value = subOptionValues[i];
    //       popupSubOption.add(subOption);
    //     }
        
    //     popupMainOption.addEventListener('change', function() {
    //       if (popupMainOption.value === 'Grilled') {
    //         document.getElementById('popup-sub_option').style.display = 'block';
    //       }
    //       else {
    //         document.getElementById('popup-sub_option').style.display = 'none';
    //       }
    //     });
    //     // End of AI-Generated

    //     let foodName = document.getElementById('foodName');
    //     foodName.innerHTML = 'Chicken Chop';
    //     foodName.style.fontSize = "50px";
    //     foodName.style.margin  = "0";
    //     foodName.style.letterSpacing = "5px";
    //     foodName.style.fontWeight = "lighter";

    //     let foodDescription = document.getElementById('foodDescription');
    //     foodDescription.innerHTML = 'A succulent and flavorful delight, with its juicy and tender texture, it offers a satisfying bite. Cooked to perfection, the chicken chop boasts a firm and meaty consistency that is both satisfying and enjoyable. The exterior may feature a slightly crispy or charred finish, adding a delightful contrast. Seasoned with care, this premium dish delivers a delectable taste experience that will leave you craving for more.'
    //     foodDescription.style.fontSize = "20px";

    //     let price = document.getElementById('price');
    //     price.innerHTML = 'RM 19.99/pax';
    //     price.style.letterSpacing = "5px";
    // }
    function chicken_chop() {
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/chop-steak/chicken_chop.jpg";
    
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Fried/Grilled Tender Chicken Breast, Black Pepper/Mushroom Sauce, Fresh-Made Coleslaw, Fried Eggs, Fries, Sliced Cucumber & Tomatoes" + "<br><br>" + "Category: Chop-Steak" + "<br>" + "Texture&nbsp;&nbsp;: Meaty, Flavorful, Tender";
    
        // AI-Generated
        document.getElementById('popup-option').style.display = "block";
        var popupMainOption = document.getElementById('main_option');
        var mainOptionValues = ['Select Cooking Type', 'Fried', 'Grilled'];
    
        // Clear existing main options
        popupMainOption.innerHTML = '';
    
        for (let i = 0; i < mainOptionValues.length; i++) {
        let mainOption = document.createElement('option');
        mainOption.text = mainOptionValues[i];
        if (i === 0) {
            mainOption.disabled = true;
            mainOption.selected = true;
        }
    
        mainOption.value = mainOptionValues[i];
        popupMainOption.add(mainOption);
        }
    
        var popupSubOption = document.getElementById('sub_option');
        var subOptionValues = ['Select Sauce', 'Mushroom Sauce', 'Black Pepper Sauce'];
    
        // Clear existing sub options
        popupSubOption.innerHTML = '';
    
        for (let i = 0; i < subOptionValues.length; i++) {
        let subOption = document.createElement('option');
        subOption.text = subOptionValues[i];
        if (i === 0) {
            subOption.disabled = true;
            subOption.selected = true;
        }
    
        subOption.value = subOptionValues[i];
        popupSubOption.add(subOption);
        }
    
        popupMainOption.addEventListener('change', function() {
        if (popupMainOption.value === 'Grilled') {
            document.getElementById('popup-sub_option').style.display = 'block';
        } else {
            document.getElementById('popup-sub_option').style.display = 'none';
        }
        });
        // End of AI-Generated
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Chicken Chop';
        foodName.style.fontSize = "50px";
        foodName.style.margin = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";
    
        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'A succulent and flavorful delight, with its juicy and tender texture, it offers a satisfying bite. Cooked to perfection, the chicken chop boasts a firm and meaty consistency that is both satisfying and enjoyable. The exterior may feature a slightly crispy or charred finish, adding a delightful contrast. Seasoned with care, this premium dish delivers a delectable taste experience that will leave you craving for more.';
        foodDescription.style.fontSize = "20px";
    
        let price = document.getElementById('price');
        price.innerHTML = 'RM 19.99/pax';
        price.style.letterSpacing = "5px";
    }
    
    //2. Fish & Chips//
    function fish_n_chips(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/chop-steak/fish&chips.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Fish Fillet, French Fries, Tartar Sauce, Lemon Plum Dressing, Lemon, Cherry Tomato, Romaine Lettuce" + "<br><br>" + "Category: Chop-Steak" + "<br>" + "Texture&nbsp;&nbsp;: Fresh, Crispy, Tender"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Fish & Chips';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Immerse yourself in the delight of perfectly battered, succulent fillets of the freshest white fish, fried to golden perfection. Each bite delivers a satisfying crunch that gives way to moist, tender fish. Paired with our hand-cut, fluffy chips, every mouthful is a symphony of textures and flavors.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 22.50/pax';
        price.style.letterSpacing = "5px";
    }
    //3. Grilled Steak//
    function grilled_steak(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/chop-steak/grilled_steak.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: High-quality Steak Cuts, Olive Oil, Kosher Salt, Black Pepper, Garlic Cloves, Fresh Herbs" + "<br><br>" + "Category: Chop-Steak" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Tender"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Grilled Steak';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Grilled to perfection, our steaks boast a tantalizing crust, sealing in juiciness and delivering an unparalleled dining experience. Savor every mouthwatering bite, as your taste buds dance with delight, and treat yourself to the pinnacle of steak perfection. Elevate your grilling game and embrace the ultimate indulgence in premium, mouthwatering grilled steak.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 29.90/pax';
        price.style.letterSpacing = "5px";
    }
    //4. Lamb Shank//
    function lamb_shank(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/chop-steak/lamb_shank.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Irish Lamb Shank, Mashed Potatoes, Fresh Herbs" + "<br><br>" + "Category: Chop-Steak" + "<br>" + "Texture&nbsp;&nbsp;: Juicy, Tender, Melt-in-your-mouth"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Lamb Shank';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Sourced from the finest, ethically raised lambs, each shank is meticulously prepared and slow-cooked to perfection. Our secret blend of aromatic herbs, rich red wine, and flavorful spices creates a symphony of flavors that will transport your taste buds to culinary bliss. Whether you prefer a classic herb-infused lamb shank or a balsamic-infused masterpiece, our premium offering guarantees an unforgettable dining experience. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 26.99/pax';
        price.style.letterSpacing = "5px";
    }
    //**Pasta**//
    //1. Spaghetti Bolognese//
    function bolognese(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/pasta/bolognese.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Spaghetti, Homemade Bolognese Sauce, Chicken or Beef, Mozzarella Cheese, Crispy Bacon Strips, Sautéed Mushrooms, Caramelized Onions, Fresh Basil Leaves." + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Saucy, Savoury"

        document.getElementById('popup-option').style.display = "block";
        document.getElementById('popup-option').style.transform = "translateY(40px)";
        var popupMainOption = document.getElementById('main_option');
        var mainOptionValues = ['Select Meat Type', 'Chicken', 'Beef'];

        // Clear existing main options
        popupMainOption.innerHTML = '';
        
        for (let i = 0; i < mainOptionValues.length; i++) {
        let mainOption = document.createElement('option');
        mainOption.text = mainOptionValues[i];
        if (i === 0) {
            mainOption.disabled = true;
            mainOption.selected = true;
        }
        
        mainOption.value = mainOptionValues[i];
        popupMainOption.add(mainOption);
        }

        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Spaghetti Bolognese';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Experience the pinnacle of Italian cuisine with our premium spaghetti Bolognese. Delight in the rich, velvety sauce that embraces each strand of perfectly cooked pasta. Crafted with the finest ingredients, our Bolognese features high-quality ground beef, sautéed with aromatic onions, carrots, and celery. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 16.90/pax';
        price.style.letterSpacing = "5px";
    }
    //2. Seafood Aglio Olio//
    function aglio_olio(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/pasta/aglio_olio_seafood.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Linguini, Aglio Olio Seasoning, Cooking Cream, Shrimp, Scallop, Squid Rings, Blue Mussels, Garlic, Lemon, Black Pepper" + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Creamy, Spicy, Savoury"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Seafood Aglio Olio';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Each al dente strand of pasta is carefully coated with the essence of the sea, complemented by a hint of chili flakes for a subtle kick. Crafted with the freshest, sustainably sourced seafood, every bite transports you to coastal shores. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 23.99/pax';
        price.style.letterSpacing = "5px";
    }
    //3. Spaghetti Arrabiata//
    function arrabiata(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/pasta/spaghetti_arrabiata.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Spaghetti, Cheese, Arrabiata Sauce" + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Saucy, Spicy, Savoury"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Spaghetti Arrabiata';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Experience the perfect balance of bold flavors and fiery heat as the zesty tomato sauce dances harmoniously with crushed red peppers. Crafted with the finest ingredients, our arrabiata sauce boasts the freshest tomatoes, aromatic garlic, and a hint of basil. Each twirl of perfectly cooked al dente spaghetti is coated in this tantalizing sauce, delivering an explosion of flavors with every bite. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 19.90/pax';
        price.style.letterSpacing = "5px";
    }
    //4. Shrimp Alfredo//
    function alfredo(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/pasta/shrimp_alfredo.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Fettuccine Pasta, Alfredo Sauce, Peeled Shrimp" + "<br><br>" + "Category: Pasta" + "<br>" + "Texture&nbsp;&nbsp;: Saucy, Succulent, Creamy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Shrimp Alfredo';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Our signature Alfredo sauce, crafted with the finest ingredients, boasts a velvety texture that caresses your palate with each bite. Creamy and rich, the sauce harmonizes perfectly with the tender shrimp, while the freshly grated Parmesan cheese adds a touch of indulgence.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 23.90/pax';
        price.style.letterSpacing = "5px";
    }

    //**Side Dish**//
    //1. Baked Lasagna//
    function lasagna(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/side-dish/lasagna.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Lasagne Pasta, Chicken, Cheese, Lasagne Filling, Parsley" + "<br><br>" + "Category: Side Dish" + "<br>" + "Texture&nbsp;&nbsp;: Saucy, Savoury, Cheesy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Baked Lasagna';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Each bite reveals a symphony of flavors, as the sauce melds with the perfectly seasoned ground meat, and the cheeses melt to create a creamy, indulgent texture. Crafted with the finest ingredients and slow-baked to perfection, our lasagna delivers a comforting and satisfying dining experience.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 9.90/pax';
        price.style.letterSpacing = "5px"; 
    }
    //2. Garden Salad//
    function garden_salad(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/side-dish/garden_salad.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Lettuce, Slices of Tomatoes, Cucumber, Avocadoes, Carrots, Salad Sauce" + "<br><br>" + "Category: Side Dish" + "<br>" + "Texture&nbsp;&nbsp;: Succulent, Juicy, Crunchy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Garden Salad';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Crisp and vibrant mixed greens provide the perfect foundation, while juicy cherry tomatoes burst with sweetness. Indulge in the satisfying crunch of cucumbers, carrots, and bell peppers, perfectly complemented by the velvety smoothness of creamy avocado slices. Each bite is a celebration of nature&rsquo;s bounty, enhanced by our signature dressing that tantalizes your taste buds. '
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 7.00/pax';
        price.style.letterSpacing = "5px"; 
    }
    //3. Quesadilla//
    function quesadilla(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/side-dish/quesadilla.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: High-quality Toasted Tortilla, Cheese, Chicken/Beef/Vegetable Fillings" + "<br><br>" + "Category: Side Dish" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Melt-in-your-mouth"

        document.getElementById('popup-option').style.display = "block";
        document.getElementById('popup-option').style.transform = "translateY(40px)";
        var popupMainOption = document.getElementById('main_option');
        var mainOptionValues = ['Select Fillings', 'Chicken', 'Beef', 'Vegetable'];

        // Clear existing main options
        popupMainOption.innerHTML = '';
        
        for (let i = 0; i < mainOptionValues.length; i++) {
        let mainOption = document.createElement('option');
        mainOption.text = mainOptionValues[i];
        if (i === 0) {
            mainOption.disabled = true;
            mainOption.selected = true;
        }
        
        mainOption.value = mainOptionValues[i];
        popupMainOption.add(mainOption);
        }

        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Quesadilla';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Savor the essence of culinary perfection with our premium quesadilla. Immerse yourself in a symphony of textures as the crispy tortilla embraces the melted blend of exquisite cheeses. Indulge in the tender, succulent bites of perfectly grilled protein, harmonizing with sautéed vegetables for a delightful crunch.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 10.50/pax';
        price.style.letterSpacing = "5px"; 
    }
    //4. Potato Wedges//
    function wedges(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/side-dish/wedges.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Potato, Salt" + "<br><br>" + "Category: Side Dish" + "<br>" + "Texture&nbsp;&nbsp;: Crispy, Savoury"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Potato Wedges';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Crafted with the finest potatoes and expertly seasoned, our fried wedges are a crispy delight that will satisfy your cravings. Whether enjoyed on their own or as a perfect accompaniment to your favorite dipping sauces, these indulgent wedges elevate any meal.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 6.50/pax';
        price.style.letterSpacing = "5px"; 
    }
    //**Beverages**//
    //1. Hot Chocolate//
    function hot_chocolate(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/beverages/hot_chocolate.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Premium Dark Chocolate, Milk, Whipped Cream, Cocoa Powder" + "<br><br>" + "Category: Beverage" + "<br>" + "Taste&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Creamy, Rich, Thick"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Hot Chocolate';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'The richness of the chocolate dances harmoniously with the velvety milk, creating a luscious experience that warms your soul. Elevate your hot chocolate experience and savor the symphony of flavors and the divine texture of our premium creation. Allow yourself to be enveloped in pure bliss with every sip.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 5.20/pax';
        price.style.letterSpacing = "5px"; 
    }
    //2. Mixed Berries Smoothie//
    function mixed_berries_smoothie(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/beverages/mixed_berries_smoothie.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Fresh Strawberries, Blueberries, Greek Yogurt, Milk" + "<br><br>" + "Category: Beverage" + "<br>" + "Taste&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Creamy, Refreshing, Thick"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Mixed Berries Smoothie';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Each sip bursts with the natural sweetness of the berries, delivering a refreshing and rejuvenating experience. Crafted with the finest ingredients and packed with antioxidants, our mixed berries smoothie is a delightful treat that nourishes your body and delights your senses.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 12.50/pax';
        price.style.letterSpacing = "5px"; 
    }
    //3. Peach Soda Float//
    function peach_soda_float(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/beverages/peach_soda_float.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Fresh Peaches, Premium Peach Soda, Vanilla Ice Cream" + "<br><br>" + "Category: Beverage" + "<br>" + "Taste&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Creamy, Refreshing, Effervescent"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Peach Soda Float';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Experience the creamy decadence as it mingles with our luxurious vanilla ice cream, creating a luscious texture that will transport you to paradise. Each sip is a harmonious blend of effervescence and creaminess, tantalizing your taste buds and cooling your palate. Treat yourself to the ultimate indulgence with our premium peach soda float, where every sip is a moment of pure bliss.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 9.80/pax';
        price.style.letterSpacing = "5px"; 
    }
    //4. Shirley Cocktail//
    function shirley_cocktail(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/beverages/shirley_cocktail.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Grenadine Syrup, Lemon-lime Soda, Maraschino Cherries" + "<br><br>" + "Category: Beverage" + "<br>" + "Taste&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Syrupy, Juicy, Effervescent"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Shirley Cocktail';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Savor the juicy burst of maraschino cherries that add a touch of luxury to every sip. Each sip is a harmonious symphony of flavors and textures, creating a non-alcoholic cocktail that is both refreshing and visually stunning. Treat yourself to the ultimate sensory delight with our premium Shirley Cocktail, where every sip is an invitation to savor the moment.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 22.00/pax';
        price.style.letterSpacing = "5px"; 
    }
    //**Desserts**//
    //1. New York Cheese Cake//
    function cheese_cake(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/desserts/cheese_cake.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Cream Cheese, Sugar, Eggs, Butter, Cream, Milk, Vanilla, Whipped Cream, Fresh Strawberry" + "<br><br>" + "Category: Dessert" + "<br>" + "Texture&nbsp;&nbsp;: Fluffy, Cheesy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'New York Cheese Cake';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Crafted with the finest ingredients, our cheesecake boasts a luscious cream cheese filling that is delicately balanced with just the right amount of sweetness. The buttery graham cracker crust provides the perfect foundation, adding a satisfying crunch to each bite.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 6.20/slice';
        price.style.letterSpacing = "5px"; 
    }
    //2. Mango Sago in Coconut Milk//
    function mango_sago_in_coconut_milk(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/desserts/mango_sago_in_coconut_milk.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Mango Cubes, Sago, Coconut Milk" + "<br><br>" + "Category: Dessert" + "<br>" + "Texture&nbsp;&nbsp;: Refreshing, Succulent"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Mango Sago in Coconut Milk';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Embark on a tropical paradise with our premium mango sago in coconut milk. Each spoonful is a luxurious escape, with the smooth and velvety texture of the coconut milk enveloping tender sago pearls and juicy mango cubes.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 5.50/pax';
        price.style.letterSpacing = "5px"; 
    }
    //3. Matcha Ice Cream//
    function matcha_ice_cream(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/desserts/matcha_ice_cream.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Matcha Ice Cream, Chocolate Chips, Chocolate Cone/Sundae" + "<br><br>" + "Category: Dessert" + "<br>" + "Texture&nbsp;&nbsp;: Dense, Creamy, Slightly Powdery"

        document.getElementById('popup-option').style.display = "block";
        document.getElementById('popup-option').style.transform = "translateY(40px)";
        var popupMainOption = document.getElementById('main_option');
        var mainOptionValues = ['Select Serving Style', 'Chocolate Cone', 'Sundae'];

        // Clear existing main options
        popupMainOption.innerHTML = '';
        
        for (let i = 0; i < mainOptionValues.length; i++) {
        let mainOption = document.createElement('option');
        mainOption.text = mainOptionValues[i];
        if (i === 0) {
            mainOption.disabled = true;
            mainOption.selected = true;
        }
        
        mainOption.value = mainOptionValues[i];
        popupMainOption.add(mainOption);
        }

        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Matcha Ice Cream';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Experience the perfect harmony of creamy richness and vibrant flavors as our velvety smooth matcha ice cream melts on your tongue. Crafted with the finest ceremonial-grade matcha, each spoonful transports you to a world of authentic Japanese tea culture.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 2.50/pax';
        price.style.letterSpacing = "5px"; 
    }
    //4. Red Rubbies in Coconut Milk//
    function red_rubies_in_coconut_milk(){
        let popupImage = document.getElementById('popupImg');
        popupImage.src = "pictures/menu/food-drinks/desserts/red_rubies_in_coconut_milk.jpg";
        
        let popupDetails = document.getElementById('popup_details');
        popupDetails.innerHTML = "Ingredients: Red Rubies, Coconut Milk, Sago" + "<br><br>" + "Category: Dessert" + "<br>" + "Texture&nbsp;&nbsp;: Silky, Tender, Chewy"

        document.getElementById('popup-option').style.display = "none";
        document.getElementById('popup-sub_option').style.display = "none";
    
        let foodName = document.getElementById('foodName');
        foodName.innerHTML = 'Red Rubbies in Coconut Milk';
        foodName.style.fontSize = "50px";
        foodName.style.margin  = "0";
        foodName.style.letterSpacing = "5px";
        foodName.style.fontWeight = "lighter";

        let foodDescription = document.getElementById('foodDescription');
        foodDescription.innerHTML = 'Treat yourself to the perfect balance of textures and flavors in every spoonful of our premium Red Rubbies in Coconut Milk. Let the luscious coconut milk envelop your senses and transport you to a realm of pure culinary bliss.'
        foodDescription.style.fontSize = "20px";

        let price = document.getElementById('price');
        price.innerHTML = 'RM 5.50/pax';
        price.style.letterSpacing = "5px"; 
    }
