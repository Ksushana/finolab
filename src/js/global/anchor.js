$(document).ready(function() {
  $("#links").on("click", "a.header__link--phone", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top + $(id).height() / 0.5 - $(window).height() / 2;
    setTimeout(() => $("body,html").animate({ scrollTop: top }, 1000), 500);
  });
});
