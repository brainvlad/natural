$(document).ready(function () {
  $("#why-slider").slick({
    dots: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $(".why__nav"),
    appendDots: $(".why__nav"),
  });
});
