$(document).ready(function () {
  $("#blog-slider").slick({
    dots: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $("#blog-slider-nav"),
    appendDots: $("#blog-slider-nav"),
  });
});
