// Remove theme toggle functionality completely
// Also no icon updates or localStorage handling

// Active section highlighting on scroll
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}

// Typing Effect
const typedTextSpan = document.getElementById("typing-text");
const phrases = ["B.Tech Student", "Web Developer", "Full Stack Enthusiast", "Tech Explorer"];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY_BEFORE_DELETE = 800;
const DELAY_BEFORE_TYPE = 300;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, DELAY_BEFORE_DELETE); // Pause before deleting
      return;
    }
  } else {
    typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, DELAY_BEFORE_TYPE); // Pause before typing next word
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? DELETING_SPEED : TYPING_SPEED);
}

document.addEventListener("DOMContentLoaded", () => {
  // Force dark-mode class always ON
  document.body.classList.add('dark-mode');
  typeEffect();
});
