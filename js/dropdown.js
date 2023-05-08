$(function () {
  $(".dropdown__toggle.active").next(".dropdown").slideToggle(0);
  $(".dropdown__toggle").click(function () {
    $(this).toggleClass("active");
    $(this).next(".dropdown").slideToggle(150);
  });
});
