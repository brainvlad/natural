$(document).ready(function () {
  $("#novetly-slider").slick({
    centerMode: true,
    dots: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $("#novetly-nav"),
    appendDots: $("#novetly-nav"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        centerMode: false,
      },
    ],
  });
});
