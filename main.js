const mobileIcon = document.querySelector(".mobile-icon");
const navLinks = document.querySelector(".nav-links");
mobileIcon.addEventListener("click", ()=>{
    mobileIcon.classList.toggle("active")
    navLinks.classList.toggle("active")
 });
 const header = document.querySelector("header");
 window.addEventListener("scroll",()=>{
    if(window.scrollY > 40){
        header.classList.add("fixed");
    } else{
        header.classList.remove("fixed")
    }
 });
   const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });