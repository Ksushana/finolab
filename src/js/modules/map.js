(ymaps => {
  function getCenter() {
    if (window.isMobile()) {
      return [55.725739, 37.679667];
    }

    if (window.isTablet()) {
      return [55.715332, 37.679853];
    }

    if (window.isLaptop()) {
      return [55.726546, 37.719319];
    }

    return [55.726546, 37.719319];
  }

  function init() {
    const placemarkCoordinates = [55.715332, 37.679853];
    const center = getCenter();
    const myMap = new ymaps.Map("map", {
      center,
      zoom: 13,
      controls: []
    });

    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(`
      <div class="location__address">
        <h2>Финолаб.ру</h2>
        <a>г. Москва, ул.Шарикоподшипниковская,д.17</a>
        <a href="tel:+74953874235">+7 495 387-42-35</a>
        <a href="mailto:hello@finolab.ru">hello@finolab.ru</a>
      </div>
    `);

    const myPlacemarkWithContent = new ymaps.Placemark(
      placemarkCoordinates,
      {},
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        // iconImageHref: "images/ball.png",
        // Размеры метки.
        iconImageSize: [0, 0],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, -234],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 20],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      }
    );
    myPlacemarkWithContent.options.set("iconPane", "overlaps");
    myMap.geoObjects.add(myPlacemarkWithContent).add(myPlacemarkWithContent);
    myMap.behaviors.disable([
      "drag",
      "scrollZoom",
      "dblClickZoom",
      "multiTouch",
      "rightMouseButtonMagnifier",
      "leftMouseButtonMagnifier",
      "ruler"
    ]);
  }

  ymaps.ready(init);
})(window.ymaps);
