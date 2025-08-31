// Get a reference to the HTML element and the toggle button
const htmlElement = document.documentElement;
const themeLight = document.getElementById("light");
const themeDark = document.getElementById("dark");
const themeVGAGreen = document.getElementById("VGAGreen");
const themeBubblegumGirlyPop = document.getElementById("bubblegumGirlyPop");

// Get the user's saved theme from localStorage, or default to system preference
// const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
const gridBoxes = document.getElementsByClassName("gridBox");

// Apply the initial theme on page load
htmlElement.setAttribute("data-theme", initialTheme);

// Add a click event listener to the button
themeLight.addEventListener("click", () => {
  setTheme("light");
});

themeDark.addEventListener("click", () => {
  setTheme("dark");
});

themeVGAGreen.addEventListener("click", () => {
  setTheme("VGAGreen");
});

themeBubblegumGirlyPop.addEventListener("click", () => {
  setTheme("bubblegumGirlyPop");
});

function setTheme(theme){
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  setGreyscale(theme);
}

function setGreyscale(theme){

  for (var i = 0; i < gridBoxes.length; i++) {
    var element = gridBoxes[i];
    switch (theme) {
      case "light":
        element.style.filter = "grayscale(100%)";
        break;
      case "dark":
        element.style.filter = "grayscale(100%)";
        break;
      case "VGAGreen":
        element.style.filter = "sepia(100%) hue-rotate(75deg)";
        break;
      case "bubblegumGirlyPop":
        element.style.filter = "sepia(100%) hue-rotate(150deg)";
        break;
      default:
        break;
    }
  }
}