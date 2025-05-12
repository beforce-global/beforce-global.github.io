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
});
