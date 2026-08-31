// main.js
document.addEventListener('DOMContentLoaded', () => {

  var currentYear = new Date().getFullYear();

  document.querySelectorAll(".catalog-year").forEach(function (el) {
    el.textContent = currentYear;
  });

  var copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    copyrightEl.innerHTML = currentYear + " © Copyright <strong><span>BEFORCE</span></strong>. Todos los derechos reservados. Argentina, Buenos Aires.";
  }

  });