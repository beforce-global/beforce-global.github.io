document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
  });

  const colorSelectors = document.querySelectorAll(".color-circle");

  colorSelectors.forEach(function (circle) {
    circle.addEventListener("click", function () {
      const newImgSrc = this.getAttribute("data-img");

      // Find the closest image inside the same product container
      const productContainer = this.closest(".menu-item");
      const productImg = productContainer.querySelector(".product-img");

      if (productImg && newImgSrc) {
        productImg.src = newImgSrc;
      }
    });
  });

  const swiper = new Swiper(".catalog-slider", {
    loop: true,
    autoplay: {
      delay: 2000,
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
