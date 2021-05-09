const dropBtn = document.querySelectorAll(".dropbtn");
const dropdownC = document.querySelectorAll(".dropdown-content");
const active = document.querySelector(".active");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const panelStyles = window.getComputedStyle(menu);
dropBtn.forEach((drop, btnId) =>
  drop.addEventListener("click", (e) => {
    dropdownC.forEach((down, id) => {
      if (btnId === id) {
        down.classList.toggle("show");
        active.classList.remove("active");
      }
    });
  })
);

menuBtn.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    menu.style.clipPath = "circle(100% at 50% 50%)";
    menuBtn.src = "./images/icon-close.svg";
  } else {
    menu.style.clipPath = "circle(0% at 100% 0%)";
    menuBtn.src = "./images/icon-hamburger.svg";
  }
});
