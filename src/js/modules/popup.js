(() => {
  const mainContainer = document.querySelector(
    "section.projects .projects__slider .swiper-container"
  );
  const popupContainer = document.querySelector(
    ".popup-container .projects__slider .swiper-container"
  );
  if (!popupContainer) return;
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".popup__close");
  const body = document.querySelector("body");

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
    const popupSlides = popupContainer.querySelectorAll(".swiper-slide");
    popupSlides.forEach(slide => {
      slide.classList.add("swiper-slide--popup");
    });
  };

  const openPopup = index => {
    popup.classList.add("popup--show");
    body.classList.add("show");
    initSwiper();
    popupSwiper.slideTo(index, 0);
    // $('body').css("overflow-y", "hidden");
    window.bodyScrollLock.disableBodyScroll(popup);
  };

  const closePopup = () => {
    popup.classList.remove("popup--show");
    body.classList.remove("show");
    $("body").css("overflow-y", "visible");
    setTimeout(destroySwiper, 300);
    window.bodyScrollLock.enableBodyScroll(popup);
  };

  copySlidesContent();
  document.addEventListener("click", evt => {
    if (!evt.target || !evt.target.parentNode) {
      return;
    }
    const parent = evt.target.parentNode;
    if (
      parent.classList.contains("swiper-slide--project") &&
      !parent.classList.contains("swiper-slide--popup")
    ) {
      const id = parseInt(parent.dataset.slideId, 10);
      openPopup(id);
      return;
    }

    const parentParent = parent.parentNode;
    if (
      parentParent &&
      parentParent.classList.contains("swiper-slide--project") &&
      !parentParent.classList.contains("swiper-slide--popup")
    ) {
      const id = parseInt(parentParent.dataset.slideId, 10);
      openPopup(id);
    }
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
