/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav--menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

//faq toggle stuff 
$('.togglefaq').click(function(e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
     $(this).toggleClass('active').next().slideToggle("fast");
     $(this).children('i').toggleClass('icon-plus icon-minus');
     });


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset: true //Animation repeat
})

sr.reveal('.home__data, .Section2__titles, .Section3__title, .FAQ__title, .FAQ__subtitle')
sr.reveal('.Section1__img, .blogs__cards, .footer1__data',{origin: 'right'})
sr.reveal('.Section1__data, .blogs__subtitle, .blogs__title, .blogs__text, .footer1__button',{origin: 'left'})
sr.reveal('.Section2__cards-grid, .Section3__cards, .FAQ__data, .footer2__data',{interval: 400})
sr.reveal('.Section2__cards-grid',{interval: 200})
