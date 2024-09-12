const burgerIcon = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const burgerLink = document.querySelector(".header__item-link");
const burgerMenuOp = document.querySelector(".header__right");
const logo = document.querySelector(".header__logo");

function closeBurgerMenu() {
  burgerMenuOp.classList.remove("header__right--visible");
  overlay.classList.remove("overlay--visible");
  burgerIcon.classList.remove("burger--active");
  logo.classList.remove("header__logo--visible");
}
function toggleBurgerMenu() {
  burgerMenuOp.classList.toggle("header__right--visible");
  overlay.classList.toggle("overlay--visible");
  burgerIcon.classList.toggle("burger--active");
  logo.classList.toggle("header__logo--visible");
}
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.classList.contains("burger")) {
    toggleBurgerMenu();
  } else if (target &&(target.classList.contains("header__item") || target.classList.contains("overlay"))) {
    closeBurgerMenu();
  }
});
