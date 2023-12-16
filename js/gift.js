
var to = 'My Love!';
var gift_url = '';
var gift_image_url = '';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var closeModal = document.getElementById("btn__close__modal");
var presentImage = document.getElementById("present-image");
var card = document.getElementById("card");

function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){

    present.classList.toggle("open");
    setTimeout(() => {
        card.className = 'card-show';
        // card.classList.add("card-show");
    }, 1000);
    
  }, false);
  
  closeModal.addEventListener("click", function(e){

     card.className = 'card-hiden';
    // card.classList.add("card-hiden");
    setTimeout(() => {
        card.className = '';
        present.classList.toggle("open");
    }, 2000);
    
    
  }, false);
  
  nametag.innerText = to;
}

init();

