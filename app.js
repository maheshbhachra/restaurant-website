const menuToggle = document.querySelector('.menu-toggle');
const linksContainer = document.querySelector('.links-container');

menuToggle.addEventListener('click', () => {
  linksContainer.classList.toggle('active');
});


const heroImages = document.querySelectorAll(".hero-img");

let currentIndex = 0;

heroImages[currentIndex].classList.add("active");

function changeHeroImage() {
  heroImages[currentIndex].classList.remove("active");
  currentIndex = currentIndex + 1;

  if (currentIndex >= heroImages.length) {
    currentIndex = 0;
  }

  heroImages[currentIndex].classList.add("active");
}

setInterval(changeHeroImage, 3000);



const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Reservation request received! We’ll contact you shortly.");
  reservationForm.reset();
});


