(function() {
  let serviceSlider = document.querySelector(
    ".service__slider .swiper-container"
  );

  if (serviceSlider && !window.isDesktop()) {
    let serviceSwiperSlider = new Swiper(serviceSlider, {
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 7,
      breakpoints: {
        768: {
          spaceBetween: 0
        },
        1280: {}
      }
    });
  }
})();

(function() {
  let projectsSlider = document.querySelector(
    ".projects__slider .swiper-container"
  );

  if (projectsSlider) {
    let projectsSwiperSlider = new Swiper(projectsSlider, {
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 17,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 32
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
          navigation: {
            nextEl: ".projects__slider-arrow--next",
            prevEl: ".projects__slider-arrow--prev"
          }
        }
      }
    });
  }
})();

(function() {
  let projectsSliderPU = document.querySelector(
    ".projects__slider--popup .swiper-container"
  );

  if (projectsSliderPU) {
    let projectsSwiperSlider = new Swiper(projectsSliderPU, {
      loop: true,
      breakpointsInverse: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
      // breakpoints: {
      //   // 1024: {
      //   //   slidesPerView: 3,
      //   //   spaceBetween: 32
      //   // },
      //   // 1280: {
      //   //   slidesPerView: 3,
      //   //   spaceBetween: 32,
      //   //   navigation: {
      //   //     nextEl: ".projects__slider-arrow--next",
      //   //     prevEl: ".projects__slider-arrow--prev"
      //   //   }
      //   // }
      // }
    });
  }
})();
(function() {
  let mediaSlider = document.querySelector(".media__slider .swiper-container");

  if (mediaSlider) {
    let mediaSwiperSlider = new Swiper(mediaSlider, {
      // navigation: {
      //   nextEl: ".feedback__slider-arrow--next",
      //   prevEl: ".feedback__slider-arrow--prev"
      // },
      loop: true,
      breakpointsInverse: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      breakpoints: {
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
          navigation: {
            nextEl: ".media__slider-arrow--next",
            prevEl: ".media__slider-arrow--prev"
          }
        }
      }
    });
  }
})();
