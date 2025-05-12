// main.js
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".catalog-slider", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    allowTouchMove: false, // desactiva swipe manual
  });

  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
