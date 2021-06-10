const darkModeToggle = document.querySelector("#dark-mode");
const enabledDarkMode = () => {
  document.body.classList.add("darkmode");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
};

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
