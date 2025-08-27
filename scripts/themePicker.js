// Get a reference to the HTML element and the toggle button
const htmlElement = document.documentElement;
const themeLight = document.getElementById("light");
const themeDark = document.getElementById("dark");
const themeVGAGreen = document.getElementById("VGAGreen");

// Get the user's saved theme from localStorage, or default to system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

// Apply the initial theme on page load
htmlElement.setAttribute("data-theme", initialTheme);

// Add a click event listener to the button
themeLight.addEventListener("click", () => {
  // let currentTheme = htmlElement.getAttribute("data-theme");
  // let newTheme = currentTheme === "dark" ? "light" : "dark";

  const newTheme = "light";
  // Set the theme and save the new theme to localStorage
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

themeDark.addEventListener("click", () => {
  const newTheme = "dark";
  // Set the theme and save the new theme to localStorage
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

themeVGAGreen.addEventListener("click", () => {
  const newTheme = "VGAGreen";
  // Set the theme and save the new theme to localStorage
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});