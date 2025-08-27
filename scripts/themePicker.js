// Get a reference to the HTML element and the toggle button
const htmlElement = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

// Get the user's saved theme from localStorage, or default to system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

// Apply the initial theme on page load
htmlElement.setAttribute("data-theme", initialTheme);

// Add a click event listener to the button
themeToggle.addEventListener("click", () => {
  let currentTheme = htmlElement.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);

  // Save the new theme to localStorage
  localStorage.setItem("theme", newTheme);

});