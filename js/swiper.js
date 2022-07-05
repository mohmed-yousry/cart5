var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  loop: true,
  centeredSlides: true,

  effect: "coverflow", // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows: false, // Enables slides shadows
  },
  // grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: true,
  slidesPerView: 2.5,
  spaceBetween: 0,
centeredSlides : true ,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
  breakpoints: {
      640: {
          slidesPerView: 2.5,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 0,
      },
      1024: {
          slidesPerView: 5,
          spaceBetween: 0,
      },
  },

});

  // loop: true,
  // autoplay: true,
  // slidesPerView: 2.5,
  // spaceBetween: 0,

  // breakpoints: {
  //     640: {
  //         slidesPerView: 2.5,
  //         spaceBetween: 0,
  //     },
  //     768: {
  //         slidesPerView: 4,
  //         spaceBetween: 0,
  //     },
  //     1024: {
  //         slidesPerView: 5,
  //         spaceBetween: 0,
  //     },
  // },
