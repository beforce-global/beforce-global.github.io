// nav.js — shared header/nav behaviour for industrial.html, pharma.html, catalog.html
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll(".catalog-year").forEach((el) => {
    el.textContent = currentYear;
  });

  const body = document.body;
  const toggle = document.querySelector(".mobile-nav-toggle");
  const navmenu = document.getElementById("navmenu");

  if (toggle && navmenu) {
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("mobile-nav-active");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navmenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("mobile-nav-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const onScroll = () => {
    body.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
