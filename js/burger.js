function burgerMenu(selector) {
  const btnOpen = $("#burger-open");
  const btnClose = $("#burger-close");
  const burgerMenu = $("#burger-menu");

  btnOpen.on("click", function () {
    burgerMenu.toggleClass("active");
  });
  btnClose.on("click", function () {
    burgerMenu.toggleClass("active");
  });
}

burgerMenu(".burger-menu");
