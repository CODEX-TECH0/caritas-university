
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Slide up (hide)
  preloader.style.transform = "translateY(-100%)";

  // Remove from DOM after animation
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000); // Match the CSS transition time
});

