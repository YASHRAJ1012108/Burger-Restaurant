

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal  ().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuBtn.querySelector('i').classList.toggle('ri-close-line');
  menuBtn.querySelector('i').classList.toggle('ri-menu-line');
});

// Close Mobile Menu on Click
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuBtn.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line');
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});



// ScrollReveal Animations
ScrollReveal().reveal('.header__content, .banner__card, .order__card', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200,
  interval: 200,
  reset: true
});

ScrollReveal().reveal('.event__content, .reservation__container', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  reset: true
});

// Carousel Initialization
const myCarousel = new bootstrap.Carousel('#burgerCarousel', {
  interval: 3000,
  wrap: true
});

// Form Handling
document.querySelector('.reservation__container form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Table reservation request received! We will contact you shortly.');
  this.reset();
});

document.querySelectorAll('.modal form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your authentication logic here
    alert('Form submitted successfully!');
    this.reset();
    bootstrap.Modal.getInstance(this.closest('.modal')).hide();
  });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav__links li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href') === `#${current}`) {
      li.classList.add('active');
    }
  });
});
