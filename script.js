// REAVEALING FUNCTIONALITY

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 100})
sr.reveal('.home__img', {delay: 200})
sr.reveal('.home__social-icon', {interval: 100})

sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 100})
sr.reveal('.about__text', {delay: 200})

sr.reveal('.skills__box', {})
sr.reveal('.skills__box .title', {delay: 100})
sr.reveal('.skills__items', {interval: 100})

sr.reveal('.work__body', {})
sr.reveal('.work__container', {delay: 100})
// sr.reveal('.work__panel', {interval: 100})

sr.reveal('.contact__input', {interval: 100})


// HAMBURGER FUNCTIONALITY
let menuIcon = document.querySelector('.nav__toggle i');
let menu = document.querySelector('.nav__menu');
let navLinks = document.querySelectorAll('.nav__menu a');

menuIcon.addEventListener('click', () => {
    // console.log('clicked')
    menu.classList.toggle('show');
    //chnage menu icon to X
    menuIcon.classList.toggle('bx bx-cancel');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
