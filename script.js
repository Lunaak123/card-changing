function randomText() {
    const text = ["❤️"]; // Heart emoji for the rain
    return text[Math.floor(Math.random() * text.length)];
}

function rain() {
    const rainArea = document.querySelector('.rain-area');
    const drop = document.createElement('div');
    drop.classList.add('drop');
    rainArea.appendChild(drop);

    // Randomize position, size, and duration
    const left = Math.random() * window.innerWidth;
    const size = 0.8 + Math.random() * 1.5;
    const duration = 2 + Math.random() * 3;

    drop.innerText = randomText();
    drop.style.left = `${left}px`;
    drop.style.fontSize = `${size}em`;
    drop.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        drop.remove();
    }, duration * 1000);
}

// Start heart rain from below the cloud
setInterval(() => {
    rain();
}, 20);

// Slider functionality
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSliderPosition();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
