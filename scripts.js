const slides = document.querySelectorAll('.slide-unique');
const prevBtn = document.querySelector('.slider-prev-btn');
const nextBtn = document.querySelector('.slider-next-btn');
let currentIndex = 0;

function showSlide(index) {
  const offset = index * -100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Button event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize
showSlide(currentIndex);
