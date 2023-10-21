
  document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("toggle-switch");
    const body = document.body;
  
    function toggleTheme() {
      const isDarkMode = themeSwitch.checked;
      body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  
    const savedTheme = localStorage.getItem("theme");
    themeSwitch.checked = savedTheme === "dark";
    toggleTheme();
  
    themeSwitch.addEventListener("change", toggleTheme);
  });