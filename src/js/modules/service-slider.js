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

(() => {
  const projectsSlider = document.querySelector(
    "section.projects .projects__slider .swiper-container"
  );

  if (projectsSlider) {
    const projectsSwiperSlider = new window.Swiper(projectsSlider, {
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
            nextEl: "section.projects .projects__slider-arrow--next",
            prevEl: "section.projects .projects__slider-arrow--prev"
          }
        }
      }
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
