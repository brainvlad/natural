$("#popup-handler").fadeOut(0);
$(".catalog__item").on("click", () => {
  $(".popup__bg").fadeIn(0);
  $("#popup-handler").fadeIn(200);
});
$("#popup-close").on("click", () => {
  $(".popup__bg").fadeOut(300);
  $("#popup-handler").fadeOut(150);
});
