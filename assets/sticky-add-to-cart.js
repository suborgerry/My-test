document.addEventListener('DOMContentLoaded', () => {
    const stickyBar = document.querySelector('[data-product-sticky]');
    if (!stickyBar) return;
  
    const productMedia = document.querySelector('.product__media-wrapper');
    const variantSelects = stickyBar.querySelectorAll('select');
    const variantInput = stickyBar.querySelector('[data-sticky-variant-input]');
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyBar.classList.toggle('hidden', entry.isIntersecting);
      },
      { rootMargin: '-100px 0px 0px 0px' }
    );
  
    if (productMedia) observer.observe(productMedia);
  
    // Variant syncing
    variantSelects.forEach(select => {
      select.addEventListener('change', () => {
        const selectedOptions = Array.from(variantSelects).map(s => s.value);
        const matchingVariant = window?.variants?.find(v =>
          v.options.every((opt, i) => opt === selectedOptions[i])
        );
  
        if (matchingVariant) {
          variantInput.value = matchingVariant.id;
        }
      });
    });
  
    // Preload variant data
    if (!window.variants) {
      fetch(`${window.location.pathname}.js`)
        .then(res => res.json())
        .then(data => {
          window.variants = data.variants;
        });
    }
  });
  