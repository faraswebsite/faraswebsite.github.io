document.getElementById("homeBtn").addEventListener("click", function () {
    window.location.href = "/home.html";
  });
  
  document.getElementById("contactBtn").addEventListener("click", function () {
    window.location.href = "/lessons.html";
  });
  
  document.getElementById("testiBtn").addEventListener("click", function () {
    window.location.href = "/teams.html";
  });
  
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