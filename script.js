// const showMenu = ( toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if ( toggle && nav ) {
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }//
// showMenu ( 'nav-toggle','nav-menu' )

// let opeNav = document.querySelector('')

// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')

//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show ')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

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

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})

sr.reveal('.work__img', {interval: 200})

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
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
})
