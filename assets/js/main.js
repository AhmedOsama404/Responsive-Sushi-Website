/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav__menu'),
navToggle = document.getElementById('nav__toggle'),
navClose=document.getElementById('nav__close')

if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
    
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    });
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(link => link.addEventListener('click',()=>{
    
    navMenu.classList.remove('show-menu')
    })
    
);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
const header = document.getElementById('header')
this.scrollY >=50 ? header.classList.add('bg-header')
:header.classList.remove('bg-header')

}
window.addEventListener('scroll', scrollHeader);



/*=============== SHOW SCROLL UP ===============*/ 
const goToTopButton = document.getElementById('scroll-up');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    goToTopButton.classList.add('active');
  } else {
    goToTopButton.classList.remove('active');
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
      distance: '60px',
      origin: 'top',
      duration: 2500,
      delay: 300,
      reset:true
    });
    sr.reveal('.home__img,.newsletter__container,.footer__logo,.footer__description,.footer__content',);
    sr.reveal('.home__data', { origin: 'bottom' });
    sr.reveal('.about__data,.recently__data',{origin:'left'});
    sr.reveal('.about__img,.recently__img',{origin:'right'});
    sr.reveal('.popular__card',{interval:100});


    
  });
  