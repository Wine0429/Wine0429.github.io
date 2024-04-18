
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImg");

// Function to open modal
function openModal(imgUrl) {
  modal.style.display = "block";
  modalImg.src = imgUrl;
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
