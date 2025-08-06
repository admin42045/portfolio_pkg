const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  } else {
    // Default theme
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
