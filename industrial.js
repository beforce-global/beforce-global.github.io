document.addEventListener("DOMContentLoaded", function () {
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
  });