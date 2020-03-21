(function() {
  let serviceSlider = document.querySelector(
    ".service__slider .swiper-container"
  );

  if (serviceSlider && !window.isTabletMin()) {
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
  if (!projectsSlider) {
    return;
  }

  const mustUseSlider = () => {
    const slides = projectsSlider.querySelectorAll(".swiper-slide");
    if (window.innerWidth >= 970 && slides.length <= 3) {
      return false;
    }
    return true;
  };

  if (!mustUseSlider()) {
    const arrows = document.querySelectorAll(
      "section.projects .projects__slider-arrow"
    );
    const container = document.querySelector(
      ".projects__slider .swiper-wrapper"
    );
    container.classList.add("space-around");
    arrows.forEach(arrow => arrow.classList.add("visually-hidden"));
    return;
  }

  const projectsSwiperSlider = new window.Swiper(projectsSlider, {
    loop: false,
    breakpointsInverse: true,
    slidesPerView: "auto",
    spaceBetween: 17,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination--pr",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      970: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: false
      },
      1280: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 32,
        navigation: {
          nextEl: "section.projects .projects__slider-arrow--next",
          prevEl: "section.projects .projects__slider-arrow--prev"
        }
      }
    }
  });
})();

(function() {
  const mediaSlider = document.querySelector(
    ".media__slider .swiper-container"
  );
  if (!mediaSlider) {
    return;
  }

  const mustUseSlider = () => {
    const slides = mediaSlider.querySelectorAll(".swiper-slide");
    if (window.innerWidth >= 1000 && slides.length <= 3) {
      return false;
    }
    return true;
  };

  if (!mustUseSlider()) {
    const arrows = document.querySelectorAll(".media__slider-arrow");
    arrows.forEach(arrow => arrow.classList.add("visually-hidden"));
    const container = document.querySelector(".media__slider .swiper-wrapper");
    container.classList.add("space-around");
    const pag = document.querySelector(".media__slider .swiper-pagination");
    pag.classList.add("visually-hidden");
    const slides = document.querySelectorAll(".media__slider .swiper-slide");
    slides.forEach(slide => slide.classList.add("adaptive"));
    return;
  }

  const mediaSwiperSlider = new window.Swiper(mediaSlider, {
    loop: false,
    breakpointsInverse: true,
    slidesPerView: "auto",
    centeredSlidesBounds: true,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination--media",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: false
      },
      1280: {
        slidesPerView: 3,
        centeredSlides: false,
        navigation: {
          nextEl: ".media__slider-arrow--next",
          prevEl: ".media__slider-arrow--prev"
        }
      }
    }
  });
})();
