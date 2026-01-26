/* ============================================
   EBEN1 MTB THEME - JavaScript
   ============================================
   Minimal, no-framework JS for direct control.
   Edit this file directly.
   ============================================ */

(function() {
  'use strict';

  /* ----- DOM Ready ----- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileMenu();
    initProductGallery();
    initQuantityInputs();
  }


  /* ----- Mobile Menu ----- */
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.header-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }


  /* ----- Product Gallery ----- */
  function initProductGallery() {
    const thumbnails = document.querySelectorAll('.gallery-thumbnails .thumbnail');
    const images = document.querySelectorAll('.gallery-image');

    if (!thumbnails.length) return;

    thumbnails.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        const index = this.dataset.index;

        // Update active states
        thumbnails.forEach(t => t.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));

        this.classList.add('active');
        const activeImage = document.querySelector('.gallery-image[data-index="' + index + '"]');
        if (activeImage) {
          activeImage.classList.add('active');
        }
      });
    });
  }


  /* ----- Quantity Inputs ----- */
  function initQuantityInputs() {
    const inputs = document.querySelectorAll('.quantity-selector input, .cart-item-quantity input');

    inputs.forEach(function(input) {
      input.addEventListener('change', function() {
        if (this.value < 0) this.value = 0;
      });
    });
  }


  /* ----- Add to Cart (AJAX optional) ----- */
  // Uncomment to enable AJAX add to cart
  /*
  function initAjaxCart() {
    const forms = document.querySelectorAll('form[action="/cart/add"]');

    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Update cart count
          const cartCount = document.querySelector('.cart-count');
          if (cartCount) {
            fetch('/cart.js')
              .then(r => r.json())
              .then(cart => {
                cartCount.textContent = cart.item_count;
              });
          }
          // Show confirmation (customize as needed)
          alert('Added to cart!');
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    });
  }
  */

})();
