const hamburger = document.querySelector(".ham-menu");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

hamburgerBtn.addEventListener("click", () => {
  if (!hamburgerOpen) {
    hamburgerBtn.classList.add("open");
    hamburgerOpen = true;
  } else {
    hamburgerBtn.classList.remove("open");
    hamburgerOpen = false;
  }
});
