$(document).ready(function () {
  $("#review-slider").slick({
    centerMode: true,
    dots: true,
    variableWidth: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $("#review-nav"),
    appendDots: $("#review-nav"),
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
