window.onload = function () {
  const navOpen = document.querySelector(".heading__nav--open"),
    navClose = document.querySelector(".heading__nav--close"),
    navPoup = document.querySelector(".heading__nav--popup"),
    warp = document.querySelector(".warp");

  // nav
  navOpen.addEventListener("click", () => {
    navPoup.classList.add("heading__nav--on");
    warp.classList.add("warp__on");
  });
  navClose.addEventListener("click", () => {
    navPoup.classList.remove("heading__nav--on");
    warp.classList.remove("warp__on");
  });
};
