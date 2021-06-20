const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
console.log(menuBtn);
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
