document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.onload = function(){
            lazyImage.classList.add("loaded");
            lazyImage.classList.remove("lazy");
          };
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          };
          lazyImage.src = lazyImage.dataset.src;
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    lazyImages.forEach(function(lazyImage) {
      lazyImage.onload = function(){
        lazyImage.classList.add("loaded");
        lazyImage.classList.remove("lazy");
      };
      if (lazyImage.dataset.srcset) {
        lazyImage.srcset = lazyImage.dataset.srcset;
      };
      lazyImage.src = lazyImage.dataset.src;
    });
  }
});
