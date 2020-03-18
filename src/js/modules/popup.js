(function() {
  const slide = document.querySelector(".projects .swiper-slide");
  const popup = document.querySelector(".popup");
  const close = document.querySelector(".popup__close");

  const openPopup = () => {
    popup.classList.add(`popup--show`);
    $(`body`).css("overflow-y", "hidden");
    window.bodyScrollLock.disableBodyScroll(popup);
    // info.ontouchmove = function(e) {
    //   e.preventDefault();
    // };
  };

  const closePopup = () => {
    popup.classList.remove(`popup--show`);
    $(`body`).css("overflow-y", "visible");
    window.bodyScrollLock.enableBodyScroll(popup);
    // setTimeout(() => $(info).css("opacity", 0), 500);

    // setTimeout(() => returnContainer, 500);
    // info.ontouchmove = function(e) {
    //   return true;
    // };
  };

  slide.addEventListener(`click`, () => {
    window.setTimeout(openPopup, 100);
  });

  close.addEventListener(`click`, () => {
    window.setTimeout(closePopup, 100);
  });

  // helpers

  function getScale(element) {
    return element.getBoundingClientRect().width / element.offsetWidth;
  }
})();
