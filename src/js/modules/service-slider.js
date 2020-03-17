(function() {
  var serviceSlider = document.querySelector(
    ".service__slider .swiper-container"
  );

  if (serviceSlider) {
    var serviceSwiperSlider = new Swiper(serviceSlider, {
      // navigation: {
      //   nextEl: ".feedback__slider-arrow--next",
      //   prevEl: ".feedback__slider-arrow--prev"
      // },
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 7,
      breakpoints: {
        768: {
          spaceBetween: 36,
          loop: false,
          centeredSlides: true
        },
        1200: {
          slidesPerColumn: 1,
          spaceBetween: 30,
          loop: true
        }
      }
    });
  }
})();

(function() {
  var projectsSlider = document.querySelector(
    ".projects__slider .swiper-container"
  );

  if (projectsSlider) {
    var projectsSwiperSlider = new Swiper(projectsSlider, {
      // navigation: {
      //   nextEl: ".feedback__slider-arrow--next",
      //   prevEl: ".feedback__slider-arrow--prev"
      // },
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 17,
      breakpoints: {
        768: {
          spaceBetween: 36,
          loop: false,
          centeredSlides: true
        },
        1200: {
          slidesPerColumn: 1,
          spaceBetween: 30,
          loop: true
        }
      }
    });
  }
})();

(function() {
  var mediaSlider = document.querySelector(".media__slider .swiper-container");

  if (mediaSlider) {
    var mediaSwiperSlider = new Swiper(mediaSlider, {
      // navigation: {
      //   nextEl: ".feedback__slider-arrow--next",
      //   prevEl: ".feedback__slider-arrow--prev"
      // },
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      breakpoints: {
        768: {
          spaceBetween: 36,
          loop: false,
          centeredSlides: true
        },
        1200: {
          slidesPerColumn: 1,
          spaceBetween: 30,
          loop: true
        }
      }
    });
  }
})();
