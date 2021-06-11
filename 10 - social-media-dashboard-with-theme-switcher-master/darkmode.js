let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode");
const swicht = document.querySelector(".label");

const enabledDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};
console.log();
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
  enabledDarkMode();
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  // document.body.classList.toggle("darkmode");
  if (darkMode !== "enabled") {
    enabledDarkMode();
    swicht.classList.add("active");
  } else {
    disableDarkMode();
    swicht.classList.remove("active");
  }
});
