'use strict';

const modal = document.getElementById("modalBG");
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("modal__close")[0];
const okey = document.getElementById("modalOkey");
const cancel = document.getElementById("modalCancel");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on Okey, close the modal and clg-Okey
okey.onclick = function() {
    modal.style.display = "none";
    console.log('Okey');
}

// When the user clicks on Cancel, close the modal and clg-Cancel
cancel.onclick = function() {
    modal.style.display = "none";
    console.log('Cancel');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}