var mySwiper = new Swiper('.swiper-container', {
     // Optional parameters
     loop: true,

     // If we need pagination
     pagination: {
          el: '.swiper-pagination',
     },

     // Navigation arrows
     navigation: {
          nextEl: '.slider__next',
          prevEl: '.slider__prev',
     },

})

var sliderBottom = new Swiper('.slider-bottom__container', {
     pagination: {
          el: '.slider-bottom-pagination',
     },
     navigation: {
          nextEl: '.slider-bottom__btn-next',
          prevEl: '.slider-bottom__btn-prev',
     },
     breakpoints: {
          240: {
               slidesPerView: 1,
               spaceBetween: 30,
               loop: true,
          },
          540: {
               slidesPerView: 4,
               spaceBetween: 30,
               loop: true,

          },
     }
})


// MENU

let menu = document.querySelector('.menu');
let cross = document.querySelector('.header__link--cross');
let headerList = document.querySelector('.header__list');


menu.addEventListener('click', () => {
     headerList.classList.add('header__list__is-open');
})
cross.addEventListener('click', () => {
     headerList.classList.remove('header__list__is-open');
})
