// hamburger up and down
const toggleHeight = document.querySelector('.toggle-height')
const megaDrop = document.querySelector('.mega-dropdown')
console.log(toggleHeight)
toggleHeight.addEventListener('click' , () =>{
    megaDrop.classList.toggle('height')
})

// responsive navbar
const hamburger = document.querySelector('.hamburger')
const wrapper = document.querySelector('.wrapper')

hamburger.addEventListener('click' , ()=>{
    wrapper.classList.toggle('active')
})

// for scroll effect in navbar
let nav = document.querySelector('nav')
window.addEventListener('scroll' , ()=>{
    nav.classList.toggle('scroll-active' , window.scrollY > 0);
})

// swiper js

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay:{
          delay:2000,
          disableOnInteraction: true,
      },
      breakpoints:{
          0:{
            slidesPerView:1 ,
            slidesPerGroup:1,
            spaceBetween:30,
          },
          600:{
              slidesPerView:2,
              slidesPerGroup:2,
              spaceBetween:20,
          },
          1000:{
              slidesPerView:3,
              spaceBetween:10,
          }

      }
  });

// Swipe up button
let scrollUpBtn =document.querySelector('.scroll-up-button')
window.addEventListener('scroll' , () =>{
    scrollUpBtn.classList.toggle('active' , window.scrollY > 500);
})
scrollUpBtn.addEventListener('click' , () =>{
    window.scrollTo(0 , 0)

    // I could've used options instead
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behaviour:'smooth'
    // })
    // scroll behaviour was already smooth in css of html scroll behaviour smooth so simple scrollTo() will do 
    
})