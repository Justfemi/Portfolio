// REAVEALING FUNCTIONALITY

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

sr.reveal('.skills__box', {})
sr.reveal('.skills__box .title', {delay: 200})
sr.reveal('.skills__items', {interval: 200})

sr.reveal('.work__body', {})
sr.reveal('.work__container', {delay: 200})
sr.reveal('.work__panel', {interval: 200})

sr.reveal('.contact__input', {interval: 200})


// WORK SECTION CARDS

const panels = document.querySelectorAll('.work__panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        console.log('panel clicked');
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

// TOGGLE NAV ITEM ACTIVE
// let menu = document.querySelector('.nav__menu');
// let navItem = document.querySelectorAll('.nav__menu a');
// // const activePage = window.location.pathname;

// navItem.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log('nav-link clicked');
//         menu.classList.add('active');
//     });
// });

// HAMBURGER FUNCTIONALITY
let menuIcon = document.querySelector('.nav__toggle i');
let menu = document.querySelector('.nav__menu');
let navLinks = document.querySelectorAll('.nav__menu a');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    //chnage menu icon to X
    menuIcon.classList.toggle('bx bx-cancel');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
 