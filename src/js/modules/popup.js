(() => {
  const mainContainer = document.querySelector(
    "section.projects .projects__slider .swiper-container"
  );
  const popupContainer = document.querySelector(
    ".popup-container .projects__slider .swiper-container"
  );
  if (!popupContainer) return;
  const mainSlides = document.querySelectorAll(".projects .swiper-slide");
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".popup__close");

  let popupSwiper;

  const initSwiper = () => {
    const projectsSliderPU = document.querySelector(
      ".projects__slider--popup .swiper-container"
    );
    popupSwiper = new window.Swiper(projectsSliderPU, {
      loop: true,
      breakpointsInverse: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      breakpoints: {
        1280: {
          navigation: {
            nextEl: ".projects__slider--popup .projects__slider-arrow--next",
            prevEl: ".projects__slider--popup .projects__slider-arrow--prev"
          }
        }
      }
    });
  };

  const destroySwiper = () => {
    popupSwiper.destroy();
  };

  const copySlidesContent = () => {
    popupContainer.innerHTML = mainContainer.innerHTML;
  };

  const openPopup = index => {
    popup.classList.add("popup--show");
    initSwiper();
    popupSwiper.slideTo(index, 0);
    // $('body').css("overflow-y", "hidden");
    // window.bodyScrollLock.disableBodyScroll(popup);
  };

  const closePopup = () => {
    popup.classList.remove("popup--show");
    $("body").css("overflow-y", "visible");
    destroySwiper();
    window.bodyScrollLock.enableBodyScroll(popup);
  };

  copySlidesContent();

  mainSlides.forEach((mainSlide, index) => {
    mainSlide.addEventListener("click", () => {
      openPopup(index + 1);
    });
  });

  close.addEventListener("click", () => {
    closePopup();
  });
  window.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
      closePopup();
    }
  });
})();