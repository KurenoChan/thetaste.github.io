// Booking Page //
function showhide_order(){
  document.getElementById('qty').innerHTML = 1;
    let popup_Room = document.getElementById('popupRoom');
    popup_Room.style.display = 'block';
    popup_Room.style.zIndex = '100';

    var sections = document.querySelectorAll('section');
    sections.forEach(function(section){
        section.style.opacity = '0.5';
    })

    document.getElementById('close_popup').onclick = function(){
        document.getElementById('popupRoom').style.display = 'none';
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section){
            section.style.opacity = '1';
        })
        document.getElementById('popupRoom').style.backgroundColor = "rgb(21,21,21)";
        document.getElementById('popup-option').style.transform = "translateY(0)";
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

function reserveRoom(sectionId){
    document.getElementById('popupRoom').style.display = 'none';
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section){
        section.style.opacity = '1';
    })
    document.getElementById('popup-option').style.display = "none";
    document.getElementById('popup-sub_option').style.display = "none";

    const section = document.querySelector(sectionId);
    section.scrollIntoView();
}

//**Room Booking**//
//1. The Amber//
function the_amber(){
    let popupImage = document.getElementById('popupImg');
    popupImage.src = "../../pictures/booking/amber_room.jpg";

    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Facilities: FHD Movie Screen, Comfortable Seatings, Concessions" + "<br><br>" + "Ratings: &#10031;&#10031;&#10031;&#9734;&#9734;<br>Ambience: Simple D&#233;cor, Relaxed, Social Setting";

    // AI-Generated
    document.getElementById('popup-option').style.display = "block";
    document.getElementById('popup-sub_option').style.display = 'block';
    var popupMainOption = document.getElementById('main_option');
    var mainOptionValues = ['Select Movie Exprerience', 'Classic' ,'4K Movie (+ RM 10)', '8K Movie (+ RM 20)'];
  
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
    var subOptionValues = ['Select Seating Experience', 'Classic', 'Massage Chair (+ RM 10)'];
  
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
    // End of AI-Generated
    
    let roomName = document.getElementById('roomName');
    roomName.innerHTML = 'The Amber';
    roomName.style.fontSize = "50px";
    roomName.style.margin  = "0";
    roomName.style.letterSpacing = "5px";
    roomName.style.fontWeight = "lighter";

    let roomDescription = document.getElementById('roomDescription');
    roomDescription.innerHTML = 'Escape the mundane and embrace the joy of cinema at The Amber. Discover an economy cinema that values your entertainment experience and your budget. Join us for an unforgettable movie adventure today!'
    roomDescription.style.fontSize = "20px";

    let price = document.getElementById('price');
    price.innerHTML = 'RM 15/pax';
    price.style.letterSpacing = "5px";
}
//2. Deluxe//
function deluxe(){
    let popupImage = document.getElementById('popupImg');
    popupImage.src = "../../pictures/booking/deluxe_room.jpg";

    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Facilities: UHD Movie Screen, Leather Seatings, Concessions" + "<br><br>" + "Ratings: &#10031;&#10031;&#10031;&#10031;&#9734;<br>Ambience: Luxurious, Cozy, Twin Seatings";

    // AI-Generated
    document.getElementById('popup-option').style.display = "block";
    document.getElementById('popup-sub_option').style.display = 'block';
    var popupMainOption = document.getElementById('main_option');
    var mainOptionValues = ['Select Movie Exprerience', 'Classic' ,'4K Movie (+ RM 10)', '8K Movie (+ RM 20)'];
  
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
    var subOptionValues = ['Select Seating Experience', 'Classic', 'Massage Chair (+ RM 10)'];
  
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
    // End of AI-Generated
    
    let roomName = document.getElementById('roomName');
    roomName.innerHTML = 'Deluxe';
    roomName.style.fontSize = "50px";
    roomName.style.margin  = "0";
    roomName.style.letterSpacing = "5px";
    roomName.style.fontWeight = "lighter";

    let roomDescription = document.getElementById('roomDescription');
    roomDescription.innerHTML = 'Indulge in the epitome of luxury at Deluxe, where every aspect of your movie-going journey is meticulously crafted to exceed your expectations. Step into a realm of opulence and prepare for an extraordinary cinematic adventure like no other.'
    roomDescription.style.fontSize = "20px";

    let price = document.getElementById('price');
    price.innerHTML = 'RM 25/pax';
    price.style.letterSpacing = "5px";
}
//3. The Oracle//
function the_oracle(){
    let popupImage = document.getElementById('popupImg');
    popupImage.src = "../../pictures/booking/oracle_room.jpg";

    let popupDetails = document.getElementById('popup_details');
    popupDetails.innerHTML = "Facilities: 8K Movie Screen, Recliner Sofas, Concessions" + "<br><br>" + "Ratings: &#10031;&#10031;&#10031;&#10031;&#10031;<br>Ambience: Premium, Cozy, Twin Seatings";

    // AI-Generated
    document.getElementById('popup-option').style.display = "block";
    document.getElementById('popup-sub_option').style.display = 'block';
    var popupMainOption = document.getElementById('main_option');
    var mainOptionValues = ['Select Movie Exprerience', 'Classic' ,'4K Movie (+ RM 10)', '8K Movie (+ RM 20)'];
  
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
    var subOptionValues = ['Select Seating Experience', 'Classic', 'Massage Chair (+ RM 10)'];
  
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
    // End of AI-Generated
    
    let roomName = document.getElementById('roomName');
    roomName.innerHTML = 'The Oracle';
    roomName.style.fontSize = "50px";
    roomName.style.margin  = "0";
    roomName.style.letterSpacing = "5px";
    roomName.style.fontWeight = "lighter";

    let roomDescription = document.getElementById('roomDescription');
    roomDescription.innerHTML = 'Prepare to be mesmerized as you enter The Oracle, a sanctuary of cinematic perfection. Immerse yourself in an exquisitely designed space that combines sleek sophistication with unmatched attention to detail. Every aspect of our luxurious surroundings has been meticulously crafted to transport you into a world of pure enchantment.'
    roomDescription.style.fontSize = "20px";

    let price = document.getElementById('price');
    price.innerHTML = 'RM 50/pax';
    price.style.letterSpacing = "5px";
}