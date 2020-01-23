const bookmarkBtnDown = document.querySelector(".bookmark_btn_down");
const bookmarkBtnUp = document.querySelector(".bookmark_btn_up");
const bookmarkPage = document.querySelector(".bookmark_inven");

const friendsBtnDown = document.querySelector(".friends_btn_down");
const friendsBtnUp = document.querySelector(".friends_btn_up");
const friendPage = document.querySelector(".friends_inven");

function BookPageDown() {
  bookmarkPage.classList.toggle("on");
  bookmarkBtnUp.classList.remove("display_none");
  bookmarkBtnDown.classList.add("display_none");
}
function BookPageUp() {
  bookmarkPage.classList.toggle("on");
  bookmarkBtnDown.classList.remove("display_none");
  bookmarkBtnUp.classList.add("display_none");
}

function FriendsPageUp() {
  friendPage.classList.toggle("on");
  friendsBtnUp.classList.add("display_none");
  friendsBtnDown.classList.remove("display_none");
}

function FriendsPageDown() {
  friendPage.classList.toggle("on");
  friendsBtnUp.classList.remove("display_none");
  friendsBtnDown.classList.add("display_none");
}

function init() {
  bookmarkBtnDown.addEventListener("click", BookPageDown);
  bookmarkBtnUp.addEventListener("click", BookPageUp);
  friendsBtnUp.addEventListener("click", FriendsPageUp);
  friendsBtnDown.addEventListener("click", FriendsPageDown);
}

init();
