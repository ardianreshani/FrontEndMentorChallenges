const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");
const exitBtn = document.querySelector(".exit-btn");
const link = document.querySelector("ul");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});
// exitBtn.addEventListener("click", () => {
//   menu.style.transform = "translateX(100%)";
// });

link.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
