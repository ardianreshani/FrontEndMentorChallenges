const treDots = document.querySelector(".tredots");
const hide = document.querySelector(".hide");
const panelStyles = window.getComputedStyle(hide);
const hearts = document.querySelectorAll(".far");

treDots.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    hide.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    hide.style.clipPath = "circle(0% at 100% 0%)";
  }
  console.log(panelStyles);
});

document.addEventListener("mouseup", (e) => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
    if (!hide.contains(e.target)) {
      hide.style.clipPath = "circle(0% at 100% 0%)";
    }
  }
});

function changeeart(e) {
  e.classList.toggle("fas");
  e.classList.toggle("far");
}
