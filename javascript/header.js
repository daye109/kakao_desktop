const headerContainer = document.querySelector(".header_container");

function headerScroll() {
  const topHeight = window.pageYOffset;
  if (topHeight > 0) {
    headerContainer.classList.add("scroll_on");
  } else {
    headerContainer.classList.remove("scroll_on");
  }
}

function init() {
  window.addEventListener("scroll", headerScroll);
}

init();
