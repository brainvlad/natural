$(document).ready(function () {
  $("#catalog-slider").slick({
    dots: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $("#catalog-slider-nav"),
    appendDots: $("#catalog-slider-nav"),
  });
});
